# PbearLab Community — Digital Skills for Rānui

A small static website for the free **Digital Skills for Rānui** community programme, run by Hans Wang
and Nina Gao at Rānui Action Project (supported by the Purapura Community Fund). It is hosted under
**pbearlab.co.nz** and also promotes PbearLab (applied AI, cybersecurity, software development,
community IT support).

## Who uses it

- **Whānau attending the programme.** Many are not confident with technology. Keep the language plain,
  the text large, and the pages short. Everything must work on a phone.
- **People and organisations considering PbearLab** (the "Work with PbearLab" page).

## Stack

Vite + React 19 + TypeScript, React Router 6, Tailwind CSS v4, `vite-react-ssg` (pre-renders every page
to static HTML at build time). Fonts (Inter, Space Grotesk) are self-hosted through Fontsource.
There is no backend. `npm run build` outputs plain files in `dist/`.

## Commands

- `npm run dev` — local dev server
- `npm run build` — type-check, then build and pre-render into `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run lint`, `npm run format`

## Where things are

- `src/content/` — the text and data Hans edits: `site.ts` (Friday details, contact, YouTube links,
  form endpoint), `modules.ts` (the six monthly modules, playlist links), `services.ts` (PbearLab
  services and founder bio). Prefer changing these over editing page code.
- `src/pages/` — Home, Videos, FridayHelp, Pbearlab, NotFound.
- `src/components/` — Header, Footer, Layout, Button, VideoEmbed, ContactForm.
- `src/styles/index.css` — design tokens (colours, fonts) in the `@theme` block.
- To add a page: create it in `src/pages`, add a route in `src/routes.tsx`, add a link in `Header.tsx`,
  and give it a `<Head>` with a title and description.

## Design rules

- Cool "polar" palette: ink navy, ice blue, teal, one warm amber accent for the main button. Do **not**
  reuse the green and gold of the programme poster; the site is intentionally different.
- Accessible by default: real links and buttons, labelled form fields, visible focus, body text at
  least 18px, good contrast, tap targets at least 44px.
- Keep copy plain and warm. Use te reo Māori words (whānau, Rānui) with correct macrons.

## Open items (placeholders in [SQUARE BRACKETS] or empty strings)

- YouTube channel link, each month's playlist link, optional featured video ID
- A form endpoint (until then, forms open the visitor's email app)
- PbearLab service wording and founder bio are DRAFTS, to be checked by Hans
- No logos or images from Whiti Mai Rānui, Te Kawerau ā Maki or the funder are used. Do not add them
  without permission from those organisations.

## Deploying

Static files only. Copy `dist/` to the web server (nginx or similar).
