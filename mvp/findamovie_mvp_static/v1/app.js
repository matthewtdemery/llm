const MOVIES = [
  {
    "id": "dune-2",
    "title": "Dune: Part Two",
    "year": 2024,
    "runtime": 166,
    "rating": "PG-13",
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Spectacle",
      "Serious"
    ],
    "audiences": [
      "Theater Night",
      "Adults"
    ],
    "synopsis": "A mythic desert war story with blockbuster scale, political prophecy, and sandworm-sized spectacle.",
    "why": "A strong trailer-first card because the scale sells itself quickly.",
    "trailerId": "Way9Dexny3w",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "theaters",
        "label": "In theaters",
        "detail": "Showtimes placeholder"
      },
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "oppenheimer",
    "title": "Oppenheimer",
    "year": 2023,
    "runtime": 180,
    "rating": "R",
    "genres": [
      "Drama",
      "History"
    ],
    "moods": [
      "Serious",
      "Award Winner",
      "Intense"
    ],
    "audiences": [
      "Adults",
      "Prestige"
    ],
    "synopsis": "A dense, propulsive portrait of J. Robert Oppenheimer and the moral blast radius of the atomic age.",
    "why": "Useful for users who want prestige films without TV-series clutter.",
    "trailerId": "uYPbbksJxIg",
    "afi": false,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental/subscription placeholder"
      },
      {
        "type": "streaming",
        "label": "Peacock",
        "detail": "Availability placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "barbie",
    "title": "Barbie",
    "year": 2023,
    "runtime": 114,
    "rating": "PG-13",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "Funny",
      "Colorful",
      "Social"
    ],
    "audiences": [
      "Date Night",
      "Friends"
    ],
    "synopsis": "A candy-colored identity crisis turns a toy-box universe into a satire of gender, commerce, and selfhood.",
    "why": "Good mainstream test of whether users want quick mood filters.",
    "trailerId": "pBk4NYhWNMM",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "holdovers",
    "title": "The Holdovers",
    "year": 2023,
    "runtime": 133,
    "rating": "R",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "moods": [
      "Warm",
      "Funny",
      "Award Winner"
    ],
    "audiences": [
      "Adults",
      "Prestige"
    ],
    "synopsis": "A cranky teacher, a grieving cook, and a stranded student form a bruised little holiday family.",
    "why": "A good discovery card for people who want character movies, not algorithm soup.",
    "trailerId": "AhKLpJmHhIg",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Peacock",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "past-lives",
    "title": "Past Lives",
    "year": 2023,
    "runtime": 106,
    "rating": "PG-13",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "Quiet",
      "Romantic",
      "Thoughtful"
    ],
    "audiences": [
      "Date Night",
      "Prestige"
    ],
    "synopsis": "A quiet, aching look at childhood connection, migration, love, and the lives not lived.",
    "why": "Tests whether quieter films survive in a trailer-first interface.",
    "trailerId": "kA244xewjcI",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Paramount+",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Showtime",
        "detail": "Availability placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "godfather",
    "title": "The Godfather",
    "year": 1972,
    "runtime": 175,
    "rating": "R",
    "genres": [
      "Crime",
      "Drama"
    ],
    "moods": [
      "Classic",
      "Serious",
      "Intense"
    ],
    "audiences": [
      "Classics",
      "Adults"
    ],
    "synopsis": "A family empire passes from old-world power to cold American calculation.",
    "why": "The classic-profile exception is the MVP’s most defensible wedge.",
    "trailerId": "sY1S34973zA",
    "afi": true,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "Paramount+",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "casablanca",
    "title": "Casablanca",
    "year": 1942,
    "runtime": 102,
    "rating": "PG",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "Classic",
      "Romantic",
      "Wartime"
    ],
    "audiences": [
      "Classics",
      "Date Night"
    ],
    "synopsis": "Love, sacrifice, and resistance collide in a smoky wartime nightclub.",
    "why": "Shows Tom’s old-Hollywood filter clearly in one card.",
    "trailerId": "B3M1z2i6F9A",
    "afi": true,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Criterion Channel",
        "detail": "Availability placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "wizard-oz",
    "title": "The Wizard of Oz",
    "year": 1939,
    "runtime": 102,
    "rating": "G",
    "genres": [
      "Fantasy",
      "Adventure",
      "Musical"
    ],
    "moods": [
      "Classic",
      "Family",
      "Colorful"
    ],
    "audiences": [
      "Family",
      "Classics"
    ],
    "synopsis": "A Kansas runaway follows a yellow road through fear, friendship, and homecoming.",
    "why": "Useful for testing family/classic browsing without TV clutter.",
    "trailerId": "njdreZRjvpc",
    "afi": true,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "silence-lambs",
    "title": "The Silence of the Lambs",
    "year": 1991,
    "runtime": 118,
    "rating": "R",
    "genres": [
      "Thriller",
      "Crime"
    ],
    "moods": [
      "Intense",
      "Classic",
      "Award Winner"
    ],
    "audiences": [
      "Adults",
      "Classics"
    ],
    "synopsis": "A young FBI trainee enters a psychological duel to stop a serial killer.",
    "why": "Good proof that classics do not only mean black-and-white dramas.",
    "trailerId": "W6Mm8Sbe__o",
    "afi": true,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "MGM+",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "parasite",
    "title": "Parasite",
    "year": 2019,
    "runtime": 132,
    "rating": "R",
    "genres": [
      "Thriller",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "Intense",
      "Award Winner",
      "Darkly Funny"
    ],
    "audiences": [
      "Adults",
      "Prestige"
    ],
    "synopsis": "Class rage and social performance spiral into one of modern cinema’s sharpest traps.",
    "why": "A modern award winner that tests cross-genre filtering.",
    "trailerId": "5xH0HfJHsaY",
    "afi": false,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "Hulu",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "top-gun-maverick",
    "title": "Top Gun: Maverick",
    "year": 2022,
    "runtime": 130,
    "rating": "PG-13",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "Spectacle",
      "Fun",
      "Crowd-Pleaser"
    ],
    "audiences": [
      "Friends",
      "Theater Night"
    ],
    "synopsis": "A legacy sequel built on old-school movie-star propulsion, aerial spectacle, and emotional clarity.",
    "why": "Strong for users who say they just want a movie that moves.",
    "trailerId": "qSqVVswa420",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Paramount+",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "inside-out-2",
    "title": "Inside Out 2",
    "year": 2024,
    "runtime": 96,
    "rating": "PG",
    "genres": [
      "Animation",
      "Comedy",
      "Adventure"
    ],
    "moods": [
      "Family",
      "Funny",
      "Colorful"
    ],
    "audiences": [
      "Family",
      "Kids"
    ],
    "synopsis": "Riley’s emotional control room gets a chaotic puberty-era software update.",
    "why": "Tests the family/funny route in a clean movies-only grid.",
    "trailerId": "LEjhY15eCx0",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "theaters",
        "label": "In theaters",
        "detail": "Showtimes placeholder"
      },
      {
        "type": "streaming",
        "label": "Disney+",
        "detail": "Future availability placeholder"
      }
    ],
    "confidence": "low"
  },
  {
    "id": "schindlers-list",
    "title": "Schindler's List",
    "year": 1993,
    "runtime": 195,
    "rating": "R",
    "genres": [
      "Drama",
      "History"
    ],
    "moods": [
      "Classic",
      "Serious",
      "Award Winner"
    ],
    "audiences": [
      "Classics",
      "Prestige"
    ],
    "synopsis": "An industrialist’s moral awakening becomes a lifeline inside the machinery of genocide.",
    "why": "A classic exception that should appear only for users who invite serious films.",
    "trailerId": "gG22XNhtnoY",
    "afi": true,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "Netflix",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "singin-rain",
    "title": "Singin' in the Rain",
    "year": 1952,
    "runtime": 103,
    "rating": "G",
    "genres": [
      "Musical",
      "Comedy",
      "Romance"
    ],
    "moods": [
      "Classic",
      "Funny",
      "Warm"
    ],
    "audiences": [
      "Classics",
      "Family"
    ],
    "synopsis": "Hollywood’s sound-era panic becomes one of cinema’s cleanest expressions of joy.",
    "why": "A cheerful classic card to test whether old movies can be made approachable.",
    "trailerId": "5_EVHeNEIJY",
    "afi": true,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Apple TV",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "civil-war",
    "title": "Civil War",
    "year": 2024,
    "runtime": 109,
    "rating": "R",
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "Intense",
      "Serious",
      "Theater Energy"
    ],
    "audiences": [
      "Theater Night",
      "Adults"
    ],
    "synopsis": "War photographers cross a fractured America in a tense near-future road movie.",
    "why": "A theater-forward card with clear immediate-decision energy.",
    "trailerId": "aDyQxtg0V2w",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "theaters",
        "label": "In theaters",
        "detail": "Showtimes placeholder"
      },
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      }
    ],
    "confidence": "low"
  },
  {
    "id": "return-king",
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "runtime": 201,
    "rating": "PG-13",
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "Epic",
      "Award Winner",
      "Spectacle"
    ],
    "audiences": [
      "Friends",
      "Prestige"
    ],
    "synopsis": "A fellowship’s impossible errand reaches its moral and mythic end.",
    "why": "A big-canvas award winner for people who filter by epic mood.",
    "trailerId": "r5X-hFf6Bwo",
    "afi": false,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "moonlight",
    "title": "Moonlight",
    "year": 2016,
    "runtime": 111,
    "rating": "R",
    "genres": [
      "Drama"
    ],
    "moods": [
      "Quiet",
      "Award Winner",
      "Thoughtful"
    ],
    "audiences": [
      "Prestige",
      "Adults"
    ],
    "synopsis": "A triptych of identity, masculinity, tenderness, and survival in Miami.",
    "why": "A short prestige drama that tests mood over genre.",
    "trailerId": "9NJj12tJzqc",
    "afi": false,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Kanopy",
        "detail": "Library availability placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "anora",
    "title": "Anora",
    "year": 2024,
    "runtime": 139,
    "rating": "R",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "moods": [
      "Funny",
      "Intense",
      "Award Buzz"
    ],
    "audiences": [
      "Theater Night",
      "Adults"
    ],
    "synopsis": "A modern Cinderella story curdles into a high-wire scramble between romance, class, and control.",
    "why": "A newer title tests whether the app can mix current theatrical buzz with curated taste.",
    "trailerId": "vgrXTvL_l_c",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "theaters",
        "label": "In theaters",
        "detail": "Showtimes placeholder"
      }
    ],
    "confidence": "low"
  },
  {
    "id": "no-country",
    "title": "No Country for Old Men",
    "year": 2007,
    "runtime": 122,
    "rating": "R",
    "genres": [
      "Crime",
      "Thriller",
      "Drama"
    ],
    "moods": [
      "Intense",
      "Award Winner",
      "Dark"
    ],
    "audiences": [
      "Adults",
      "Prestige"
    ],
    "synopsis": "A bag of money draws ordinary men into a landscape ruled by chance and violence.",
    "why": "A compact award-winner for users who choose by mood instead of year.",
    "trailerId": "38A__WT3-o0",
    "afi": false,
    "oscar": true,
    "routes": [
      {
        "type": "streaming",
        "label": "Paramount+",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "star-wars-new-hope",
    "title": "Star Wars: A New Hope",
    "year": 1977,
    "runtime": 121,
    "rating": "PG",
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "moods": [
      "Classic",
      "Fun",
      "Epic"
    ],
    "audiences": [
      "Family",
      "Friends",
      "Classics"
    ],
    "synopsis": "A farm kid, a princess, a smuggler, and an old knight ignite a mythic rebellion.",
    "why": "A familiar classic lets testers understand the value of profile exceptions quickly.",
    "trailerId": "vZ734NWnAHA",
    "afi": true,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Disney+",
        "detail": "Availability placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "fury-road",
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "runtime": 120,
    "rating": "R",
    "genres": [
      "Action",
      "Adventure"
    ],
    "moods": [
      "Spectacle",
      "Intense",
      "Theater Energy"
    ],
    "audiences": [
      "Friends",
      "Adults"
    ],
    "synopsis": "A roaring chase across a wasteland that turns action into pure visual storytelling.",
    "why": "A great trailer-first test because users know within seconds if they want the ride.",
    "trailerId": "hEJnMQG9ev8",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Max",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "paddington-2",
    "title": "Paddington 2",
    "year": 2017,
    "runtime": 103,
    "rating": "PG",
    "genres": [
      "Comedy",
      "Adventure"
    ],
    "moods": [
      "Family",
      "Warm",
      "Funny"
    ],
    "audiences": [
      "Family",
      "Kids"
    ],
    "synopsis": "A kind bear, a pop-up book, and an accidental prison adventure become a machine for joy.",
    "why": "A family-safe card shows the app can solve household decision fatigue.",
    "trailerId": "52x5HJ9H8DM",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Netflix",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "heat",
    "title": "Heat",
    "year": 1995,
    "runtime": 170,
    "rating": "R",
    "genres": [
      "Crime",
      "Drama",
      "Action"
    ],
    "moods": [
      "Classic",
      "Intense",
      "Cool"
    ],
    "audiences": [
      "Adults",
      "Classics"
    ],
    "synopsis": "A master thief and a relentless detective orbit each other through Los Angeles.",
    "why": "A crime classic that appeals to users who do not think of themselves as 'classic film' people.",
    "trailerId": "14oNcFxiVaQ",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Hulu",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  },
  {
    "id": "arrival",
    "title": "Arrival",
    "year": 2016,
    "runtime": 116,
    "rating": "PG-13",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "Thoughtful",
      "Quiet",
      "Serious"
    ],
    "audiences": [
      "Date Night",
      "Prestige"
    ],
    "synopsis": "A linguist meets alien visitors and discovers time, grief, and language folding into one another.",
    "why": "Shows that sci-fi can be filtered by thoughtfulness instead of explosions.",
    "trailerId": "tFMo3UJ4B4g",
    "afi": false,
    "oscar": false,
    "routes": [
      {
        "type": "streaming",
        "label": "Paramount+",
        "detail": "Availability placeholder"
      },
      {
        "type": "streaming",
        "label": "Prime Video",
        "detail": "Rental placeholder"
      }
    ],
    "confidence": "medium"
  }
];

const STORAGE_KEY = "mme_mvp_profile_v2";
const SESSION_KEY = "mme_mvp_session_v2";

const PRESETS = [
  { id: "classic", label: "Tom classic night", state: { route: "all", audiences: ["Classics"], moods: ["Classic"], genres: [], decadeFrom: 1930, decadeTo: 2020, includeClassics: true, shortRuntime: false, hideLowConfidence: false, search: "" } },
  { id: "date", label: "Date night", state: { route: "streaming", audiences: ["Date Night"], moods: ["Romantic", "Warm", "Funny"], genres: [], decadeFrom: 1940, decadeTo: 2020, includeClassics: true, shortRuntime: false, hideLowConfidence: false, search: "" } },
  { id: "family", label: "Family safe", state: { route: "all", audiences: ["Family", "Kids"], moods: ["Family", "Funny", "Colorful"], genres: [], decadeFrom: 1930, decadeTo: 2020, includeClassics: true, shortRuntime: true, hideLowConfidence: false, search: "" } },
  { id: "theater", label: "Theater energy", state: { route: "theaters", audiences: ["Theater Night"], moods: ["Spectacle", "Theater Energy", "Epic"], genres: [], decadeFrom: 2000, decadeTo: 2020, includeClassics: false, shortRuntime: false, hideLowConfidence: false, search: "" } },
  { id: "awards", label: "Award winners", state: { route: "all", audiences: ["Prestige"], moods: ["Award Winner", "Thoughtful"], genres: [], decadeFrom: 1940, decadeTo: 2020, includeClassics: true, shortRuntime: false, hideLowConfidence: false, search: "" } },
  { id: "quick", label: "Under 2 hours", state: { route: "streaming", audiences: [], moods: ["Funny", "Warm", "Thoughtful"], genres: [], decadeFrom: 1990, decadeTo: 2020, includeClassics: true, shortRuntime: true, hideLowConfidence: true, search: "" } }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const els = {
  presetButtons: $("#presetButtons"), genreFilters: $("#genreFilters"), moodFilters: $("#moodFilters"), audienceFilters: $("#audienceFilters"),
  decadeFrom: $("#decadeFrom"), decadeTo: $("#decadeTo"), includeClassics: $("#includeClassics"), shortRuntime: $("#shortRuntime"), hideLowConfidence: $("#hideLowConfidence"),
  searchBox: $("#searchBox"), sortMode: $("#sortMode"), movieGrid: $("#movieGrid"), resultCount: $("#resultCount"), emptyState: $("#emptyState"), profileSummary: $("#profileSummary"),
  saveProfile: $("#saveProfile"), resetFilters: $("#resetFilters"), quickDemo: $("#quickDemo"), exportSession: $("#exportSession"), printBrief: $("#printBrief"), openWatchlist: $("#openWatchlist"), openWatchlistTop: $("#openWatchlistTop"), watchlistPill: $("#watchlistPill"),
  metricSaved: $("#metricSaved"), metricTrailers: $("#metricTrailers"), metricDismissed: $("#metricDismissed"), metricSignal: $("#metricSignal"),
  testForm: $("#testForm"), testerName: $("#testerName"), testerReaction: $("#testerReaction"), usefulnessScore: $("#usefulnessScore"), wouldUseAgain: $("#wouldUseAgain"), clearSession: $("#clearSession"),
  detailsDialog: $("#detailsDialog"), detailsMount: $("#detailsMount"), watchlistDialog: $("#watchlistDialog"), watchlistMount: $("#watchlistMount"), toast: $("#toast")
};

const allGenres = unique(MOVIES.flatMap(m => m.genres)).sort();
const allMoods = unique(MOVIES.flatMap(m => m.moods)).sort();
const allAudiences = unique(MOVIES.flatMap(m => m.audiences)).sort();
const decades = unique(MOVIES.map(m => decadeFor(m.year))).sort((a,b) => a-b);
let session = loadJson(SESSION_KEY, { feedback: {}, tests: [], startedAt: new Date().toISOString() });

function unique(items) { return Array.from(new Set(items)); }
function decadeFor(year) { return Math.floor(year / 10) * 10; }
function loadJson(key, fallback) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } }
function saveJson(key, value) { localStorage.setItem(key, JSON.stringify(value, null, 2)); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }

