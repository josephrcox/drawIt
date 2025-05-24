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
	writeBatch,
	arrayUnion,
} from 'firebase/firestore';
import { get } from 'svelte/store';
import type { Game, Drawing, User, Word, UserUpgrade } from '../types';
import {
	currentUser,
	currentUserGames,
	currentGame,
	allUsers,
	gamesLoaded,
	allGames,
} from '../store';
import { showSuccessToast } from './notifications';

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

export async function addComment(
	gameId: string,
	drawingIndex: number,
	comment: string,
	user: string,
): Promise<Drawing> {
	const gameRef = doc(gameCollection, gameId);
	const game = await getDoc(gameRef);
	const gameData = game.data() as Game;

	gameData.drawings[drawingIndex].comments.push({
		content: comment,
		createdBy: user,
	});

	await updateDoc(gameRef, {
		drawings: gameData.drawings,
	});

	return gameData.drawings[drawingIndex];

	// await updateDoc(drawingRef, {
	// 	comments: arrayUnion(comment),
	// });
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

		await setDocWithMiddleware(wordRef, newWord);
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
			dailyRewards: [],
			upgrades: [],
		};

		await setDocWithMiddleware(userRef, newUser);

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
		// Always fetch from Firebase, never trust the store
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

		// Cache all games by ID
		const gamesById: { [key: string]: Game } = {};
		games.forEach((game) => {
			gamesById[game.id] = game;
		});
		allGames.update((existing) => ({ ...existing, ...gamesById }));

		currentUserGames.set(games.map((game) => game.id));
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
		wordOptions: [],
	} as Game;

	await setDocWithMiddleware(gameRef, game);
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
			wordOptions: game.wordOptions,
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

export async function addcoins(username: string, coins: number) {
	const user = await getUser(username);
	if (!user) {
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

		// CRITICAL FIX: Only update the currentUser store if this is the ACTUAL logged-in user
		const currentUserFromStore = get(currentUser);
		if (currentUserFromStore && currentUserFromStore.name === username) {
			currentUser.set(updatedUser);
		}

		// Also update the allUsers store to keep it in sync
		allUsers.update((users) => ({
			...users,
			[username]: updatedUser,
		}));

		return updatedUser;
	} catch (error) {
		console.error('Error adding coins:', error);
		return user;
	}
}

/**
 * Add or remove a like from a drawing
 */
