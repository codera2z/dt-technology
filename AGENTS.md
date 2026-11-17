# AGENTS.md: DT Technology website

Standing rules for any AI agent in this repo. Keep this file short. Current progress lives in HANDOFF.md, not here.

## Project
One-page marketing site for DT Technology (websites and web apps, AI/GenAI, RAG and LLM integrations, automation, deployment and maintenance). One scrolling page at `/`. No footer. Header: logo/wordmark + company name + two links (Services, Contact). No other routes, blog, pricing, portfolio, testimonials or sections without the owner's explicit approval.

Scope now: an excellent site running locally. The Contact section is UI only (labels, validation, success and error states). Do not connect any service, add keys or paste third-party form code yet. Hosting, domain and analytics are later phases.

## Content rules
- No invented clients, logos, testimonials, case studies, statistics, credentials, awards or delivery claims.
- Positioning line: "AI-accelerated, engineer-accountable."
- Plain, specific service copy. No buzzword stacking.
- The owner is not technical. Explain in plain language.

## Stack
Fresh project, no legacy code. Propose the simplest stack that can deliver a premium animated one-page site. The owner approves it ("APPROVED: stack"), and it is then recorded in HANDOFF.md.
Preferred unless you can justify something better: Vite + React + TypeScript + Tailwind CSS v4 (official Vite plugin) + Motion for animation, with shadcn/ui primitives only where needed. Reason: most free component sources (React Bits, Magic UI, Aceternity UI, 21st.dev) are React + Tailwind. No router, backend or state library for a single page.
Check official docs for current versions and the required Node version before giving any command. Use only scripts that exist in package.json. Propose one `check` script (type-check + lint + build) for approval.
New dependencies need approval: name, purpose, size, licence, simpler alternative.

## Code rules
- Files under 150 lines. One component per file. Descriptive names.
- Semantic HTML: one h1, correct heading order, landmarks, alt text, visible focus, everything keyboard operable, AA contrast.
- Respect `prefers-reduced-motion`: every animation has a static or reduced-motion alternative.
- Native scrolling is preferred, not mandatory. Scroll-driven interactions, scroll-jacking and immersive/autoplaying 3D scenes are allowed when they materially strengthen the story or layout. Use them deliberately; preserve user control, keyboard navigation, readable content and performance. Provide a meaningful static or reduced-motion alternative. Prefer transform and opacity for routine UI animation, but other effects are allowed when justified by the design.
- Mobile first. Check widths 360, 390, 768, 1024, 1440.
- No external scripts, CDNs or trackers. Fonts via package or self-hosted. Images sized, compressed, lazy-loaded below the fold.
- No secrets in the repo. `.env` files stay git-ignored.
- No lorem ipsum or TODO placeholders in committed code.

## Workflow
- Commit to main in small commits named `area: what changed`. Never force-push, rewrite history or delete files or branches without approval.
- Read a file before editing it. Never guess its contents. Read only what the task needs.
- Do not say something works until the owner confirms it from a local run. You cannot see the rendered page.
- One section per task. Rewrite HANDOFF.md as its own rules say.
- Check official docs before using a library feature. Cite the URL and version.

## Third-party components and assets
Log each one in LICENCES.md (source URL, licence checked on the item's own page, date, where used). Open LICENCES.md only when adding or changing one. If a licence is unclear, do not use the item.