function defaultState() {
  return { search: "", route: "all", audiences: [], moods: [], genres: [], decadeFrom: decades[0], decadeTo: decades[decades.length-1], includeClassics: true, shortRuntime: false, hideLowConfidence: false, sort: "recommended" };
}

function init() {
  els.presetButtons.innerHTML = PRESETS.map(p => `<button type="button" data-preset="${p.id}">${escapeHtml(p.label)}</button>`).join("");
  els.genreFilters.innerHTML = allGenres.map(g => chip("genre", g)).join("");
  els.moodFilters.innerHTML = allMoods.map(m => chip("mood", m)).join("");
  els.audienceFilters.innerHTML = allAudiences.map(a => chip("audience", a)).join("");
  els.decadeFrom.innerHTML = decades.map(d => `<option value="${d}">${d}s</option>`).join("");
  els.decadeTo.innerHTML = decades.map(d => `<option value="${d}">${d}s</option>`).join("");
  applyState({...defaultState(), ...loadJson(STORAGE_KEY, {})});
  wire();
  render();
}

function chip(name, value) {
  const id = `${name}-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return `<label for="${id}"><input id="${id}" type="checkbox" name="${name}" value="${escapeHtml(value)}"><span>${escapeHtml(value)}</span></label>`;
}

function getChecked(name) { return $$(`input[name='${name}']:checked`).map(i => i.value); }
function setChecked(name, values=[]) { $$(`input[name='${name}']`).forEach(i => i.checked = values.includes(i.value)); }
function getState() {
  return {
    search: els.searchBox.value.trim(),
    route: $("input[name='route']:checked")?.value || "all",
    audiences: getChecked("audience"), moods: getChecked("mood"), genres: getChecked("genre"),
    decadeFrom: Number(els.decadeFrom.value), decadeTo: Number(els.decadeTo.value),
    includeClassics: els.includeClassics.checked, shortRuntime: els.shortRuntime.checked, hideLowConfidence: els.hideLowConfidence.checked,
    sort: els.sortMode.value
  };
}
function applyState(state) {
  const merged = {...defaultState(), ...state};
  els.searchBox.value = merged.search || "";
  const route = $(`input[name='route'][value='${merged.route || "all"}']`); if (route) route.checked = true;
  setChecked("audience", merged.audiences || []); setChecked("mood", merged.moods || []); setChecked("genre", merged.genres || []);
  els.decadeFrom.value = merged.decadeFrom; els.decadeTo.value = merged.decadeTo;
  els.includeClassics.checked = !!merged.includeClassics; els.shortRuntime.checked = !!merged.shortRuntime; els.hideLowConfidence.checked = !!merged.hideLowConfidence;
  els.sortMode.value = merged.sort || "recommended";
}

function filterMovies(state) {
  const minD = Math.min(state.decadeFrom, state.decadeTo), maxD = Math.max(state.decadeFrom, state.decadeTo);
  const q = state.search.toLowerCase();
  return MOVIES.filter(m => {
    const inDecade = decadeFor(m.year) >= minD && decadeFor(m.year) <= maxD;
    const classicException = state.includeClassics && (m.afi || m.oscar);
    const routeOk = state.route === "all" || m.routes.some(r => r.type === state.route);
    const genreOk = !state.genres.length || state.genres.some(g => m.genres.includes(g));
    const moodOk = !state.moods.length || state.moods.some(md => m.moods.includes(md));
    const audienceOk = !state.audiences.length || state.audiences.some(a => m.audiences.includes(a));
    const runtimeOk = !state.shortRuntime || m.runtime <= 120;
    const confidenceOk = !state.hideLowConfidence || m.confidence !== "low";
    const haystack = [m.title, m.year, m.rating, m.genres.join(" "), m.moods.join(" "), m.audiences.join(" "), m.synopsis, m.why, m.routes.map(r=>r.label).join(" "), m.afi ? "afi classic" : "", m.oscar ? "oscar award winner" : ""].join(" ").toLowerCase();
    const searchOk = !q || haystack.includes(q);
    return (inDecade || classicException) && routeOk && genreOk && moodOk && audienceOk && runtimeOk && confidenceOk && searchOk;
  }).sort((a,b) => compareMovies(a,b,state));
}
function compareMovies(a,b,state) {
  if (state.sort === "newest") return b.year - a.year;
  if (state.sort === "classic") return Number(b.afi || b.oscar) - Number(a.afi || a.oscar) || a.year - b.year;
  if (state.sort === "short") return a.runtime - b.runtime;
  if (state.sort === "alpha") return a.title.localeCompare(b.title);
  return score(b,state) - score(a,state);
}
function score(m,state) {
  const fb = session.feedback[m.id] || {};
  let s = 0;
  s += m.oscar ? 15 : 0; s += m.afi ? 14 : 0; s += m.routes.some(r=>r.type==='theaters') ? 5 : 0; s += m.confidence === 'medium' ? 5 : -3;
  s += Math.max(0, 2027 - m.year < 6 ? 8 : 0);
  s += state.genres.filter(g => m.genres.includes(g)).length * 10;
  s += state.moods.filter(md => m.moods.includes(md)).length * 10;
  s += state.audiences.filter(a => m.audiences.includes(a)).length * 10;
  if (state.shortRuntime && m.runtime <= 120) s += 8;
  if (fb.saved) s += 25; if (fb.dismissed) s -= 35; if (fb.trailerOpened) s += 5;
  return s;
}

function render() {
  const state = getState(); saveJson(STORAGE_KEY, state);
  const matches = filterMovies(state);
  els.resultCount.textContent = matches.length;
  els.movieGrid.innerHTML = matches.map(renderCard).join("");
  els.emptyState.hidden = matches.length > 0;
  els.profileSummary.textContent = summary(state);
  renderMetrics(); renderWatchlistPill();
}
function summary(s) {
  const bits = [s.route === 'all' ? 'theaters + streaming' : s.route, `${Math.min(s.decadeFrom,s.decadeTo)}s–${Math.max(s.decadeFrom,s.decadeTo)}s`];
  if (s.audiences.length) bits.push(s.audiences.join('/'));
  if (s.moods.length) bits.push(s.moods.join('/'));
  if (s.genres.length) bits.push(s.genres.join('/'));
  if (s.shortRuntime) bits.push('under 2 hours');
  if (s.includeClassics) bits.push('classic exceptions');
  if (s.search) bits.push(`search: “${s.search}”`);
  return bits.join(' • ');
}
function renderCard(m) {
  const fb = session.feedback[m.id] || {};
  const poster = `https://img.youtube.com/vi/${m.trailerId}/hqdefault.jpg`;
  const trailer = `https://www.youtube.com/watch?v=${m.trailerId}`;
  return `<article class="movie-card" data-id="${m.id}">
    <a class="trailer-frame" href="${trailer}" target="_blank" rel="noopener" data-action="trailer" data-id="${m.id}"><img src="${poster}" alt="Trailer thumbnail for ${escapeHtml(m.title)}" loading="lazy"><span class="play-pill">▶ Trailer</span></a>
    <div class="card-body">
      <div class="card-title-row"><h3>${escapeHtml(m.title)}</h3><span class="year">${m.year}</span></div>
      <div class="meta-row"><span>${m.runtime} min</span><span>${m.rating}</span>${m.genres.map(g=>`<span>${escapeHtml(g)}</span>`).join('')}</div>
      <p class="synopsis">${escapeHtml(m.synopsis)}</p>
      <div class="tag-row">${m.moods.slice(0,3).map(md=>`<span>${escapeHtml(md)}</span>`).join('')}${m.afi ? '<span class="gold">AFI-style</span>' : ''}${m.oscar ? '<span class="green">Oscar</span>' : ''}</div>
      <div class="route-row">${m.routes.map(r=>`<span class="route ${r.type}">${escapeHtml(r.label)}</span>`).join('')}</div>
      <div class="cta-row"><button type="button" class="mock-button ${fb.saved ? 'active' : ''}" data-action="save" data-id="${m.id}">${fb.saved ? 'Saved' : 'Save'}</button><button type="button" class="mock-button ${fb.dismissed ? 'bad active' : ''}" data-action="dismiss" data-id="${m.id}">Not for me</button><button type="button" class="mock-button" data-action="details" data-id="${m.id}">Details</button></div>
    </div>
  </article>`;
}

