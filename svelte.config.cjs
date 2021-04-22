const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {	
	kit: {
		files : {
			assets: 'static'
		},
		paths: {
			assets: ''
		},
		adapter: node(),
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	},
	preprocess: sveltePreprocess()
};
