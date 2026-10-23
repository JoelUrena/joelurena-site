import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import legacyRedirects from './integrations/legacy-redirects.mjs';
import { legacyRedirects as redirects } from './src/data/legacy.mjs';

export default defineConfig({
	site: 'https://joelurena.com',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			filter: (page) => !page.endsWith('/404/'),
			// The Unity game lives in public/, so Astro doesn't know about it.
			customPages: ['https://joelurena.com/games/ocelot-override/'],
		}),
		legacyRedirects({ redirects }),
	],
});