function renderMetrics() {
  const vals = Object.values(session.feedback || {});
  const saved = vals.filter(v=>v.saved).length, trailers = vals.filter(v=>v.trailerOpened).length, dismissed = vals.filter(v=>v.dismissed).length;
  const total = saved + trailers + dismissed;
  els.metricSaved.textContent = saved; els.metricTrailers.textContent = trailers; els.metricDismissed.textContent = dismissed;
  els.metricSignal.textContent = total ? `${Math.round(((saved + trailers) / total) * 100)}%` : '0%';
}
function renderWatchlistPill() {
  els.watchlistPill.textContent = Object.values(session.feedback || {}).filter(v=>v.saved).length;
}
function record(id, patch) {
  const prev = session.feedback[id] || { id, events: [] };
  session.feedback[id] = { ...prev, ...patch, updatedAt: new Date().toISOString(), events: [...(prev.events || []), { at: new Date().toISOString(), ...patch }] };
  saveJson(SESSION_KEY, session); render();
}
function toast(msg) {
  els.toast.textContent = msg; els.toast.classList.add('show');
  setTimeout(() => els.toast.classList.remove('show'), 1700);
}
function movieById(id) { return MOVIES.find(m => m.id === id); }

function openDetails(id) {
  const m = movieById(id); if (!m) return;
  els.detailsMount.innerHTML = `<form method="dialog" class="modal-card"><button class="close" aria-label="Close">×</button><p class="eyebrow">Movie decision card</p><h2>${escapeHtml(m.title)} <span>${m.year}</span></h2><p>${escapeHtml(m.synopsis)}</p><p><strong>Why this appears:</strong> ${escapeHtml(m.why)}</p><div class="detail-grid"><div><strong>Runtime</strong><span>${m.runtime} min</span></div><div><strong>Rating</strong><span>${m.rating}</span></div><div><strong>Routing confidence</strong><span>${m.confidence}</span></div></div><h3>Watch routes shown in MVP</h3><ul>${m.routes.map(r=>`<li><strong>${escapeHtml(r.label)}:</strong> ${escapeHtml(r.detail)}</li>`).join('')}</ul><p class="note">Live showtimes/streaming links are intentionally placeholders until provider choice is validated.</p><div class="cta-row"><a class="primary-action" href="https://www.youtube.com/watch?v=${m.trailerId}" target="_blank" rel="noopener">Open trailer</a><button class="ghost-button" data-save-modal="${m.id}" type="button">Save to watchlist</button></div></form>`;
  els.detailsDialog.showModal();
}
function openWatchlistDialog() {
  const savedIds = Object.values(session.feedback || {}).filter(v=>v.saved).map(v=>v.id);
  const items = savedIds.map(movieById).filter(Boolean);
  els.watchlistMount.innerHTML = `<form method="dialog" class="modal-card"><button class="close" aria-label="Close">×</button><p class="eyebrow">Watchlist</p><h2>${items.length} saved movie${items.length === 1 ? '' : 's'}</h2>${items.length ? `<ol class="watchlist-list">${items.map(m=>`<li><strong>${escapeHtml(m.title)}</strong><span>${m.year} • ${m.routes.map(r=>escapeHtml(r.label)).join(', ')}</span><button type="button" data-remove="${m.id}">Remove</button></li>`).join('')}</ol>` : '<p>No saved movies yet. Save a few cards during a user test.</p>'}<div class="cta-row"><button class="primary-button" type="button" id="exportFromWatchlist">Export session</button><button class="ghost-button" value="cancel">Close</button></div></form>`;
  els.watchlistDialog.showModal();
}
function exportSession() {
  const payload = { exportedAt: new Date().toISOString(), app: 'MoviesMadeEasy FindAMovie MVP', profile: getState(), feedback: session.feedback, tests: session.tests, metrics: { saved: els.metricSaved.textContent, trailersOpened: els.metricTrailers.textContent, dismissed: els.metricDismissed.textContent, positiveSignal: els.metricSignal.textContent }, notes: 'Demo-data MVP. Availability and showtimes are placeholders.' };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `moviesmadeeasy-session-${new Date().toISOString().replace(/[:.]/g,'-')}.json`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); toast('Session export created');
}

