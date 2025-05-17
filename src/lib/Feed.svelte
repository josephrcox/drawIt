<script lang="ts">
	import { onMount } from 'svelte';
	import { getRecentDrawings } from './Firebase';
	import type { Drawing } from '../types';
	import { getHint, getSuperHint } from './utils';

	let drawings: Drawing[] = [];
	let loading = true;

	onMount(async () => {
		console.log('Feed mounted');
		drawings = await getRecentDrawings();
		console.log('Drawings loaded', drawings);
		loading = false;
	});
</script>

<div class="p-4">
	{#if loading}
		<div class="flex justify-center items-center h-40">
			<span class="text-accent">Loading drawings...</span>
		</div>
	{:else}
		<div class="flex flex-col gap-4">
			{#each drawings as drawing}
				{#if drawing.data && drawing.data.length > 10}
					<div
						class="bg-white/90 p-1 relative rounded-lg w-full max-w-[min(90vw,400px)] flex flex-col items-center justify-center mx-auto border-2 border-primary"
					>
						<div class="flex flex-row gap-1 absolute top-2 right-2">
							{#each Array(drawing.coins) as _}
								<img src="/drawit/public/coin.png" class="w-4 h-4" />
							{/each}
						</div>
						<img
							src={`${drawing.data}`}
							class="w-full h-full object-contain"
							alt="Drawing"
						/>

						<p class="text-lg text-center py-2 align-middle items-center">
							{#if drawing.guessed}
								<span class="font-bold text-primary">
									{drawing.secretWord}
								</span>
							{:else}
								<span class="font-bold text-primary"> ? </span>
							{/if}
							by
							<span class="font-semibold">{drawing.artist} </span>
						</p>
						<p
							class="text-[0.8rem] text-center align-middle items-center w-3/4"
						>
							{#if drawing.guesses.length > 0}
								<span class="font-semibold">
									{drawing.guessedBy}
								</span>
								{#if !drawing.guessed}
									has
								{/if}
								guessed:
								{#each drawing.guesses as guess, i}
									<span class="italic"
										>{guess}{i < drawing.guesses.length - 1 ? ', ' : ''}</span
									>
								{/each}
							{:else}
								<span class="italic">
									<span class="font-semibold">{drawing.guessedBy}</span>
									is thinking...
								</span>
							{/if}
						</p>
						{#if drawing.hintPurchased}
							<p
								class="text-[0.8rem] text-secondary flex flex-row py-2 text-center align-middle items-center"
							>
								{drawing.hintPurchased
									? `${drawing.guessedBy} used a Hint`
									: ''}{drawing.superHintPurchased
									? `... AND a SuperHint!`
									: ''}
							</p>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
