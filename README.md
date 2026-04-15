# Tourist Landing — Vue 3 + TypeScript + Vite

Production-ready recreation of the provided landing design, prepared for handoff to a frontend team.

## Stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- SCSS
- Vitest
- Vue Test Utils
- ESLint
- Prettier

## Why this structure

The project uses a layered UI architecture:

- `src/app` — app bootstrap, router, global styles
- `src/pages` — route-level page composition
- `src/widgets` — section-level blocks of the page
- `src/entities` — reusable section internals and independently animatable elements
- `src/shared` — design-system style primitives, assets, test setup, shared model types

This keeps every visual element discoverable and makes future animation work straightforward without refactoring the whole page.

## Run locally

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Create production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run tests

```bash
npm run test
```

### Run linting

```bash
npm run lint
```

### Run TypeScript check

```bash
npm run typecheck
```

## Recommended QA widths

- Desktop: `1440px`
- Tablet: `1024px`
- Mobile: `390px`

## Project notes

- The page intentionally keeps section internals split into dedicated components for animation readiness.
- Vue Router is included even though the current handoff is a single page, so adding routes later does not require reshaping the app.
- Pinia is intentionally omitted because the current scope is static content without cross-section state.

## Files to inspect first

- `src/pages/landing/model/landing-content.ts`
- `src/pages/landing/ui/LandingPage.vue`
- `src/widgets/*`
- `src/entities/*`
- `src/app/styles/index.scss`
- `ANIMATION_MAP.md`
- `UI_REBUILD_RULES.md`

## GitHub Pages deployment

The project is prepared for automatic publishing to GitHub Pages through
GitHub Actions.

Included in the repo:

- `.github/workflows/deploy-pages.yml` deploys on every push to `main` or
  `master`
- `vite.config.ts` reads `BASE_PATH`, so assets resolve correctly on Pages
- `public/.nojekyll` prevents GitHub Pages from dropping generated files that
  start with `_`

How to enable:

1. Push the project to GitHub.
2. Open `Settings -> Pages`.
3. In `Build and deployment`, select `GitHub Actions`.
4. Push to `main` and wait for the workflow to finish.

Optional repository variable:

- `PAGES_BASE_PATH`
- Examples:
  - `/` for `https://username.github.io/`
  - `/tourist-landing-vue3-production/` for
    `https://username.github.io/tourist-landing-vue3-production/`
