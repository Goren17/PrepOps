# PrepOps

[![CI](https://github.com/Goren17/PrepOps/actions/workflows/ci.yml/badge.svg)](https://github.com/Goren17/PrepOps/actions/workflows/ci.yml)

PrepOps is a browser-based DevOps interview trainer. It is a static web app: no build step, package install, backend, or database is required.

Latest deployment: https://goren17.github.io/PrepOps/

## Run after cloning

Clone the repository:

```bash
git clone <repo-url>
cd PrepOps
```

Open `index.html` in your browser.

On Linux you can usually run:

```bash
xdg-open index.html
```

On macOS:

```bash
open index.html
```

You can also double-click `index.html` from your file manager.

## Optional local server

Opening the file directly is enough. If you prefer serving it over HTTP, run one of these from the repo root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to use

- Choose a subject from the left sidebar.
- Use `Playlist` to focus the question bank, for example `Applied Materials DevOps`.
- Use `Mode`:
  - `Browse`: normal question practice.
  - `Scenarios`: troubleshooting and practical workflow questions.
  - `Review drill`: questions marked for review.
  - `Mock Interview`: timed mock sessions with scoring.
- Click `Show answer` to reveal the answer, answer structure, senior signals, and follow-up prompts.
- Rate your answer with `Again`, `Hard`, `Good`, or `Easy`.
- Use `Focus` to filter by rating.
- Use `Save` to mark questions and the queue filter to view saved questions.

Progress, mock history, playlist edits, and ratings are stored in your browser's `localStorage`.

## Main files

- `index.html`: app layout.
- `styles.css`: app styling.
- `app.js`: app behavior, filtering, mock interviews, progress tracking.
- `questions.js`: question bank and categories.
- `favicon.*`: app icons.

## Editing questions

Questions live in `questions.js` inside the `QUESTIONS` array. Each category has:

```js
{
  subject: "Category name",
  icon: "AB",
  items: [
    {
      q: "Question",
      a: "Answer",
      signals: ["Signal 1", "Signal 2"]
    }
  ]
}
```

After editing `questions.js`, refresh the browser.

## Tests and deployment

CI runs on every push and pull request:

```bash
npm run test
```

The test suite validates the question bank and runs a Playwright smoke test against the static app. Pushes to `main` deploy the tested static files to GitHub Pages.
