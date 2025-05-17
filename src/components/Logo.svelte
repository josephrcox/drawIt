<script lang="ts">
	import logoUrl from '../assets/logo.svg';

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
<img
	src={logoUrl}
	alt="drawIt"
	class="w-48 mx-auto mb-6 drop-shadow-md cursor-pointer"
	on:click={handleClick}
/>
