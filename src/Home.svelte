<!-- Home page contents -->

<script lang="ts">
	import { onMount } from 'svelte';
	import {
		currentGame,
		currentUser,
		currentUserGames,
		allUsers,
		gamesLoaded,
		allGames,
	} from './store';
	import {
		createGame,
		createUser,
		getUser,
		getUsers,
		loadGames,
		loadUsers,
		checkDailyReward,
	} from './lib/Firebase';
	import { getGameState } from './lib/utils';
	import GameSection from './components/GameSection.svelte';
	import Logo from './components/Logo.svelte';

	let loading = true;
	let userName: string | null = null;
	let draftUserName: string = '';
	let inputError: string | null = null;

	export let navigate: (page: string) => void;

	$: userName = $currentUser ? $currentUser.name : null;

	// Helper to get full game objects from IDs
	$: userGames = $currentUserGames.map((id) => $allGames[id]).filter(Boolean);

	async function createUserAndSave(name: string) {
		if (name.trim() && /^[a-zA-Z0-9]+$/.test(name)) {
			loading = true;
			await createUser(name.trim());
			loading = false;
			window.location.reload();
		} else if (name.trim()) {
			inputError = 'Username can only contain letters and numbers';
		}
	}

	function validateInput(e: KeyboardEvent) {
		// Prevent input of non-alphanumeric characters
		if (
			!/^[a-zA-Z0-9]$/.test(e.key) &&
			!['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
		) {
			e.preventDefault();
		}

		// Clear error when user is typing
		if (inputError) inputError = null;

		if (e.key === 'Enter' && draftUserName.trim()) {
			createUserAndSave(draftUserName);
		}
	}

	onMount(async () => {
		loading = true;
		$gamesLoaded = false;

		// Always fetch fresh user data from DB if we have a name
		if ($currentUser?.name) {
			const dbUser = await getUser($currentUser.name);

			if (!dbUser) {
				// If user doesn't exist anymore, clear the store
				$currentUser = null;
			} else {
				// Normalize user fields
				const normalizedUser = {
					...dbUser,
					upgrades: Array.isArray(dbUser.upgrades) ? dbUser.upgrades : [],
					dailyRewards: Array.isArray(dbUser.dailyRewards)
						? dbUser.dailyRewards
						: [],
				};

				// Check for daily reward
				await checkDailyReward(normalizedUser);

				// Load games and cache other users in those games
				const games = await loadGames(normalizedUser.name);
				const otherUsers = games.flatMap((game) =>
					game.users.filter((name) => name !== normalizedUser.name),
				);
				await loadUsers(otherUsers);
				$gamesLoaded = true;

				// Only now set $currentUser to the normalized DB value
				$currentUser = normalizedUser;
			}
		}
		loading = false;
	});
</script>

<div
	class="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background-gradient-start to-background-gradient-end text-black"
>
	<Logo {navigate} />
	{#if loading || ($currentUser && !$gamesLoaded)}
		<div class="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
			<div class="text-primary text-lg font-semibold">Loading...</div>
		</div>
	{:else if $currentUser}
		{#if userGames.length !== 0}
			<div class="flex flex-col gap-6 w-full max-w-xs mx-auto">
				{#if userName}
					{#if userGames.filter( (game) => ['draw', 'guess'].includes(getGameState(game, userName)), ).length > 0}
						<div class="rounded-2xl bg-white/90 shadow-md p-4">
							<div
								class="text-center text-2xl font-bold mb-2 animate-gradient-text"
							>
								Your Turn!
							</div>
							{#each userGames.filter( (game) => ['draw', 'guess'].includes(getGameState(game, userName)), ) as game}
								<GameSection
									title=""
									games={[game]}
									currentUserName={userName}
									{navigate}
								/>
							{/each}
						</div>
					{/if}

					{#if userGames.filter((game) => getGameState(game, userName) === 'waiting').length > 0}
						<div class="rounded-2xl bg-white/60 shadow-sm p-4 opacity-60">
							<div
								class="text-center text-secondary/60 font-semibold text-xs mb-2"
							>
								Waiting
							</div>
							{#each userGames.filter((game) => getGameState(game, userName) === 'waiting') as game}
								<GameSection
									title=""
									games={[game]}
									currentUserName={userName}
									{navigate}
								/>
							{/each}
						</div>
					{/if}
				{/if}
			</div>
		{:else}
			<div class="text-center text-gray-500 mt-8">
				No games yet. Start a new one!
			</div>
		{/if}
	{:else}
		<div class="flex flex-col items-center gap-4 w-full max-w-xs mx-auto mt-8">
			<span class="text-2xl font-bold text-primary">Who are you?</span>
			<input
				type="text"
				placeholder="Your name"
				class="input input-bordered w-full bg-white text-black border-primary rounded-xl text-lg px-4 py-2 shadow"
				autocapitalize="off"
				autocorrect="off"
				maxlength="14"
				bind:value={draftUserName}
			/>
			<button
				class="btn btn-primary text-white w-full rounded-xl text-lg py-2 shadow"
				disabled={!draftUserName?.trim()}
				on:click={() => createUserAndSave(draftUserName)}
			>
				get drawin'
			</button>
		</div>
	{/if}
</div>

<style>
	/* Add any custom styles here if needed */
	.animate-gradient-text {
		background: linear-gradient(to right, #c7b6f7, #f7e6ff, #c7b6f7);
		background-size: 200% auto;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		animation: gradient 5s linear infinite;
	}

	@keyframes gradient {
		to {
			background-position: 200% center;
		}
	}
</style>
