const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const { mdsvex } = require('mdsvex');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {	
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
