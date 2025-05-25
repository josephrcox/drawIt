import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
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
	deleteDoc,
	limit,
	orderBy,
	getCountFromServer,
	FieldPath,
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
	authUser,
} from '../store';
import { showSuccessToast } from './notifications';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
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

// Initialize Firebase Auth
export const auth = getAuth(app);

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
	drawingId: string,
	comment: string,
	user: string,
): Promise<Drawing | null> {
	try {
		// get doc  with the id
		const ddoc = await getDoc(doc(drawingCollection, drawingId));
		if (!ddoc.exists()) {
			console.error(`Drawing not found for ${drawingId}`);
			return null;
		}
		const ddata = ddoc.data() as Drawing;

		const newComment = { content: comment, createdBy: user };
		const updatedComments = [...(ddata.comments || []), newComment];

		await updateDoc(ddoc.ref, { comments: updatedComments });

		return { ...ddata, comments: updatedComments, id: ddoc.id };
	} catch (error) {
		console.error('Error adding comment:', error);
		return null;
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
		// Validate word format - only allow English letters and numbers
		if (!/^[a-zA-Z0-9]+$/.test(word)) {
			throw new Error(
				'Invalid word format - only English letters and numbers are allowed',
			);
		}

		const wordRef = doc(wordCollection);
		const newWord: Word = {
			word: word,
			createdBy,
			createdAt: new Date(),
		};

		await setDocWithMiddleware(wordRef, newWord);
	} catch (error) {
		console.error('Error creating custom word:', error);
		throw error; // Re-throw to handle in UI
	}
}

// Initialize anonymous auth on app start
export async function initializeAuth() {
	try {
		const result = await signInAnonymously(auth);
		authUser.set(result.user);
		return result.user;
	} catch (error) {
		console.error('Error initializing auth:', error);
		return null;
	}
}

/**
 * Create or retrieve a user
 */
