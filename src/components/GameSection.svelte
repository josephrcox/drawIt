<script lang="ts">
	import type { Game } from '../types';
	import GameListItem from './GameListItem.svelte';

	export let title: string;
	export let games: Game[];
	export let currentUserName: string;
	export let titleClass: string = 'text-sm font-semibold text-primary';
	export let navigate: ((page: string) => void) | null = null;
	export let drawingsCount: number = 0;
	export let disableClick: boolean = false;
</script>

<div class="flex flex-col gap-0">
	<h3 class={titleClass}>{title}</h3>
	{#each games as game}
		<GameListItem
			{game}
			{currentUserName}
			{navigate}
			{drawingsCount}
			{disableClick}
		/>
	{/each}
</div>