function wire() {
  document.body.addEventListener('change', e => { if (e.target.matches('input, select')) render(); });
  els.searchBox.addEventListener('input', render);
  els.presetButtons.addEventListener('click', e => { const btn = e.target.closest('[data-preset]'); if (!btn) return; const p = PRESETS.find(x=>x.id===btn.dataset.preset); applyState({...defaultState(), ...p.state}); render(); toast(`Loaded: ${p.label}`); });
  els.quickDemo.addEventListener('click', () => { const p = PRESETS.find(x=>x.id==='classic'); applyState({...defaultState(), ...p.state}); record('godfather', { saved: true, trailerOpened: true, dismissed: false }); record('casablanca', { saved: true, trailerOpened: true, dismissed: false }); record('barbie', { dismissed: true, saved: false }); toast('Demo profile and sample feedback loaded'); });
  els.saveProfile.addEventListener('click', () => { saveJson(STORAGE_KEY, getState()); toast('Profile saved'); });
  els.resetFilters.addEventListener('click', () => { applyState(defaultState()); render(); toast('Profile reset'); });
  els.movieGrid.addEventListener('click', e => { const t = e.target.closest('[data-action]'); if (!t) return; const id = t.dataset.id; if (t.dataset.action === 'trailer') record(id, { trailerOpened: true }); if (t.dataset.action === 'save') record(id, { saved: !(session.feedback[id]?.saved), dismissed: false }); if (t.dataset.action === 'dismiss') record(id, { dismissed: !(session.feedback[id]?.dismissed), saved: false }); if (t.dataset.action === 'details') openDetails(id); });
  els.detailsMount.addEventListener('click', e => { const b = e.target.closest('[data-save-modal]'); if (b) { record(b.dataset.saveModal, { saved: true, dismissed: false }); toast('Saved to watchlist'); } });
  els.openWatchlist.addEventListener('click', openWatchlistDialog); els.openWatchlistTop.addEventListener('click', openWatchlistDialog);
  els.watchlistMount.addEventListener('click', e => { const r = e.target.closest('[data-remove]'); if (r) record(r.dataset.remove, { saved: false }); if (e.target.id === 'exportFromWatchlist') exportSession(); });
  els.exportSession.addEventListener('click', exportSession);
  els.printBrief.addEventListener('click', () => window.print());
  els.testForm.addEventListener('submit', e => { e.preventDefault(); session.tests.push({ at: new Date().toISOString(), tester: els.testerName.value.trim(), reaction: els.testerReaction.value.trim(), usefulness: els.usefulnessScore.value, wouldUseAgain: els.wouldUseAgain.value, profile: getState(), feedbackSnapshot: session.feedback }); saveJson(SESSION_KEY, session); els.testerReaction.value=''; toast('Test note saved'); });
  els.clearSession.addEventListener('click', () => { if (confirm('Clear local feedback/test session?')) { session = { feedback: {}, tests: [], startedAt: new Date().toISOString() }; saveJson(SESSION_KEY, session); render(); toast('Session cleared'); } });
}

init();
