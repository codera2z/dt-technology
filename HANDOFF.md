# HANDOFF v2 | date: 2026-11-17 | last commit: 91c09c8

Rules for this file: overwrite the whole file each time (never append). Max 350 words. Keep this template. Keep only what a brand-new chat needs.

## Phase and next step
- Phase: 2 (Blueprint)
- Next: Present the Blueprint: concept, tone, scroll storyline, three visual directions with pros/cons and recommendation, component plan, and draft copy. Wait for "APPROVED: Blueprint" before editing DESIGN.md.

## Approved (wording is final)
- Stack: Vite 8.3.8 + React 19.3.1 + TypeScript 6.0.3 + Tailwind CSS 4.3.5 using @tailwindcss/vite 4.3.5 + Motion 14.14.0.
- Retain GSAP 3.15.1, @gsap/react 2.1.2 and Three.js 0.187.0 as optional design tools; add/remove dependencies as the design requires, with approval for new dependencies.
- shadcn/ui primitives may be used selectively when needed.
- Positioning: "AI-accelerated, engineer-accountable."

## Locked decisions
- Audience: customers in India and internationally; all industries remain in scope.
- Services: websites/web apps, AI/GenAI products and integrations (including RAG/LLMs), automation, product engineering, idea-to-deployment support, maintenance, technology consulting, feasibility and budget planning.
- Engagements: one-time projects, end-to-end product partnerships, ongoing engineering, and consulting.
- Team: small core team; do not publish team size, internal structure or individual technical skills.
- Primary CTA: "Discuss Your Project"; header Contact link anchors to the Contact section.
- Brand: reuse an existing logo if one is found; none found in repository root or src. Develop visual identity in Blueprint.
- One-page site at `/`; header has brand + Services + Contact; no footer. Contact form is UI only; no wiring, hosting, domain or analytics yet.
- Environment: Windows 11; Node 26.13.1, npm 11.20.0, Git 2.56.1.windows.1.

## File map (path: purpose)
- AGENTS.md: standing project and code rules.
- HANDOFF.md: current state and next step.
- DESIGN.md: visual rules; draft until Blueprint approval.
- LICENCES.md: third-party asset and component licence log.
- package.json / package-lock.json: root dependency manifests.
- vite.config.ts: Vite and Tailwind integration.
- index.html: document shell.
- src/App.tsx: page component.
- src/main.tsx: React entry point.
- src/styles.css: global styles and Tailwind import.

## Done
- Tailwind CSS/Vite integration configured; owner confirmed install, production build and dev server run locally.
- Removed duplicate src/package.json and stale tsconfig.tsbuildinfo; ignore future *.tsbuildinfo.
- Phase 1 intake completed.

## In progress / open bugs
- Blueprint not yet approved; DESIGN.md remains a draft.

## Rejected ideas (never raise again)
- none

## Owner preferences learned
- Explain technical steps plainly; owner makes final decisions.
- Windows 11; use PowerShell for local commands.
- Do not put team size, internal structure or technical skills on the website.

## Commands that work
- npm install
- npm run build
- npm run dev