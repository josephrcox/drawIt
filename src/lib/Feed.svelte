<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { addComment, getRecentDrawings, likeDrawing } from './Firebase';
	import type { Drawing } from '../types';
	import { getHint, getSuperHint } from './utils';
	import coinPng from '../assets/coin.png';
	import logoUrl from '../assets/logo.svg';
	import Logo from '../components/Logo.svelte';
	import { currentUser } from '../store';
	import html2canvas from 'html2canvas';
	import {
		doc,
		onSnapshot,
		getFirestore,
		collection,
	} from 'firebase/firestore';

	let drawings: Drawing[] = [];
	let loading = true;
	let commentDraft: string = '';
	let unsubscribes: (() => void)[] = [];
	const firestore = getFirestore();
	let screenshotInProgress = false;
	let screenshotBlob: Blob | null = null;
	let showShareOptions = false;
	let screenshotFilename = '';

	export let navigate: (page: string) => void;

	// Load drawings and set up subscriptions
	onMount(async () => {
		console.log('Feed mounted');
		try {
			// Initial load of drawings
			drawings = await getRecentDrawings();
			console.log('Drawings loaded', drawings);

			// Set up real-time subscriptions for each drawing's game
			setupSubscriptions();
		} catch (error) {
			console.error('Error loading drawings:', error);
		} finally {
			loading = false;
		}
	});

	// Clean up subscriptions on component destruction
	onDestroy(() => {
		unsubscribes.forEach((unsubscribe) => unsubscribe());
	});

	// Set up Firestore subscriptions for each drawing's game
	function setupSubscriptions() {
		// Clear existing subscriptions
		unsubscribes.forEach((unsubscribe) => unsubscribe());
		unsubscribes = [];

		// Create a unique set of game IDs to avoid duplicate subscriptions
		const gameIds = new Set(
			drawings.map((drawing) => drawing.gameId).filter(Boolean),
		);

		console.log('Setting up subscriptions for game IDs:', [...gameIds]);

		// Subscribe to each game
		gameIds.forEach((gameId) => {
			if (!gameId) return;

			const gameRef = doc(collection(firestore, 'games'), gameId);
			const unsubscribe = onSnapshot(
				gameRef,
				(doc) => {
					if (doc.exists()) {
						const gameData = doc.data();
						console.log(`Game data updated for ${gameId}:`, gameData);

						// Update drawings that belong to this game
						drawings = drawings.map((drawing) => {
							if (drawing.gameId === gameId && drawing.index !== undefined) {
								console.log(
									`Updating drawing ${drawing.index} for game ${gameId}`,
								);
								// Return the updated drawing from the game data
								return {
									...gameData.drawings[drawing.index],
									gameId,
									index: drawing.index,
									guessedBy: drawing.guessedBy,
								};
							}
							return drawing;
						});
					}
				},
				(error) => {
					console.error(`Error in game subscription for ${gameId}:`, error);
				},
			);

			unsubscribes.push(unsubscribe);
		});
	}

	async function createComment(gameId: string, drawingIndex: number) {
		if (commentDraft.trim() === '') {
			return;
		}

		const user = $currentUser;
		if (user) {
			try {
				const commentText = commentDraft.trim(); // Store the comment text before clearing
				addComment(gameId, drawingIndex, commentText, user.name);
				commentDraft = '';
				// No need to manually update the drawing array
				// The Firestore subscription will handle that
			} catch (error) {
				console.error('Error adding comment:', error);
			}
		}
	}

	async function toggleLike(gameId: string, drawingIndex: number) {
		const user = $currentUser;
		if (user) {
			try {
				await likeDrawing(gameId, drawingIndex, user.name);
				// No need to manually update UI, Firestore subscription handles it
			} catch (error) {
				console.error('Error liking drawing:', error);
			}
		} else {
			alert('No user logged in');
		}
	}

	function isLikedByCurrentUser(drawing: Drawing): boolean {
		const user = $currentUser;
		if (!user || !drawing.likes) return false;
		return drawing.likes.includes(user.name);
	}

	// Completely revised screenshot approach
	async function captureScreenshot(drawingIndex: number) {
		if (screenshotInProgress) return;

		try {
			screenshotInProgress = true;
			const drawing = drawings[drawingIndex];
			if (!drawing || !drawing.data) {
				screenshotInProgress = false;
				return;
			}

			// Show loading state
			showShareOptions = false;

			// Load all required images
			const [drawingImage, logoImage, coinImage] = await Promise.all([
				loadImage(drawing.data),
				loadImage(logoUrl),
				loadImage(coinPng),
			]);

			// Constants for styling
			const PADDING = 20;
			const BORDER_WIDTH = 4;
			const BORDER_COLOR = '#a78bfa';
			const BG_COLOR = '#ffffff';
			const LOGO_WIDTH = 120;
			const TEXT_COLOR = '#000000';
			const PRIMARY_COLOR = '#6419e6';
			const SECONDARY_COLOR = '#d926a9';
			const LIKE_COLOR = '#000000';
			const URL_HEIGHT = 25; // Height for URL at bottom

			// Create canvas
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			if (!ctx) {
				screenshotInProgress = false;
				return;
			}

			// Calculate dimensions based on drawing image
			const contentWidth = Math.min(drawingImage.width, 600);
			const contentHeight =
				drawingImage.height * (contentWidth / drawingImage.width);

			// Add padding and border
			canvas.width = contentWidth + PADDING * 2 + BORDER_WIDTH * 2;
			canvas.height =
				contentHeight + PADDING * 2 + BORDER_WIDTH * 2 + 150 + URL_HEIGHT;

			// Fill background
			ctx.fillStyle = BG_COLOR;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Draw border
			ctx.strokeStyle = BORDER_COLOR;
			ctx.lineWidth = BORDER_WIDTH;
			ctx.strokeRect(
				PADDING / 2,
				PADDING / 2,
				canvas.width - PADDING,
				canvas.height - PADDING - URL_HEIGHT,
			);

			// Draw drawing image in the center of the top area
			const imageX = PADDING + BORDER_WIDTH;
			const imageY = PADDING + BORDER_WIDTH + 30;
			ctx.drawImage(drawingImage, imageX, imageY, contentWidth, contentHeight);

			// Draw coins
			if (drawing.coins) {
				const coinSize = 28;
				const coinSpacing = 4;
				for (let i = 0; i < drawing.coins; i++) {
					ctx.drawImage(
						coinImage,
						canvas.width -
							PADDING -
							BORDER_WIDTH -
							(i + 1) * (coinSize + coinSpacing),
						PADDING + BORDER_WIDTH + 10,
						coinSize,
						coinSize,
					);
				}
			}

			// Draw likes - made larger
			ctx.fillStyle = LIKE_COLOR;
			ctx.font = 'bold 24px Outfit, sans-serif';
			const likesText = `👍 ${drawing.likes?.length || 0}`;
			ctx.fillText(
				likesText,
				PADDING + BORDER_WIDTH + 10,
				PADDING + BORDER_WIDTH + 32,
			);

			// Draw text info
			const textY = imageY + contentHeight + 50;
			ctx.textAlign = 'center';

			// Draw word and artist on one line
			ctx.font = 'bold 30px Outfit, sans-serif';
			const wordText = drawing.guessed ? drawing.secretWord : '?';
			ctx.fillStyle = PRIMARY_COLOR;
			let dateObj;
			if (
				drawing.createdAt &&
				typeof (drawing.createdAt as any).toDate === 'function'
			) {
				dateObj = (drawing.createdAt as any).toDate();
			} else {
				dateObj = new Date(drawing.createdAt);
			}
			const artistText = ` by ${drawing.artist.toLowerCase()} on ${dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`;
			// Measure text to ensure it doesn't overflow
			const wordWidth = ctx.measureText(wordText).width;
			const artistWidth = ctx.measureText(artistText).width;
			const totalTextWidth = wordWidth + artistWidth;

			// If text would overflow, reduce font size
			let fontSize = 30;
			if (totalTextWidth > canvas.width - 100) {
				fontSize = Math.floor(
					(fontSize * (canvas.width - 100)) / totalTextWidth,
				);
				ctx.font = `bold ${fontSize}px Outfit, sans-serif`;
			}

			// Draw word
			ctx.fillText(wordText, canvas.width / 2 - artistWidth / 2, textY);

			// Draw artist
			ctx.fillStyle = TEXT_COLOR;
			ctx.font = `${fontSize}px Outfit, sans-serif`;
			ctx.fillText(artistText, canvas.width / 2 + wordWidth / 2, textY);

			// Draw guesses info - handle long text with wrapping
			ctx.font = '16px Outfit, sans-serif';
			ctx.fillStyle = TEXT_COLOR;
			let guessText = '';
			if (drawing.guesses && drawing.guesses.length > 0) {
				guessText = `${drawing.guessedBy} ${!drawing.guessed ? 'has ' : ''}guessed: ${drawing.guesses.join(', ')}`;
			} else {
				guessText = `${drawing.guessedBy} is thinking...`;
			}

			// Text wrapping for guesses
			const maxWidth = canvas.width - 80;
			wrapText(ctx, guessText, canvas.width / 2, textY + 30, maxWidth, 25);

			// Draw hints info if applicable
			if (drawing.hintPurchased) {
				ctx.fillStyle = SECONDARY_COLOR;
				ctx.font = '18px Outfit, sans-serif';
				const hintText = `${drawing.guessedBy} used a Hint${drawing.superHintPurchased ? '... AND a SuperHint!' : ''}`;
				// Position below the wrapped guess text
				ctx.fillText(hintText, canvas.width / 2, textY + 50);
			}

			// Draw logo in the bottom right corner
			const logoHeight = (logoImage.height / logoImage.width) * LOGO_WIDTH;
			ctx.fillStyle = 'white';
			ctx.fillRect(
				canvas.width - LOGO_WIDTH - 15,
				canvas.height - logoHeight - 15,
				LOGO_WIDTH,
				logoHeight,
			);
			ctx.drawImage(
				logoImage,
				canvas.width - LOGO_WIDTH - 15,
				canvas.height - logoHeight - 15,
				LOGO_WIDTH,
				logoHeight,
			);
			// give the logo a white background

			// Add DrawIt URL at very bottom, centered
			ctx.font = '16px Outfit, sans-serif';
			ctx.fillStyle = 'rgba(0,0,0,0.6)';
			ctx.textAlign = 'center';
			ctx.fillText('drawit.jsph.cx', canvas.width / 2, canvas.height - 15);

			// Create filename
			const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
			screenshotFilename = `drawit-${drawing.artist.toLowerCase()}-${timestamp}.png`;

			// Store the blob for later use by our custom UI
			canvas.toBlob(
				(blob) => {
					if (!blob) {
						screenshotInProgress = false;
						return;
					}

					// Store the blob and show share options
					screenshotBlob = blob;
					showShareOptions = true;
					screenshotInProgress = false;
				},
				'image/png',
				1.0,
			);
		} catch (err) {
			console.error('Screenshot capture failed:', err);
			screenshotInProgress = false;
		}
	}

	// Helper function for direct download
	function downloadScreenshot() {
		if (!screenshotBlob) return;

		const link = document.createElement('a');
		link.href = URL.createObjectURL(screenshotBlob);
		link.download = screenshotFilename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(link.href);

		// Hide the share options after download
		showShareOptions = false;
	}

	// Helper function for sharing on mobile
	async function shareScreenshot() {
		if (!screenshotBlob) return;

		try {
			// Convert blob to file
			const file = new File([screenshotBlob], screenshotFilename, {
				type: 'image/png',
			});
			const files = [file];

			// Check if sharing with files is supported
			if (navigator.canShare && navigator.canShare({ files })) {
				console.log('Web Share Level 2 is supported!');

				// Use Web Share API Level 2 to share the file
				await navigator.share({
					title: 'DrawIt Drawing',
					text: 'Check out this drawing from DrawIt!',
					files,
				});

				console.log('File shared successfully');
			} else {
				console.log('File sharing not supported, falling back to basic share');

				// Fallback to basic sharing (Level 1) if file sharing is not supported
				if (navigator.share) {
					await navigator.share({
						title: 'DrawIt Drawing',
						text: 'Check out this drawing from DrawIt!',
					});

					// After text sharing, open the image in a new tab for saving
					const imageUrl = URL.createObjectURL(screenshotBlob);
					window.open(imageUrl, '_blank');
					setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
				} else {
					// If no share capability at all, just open the image
					const imageUrl = URL.createObjectURL(screenshotBlob);
					window.open(imageUrl, '_blank');
					setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
				}
			}
		} catch (err) {
			console.warn('Share failed:', err);

			// Fallback to opening in a new tab if sharing fails
			const imageUrl = URL.createObjectURL(screenshotBlob);
			window.open(imageUrl, '_blank');
			setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
		}

		// Hide the share options
		showShareOptions = false;
	}

	// Close the share dialog
	function closeShareOptions() {
		showShareOptions = false;
		screenshotBlob = null;
	}

	// Helper function to load an image and return a promise
	function loadImage(src: string): Promise<HTMLImageElement> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.crossOrigin = 'anonymous';
			img.onload = () => resolve(img);
			img.onerror = (err) => reject(err);
			img.src = src;
		});
	}

	// Helper function to wrap text
	function wrapText(
		ctx: CanvasRenderingContext2D,
		text: string,
		x: number,
		y: number,
		maxWidth: number,
		lineHeight: number,
	) {
		const words = text.split(' ');
		let line = '';
		let lineCount = 0;

		for (let n = 0; n < words.length; n++) {
			const testLine = line + words[n] + ' ';
			const metrics = ctx.measureText(testLine);
			const testWidth = metrics.width;

			if (testWidth > maxWidth && n > 0) {
				ctx.fillText(line, x, y + lineCount * lineHeight);
				line = words[n] + ' ';
				lineCount++;
			} else {
				line = testLine;
			}
		}

		ctx.fillText(line, x, y + lineCount * lineHeight);
		return lineCount + 1; // Return number of lines for positioning subsequent elements
	}

	function formatDrawingDate(createdAt: any): string {
		if (createdAt && typeof createdAt.toDate === 'function') {
			return createdAt
				.toDate()
				.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
		}
		return new Date(createdAt).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
		});
	}
