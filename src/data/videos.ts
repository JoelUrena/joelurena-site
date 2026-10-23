import type { ImageMetadata } from 'astro';

import filmReel from '../assets/thumbs/film-reel.jpg';
import tremontTrailer from '../assets/thumbs/tremont-revitalizing-trailer.jpg';
import tremont from '../assets/thumbs/tremont-revitalizing.jpg';
import colligiance from '../assets/thumbs/colligiance-contest-video.jpg';
import purgatory from '../assets/thumbs/purgatory.jpg';
import multiplePeople from '../assets/thumbs/multiple-people-project.jpg';
import pulpFiction from '../assets/thumbs/pulp-fiction-scene-replication.jpg';
import jimHenson from '../assets/thumbs/jim-henson-exhibit.jpg';
import independent from '../assets/thumbs/independent-project.jpg';
import maury from '../assets/thumbs/maury-show-parody-trailer.jpg';
import silentFilm from '../assets/thumbs/silent-film-project.jpg';
import departure from '../assets/thumbs/departure.jpg';
import threeAct from '../assets/thumbs/three-act-play-structure.jpg';
import dayItAppeared from '../assets/thumbs/the-day-it-appeared.jpg';
import advancedTechnique from '../assets/thumbs/advanced-technique-project.jpg';
import giftWrapping from '../assets/thumbs/aesthetic-film-gift-wrapping.jpg';
import unbecoming from '../assets/thumbs/unbecoming.jpg';
import disneyPsa from '../assets/thumbs/disney-drug-psa.jpg';
import lostAndFound from '../assets/thumbs/lost-and-found.jpg';
import doritos from '../assets/thumbs/doritos-commercial.jpg';
import musicVideo from '../assets/thumbs/music-video-project.jpg';
import continuity from '../assets/thumbs/continuity-project.jpg';

export interface Video {
	slug: string;
	title: string;
	/** ISO date: YYYY-MM-DD when the old site gave a day, YYYY-MM when it only gave a month. */
	date: string;
	/** Omitted when the film can't be embedded (Unbecoming). */
	youtubeId?: string;
	thumbnail: ImageMetadata;
	description: string[];
	/** Position in the "Top films" row on /jufi/videos/. */
	top?: number;
	/** Shown in "Notable films" on /jufi/. */
	notable?: boolean;
	links?: { label: string; href: string }[];
}

