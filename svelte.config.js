import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {	
	extensions: [ '.svelte', '.svx' ],
	preprocess: [ mdsvex(), sveltePreprocess() ],
	kit: {
		adapter: adapter(),
		target: '#svelte',
	},
};

export default config;
