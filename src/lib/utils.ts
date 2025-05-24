import type { Drawing, Game, User, WordOptions } from '../types';
import { addcoins, updateGame, getUser, loadWords } from './Firebase';
import { showSuccessToast } from './notifications';
import { words } from './words';

/**
 * Check if it's a user's turn
 */
export function isUsersTurn(game: Game, user: string): boolean {
	for (const drawing of game.drawings) {
		if (!drawing.guessed) {
			if (drawing.artist === user) {
				return true;
			}
		}
	}
	return false;
}

export async function getUserSpan(
	name: string,
): Promise<{ name: string; coins: number | null }> {
	const userData = await getUser(name);
	if (!userData) return { name, coins: null };
	return { name: userData.name, coins: userData.coins };
}

/**
 * Get the current active drawing in a game
 */
export function getCurrentDrawing(
	game: Game,
	currentUser: string,
): Drawing | null {
	const drawing = game.drawings.filter((drawing) => !drawing.guessed)[0];
	return drawing || null;
}

/**
 * Submit a guess for a drawing
 * - Updates the game in Firestore
 * - Adds coins to the user if correct
 */
export async function submitGuess(
	game: Game,
	currentUser: User,
	guess: string,
) {
	const currentDrawing = getCurrentDrawing(game, currentUser.name);
	if (!currentDrawing) {
		return;
	}

	// Normalize the guess and word for case-insensitive comparison
	const normalizedGuess = guess.toLowerCase().trim();
	const normalizedWord = currentDrawing.secretWord.toLowerCase().trim();

	let isCorrect = false;

	if (normalizedGuess === normalizedWord) {
		// Correct guess!
		isCorrect = true;
		currentDrawing.guessed = true;
		currentDrawing.guessedBy = currentUser.name;

		// Store a reference to the current user before adding coins
		const currentUserRef = { ...currentUser };

		// Add coins to the user
		await addcoins(currentUser.name, currentDrawing.coins);
		await addcoins(currentDrawing.artist, currentDrawing.coins);

		// Show success toast
		showSuccessToast(
			`It was ${currentDrawing.secretWord}! You both get ${currentDrawing.coins} coins!`,
		);

		// Generate new word options for the next drawer
		await getRandomWords(4, game);
	} else if (!currentDrawing.guesses.includes(guess)) {
		// Add to the guesses only if it's a new guess
		currentDrawing.guesses.push(guess);
	}

	// Update game in Firestore
	await updateGame(game);

	return isCorrect;
}

/**
 * Get random words for drawing options
 */
export async function getRandomWords(
	count: number,
	game?: Game,
): Promise<WordOptions[]> {
	// If game has word options, return those
	if (game?.wordOptions && game.wordOptions.length > 0) {
		return game.wordOptions;
	}

	const wordList: WordOptions[] = [];

	for (const word of words) {
		wordList.push({
			secretWord: word,
			coins: 0,
		});
	}

	let customWords = await loadWords();
	wordList.push(
		...customWords.map((word) => ({
			secretWord: word.word,
			coins: 0,
			createdBy: word.createdBy,
			createdAt: word.createdAt,
		})),
	);

	// Return random unique words with coins based on index
	const randomWords = wordList.sort(() => Math.random() - 0.5).slice(0, count);
	// Make it so the coins are based on the index
	for (let i = 0; i < randomWords.length; i++) {
		randomWords[i].coins = i + 1;
	}

	// If game is provided, update it with the new word options
	if (game) {
		game.wordOptions = randomWords;
		await updateGame(game);
	}

	return randomWords;
}

/**
 * Select a word and clear word options
 */
export async function selectWord(
	game: Game,
	currentUser: string,
	word: WordOptions,
) {
	// Clear word options after selection
	game.wordOptions = [];
	await updateGame(game);
	return word;
}

/**
 * Get the current game state for a user
 */
export function getGameState(
	game: Game,
	currentUser: string,
): 'draw' | 'guess' | 'waiting' {
	const currentDrawing = getCurrentDrawing(game, currentUser);

	// If there's no current drawing, determine who should draw next
	if (!currentDrawing) {
		// If there are no drawings yet, first player draws
		if (game.drawings.length === 0) {
			return game.users[0] === currentUser ? 'draw' : 'waiting';
		}

		// Get the last drawing that was guessed
		const lastGuessedDrawing = [...game.drawings]
			.reverse()
			.find((drawing) => drawing.guessed);

		if (!lastGuessedDrawing) {
			// If no drawings have been guessed yet, first player draws
			return game.users[0] === currentUser ? 'draw' : 'waiting';
		}

		// Find the index of the last artist in the users array
		const lastArtistIndex = game.users.indexOf(lastGuessedDrawing.artist);
		// The next artist should be the other player
		const nextArtistIndex = (lastArtistIndex + 1) % game.users.length;
		const nextArtist = game.users[nextArtistIndex];

		return nextArtist === currentUser ? 'draw' : 'waiting';
	}

	// If there is a current drawing
	if (currentDrawing.artist === currentUser) {
		return 'waiting';
	}

	return 'guess';
}

/**
 * Ensure a drawing has the hint fields
 */
export function ensureDrawingHintFields(drawing: Drawing): Drawing {
	return {
		...drawing,
		hintPurchased: drawing.hintPurchased ?? false,
		superHintPurchased: drawing.superHintPurchased ?? false,
	};
}

/**
 * Get a hint for a drawing (word length)
 */
export function getHint(drawing: Drawing): string {
	return `The word is ${drawing.secretWord.length} letters long`;
}

/**
 * Get a superhint for a drawing (scrambled letters)
 */
export function getSuperHint(drawing: Drawing): string {
	const letters = drawing.secretWord.split('');
	// Shuffle the letters
	for (let i = letters.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[letters[i], letters[j]] = [letters[j], letters[i]];
	}
	return `Letters: ${letters.join(' · ').toUpperCase()}`;
}

function toTimestamp(val: any): number {
	if (!val) return 0;
	if (val instanceof Date) return val.getTime();
	if (typeof val.toDate === 'function') return val.toDate().getTime(); // Firestore Timestamp
	if (typeof val === 'string') return new Date(val).getTime();
	return new Date(val).getTime();
}

/**
 * Purchase a hint for a drawing
 */
export async function purchaseHint(
	game: Game,
	drawing: Drawing,
	user: User,
): Promise<boolean> {
	if (user.coins < 5 || drawing.hintPurchased) return false;

	// Update the drawing in the game
	const drawingIndex = game.drawings.findIndex(
		(d) =>
			d.artist === drawing.artist &&
			toTimestamp(d.createdAt) === toTimestamp(drawing.createdAt),
	);

	if (drawingIndex === -1) return false;

	game.drawings[drawingIndex] = {
		...drawing,
		hintPurchased: true,
	};

	await updateGame(game);
	return true;
}

/**
 * Purchase a super hint for a drawing
 */
export async function purchaseSuperHint(
	game: Game,
	drawing: Drawing,
	user: User,
): Promise<boolean> {
	if (user.coins < 10 || !drawing.hintPurchased || drawing.superHintPurchased)
		return false;

	// Update the drawing in the game
	const drawingIndex = game.drawings.findIndex(
		(d) =>
			d.artist === drawing.artist &&
			toTimestamp(d.createdAt) === toTimestamp(drawing.createdAt),
	);

	if (drawingIndex === -1) return false;

	game.drawings[drawingIndex] = {
		...drawing,
		superHintPurchased: true,
	};

	await updateGame(game);
	return true;
}
