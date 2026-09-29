# WEB103 Project 2 - *Rug Pull Academy*

Submitted by: **Alex Schectman**

About this web app: **Rug Pull Academy is a listicle of the ten moves the crypto
scam playbook runs on, written so the patterns are recognizable rather than repeatable. Each
lesson names a tactic, mocks it, and pairs it with the red flag a reader should actually watch
for. Browse the lessons on the front page, search them by attribute, click into any one of them
for the full write-up, and get a 404 page for anything that does not exist. Every
lesson is now served out of a Render PostgreSQL database rather than a hardcoded array.**

Time spent: **10** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **Data is supplied to the app using a Render PostgreSQL database**
  - [x] The web app is connected to a Render PostgreSQL database
  - [x] The database contains an appropriately structured table for the list items

The following **stretch** features are implemented:

- [x] Users can search for items with a specific attribute
  - A search box matches against the title, body, red flag, category, and contributor. The
    filter is applied by Postgres in the `WHERE` clause, so the server only ever returns the
    rows that matched -- the browser is not filtering a full list.

The following **additional** features are implemented:

- [x] The detail page requests only its own row (`GET /grifts/:slug/data`) instead of pulling
      down all ten lessons and finding one in the browser.
- [x] Unknown slugs are checked against the database by the server, so `/grifts/not-a-real-slug`
      answers with a real `404` status and the 404 page instead of a client-side redirect after
      the page has already rendered.
- [x] `npm start` reseeds the database before booting the server, so a fresh clone is one
      command away from a working app.
- [x] Detail pages keep their readable slug URLs (`/grifts/blame-the-hack`).
- [x] Pico's automatic light/dark mode is respected throughout, including the new search bar.

## Video Walkthrough

Here's a walkthrough of implemented required features: https://imgur.com/a/7U6FFfx

GIF created with [Cockos LICEcap](https://www.cockos.com/licecap/)

## Notes

The front page hero states plainly that the content is satire. Each lesson is written from a
critical stance and carries a `redFlag` field describing what a reader should watch out for.
This app is meant to read as a field guide for spotting scams rather than a manual for running one.

## Running the app

The server reads its Postgres credentials from `server/.env`, which is git-ignored:

```
PGDATABASE="..."
PGHOST="....oregon-postgres.render.com"
PGPASSWORD="..."
PGPORT=5432
PGUSER="..."
```

The client and server run separately, so this needs two terminals:

```
cd server && npm install && npm start     # reseeds the db, then serves the API on :3001
cd client && npm install && npm run dev   # Vite dev server on :5173
```

Open the Vite URL. `npm run build` in `client` outputs to `server/public`, after which the
server alone serves the whole app on `:3001`. Run `npm run reset` in `server` to reseed the
database without starting the server.

## License

Copyright 2026 Alex Schectman

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
