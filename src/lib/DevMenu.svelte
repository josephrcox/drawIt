<script lang="ts">
	import { currentUser } from '../store';
	import {
		addcoins,
		getUsers,
		lowercaseAllUserNames,
		backfillLikesCount,
	} from './Firebase';
	import { onMount } from 'svelte';
	import type { User } from '../types';
	import { migrateDrawings } from '../../migration';
	import { removeDrawingsFieldFromGames } from '../../removeDrawingsField';
	import { switchToUser } from '../store';

	let isOpen = false;
	let users: User[] = [];
	let selectedUserId: string | null = null;
	let isBackfillingLikes = false;

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
		</div>
	</div>
{/if}
