# Mother's Day Celebration

A warm, interactive web app built for a live Mother's Day celebration event — displayed on a TV screen for the whole family. Built with React + Vite and deployed via GitHub Pages.

**Live site:** [aakashgih.github.io/Mothers-Day-Celebration](https://aakashgih.github.io/Mothers-Day-Celebration/)

---

## Features

- **Itinerary** — Landing page with the day's schedule displayed as an animated timeline. Clickable entries navigate directly into each activity.
- **Family Trivia** — Three family groups (Amit, Aakash, Johnson) each get their own set of open-ended questions displayed one at a time on screen. Families write answers on paper — no right or wrong, just conversation starters.
- **Movie Time** — Embedded YouTube player for a family video montage.
- **TV-optimized design** — Large typography, high-contrast warm color palette, and oversized click targets designed for a 65" screen.

---

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- CSS custom properties (no UI framework)
- Google Fonts — Playfair Display + Nunito
- Deployed via GitHub Actions → GitHub Pages

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customizing Content

All content lives in `src/data/` — no touching components required.

| File | What to edit |
|---|---|
| `src/data/itinerary.js` | Event schedule, times, icons |
| `src/data/trivia.js` | Family names and questions |
| `src/data/video.js` | YouTube URL for the video montage |

---

## Deployment

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on every push to the `claude/mothers-day-website-Aku35` branch.

```bash
npm run build   # outputs to dist/
```

---

## Design

Warm cream background (`#FFF8F0`), deep rose primary (`#C2185B`), and gold accents (`#F9A825`) — chosen to feel celebratory and approachable on a large TV screen.
