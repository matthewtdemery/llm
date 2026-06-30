# FindAMovie / MoviesMadeEasy MVP Functional Test Report

Generated UTC: 2026-06-30T00:25:35.722869+00:00

## Target

- Public URL: `https://xivapi.crystalshouts.com/findamovie/`
- Test browser: VM Chrome via CDP remote-debugging session
- Visible VM Chrome was not disturbed; automated tests used an isolated Chrome profile.

## Summary

- Overall status: **PASS**
- Checks run: **35**
- Passed: **35**
- Failed: **0**
- VM receipt: `[local path redacted]`
- Mobile screenshot: `[local path redacted]`

## Coverage

Covered: page load, static assets, generated controls, fast profiles, search, empty state, route filters, genre/mood/audience chips, decade/classic exception logic, guardrails, sort modes, save/not-for-me/trailer metrics, details modal, modal save, watchlist modal/remove, quick demo, user-test form, export session, print brief, profile persistence, clear session, accessibility smoke, and viewport overflow smoke tests.

## Results

1. **PASS - Page loads with correct title**

```json
{
  "title": "MoviesMadeEasy — FindAMovie MVP",
  "url": "https://xivapi.crystalshouts.com/findamovie/"
}
```

2. **PASS - Hero and core sections render**

```json
{
  "h1": "Pick a profile. Watch the trailer. Decide where to see it."
}
```

3. **PASS - Initial movie grid renders results**

```json
{
  "resultCount": 24,
  "cardCount": 24
}
```

4. **PASS - Core controls exist**

5. **PASS - Static assets fetch successfully**

```json
{
  "resources": [
    {
      "u": "styles.css",
      "status": 200,
      "ok": true
    },
    {
      "u": "app.js",
      "status": 200,
      "ok": true
    },
    {
      "u": "manifest.webmanifest",
      "status": 200,
      "ok": true
    }
  ]
}
```

6. **PASS - All six fast profile presets produce matches**

```json
{
  "preset": [
    {
      "label": "Tom classic night",
      "count": 8
    },
    {
      "label": "Date night",
      "count": 3
    },
    {
      "label": "Family safe",
      "count": 4
    },
    {
      "label": "Theater energy",
      "count": 2
    },
    {
      "label": "Award winners",
      "count": 9
    },
    {
      "label": "Under 2 hours",
      "count": 6
    }
  ]
}
```

7. **PASS - Search narrows to Casablanca**

```json
{
  "count": 1,
  "titles": [
    "Casablanca"
  ]
}
```

8. **PASS - No-match search shows empty state**

```json
{
  "count": 0,
  "hidden": false
}
```

9. **PASS - Theaters route filter only shows theater-routed cards**

```json
{
  "count": 4,
  "titles": [
    "Dune: Part Two",
    "Inside Out 2",
    "Civil War",
    "Anora"
  ]
}
```

10. **PASS - Streaming route filter only shows streaming-routed cards**

```json
{
  "count": 23,
  "titles": [
    "The Godfather",
    "Casablanca",
    "The Silence of the Lambs",
    "Schindler's List",
    "Oppenheimer",
    "Parasite",
    "The Lord of the Rings: The Return of the King",
    "Moonlight"
  ]
}
```

11. **PASS - Genre chip filter works for Action**

```json
{
  "count": 4,
  "titles": [
    "Top Gun: Maverick",
    "Civil War",
    "Mad Max: Fury Road",
    "Heat"
  ]
}
```

12. **PASS - Mood chip filter works for Classic**

```json
{
  "count": 8,
  "titles": [
    "The Godfather",
    "Casablanca",
    "The Silence of the Lambs",
    "Schindler's List",
    "The Wizard of Oz",
    "Singin' in the Rain",
    "Star Wars: A New Hope",
    "Heat"
  ]
}
```

13. **PASS - Audience chip filter works for Family**

```json
{
  "count": 5,
  "titles": [
    "The Wizard of Oz",
    "Singin' in the Rain",
    "Star Wars: A New Hope",
    "Inside Out 2",
    "Paddington 2"
  ]
}
```

14. **PASS - Decade range limits results with classics off**

```json
{
  "count": 9,
  "years": [
    2023,
    2024,
    2023,
    2023,
    2023,
    2022,
    2024,
    2024,
    2024
  ],
  "titles": [
    "Oppenheimer",
    "Dune: Part Two",
    "Barbie",
    "The Holdovers",
    "Past Lives",
    "Top Gun: Maverick",
    "Inside Out 2",
    "Civil War",
    "Anora"
  ]
}
```

15. **PASS - Classics exception adds older AFI/Oscar cards**

```json
{
  "count": 20,
  "years": [
    1972,
    1942,
    1991,
    1993,
    2023,
    2019,
    2003,
    2016,
    2007,
    1939,
    1952,
    1977,
    2024,
    2023,
    2023
  ],
  "titles": [
    "The Godfather",
    "Casablanca",
    "The Silence of the Lambs",
    "Schindler's List",
    "Oppenheimer",
    "Parasite",
    "The Lord of the Rings: The Return of the King",
    "Moonlight",
    "No Country for Old Men",
    "The Wizard of Oz",
    "Singin' in the Rain",
    "Star Wars: A New Hope",
    "Dune: Part Two",
    "Barbie",
    "The Holdovers"
  ]
}
```

