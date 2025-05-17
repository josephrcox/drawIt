<script lang="ts">
	import { currentUser } from '../store';
	import { userCollection, fireStore } from './Firebase';
	import { addcoins } from './Firebase';
	import { onMount } from 'svelte';
	import { getDocs, writeBatch } from 'firebase/firestore';
	import type { DocumentData } from 'firebase/firestore';

	let isOpen = false;

	async function handleKeyPress(event: KeyboardEvent) {
		if (event.key === '\\') {
			isOpen = !isOpen;
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
			const usersSnapshot = await getDocs(userCollection);
			const batch = writeBatch(fireStore);

			usersSnapshot.docs.forEach((doc: DocumentData) => {
				batch.delete(doc.ref);
			});

			await batch.commit();

			// Clear local storage
			localStorage.removeItem('drawIt-user');
			localStorage.removeItem('drawIt-games');
			localStorage.removeItem('drawIt-users');

			// Clear current user from store
			currentUser.set(null);

			alert('All users deleted successfully!');
			// Reload the page to ensure clean state
			window.location.reload();
		} catch (error) {
			console.error('Error deleting users:', error);
			alert('Error deleting users. Check console for details.');
		}
	}

	async function addPoints() {
		if (!$currentUser) return;

		try {
			await addcoins($currentUser, 5);
			alert('Added 5 points to current user!');
		} catch (error) {
			console.error('Error adding points:', error);
			alert('Error adding points. Check console for details.');
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

{#if isOpen}
	<div class="fixed top-0 right-0 p-4 z-50">
		<div class="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
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
			</div>
		</div>
	</div>
{/if}
