# MoviesMadeEasy / FindAMovie Prototype

Static review prototype for the MoviesMadeEasy movie-discovery flow.

## Current demo

- Public demo: https://xivapi.crystalshouts.com/findamovie/
- v4 review demo: https://xivapi.crystalshouts.com/findamovie/v4/

## What this prototype demonstrates

- Home screen with the 4-step MoviesMadeEasy flow.
- Saved local profile: genres, release range, ad/sponsored/VOD preference, and platform selection.
- Titles + Trailers screen populated from saved profile selections.
- Trailer-first movie cards with availability/provider routing.
- My Library with trailers of interest and saved titles grouped by year.
- Static fallbacks for older demo paths so review links do not 404.

## Scope boundaries

This is a static front-end prototype. It does not include production authentication, a backend database, live showtimes, payments, ticketing, or live streaming-provider availability. Theater routing is intentionally high-level and points toward external now-playing/showtime products rather than managing showtime data inside this prototype.

## Local files

The demo entry point is:

```text
mvp/findamovie_mvp_static/index.html
```
