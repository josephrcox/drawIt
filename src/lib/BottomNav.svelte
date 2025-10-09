<script lang="ts">
	import { currentUser, currentGame, isDrawing } from '../store';
	import coinGif from '../assets/coin.gif';

	export let navigate: (page: string) => void;
	let currentPage = 'home';

	// Update current page when URL changes
	function updateCurrentPage() {
		const params = new URLSearchParams(window.location.search);
		currentPage = params.get('page') || 'home';
	}

	// Listen for URL changes
	if (typeof window !== 'undefined') {
		window.addEventListener('popstate', updateCurrentPage);
		updateCurrentPage(); // Initial page load
	}

	// Wrap the navigate function to update currentPage
	const handleNavigate = (page: string) => {
		currentPage = page;
		navigate(page);
	};
</script>

{#if !$isDrawing}
	<nav
		class="fixed bottom-0 left-0 right-0 bg-white border-t border-base-200 px-4 py-2 z-50 animate-fade-in-simple"
	>
		<div class="flex justify-around items-center max-w-md mx-auto">
			<!-- coins -->
			<button
				class="flex flex-col items-center"
				on:click={() => handleNavigate('store')}
			>
				<div class="flex items-center gap-1">
					<img src={coinGif} class="w-3 h-3" alt="coins" />
					<span class="text-xs font-medium">{$currentUser?.coins || 0}</span>
				</div>
				<span class="text-xs text-muted">Store</span>
			</button>

			{#if $currentGame}
				<!-- Back Button (when in game) -->
				<button
					class="flex flex-col items-center"
					on:click={() => {
						$currentGame = null;
						handleNavigate('home');
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-primary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					<span class="text-xs text-primary">Back</span>
				</button>
			{:else}
				<!-- Home -->
				<button
					class="flex flex-col items-center"
					on:click={() => handleNavigate('home')}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 {currentPage === 'home'
							? 'text-primary'
							: 'text-muted'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					<span
						class="text-xs {currentPage === 'home'
							? 'text-primary'
							: 'text-muted'}">Home</span
					>
				</button>

				<!-- New Game -->
				<button
					class="flex flex-col items-center"
					on:click={() => handleNavigate('new')}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 {currentPage === 'new'
							? 'text-primary'
							: 'text-muted'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 4v16m8-8H4"
						/>
					</svg>
					<span
						class="text-xs {currentPage === 'new'
							? 'text-primary'
							: 'text-muted'}">New</span
					>
				</button>

				<!-- Feed -->
				<button
					class="flex flex-col items-center"
					on:click={() => handleNavigate('feed')}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 {currentPage === 'feed'
							? 'text-primary'
							: 'text-muted'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
						/>
					</svg>
					<span
						class="text-xs {currentPage === 'feed'
							? 'text-primary'
							: 'text-muted'}">Feed</span
					>
				</button>
			{/if}
		</div>
	</nav>

	<!-- Add padding to the bottom of the main content to account for the fixed nav -->
	<div class="h-20"></div>
{/if}

<style>
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
