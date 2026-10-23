import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import legacyRedirects from './integrations/legacy-redirects.mjs';
import { legacyRedirects as redirects } from './src/data/legacy.mjs';

export default defineConfig({
	site: 'https://joelurena.com',
	trailingSlash: 'always',
	integrations: [
		sitemap({ filter: (page) => !page.endsWith('/404/') }),
		legacyRedirects({ redirects }),
	],
});
