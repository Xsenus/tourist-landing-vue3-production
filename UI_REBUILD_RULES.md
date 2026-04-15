# UI Rebuild Rules

This document defines how the landing page must be rebuilt from the current
reference-perfect desktop canvas into a fully live Vue/SCSS implementation.

## Goal

Recreate the Zeplin design with:

- 1:1 visual fidelity on desktop
- real DOM elements instead of section screenshots
- real buttons, links, cards, inputs, and layout containers
- tablet and mobile support after desktop is signed off

## Current source of truth

- Desktop reference asset kept in the repo for comparison:
  `src/shared/assets/images/landing-desktop-body.png`
- Live production implementation path:
  `src/pages/landing/ui/LandingPage.vue` and `src/widgets/*`

## Non-negotiable rules

1. Desktop comes first. No tablet/mobile polishing before the same section is
   approved on desktop.
2. The desktop canvas stays in the project until the matching live section is
   fully signed off.
3. The final UI must not depend on section screenshots or artwork fallbacks for
   primary layout and interaction.
4. Each section is rebuilt and reviewed in isolation.
5. After each section, visual comparison is mandatory.
6. After each section, `npm run lint` and `npm run build` must pass.
7. No broad restyling of unrelated sections while one section is in progress.
8. If a control looks clickable in the design, it must become a real clickable
   element in code.
9. Only remove raster fallbacks for a section after its live version is
   accepted.

## Working mode

For each section we work in this order:

1. Keep the reference visible and stable.
2. Rebuild the section as live DOM.
3. Compare live DOM against the reference.
4. Fix visual differences.
5. Verify interactions and semantics.
6. Run lint/build.
7. Mark the section done and move to the next one.

## Definition of done for a section

A section is considered done only when all conditions below are true:

- Desktop visual result matches the reference closely enough to stop pixel-level
  corrections.
- Primary controls are real buttons, links, cards, or inputs.
- The section no longer relies on a screenshot as its main UI structure.
- The section does not break adjacent sections.
- `npm run lint` passes.
- `npm run build` passes.

## Rebuild order

- [x] Stage 0: lock desktop reference canvas in the project
- [x] Stage 1: header
- [x] Stage 2: hero left content
- [x] Stage 3: hero right composition
- [x] Stage 4: deals
- [x] Stage 5: perks
- [x] Stage 6: booking
- [x] Stage 7: identity
- [x] Stage 8: journey
- [x] Stage 9: tablet/mobile pass
- [x] Stage 10: cleanup and fallback removal

## Section-by-section implementation plan

## Stage 1. Header

Files:

- `src/widgets/site-header/ui/SiteHeader.vue`
- `src/app/styles/index.scss`

Scope:

- logo
- navigation
- language switcher
- login button
- signup button
- mobile menu trigger

Checks:

- spacing and typography match desktop reference
- controls are real interactive elements
- mobile menu still works

## Stage 2. Hero left content

Files:

- `src/widgets/hero-section/ui/HeroSection.vue`
- `src/shared/ui/AppButton.vue`
- `src/shared/ui/AvatarStack.vue`
- `src/app/styles/index.scss`

Scope:

- eyebrow
- title
- underline/spark/doodle details
- summary copy
- CTA row
- social proof row

Checks:

- line breaks match the reference
- CTA sizing and spacing match the reference
- social proof row aligns and scales correctly

## Stage 3. Hero right composition

Files:

- `src/widgets/hero-section/ui/HeroSection.vue`
- `src/entities/hero/ui/HeroPhoneUi.vue`
- `src/entities/hero/ui/HeroMemberCard.vue`
- `src/entities/hero/ui/HeroInfoBadge.vue`
- `src/app/styles/index.scss`

Scope:

- front phone
- back phone
- tourist card
- floating badges
- handwritten note
- background composition

Checks:

- hero no longer depends on a screenshot for the main composition
- all visible cards/badges are real DOM
- relative positions match the reference

## Stage 4. Deals

Files:

- `src/widgets/deals-section/ui/DealsSection.vue`
- related entities in `src/entities`
- `src/app/styles/index.scss`

Scope:

- intro block
- trust points
- cards
- ticket card
- handwritten note

Checks:

- card sizes and overlap match the reference
- text blocks and note placement match the reference

## Stage 5. Perks

Files:

- `src/widgets/perks-section/ui/*`
- `src/entities/perks/ui/*`
- `src/app/styles/index.scss`

Scope:

- left copy block
- profile card
- saved card
- friends strip
- member perks card

Checks:

- main structure is live DOM
- raster profile fallback is removed after sign-off

## Stage 6. Booking

Files:

- `src/widgets/booking-section/ui/*`
- `src/entities/booking/ui/*`
- `src/app/styles/index.scss`

Scope:

- copy block
- booking image area
- savings bubble

Checks:

- bubble position, size, and text match the reference
- only photographic content remains an image asset

## Stage 7. Identity

Files:

- `src/widgets/identity-section/ui/*`
- `src/entities/identity/ui/*`
- `src/app/styles/index.scss`

Scope:

- left screen
- main profile card
- right connections screen
- decorative accents

Checks:

- identity screens are live DOM, not static images
- buttons, chips, stats, and cards are real elements

## Stage 8. Journey

Files:

- `src/widgets/journey-section/ui/*`
- `src/entities/journey/ui/*`
- `src/app/styles/index.scss`

Scope:

- copy block
- map area
- pin note
- stats
- travelers board
- country card

Checks:

- map layout and pinned note match the reference
- lower cards and right column are live DOM

## Stage 9. Tablet and mobile pass

Files:

- `src/pages/landing/ui/LandingPage.vue`
- `src/widgets/*`
- `src/entities/*`
- `src/app/styles/index.scss`

Scope:

- widths below desktop canvas mode
- existing responsive breakpoints
- mobile menu and stacked layouts

Checks:

- no section collapses unexpectedly
- mobile layout is intentional, not just surviving

## Stage 10. Cleanup

Tasks:

- remove obsolete image fallbacks
- remove no-longer-needed temporary comparison logic
- keep only the final live implementation paths
- keep the codebase readable and maintainable

## Cleanup status

- Desktop reference remains in the repo as a comparison asset and is not the
  main render path.
- Hero, perks, and identity artwork fallbacks were removed from the live
  component APIs.
- Desktop overlay logic was removed. The main page now renders through the live
  section tree again.

## Review protocol for every stage

1. Compare against the reference.
2. Verify semantics and interaction.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Record what changed and what remains.
