# HANDOFF v8 | date: 2026-11-18 | last code commit: f3d4d5c

Rules: overwrite completely, never append; preserve this template and stay under 350 words.

## Phase and next step
- Phase: Build — commits 1 and 2 of 5 are complete; hero feedback pass committed.
- Next: Commit 3 — five original service illustrations with scroll-into-view drawing, idle and hover/tap states. Defer local build and consolidated breakpoint/accessibility review until design work is complete.

## Approved
- Existing stack: Vite 8.3.8, React 19.3.1, TypeScript 6.0.3, Tailwind CSS 4.3.5, Motion 14.14.0. No dependencies added.
- Warm cream / espresso / terracotta; EB Garamond display + Inter body; square-bracket identity.
- Positioning: “AI-accelerated, engineer-accountable.”

## Locked decisions
- One page: Hero, Services, Contact; no footer. Header has only Services and Contact links.
- Five services and full visual/motion/form requirements are in DESIGN.md.
- No fabricated claims or CDN assets. Contact uses Web3Forms via src/lib/submitContact.ts and VITE_WEB3FORMS_KEY; no key in Git.
- hello@dttechnology.com came from Stitch and remains unverified; confirm before launch.
- Windows 11; Node 26.13.1; npm 11.20.0; Git 2.56.1.windows.1.

## Done
- Commit 1: responsive header/hero shell, service marquee and copy shell, contact intro shell, palette, licensed self-hosted fonts and scroll offsets. Owner provisionally accepted preview.
- Commit 2: original canvas scene; Motion headline reveal, cycling accent, opening wordmark and magnetic CTA.
- Hero feedback pass f3d4d5c: enlarged accent mask and reserved width; richer sphere with front/back mesh, flowing contours, three instrumented orbit rings, satellites, connected particles, highlight and light sweep.
- Owner's screenshot feedback: cycling word was clipped; sphere looked too simple. Screenshot file is in repo; the repository connector could not render its PNG bytes.

## In progress / not verified
- Service illustrations/reveals, contact form/submission and global polish remain.
- No local build or breakpoint QA has been reported.

## Rejected
- Stitch CSS loops, Material Symbols, Google Fonts/Tailwind CDNs, footer, fake form success and unsupported claims.

## Owner preferences
- Plain explanations; Windows PowerShell. Use responsive judgment, no intermediate build logs/screenshots. Owner can give preview feedback any time.

## Commands for final review
- npm run build
- npm run typecheck
- npm run dev