export async function likeDrawing(
	gameId: string,
	drawingIndex: number,
	userName: string,
): Promise<boolean> {
	try {
		console.log(
			`likeDrawing called with gameId: ${gameId}, drawingIndex: ${drawingIndex}, userName: ${userName}`,
		);

		if (!gameId || drawingIndex === undefined) {
			console.error('Invalid gameId or drawingIndex', { gameId, drawingIndex });
			return false;
		}

		const gameRef = doc(gameCollection, gameId);
		console.log(`Getting game ref for ${gameId}`);
		const game = await getDoc(gameRef);

		if (!game.exists()) {
			console.error('Game not found');
			return false;
		}

		const gameData = game.data() as Game;
		console.log(`Game data retrieved:`, gameData);

		if (!gameData.drawings || !Array.isArray(gameData.drawings)) {
			console.error('Game has no drawings array', gameData);
			return false;
		}

		if (drawingIndex >= gameData.drawings.length) {
			console.error(
				`Drawing index out of bounds: ${drawingIndex}, max: ${
					gameData.drawings.length - 1
				}`,
			);
			return false;
		}

		const drawing = gameData.drawings[drawingIndex];

		if (!drawing) {
			console.error('Drawing not found');
			return false;
		}

		// Initialize likes array if it doesn't exist
		if (!drawing.likes) {
			drawing.likes = [];
		}

		console.log(`Current likes:`, drawing.likes);

		// Toggle like: remove if already liked, add if not
		const userLikedIndex = drawing.likes.indexOf(userName);
		if (userLikedIndex >= 0) {
			// Remove like
			console.log(`Removing like from ${userName}`);
			drawing.likes.splice(userLikedIndex, 1);
		} else {
			// Add like
			console.log(`Adding like from ${userName}`);
			drawing.likes.push(userName);
		}

		console.log(`Updated likes:`, drawing.likes);

		// Update the game document
		console.log(`Updating game document`);
		await updateDoc(gameRef, {
			drawings: gameData.drawings,
		});

		console.log(`Like operation successful`);
		return true;
	} catch (error) {
		console.error('Error liking drawing:', error);
		return false;
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
				dailyRewards: [],
				upgrades: [],
			};

			await setDocWithMiddleware(userRef, newUser);
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
			localStorage.removeItem('drawIt-user-v2');
			localStorage.removeItem('drawIt-games-v2');
			localStorage.removeItem('drawIt-users-v2');
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
				const drawingsWithGameId = game.drawings.map((drawing, index) => ({
					...drawing,
					gameId: doc.id,
					index: index,
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

/**
 * Simplified wrapper for setDoc without user information in middleware
 */
export async function setDocWithMiddleware(ref: any, data: any, options?: any) {
	// Remove any existing middleware field to prevent using old data
	const { _middleware, ...cleanData } = data;
	return setDoc(ref, cleanData, options);
}

/**
 * Delete all games that have users that don't exist in the user collection
 * Returns the number of deleted games
 */
export async function deleteOrphanedGames(): Promise<number> {
	try {
		// Get all users first
		const userSnapshot = await getDocs(userCollection);
		const existingUsers = new Set(
			userSnapshot.docs.map((doc) => doc.data().name),
		);

		// Get all games
		const gamesSnapshot = await getDocs(gameCollection);
		const batch = writeBatch(fireStore);
		let deletedCount = 0;

		// Check each game
		gamesSnapshot.docs.forEach((gameDoc) => {
			const game = gameDoc.data() as Game;

			// Check if all users in the game exist
			const hasOrphanedUsers = game.users.some(
				(user) => !existingUsers.has(user),
			);

			if (hasOrphanedUsers) {
				batch.delete(doc(gameCollection, gameDoc.id));
				deletedCount++;
			}
		});

		// Execute the batch delete
		if (deletedCount > 0) {
			await batch.commit();
			console.log(`Deleted ${deletedCount} orphaned games`);

			// Reset games loaded state to trigger refresh
			gamesLoaded.set(false);
		}

		return deletedCount;
	} catch (error) {
		console.error('Error deleting orphaned games:', error);
		return 0;
	}
}

/**
 * Check and give daily reward if eligible
 */
export async function checkDailyReward(user: User): Promise<boolean> {
	try {
		const today = new Date().toISOString().split('T')[0];
		if (user.dailyRewards?.includes(today)) return false;

		const rewardCoins = Math.floor(Math.random() * 10) + 3;
		const userRef = doc(userCollection, user.id);

		await updateDoc(userRef, {
			coins: user.coins + rewardCoins,
			dailyRewards: arrayUnion(today),
		});

		const updatedUser = {
			...user,
			coins: user.coins + rewardCoins,
			dailyRewards: [...(user.dailyRewards || []), today],
		};

		currentUser.set(updatedUser);
		allUsers.update((users) => ({
			...users,
			[user.name]: updatedUser,
		}));

		showSuccessToast(`Daily reward: ${rewardCoins} coins!`);
		return true;
	} catch (error) {
		console.error('Error giving daily reward:', error);
		return false;
	}
}

/**
 * Purchase a user upgrade
 */
export async function purchaseUpgrade(
	user: User,
	upgrade: UserUpgrade,
	coins: number,
): Promise<boolean> {
	try {
		if (user.upgrades.includes(upgrade)) {
			return false; // Already has this upgrade
		}

		if (user.coins < coins) {
			return false; // Not enough coins
		}

		const userRef = doc(userCollection, user.id);
		await updateDoc(userRef, {
			upgrades: arrayUnion(upgrade),
			coins: user.coins - coins,
		});

		// Fetch the latest user from the DB and normalize
		const updatedUserFromDB = await getUser(user.name);
		if (updatedUserFromDB) {
			const normalizedUser = {
				...updatedUserFromDB,
				upgrades: Array.isArray(updatedUserFromDB.upgrades)
					? updatedUserFromDB.upgrades
					: [],
				dailyRewards: Array.isArray(updatedUserFromDB.dailyRewards)
					? updatedUserFromDB.dailyRewards
					: [],
			};
			currentUser.set(normalizedUser);
		}

		return true;
	} catch (error) {
		console.error('Error purchasing upgrade:', error);
		return false;
	}
}
