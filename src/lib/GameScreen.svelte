<script lang="ts">
	import { currentGame, currentUser, isDrawing, allGames } from '../store';
	import {
		type Drawing,
		type WordOptions,
		UserUpgrade,
		type Game,
	} from '../types';
	import {
		getCurrentDrawing as getLocalCurrentDrawing,
		submitGuess,
		getRandomWords,
		selectWord as prepareDrawingFromWord,
		getHint,
		getSuperHint,
		ensureDrawingHintFields,
		purchaseHint,
		purchaseSuperHint,
		getGameState,
	} from './utils';
	import DrawingCanvas from './DrawingCanvas.svelte';
	import {
		updateGame,
		addcoins,
		getDrawingsForGame,
		updateDrawing,
		sha256,
		createNewDrawing,
	} from './Firebase';
	import coinPng from '../assets/coin.png';
	import { onMount, onDestroy } from 'svelte';
	import type { Unsubscribe } from 'firebase/firestore';

	let gameDrawings: Drawing[] = [];
	let currentDrawingFull: Drawing | null = null;
	let guess = '';

	let drawingDraft: Drawing | null = null;
	let submittingDraft = false;
	let canvas: DrawingCanvas;
	let wordsPromise: Promise<WordOptions[]>;
	let isRefreshingWords = false;
	let isTheArtist = false;
	let purchasingHint = false;
	let purchasingSuperHint = false;
	let unsubscribeFromGame: Unsubscribe | null = null;
	let unsubscribeFromDrawings: Unsubscribe | null = null;
	let initialLoadComplete = false;

	$: gameId = $currentGame?.id;

	export let navigate: (page: string) => void;

	async function fetchAndSetDrawings(id: string) {
		if (!id) {
			gameDrawings = [];
			return;
		}
		gameDrawings = await getDrawingsForGame(id);
		initialLoadComplete = true;
	}

	$: if (gameId) {
		fetchAndSetDrawings(gameId);
	} else {
		gameDrawings = [];
		initialLoadComplete = false;
	}

	$: if (gameDrawings.length > 0 && $currentUser) {
		const localCurrent = getLocalCurrentDrawing(gameDrawings);
		currentDrawingFull = localCurrent
			? ensureDrawingHintFields(localCurrent)
			: null;
		isTheArtist = $currentUser.name === currentDrawingFull?.artist;
	} else {
		currentDrawingFull = null;
		isTheArtist = false;
	}

	$: wordsPromise =
		$currentGame && $currentUser
			? getRandomWords(
					$currentUser?.upgrades?.includes(UserUpgrade.MoreWordOptions) ? 5 : 3,
					$currentGame.id,
				)
			: getRandomWords(
					$currentUser?.upgrades?.includes(UserUpgrade.MoreWordOptions) ? 5 : 3,
				);

	$: $isDrawing = !!drawingDraft;

	// Only allow a-z and A-Z
	function sanitize(input: string): string {
		return input.replace(/[^a-zA-Z]/g, '');
	}

	function validateInput(e: KeyboardEvent) {
		// Prevent input of non-letter characters
		if (
			!/^[a-zA-Z]$/.test(e.key) &&
			!['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
		) {
			e.preventDefault();
		}

		if (e.key === 'Enter' && guess.length > 0) {
			handleGuessSubmission(guess);
		}
	}

	// Prevent paste events
	function handlePaste(e: ClipboardEvent) {
		e.preventDefault();
		const pastedText = e.clipboardData?.getData('text') || '';
		const sanitized = sanitize(pastedText);
		guess = sanitized;
	}

	async function handleGuessSubmission(guessText: string) {
		if (
			!$currentGame ||
			!$currentUser ||
			!currentDrawingFull ||
			!currentDrawingFull.id ||
			!guessText.trim()
		)
			return;

		const originalGuess = guessText;
		guess = '';

		if (currentDrawingFull.guesses?.includes(originalGuess)) return;

		const optimisticDrawing = {
			...currentDrawingFull,
			guesses: [...(currentDrawingFull.guesses || []), originalGuess],
		};
		currentDrawingFull = optimisticDrawing;
		const idx = gameDrawings.findIndex((d) => d.id === optimisticDrawing.id);
		if (idx !== -1) gameDrawings[idx] = optimisticDrawing;

		try {
			const success = await submitGuess(
				$currentGame.id,
				optimisticDrawing,
				$currentUser,
				originalGuess,
			);
			if (success) {
				await fetchAndSetDrawings($currentGame.id);
			}
		} catch (error) {
			console.error('Error submitting guess:', error);
			await fetchAndSetDrawings($currentGame.id);
		}
	}

	async function handleHint() {
		if (
			!$currentUser ||
			!currentDrawingFull ||
			!currentDrawingFull.id ||
			currentDrawingFull.hintPurchased ||
			$currentUser.coins < 5 ||
			purchasingHint
		)
			return;
		purchasingHint = true;
		const success = await purchaseHint(currentDrawingFull.id, $currentUser);
		if (success) {
			await addcoins($currentUser.name, -5);
			currentDrawingFull = { ...currentDrawingFull, hintPurchased: true };
			const idx = gameDrawings.findIndex(
				(d) => d.id === currentDrawingFull?.id,
			);
			if (idx !== -1) gameDrawings[idx] = currentDrawingFull;
		}
		purchasingHint = false;
	}

	async function handleSuperHint() {
		if (
			!$currentUser ||
			!currentDrawingFull ||
			!currentDrawingFull.id ||
			!currentDrawingFull.hintPurchased ||
			currentDrawingFull.superHintPurchased ||
			$currentUser.coins < 10 ||
			purchasingSuperHint
		)
			return;
		purchasingSuperHint = true;
		const success = await purchaseSuperHint(
			currentDrawingFull.id,
			$currentUser,
		);
		if (success) {
			await addcoins($currentUser.name, -10);
			currentDrawingFull = { ...currentDrawingFull, superHintPurchased: true };
			const idx = gameDrawings.findIndex(
				(d) => d.id === currentDrawingFull?.id,
			);
			if (idx !== -1) gameDrawings[idx] = currentDrawingFull;
		}
		purchasingSuperHint = false;
	}

	async function handleWordSelection(word: WordOptions) {
		if ($currentGame && $currentUser) {
			const lastDrawing =
				gameDrawings.length > 0
					? gameDrawings.reduce((a, b) =>
							(a.originalIndex ?? 0) > (b.originalIndex ?? 0) ? a : b,
						)
					: null;
			const nextIndex = lastDrawing ? (lastDrawing.originalIndex ?? 0) + 1 : 0;

			const preparedDrawing = await prepareDrawingFromWord(
				$currentGame.id,
				$currentUser,
				word,
				nextIndex,
			);
			if (preparedDrawing) {
				drawingDraft = preparedDrawing;
			}
		}
	}

	async function handleSubmitDrawing() {
		if (
			!drawingDraft ||
			!drawingDraft.id ||
			!$currentGame ||
			!$currentUser ||
			submittingDraft ||
			!canvas
		)
			return;
		submittingDraft = true;
		try {
			const imageData = canvas.getImageData();
			if (!imageData) throw new Error('No drawing data from canvas');

			const dataHash = await sha256(imageData);

			const finalDrawing: Drawing = {
				...drawingDraft,
				data: imageData,
				dataHash: dataHash,
				createdAt: new Date(),
			};

			const savedDrawing = await createNewDrawing(finalDrawing);

			if (savedDrawing) {
				gameDrawings = [...gameDrawings, savedDrawing];
				drawingDraft = null;
				if ($currentGame?.id) {
					await fetchAndSetDrawings($currentGame.id);
					// Clear the current game and navigate to home
					$currentGame = null;
					navigate('home');
				}
			} else {
				throw new Error('Failed to save drawing to database.');
			}
		} catch (error) {
			console.error('Error submitting drawing:', error);
		} finally {
			submittingDraft = false;
		}
	}

	onMount(() => {});

	onDestroy(() => {
		// if (unsubscribeFromGame) unsubscribeFromGame();
		// if (unsubscribeFromDrawings) unsubscribeFromDrawings();
	});
</script>

<div
	class="rounded-lg p-9 bg-background flex flex-col justify-center h-screen mx-auto"
>
	{#if $currentGame && $currentUser && initialLoadComplete}
		{#if currentDrawingFull}
			<div class="flex flex-col h-full items-center gap-6">
				<div
					class="bg-white/90 p-2 rounded-lg w-full max-w-[min(90vw,300px)] aspect-square flex items-center justify-center mx-auto border-2 border-primary"
				>
					{#if currentDrawingFull.data && currentDrawingFull.data.length > 10}
						<img
							src={`${currentDrawingFull.data}`}
							class="w-full h-full object-contain"
							alt="Current drawing"
						/>
					{:else}
						<span class="text-accent">No drawing yet</span>
					{/if}
				</div>

				<div class="w-full max-w-[min(90vw,400px)]">
					<h2 class="text-xl font-bold mb-2 text-primary">What's this?</h2>
					<p class="mb-4">
						{#if isTheArtist}
							You drew this. The secret word is <span
								class="font-bold text-secondary"
								>{currentDrawingFull.secretWord}</span
							>
						{:else}
							Drawn by <span class="font-bold text-secondary"
								>{currentDrawingFull.artist}</span
							>
							{#if currentDrawingFull.hintPurchased || currentDrawingFull.superHintPurchased}
								<ul class="pl-4 mt-1 space-y-1">
									{#if currentDrawingFull.hintPurchased}
										<li class="text-xs list-disc text-accent/70">
											{getHint(currentDrawingFull)}
										</li>
									{/if}
									{#if currentDrawingFull.superHintPurchased}
										<li class="text-xs list-disc text-accent/70">
											{getSuperHint(currentDrawingFull)}
										</li>
									{/if}
								</ul>
							{/if}
						{/if}
					</p>
					<div class="flex flex-wrap gap-2 w-full overflow-y-auto max-h-20">
						{#each currentDrawingFull.guesses || [] as currentGuess}
							{#if currentGuess}
								<div
									class="bg-accent-light px-3 py-1 rounded-full text-black/60 border border-accent"
								>
									{currentGuess}
								</div>
							{/if}
						{/each}
					</div>
				</div>

				{#if !currentDrawingFull.guessed && $currentUser.name !== currentDrawingFull.artist}
					<div class="flex flex-col gap-2 w-full max-w-[min(90vw,400px)]">
						<div class="flex gap-2">
							{#if !currentDrawingFull.hintPurchased}
								<button
									class="btn btn-outline flex-1 {$currentUser.coins < 5 ||
									purchasingHint
										? 'opacity-40 btn-error cursor-not-allowed'
										: ''}"
									on:click={handleHint}
									disabled={$currentUser.coins < 5 || purchasingHint}
								>
									{purchasingHint ? 'Purchasing...' : 'Hint (5 '}<img
										src={coinPng}
										class="w-4 h-4 inline"
										alt="coin"
									/>{purchasingHint ? '' : ')'}
								</button>
							{:else if !currentDrawingFull.superHintPurchased}
								<button
									class="btn btn-outline flex-1 {$currentUser.coins < 10 ||
									purchasingSuperHint
										? 'opacity-40 btn-error cursor-not-allowed'
										: ''}"
									on:click={handleSuperHint}
									disabled={$currentUser.coins < 10 || purchasingSuperHint}
								>
									{purchasingSuperHint
										? 'Purchasing...'
										: 'Super Hint (10 '}<img
										src={coinPng}
										class="w-4 h-4 inline"
										alt="coin"
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
								on:keydown={validateInput}
								on:paste={handlePaste}
							/>
							<button
								class="btn btn-primary"
								on:click={() => handleGuessSubmission(guess)}
								disabled={!guess.trim()}
							>
								Guess
							</button>
						</div>
					</div>
				{/if}
			</div>
		{:else if !drawingDraft && $currentUser}
			<div class="w-full flex flex-col items-center bg-background h-full">
				<h2 class="text-xl font-bold mb-2 text-black">Pick a word to draw</h2>
				<p class="mb-6 text-black/60 italic flex flex-row gap-2 text-xs">
					<span>
						You get coins as the artist, and <span class="font-bold"
							>{$currentGame &&
							$currentUser &&
							$currentUser.name &&
							$currentGame.users
								? ($currentGame.users.filter(
										(u) => u !== ($currentUser?.name || ''),
									)[0] ?? 'another player')
								: 'another player'}</span
						>
						gets coins for guessing correctly!
					</span>
				</p>
				<div class="flex flex-col gap-4 w-full">
					{#await wordsPromise}
						<div class="flex flex-col gap-2">
							<div
								class="h-12 rounded-lg bg-white/70 animate-pulse border border-primary/20"
							></div>
							<div
								class="h-12 rounded-lg bg-white/70 animate-pulse border border-primary/20"
							></div>
							<div
								class="h-12 rounded-lg bg-white/70 animate-pulse border border-primary/20"
							></div>
						</div>
					{:then words}
						{#each words as word}
							<button
								class="btn flex flex-row items-center justify-between w-full border text-white"
								class:btn-secondary={word.createdBy != null}
								class:border-black={word.createdBy != null}
								class:h-20={word.createdBy != null}
								class:btn-primary={word.createdBy == null}
								class:border-primary={word.createdBy == null}
								on:click={() => handleWordSelection(word)}
							>
								<div class="flex flex-col items-start gap-1">
									<span class="text-sm font-semibold">
										{word.secretWord.toUpperCase()}
									</span>

									<span class="text-[0.8rem] text-white opacity-80">
										{word.createdBy ? 'by ' + word.createdBy : ''}
									</span>
								</div>
								<span class="flex items-center gap-1">
									{#each Array(word.coins) as _}
										<img src={coinPng} class="w-4 h-4" alt="coin" />
									{/each}
								</span>
							</button>
						{/each}
						<button
							class="btn btn-outline w-fit flex flex-row items-center justify-center gap-2
							
							{!$currentUser || $currentUser.coins < 5 || isRefreshingWords
								? 'opacity-20 cursor-not-allowed'
								: ''}"
							on:click={async () => {
								if (
									$currentUser &&
									$currentUser.coins >= 5 &&
									!isRefreshingWords &&
									$currentGame?.id
								) {
									isRefreshingWords = true;
									try {
										await addcoins($currentUser.name, -5);
										wordsPromise = getRandomWords(
											$currentUser?.upgrades?.includes(
												UserUpgrade.MoreWordOptions,
											)
												? 5
												: 3,
											$currentGame.id,
											true,
										);
										await wordsPromise;
									} finally {
										setTimeout(() => {
											isRefreshingWords = false;
										}, 1000);
									}
								}
							}}
						>
							<span
								>{isRefreshingWords ? 'Refreshing...' : 'Refresh Words'}</span
							>
							{#if !isRefreshingWords}
								<span class="text-xs items-center flex flex-row gap-1"
									>5 <img
										src={coinPng}
										class="w-4 h-4 inline"
										alt="coin"
									/></span
								>
							{/if}
						</button>
						<p class="text-xs text-black/60 italic">
							Get 5 options instead of 3 in the
							<span
								class="font-bold text-primary cursor-pointer"
								on:click={() => {
									window.location.href = '/?page=store';
								}}>Store</span
							>
						</p>
					{/await}
				</div>
			</div>
		{:else if drawingDraft}
			<div class="w-full h-full flex flex-col">
				<h2 class="text-xl mb-4 text-black/60">
					Ok, let's draw <span class="font-bold text-black"
						>{drawingDraft?.secretWord.toUpperCase() ?? ''}</span
					>
					{#if !$currentUser?.upgrades?.includes(UserUpgrade.ColorPicker)}
						<p class="text-xs text-black/60 italic pt-4">
							🌈 Purchase color wheel in the
							<span
								class="font-bold text-primary cursor-pointer"
								on:click={() => {
									window.location.href = '/?page=store';
								}}>Store</span
							>
						</p>
					{/if}
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
							on:click={handleSubmitDrawing}
							disabled={submittingDraft}
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
		{:else}
			<p class="text-lg font-semibold text-primary">Loading game details...</p>
		{/if}
	{:else}
		<div class="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
			<div class="text-primary text-lg font-semibold">Loading game...</div>
		</div>
	{/if}
</div>
