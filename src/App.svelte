<script lang="ts">
	import { onMount } from 'svelte';
	import Home from './Home.svelte';
	import GameScreen from './lib/GameScreen.svelte';
	import NewGame from './lib/NewGame.svelte';
	import Feed from './lib/Feed.svelte';
	import Notifications from './lib/Notifications.svelte';
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
	let drawingId: string | null = null;

	onMount(async () => {
		// const deletedCount = await deleteOrphanedGames();
		// console.log(`Cleaned up ${deletedCount} orphaned games`);
		// Validate user session first //
		await validateUserSession();

		// Get initial page and game from URL
		const params = new URLSearchParams(window.location.search);
		currentPage = params.get('page') || 'home'; // Default to home if no page param
		const gameId = params.get('currentGame');
		drawingId = params.get('drawing');

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
			drawingId = params.get('drawing');

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

		// Clear drawing ID when navigating
		params.delete('drawing');
		drawingId = null;

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
			{#if currentPage === 'notifications'}
				<Notifications {navigate} />
			{:else if $currentGame}
				<GameScreen {navigate} />
			{:else if drawingId}
				<Feed {navigate} {drawingId} />
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

		<!-- Floating Notification Bell -->
		{#if $currentUser?.notifications?.filter((n) => !n.read).length > 0}
			<button
				class="fixed bottom-24 right-4 bg-red-500 text-white rounded-full p-3 shadow-lg hover:bg-primary/90 transition-colors z-50"
				on:click={() => navigate('notifications')}
				title="Notifications"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
					<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
				</svg>
			</button>
		{/if}

		<DevMenu />
	</main>
{/if}
