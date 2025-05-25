<script lang="ts">
	import { onMount } from 'svelte';
	import Home from './Home.svelte';
	import GameScreen from './lib/GameScreen.svelte';
	import NewGame from './lib/NewGame.svelte';
	import Feed from './lib/Feed.svelte';
	import { currentGame, currentUser } from './store';
	import BottomNav from './lib/BottomNav.svelte';
	import {
		generateRandomUsers,
		validateUserSession,
		loadGame,
		deleteOrphanedGames,
	} from './lib/Firebase';
	import DevMenu from './lib/DevMenu.svelte';
	import Store from './lib/Store.svelte';

	let currentPage = 'home'; // Default to home page
	let isLoading = true;

	onMount(async () => {
		// const deletedCount = await deleteOrphanedGames();
		// console.log(`Cleaned up ${deletedCount} orphaned games`);
		// Validate user session first //
		await validateUserSession();

		// Get initial page and game from URL
		const params = new URLSearchParams(window.location.search);
		currentPage = params.get('page') || 'home'; // Default to home if no page param
		const gameId = params.get('currentGame');

		// Load game if ID is present in URL
		if (gameId) {
			const game = await loadGame(gameId);
			if (game) {
				$currentGame = game;
			}
		}

		// Listen for URL changes
		window.addEventListener('popstate', async () => {
			const params = new URLSearchParams(window.location.search);
			currentPage = params.get('page') || 'home';
			const gameId = params.get('currentGame');

			if (gameId) {
				const game = await loadGame(gameId);
				if (game) {
					$currentGame = game;
				}
			} else {
				$currentGame = null;
			}
		});

		isLoading = false;
	});

	// Function to navigate
	function navigate(page: string) {
		const params = new URLSearchParams(window.location.search);
		const gameId = $currentGame?.id;

		if (page === 'home') {
			if (gameId) {
				// If we have a current game, keep it in the URL
				params.set('currentGame', gameId);
				params.delete('page');
			} else {
				// If no game, clear everything
				params.delete('currentGame');
				params.delete('page');
			}
		} else {
			if (gameId) {
				params.set('currentGame', gameId);
			} else {
				params.delete('currentGame');
			}

			if (page !== 'home') {
				params.set('page', page);
			} else {
				params.delete('page');
			}
		}

		const queryString = params.toString();
		const newUrl = queryString ? `?${queryString}` : '/';

		window.history.pushState({}, '', newUrl);
		currentPage = page;
	}
</script>

{#if isLoading}
	<div class="w-full min-h-screen flex items-center justify-center">
		<div
			class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
		></div>
	</div>
{:else if !$currentUser}
	<Home {navigate} />
{:else}
	<main
		class="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-background-gradient-start to-background-gradient-end text-black pb-20 overflow-y-auto"
	>
		<!-- svelte-ignore missing-declaration -->
		<div class="w-full max-w-md mx-auto px-4">
			{#if $currentGame}
				<GameScreen {navigate} />
			{:else if currentPage === 'home'}
				<Home {navigate} />
			{:else if currentPage === 'new'}
				<NewGame {navigate} />
			{:else if currentPage === 'feed'}
				<Feed {navigate} />
			{:else if currentPage === 'store'}
				<Store {navigate} />
			{/if}
		</div>
		<BottomNav {navigate} />
		<DevMenu />
	</main>
{/if}
