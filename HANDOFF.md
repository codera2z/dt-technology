# HANDOFF v12 | date: 2026-11-18 | last code commit: 011d205

Rules: overwrite completely, never append; preserve this template and stay under 350 words.

## Phase and next step
- Phase: Build — commits 1 and 2 plus hero feedback corrections are committed.
- Next: Owner to review headline alignment and initial reveal; after approval, commit 3 (five service illustrations and in-view interactions). Final local build and responsive/accessibility checks remain deferred.

## Approved
- Existing stack: Vite 8.3.8, React 19.3.1, TypeScript 6.0.3, Tailwind CSS 4.3.5, Motion 14.14.0. No new dependencies.
- Warm cream / espresso / terracotta; EB Garamond display + Inter body; square-bracket identity.
- Positioning: “AI-accelerated, engineer-accountable.”

## Locked decisions
- One page: Hero, Services, Contact; no footer. Header has only Services and Contact.
- Five services and visual/motion/form requirements are in DESIGN.md.
- No fabricated claims or CDN assets. Contact uses Web3Forms via src/lib/submitContact.ts and VITE_WEB3FORMS_KEY; no key in Git.
- hello@dttechnology.com came from Stitch and is unverified; confirm before launch.

## Done
- Commit 1: header/hero shell, service marquee/copy shell, contact intro, palette, self-hosted licensed fonts and scroll offsets. Preview provisionally accepted.
- Commit 2: original canvas scene; Motion headline reveal, cycling accent, opening wordmark and magnetic CTA.
- Hero scene refinement f3d4d5c: richer globe mesh/depth, orbit rings, satellites, particles, highlight and light sweep.
- Accent spacing correction b48ecd9: measure each word in EB Garamond and animate slot width; period moves with it.
- Headline correction: the visible italic lettering is optically lowered by 0.04em, while the measured slot and period remain fixed. The clipping window expands vertically so the accent animation stays clean without moving the surrounding line.

## In progress / not verified
- Latest optical headline alignment is now fine-tuned to a 0.04em offset after the prior 0.15em adjustment sat too low; owner preview still pending. Initial accent entrance is included with the headline reveal.
- Service illustrations, contact form/submission and global polish remain.
- No local build or breakpoint QA has been reported.

## Owner preferences
- Plain explanations; Windows PowerShell. No intermediate build logs/screenshots. Owner can share preview feedback any time.

## Commands for final review
- npm run build
- npm run typecheck
- npm run dev
