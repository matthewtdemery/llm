# Vendor Data-Source Questionnaire

Use this before trusting any production app quote.

## Metadata and trailers

1. Which provider supplies movie titles, years, posters, summaries, genres, cast, and trailer links?
2. Are we allowed to display this data commercially?
3. What attribution is required?
4. What are the monthly API limits and overage costs?
5. Can we cache results?

## Streaming availability

1. Which provider supplies streaming availability?
2. Which countries are covered in version 1?
3. Which services are covered?
4. Are subscription, rental, purchase, and free/ad-supported options separated?
5. Are direct deep links available?
6. How often does availability refresh?
7. What happens when data is wrong?

## Theater showtimes

1. Which provider supplies showtimes?
2. Which theater chains are covered?
3. Which geographic markets are covered?
4. How far in advance are showtimes available?
5. Are ticket purchase links available?
6. Are those links affiliate links, partner links, or plain outbound links?
7. Are in-app ticket purchases in scope or out of scope?

## Architecture

1. Can each provider be swapped later?
2. Is there a provider abstraction layer?
3. What gets stored in our database?
4. What data cannot be stored because of provider terms?
5. What analytics will show user intent?
6. What is the fallback when a provider is down?

## Quote structure

Ask vendor to separate:

- design;
- frontend;
- backend;
- provider/API integration;
- data/API subscription costs;
- hosting;
- analytics;
- admin tools;
- QA;
- maintenance;
- marketing;
- launch support.
