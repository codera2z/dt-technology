# HANDOFF v26 | date: 2026-11-25 | last code commit: 7ca7344

Rules: overwrite completely; preserve this template and stay under 350 words.

## Phase and next step
- Phase: Build — motion refinements implemented; build and typecheck pass.
- Next: Complete browser review at 375, 768, 1024 and 1440px, including reduced-motion behavior.

## Approved
- Vite, React, TypeScript, Tailwind CSS v4 and Motion; no new dependencies.
- Cream / espresso / terracotta, EB Garamond + Inter; “AI-accelerated, engineer-accountable.”

## Locked decisions
- One page: Hero, Services, Contact; no footer. Header has only Services and Contact.
- Keep [01]/[02]/[03] eyebrow numbering and do not invent claims or commit secrets/personal data.
- Respect the visitor's system reduced-motion preference automatically; do not add on-page animation pause controls.
- Contact form is client-side only; it does not send messages.
- Keep hello@dttechnology.com as provisional public email; mailbox is unconfigured. No Web3Forms or personal inbox; defer delivery until a company inbox exists and the owner asks.

## Done
- Commits 1–5 complete: header/hero, canvas, service illustrations, contact form and global polish.
- Removed on-page pause controls from the marquee and service illustrations; system reduced-motion preferences remain respected, and service loops pause offscreen.
- Hero scene uses a scale-only Motion entrance so mobile CSS opacity remains effective.
- Typed a Motion easing tuple; build and typecheck pass.
- `npm run build`, `npm run typecheck` and `git diff --check` pass.

## In progress / not verified
- Browser responsive/accessibility QA at 375, 768, 1024 and 1440px remains pending.
- Company inbox is not set up; refinement changes are local and uncommitted.

## Owner preferences
- Plain explanations; Windows PowerShell. No intermediate build logs/screenshots.

## Commands for final review
- npm run dev
- Verify prefers-reduced-motion disables marquee and service illustration animations.
- Check for horizontal overflow and layout at 375, 768, 1024 and 1440px.
