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

## Still to fill in

- [ ] YouTube channel link and each month's playlist link
- [x] Rānui Action Project street address
- [x] Contact email and phone
- [ ] Check the PbearLab service wording and bio
- [ ] Decide where the forms send messages (see below)
- [ ] Logos and images, only with permission from the organisations that own them

## The forms

Until you set `formEndpoint` in `src/content/site.ts`, the forms open the visitor's email app with their
message filled in. If you later add a place to receive submissions (a small endpoint on your server, or a
form service), put its URL in `formEndpoint`. The form will then POST JSON with `subject` and the field
values.

## Build and deploy

```
npm run build      # type-checks, builds and pre-renders into dist/
npm run preview    # check the built site locally
```

Copy everything inside `dist/` to your web server. Example nginx settings for a static site:

```nginx
server {
    server_name pbearlab.co.nz;
    root /var/www/pbearlab/dist;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
    error_page 404 /index.html;   # simple fallback; replace with a dedicated 404 page if you add one
}
```

Each page is a folder with an `index.html` (for example `/videos/index.html`), so addresses like
`/videos` and `/friday-help` work as they are. If the site lives in a sub-folder or a subdomain, tell
Claude Code, because the `base` setting in `vite.config.ts` may need changing.

## Scripts

| Command           | What it does                  |
| ----------------- | ----------------------------- |
| `npm run dev`     | Local development server      |
| `npm run build`   | Type-check, build, pre-render |
| `npm run preview` | Serve the built site          |
| `npm run lint`    | Check the code for problems   |
| `npm run format`  | Tidy code formatting          |
