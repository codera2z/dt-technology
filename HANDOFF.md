# HANDOFF v6 | date: 2026-11-18 | last code commit: 29f37cd

Rules: overwrite completely, never append; preserve this template and stay under 350 words.

## Phase and next step
- Phase: Build — commit 1 of 5 is provisionally accepted.
- Next: Continue commit 2 (original hero animation). Do not request build logs or screenshots between design commits; consolidate local build, responsive and accessibility checks at the end.

## Approved
- Existing stack: Vite 8.3.8, React 19.3.1, TypeScript 6.0.3, Tailwind CSS 4.3.5, Motion 14.14.0. No dependencies added.
- Warm cream / espresso / terracotta; EB Garamond display + Inter body; square-bracket identity.
- Positioning: “AI-accelerated, engineer-accountable.”

## Locked decisions
- One page: Hero, Services, Contact; no footer. Header has only Services and Contact links.
- Five services and all motion/form requirements are in DESIGN.md.
- No fabricated claims or CDN assets. Contact uses Web3Forms via src/lib/submitContact.ts and VITE_WEB3FORMS_KEY; no key in Git.
- hello@dttechnology.com came from Stitch and remains unverified; confirm before launch.
- Windows 11; Node 26.13.1; npm 11.20.0; Git 2.56.1.windows.1.

## Done
- Commit 1: responsive header/hero shell, static SVG scene, five-service marquee, service copy shell, contact intro shell, palette, licensed self-hosted fonts and header scroll offsets.
- Owner says current preview looks fine; this is provisional visual acceptance, not technical build verification.
- Full 838-line Stitch HTML reviewed; no separate screenshot files were attached.
- Project guidance refreshed in docs commit d8c9ea3; final-validation workflow is deferred until design completion.

## In progress / not verified
- Hero animation, service illustrations/reveals, contact form/submission and global polish remain.
- No local build or breakpoint QA has been reported.

## Rejected
- Stitch CSS loops, Material Symbols, Google Fonts/Tailwind CDNs, footer, fake form success and unsupported claims.

## Owner preferences
- Plain explanations; Windows PowerShell. Use responsive judgment rather than requiring intermediate logs/screenshots. Owner can give preview feedback whenever useful.

## Commands for final review
- npm run build
- npm run typecheck
- npm run dev