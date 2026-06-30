# MVP Scope — MoviesMadeEasy / FindAMovie

## Product thesis

```text
People do not need another giant entertainment database. They need a faster way to decide what movie to watch, with less TV clutter, fewer irrelevant results, and a trailer-first path to theaters or streaming.
```

## Core user story

```text
As a movie watcher, I want to set a simple taste profile, browse trailer-first movie cards, and quickly see whether a movie is in theaters or available to stream, so I can decide what to watch without bouncing between five apps.
```

## MVP must prove

- The profile filter feels useful.
- Trailer-first browsing helps decision-making.
- Movies-only is a meaningful advantage over TV-heavy streaming guides.
- Users understand route choices: theater vs streaming.
- Users save movies or click trailers often enough to show intent.

## Version 0 / validation MVP

Already staged:

```text
[local path redacted]
```

Includes:

- static movie dataset;
- persistent local profile;
- search;
- genre, mood, decade, classic/award filters;
- route filter;
- trailer-first cards;
- save / not-for-me / trailer feedback;
- JSON export;
- user-test script.

## Version 1 production MVP candidate

Only after validation passes:

- responsive web/PWA first, not native apps first;
- metadata/trailer provider integration;
- curated classic/award seed dataset;
- streaming availability provider integration for one country;
- limited theater routing or outbound links, not universal ticketing;
- simple account/watchlist;
- basic analytics dashboard;
- admin/editable curation list.

## Explicitly out of scope for version 1

- universal theater/ticketing coverage;
- in-app ticket purchase;
- social network;
- complex recommendation engine;
- native iOS + Android from day one;
- multi-country coverage;
- studio ad marketplace;
- AI features unless tied to a proven user need.
