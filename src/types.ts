export type User = {
	id: string;
	name: string;
	coins: number;
	createdAt: Date;
	dailyRewards: string[]; // Array of ISO date strings
	upgrades: UserUpgrade[];
	notifications: UserNotification[];
};

export enum NotificationAction {
	like = 'like',
	comment = 'comment',
}

export enum NotificationEntityType {
	drawing = 'drawing',
}

export type UserNotification = {
	id: string; // Unique identifier for the notification
	entityId: string;
	entityType: NotificationEntityType;
	action: NotificationAction;
	createdAt: Date;
	read: boolean;
	userId: string;
};

export type localUserReference = {
	name: string;
	id: number;
	coins: number;
};

export type Drawing = {
	id?: string; // Firestore document ID
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
	originalIndex?: number; // Renamed from index for clarity with migration
	dataHash?: string; // For de-duplication
	likesCount?: number;
};

export type Comment = {
	content: string;
	createdBy: string;
};

export enum UserUpgrade {
	MoreWordOptions = 'moreWordOptions',
	ColorPicker = 'colorPicker',
}

export type Game = {
	id: string;
	users: string[]; // user names
	createdAt: Date;
	wordOptions: WordOptions[];
	drawingsCount?: number;
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
