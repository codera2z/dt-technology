# HANDOFF v32 | date: 2026-11-26 | last code commit: 5daac23

Rules: overwrite completely; preserve this template and stay under 350 words.

## Phase and next step
- Phase: Final QA - code review and local checks complete; responsive and runtime reduced-motion checks remain.
- Next: Recheck 375, 768, 1024 and 1440px after the Services layout change. Runtime-check `prefers-reduced-motion: reduce` when browser emulation is available. Do not edit global MCP config without owner approval.

## Approved
- Vite, React, TypeScript, Tailwind CSS v4 and Motion; no additional dependencies approved.
- Cream / espresso / terracotta, EB Garamond + Inter; "AI-accelerated, engineer-accountable."

## Locked decisions
- One page: Hero, Services, Contact; no footer. Header has only Services and Contact.
- Keep [01]/[02]/[03] eyebrow numbering; do not invent claims or commit secrets/personal data.
- Respect system reduced-motion preference. Contact form is client-side only.
- Keep hello@dttechnology.com as provisional public email; mailbox is unconfigured.

## Done
- Latest code commit `5daac23` adds five original service scenes, an editorial two-column intro and larger artwork with mobile placement below copy.
- Reduced-motion CSS now also neutralises the revealed arrow and hover illustration transforms that were winning through selector specificity.
- `npm run typecheck` passed on 2026-11-26. `npm run build` passed on 2026-11-26 (467 modules). `git diff --check` passed.
- Source `.ts`, `.tsx` and `.css` files are all under 150 lines.
- Firefox MCP remains connected with its dedicated profile; responsive harness is `artifacts/visual-captures/responsive-harness.html`.

## In progress / not verified
- Responsive measurements at 375, 768, 1024 and 1440px passed before `5daac23`; repeat after its Services layout change.
- Runtime reduced-motion preference was not toggled: current Firefox tools expose no viewport or media-preference emulation. Edge/headless attempts failed; no Playwright, dependency or global MCP config changes.

## Owner preferences
- Plain explanations; Windows PowerShell. Do not inspect existing screenshots unless explicitly asked.

## Commands for final review
- `npm run typecheck`
- `npm run build`
- Recheck responsive widths and runtime reduced motion when browser controls permit.
