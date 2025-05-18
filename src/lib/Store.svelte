<script lang="ts">
	import { currentUser } from '../store';
	import coinGif from '../assets/coin.gif';
	import Logo from '../components/Logo.svelte';
	import { addcoins, createCustomWord } from './Firebase';
	import { showSuccessToast } from './notifications';

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
		user.coins >= 50 &&
		customWordDraft.length >= 3 &&
		customWordDraft.length <= 15;

	async function addCustomWord() {
		if (!isValid || !user) return;
		let sanitized = sanitize(customWordDraft);
		sanitized = sanitized.trim();
		await addcoins(user.name, -50);
		await createCustomWord(sanitized, user.name);
		showSuccessToast('Custom word added!');
		customWordDraft = '';
	}
</script>

<div class="p-4">
	<Logo {navigate} />
	<div class="flex flex-col items-center justify-center gap-4 mt-8">
		<div class="flex items-center gap-2">
			<img src={coinGif} class="w-8 h-8" alt="coins" />
			<span class="text-2xl font-bold">{user?.coins || 0}</span>
		</div>
		<p class="text-gray-600">Your current balance</p>

		<div
			class="flex flex-col items-center justify-center gap-4 pt-16 drop-shadow-sm"
		>
			<div class="flex flex-col items-center justify-center gap-4">
				<div class="flex flex-row items-center justify-center gap-2">
					<img src={coinGif} class="w-8 h-8" alt="coins" />
					<span class="text-2xl font-bold">50</span>
				</div>
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
</div>
