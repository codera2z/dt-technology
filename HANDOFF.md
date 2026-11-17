# HANDOFF v4 | date: 2026-11-17 | last commit: 6a5f346

Rules for this file: overwrite the whole file each time (never append). Max 350 words. Keep this template. Keep only what a brand-new chat needs.

## Phase and next step
- Phase: 3 (Component sourcing)
- Next: Owner brings component code / references. Inspect dependencies, licence, fit, accessibility and performance before adapting. Then Phase 4: build one section per chat.

## Approved (wording is final)
- Stack: Vite 8.3.8 + React 19.3.1 + TypeScript 6.0.3 + Tailwind CSS 4.3.5 using @tailwindcss/vite 4.3.5 + Motion 14.14.0.
- Retain GSAP 3.15.1, @gsap/react 2.1.2 and Three.js 0.187.0 as optional design tools; add/remove dependencies as design requires, with approval for new dependencies.
- shadcn/ui primitives may be used selectively when needed.
- Positioning: "AI-accelerated, engineer-accountable."
- Blueprint: The Systems Studio; confident, precise, approachable; warm paper / graphite / signal lime; Space Grotesk headings + DM Sans body; product-system visual evolving through the scroll; one-page Hero, Services, Contact.

## Locked decisions
- Audience: India and international; all industries; small core team without publishing team size or technical skills.
- Services: product strategy/budget planning, websites/web apps, AI/GenAI/RAG/LLM, automation/integrations, product engineering, deployment and maintenance.
- Engagements: one-time projects, end-to-end partnerships, ongoing engineering, consulting.
- Primary CTA: "Discuss Your Project"; header links: Services and Contact.
- No existing logo found; develop wordmark and geometric DT monogram in implementation.
- Scroll-jacking, pinned sequences, parallax and autoplaying 3D are allowed when purposeful; preserve navigation, content access, performance and reduced-motion alternatives.
- One page at `/`; no footer. Contact form is UI only; no provider, hosting, domain or analytics.
- Environment: Windows 11; Node 26.13.1, npm 11.20.0, Git 2.56.1.windows.1.

## File map
- AGENTS.md: standing rules; HANDOFF.md: current state; DESIGN.md: approved design system; LICENCES.md: third-party licence log.
- package.json / package-lock.json: dependencies; vite.config.ts: Vite and Tailwind.
- index.html: document shell; src/App.tsx: page; src/main.tsx: entry; src/styles.css: global styles.

## Done
- Tailwind/Vite configured; owner confirmed install, build and dev server locally.
- Removed duplicate src/package.json and stale tsconfig.tsbuildinfo; ignore future *.tsbuildinfo.
- Phase 1 intake completed; Phase 2 Blueprint approved and recorded.
- Font licences checked on their own files; self-hosting notices required.

## In progress / open bugs
- No components sourced and no UI implemented yet.

## Rejected ideas
- none

## Owner preferences learned
- Explain technical steps plainly; owner makes final decisions. Use Windows 11 / PowerShell.
- Do not publish team size, internal structure or individual technical skills.
- Immersive scroll and autoplaying 3D are permitted when they add real value.

## Commands that work
- npm install
- npm run build
- npm run dev
