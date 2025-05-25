import {
	UserUpgrade,
	type Drawing,
	type Game,
	type User,
	type WordOptions,
} from '../types';
import {
	addcoins,
	updateGame,
	getUser,
	loadWords,
	getDrawingsForGame,
	updateDrawing,
	drawingCollection,
	getGame,
} from './Firebase';
import { doc as firebaseDoc, setDoc } from 'firebase/firestore';
import { showSuccessToast } from './notifications';
import { words as defaultWords } from './words';

/**
 * Check if it's the user's turn to guess. (Not to draw)
 */
export function isUsersTurnToGuess(
	currentDrawing: Drawing | null,
	currentUser: string,
): boolean {
	if (!currentDrawing) return false; // No active drawing, so not turn to guess
	return currentDrawing.artist !== currentUser && !currentDrawing.guessed;
}

export async function getUserSpan(
	name: string,
): Promise<{ name: string; coins: number | null }> {
	const userData = await getUser(name);
	if (!userData) return { name, coins: null };
	return { name: userData.name, coins: userData.coins };
}

/**
 * Get the current active (un-guessed) drawing from a list of drawings.
 * Drawings should be pre-sorted if a specific order (e.g., latest) is critical before calling this.
 * Typically, the latest un-guessed drawing is considered current.
 */
export function getCurrentDrawing(drawings: Drawing[]): Drawing | null {
	if (!drawings || drawings.length === 0) return null;
	// Find the first un-guessed drawing. Assumes drawings are sorted by creation desc or originalIndex asc.
	// Or, more robustly, sort here if not guaranteed by caller
	const sortedDrawings = [...drawings].sort((a, b) => {
		const dateA =
			a.createdAt instanceof Date
				? a.createdAt.getTime()
				: new Date(a.createdAt as any).getTime();
		const dateB =
			b.createdAt instanceof Date
				? b.createdAt.getTime()
				: new Date(b.createdAt as any).getTime();
		return dateB - dateA; // Most recent first
	});
	const drawing = sortedDrawings.find((d) => !d.guessed);
	return drawing || null;
}

/**
 * Submit a guess for a drawing.
 */
export async function submitGuess(
	gameId: string, // For context, e.g. if triggering word regeneration for the game
	currentDrawing: Drawing,
	currentUser: User,
	guess: string,
): Promise<boolean> {
	if (!currentDrawing || !currentDrawing.id) {
		console.error('submitGuess: Invalid currentDrawing object or missing ID.');
		return false;
	}

	const normalizedGuess = guess.toLowerCase().trim();
	const normalizedWord = currentDrawing.secretWord.toLowerCase().trim();

	let isCorrect = false;
	const updates: Partial<Drawing> = {};

	if (normalizedGuess === normalizedWord) {
		isCorrect = true;
		updates.guessed = true;
		updates.guessedBy = currentUser.name;
		console.log('Correct guess! Setting updates:', updates);

		// Make addcoins non-blocking for the UI transition
		addcoins(currentUser.name, currentDrawing.coins).catch((error) => {
			console.error(
				`Error adding coins to guesser ${currentUser.name}:`,
				error,
			);
		});
		addcoins(currentDrawing.artist, currentDrawing.coins).catch((error) => {
			console.error(
				`Error adding coins to artist ${currentDrawing.artist}:`,
				error,
			);
		});

		let moreWordOptions = currentUser.upgrades?.includes(
			UserUpgrade.MoreWordOptions,
		);

		showSuccessToast(
			`It was ${currentDrawing.secretWord}! You both get ${currentDrawing.coins} coins!`,
		);
		// After a correct guess, new word options might be needed for the *game*.
		// These are critical for the next step, so await them.
		await getRandomWords(moreWordOptions ? 5 : 3, gameId, true); // Pass gameId and force regeneration
	} else {
		const currentGuesses = currentDrawing.guesses || [];
		if (!currentGuesses.includes(guess)) {
			updates.guesses = [...currentGuesses, guess];
		}
	}

	if (Object.keys(updates).length > 0) {
		console.log('Submitting updates to drawing:', updates);
		await updateDrawing(currentDrawing.id, updates);
	}

	return isCorrect;
}

/**
 * Get random words for drawing options.
 * If gameId is provided, it fetches the game and updates its wordOptions.
 */
export async function getRandomWords(
	count: number,
	gameId?: string,
	force: boolean = false,
): Promise<WordOptions[]> {
	let game: Game | null = null;
	if (gameId) {
		game = await getGame(gameId);
		if (game?.wordOptions && game.wordOptions.length > 0 && !force) {
			return game.wordOptions;
		}
	}

	const wordList: WordOptions[] = defaultWords.map((word) => ({
		secretWord: word,
		coins: 0,
	}));

	const customWordsList = await loadWords();
	wordList.push(
		...customWordsList.map((word) => ({
			secretWord: word.word,
			coins: 0,
			createdBy: word.createdBy,
			createdAt: word.createdAt,
		})),
	);

	const randomWords = [...wordList]
		.sort(() => Math.random() - 0.5)
		.slice(0, count);
	randomWords.forEach((word, i) => {
		word.coins = i + 1;
	});

	if (gameId) {
		// If gameId was provided, attempt to update its wordOptions
		await updateGame({
			id: gameId,
			wordOptions: randomWords,
		} as Partial<Game> as Game);
	}

	return randomWords;
}

