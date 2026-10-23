// Run after `astro build`. Fails if an old URL lost its redirect or if any page or stylesheet links to a
// file that isn't in dist/. CI runs this on Linux, where CODE.html and code.html are separate files.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { legacyRedirects } from '../src/data/legacy.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const site = 'https://joelurena.com';
const errors = [];

// macOS and Windows disks usually ignore case, so CODE.html and code.html collapse into one file.
const caseSensitive = !existsSync(join(dist, 'INDEX.HTML'));

function existsExact(path) {
	if (!existsSync(path)) return false;
	if (!caseSensitive) return true;
	return readdirSync(dirname(path)).includes(basename(path));
}

const isFile = (path) => existsExact(path) && statSync(path).isFile();

/** Mirrors GitHub Pages: exact file, then foo.html, then foo/ -> foo/index.html. */
function resolveInternal(url) {
	const path = decodeURIComponent(url.split(/[?#]/)[0]);
	const file = join(dist, path);
	if (path.endsWith('/')) return isFile(join(file, 'index.html'));
	return isFile(file) || isFile(`${file}.html`) || isFile(join(file, 'index.html'));
}

for (const [file, target] of Object.entries(legacyRedirects)) {
	if (file.endsWith('.html')) {
		if (!isFile(join(dist, file))) errors.push(`missing legacy redirect page: /${file}`);
	} else if (existsSync(join(dist, file))) {
		// Non-HTML old URLs (e.g. a replaced résumé PDF) are redirected by 404.html, so the old file must be gone.
		errors.push(`/${file} is listed as a redirect but a file still exists there`);
	}
	if (target.startsWith('/') && !resolveInternal(target)) errors.push(`/${file} redirects to missing ${target}`);
}

function* files(dir, ext) {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) yield* files(path, ext);
		else if (name.endsWith(ext)) yield path;
	}
}

let checked = 0;
function check(from, url) {
	url = url.replaceAll('&amp;', '&');
	if (url.startsWith(site)) url = url.slice(site.length) || '/';
	if (!url.startsWith('/') || url.startsWith('//')) return;
	checked++;
	if (!resolveInternal(url)) errors.push(`${from} links to missing ${url}`);
}

for (const file of [...files(dist, '.html'), ...files(dist, '.css')]) {
	if (file.includes('/games/ocelot-override/')) continue; // Unity's own player
	const text = readFileSync(file, 'utf8');
	const from = file.slice(dist.length - 1);
	for (const [, url] of text.matchAll(/(?:href|src|poster|content)="([^"]*)"/g)) check(from, url);
	for (const [, , url] of text.matchAll(/url\((['"]?)([^)'"]+)\1\)/g)) check(from, url);
	for (const [, list] of text.matchAll(/srcset="([^"]*)"/g)) {
		for (const candidate of list.split(',')) check(from, candidate.trim().split(/\s+/)[0]);
	}
}

if (!caseSensitive) console.warn('Note: this disk ignores letter case, so case-variant redirects (CODE.html) are only fully checked in CI.');
if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
console.log(`OK: ${Object.keys(legacyRedirects).length} legacy URLs and ${checked} internal links resolve.`);
