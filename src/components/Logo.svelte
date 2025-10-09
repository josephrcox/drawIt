<script lang="ts">
	import logoUrl from '../assets/logo.svg';
	import logoPng from '../assets/logo.png';
	import leafPng from '../assets/pumpkin.png';

	export let navigate: ((page: string) => void) | undefined;
	function handleClick() {
		if (navigate) {
			navigate('home');
		} else {
			window.location.href = '/';
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="flex items-center flex-row w-48 mx-auto mb-6 gap-4">
	<img
		src={logoUrl}
		alt="drawIt"
		class="w-full drop-shadow-md cursor-pointer"
		on:click={handleClick}
	/>
	<img src={leafPng} alt="leaf" class="w-10 h-10" />
</div>
