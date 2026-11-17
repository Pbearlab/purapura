# PbearLab Community — Digital Skills for Rānui

The website for the free Digital Skills for Rānui programme (Rānui Action Project, supported by the
Purapura Community Fund), with a PbearLab page for business enquiries.

Built with Vite, React, TypeScript, React Router and Tailwind CSS. Every page is pre-rendered to plain
HTML at build time, so the finished site is just static files.

## First-time setup (Mac)

1. **Install Node.js 22** (skip if `node -v` already shows 22 or newer).
   With Homebrew: `brew install node@22`, or download it from https://nodejs.org.
2. **Open Terminal in this folder**, then install the packages:
   ```
   npm install
   ```
3. **Start the site locally:**
   ```
   npm run dev
   ```
   Open the address it prints (usually http://localhost:5173). The page updates as you edit files.

## Working with Claude Code

In the same folder, run `claude`. It reads `CLAUDE.md`, which explains the project, so you can say things
like "add the YouTube playlist links" or "add a Stay safe online page".

## Editing the content

Most changes need no coding. Edit these files:

| File                      | What it controls                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| `src/content/site.ts`     | Friday times and address, contact email and phone, YouTube channel link, featured video, form endpoint |
| `src/content/modules.ts`  | The six monthly modules and their YouTube playlist links                                               |
| `src/content/services.ts` | PbearLab services and the founder bio (both are drafts)                                                |
| `src/styles/index.css`    | Colours and fonts                                                                                      |

Anything in `[SQUARE BRACKETS]` is a placeholder. A link left empty (`''`) shows "coming soon".

## Scripts

| Command           | What it does                  |
| ----------------- | ----------------------------- |
| `npm run dev`     | Local development server      |
| `npm run build`   | Type-check, build, pre-render |
| `npm run preview` | Serve the built site          |
| `npm run lint`    | Check the code for problems   |
| `npm run format`  | Tidy code formatting          |
