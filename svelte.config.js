import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {	
	extensions: [ '.svelte', '.svx' ],
	preprocess: [ mdsvex(), sveltePreprocess() ],
	kit: {
		files : {
			assets: 'static'
		},
		paths: {
			assets: ''
		},
		adapter: node(),
		target: '#svelte',
	},
};

export default config;
