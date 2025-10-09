<script lang="ts">
	import logoUrl from '../assets/logo2.svg';
	import logoPng from '../assets/logo.png';
	import leafPng from '../assets/pumpkin.png';

	export let spinning: boolean = false;

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
<div
	class="flex items-center flex-row w-56 transition-all duration-1000 {spinning
		? 'w-[min(90vw,300px)]'
		: 'w-56'} mx-auto my-6 gap-4 animate-fade-in-simple"
>
	<img
		src={logoUrl}
		alt="drawIt"
		class="w-full drop-shadow-md cursor-pointer mt-6"
		on:click={handleClick}
	/>
	<img
		src={leafPng}
		alt="leaf"
		class="w-10 h-10 mt-6 {spinning ? 'animate-spin' : ''}"
	/>
</div>

<style>
	@keyframes fade-in-simple {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.animate-fade-in-simple {
		animation: fade-in-simple 0.5s ease-out;
	}
</style>
