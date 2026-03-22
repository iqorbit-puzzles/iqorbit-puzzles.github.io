
# IQOrbit Puzzles (Web)

A lightweight **React + Vite** web version of IQOrbit Puzzles. Includes GitHub Actions to build & deploy to **GitHub Pages**.

## Local Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages (via Actions)
This repo includes `.github/workflows/deploy-pages.yml` which:
- Builds with `vite` and dynamically sets the correct **base** to `/${{ github.event.repository.name }}/` (so assets resolve on project pages)
- Uploads the `dist/` artifact
- Deploys using the official **deploy-pages** action

> Switch your repository **Settings → Pages → Source** to **GitHub Actions**.

If you use a **user/organization** pages repo named `<username>.github.io`, you can set base to `/` (no subpath) and the action will still work.

### SPA Routing on GitHub Pages
GitHub Pages is static and returns 404 on deep links. We ship `public/404.html` + a tiny redirect so client-side routing (React Router) still works.

## Structure
```
src/
  data/puzzles.ts
  pages/{Home,TypePage,PuzzlePage}.tsx
  components/{TypeCard,PuzzleRow,Pill}.tsx
  App.tsx, main.tsx, styles.css
public/404.html
```
