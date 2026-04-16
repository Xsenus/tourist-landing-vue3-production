# Tourist Landing

Vue 3 landing page recreated from the approved Figma design.

## Stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- SCSS
- Vitest
- ESLint
- Prettier

## Project structure

- `src/app` - application bootstrap, router, global styles
- `src/pages` - route-level composition
- `src/widgets` - page sections
- `src/entities` - reusable section internals
- `src/shared` - shared UI, assets, and utilities

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run test
npm run lint
npm run typecheck
```

## QA widths

- Desktop: `1440px`
- Tablet: `1024px`
- Mobile: `390px`

## Deployment

The repository is configured for automatic deployment to GitHub Pages via
GitHub Actions.

1. Push the project to GitHub.
2. Open `Settings -> Pages`.
3. Select `GitHub Actions` in `Build and deployment`.
4. Push to `main` to trigger a new deployment.

If the repository is published under a subpath, set the `PAGES_BASE_PATH`
repository variable, for example:

- `/` for `https://username.github.io/`
- `/tourist-landing-vue3-production/` for
  `https://username.github.io/tourist-landing-vue3-production/`
