# AGENTS.md — DT Technology

Standing project and collaboration rules. Progress belongs only in HANDOFF.md; design decisions belong in DESIGN.md.

## Product constraints
- One responsive page at /: Hero, Services, Contact. No footer, extra pages or sections without approval.
- Header: DT wordmark/company name and exactly two links: Services and Contact.
- Positioning: **AI-accelerated, engineer-accountable.**
- Audience: startups and growing businesses; larger organisations are welcome. Use plain language; avoid enterprise jargon.
- Never invent clients, products, case studies, testimonials, logos, metrics, credentials, awards, locations, response-time promises, delivery guarantees or unsupported facts.
- No public-facing technology-stack name-dropping.

## Stack and assets
- Keep the existing Vite + React + TypeScript + Tailwind CSS v4 setup and installed dependencies. Motion is the animation library.
- No new dependencies without prior approval (name, purpose, size, licence, simpler alternative and reason).
- Create original motion with Motion, CSS, inline SVG and small canvas only where useful. Do not copy Stitch CSS animation loops or import its implementation.
- No CDNs, external scripts, trackers or remote font requests. Self-host fonts with licence notices. Use inline SVG icons, not Material Symbols.
- No secrets or personal data in Git. Local environment files stay ignored; only a safe .env.example may be committed.

## Code quality
- Keep source files under 150 lines; one component per file; split complex illustrations and styles.
- Read the complete current file before editing. Never guess file contents or overwrite uninspected work.
- Use semantic HTML, one h1, logical headings, landmarks, visible focus, keyboard access, AA contrast and meaningful reduced-motion fallbacks.
- Controls must work by keyboard and touch; targets at least 44px; labels at least 12px.
- Pause section animations offscreen. Disable cursor tracking on touch and reduced-motion devices. Prefer transform/opacity and reduce mobile effect complexity.
- Design for 375, 768, 1024 and 1440px; avoid horizontal overflow.

## Workflow
- Work through the five implementation phases in DESIGN.md as separate, reviewable change sets on main; do not create commits.
- The owner handles all Git write operations, including staging, commits, pushes, merges and branch/history changes. Do not run Git commands that modify repository state. Leave assistant edits unstaged and uncommitted for owner review. Report changed files and, when useful, suggest a commit message without executing it.
- The owner prefers design implementation to proceed without build logs/screenshots after every implementation phase. Use sound responsive judgment and self-review the code. The owner can share preview feedback at any time.
- Defer consolidated build, responsive and accessibility validation until all implementation phases are complete. Then give exact commands and a clear final check list. Never claim unrun checks passed or visual behavior is verified.
- Use only scripts present in package.json. Current scripts: npm run build, npm run typecheck, npm run dev.
- Do not delete project files without explaining the impact and getting approval.
- Check official documentation before using a library API; cite URL and version when explaining it.
- Log third-party components/assets in LICENCES.md after checking their own-page licence. Do not use unclear licences.
