import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	setDoc,
	updateDoc,
	onSnapshot,
	query,
	where,
	serverTimestamp,
	Timestamp,
} from 'firebase/firestore';
import { get } from 'svelte/store';
import type { Game, Drawing, User, Word } from '../types';
import {
	currentUser,
	currentUserGames,
	currentGame,
	allUsers,
	gamesLoaded,
} from '../store';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCTe1si_Cg2Pkl2X77JpscYfW6KajberCM',
	authDomain: 'drawit-1f620.firebaseapp.com',
	projectId: 'drawit-1f620',
	storageBucket: 'drawit-1f620.firebasestorage.app',
	messagingSenderId: '513679195329',
	appId: '1:513679195329:web:d650c7307b461788dc6840',
	measurementId: 'G-P8GR3KFS0H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const env = window.location.hostname === 'localhost' ? 'dev' : 'prod';

export const fireStore = getFirestore(app);

export const gameCollection = collection(fireStore, 'games');
export const userCollection = collection(fireStore, 'users');
export const drawingCollection = collection(fireStore, 'drawings');
export const wordCollection = collection(fireStore, 'words');

/**
 * Load specific users into the store
 */
export async function loadUsers(userNames: string[]): Promise<void> {
	try {
		// Filter out users we already have in the store
		const users = get(allUsers);
		const missingUsers = userNames.filter((name) => !users[name]);

		if (missingUsers.length === 0) return;

		// Fetch missing users from Firebase
		const userSnapshot = await getDocs(userCollection);
		const newUsers: { [key: string]: User } = {};

		userSnapshot.docs.forEach((doc) => {
			const userData = doc.data() as Omit<User, 'id'>;
			if (missingUsers.includes(userData.name)) {
				newUsers[userData.name] = { ...userData, id: doc.id };
			}
		});

		// Update store with new users
		allUsers.update((users) => ({ ...users, ...newUsers }));
	} catch (error) {
		console.error('Error loading users:', error);
	}
}

export async function loadWords(): Promise<Word[]> {
	try {
		const wordSnapshot = await getDocs(wordCollection);
		const words = wordSnapshot.docs.map((doc) => doc.data() as Word);
		return words;
	} catch (error) {
		console.error('Error loading words:', error);
	}
	return [];
}

export async function createCustomWord(
	word: string,
	createdBy: string,
): Promise<void> {
	try {
		const wordRef = doc(wordCollection);
		const newWord: Word = {
			word: word,
			createdBy,
			createdAt: new Date(),
		};

		await setDoc(wordRef, newWord);
	} catch (error) {
		console.error('Error creating custom word:', error);
	}
}
/**
 * Create or retrieve a user
 */
export async function createUser(name: string): Promise<User> {
	try {
		const userSnapshot = await getDocs(userCollection);
		const userFound = userSnapshot.docs.find((doc) => doc.data().name === name);

		if (userFound) {
			const userData = userFound.data() as Omit<User, 'id'>;
			const user = { ...userData, id: userFound.id } as User;

			// Update stores
			currentUser.set(user);
			allUsers.update((users) => ({ ...users, [user.name]: user }));

			// Load user's games
			await loadGames(user.name);
			return user;
		}

		const userRef = doc(userCollection);
		const newUser: User = {
			name,
			coins: 0,
			createdAt: new Date(),
			id: userRef.id,
		};

		await setDoc(userRef, newUser);

		// Update stores
		currentUser.set(newUser);
		allUsers.update((users) => ({ ...users, [newUser.name]: newUser }));

		return newUser;
	} catch (error) {
		console.error('Error creating/retrieving user:', error);
		throw error;
	}
}

/**
 * Get a user by name
 */
export async function getUser(name: string): Promise<User | null> {
	try {
		// First check the store
		const users = get(allUsers);
		if (users[name]) {
			return users[name];
		}

		// If not in store, fetch from Firebase
		const userSnapshot = await getDocs(userCollection);
		const userDoc = userSnapshot.docs.find((doc) => doc.data().name === name);

		if (userDoc) {
			const userData = userDoc.data() as Omit<User, 'id'>;
			const user = { ...userData, id: userDoc.id } as User;

			// Update store
			allUsers.update((users) => ({ ...users, [user.name]: user }));
			return user;
		}
		return null;
	} catch (error) {
		console.error('Error getting user:', error);
		return null;
	}
}

