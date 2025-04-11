//import { mdsvex } from 'mdsvex';
//import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static'

const config = {
	//preprocess: [vitePreprocess(), mdsvex()],
	kit: {
        adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
    },
	extensions: ['.svelte', '.svx']
};


export default config;