// Newest first by date. Same as the old "All JUFI Films" grid, except Tremont Revitalizing and the
// Colligiance video are in true date order, and the Jim Henson film (missing from that grid) is included.
export const videos: Video[] = [
	{
		slug: 'film-reel',
		title: 'Film Reel',
		date: '2020-01-01',
		youtubeId: 'd6kNrZH-sHI',
		thumbnail: filmReel,
		top: 1,
		notable: true,
		description: [
			"My film reel consists of just about all of my completed films squeezed into a one-minute compilation. It gives you a gist of what I’ve done in the past couple of years and my expertise in intricate shots and editing techniques.",
		],
	},
	{
		slug: 'tremont-revitalizing-trailer',
		title: 'Tremont Revitalizing (Trailer)',
		date: '2019-08-26',
		youtubeId: 'PM-K-7S3Geg',
		thumbnail: tremontTrailer,
		top: 6,
		description: [
			'Thanks to the Showtime Movie Trailer Editing Workshop, I learned how to make a professional trailer from scratch. The workshop taught me how to use music, rhythm, and sound effects to invigorate the impact my trailer will render for the viewer after watching it.',
		],
	},
	{
		slug: 'tremont-revitalizing',
		title: 'Tremont Revitalizing',
		date: '2019-06-26',
		youtubeId: 'va1DC_w6P-E',
		thumbnail: tremont,
		top: 2,
		notable: true,
		description: [
			'With the help of HBO and LPZ Cinetech, I directed and starred in a documentary called “Tremont Revitalizing.” The documentary brings up the issue that my neighborhood, Tremont, and many other neighborhoods in the Bronx are in dire need of renovation. Whether or not the city’s neglect is on purpose, a higher percentage of minorities and lower-income residents live in the Bronx than in any other borough.',
			'I go across the city to places that were like my neighborhood until recently, when the city swooped in. Based on how successful those places have become, I draw conclusions that could help my neighborhood thrive as much as theirs.',
		],
	},
	{
		slug: 'colligiance-contest-video',
		title: 'Colligiance Contest Video',
		date: '2019-06-16',
		youtubeId: 'Mi0uVowYjBk',
		thumbnail: colligiance,
		top: 8,
		// The old page only had the site builder's placeholder text here.
		description: [],
	},
	{
		slug: 'purgatory',
		title: '“Purgatory” – 3 Hour Film Project 2019',
		date: '2019-06',
		youtubeId: 'jZocVd6rFzA',
		thumbnail: purgatory,
		description: [
			'This film was made for the annual City-Wide Graphic Arts Competition and was made in under three hours. We had to come up with an idea, shoot, and edit the film in three hours for a prize.',
		],
	},
	{
		slug: 'multiple-people-project',
		title: 'Multiple People Project',
		date: '2019-03',
		youtubeId: 'mI7lwY1tVbA',
		thumbnail: multiplePeople,
		description: [
			'This was a short project to test how I could track multiple people interacting with each other in one scene.',
		],
	},
	{
		slug: 'pulp-fiction-scene-replication',
		title: 'Scene Replication Project – Pulp Fiction',
		date: '2019-02-23',
		youtubeId: 'Zhl2AY0RnS8',
		thumbnail: pulpFiction,
		top: 3,
		notable: true,
		description: [
			'When the scene replication project was assigned to us, in a unanimous decision, we picked Pulp Fiction. We worked tirelessly, replicating the famous scene with Jules (Samuel L. Jackson) and Vincent Vega (John Travolta).',
			'As you may see, pivotal parts of the scene that are in the original film are missing. That is because it was a one-week project, and the minimum requirement was only to replicate a minute and thirty seconds (we were intending to do the entire scene, but we ran out of time). Nonetheless, the end result still turned out great.',
		],
	},
	{
		slug: 'jim-henson-exhibit',
		title: 'Jim Henson Exhibit Project – Museum of the Moving Image',
		date: '2019-01-31',
		youtubeId: 'mQXWy0v1idI',
		thumbnail: jimHenson,
		top: 5,
		description: [
			'I worked with the Museum of the Moving Image on a project to help young and aspiring filmmakers learn how to edit, by cutting the master shots into the compiled film above. My Muppet movie currently resides in the Jim Henson exhibit at the Museum of the Moving Image.',
		],
	},
	{
		slug: 'independent-project',
		title: 'Independent Project (No Sound)',
		date: '2019-01-05',
		youtubeId: 'Jeem19haUSQ',
		thumbnail: independent,
		top: 7,
		description: [
			"This is the independent project that I made with a group of classmates in my senior year of high school. It was the first project where there was no strict theme assigned to us: for the first time, we had to come up with a project from scratch, and the genre was entirely up to us. The only requirement was to use everything we’d learned before this project — the technical aspects of film (making sure the audio, editing, and lighting served a purpose) — to tell a clear and engaging story.",
			"The project is about bringing a kid’s imagination to life. In the film, the kid is in the real world drawing a treasure map with a set of obstacles. She must pass all the obstacles on her map to get to the treasure at the end. Throughout the film, we see the perspective of the kid continually switching between the real world and her imagination as she attempts her quest to obtain the treasure.",
		],
	},
	{
		slug: 'maury-show-parody-trailer',
		title: 'Maury Show Parody (Trailer)',
		date: '2018-10',
		youtubeId: '8yRdQ1NvIPY',
		thumbnail: maury,
		description: [
			'The parody project was assigned to us with the intention of creating a short parody of a well-known movie or show that includes social commentary and pushes for some type of social change.',
			'The Maury Show parody portrays Maury Povich as a TV host forced to comply with his boss’s demand to change his show’s format into producing “trash TV” in an attempt to get higher ratings. Maury genuinely wants to help people, but helping those in need does not get as many ratings as drama does. The message is that society is interested in watching reality drama and gossip, and TV shows will go as far as fabricating stories to meet that demand.',
		],
	},
	{
		slug: 'silent-film-project',
		title: 'Silent Film Project',
		date: '2018-06',
		youtubeId: 'elpvLBG3b7s',
		thumbnail: silentFilm,
		description: [
			'The silent film project was done with the intention of the story being the main pull of the film. Sound was not permitted, as a challenge for us to make a film that can engage a viewer without any music or sound effects.',
		],
	},
	{
		slug: 'departure',
		title: '“Departure” – 3 Hour Movie Project 2018',
		date: '2018-05',
		youtubeId: 'mBheu1jBlzg',
		thumbnail: departure,
		description: [
			'This film was made for the annual City-Wide Graphic Arts Competition and was made in under three hours. We had to come up with an idea, shoot, and edit the film in three hours for a prize.',
		],
	},
	{
		slug: 'three-act-play-structure',
		title: '3 Act Play Structure Project (Unfinished)',
		date: '2018-04',
		youtubeId: '7-YaIjtjrf0',
		thumbnail: threeAct,
		description: [
			'This is a joint project, where we learned how to write professional scripts and film them after. Part one of this project was to learn how to write a screenplay based on the three-act structure. This was a significant challenge, as we had to write a five-page script, with lines and dialogue, while maintaining consistency.',
			"You’d think that the hardest part would be to write five pages; however, the hardest part was to keep the script under five pages, because the traditional format of a screenplay uses up a lot of space every time a new person opens dialogue. Furthermore, the execution of filming was off-putting, to say the least. Our group’s script was the most ambitious, and we unfortunately did not get to complete it in time. The film, however, has its strong points.",
		],
	},
	{
		slug: 'the-day-it-appeared',
		title: '“The Day It Appeared” – Jewish Museum',
		date: '2018-04',
		youtubeId: '9MVnWWNPIb0',
		thumbnail: dayItAppeared,
		description: [
			"This film was made in the Jewish Museum’s film program, in two weeks, with a crew of four people.",
		],
	},
	{
		slug: 'advanced-technique-project',
		title: 'Advanced Technique Project',
		date: '2018-03',
		youtubeId: 'a7QtwbrivpE',
		thumbnail: advancedTechnique,
		description: [
			"This project may seem like it’s been roughly put together, but that is intentional! The Advanced Temporal Manipulation and Continuity Techniques Project, or advanced techniques project for short, tested how well we could execute 13 advanced film techniques used throughout film history. We were graded on the aesthetics of the film using mise-en-scène, the shot variety, and the editing.",
			'The techniques used in this film are: temporal ellipsis, temporal expansion, crosscutting, intercutting, matching action, match cut, eyeline match, establishing and re-establishing shots, insert shot, cutaway shot, jump cut, montage, and the Kuleshov effect.',
		],
	},
	{
		slug: 'aesthetic-film-gift-wrapping',
		title: 'Aesthetic Film Project – Gift Wrapping',
		date: '2018-02',
		youtubeId: 'gplqCOCyw2s',
		thumbnail: giftWrapping,
		description: [
			'My first film of 2018. This project was about filming someone doing something that would usually be boring to watch, for example, gift wrapping. The idea was that our group would think of “aesthetic” ways of capturing someone gift wrapping from start to finish, adding entertainment and artistic value to the film. Every shot in this video was carefully planned and took many takes to reach the standard that was expected.',
		],
	},
	{
		slug: 'unbecoming',
		title: '“Unbecoming”',
		date: '2018-01-13',
		thumbnail: unbecoming,
		top: 4,
		notable: true,
		description: [
			'The short film “Unbecoming” was filmed and directed entirely by students with the support of the Tribeca Film Institute. It takes place in modern-day New York and confronts the issue of police brutality and disidentification.',
			'Unbecoming is owned by the Tribeca Film Institute, not by me, and the full film isn’t available anywhere online, so I can’t link to it. The behind-the-scenes footage below was captured by Kevin Lopez from Cinetech.',
		],
		links: [{ label: 'Watch the behind-the-scenes footage on Vimeo', href: 'https://vimeo.com/242588978' }],
	},
	{
		slug: 'disney-drug-psa',
		title: 'Drug PSA – Disney Get Reel 2017 Competition',
		date: '2017-05',
		youtubeId: 'lpBJtpgABHs',
		thumbnail: disneyPsa,
		description: [
			'My last project of 2017. This project was made to compete in Disney’s annual “Get Reel with Your Dreams” competition, where Disney scouts the top 10 PSAs made by high school students for a prize.',
		],
	},
	{
		slug: 'lost-and-found',
		title: 'Lost and Found Project',
		date: '2017-02',
		youtubeId: 'EYNwDyzfMsE',
		thumbnail: lostAndFound,
		description: ['This project was assigned to practice continuity, a variety of camera angles, and plot development.'],
	},
	{
		slug: 'doritos-commercial',
		title: 'Doritos Commercial – Commercial Project',
		date: '2017-01',
		youtubeId: 'Jh4eiq9mnos',
		thumbnail: doritos,
		description: [
			'The third project I made in high school. It was made to teach us how to develop and resolve a conflict in a story, strictly in 30 seconds.',
		],
	},
	{
		slug: 'music-video-project',
		title: 'Music Video Project',
		date: '2016-10',
		youtubeId: 'S_OBHGEE9uw',
		thumbnail: musicVideo,
		description: [
			'The second project I made in high school. It was made to teach us the variety of camera angles and distances.',
		],
	},
	{
		slug: 'continuity-project',
		title: 'Continuity Project',
		date: '2016-09',
		youtubeId: 'WZ51ecswxH0',
		thumbnail: continuity,
		description: [
			'This was my first film project in high school. It taught us how to cut shots in a way that makes the current shot flow into the next, creating continuity.',
		],
	},
];

export const topVideos = videos.filter((v) => v.top).sort((a, b) => a.top! - b.top!);
export const notableVideos = topVideos.filter((v) => v.notable);

export function formatDate(iso: string): string {
	const [year, month, day] = iso.split('-').map(Number);
	const date = new Date(Date.UTC(year, month - 1, day ?? 1));
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		...(day ? { day: 'numeric' } : {}),
		timeZone: 'UTC',
	});
}

/** First sentence or two, for cards. */
export function excerpt(video: Video, max = 170): string {
	const text = video.description[0] ?? '';
	if (text.length <= max) return text;
	const cut = text.slice(0, max + 1);
	const sentenceEnds = [...cut.matchAll(/[.!?][”"’]?(?=\s)/g)].map((m) => m.index + m[0].length);
	const lastEnd = sentenceEnds.at(-1) ?? 0;
	return lastEnd > 60 ? cut.slice(0, lastEnd) : `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}