/**
 * Get users matching a search query
 */
export async function getUsers(query: string): Promise<User[]> {
	try {
		// Always fetch from Firebase if query is empty (initial load)
		if (!query) {
			const userSnapshot = await getDocs(userCollection);
			const matches = userSnapshot.docs.map((doc) => {
				const userData = doc.data() as Omit<User, 'id'>;
				return { ...userData, id: doc.id } as User;
			});

			// Update store with new users
			allUsers.update((users) => {
				const newUsers = { ...users };
				matches.forEach((user) => {
					newUsers[user.name] = user;
				});
				return newUsers;
			});

			return matches;
		}

		// For non-empty queries, check store first
		const users = get(allUsers);
		const storeMatches = Object.values(users).filter((user: User) =>
			user.name.toLowerCase().includes(query.toLowerCase()),
		);

		if (storeMatches.length > 0) {
			return storeMatches;
		}

		// If no matches in store, fetch from Firebase
		const userSnapshot = await getDocs(userCollection);
		const matches = userSnapshot.docs
			.map((doc) => {
				const userData = doc.data() as Omit<User, 'id'>;
				return { ...userData, id: doc.id } as User;
			})
			.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));

		// Update store with new users
		allUsers.update((users) => {
			const newUsers = { ...users };
			matches.forEach((user) => {
				newUsers[user.name] = user;
			});
			return newUsers;
		});

		return matches;
	} catch (error) {
		console.error('Error searching users:', error);
		return [];
	}
}

/**
 * Load games for a user
 */
export async function loadGames(name: string): Promise<Game[]> {
	try {
		const gamesSnapshot = await getDocs(gameCollection);
		const games = gamesSnapshot.docs
			.filter((doc) => {
				const game = doc.data() as Game;
				return game.users && game.users.includes(name);
			})
			.map((doc) => {
				const data = doc.data();
				return { ...data, id: doc.id } as Game;
			});

		currentUserGames.set(games);
		return games;
	} catch (error) {
		console.error('Error in loadGames:', error);
		return [];
	}
}

/**
 * Create a new game
 */
export async function createGame(users: string[]): Promise<Game> {
	const gameRef = doc(gameCollection);

	const game = {
		id: gameRef.id,
		users,
		createdAt: new Date(),
		drawings: [],
	} as Game;

	await setDoc(gameRef, game);
	gamesLoaded.set(false); // Reset loading state when creating new game
	return game;
}

/**
 * Update a game
 */
export async function updateGame(game: Game) {
	if (!game.id) {
		console.error('Cannot update game without ID');
		return game;
	}

	try {
		const gameRef = doc(gameCollection, game.id);
		await updateDoc(gameRef, {
			drawings: game.drawings,
		});
		return game;
	} catch (error) {
		console.error('Error updating game:', error);
		return game;
	}
}

/**
 * Update a user
 */
export async function updateUser(user: User) {
	if (!user.id) {
		console.error('Cannot update user without ID');
		return user;
	}

	const userRef = doc(userCollection, user.id);
	await updateDoc(userRef, {
		name: user.name,
		coins: user.coins,
		createdAt: user.createdAt,
	});

	// No need to update the store here, the reactive subscription will handle it
	return user;
}

export async function addcoins(user: User, coins: number) {
	if (!user.id) {
		console.error('Cannot add coins to user without ID');
		return user;
	}

	try {
		const userRef = doc(userCollection, user.id);
		const updatedcoins = user.coins + coins;

		await updateDoc(userRef, {
			coins: updatedcoins,
		});

		const updatedUser = { ...user, coins: updatedcoins };
		currentUser.set(updatedUser);
		return updatedUser;
	} catch (error) {
		console.error('Error adding coins:', error);
		return user;
	}
}

/**
 * Generate random users for testing
 */
