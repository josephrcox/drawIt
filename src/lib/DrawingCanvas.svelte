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

	let history: string[] = [];

	// 1. Define Stroke type and strokes array

	type Point = { x: number; y: number };
	type Stroke = { color: string; width: number; points: Point[] };
	let strokes: Stroke[] = [];
	let currentStroke: Stroke | null = null;

	const colors = [
		'#E74C3C', // Red
		'#E67E22', // Orange
		'#F1C40F', // Yellow
		'#2ECC71', // Green
		'#1ABC9C', // Teal
		'#3498DB', // Blue
		'#4834D4', // Indigo
		'#9B59B6', // Violet
		'#D291BC', // Pink
		// Skin tones
		'#F5E6DE', // Light skin
		'#D2A679', // Medium skin
		'#8D5524', // Dark skin
		'#000000', // Black
		'#7F8C8D', // Gray
		'#FFFFFF', // White
	];

	const strokeSizes = [2, 5, 15, 25];

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
		currentStroke = {
			color: strokeColor,
			width: lineWidth,
			points: [pos],
		};
	}

	function draw(e: MouseEvent | TouchEvent) {
		if (!isDrawing || !currentStroke) return;
		const pos = getPosition(e);
		currentStroke.points.push(pos);
		redrawCanvas();
	}

	function stopDrawing() {
		if (isDrawing && currentStroke) {
			strokes.push(currentStroke);
			currentStroke = null;
		}
		isDrawing = false;
	}

	function redrawCanvas() {
		ctx.clearRect(0, 0, width, height);
		// White background
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0, width, height);
		// Draw all strokes
		for (const stroke of strokes) {
			drawStroke(stroke);
		}
		// Draw current stroke (if any)
		if (currentStroke) {
			drawStroke(currentStroke);
		}
	}

	function drawStroke(stroke: Stroke) {
		if (stroke.points.length < 2) return;
		ctx.save();
		ctx.strokeStyle = stroke.color;
		ctx.lineWidth = stroke.width;
		ctx.beginPath();
		ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
		for (let i = 1; i < stroke.points.length; i++) {
			ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
		}
		ctx.stroke();
		ctx.restore();
	}

	function undo() {
		if (strokes.length > 0) {
			strokes.pop();
			redrawCanvas();
		}
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
		strokes = [];
		currentStroke = null;
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0, 0, width, height);
	}

	function getImageData(): string {
		return canvas.toDataURL('image/png');
	}

	function updateCanvasSize() {
		if (!container || !canvas) return;
		width = container.clientWidth;
		height = width;
		initCanvas();
		redrawCanvas();
	}

	onMount(() => {
		initCanvas();
		redrawCanvas();
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
	export { getImageData, clearCanvas, undo };
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
		<button
			class="w-8 h-8 rounded-full border-2 bg-white border-transparent"
			on:click={undo}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 mx-auto"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
				/>
			</svg>
		</button>
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
