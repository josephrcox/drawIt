import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
	base: '/',
	plugins: [svelte()],
	build: { outDir: './docs', assetsDir: 'assets' },
}));
