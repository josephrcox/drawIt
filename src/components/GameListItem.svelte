<script lang="ts">
	import { getDrawingsForGame } from '../lib/Firebase';
	import { allUsers, currentGame } from '../store';
	import type { Game } from '../types';
	// @ts-ignore
	import UserRow from './UserRow.svelte';

	export let game: Game | null = null;
	export let currentUserName: string = '';
	export let user: string = '';
	export let coins: number | null = null;
	export let isNewGame: boolean = false;
	export let onClick: (() => void) | null = null;
	export let navigate: ((page: string) => void) | null = null;
	export let drawingsCount: number = 0;
	export let disableClick: boolean = false;

	async function handleClick() {
		if (disableClick && game && navigate) {
			// Get latest drawing for this game that has guessed: false
			const latestDrawing = await getDrawingsForGame(game.id);
			if (latestDrawing == null || latestDrawing[0] === null) return;
			if (
				latestDrawing[0].artist === currentUserName &&
				latestDrawing[0].guessedBy === ''
			) {
				$currentGame = game;
				navigate('home');
			}
		}
		if (isNewGame && onClick) {
			onClick();
		} else if (game && navigate) {
			console.log('Setting current game and navigating:', game.id);
			$currentGame = game;
			navigate('home');
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="cursor-pointer py-1 rounded-lg transition-colors w-full mb-2 flex flex-col gap-2 items-center justify-between"
	class:bg-primary-10={!isNewGame}
	class:bg-secondary-10={isNewGame}
>
	{#if isNewGame}
		<div class="flex flex-row text-start w-full">
			<UserRow name={user} {coins} onClick={handleClick} />
		</div>
		<!-- <button
			class="bg-black text-white rounded-md px-3 py-1 font-bold ml-2"
			style="font-size:1rem;"
			tabindex="-1">Start game</button
		> -->
	{:else if game}
		{#each game.users.filter((u) => u !== currentUserName) as u}
			<div class="w-full flex flex-col items-center justify-center gap-0.5">
				{#if $allUsers[u]}
					<UserRow
						name={u}
						coins={$allUsers[u].coins}
						onClick={handleClick}
						subtitle={`${drawingsCount} drawing${drawingsCount === 1 ? '' : 's'}`}
					/>
				{:else}
					<span class="font-bold text-black">{u}</span>
				{/if}
			</div>
		{/each}
	{/if}
</div>
