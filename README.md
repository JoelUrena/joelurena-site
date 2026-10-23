# joelurena.com

Personal site of Joel Ureña, built with [Astro](https://astro.build) and hosted free on GitHub Pages. Every page is a static file: there's no PHP, server or database.

## Running it locally

Requires Node 22.23+ (Node 24 LTS recommended).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # writes the site to dist/
npm run check     # after a build: verifies every old URL and internal link
```

## Where things live

| What | File |
| --- | --- |
| Film list (titles, dates, YouTube IDs, descriptions) | `src/data/videos.ts` |
| Email, social links, producer reel | `src/data/site.ts` |
| Old URLs and where they redirect | `src/data/legacy.mjs` |
| Pages | `src/pages/` (`index.astro`, `jufi/`, `404.astro`) |
| Thumbnails (resized automatically at build time) | `src/assets/thumbs/` |
| Files served as-is: the Unity game, the JUFI logo animation, favicons | `public/` |

### Add a video

1. Put a 16:9 still in `src/assets/thumbs/` (around 1280 px wide is plenty; the build makes the small versions).
2. Import it at the top of `src/data/videos.ts` and add an entry to the `videos` list. Its `slug` becomes the URL `/jufi/videos/<slug>/`.

### Résumés

Résumés are deliberately not published on the site (old ones included a home address, and anything hosted here can
be indexed). The old résumé links (`/resume_csci`, `/resume_film`, `/doge` and the PDF addresses) forward to the
contact section on the homepage. Send résumés directly instead.

## Old URLs

The 2020 site's short links are printed on résumés (`joelurena.com/JUFI`, `/code`, `/reel`, …), so they must never break.
`src/data/legacy.mjs` lists every URL the old site had (plus a few new short links like `/ocelot-override`), and the build
writes a small redirect page for each one
(`integrations/legacy-redirects.mjs`). `404.astro` also catches odd capitalisation like `/Jufi`.

GitHub Pages is case-sensitive (`/CODE` and `/code` are different files) but macOS usually isn't, so the capitalised
variants only exist as separate files in the Linux build on GitHub. `npm run check` runs there on every deploy and
fails the deploy if any old URL is missing.

## Deploying

`.github/workflows/deploy.yml` builds, checks and publishes the site on every push to `main` or `master`
(the current joelurena.com repo uses `master`). Do the one-time setup **before** pushing this project, otherwise
GitHub will try to publish the raw source files:

1. In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push this project. The first run of the workflow publishes the site.
3. Back in **Settings → Pages**, make sure the custom domain is `joelurena.com` and tick **Enforce HTTPS**.
4. Under your account's **Settings → Pages → Verified domains**, verify `joelurena.com` so nobody else can claim it.
