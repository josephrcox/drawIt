<!-- Home page contents -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import pumpkinPng from './assets/pumpkin.png';
	import logoUrl from './assets/logo.svg';
	import {
		currentGame,
		currentUser,
		currentUserGames,
		allUsers,
		gamesLoaded,
		allGames,
		authUser,
	} from './store';
	import {
		createGame,
		createUser,
		getUser,
		getUsers,
		loadGames,
		loadUsers,
		checkDailyReward,
		deleteGame,
		initializeUserSession,
		initializeAuth,
		getDrawingsForGame,
		getDrawingsCountForGame,
		updateGame,
	} from './lib/Firebase';
	import { getGameState } from './lib/utils';
	import GameSection from './components/GameSection.svelte';
	import type { Game, Drawing } from './types';

	let loading = true;
	let userName: string | null = null;
	let draftUserName: string = '';
	let inputError: string | null = null;

	interface GameWithStateAndDrawings extends Game {
		state: 'draw' | 'guess' | 'waiting';
		drawings: Drawing[];
		drawingsCount: number;
	}

	let processedUserGames: GameWithStateAndDrawings[] = [];
	let gameStateCache = new Map<
		string,
		{ state: 'draw' | 'guess' | 'waiting'; timestamp: number }
	>();
	const CACHE_DURATION = 5000; // 5 seconds cache

	export let navigate: (page: string) => void;

	$: userName = $currentUser ? $currentUser.name : null;

	async function processGames() {
		console.log(`[${new Date().toISOString()}] processGames: Start`);
		if (!$currentUser || !userName) {
			processedUserGames = [];
			console.log(
				`[${new Date().toISOString()}] processGames: End (no user/userName)`,
			);
			return;
		}

		if (processedUserGames.length === 0) {
			loading = true;
		}

		const gamesDataStartTime = performance.now();
		const gamesData = $currentUserGames
			.map((id) => $allGames[id])
			.filter(Boolean) as Game[];
		console.log(
			`[${new Date().toISOString()}] processGames: Mapped gamesData in ${performance.now() - gamesDataStartTime}ms. Count: ${gamesData.length}`,
		);

		if (gamesData.length === 0) {
			processedUserGames = [];
			loading = false;
			console.log(
				`[${new Date().toISOString()}] processGames: End (no gamesData)`,
			);
			return;
		}

		const drawingPromisesStartTime = performance.now();
		const drawingPromises = gamesData.map((game) =>
			game && game.id ? getDrawingsForGame(game.id) : Promise.resolve([]),
		);
		const allDrawings = await Promise.all(drawingPromises);
		console.log(
			`[${new Date().toISOString()}] processGames: Fetched allDrawings in ${performance.now() - drawingPromisesStartTime}ms`,
		);

		const gamesWithDetails: GameWithStateAndDrawings[] = [];
		const now = Date.now();
		const processingLoopStartTime = performance.now();

		for (let i = 0; i < gamesData.length; i++) {
			const gameLoopStartTime = performance.now();
			const game = gamesData[i];
			console.log(
				`[${new Date().toISOString()}] processGames: Loop ${i}, Game ID: ${game?.id}`,
			);

			if (game && game.id && game.users) {
				const drawings = allDrawings[i];

				const gameStateStartTime = performance.now();
				const cacheKey = `${game.id}-${userName}`;
				const cachedState = gameStateCache.get(cacheKey);

				let state: 'draw' | 'guess' | 'waiting';
				if (cachedState && now - cachedState.timestamp < CACHE_DURATION) {
					state = cachedState.state;
				} else {
					state = getGameState(game.users, drawings, userName);
					gameStateCache.set(cacheKey, { state, timestamp: now });
				}
				console.log(
					`[${new Date().toISOString()}] processGames: Game ID ${game.id} - getGameState took ${performance.now() - gameStateStartTime}ms`,
				);

				const drawingsCountStartTime = performance.now();
				let drawingsCount = game.drawingsCount;
				if (typeof drawingsCount !== 'number') {
					console.log(
						`[${new Date().toISOString()}] processGames: Game ID ${game.id} - drawingsCount is missing, fetching...`,
					);
					drawingsCount = await getDrawingsCountForGame(game.id);
					console.log(
						`[${new Date().toISOString()}] processGames: Game ID ${game.id} - fetched drawingsCount: ${drawingsCount}`,
					);
					// Update the game document in Firestore with the fetched count
					await updateGame({ ...game, drawingsCount });
					// Update the local allGames store as well
					allGames.update((ags) => {
						if (ags[game.id]) {
							ags[game.id].drawingsCount = drawingsCount;
						}
						return ags;
					});
					console.log(
						`[${new Date().toISOString()}] processGames: Game ID ${game.id} - updated drawingsCount in DB and store.`,
					);
				} else {
					console.log(
						`[${new Date().toISOString()}] processGames: Game ID ${game.id} - drawingsCount found in game object: ${drawingsCount}`,
					);
				}
				console.log(
					`[${new Date().toISOString()}] processGames: Game ID ${game.id} - drawingsCount logic took ${performance.now() - drawingsCountStartTime}ms`,
				);

				gamesWithDetails.push({ ...game, drawings, state, drawingsCount });
			}
			console.log(
				`[${new Date().toISOString()}] processGames: Loop ${i}, Game ID: ${game?.id} - iteration took ${performance.now() - gameLoopStartTime}ms`,
			);
		}
		console.log(
			`[${new Date().toISOString()}] processGames: Processing loop took ${performance.now() - processingLoopStartTime}ms`,
		);
		processedUserGames = gamesWithDetails;
		loading = false;
		console.log(`[${new Date().toISOString()}] processGames: End`);
	}

	$: if ($currentUser && userName && $gamesLoaded) {
		processGames();
	}

	// Clear cache when user changes
	$: if (userName) {
		gameStateCache.clear();
	}

	async function createUserAndSave(name: string) {
		if (name.trim() && /^[a-zA-Z0-9]+$/.test(name)) {
			loading = true;
			await createUser(name.trim());
			await initializeUserSession();
			loading = false;
		} else if (name.trim()) {
			inputError = 'Username can only contain letters and numbers';
		}
	}

	function validateInput(e: KeyboardEvent) {
		if (
			!/^[a-zA-Z0-9]$/.test(e.key) &&
			!['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
		) {
			e.preventDefault();
		}
		if (inputError) inputError = null;
		if (e.key === 'Enter' && draftUserName.trim()) {
			createUserAndSave(draftUserName);
		}
	}

	async function handleDeleteGame(gameId: string) {
		if (
			!confirm(
				'Are you sure you want to delete this game? This cannot be undone.',
			)
		) {
			return;
		}
		const success = await deleteGame(gameId);
		if (success) {
			$currentUserGames = $currentUserGames.filter((id) => id !== gameId);
			delete $allGames[gameId];
			allGames.set($allGames);
			processGames();
		}
	}

	onMount(async () => {
		loading = true;
		$gamesLoaded = false;

		if (!$authUser) {
			await initializeAuth();
		}
		await initializeUserSession();

		const willProcessGames =
			get(currentUser) && get(currentUser)?.name && get(gamesLoaded);
		if (!willProcessGames) {
			loading = false;
		}
	});
</script>

<div class="w-full flex flex-col items-center justify-center text-black">
	{#if loading}
		<div
			class="flex flex-col items-center gap-4 w-full max-w-xs mx-auto animate-fade-in-simple"
		>
			<div
				class="h-10 w-48 rounded-lg bg-white/70 animate-pulse border border-primary/20"
			></div>
			<div
				class="h-24 w-full rounded-2xl bg-white/80 animate-pulse border border-primary/20"
			></div>
			<div
				class="h-24 w-full rounded-2xl bg-white/60 animate-pulse border border-primary/20"
			></div>
		</div>
	{:else if $currentUser && userName}
		{#if processedUserGames.length !== 0}
			<div
				class="flex flex-col gap-6 w-full max-w-xs mx-auto animate-fade-in-simple"
			>
				{#if processedUserGames.filter((g) => g.state === 'draw' || g.state === 'guess').length > 0}
					<div class="rounded-2xl bg-white/90 shadow-md p-4">
						<div
							class="text-center text-2xl font-bold mb-2 animate-gradient-text"
						>
							Your Turn!
						</div>
						{#each processedUserGames.filter((g) => g.state === 'draw' || g.state === 'guess') as gameWithState (gameWithState.id)}
							<div class="relative">
								<button
									class="absolute -top-2 -right-1 opacity-50 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md z-10"
									on:click={() => handleDeleteGame(gameWithState.id)}
									title="Delete game"
								>
									×
								</button>
								<GameSection
									title=""
									games={[gameWithState]}
									currentUserName={userName}
									{navigate}
									drawingsCount={gameWithState.drawingsCount}
								/>
							</div>
						{/each}
					</div>
				{/if}

				{#if processedUserGames.filter((g) => g.state === 'waiting').length > 0}
					<div class="rounded-2xl bg-white/60 shadow-sm p-4 opacity-60">
						<div
							class="text-center text-secondary/60 font-semibold text-xs mb-2"
						>
							Waiting ({processedUserGames.filter((g) => g.state === 'waiting')
								.length})
						</div>
						{#each processedUserGames.filter((g) => g.state === 'waiting') as gameWithState (gameWithState.id)}
							<div class="relative">
								<button
									class="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md z-10"
									on:click={() => handleDeleteGame(gameWithState.id)}
									title="Delete game"
								>
									×
								</button>
								<GameSection
									title=""
									games={[gameWithState]}
									currentUserName={userName}
									{navigate}
									drawingsCount={gameWithState.drawingsCount}
									disableClick={true}
								/>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		{:else}
			<div class="text-center text-gray-500 mt-8 animate-fade-in-simple">
				No games found, start one!
			</div>
		{/if}
	{:else}
		<div
			class="flex flex-col items-center gap-4 w-full max-w-xs mx-auto mt-8 animate-fade-in-simple"
		>
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
		background: linear-gradient(to right, #d98d0a, #9be27c, #880bf5);
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

	@keyframes fade-in-simple {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.animate-fade-in-simple {
		animation: fade-in-simple 0.5s ease-out;
	}
</style>
