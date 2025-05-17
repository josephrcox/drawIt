<script lang="ts">
	import { currentGame, currentUser, isDrawing } from '../store';
	import type { Drawing, WordOptions } from '../types';
	import {
		getCurrentDrawing,
		submitGuess,
		getRandomWords,
		selectWord,
		getHint,
		getSuperHint,
		ensureDrawingHintFields,
		purchaseHint,
		purchaseSuperHint,
	} from './utils';
	import DrawingCanvas from './DrawingCanvas.svelte';
	import { updateGame, addcoins } from './Firebase';

	let currentDrawing: Drawing | null = null;
	let guess: string = '';
	let hintShown = false;
	let superHintShown = false;

	let drawingDraft: Drawing | null = null;
	let submittingDraft = false;
	let canvas: DrawingCanvas;
	let refreshTrigger = 0;
	let wordsPromise: Promise<WordOptions[]>;
	let isRefreshing = false;
	let isTheArtist = false;
	let purchasingHint = false;
	let purchasingSuperHint = false;

	// Use reactive statement to keep currentDrawing updated
	$: if ($currentGame && $currentUser) {
		const drawing = getCurrentDrawing($currentGame, $currentUser.name);
		currentDrawing = drawing ? ensureDrawingHintFields(drawing) : null;
		isTheArtist = $currentUser.name === currentDrawing?.artist;
	}

	// Use reactive statement to refresh words
	$: wordsPromise = getRandomWords(4);

	// Update isDrawing state based on drawingDraft
	$: if (drawingDraft) {
		$isDrawing = true;
	} else {
		$isDrawing = false;
	}

	// Handle guess submission with optimistic UI
	async function handleGuessSubmission(guessText: string) {
		if (!$currentGame || !$currentUser || !currentDrawing || !guessText.trim())
			return;

		// Clear input field immediately
		guess = '';

		// Check if guess already exists
		if (currentDrawing.guesses.includes(guessText)) return;

		// Optimistic UI update - add guess locally first
		const updatedDrawing = { ...currentDrawing };
		updatedDrawing.guesses.push(guessText);

		// Update local game state
		const gameSnapshot = { ...$currentGame };
		const drawingIndex = gameSnapshot.drawings.findIndex(
			(d) => !d.guessed && d.artist === updatedDrawing.artist,
		);

		if (drawingIndex >= 0) {
			gameSnapshot.drawings[drawingIndex] = updatedDrawing;
			$currentGame = gameSnapshot;
		}

		// Then perform the actual backend update
		submitGuess($currentGame, $currentUser, guessText).catch((error) => {
			console.error('Error submitting guess:', error);
			// Revert to the original state if there's an error
			// This would require a more complex implementation
		});
	}

	async function handleHint() {
		if (
			!$currentUser ||
			!currentDrawing ||
			!$currentGame ||
			currentDrawing.hintPurchased ||
			$currentUser.coins < 5 ||
			purchasingHint
		)
			return;
		purchasingHint = true;
		const success = await purchaseHint(
			$currentGame,
			currentDrawing,
			$currentUser,
		);
		if (success) {
			await addcoins($currentUser, -5);
		}
		purchasingHint = false;
	}

	async function handleSuperHint() {
		if (
			!$currentUser ||
			!currentDrawing ||
			!$currentGame ||
			!currentDrawing.hintPurchased ||
			$currentUser.coins < 10 ||
			purchasingSuperHint
		)
			return;
		purchasingSuperHint = true;
		const success = await purchaseSuperHint(
			$currentGame,
			currentDrawing,
			$currentUser,
		);
		if (success) {
			await addcoins($currentUser, -10);
		}
		purchasingSuperHint = false;
	}
</script>

