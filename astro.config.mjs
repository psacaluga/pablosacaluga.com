// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	output: 'static',
	site: 'https://pablosacaluga.com',
	integrations: [mdx(), sitemap()],
});
