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
import {
	NotificationEntityType,
	type Game,
	type Drawing,
	type User,
	type Word,
	type UserUpgrade,
	NotificationAction,
	type UserNotification,
} from '../types';
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

export async function addNotification(
	actingUserId: string, // User ID who performed the action (e.g., liked or commented)
	drawingId: string,
	action: NotificationAction,
): Promise<void> {
	try {
		const drawingDoc = await getDoc(doc(drawingCollection, drawingId));
		if (!drawingDoc.exists()) {
			console.error('Drawing not found for notification:', drawingId);
			return;
		}
		const drawingData = drawingDoc.data() as Drawing;

		const artist = await getUserByIdOrName(drawingData.artist);
		let guessedByUser: User | null = null;
		if (drawingData.guessedBy) {
			guessedByUser = await getUserByIdOrName(drawingData.guessedBy);
		}

		const usersToNotify: User[] = [];

		if (artist && artist.id !== actingUserId) {
			usersToNotify.push(artist);
		}

		if (
			action === NotificationAction.comment &&
			guessedByUser &&
			guessedByUser.id !== actingUserId
		) {
			// Also notify the user who guessed, if they are not the artist and not the commenter
			if (!artist || guessedByUser.id !== artist.id) {
				usersToNotify.push(guessedByUser);
			}
		}

		// Remove duplicate users to notify (e.g. if artist is also the guesser)
		const uniqueUsersToNotify = usersToNotify.filter(
			(user, index, self) => index === self.findIndex((u) => u.id === user.id),
		);

		for (const userToNotify of uniqueUsersToNotify) {
			if (!userToNotify || !userToNotify.id) continue;

			const newNotification: UserNotification = {
				id: crypto.randomUUID(),
				entityId: drawingId,
				action,
				entityType: NotificationEntityType.drawing,
				userId: actingUserId, // The user who triggered the notification
				createdAt: new Date(),
				read: false,
			};

			const userRef = doc(userCollection, userToNotify.id);
			// We need to fetch the user doc again to get the latest notifications array
			const userToNotifyDoc = await getDoc(userRef);
			if (userToNotifyDoc.exists()) {
				const userToNotifyData = userToNotifyDoc.data() as User;
				const currentNotifications = Array.isArray(
					userToNotifyData.notifications,
				)
					? userToNotifyData.notifications
					: [];
				// Only add if this notification id does not already exist
				if (
					!currentNotifications.some((n: any) => n.id === newNotification.id)
				) {
					await updateDoc(userRef, {
						notifications: arrayUnion(newNotification),
					});
				}
			}
		}
	} catch (error) {
		console.error('Error adding notification:', error);
	}
}

