<script lang="ts">
	import { currentUser } from '../store';
	import {
		addcoins,
		getUsers,
		lowercaseAllUserNames,
		backfillLikesCount,
		getAllDrawings,
	} from './Firebase';
	import { onMount } from 'svelte';
	import type { User, Drawing } from '../types';
	import { migrateDrawings } from '../../migration';
	import { removeDrawingsFieldFromGames } from '../../removeDrawingsField';
	import { switchToUser } from '../store';

	let isOpen = false;
	let users: User[] = [];
	let selectedUserId: string | null = null;
	let isBackfillingLikes = false;
	let allDrawings: Drawing[] = [];
	let loadingDrawings = false;

	// Computed variable for word counts
	$: wordCounts = allDrawings.reduce(
		(acc, drawing) => {
			acc[drawing.secretWord] = (acc[drawing.secretWord] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

	// Computed variable for sorted word counts
	$: sortedWordCounts = Object.entries(wordCounts).sort(
		([, a], [, b]) => b - a,
	);

	async function handleKeyPress(event: KeyboardEvent) {
		if (event.key === '\\') {
			isOpen = !isOpen;
		}
	}

	async function loadUsers() {
		try {
			users = await getUsers('');
			users.sort((a, b) => {
				const aLast = a.dailyRewards?.length
					? a.dailyRewards[a.dailyRewards.length - 1]
					: '';
				const bLast = b.dailyRewards?.length
					? b.dailyRewards[b.dailyRewards.length - 1]
					: '';
				return bLast.localeCompare(aLast);
			});
		} catch (error) {
			console.error('Error loading users:', error);
		}
	}

	async function deleteAllUsers() {
		if (
			!confirm(
				'Are you sure you want to delete ALL users? This cannot be undone!',
			)
		) {
			return;
		}

		try {
			// This function can remain as is, since it's a dev-only destructive op
			// ... existing code ...
		} catch (error) {
			console.error('Error deleting users:', error);
			alert('Error deleting users. Check console for details.');
		}
	}

	async function handleEmulateUser() {
		if (!selectedUserId) {
			alert('Please select a user to emulate.');
			return;
		}

		const userToEmulate = users.find((u) => u.id === selectedUserId);

		if (!userToEmulate) {
			alert('Selected user not found.');
			return;
		}

		if (
			!confirm(
				`Are you sure you want to emulate ${userToEmulate.name}? This will log you out of your current session.`,
			)
		) {
			return;
		}

		try {
			switchToUser(userToEmulate);
		} catch (error) {
			console.error('Error emulating user:', error);
			alert('Error emulating user. Check console for details.');
		}
	}

	async function addPoints() {
		if (!$currentUser) return;

		try {
			await addcoins($currentUser.name, 5);
		} catch (error) {
			console.error('Error adding points:', error);
			alert('Error adding points. Check console for details.');
		}
	}

	async function handleBackfillLikesCount() {
		if (!confirm('Backfill likesCount for all drawings?')) return;
		isBackfillingLikes = true;
		try {
			await backfillLikesCount();
			alert('Backfill complete!');
		} catch (e) {
			alert('Error during backfill. See console.');
		} finally {
			isBackfillingLikes = false;
		}
	}

	async function loadAllDrawings() {
		loadingDrawings = true;
		try {
			allDrawings = await getAllDrawings();
		} catch (error) {
			console.error('Error loading drawings:', error);
			alert('Error loading drawings. Check console for details.');
		} finally {
			loadingDrawings = false;
		}
	}

	async function removeUsedWordsFromWordsFile() {
		if (allDrawings.length === 0) {
			alert('Please load drawings first to see which words have been used.');
			return;
		}

		const usedWords = new Set(allDrawings.map((drawing) => drawing.secretWord));
		const usedWordsArray = Array.from(usedWords);

		if (usedWordsArray.length === 0) {
			alert('No words found to remove.');
			return;
		}

		const confirmMessage = `Are you sure you want to permanently remove ${usedWordsArray.length} used words from words.js?\n\nThis will remove:\n${usedWordsArray.slice(0, 10).join(', ')}${usedWordsArray.length > 10 ? `\n... and ${usedWordsArray.length - 10} more words` : ''}\n\nThis action cannot be undone!`;

		if (!confirm(confirmMessage)) {
			return;
		}

		try {
			// Read the current words.js file
			const response = await fetch('/src/lib/words.js');
			const wordsContent = await response.text();

			// Parse the words array from the file
			const wordsMatch = wordsContent.match(
				/export let words = \[([\s\S]*?)\];/,
			);
			if (!wordsMatch) {
				throw new Error('Could not parse words array from words.js');
			}

			const wordsString = wordsMatch[1];
			const currentWords = wordsString
				.split(',')
				.map((word) => word.trim().replace(/['"]/g, ''))
				.filter((word) => word.length > 0);

			// Remove used words
			const remainingWords = currentWords.filter(
				(word) => !usedWords.has(word),
			);

			// Create new words.js content
			const newWordsContent = `export let words = [\n${remainingWords.map((word) => `\t'${word}',`).join('\n')}\n];\n`;

			// Create a downloadable file
			const blob = new Blob([newWordsContent], { type: 'text/javascript' });
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = 'words.js';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);

			// Also copy to clipboard for easy pasting
			try {
				await navigator.clipboard.writeText(newWordsContent);
				alert(
					`Successfully generated new words.js file!\n\nRemoved ${usedWordsArray.length} used words.\nRemaining: ${remainingWords.length} words.\n\nFile downloaded and content copied to clipboard.`,
				);
			} catch (clipboardError) {
				alert(
					`Successfully generated new words.js file!\n\nRemoved ${usedWordsArray.length} used words.\nRemaining: ${remainingWords.length} words.\n\nFile downloaded. (Clipboard copy failed - check console)`,
				);
				console.warn('Clipboard copy failed:', clipboardError);
			}

			console.log('Words that were removed:', usedWordsArray);
			console.log('Remaining words count:', remainingWords.length);
		} catch (error) {
			console.error('Error processing words removal:', error);
			alert('Error processing words removal. Check console for details.');
		}
	}

	function formatFirestoreDate(val: any): string {
		if (
			val &&
			typeof val === 'object' &&
			val !== null &&
			'toDate' in val &&
			typeof val.toDate === 'function'
		) {
			return val.toDate().toLocaleDateString();
		} else {
			return new Date(val).toLocaleDateString();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyPress);
		loadUsers();
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

{#if isOpen}
	<div class="fixed top-0 right-0 p-4 z-50 h-screen overflow-y-auto">
		<div class="bg-white rounded-lg shadow-lg p-4 border border-base-200">
			<h2 class="text-lg font-bold mb-4">Dev Menu</h2>
			<div class="flex flex-col gap-2">
				<button class="btn btn-error" on:click={deleteAllUsers}>
					Delete All Users
				</button>
				<button
					class="btn btn-primary"
					on:click={addPoints}
					disabled={!$currentUser}
				>
					Add 5 Points
				</button>
				<button class="btn btn-secondary" on:click={loadUsers}>
					Refresh Users
				</button>
				<button class="btn btn-warning" on:click={lowercaseAllUserNames}>
					Lowercase All Names
				</button>
				<button
					class="btn btn-accent"
					on:click={handleBackfillLikesCount}
					disabled={isBackfillingLikes}
				>
					{isBackfillingLikes ? 'Backfilling...' : 'Backfill Likes Count'}
				</button>
				<button
					class="btn btn-info"
					on:click={loadAllDrawings}
					disabled={loadingDrawings}
				>
					{loadingDrawings ? 'Loading...' : 'Load All Drawings'}
				</button>
				<button
					class="btn btn-error"
					on:click={removeUsedWordsFromWordsFile}
					disabled={allDrawings.length === 0}
				>
					Remove Used Words from words.js
				</button>
				<!-- <button class="btn btn-secondary" on:click={migrateDrawings}>
					Migrate Drawings
				</button>
				<button
					class="btn btn-secondary"
					on:click={removeDrawingsFieldFromGames}
				>
					Remove Drawings Field From Games
				</button> -->

				<div class="mt-4 border-t pt-4">
					<h3 class="text-md font-semibold mb-2">Emulate User</h3>
					<select
						class="select select-bordered w-full mb-2"
						bind:value={selectedUserId}
					>
						<option disabled selected value={null}>Select a user</option>
						{#each users as user (user.id)}
							<option value={user.id}>
								{user.name} ({user.id.substring(0, 6)}...)
							</option>
						{/each}
					</select>
					<button
						class="btn btn-warning w-full"
						on:click={handleEmulateUser}
						disabled={!selectedUserId}
					>
						Emulate Selected User
					</button>
				</div>
			</div>

			<div class="mt-4 overflow-y-auto">
				<h3 class="text-md font-semibold mb-2">Users by Last Active</h3>
				<div class="overflow-x-auto">
					<table class="table table-zebra w-full">
						<thead>
							<tr>
								<th>Name</th>
								<th>Coins</th>
								<th>Last Active</th>
								<th>Created</th>
							</tr>
						</thead>
						<tbody class="max-h-[300px] overflow-y-auto">
							{#each users as user}
								<tr>
									<td>{user.name}</td>
									<td>{user.coins}</td>
									<td>
										{#if user.dailyRewards?.length}
											{user.dailyRewards[user.dailyRewards.length - 1]}
										{:else}
											Never
										{/if}
									</td>
									<td>{formatFirestoreDate(user.createdAt)}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>

			<!-- Secret Words Table -->
			{#if allDrawings.length > 0}
				<div class="mt-4 border-t pt-4">
					<h3 class="text-md font-semibold mb-2">
						Secret Words Count ({allDrawings.length} total drawings, {sortedWordCounts.length}
						unique words)
					</h3>
					<div class="overflow-x-auto">
						<table class="table table-zebra w-full">
							<thead>
								<tr>
									<th>Secret Word</th>
									<th>Count</th>
								</tr>
							</thead>
							<tbody class="max-h-[300px] overflow-y-auto">
								{#each sortedWordCounts as [word, count]}
									<tr>
										<td class="font-mono font-bold">{word}</td>
										<td class="text-center font-bold">{count}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>

					<!-- Words to be removed preview -->
					<div class="mt-4 p-3 bg-warning/10 rounded-lg">
						<h4 class="text-sm font-semibold mb-2 text-warning">
							⚠️ Words to be removed from words.js ({sortedWordCounts.length} words)
						</h4>
						<div class="text-xs text-gray-600 max-h-32 overflow-y-auto">
							{#each sortedWordCounts as [word, count], i}
								<span
									class="inline-block mr-2 mb-1 px-2 py-1 bg-warning/20 rounded text-warning font-mono"
								>
									{word}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