<div class="rounded-lg p-9 bg-background flex flex-col justify-center">
	{#if $currentGame && $currentUser && currentDrawing}
		<div class="flex flex-col items-center gap-6">
			<!-- Drawing Display -->
			<div
				class="bg-white/90 p-2 rounded-lg w-full max-w-[min(90vw,300px)] aspect-square flex items-center justify-center mx-auto border-2 border-primary"
			>
				{#if currentDrawing.data && currentDrawing.data.length > 10}
					<img
						src={`${currentDrawing.data}`}
						class="w-full h-full object-contain"
						alt="Current drawing"
					/>
				{:else}
					<span class="text-accent">No drawing yet</span>
				{/if}
			</div>

			<!-- Guesses Section -->
			<div class="w-full max-w-[min(90vw,400px)]">
				<h2 class="text-xl font-bold mb-2 text-primary">What's this?</h2>
				<p class="mb-4">
					{#if isTheArtist}
						You drew this. The secret word is <span
							class="font-bold text-secondary">{currentDrawing.secretWord}</span
						>
					{:else}
						Drawn by <span class="font-bold text-secondary"
							>{currentDrawing.artist}</span
						>
						{#if currentDrawing.hintPurchased || currentDrawing.superHintPurchased}
							<ul class="pl-4 mt-1 space-y-1">
								{#if currentDrawing.hintPurchased}
									<li class="text-xs list-disc text-accent/70">
										{getHint(currentDrawing)}
									</li>
								{/if}
								{#if currentDrawing.superHintPurchased}
									<li class="text-xs list-disc text-accent/70">
										{getSuperHint(currentDrawing)}
									</li>
								{/if}
							</ul>
						{/if}
					{/if}
				</p>
				<div class="flex flex-wrap gap-2 w-full overflow-y-auto">
					{#each currentDrawing.guesses as guess}
						{#if guess}
							<div
								class="bg-accent-light px-3 py-1 rounded-full text-black/60 border border-accent"
							>
								{guess}
							</div>
						{/if}
					{/each}
				</div>
			</div>

			{#if !currentDrawing.guessed && $currentUser.name !== currentDrawing.artist}
				<div class="flex flex-col gap-2 w-full max-w-[min(90vw,400px)]">
					<div class="flex gap-2">
						{#if !currentDrawing.hintPurchased}
							<button
								class="btn btn-outline flex-1 {$currentUser.coins < 5 ||
								purchasingHint
									? 'opacity-40 btn-error cursor-not-allowed'
									: ''}"
								on:click={handleHint}
								disabled={$currentUser.coins < 5 || purchasingHint}
							>
								{purchasingHint ? 'Purchasing...' : 'Hint (5 '}<img
									src="/drawit/public/coin.png"
									class="w-4 h-4 inline"
								/>{purchasingHint ? '' : ')'}
							</button>
						{:else if !currentDrawing.superHintPurchased}
							<button
								class="btn btn-outline flex-1 {$currentUser.coins < 10 ||
								purchasingSuperHint
									? 'opacity-40 btn-error cursor-not-allowed'
									: ''}"
								on:click={handleSuperHint}
								disabled={$currentUser.coins < 10 || purchasingSuperHint}
							>
								{purchasingSuperHint ? 'Purchasing...' : 'Super Hint (10 '}<img
									src="/drawit/public/coin.png"
									class="w-4 h-4 inline"
								/>{purchasingSuperHint ? '' : ')'}
							</button>
						{/if}
					</div>
					<div class="flex gap-2">
						<input
							type="text"
							placeholder="Type your guess..."
							class="input input-bordered flex-1 bg-white text-black border-primary"
							bind:value={guess}
							on:keydown={(e) => {
								if (e.key === 'Enter' && guess.length > 0) {
									handleGuessSubmission(guess);
								}
							}}
						/>
						<button
							class="btn btn-primary"
							on:click={() => handleGuessSubmission(guess)}
						>
							Guess
						</button>
					</div>
				</div>
			{/if}
		</div>
	{:else if $currentUser && $currentGame}
		<div class="flex flex-col items-center gap-6">
			{#if !drawingDraft}
				<div class="w-full flex flex-col items-center">
					<h2 class="text-xl font-bold mb-2 text-primary">
						Pick a word to draw
					</h2>
					<p
						class="mb-6 text-accent italic tooltip flex flex-row gap-2 text-xs"
					>
						<span>
							You get coins as the artist, and <span class="font-bold"
								>{$currentGame.users.filter(
									(u) => u !== $currentUser.name,
								)[0]}</span
							> gets coins for guessing correctly!
						</span>
					</p>
					<div class="flex flex-col gap-4">
						{#await wordsPromise then words}
							{#each words as word}
								<button
									class="btn btn-secondary flex flex-row items-center justify-between w-72 border border-secondary"
									on:click={() => {
										if ($currentGame) {
											drawingDraft = {
												secretWord: word.secretWord,
												coins: word.coins,
												data: '',
												artist: $currentUser.name,
												guessed: false,
												guesses: [],
												createdAt: new Date(),
												guessedBy: '',
												hintPurchased: false,
												superHintPurchased: false,
											};
										}
									}}
								>
									{word.secretWord.toUpperCase()}
									<!-- a star emoji for each point number -->
									<span class="flex items-center gap-1">
										{#each Array(word.coins) as _}
											<img src="/drawit/public/coin.gif" class="w-4 h-4" />
										{/each}
									</span>
								</button>
							{/each}
							<button
								class="btn btn-outline w-72 flex flex-row items-center justify-center gap-2
                                
                                {!$currentUser ||
								$currentUser.coins < 5 ||
								isRefreshing
									? 'opacity-20 cursor-not-allowed'
									: ''}
                                "
								on:click={async () => {
									if (
										$currentUser &&
										$currentUser.coins >= 5 &&
										!isRefreshing
									) {
										isRefreshing = true;
										try {
											await addcoins($currentUser, -5);
											// Force a re-render of the word list by incrementing the trigger
											refreshTrigger++;
											wordsPromise = getRandomWords(4);
										} finally {
											// Add a small delay before allowing another refresh
											setTimeout(() => {
												isRefreshing = false;
											}, 1000);
										}
									}
								}}
							>
								<span>{isRefreshing ? 'Refreshing...' : 'Refresh Words'}</span>
								{#if !isRefreshing}
									<span class="text-xs text-black/60"
										>(5 <img
											src="/drawit/public/coin.gif"
											class="w-4 h-4 inline"
										/>)</span
									>
								{/if}
							</button>
						{/await}
					</div>
				</div>
			{:else}
				<div class="w-full h-screen">
					<h2 class="text-xl mb-4 text-black/60">
						Ok, let's draw <span class="font-bold text-black"
							>{drawingDraft.secretWord.toUpperCase()}</span
						>
					</h2>
					<div class="w-full aspect-square max-w-[min(90vw,400px)] mx-auto">
						<DrawingCanvas bind:this={canvas} />
						<div class="flex flex-row gap-2 mt-4 w-full">
							<button
								class="btn btn-outline flex-1"
								on:click={() => canvas.clearCanvas()}
							>
								Clear
							</button>
							<button
								class={submittingDraft
									? 'btn-disabled flex-1'
									: 'btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary'}
								on:click={async () => {
									if (drawingDraft && $currentGame && !submittingDraft) {
										submittingDraft = true;
										const imageData = canvas.getImageData();
										const newDrawing = { ...drawingDraft, data: imageData };
										$currentGame.drawings.push(newDrawing);
										await updateGame($currentGame);
										drawingDraft = null;
										$currentGame = null; // Reset game state to return to homepage
										submittingDraft = false;
									}
								}}
							>
								<span
									>{submittingDraft
										? 'Posting, great work...'
										: 'Submit Drawing'}</span
								>
							</button>
						</div>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
