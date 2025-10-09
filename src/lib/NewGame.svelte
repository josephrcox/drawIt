<script lang="ts">
	import {
		currentUser,
		currentGame,
		currentUserGames,
		allGames,
	} from '../store';
	import { createGame, getUsers, initializeUserSession } from './Firebase';
	import type { User } from '../types';
	// @ts-ignore
	import Userrow from '../components/UserRow.svelte';
	import { onMount } from 'svelte';

	let userSearchQuery: string = '';
	let startNewGameUsers: User[] = [];
	let searchTimeout: ReturnType<typeof setTimeout>;
	let isLoading = true;
	let isCreatingGame = false;
	export let navigate: ((page: string) => void) | undefined;

	// Helper to get full game objects from IDs
	$: userGames = $currentUserGames.map((id) => $allGames[id]).filter(Boolean);

	function searchUsers() {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(async () => {
			isLoading = true;
			// Always search, even with empty string
			startNewGameUsers = await getUsers(userSearchQuery);
			isLoading = false;
		}, 300); // 300ms debounce
	}

	onMount(async () => {
		isLoading = true;
		await initializeUserSession();
		startNewGameUsers = await getUsers('');
		isLoading = false;
	});

	async function handleCreateGame(user: User) {
		if (!$currentUser || isCreatingGame) return;

		isCreatingGame = true;
		try {
			$currentGame = await createGame([$currentUser.name, user.name]);
		} catch (error) {
			console.error('Error creating game:', error);
		} finally {
			isCreatingGame = false;
		}
	}
</script>

<div class="flex flex-col gap-4 p-4 pt-24">
	<div class="flex flex-col gap-2">
		<h2 class="text-xl font-bold text-white">Challenge a friend</h2>
		<p class="text-xs text-white">Tap on a user to start a new game</p>
	</div>

	<!-- Search Input -->
	<div class="relative">
		<input
			type="text"
			placeholder="Search users..."
			class="input input-bordered w-full bg-white text-black border-primary rounded-xl text-base px-4 py-3 shadow-sm"
			autocorrect="off"
			on:input={searchUsers}
			bind:value={userSearchQuery}
		/>
		{#if userSearchQuery}
			<button
				class="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted hover:text-primary p-2"
				on:click={() => {
					userSearchQuery = '';
					searchUsers();
				}}
			>
				×
			</button>
		{/if}
	</div>

	<!-- User List -->
	<div class="flex flex-col w-full gap-2 pt-2 overflow-y-auto">
		{#if isLoading}
			<div class="flex items-center justify-center py-8">
				<div
					class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
				></div>
			</div>
		{:else if startNewGameUsers.length === 0}
			<div class="text-center py-8 text-black/60">No users found</div>
		{:else}
			{#each startNewGameUsers as user}
				{#if $currentUser && $currentUser.name !== user.name}
					<Userrow
						name={user.name}
						coins={user.coins}
						showAvatar={true}
						subtitle={userGames.filter((game) => game.users.includes(user.name))
							.length > 0
							? `${userGames.filter((game) => game.users.includes(user.name)).length} game${userGames.filter((game) => game.users.includes(user.name)).length > 1 ? 's' : ''}`
							: null}
						onClick={() => handleCreateGame(user)}
					/>
				{/if}
			{/each}
		{/if}
	</div>
</div>
