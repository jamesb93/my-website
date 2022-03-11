import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		trailingSlash: 'always',
		prerender: {
			default: true,
			enabled: true
		}
	}
};

export default config;
