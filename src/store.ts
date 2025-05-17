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
	const userData = localStorage.getItem('drawit-user');
	if (userData) {
		currentUser.set(JSON.parse(userData));
	}

	const gamesData = localStorage.getItem('drawit-games');
	if (gamesData) {
		currentUserGames.set(JSON.parse(gamesData));
	}

	const usersData = localStorage.getItem('drawit-users');
	if (usersData) {
		allUsers.set(JSON.parse(usersData));
	}
} catch (error) {
	console.error('Error loading from localStorage:', error);
}

// Save to localStorage whenever values change
currentUser.subscribe((user) => {
	if (user) {
		localStorage.setItem('drawit-user', JSON.stringify(user));
	} else {
		localStorage.removeItem('drawit-user');
	}
});

currentUserGames.subscribe((games) => {
	if (games) {
		localStorage.setItem('drawit-games', JSON.stringify(games));
	} else {
		localStorage.removeItem('drawit-games');
	}
});

allUsers.subscribe((users) => {
	if (Object.keys(users).length > 0) {
		localStorage.setItem('drawit-users', JSON.stringify(users));
	} else {
		localStorage.removeItem('drawit-users');
	}
});
