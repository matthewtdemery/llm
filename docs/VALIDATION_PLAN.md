# Validation Plan

## Hypothesis

```text
A movies-only, trailer-first, persistent profile filter helps users choose a movie faster than generic scrolling through streaming apps, IMDb, Fandango, or Google.
```

## Test size

Start with 5 users. If signals are mixed, expand to 10.

## Tester types

Try to include:

- one classic-movie or older-film fan;
- one casual streamer;
- one theatergoer;
- one family/household chooser;
- one skeptical user who normally just uses Google or Netflix.

## Test script

1. Ask: “How do you normally find a movie to watch?”
2. Ask: “What annoys you about that?”
3. Give them the MVP without explaining every feature.
4. Ask them to find one movie they would actually watch tonight.
5. Watch whether they use filters, search, trailers, or route badges.
6. Ask them to save one movie and reject one movie.
7. Ask: “What is this app for?”
8. Ask: “Would you use this again next week?”
9. Export feedback JSON.
10. Write a 3-sentence tester summary.

## Pass/fail threshold

Pass if 5 testers produce:

- 3+ saved movies;
- 3+ watched two or more trailers;
- 3+ unprompted positive comments about filters/profile;
- 2+ say they would use it again.

## What would fail the idea

- Users ignore the profile filter.
- Users say it feels like IMDb/Fandango/JustWatch but smaller.
- Users cannot explain what makes it different.
- Users like the idea verbally but do not save/click/watch anything.
- Users only care about accurate showtimes/availability and not the profile/trailer experience.

## Output

Create:

```text
notes\USER_TEST_RESULTS.md
exports\feedback_user_01.json
exports\feedback_user_02.json
...
```
