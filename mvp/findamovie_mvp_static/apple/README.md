# Apple Baseline Functional MVP

Created UTC: 2026-07-01T17:58:07.753799+00:00

Public route:

```text
https://xivapi.crystalshouts.com/findamovie/apple/
```

## Functional features

- Search across title, genre, mood, route, provider, synopsis, and rationale.
- Curated list chips: all, top rated, popular, theaters, streaming, family, classics, under 2 hours.
- Filters for route, provider, mood, and runtime.
- Trailer button opens a YouTube trailer search and records a local signal.
- Where-to-watch modal with explicit theater / streaming / rent-buy labels.
- Saved watchlist using localStorage.
- Session metrics for viewed results, trailer opens, saves, and route checks.
- Exportable JSON session receipt.
- Demo profile button.

## Boundary

Static demo data only. No live TMDb, streaming provider, showtime, ticketing, account, or payment integrations are included.


## Post-VM-test polish

Updated UTC: 2026-07-01T20:24:41.241998+00:00

- Added visible empty-state message and reset action.
- Cleaned watchlist spacing/readability.
- Added Not for me signal that hides a movie and records a local intent signal.
- Changed result views metric to count unique seen cards instead of inflating on every render.
- Export JSON now includes hidden/not-for-me movies.
