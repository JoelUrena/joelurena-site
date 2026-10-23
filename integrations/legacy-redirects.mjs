// Writes one tiny redirect page per old URL after Astro finishes building.
//
// GitHub Pages serves /reel from reel.html and /jufi/videos/myvid/pulp_f from pulp_f.html,
// so writing the old file names back out keeps every old link (with or without ".html") alive.
//
// Only .html keys get a file. Writing HTML at an old .pdf address would serve a broken PDF, so
// non-HTML keys are left to 404.astro, whose script looks them up and redirects.
//
// Case matters: CODE.html and code.html are different files on GitHub Pages (Linux), but the
// same file on a Mac. Variants of one link always share a target, so a local build on a Mac
// is still correct; the CI build on Linux writes every variant separately.
import { existsSync, readFileSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

/** Title of the page a redirect points to, so link previews of old URLs still say something useful. */
function targetTitle(outDir, target) {
	if (!target.startsWith('/') || !target.endsWith('/')) return 'Joel Ureña';
	const file = join(outDir, target, 'index.html');
	if (!existsSync(file)) return 'Joel Ureña';
	return readFileSync(file, 'utf8').match(/<title>([^<]*)<\/title>/)?.[1] ?? 'Joel Ureña';
}

function redirectPage(target, site, title) {
	const absolute = new URL(target, site).href;
	const href = escape(target);
	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${escape(absolute)}">
<meta property="og:title" content="${title.replaceAll('"', '&quot;')}">
<meta property="og:url" content="${escape(absolute)}">
<meta property="og:image" content="${escape(new URL('/og-image.jpg', site).href)}">
<meta http-equiv="refresh" content="0; url=${href}">
<script>location.replace(${JSON.stringify(target)} + location.hash)</script>
<style>body{background:#000;color:#f2f2f2;font:1.0625rem/1.6 system-ui,sans-serif;display:grid;place-items:center;min-height:90vh;margin:0;padding:0 1rem;overflow-wrap:anywhere}a{color:#f2f2f2}</style>
</head>
<body><p>This page has moved to <a href="${href}">${escape(absolute)}</a>.</p></body>
</html>
`;
}

/** @param {{ redirects: Record<string, string> }} options */
export default function legacyRedirects({ redirects }) {
	let site;
	return {
		name: 'legacy-redirects',
		hooks: {
			'astro:config:done': ({ config }) => {
				site = config.site;
			},
			'astro:build:done': async ({ dir, pages, logger }) => {
				const outDir = fileURLToPath(dir);
				// Never let an old URL overwrite a real page (compared case-insensitively, as on a Mac).
				const built = new Set(
					pages.map(({ pathname }) => (pathname === '404/' ? '404.html' : `${pathname}index.html`).toLowerCase()),
				);
				const files = Object.entries(redirects).filter(([file]) => file.endsWith('.html'));
				for (const [file, target] of files) {
					if (built.has(file.toLowerCase())) {
						throw new Error(`legacy redirect ${file} would overwrite a page built by Astro`);
					}
					const path = join(outDir, file);
					await mkdir(dirname(path), { recursive: true });
					// The title comes from built HTML, so it is already escaped text.
					await writeFile(path, redirectPage(target, site, targetTitle(outDir, target)));
				}
				logger.info(`Wrote ${files.length} legacy redirect pages`);
			},
		},
	};
}