/**
 * Select a word and create a new drawing document.
 * Also clears word options on the game.
 */
export async function selectWord(
	gameId: string,
	currentUser: User,
	word: WordOptions,
	originalIndex: number, // The index this drawing would have had in the old array
): Promise<Drawing | null> {
	try {
		const newDrawingRef = firebaseDoc(drawingCollection); // Get a new document reference
		const newDrawing: Drawing = {
			id: newDrawingRef.id, // Store the future ID
			secretWord: word.secretWord,
			coins: word.coins,
			data: '', // Canvas data will be filled in later
			artist: currentUser.name,
			guessed: false,
			guesses: [],
			createdAt: new Date(),
			guessedBy: '',
			hintPurchased: false,
			superHintPurchased: false,
			comments: [],
			likes: [],
			gameId: gameId,
			originalIndex: originalIndex,
			dataHash: '', // Will be set when actual data is submitted
		};

		// Note: We are NOT saving the drawing to Firestore here.
		// This function now just prepares a drawing object.
		// The actual save (setDoc) should happen after the user draws something.
		// The GameScreen component will handle creating the drawing with canvas data.

		// Clear word options on the game
		await updateGame({ id: gameId, wordOptions: [] } as Partial<Game> as Game);

		return newDrawing;
	} catch (error) {
		console.error('Error in selectWord:', error);
		return null;
	}
}

/**
 * Get the current game state for a user.
 */
export function getGameState(
	gameUsers: string[],
	drawings: Drawing[], // Assumes drawings are for the relevant game and sorted if necessary
	currentUser: string,
): 'draw' | 'guess' | 'waiting' {
	const currentDrawing = getCurrentDrawing(drawings); // Gets the latest un-guessed drawing

	if (!currentDrawing) {
		// No active drawing
		if (drawings.length === 0) {
			// No drawings at all, the first user in the list draws
			return gameUsers[0] === currentUser ? 'draw' : 'waiting';
		}

		// All drawings are guessed, determine who draws next
		// Sort drawings by originalIndex (or createdAt as fallback) to find the chronologically last one
		const sortedDrawings = [...drawings].sort((a, b) => {
			const indexA = a.originalIndex ?? Number.MAX_SAFE_INTEGER;
			const indexB = b.originalIndex ?? Number.MAX_SAFE_INTEGER;
			if (indexA !== indexB) return indexA - indexB;
			const dateA =
				a.createdAt instanceof Date
					? a.createdAt.getTime()
					: new Date(a.createdAt as any).getTime();
			const dateB =
				b.createdAt instanceof Date
					? b.createdAt.getTime()
					: new Date(b.createdAt as any).getTime();
			return dateA - dateB;
		});
		const lastDrawing = sortedDrawings[sortedDrawings.length - 1];

		if (!lastDrawing) {
			// Should not happen if drawings.length > 0
			return gameUsers[0] === currentUser ? 'draw' : 'waiting';
		}

		const lastArtistIndex = gameUsers.indexOf(lastDrawing.artist);
		if (lastArtistIndex === -1) {
			// Last artist not in current game users? Default to first player.
			return gameUsers[0] === currentUser ? 'draw' : 'waiting';
		}

		const nextArtistIndex = (lastArtistIndex + 1) % gameUsers.length;
		const nextArtist = gameUsers[nextArtistIndex];

		return nextArtist === currentUser ? 'draw' : 'waiting';
	}

	// There is an active (un-guessed) drawing
	if (currentDrawing.artist === currentUser) {
		return 'waiting'; // User is the artist of the current un-guessed drawing
	}

	return 'guess'; // User is not the artist, so they should guess
}

export function ensureDrawingHintFields(drawing: Drawing): Drawing {
	return {
		...drawing,
		hintPurchased: drawing.hintPurchased ?? false,
		superHintPurchased: drawing.superHintPurchased ?? false,
	};
}

export function getHint(drawing: Drawing): string {
	return `The word is ${drawing.secretWord.length} letters long`;
}

export function getSuperHint(drawing: Drawing): string {
	const letters = drawing.secretWord.split('');
	for (let i = letters.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[letters[i], letters[j]] = [letters[j], letters[i]];
	}
	return `Letters: ${letters.join(' · ').toUpperCase()}`;
}

function toTimestamp(val: any): number {
	if (!val) return 0;
	if (val instanceof Date) return val.getTime();
	if (typeof val.toDate === 'function') return val.toDate().getTime();
	if (typeof val === 'string') return new Date(val).getTime();
	return new Date(val).getTime();
}

export async function purchaseHint(
	drawingId: string,
	user: User,
): Promise<boolean> {
	if (!drawingId) {
		console.error('purchaseHint: drawingId is required.');
		return false;
	}
	// Caller should ensure user has enough coins & drawing.hintPurchased is false
	const success = await updateDrawing(drawingId, { hintPurchased: true });
	if (success) {
		// Coin deduction should be handled by the caller after successful purchase
	}
	return success;
}

export async function purchaseSuperHint(
	drawingId: string,
	user: User,
	// Caller ensures drawing.hintPurchased is true & user has coins & drawing.superHintPurchased is false
): Promise<boolean> {
	if (!drawingId) {
		console.error('purchaseSuperHint: drawingId is required.');
		return false;
	}
	const success = await updateDrawing(drawingId, { superHintPurchased: true });
	if (success) {
		// Coin deduction should be handled by the caller after successful purchase
	}
	return success;
}
