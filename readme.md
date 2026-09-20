# WEB103 Project 1 - *Rug Pull Academy*

Submitted by: **Alex Schectman**

About this web app: **Rug Pull Academy is a satirical listicle of the ten moves the crypto
scam playbook runs on, written so the patterns are recognizable rather than repeatable. Each
lesson names a tactic, mocks it, and pairs it with the red flag a reader should actually watch
for. Browse the lessons on the front page, click into any one of them for the full write-up,
and get a 404 page for anything that does not exist.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **Front page of web app is functional and appropriately styled**
  - [x] The web app displays a title
  - [x] Website displays at least five unique list items
  - [x] Each list item includes at least three displayed attributes
- [x] **Each list item has a corresponding page**
  - [x] The user can click on each item in the list to see a detailed view of it, including all database fields
  - [x] The web app serves an appropriate 404 page when no matching route is defined
- [x] **The webpage is styled with Picocss**

The following **optional** features are implemented:

- [x] List items are displayed in a unique format
  - Lessons render as a responsive card grid rather than a flat list.

The following **additional** features are implemented:

- [x] Detail pages use readable slug URLs (`/grifts/blame-the-hack`) rather than numeric IDs.
- [x] The Express server returns a real `404` status code alongside the 404 page, not just a
      client-side redirect.
- [x] Unknown item slugs (e.g. `/grifts/not-a-real-slug`) also resolve to the 404 page.
- [x] Pico's automatic light/dark mode is respected throughout.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [your tool here]

## Notes

The front page hero states plainly that the content is satire. Each lesson is written from a
critical stance and carries a `redFlag` field describing what a reader should watch out for, so
the app reads as a field guide for spotting scams rather than a manual for running one.

Every lesson carries the same nine attributes (`id`, `slug`, `title`, `category`, `text`,
`redFlag`, `image`, `submittedBy`, `submittedOn`), which should map cleanly onto a single table
when the project is connected to a database in Unit 2.

## Running the app

The client and server run separately, so this needs two terminals:

```
cd server && npm install && npm start     # API + static host on :3001
cd client && npm install && npm run dev   # Vite dev server on :5173
```

Open the Vite URL. `npm run build` in `client` outputs to `server/public`, after which the
server alone serves the whole app on `:3001`.

## License

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
