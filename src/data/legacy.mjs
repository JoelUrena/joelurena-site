// Every URL the 2020 site published, mapped to where it lives now.
// The build writes a small redirect page for each key (see integrations/legacy-redirects.mjs),
// and 404.astro uses the same map for case-insensitive fallbacks like /Jufi or /CODE.
//
// Keys are file paths exactly as they existed in the old repo (case matters on GitHub Pages).
// Never remove an entry: /JUFI, /code and friends are printed on résumés that are already out there.

const GITHUB = 'https://github.com/JoelUrena';
const PRODUCER_REEL = 'https://youtu.be/j_x7k4SE-RY';
const FILM = '/jufi/';
const VIDEOS = '/jufi/videos/';
// Résumés are deliberately not published (they contained a home address), so old résumé links
// land on the contact section instead.
const CONTACT = '/#contact';

// Old file name in jufi/videos/myvid/ -> new slug under /jufi/videos/
export const legacyVideoPages = {
	'3_act_play': 'three-act-play-structure',
	adv_technique: 'advanced-technique-project',
	aesthetic_gift_w: 'aesthetic-film-gift-wrapping',
	colligiance: 'colligiance-contest-video',
	continuity_p: 'continuity-project',
	departure: 'departure',
	disney_drug_psa: 'disney-drug-psa',
	dorritos_commercial: 'doritos-commercial',
	film_reel: 'film-reel',
	indep_p: 'independent-project',
	lost_n_found: 'lost-and-found',
	muary_parody: 'maury-show-parody-trailer',
	mult_ppl: 'multiple-people-project',
	muppet: 'jim-henson-exhibit',
	music_v: 'music-video-project',
	pulp_f: 'pulp-fiction-scene-replication',
	purgatory: 'purgatory',
	silent_film: 'silent-film-project',
	the_day_it_appeared: 'the-day-it-appeared',
	tremont_revitalizing: 'tremont-revitalizing',
	tremont_revitalizing_t: 'tremont-revitalizing-trailer',
};

export const legacyRedirects = {
	// Short links at the site root, including the capitalised copies that only exist in git.
	'code.html': GITHUB,
	'CODE.html': GITHUB,
	'reel.html': PRODUCER_REEL,
	'Reel.html': PRODUCER_REEL,
	'film.html': FILM,
	'Film.html': FILM,
	'FILM.html': FILM,
	'jufi.html': FILM,
	'JUFI.html': FILM,
	'videos.html': VIDEOS,
	'ocelot-overide.html': '/games/ocelot-overide/',
	'resume_csci.html': CONTACT,
	'resume_film.html': CONTACT,
	'doge.html': CONTACT,

	// The PDFs themselves. Not .html, so 404.astro handles these (see integrations/legacy-redirects.mjs).
	'resume/Joel Urena (CSCI) Resume Fall 2022.pdf': CONTACT,
	'resume/Joel Urena (Film) Resume Fall 2021.pdf': CONTACT,
	'resume/joel_r_urena_resume_doge.pdf': CONTACT,

	// Old Froont pages.
	'jufi/jufi.html': FILM,
	'jufi/videos/videos.html': VIDEOS,
	'jufi/videos/myvid/unbecoming/unbecoming.html': `${VIDEOS}unbecoming/`,
	// Placeholder page that was never linked; it was about the Unbecoming trailer.
	'jufi/videos/myvid/richards.html': `${VIDEOS}unbecoming/`,
	// Embedded the wrong video (an unrelated livestream) and was marked "Under Construction".
	'jufi/videos/myvid/spidey3.html': VIDEOS,

	...Object.fromEntries(
		Object.entries(legacyVideoPages).map(([oldName, slug]) => [
			`jufi/videos/myvid/${oldName}.html`,
			`${VIDEOS}${slug}/`,
		]),
	),
};
