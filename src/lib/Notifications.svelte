<script lang="ts">
	import { onMount } from 'svelte';
	import { currentUser, allUsers } from '../store';
	import Logo from '../components/Logo.svelte';
	import type { UserNotification } from '../types';
	import { markNotificationRead, getUserByIdOrName } from './Firebase';

	export let navigate: (page: string) => void;

	let notifications: UserNotification[] = [];

	onMount(async () => {
		// Get notifications from current user
		if ($currentUser?.notifications) {
			notifications = [...$currentUser.notifications].sort(
				(a, b) =>
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			);
		}
		// Sort notifications by unread first
		notifications.sort((a, b) => {
			if (a.read && !b.read) return 1;
			if (!a.read && b.read) return -1;
			return 0;
		});

		// Fetch missing users for notifications
		const users = $allUsers;
		const missingUserIds = [
			...new Set(notifications.map((n) => n.userId).filter((id) => !users[id])),
		];
		for (const id of missingUserIds) {
			await getUserByIdOrName(id);
		}
	});

	function formatDate(date: any): string {
		let dateObj: Date;
		if (date instanceof Date) {
			dateObj = date;
		} else if (date && typeof date.toDate === 'function') {
			dateObj = date.toDate();
		} else if (typeof date === 'string' || typeof date === 'number') {
			dateObj = new Date(date);
		} else {
			return '';
		}
		return dateObj.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		});
	}

	function getUserNameById(userId: string): string {
		const users = $allUsers;
		const user =
			users &&
			(users[userId] || Object.values(users).find((u) => u.name === userId));
		if (user && user.name) return user.name;
		return userId;
	}

	async function handleNotificationClick(notification: UserNotification) {
		// Mark as read in Firestore
		if ($currentUser?.id && !notification.read) {
			await markNotificationRead($currentUser.id, notification.id);
		}
		// Mark as read locally for instant UI feedback
		notification.read = true;

		// Navigate to the drawing

		const params = new URLSearchParams(window.location.search);
		// remove page param
		params.delete('page');
		params.set('drawing', notification.entityId);
		window.history.replaceState({}, '', `?${params.toString()}`);
		// Force a page reload to trigger the route change
		window.location.reload();
	}
</script>

<div class="p-4">
	<Logo {navigate} />
	<div class="mt-4">
		<h1 class="text-2xl font-bold text-primary mb-4">Notifications</h1>
		{#if notifications.length === 0}
			<div class="text-center text-gray-500 py-8">No notifications yet</div>
		{:else}
			<div class="flex flex-col gap-2">
				{#each notifications as notification}
					<button
						class="w-full text-left p-2 rounded-lg border-primary border transition-colors {notification.read
							? 'opacity-50 bg-white'
							: 'bg-white'}"
						on:click={() => handleNotificationClick(notification)}
					>
						<div class="flex items-start flex-row gap-2 h-full">
							<!-- red circle if unread -->
							{#if !notification.read}
								<div class="flex items-center mt-2">
									<div class="w-2 h-2 bg-red-500 rounded-full"></div>
								</div>
							{/if}
							<div class="flex flex-col pl-4">
								{#if notification.action === 'like'}
									<span class="font-semibold"
										>{getUserNameById(notification.userId)}</span
									>
									liked your drawing
								{:else if notification.action === 'comment'}
									<span class="font-semibold"
										>{getUserNameById(notification.userId)}</span
									>
									commented on your drawing
								{/if}
								<span class="text-xs text-gray-500">
									{formatDate(notification.createdAt)}
								</span>
							</div>
						</div>
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>