</script>

<div class="p-4">
	<Logo {navigate} />
	{#if loading}
		<div class="flex justify-center items-center h-40">
			<span class="text-accent">Loading drawings...</span>
		</div>
	{:else}
		<div class="flex flex-col gap-4">
			{#each drawings as drawing, i}
				{#if drawing.data && drawing.data.length > 10}
					<div
						id={`drawing-card-${i}`}
						class="bg-white/90 p-1 relative rounded-lg w-full max-w-[min(90vw,400px)] flex flex-col items-center justify-center mx-auto border-2 border-primary"
					>
						<div class="flex flex-row gap-1 absolute top-2 right-2">
							{#each Array(drawing.coins) as _}
								<img src={coinPng} class="w-4 h-4" alt="Coin" />
							{/each}
						</div>

						<!-- Like button moved to top left -->
						<div
							class="absolute top-2 left-2 flex items-center gap-1 cursor-pointer bg-white/80 rounded-full p-1 z-20"
							on:click|stopPropagation={() => {
								console.log('Drawing object:', drawing);
								console.log('gameId:', drawing.gameId, 'index:', drawing.index);
								if (drawing.gameId && drawing.index !== undefined) {
									toggleLike(drawing.gameId, drawing.index);
								} else {
									alert('Error: gameId or index is missing');
								}
							}}
						>
							{#if isLikedByCurrentUser(drawing)}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="#ff6b6b"
									stroke="#ff6b6b"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
									></path>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
									></path>
								</svg>
							{/if}
							<span class="text-sm font-semibold"
								>{drawing.likes?.length || 0}</span
							>
						</div>

						<!-- Screenshot button - moved to top right but below coins -->
						<div
							class="absolute top-10 right-2 flex items-center gap-1 cursor-pointer bg-white/80 rounded-full p-1 z-10"
							on:click|stopPropagation={() => captureScreenshot(i)}
							title="Copy screenshot to clipboard"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
								<path
									d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
								></path>
							</svg>
						</div>

						<!-- Feedback message (initially hidden) -->
						<div
							id={`feedback-drawing-card-${i}`}
							class="absolute top-12 right-2 bg-green-500 text-white p-1 rounded text-xs hidden z-30"
						>
							Copied!
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
							<span class="font-semibold">
								{drawing.artist.toLowerCase()}
							</span>
							<span class="text-[10px] opacity-50">
								on {formatDrawingDate(drawing.createdAt)}
							</span>
						</p>
						<p
							class="text-[0.8rem] text-center align-middle items-center w-3/4"
						>
							{#if drawing.guesses && drawing.guesses.length > 0}
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

						{#if drawing.guessed}
							<div class="flex flex-col gap-2 pt-4 pb-1 w-full px-2">
								<div class="flex flex-row gap-2 items-center">
									<input
										type="text"
										placeholder="Add a comment"
										class="input input-bordered bg-white input-sm text-black w-full"
										bind:value={commentDraft}
										on:keydown={(e) => {
											if (e.key === 'Enter') {
												createComment(drawing.gameId ?? '', drawing.index ?? 0);
											}
										}}
									/>
									<button
										class="btn btn-secondary btn-sm"
										disabled={commentDraft.trim() === ''}
										on:click={() =>
											createComment(drawing.gameId ?? '', drawing.index ?? 0)}
									>
										Comment
									</button>
								</div>
								{#if drawing.comments && drawing.comments.length > 0}
									<div class="flex flex-col gap-1 mt-2 pb-2">
										{#each drawing.comments as comment}
											<p class="text-[0.8rem] text-left">
												<span class="font-semibold">{comment.createdBy}:</span>
												{comment.content}
											</p>
										{/each}
									</div>
								{/if}
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	{/if}

	<!-- Custom Share Dialog -->
	{#if showShareOptions && screenshotBlob}
		<div
			class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
		>
			<div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
				<h3 class="text-xl font-bold text-primary mb-4 text-center">
					Share Drawing
				</h3>

				<!-- Preview Image -->
				<div class="mb-4 border border-gray-200 rounded-lg overflow-hidden">
					<img
						src={URL.createObjectURL(screenshotBlob)}
						alt="Drawing screenshot"
						class="w-full h-auto"
					/>
				</div>

				<div class="grid grid-cols-2 gap-3 mb-4">
					<!-- Download Button -->
					<button class="btn btn-primary" on:click={downloadScreenshot}>
						Download
					</button>

					<!-- Share Button (mobile only) -->
					<button class="btn btn-secondary" on:click={shareScreenshot}>
						Share
					</button>
				</div>

				<!-- Close Button -->
				<button
					class="w-full btn btn-outline btn-sm"
					on:click={closeShareOptions}
				>
					Cancel
				</button>
			</div>
		</div>
	{/if}
</div>
