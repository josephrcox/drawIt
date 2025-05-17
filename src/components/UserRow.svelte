<script lang="ts">
	export let name: string;
	export let coins: number | null = null;
	export let showAvatar: boolean = false;
	export let subtitle: string | null = null;
	export let onClick: (() => void) | null = null;
</script>

<button
	class="flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors active:bg-gray-50"
	class:cursor-pointer={onClick !== null}
	class:cursor-default={onClick === null}
	on:click={() => onClick?.()}
	disabled={onClick === null}
>
	<div class="flex items-center gap-3">
		{#if showAvatar}
			<div
				class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold"
			>
				{name[0].toUpperCase()}
			</div>
		{/if}
		<div class="flex flex-col items-start">
			<span class="font-medium text-black">{name}</span>
			<div class="flex items-center gap-1 text-sm text-black/60">
				{#if coins !== null}
					<span>{coins}</span>
					<img src="/drawit/public/coin.png" class="w-4 h-4" alt="coins" />
				{/if}
				{#if subtitle}
					· <span class="text-xs text-black/60">{subtitle}</span>
				{/if}
			</div>
		</div>
	</div>
	{#if onClick}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-gray-400"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
</button>
