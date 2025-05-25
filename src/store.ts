import type { Game, User } from './types';
import type { User as FirebaseUser } from 'firebase/auth';
import { writable } from 'svelte/store';

// Create basic stores
export const authUser = writable<FirebaseUser | null>(null);
export const currentUser = writable<User | null>(null);
export const currentUserGames = writable<string[]>([]);
export const currentGame = writable<Game | null>(null);
export const allUsers = writable<{ [key: string]: User }>({});
export const gamesLoaded = writable<boolean>(false);
export const isDrawing = writable<boolean>(false);
export const allGames = writable<{ [key: string]: Game }>({});

// Initialize from localStorage
try {
	// Current User
	let userData = localStorage.getItem('drawIt-user-v3');
	if (!userData) {
		userData = localStorage.getItem('drawIt-user-v2'); // Try falling back to v2
		if (userData) {
			localStorage.setItem('drawIt-user-v3', userData); // Migrate to v3
		}
	}
	if (userData) {
		currentUser.set(JSON.parse(userData));
	}
	localStorage.removeItem('drawIt-user-v2'); // Always clean up v2 after attempting load

	// Current User Games
	let gamesData = localStorage.getItem('drawIt-games-v3');
	if (!gamesData) {
		gamesData = localStorage.getItem('drawIt-games-v2'); // Try falling back to v2
		if (gamesData) {
			localStorage.setItem('drawIt-games-v3', gamesData); // Migrate to v3
		}
	}
	if (gamesData) {
		currentUserGames.set(JSON.parse(gamesData));
	}
	localStorage.removeItem('drawIt-games-v2'); // Always clean up v2 after attempting load

	// All Users (migration logic from previous step is maintained)
	const usersV3Data = localStorage.getItem('drawIt-users-v3');
	if (usersV3Data) {
		allUsers.set(JSON.parse(usersV3Data));
	} else {
		const usersV2Data = localStorage.getItem('drawIt-users-v2');
		if (usersV2Data) {
			const usersV2 = JSON.parse(usersV2Data);
			// Only keep lowercased keys
			const usersV3: { [key: string]: any } = {};
			for (const key of Object.keys(usersV2)) {
				if (key === key.toLowerCase()) {
					usersV3[key] = usersV2[key];
				}
			}
			localStorage.setItem('drawIt-users-v3', JSON.stringify(usersV3));
			allUsers.set(usersV3);
			localStorage.removeItem('drawIt-users-v2');
		} else {
			allUsers.set({});
		}
	}
} catch (error) {
	console.error('Error loading from localStorage:', error);
}

export function switchToUser(userToEmulate: User) {
	// 1. Clear current user's session details from stores
	// This will also trigger localStorage updates via subscriptions
	currentUser.set(null);
	currentUserGames.set([]); // Reset games for the new user
	currentGame.set(null); // Reset current game

	// 2. Set the new user
	// This will trigger localStorage update for 'drawIt-user-v2'
	currentUser.set(userToEmulate);

	// 3. Reload the application to apply changes from a clean state
	window.location.assign('/');
}

// Save to localStorage whenever values change
currentUser.subscribe((user) => {
	if (user) {
		localStorage.setItem('drawIt-user-v3', JSON.stringify(user));
	} else {
		localStorage.removeItem('drawIt-user-v3');
	}
	localStorage.removeItem('drawIt-user-v2'); // Always remove old key
});

currentUserGames.subscribe((gameIds) => {
	if (gameIds) {
		// Store even if it's an empty array, as that's valid state
		localStorage.setItem('drawIt-games-v3', JSON.stringify(gameIds));
	} else {
		localStorage.removeItem('drawIt-games-v3'); // Should only happen if gameIds is null/undefined
	}
	localStorage.removeItem('drawIt-games-v2'); // Always remove old key
});

allUsers.subscribe((users) => {
	if (users && Object.keys(users).length > 0) {
		localStorage.setItem('drawIt-users-v3', JSON.stringify(users));
	} else {
		localStorage.removeItem('drawIt-users-v3');
	}
	localStorage.removeItem('drawIt-users-v2'); // Always clean up old version
});