export async function createUser(name: string): Promise<User> {
	try {
		// Check if user already exists
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

		// Create new user
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
		drawingsCount: 0,
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
		// Only update game-specific fields. Drawings are handled separately.
		const gameDataToUpdate: Partial<Game> = {};
		if (game.wordOptions !== undefined) {
			gameDataToUpdate.wordOptions = game.wordOptions;
		}
		if (game.users !== undefined) {
			gameDataToUpdate.users = game.users;
		}
		if (game.drawingsCount !== undefined) {
			gameDataToUpdate.drawingsCount = game.drawingsCount;
		}
		// Add any other game-specific, non-drawing fields here if necessary

		if (Object.keys(gameDataToUpdate).length > 0) {
			await updateDoc(gameRef, gameDataToUpdate);
		}
		return game; // Return the game object passed in, potentially with local modifications
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
	drawingId: string,
	userName: string,
): Promise<boolean> {
	try {
		const drawingsQuery = query(
			drawingCollection,
			where('id', '==', drawingId),
			limit(1),
		);
		const drawingSnapshot = await getDocs(drawingsQuery);

		if (drawingSnapshot.empty) {
			console.error(`Drawing not found ${drawingId} to like.`);
			return false;
		}

		const drawingDoc = drawingSnapshot.docs[0];
		const drawingData = drawingDoc.data() as Drawing;

		// Initialize likes array if it doesn't exist
		const currentLikes = drawingData.likes || [];
		let updatedLikes: string[];

		const userLikedIndex = currentLikes.indexOf(userName);
		if (userLikedIndex >= 0) {
			// Remove like
			console.log(`Removing like from ${userName}`);
			updatedLikes = currentLikes.filter((u) => u !== userName);
		} else {
			// Add like
			console.log(`Adding like from ${userName}`);
			updatedLikes = [...currentLikes, userName];
		}

		console.log(`Updated likes:`, updatedLikes);

		await updateDoc(drawingDoc.ref, { likes: updatedLikes });

		console.log(`Like operation successful for drawing ${drawingDoc.id}`);
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
		// Fetch drawings directly from the drawingCollection
		// The 'index' field on these drawings is the originalIndex from the game
		// The 'gameId' field is also present
		const drawingsSnapshot = await getDocs(
			query(drawingCollection, orderBy('createdAt', 'desc'), limit(50)),
		);

		const allDrawings: Drawing[] = drawingsSnapshot.docs.map((doc) => {
			const drawing = doc.data() as Drawing;
			// The drawing document should already have gameId, originalIndex (as 'index'), and 'guessedBy' if set.
			// We might need to fetch game user list if the old `guessedBy` logic is critical.
			// For now, assume `guessedBy` is the actual guesser or empty.
			return { ...drawing, id: doc.id }; // Add document ID to the drawing object
		});

		console.log('Fetched recent drawings:', allDrawings);
		return allDrawings;
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

/**
 * Delete a game
 */
export async function deleteGame(gameId: string): Promise<boolean> {
	try {
		const gameRef = doc(gameCollection, gameId);
		await deleteDoc(gameRef);

		// Reset games loaded state to trigger refresh
		gamesLoaded.set(false);
		return true;
	} catch (error) {
		console.error('Error deleting game:', error);
		return false;
	}
}

/**
 * Initialize user session and load games
 * This should be called on mount of any page that needs user data
 */
export async function initializeUserSession(): Promise<boolean> {
	try {
		// Ensure we have an authenticated user
		const currentAuth = get(authUser);
		if (!currentAuth) {
			await initializeAuth();
		}

		// Always fetch fresh user data from DB if we have a name
		const currentUserValue = get(currentUser);
		if (currentUserValue?.name) {
			const dbUser = await getUser(currentUserValue.name);

			if (!dbUser) {
				// If user doesn't exist anymore, clear the store
				currentUser.set(null);
				return false;
			}

			// Normalize user fields
			const normalizedUser = {
				...dbUser,
				upgrades: Array.isArray(dbUser.upgrades) ? dbUser.upgrades : [],
				dailyRewards: Array.isArray(dbUser.dailyRewards)
					? dbUser.dailyRewards
					: [],
			};

			// Check for daily reward
			await checkDailyReward(normalizedUser);

			// Load games and cache other users in those games
			const games = await loadGames(normalizedUser.name);
			const otherUsers = games.flatMap((game) =>
				game.users.filter((name) => name !== normalizedUser.name),
			);
			await loadUsers(otherUsers);
			gamesLoaded.set(true);

			// Only now set currentUser to the normalized DB value
			currentUser.set(normalizedUser);
			return true;
		}
		return false;
	} catch (error) {
		console.error('Error initializing user session:', error);
		return false;
	}
}

function migrateDrawings() {
	throw new Error('Function not implemented.');
}

/**
 * Get all drawings for a specific game ID
 */
export async function getDrawingsForGame(gameId: string): Promise<Drawing[]> {
	try {
		const q = query(
			drawingCollection,
			where('gameId', '==', gameId),
			orderBy('createdAt', 'desc'),
			limit(1),
		);
		const drawingsSnapshot = await getDocs(q);

		const drawings = drawingsSnapshot.docs.map((doc) => {
			const data = doc.data() as Omit<Drawing, 'id'>;
			return { ...data, id: doc.id } as Drawing;
		});

		return drawings;
	} catch (error) {
		console.error(`Error fetching drawings for game ${gameId}:`, error);
		return [];
	}
}

export async function getDrawingsCountForGame(gameId: string): Promise<number> {
	const q = query(drawingCollection, where('gameId', '==', gameId));
	const countSnapshot = await getCountFromServer(q);
	return countSnapshot.data().count;
}

/**
 * Update specific fields of a drawing document
 */
export async function updateDrawing(
	drawingId: string,
	updates: Partial<Drawing>,
): Promise<boolean> {
	try {
		console.log('Updating drawing with ID:', drawingId);
		console.log('Updates being applied:', updates);
		const drawingRef = doc(drawingCollection, drawingId);
		await updateDoc(drawingRef, updates);
		console.log('Successfully updated drawing:', drawingId);
		return true;
	} catch (error) {
		console.error(`Error updating drawing ${drawingId}:`, error);
		return false;
	}
}

// --- SHA-256 Helper --- START ---
// Uses Web Crypto API (available in modern Node.js 15+ and browsers)
// For older Node.js, you might need to use the built-in 'crypto' module.
export async function sha256(str: string): Promise<string> {
	const buffer = new TextEncoder().encode(str);
	const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');
	return hashHex;
}
// --- SHA-256 Helper --- END ---

/**
 * Create a new drawing document in the drawings collection
 */
export async function createNewDrawing(
	drawingData: Drawing,
): Promise<Drawing | null> {
	try {
		if (!drawingData.id) {
			const newDocRef = doc(drawingCollection);
			drawingData.id = newDocRef.id;
		}
		const finalDrawingId = drawingData.id as string;
		const drawingRef = doc(drawingCollection, finalDrawingId);
		await setDoc(drawingRef, drawingData);

		// Increment drawingsCount on the game
		if (drawingData.gameId) {
			const gameRef = doc(gameCollection, drawingData.gameId);
			const gameDoc = await getDoc(gameRef);
			if (gameDoc.exists()) {
				const game = gameDoc.data() as Game;
				const currentCount = game.drawingsCount || 0;
				await updateDoc(gameRef, { drawingsCount: currentCount + 1 });

				// Update local allGames store if game is present
				allGames.update((ags) => {
					if (ags[drawingData.gameId!]) {
						ags[drawingData.gameId!].drawingsCount = currentCount + 1;
					}
					return ags;
				});
			}
		}

		return { ...drawingData, id: finalDrawingId };
	} catch (error) {
		console.error('Error creating new drawing:', error);
		return null;
	}
}

export async function getGame(gameId: string): Promise<Game | null> {
	try {
		const gameRef = doc(gameCollection, gameId);
		const gameDoc = await getDoc(gameRef);
		if (gameDoc.exists()) {
			return gameDoc.data() as Game;
		}
		return null;
	} catch (error) {
		console.error('Error getting game:', error);
		return null;
	}
}
