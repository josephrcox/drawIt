export type User = {
	id: string;
	name: string;
	coins: number;
	createdAt: Date;
};

export type localUserReference = {
	name: string;
	id: number;
	coins: number;
};

export type Drawing = {
	secretWord: string;
	coins: number;
	data: string; // base64 encoded image
	artist: string; // Player.name
	guessed: boolean;
	guesses: string[]; // Each guess is a string
	createdAt: Date;
	guessedBy: string; // Player.name
	hintPurchased: boolean;
	superHintPurchased: boolean;
	comments: Comment[];
	likes: string[]; // Player.name
	gameId?: string;
	index?: number;
};

export type Comment = {
	content: string;
	createdBy: string;
};

export type Game = {
	id: string;
	users: string[]; // user names
	drawings: Drawing[]; // new drawing ids are pushed and then pulled from the drawings collection
	createdAt: Date;
};

export type WordOptions = {
	secretWord: string;
	coins: number;
	createdBy?: string; // user name
	createdAt?: Date;
};

export type Word = {
	word: string;
	createdBy?: string; // user name
	createdAt?: Date;
};
