import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	kit: {
		adapter: adapter(),
		alias: {
			$kominekjan: './src/@kominekjan',
			$src: './src',
			$lib: './src/lib',
			$components: './src/lib/components',
			$layouts: './src/lib/layouts',
			$icons: './src/assets/icons',
			$css: './src/assets/css',
			$utils: './src/utils',
			$assets: './src/assets',
			$content: './src/content'
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
