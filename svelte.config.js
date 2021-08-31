import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import slug from 'rehype-slug';
import externalLinks from 'remark-external-links';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {	
	extensions: [ '.svelte', '.svx' ],
	preprocess: [ mdsvex({
		remarkPlugins: [
			[externalLinks, {target: "_blank"}]
		],
		rehypePlugins : [
			slug
		]
	}), sveltePreprocess() ],
	kit: {
		adapter: adapter(),
		target: '#svelte',
	},
};

export default config;
