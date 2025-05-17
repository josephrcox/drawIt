<script lang="ts">
	import { allUsers, currentGame } from '../store';
	import type { Game } from '../types';
	import Userrow from './Userrow.svelte';

	export let game: Game | null = null;
	export let currentUserName: string = '';
	export let user: string = '';
	export let coins: number | null = null;
	export let isNewGame: boolean = false;
	export let onClick: (() => void) | null = null;
	export let navigate: ((page: string) => void) | null = null;

	function handleClick() {
		if (isNewGame && onClick) {
			onClick();
		} else if (game && navigate) {
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
			<Userrow name={user} {coins} onClick={handleClick} />
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
					<Userrow
						name={u}
						coins={$allUsers[u].coins}
						subtitle={`${game.drawings.length} drawing${game.drawings.length === 1 ? '' : 's'}`}
						onClick={handleClick}
					/>
				{:else}
					<span class="font-bold text-black">{u}</span>
				{/if}
			</div>
		{/each}
	{/if}
</div>
