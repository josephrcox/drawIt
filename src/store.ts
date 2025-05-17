import type { Game, User } from './types';
import { writable } from 'svelte/store';

// Create basic stores
export const currentUser = writable<User | null>(null);
export const currentUserGames = writable<Game[]>([]);
export const currentGame = writable<Game | null>(null);
export const allUsers = writable<{ [key: string]: User }>({});
export const gamesLoaded = writable<boolean>(false);
export const isDrawing = writable<boolean>(false);

// Initialize from localStorage
try {
	const userData = localStorage.getItem('drawIt-user-v2');
	if (userData) {
		currentUser.set(JSON.parse(userData));
	}

	const gamesData = localStorage.getItem('drawIt-games-v2');
	if (gamesData) {
		currentUserGames.set(JSON.parse(gamesData));
	}

	const usersData = localStorage.getItem('drawIt-users-v2');
	if (usersData) {
		allUsers.set(JSON.parse(usersData));
	}
} catch (error) {
	console.error('Error loading from localStorage:', error);
}

// Save to localStorage whenever values change
currentUser.subscribe((user) => {
	if (user) {
		localStorage.setItem('drawIt-user-v2', JSON.stringify(user));
	} else {
		localStorage.removeItem('drawIt-user-v2');
	}
});

currentUserGames.subscribe((games) => {
	if (games) {
		localStorage.setItem('drawIt-games-v2', JSON.stringify(games));
	} else {
		localStorage.removeItem('drawIt-games-v2');
	}
});

allUsers.subscribe((users) => {
	if (Object.keys(users).length > 0) {
		localStorage.setItem('drawIt-users-v2', JSON.stringify(users));
	} else {
		localStorage.removeItem('drawIt-users-v2');
	}
});
