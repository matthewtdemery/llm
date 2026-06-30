# Data Sources and Risks

## Executive point

The hardest part of MoviesMadeEasy is not the visual app. The hard part is reliable data and routing.

## Metadata and trailers

Likely source class:

- TMDB-style metadata and video/trailer endpoints.
- YouTube trailer links through provider metadata or direct curation.

Call framing:

```text
This is the easiest layer. It still needs terms review and attribution/branding compliance, but it is not the scary part.
```

## Streaming availability

Likely source class:

- Watchmode-style streaming availability APIs.
- Other paid availability providers.

Risk:

- pricing;
- country coverage;
- service coverage;
- deeplink quality;
- refresh frequency;
- provider terms;
- attribution requirements.

Call framing:

```text
Streaming availability is feasible, but we should prove it with one provider before quoting the full app.
```

## Theater showtimes and ticketing

Likely source class:

- Gracenote/TMS-style showtime APIs;
- Fandango or theater-chain affiliate/deep-link paths;
- limited market/manual prototype if needed.

Risk:

- partner access;
- ticketing terms;
- chain fragmentation;
- deep-link breakage;
- geographic coverage;
- not all theaters support the same path.

Call framing:

```text
Theater routing is likely the hardest and most expensive layer. Version 1 should not promise universal coverage until a provider path is confirmed.
```

## Current source notes checked during prep

- TMDB developer docs expose movie video/trailer-style endpoints and broader movie metadata docs.
- Watchmode presents a streaming availability API with multi-country and many-service coverage claims.
- Gracenote/TMS developer docs include theater/movie showtime endpoints.
- Fandango has had affiliate/ticket referral materials, but terms and availability must be verified before relying on it.

## Vendor questions

Ask every vendor:

1. What data provider do you propose for each layer?
2. What does it cost monthly at low, medium, and high usage?
3. What attribution is required?
4. What commercial-use terms apply?
5. What deep links are available?
6. What data can be cached?
7. How often does the data refresh?
8. Can the provider be swapped later?
9. What happens if the provider cuts off access?
10. What will be mocked in the first build vs live?