export async function addComment(
	drawingId: string,
	comment: string,
	username: string,
	userId: string,
): Promise<Drawing | null> {
	try {
		// get doc  with the id
		const ddoc = await getDoc(doc(drawingCollection, drawingId));
		if (!ddoc.exists()) {
			console.error(`Drawing not found for ${drawingId}`);
			return null;
		}
		const ddata = ddoc.data() as Drawing;

		const newComment = { content: comment, createdBy: username };
		const updatedComments = [...(ddata.comments || []), newComment];

		await updateDoc(ddoc.ref, { comments: updatedComments });

		// Use the acting user's ID for the notification
		await addNotification(
			userId, // ID of the user who made the comment
			drawingId,
			NotificationAction.comment,
		);
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
	name = name.toLowerCase();
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
			notifications: [],
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
		// Fetch drawing by Firestore document ID, not by 'id' field
		const drawingRef = doc(drawingCollection, drawingId);
		const drawingDoc = await getDoc(drawingRef);

		if (!drawingDoc.exists()) {
			console.error(`Drawing not found ${drawingId} to like.`);
			return false;
		}

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

			// Add notification for the artist when someone likes their drawing
			if (drawingData.artist) {
				const artistUser = await getUser(drawingData.artist);
				if (artistUser && artistUser.id) {
					// userName is currently a name, so get the user by name to get their ID
					const likingUser = await getUser(userName);
					if (likingUser && likingUser.id) {
						addNotification(
							likingUser.id, // ID of the user who liked the drawing
							drawingId,
							NotificationAction.like,
						);
					}
				}
			}
		}

		console.log(`Updated likes:`, updatedLikes);

		await updateDoc(drawingRef, {
			likes: updatedLikes,
			likesCount: updatedLikes.length,
		});

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
				notifications: [],
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
export async function getRecentDrawings(
	sortBy: 'recent' | 'likes' = 'recent',
): Promise<Drawing[]> {
	try {
		let drawingsQuery;

		if (sortBy === 'likes') {
			// Sort by number of likes (descending)
			drawingsQuery = query(
				drawingCollection,
				orderBy('likesCount', 'desc'),
				limit(50),
			);
		} else {
			// Default sort by creation date (descending)
			drawingsQuery = query(
				drawingCollection,
				orderBy('createdAt', 'desc'),
				limit(50),
			);
		}

		const drawingsSnapshot = await getDocs(drawingsQuery);

		const allDrawings: Drawing[] = drawingsSnapshot.docs.map((doc) => {
			const drawing = doc.data() as Drawing;
			return { ...drawing, id: doc.id };
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

		showSuccessToast(`Hi ${user.name}: Here are your ${rewardCoins} coins!`);
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

		// Ensure artist is in likes array and likesCount is 1 by default
		let likes = Array.isArray(drawingData.likes) ? drawingData.likes : [];
		if (!likes.includes(drawingData.artist)) {
			likes = [drawingData.artist, ...likes];
		}
		const likesCount = likes.length;

		await setDoc(drawingRef, { ...drawingData, likes, likesCount });

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

		return { ...drawingData, likes, likesCount, id: finalDrawingId };
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

/**
 * Mark a notification as read for a user
 */
export async function markNotificationRead(
	userId: string,
	notificationId: string,
): Promise<void> {
	const userRef = doc(userCollection, userId);
	const userDoc = await getDoc(userRef);
	if (!userDoc.exists()) return;
	const userData = userDoc.data() as Omit<User, 'id'>;
	const notifications = Array.isArray(userData.notifications)
		? userData.notifications
		: [];
	const updatedNotifications = notifications.map((n: any) =>
		n.id === notificationId ? { ...n, read: true } : n,
	);
	await updateDoc(userRef, { notifications: updatedNotifications });
}

/**
 * Lowercase all user names in the database and update corresponding game references
 */
export async function lowercaseAllUserNames(): Promise<void> {
	try {
		// Get all users
		const userSnapshot = await getDocs(userCollection);
		const batch = writeBatch(fireStore);
		let updateCount = 0;

		// First pass: Update all user names to lowercase
		for (const userDoc of userSnapshot.docs) {
			const userData = userDoc.data() as User;
			const originalName = userData.name;
			const lowercaseName = originalName.toLowerCase();

			if (originalName !== lowercaseName) {
				batch.update(doc(userCollection, userDoc.id), { name: lowercaseName });
				updateCount++;
			}
		}

		// Commit user updates
		if (updateCount > 0) {
			await batch.commit();
			console.log(`Updated ${updateCount} user names to lowercase`);
		}

		// Second pass: Update all games to use lowercase names
		const gamesSnapshot = await getDocs(gameCollection);
		const gameBatch = writeBatch(fireStore);
		let gameUpdateCount = 0;

		for (const gameDoc of gamesSnapshot.docs) {
			const gameData = gameDoc.data() as Game;
			const originalUsers = gameData.users;
			const lowercaseUsers = originalUsers.map((name) => name.toLowerCase());

			if (JSON.stringify(originalUsers) !== JSON.stringify(lowercaseUsers)) {
				gameBatch.update(doc(gameCollection, gameDoc.id), {
					users: lowercaseUsers,
				});
				gameUpdateCount++;
			}
		}

		// Commit game updates
		if (gameUpdateCount > 0) {
			await gameBatch.commit();
			console.log(`Updated ${gameUpdateCount} games with lowercase user names`);
		}

		// Reset games loaded state to trigger refresh
		gamesLoaded.set(false);

		// Show success message
		showSuccessToast(
			`Updated ${updateCount} users and ${gameUpdateCount} games`,
		);
	} catch (error) {
		console.error('Error updating names to lowercase:', error);
		throw error;
	}
}

export async function getUserById(id: string): Promise<User | null> {
	try {
		const userDoc = await getDoc(doc(userCollection, id));
		if (userDoc.exists()) {
			const userData = userDoc.data() as Omit<User, 'id'>;
			const user = { ...userData, id: userDoc.id } as User;
			allUsers.update((users) => ({ ...users, [user.id]: user }));
			return user;
		}
		return null;
	} catch (error) {
		console.error('Error getting user by ID:', error);
		return null;
	}
}

/**
 * Get a user by ID or name
 */
export async function getUserByIdOrName(
	identifier: string,
): Promise<User | null> {
	try {
		// Try fetching by ID first
		let userDoc = await getDoc(doc(userCollection, identifier));
		if (userDoc.exists()) {
			const userData = userDoc.data() as Omit<User, 'id'>;
			const user = { ...userData, id: userDoc.id } as User;
			allUsers.update((users) => ({
				...users,
				[user.name]: user,
				[user.id]: user,
			}));
			return user;
		}

		// If not found by ID, try fetching by name (original case)
		let userSnapshot = await getDocs(
			query(userCollection, where('name', '==', identifier)),
		);
		if (!userSnapshot.empty) {
			const userFoundDoc = userSnapshot.docs[0];
			const userData = userFoundDoc.data() as Omit<User, 'id'>;
			const user = { ...userData, id: userFoundDoc.id } as User;
			allUsers.update((users) => ({
				...users,
				[user.name]: user,
				[user.id]: user,
			}));
			return user;
		}

		// If not found by original case name, try lowercase version of identifier,
		// assuming names in DB might be consistently lowercase.
		const lowerIdentifier = identifier.toLowerCase();
		if (identifier !== lowerIdentifier) {
			// Only query if different to avoid re-querying if already lowercase
			userSnapshot = await getDocs(
				query(userCollection, where('name', '==', lowerIdentifier)),
			);
			if (!userSnapshot.empty) {
				const userFoundDoc = userSnapshot.docs[0];
				const userData = userFoundDoc.data() as Omit<User, 'id'>;
				const user = { ...userData, id: userFoundDoc.id } as User;
				allUsers.update((users) => ({
					...users,
					[user.name]: user,
					[user.id]: user,
				}));
				return user;
			}
		}

		return null;
	} catch (error) {
		console.error('Error getting user by ID or name:', error);
		return null;
	}
}

// Backfill likesCount for all drawings in the DB
export async function backfillLikesCount(): Promise<void> {
	try {
		const drawingsSnapshot = await getDocs(drawingCollection);
		for (const docSnap of drawingsSnapshot.docs) {
			const data = docSnap.data() as Drawing;
			let likes = Array.isArray(data.likes) ? data.likes : [];
			const artist =
				typeof data.artist === 'string' && data.artist.trim()
					? data.artist
					: null;
			if (artist && !likes.includes(artist)) {
				likes = [artist, ...likes];
			}
			const likesCount = likes.length;
			if (artist) {
				await updateDoc(docSnap.ref, { likes, likesCount });
			} else {
				console.warn(
					`Skipped drawing ${docSnap.id}: missing or invalid artist`,
				);
			}
		}
		console.log(
			'Backfilled likesCount for all drawings and ensured artist likes their own drawing.',
		);
	} catch (error) {
		console.error('Error backfilling likesCount:', error);
	}
}

/**
 * Get all drawings from the drawings collection
 * Returns all drawings sorted by creation date (descending)
 */
export async function getAllDrawings(): Promise<Drawing[]> {
	try {
		const drawingsQuery = query(
			drawingCollection,
			orderBy('createdAt', 'desc'),
		);

		const drawingsSnapshot = await getDocs(drawingsQuery);

		const allDrawings: Drawing[] = drawingsSnapshot.docs.map((doc) => {
			const drawing = doc.data() as Drawing;
			return { ...drawing, id: doc.id };
		});

		console.log('Fetched all drawings:', allDrawings.length);
		return allDrawings;
	} catch (error) {
		console.error('Error fetching all drawings:', error);
		return [];
	}
}
