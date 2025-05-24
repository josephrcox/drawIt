<script lang="ts">
	import {
		currentUser,
		currentUserGames,
		currentGame,
		allUsers,
		gamesLoaded,
	} from '../store';
	import coinGif from '../assets/coin.gif';
	import Logo from '../components/Logo.svelte';
	import { addcoins, createCustomWord, purchaseUpgrade } from './Firebase';
	import { showSuccessToast } from './notifications';
	import { UserUpgrade } from '../types';

	export let navigate: (page: string) => void;

	let customWordDraft = '';

	// Only allow a-z, A-Z, 0-9, and spaces
	function sanitize(input: string): string {
		return input.replace(/[^a-zA-Z0-9 ]/g, '');
	}

	// Sanitize on every input
	function handleInput(e: Event) {
		const input = e.target as HTMLInputElement;
		customWordDraft = sanitize(input.value);
	}

	// Derived validation: only valid if user exists, has enough coins, and input is correct length
	$: user = $currentUser;
	$: isValid =
		user &&
		user.coins !== undefined &&
		user.coins >= 30 &&
		customWordDraft.length >= 3 &&
		customWordDraft.length <= 15;

	async function addCustomWord() {
		if (!isValid || !user) return;
		let sanitized = sanitize(customWordDraft);
		sanitized = sanitized.trim();
		await addcoins(user.name, -30);
		await createCustomWord(sanitized, user.name);
		showSuccessToast('Custom word added!');
		customWordDraft = '';
	}

	function logout() {
		// Clear all stores
		currentUser.set(null);
		currentUserGames.set([]);
		currentGame.set(null);
		allUsers.set({});
		gamesLoaded.set(false);

		// Clear localStorage
		localStorage.clear();

		// Refresh the window
		window.location.reload();
	}
</script>

<div class="p-4">
	<Logo {navigate} />
	<div class="flex flex-col items-center justify-center mt-8">
		<div class="flex items-center gap-2">
			<img src={coinGif} class="w-8 h-8" alt="coins" />
			<span class="text-2xl font-bold">{user?.coins || 0}</span>
		</div>
		<p class="text-gray-600">Your current balance</p>

		<div
			class="flex flex-col items-center justify-center gap-2 pt-8 drop-shadow-sm"
		>
			<div
				class="flex flex-col items-start justify-center gap-4 bg-white p-4 rounded-2xl"
			>
				<div class="flex flex-row justify-between w-full">
					<p class="text-gray-600 text-lg font-bold">🤬 Add a Custom Word</p>
					<div class="flex flex-row items-center justify-center gap-2">
						<img src={coinGif} class="w-4 h-4" alt="coins" />
						<span class="text-md font-bold">30</span>
					</div>
				</div>

				<p class="text-gray-600 opacity-50 text-xs">
					Add a custom word to everyone's word options.
				</p>

				<div class="flex flex-row justify-between w-full gap-4">
					<input
						type="text"
						placeholder="Enter custom word"
						class="input input-bordered w-full max-w-xs text-black bg-white"
						maxlength="15"
						minlength="3"
						bind:value={customWordDraft}
						on:input={handleInput}
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								addCustomWord();
							}
						}}
					/>
					<button
						class="btn btn-primary {isValid ? '' : 'opacity-50'}"
						on:click={addCustomWord}
						disabled={!isValid}
					>
						Submit
					</button>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-center gap-4 pt-8 drop-shadow-sm"
		>
			<div
				class="flex flex-col items-start justify-center gap-4 bg-white p-4 rounded-2xl"
			>
				<div class="flex flex-row justify-between w-full">
					<p class="text-gray-600 text-lg font-bold">🤔 More Word Options</p>
					<div class="flex flex-row items-center justify-center gap-2">
						<img src={coinGif} class="w-4 h-4" alt="coins" />
						<span class="text-md font-bold">50</span>
					</div>
				</div>

				<p class="text-gray-600 opacity-50 text-xs">
					Permanently get 5 word options instead of 3 when drawing.
				</p>

				<button
					class="btn btn-primary w-full {($currentUser?.coins ?? 0) < 50 ||
					$currentUser?.upgrades?.includes(UserUpgrade.MoreWordOptions)
						? 'opacity-50 cursor-not-allowed'
						: ''}"
					on:click={async () => {
						if (
							$currentUser &&
							($currentUser.coins ?? 0) >= 50 &&
							!$currentUser.upgrades?.includes(UserUpgrade.MoreWordOptions)
						) {
							const success = await purchaseUpgrade(
								$currentUser,
								UserUpgrade.MoreWordOptions,
								50,
							);
							if (success) {
								showSuccessToast(
									'Upgrade purchased! You now get 5 word options!',
								);
							}
						}
					}}
					disabled={!$currentUser ||
						($currentUser.coins ?? 0) < 50 ||
						$currentUser.upgrades?.includes(UserUpgrade.MoreWordOptions)}
				>
					{$currentUser?.upgrades?.includes(UserUpgrade.MoreWordOptions)
						? 'Already Purchased ✅'
						: 'Purchase Upgrade'}
				</button>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-center gap-4 pt-8 drop-shadow-sm"
		>
			<div
				class="flex flex-col items-start justify-center gap-4 bg-white p-4 rounded-2xl"
			>
				<div class="flex flex-row justify-between w-full">
					<p class="text-gray-600 text-lg font-bold">🌈 Color Wheel</p>
					<div class="flex flex-row items-center justify-center gap-2">
						<img src={coinGif} class="w-4 h-4" alt="coins" />
						<span class="text-md font-bold">75</span>
					</div>
				</div>

				<p class="text-gray-600 opacity-50 text-xs">
					Permanently get access to a full color wheel when drawing.
				</p>

				<button
					class="btn btn-primary w-full {($currentUser?.coins ?? 0) < 75 ||
					$currentUser?.upgrades?.includes(UserUpgrade.ColorPicker)
						? 'opacity-50 cursor-not-allowed'
						: ''}"
					on:click={async () => {
						if (
							$currentUser &&
							($currentUser.coins ?? 0) >= 75 &&
							!$currentUser.upgrades?.includes(UserUpgrade.ColorPicker)
						) {
							const success = await purchaseUpgrade(
								$currentUser,
								UserUpgrade.ColorPicker,
								75,
							);
							if (success) {
								showSuccessToast(
									'Upgrade purchased! You now have access to the color picker!',
								);
							}
						}
					}}
					disabled={!$currentUser ||
						($currentUser.coins ?? 0) < 75 ||
						$currentUser.upgrades?.includes(UserUpgrade.ColorPicker)}
				>
					{$currentUser?.upgrades?.includes(UserUpgrade.ColorPicker)
						? 'Already Purchased ✅'
						: 'Purchase Upgrade'}
				</button>
			</div>
		</div>

		<div class="mt-8">
			<button class="btn btn-error" on:click={logout}> Logout </button>
		</div>
	</div>
</div>