export async function generateRandomUsers(count: number = 20): Promise<void> {
	try {
		const adjectives = [
			'Happy',
			'Clever',
			'Brave',
			'Swift',
			'Bright',
			'Witty',
			'Calm',
			'Eager',
			'Fierce',
			'Gentle',
		];
		const nouns = [
			'Artist',
			'Painter',
			'Creator',
			'Designer',
			'Doodler',
			'Sketcher',
			'Drawer',
			'Illustrator',
			'Maker',
			'Craftsman',
		];

		for (let i = 0; i < count; i++) {
			const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
			const noun = nouns[Math.floor(Math.random() * nouns.length)];
			const name = `${adj}${noun}${Math.floor(Math.random() * 100)}`;
			const coins = Math.floor(Math.random() * 1000);

			const userRef = doc(userCollection);
			const newUser: User = {
				name,
				coins,
				createdAt: new Date(),
				id: userRef.id,
			};

			await setDoc(userRef, newUser);
			allUsers.update((users) => ({ ...users, [newUser.name]: newUser }));
		}
	} catch (error) {
		console.error('Error generating random users:', error);
	}
}

/**
 * Validate the current user session
 * Returns true if the user exists and is valid, false otherwise
 */
export async function validateUserSession(): Promise<boolean> {
	try {
		const user = get(currentUser);
		if (!user) return false;

		// Check if user exists in Firestore
		const userSnapshot = await getDocs(userCollection);
		const userDoc = userSnapshot.docs.find(
			(doc) => doc.data().name === user.name,
		);

		if (!userDoc) {
			// User doesn't exist in Firestore, clear local data
			currentUser.set(null);
			localStorage.removeItem('drawIt-user');
			localStorage.removeItem('drawIt-games');
			localStorage.removeItem('drawIt-users');
			return false;
		}

		// Update user data from Firestore
		const userData = userDoc.data() as Omit<User, 'id'>;
		const updatedUser = { ...userData, id: userDoc.id } as User;
		currentUser.set(updatedUser);
		return true;
	} catch (error) {
		console.error('Error validating user session:', error);
		return false;
	}
}

/**
 * Load a single game by ID
 */
export async function loadGame(gameId: string): Promise<Game | null> {
	try {
		const gameDoc = await getDoc(doc(gameCollection, gameId));
		if (gameDoc.exists()) {
			const data = gameDoc.data();
			return { ...data, id: gameDoc.id } as Game;
		}
		return null;
	} catch (error) {
		console.error('Error loading game:', error);
		return null;
	}
}

/**
 * Get the most recent drawings from all games
 * Returns the 100 most recent drawings sorted by creation date
 */
export async function getRecentDrawings(): Promise<Drawing[]> {
	try {
		const gamesSnapshot = await getDocs(gameCollection);
		const allDrawings: Drawing[] = [];

		// Collect all drawings from all games
		gamesSnapshot.docs.forEach((doc) => {
			const game = doc.data() as Game;
			if (game.drawings && game.drawings.length > 0) {
				// Add game ID to each drawing for reference
				const drawingsWithGameId = game.drawings.map((drawing) => ({
					...drawing,
					gameId: doc.id,
				}));

				for (const drawing of drawingsWithGameId) {
					drawing.guessedBy =
						game.users.find((user) => user !== drawing.artist) ?? '';
				}
				// .filter((drawing) => drawing.guessed === true);
				allDrawings.push(...drawingsWithGameId);
			}
		});

		// Sort drawings by createdAt date (most recent first)
		const sortedDrawings = allDrawings.sort((a, b) => {
			function toDate(val: any): Date {
				if (!val) return new Date(0);
				if (val instanceof Date) return val;
				if (typeof val.toDate === 'function') return val.toDate(); // Firestore Timestamp
				if (typeof val === 'string') return new Date(val);
				return new Date(val);
			}
			const dateA = toDate(a.createdAt);
			const dateB = toDate(b.createdAt);
			return dateB.getTime() - dateA.getTime();
		});
		console.log(sortedDrawings);

		// Return the 100 most recent drawings
		return sortedDrawings.slice(0, 100);
	} catch (error) {
		console.error('Error fetching recent drawings:', error);
		return [];
	}
}