16. **PASS - Under-2-hours guardrail limits runtimes**

```json
{
  "count": 12,
  "runtimes": [
    102,
    118,
    111,
    102,
    103,
    114,
    106,
    96,
    109,
    120,
    103,
    116
  ],
  "titles": [
    "Casablanca",
    "The Silence of the Lambs",
    "Moonlight",
    "The Wizard of Oz",
    "Singin' in the Rain",
    "Barbie",
    "Past Lives",
    "Inside Out 2",
    "Civil War",
    "Mad Max: Fury Road"
  ]
}
```

17. **PASS - Hide low-confidence guardrail reduces count**

```json
{
  "before": 24,
  "after": 21
}
```

18. **PASS - Sort newest orders years descending**

```json
{
  "years": [
    2024,
    2024,
    2024,
    2024,
    2023,
    2023,
    2023,
    2023,
    2022,
    2019
  ],
  "titles": [
    "Dune: Part Two",
    "Inside Out 2",
    "Civil War",
    "Anora",
    "Oppenheimer",
    "Barbie",
    "The Holdovers",
    "Past Lives",
    "Top Gun: Maverick",
    "Parasite"
  ]
}
```

19. **PASS - Sort shortest orders runtimes ascending**

```json
{
  "runtimes": [
    96,
    102,
    102,
    103,
    103,
    106,
    109,
    111,
    114,
    116
  ],
  "titles": [
    "Inside Out 2",
    "Casablanca",
    "The Wizard of Oz",
    "Singin' in the Rain",
    "Paddington 2",
    "Past Lives",
    "Civil War",
    "Moonlight",
    "Barbie",
    "Arrival"
  ]
}
```

20. **PASS - Sort A-Z orders titles alphabetically**

```json
{
  "titles": [
    "Anora",
    "Arrival",
    "Barbie",
    "Casablanca",
    "Civil War",
    "Dune: Part Two",
    "Heat",
    "Inside Out 2",
    "Mad Max: Fury Road",
    "Moonlight"
  ]
}
```

21. **PASS - Save card updates metric and watchlist pill**

```json
{
  "saved": "1",
  "pill": "1",
  "firstTitle": "The Godfather"
}
```

22. **PASS - Not-for-me updates dismissed metric**

```json
{
  "dismissed": "1",
  "secondTitle": "Casablanca"
}
```

23. **PASS - Trailer click records trailer-open metric**

```json
{
  "trailers": "1",
  "url": "https://xivapi.crystalshouts.com/findamovie/"
}
```

24. **PASS - Details modal opens with decision content**

```json
{
  "open": true,
  "text": "×\n\nMOVIE DECISION CARD\n\nThe Godfather 1972\n\nA family empire passes from old-world power to cold American calculation.\n\nWhy this appears: The classic-profile exc"
}
```

25. **PASS - Details modal save control is wired**

```json
{
  "saved": "1"
}
```

26. **PASS - Watchlist modal opens and lists saved item**

```json
{
  "open": true,
  "text": "×\n\nWATCHLIST\n\n1 saved movie\nThe Godfather\n1972 • Paramount+, Prime Video\nRemove\nExport session\nClose"
}
```

27. **PASS - Watchlist remove updates saved metric**

```json
{
  "savedAfter": 0
}
```

28. **PASS - Quick demo loads classic profile and sample metrics**

```json
{
  "saved": "2",
  "trailers": "2",
  "dismissed": "1",
  "summary": "theaters + streaming • 1930s–2020s • Classics • Classic • classic exceptions"
}
```

29. **PASS - User-test form saves tester note**

```json
{
  "testCount": 1
}
```

30. **PASS - Export session creates JSON download**

```json
{
  "download": "moviesmadeeasy-session-2026-06-30T00-25-34-894Z.json",
  "toast": "Session export created"
}
```

31. **PASS - Print brief calls window.print**

```json
{
  "printed": true
}
```

32. **PASS - Profile persistence writes current profile**

```json
{
  "search": "Oppenheimer",
  "route": "all"
}
```

33. **PASS - Clear session resets feedback and tests**

```json
{
  "saved": "0",
  "trailers": "0",
  "dismissed": "0"
}
```

34. **PASS - Accessibility smoke passes**

```json
{
  "unnamedButtons": 0,
  "unlabeledControls": [],
  "imagesWithoutAlt": 0
}
```

35. **PASS - Desktop viewport has no horizontal overflow**

```json
{
  "innerWidth": 1350,
  "scrollWidth": 1335
}
```

## Browser/runtime notes

```json
{
  "title": "MoviesMadeEasy — FindAMovie MVP",
  "url": "https://xivapi.crystalshouts.com/findamovie/",
  "resultCount": 0,
  "metrics": {
    "saved": "0",
    "trailers": "0",
    "dismissed": "0",
    "signal": "0%"
  },
  "localStorageKeys": [
    "mme_mvp_session_v2",
    "mme_mvp_profile_v2"
  ],
  "browserErrors": []
}
```

## Mobile viewport smoke

```json
{
  "innerWidth": 401,
  "scrollWidth": 401,
  "ok": true
}
```

## Raw receipts

- Mikey raw runner receipt: `[local path redacted]`
- VM suite receipt: `[local path redacted]`