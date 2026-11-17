# HANDOFF v1 | date: 2026-11-17 | last commit: c13099c

Rules for this file: overwrite the whole file each time (never append). Max 350 words. Keep this template. Keep only what a brand-new chat needs.

## Phase and next step
- Phase: 1 (Intake)
- Next: Gather target-client, positioning and content preferences before Blueprint.

## Approved (wording is final)
- Stack: Vite 8.3.8 + React 19.3.1 + TypeScript 6.0.3 + Tailwind CSS 4.3.5 using @tailwindcss/vite 4.3.5 + Motion 14.14.0.
- Retain GSAP 3.15.1, @gsap/react 2.1.2 and Three.js 0.187.0 as optional design tools; add/remove dependencies as the design requires, with approval for new dependencies.
- shadcn/ui primitives may be used selectively when needed.

## Locked decisions
- Stack and versions: as approved above.
- Direction, colours, fonts, scroll storyline: TBD (see DESIGN.md once approved).
- Environment: Windows 11; Node 26.13.1, npm 11.20.0, Git 2.56.1.windows.1.

## File map (path: purpose)
- AGENTS.md: standing project and code rules.
- HANDOFF.md: current state and next step.
- DESIGN.md: visual rules; currently draft.
- LICENCES.md: third-party assets and component licence log.
- package.json / package-lock.json: root dependency manifests.
- vite.config.ts: Vite and Tailwind integration.
- index.html: document shell.
- src/App.tsx: page component.
- src/main.tsx: React entry point.
- src/styles.css: global styles and Tailwind import.

## Done
- Tailwind CSS and official Vite plugin installed and configured.
- Removed duplicate src/package.json and stale tsconfig.tsbuildinfo; ignored future *.tsbuildinfo files.
- Owner confirmed npm install, npm run build and npm run dev work locally.

## In progress / open bugs
- Phase 1 intake not yet completed.

## Rejected ideas (never raise again)
- none

## Owner preferences learned
- Explain technical steps plainly; owner makes final decisions.
- Windows 11, using PowerShell for local commands.

## Commands that work
- npm install
- npm run build
- npm run dev
