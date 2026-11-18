# HANDOFF v5 | date: 2026-11-18 | last code commit: 29f37cd

Rules: overwrite this file completely, never append; keep this template and stay under 350 words.

## Phase and next step
- Phase: Build — commit 1 of 5 is in Git; local review is pending.
- Next: Owner runs the build and checks 375px and 1440px screenshots. Fix commit 1 issues first; then begin commit 2 (hero animation).

## Approved
- Existing stack: Vite 8.3.8, React 19.3.1, TypeScript 6.0.3, Tailwind CSS 4.3.5, Motion 14.14.0. No dependencies added.
- Visual direction: warm cream / espresso / terracotta; EB Garamond display + Inter body; square-bracket identity.
- Positioning: “AI-accelerated, engineer-accountable.”

## Locked decisions
- One page: Hero, Services, Contact; no footer. Header has wordmark and only Services / Contact links.
- Five real services and the animation / form requirements are specified in DESIGN.md.
- No fabricated business claims or external/CDN assets. Contact form uses Web3Forms through src/lib/submitContact.ts and VITE_WEB3FORMS_KEY; no key in Git.
- Contact email currently shown in code as hello@dttechnology.com came from the Stitch reference and is unverified; confirm before launch.
- Windows 11; Node 26.13.1; npm 11.20.0; Git 2.56.1.windows.1.

## Done
- Commit 1: responsive header and hero shell, static SVG scene, exact five-service marquee, service copy shell, contact intro shell, palette, self-hosted licensed fonts and section scroll offsets.
- Updated DESIGN.md and LICENCES.md for the new brief. Full 838-line Stitch HTML reviewed.

## In progress / not verified
- Owner has not yet reported local build output or screenshots. No service illustrations, generative hero animation, contact form or real submission flow implemented yet.
- Only the Stitch HTML was attached; no separate screenshot files were present.

## Rejected
- Reusing Stitch CSS animation loops, Material Symbols, Google Fonts/Tailwind CDNs, footer, fake form success, unsupported claims.

## Owner preferences
- Plain explanations; use Windows PowerShell. Owner makes final decisions. After each commit, give exact checks and wait for local screenshots/results.

## Commands
- npm run build
- npm run typecheck
- npm run dev
