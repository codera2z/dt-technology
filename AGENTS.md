# AGENTS.md — DT Technology

Standing project and collaboration rules. Progress belongs only in HANDOFF.md; visual/content decisions belong in DESIGN.md.

## Product constraints
- One responsive page at `/`: Hero, Services, Contact. No footer, extra pages or sections without owner approval.
- Header: DT wordmark/company name and exactly two links: Services and Contact.
- Positioning: **AI-accelerated, engineer-accountable.**
- Audience: startups and growing businesses; larger organisations are welcome. Write plainly; avoid enterprise jargon.
- Never invent or imply clients, products, case studies, testimonials, logos, metrics, credentials, awards, locations, response-time promises, delivery guarantees or other unsupported facts.
- No public-facing technology-stack name-dropping.

## Stack and assets
- Keep the existing Vite + React + TypeScript + Tailwind CSS v4 setup and installed dependencies. Motion is the animation library.
- Do not add dependencies, especially heavy ones, unless the owner first approves the name, purpose, size, licence, simpler alternative and reason.
- Build original motion with Motion, CSS, inline SVG and small canvas only where useful. Do not copy the Stitch file's CSS animation loops or import its implementation.
- No CDNs, external scripts, trackers or remote font requests. Self-host fonts and preserve their licence notices. Use inline SVG for interface icons; no Material icon font.
- No secrets or personal data in Git. Local environment files remain ignored; commit only a safe `.env.example`.

## Code quality
- Keep source files under 150 lines; one component per file, split complex illustrations and styles into focused files.
- Read the complete current file before editing it. Never guess file contents or overwrite uninspected work.
- Semantic HTML, one h1, logical headings, landmarks, visible focus, keyboard access, AA contrast and meaningful reduced-motion fallbacks are required.
- All controls work by keyboard and touch; targets at least 44px, form labels at least 12px.
- Pause section animations when offscreen. Disable cursor tracking on touch and reduced-motion devices. Prefer transform/opacity; reduce mobile effect complexity.
- Avoid horizontal overflow at 375, 768, 1024 and 1440px.

## Workflow
- Follow the five-commit sequence in DESIGN.md. One scoped commit per step, to `main`, with message `area: what changed`.
- After each commit, provide exact commands and visible checks. Stop for the owner's local results and screenshots before starting the next step.
- Use only scripts that exist in package.json. Current useful scripts: `npm run build`, `npm run typecheck`, `npm run dev`.
- Never claim code builds or the page looks/works correctly until the owner reports the local result.
- Never force-push, rewrite history or delete files/branches without explaining the risk and getting approval.
- Check official documentation before using a library API; cite the URL and version when explaining it.
- Log every third-party component/asset in LICENCES.md, checking the licence on its own source page. Do not use unclear licences.
