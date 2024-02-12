import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			fallback: '404.html'
		}),
		appDir: 'app',
		paths: {
			assets: '',
			base: ''
		}
	}
};

export default config;