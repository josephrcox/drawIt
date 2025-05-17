<script lang="ts">
	import { onMount } from 'svelte';

	let width = 400;
	let height = 400;
	export let lineWidth = 5;
	export let strokeColor = '#000000';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;
	let container: HTMLDivElement;

	const colors = [
		'#000000', // Black
		'#FFFFFF', // White
		'#E74C3C', // Red
		'#E67E22', // Orange
		'#F1C40F', // Yellow
		'#2ECC71', // Green
		'#1ABC9C', // Teal
		'#3498DB', // Blue
		'#9B59B6', // Purple
		'#7F8C8D', // Gray (warm-neutral)
	];

	const strokeSizes = [5, 15, 25];

	function initCanvas() {
		if (!canvas) return;

		// Handle device pixel ratio for sharp drawing
		const dpr = window.devicePixelRatio || 1;
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';

		ctx = canvas.getContext('2d')!;
		ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any existing transforms
		ctx.scale(dpr, dpr);

		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.strokeStyle = strokeColor;
		ctx.lineWidth = lineWidth;

		// Set white background
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0, width, height);
	}

	function startDrawing(e: MouseEvent | TouchEvent) {
		isDrawing = true;
		const pos = getPosition(e);
		lastX = pos.x;
		lastY = pos.y;
	}

	function draw(e: MouseEvent | TouchEvent) {
		if (!isDrawing) return;

		const pos = getPosition(e);
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(pos.x, pos.y);
		ctx.stroke();

		lastX = pos.x;
		lastY = pos.y;
	}

	function stopDrawing() {
		isDrawing = false;
	}

	function getPosition(e: MouseEvent | TouchEvent): { x: number; y: number } {
		const rect = canvas.getBoundingClientRect();
		// Check if this is a touch event
		if ('touches' in e && e.touches.length > 0) {
			const touch = e.touches[0];
			return {
				x: touch.clientX - rect.left,
				y: touch.clientY - rect.top,
			};
		}
		return {
			x: (e as MouseEvent).clientX - rect.left,
			y: (e as MouseEvent).clientY - rect.top,
		};
	}

	function clearCanvas() {
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0, width, height);
	}

	function getImageData(): string {
		return canvas.toDataURL('image/png');
	}

	function updateCanvasSize() {
		if (!container || !canvas) return;

		// Get the container width and set canvas to be square
		width = container.clientWidth;
		height = width; // Keep it square

		initCanvas();
	}

	onMount(() => {
		initCanvas();
		// Add resize observer to handle container size changes
		const resizeObserver = new ResizeObserver(() => {
			updateCanvasSize();
		});

		if (container) {
			resizeObserver.observe(container);
		}

		return () => {
			resizeObserver.disconnect();
		};
	});

	// Expose methods to parent
	export { getImageData, clearCanvas };
</script>

<div class="flex flex-col gap-2 w-full" bind:this={container}>
	<div class="flex gap-2 justify-start items-center flex-wrap">
		{#each colors as color}
			<button
				class="w-8 h-8 rounded-full border-2 {strokeColor === color
					? 'border-primary'
					: ''}"
				style="background-color: {color}"
				on:click={() => {
					strokeColor = color;
					ctx.strokeStyle = color;
				}}
			/>
		{/each}
	</div>

	<div class="flex gap-2 justify-start items-center">
		{#each strokeSizes as size}
			<button
				class="w-8 h-8 rounded-full border-2 bg-white {lineWidth === size
					? 'border-primary'
					: 'border-transparent'}"
				on:click={() => {
					lineWidth = size;
					ctx.lineWidth = size;
				}}
			>
				<div
					class="w-4 h-4 rounded-full bg-black mx-auto"
					style="width: {size}px; height: {size}px;"
				/>
			</button>
		{/each}
	</div>

	<canvas
		bind:this={canvas}
		class="border-2 border-gray-300 rounded-lg touch-none w-full aspect-square"
		on:mousedown={startDrawing}
		on:mousemove={draw}
		on:mouseup={stopDrawing}
		on:mouseleave={stopDrawing}
		on:touchstart={startDrawing}
		on:touchmove={draw}
		on:touchend={stopDrawing}
	/>
</div>
