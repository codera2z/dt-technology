# AGENTS.md — DT Technology

Standing implementation and collaboration rules. Keep each kind of project information in its canonical file; do not maintain duplicate status or design notes.

## Document ownership
- `DESIGN.md` is the product, content and interaction specification.
- `HANDOFF.md` is the only progress record and current-state snapshot.
- `LICENCES.md` is the third-party asset and component register.
- `prompt.txt` is only the session start-up checklist and command entry point.

## Implementation guardrails
- Build only the one-page experience and features specified in `DESIGN.md`. Do not add pages, sections or capabilities without approval.
- Never invent clients, products, case studies, testimonials, logos, metrics, credentials, awards, locations, response-time promises, delivery guarantees or other unsupported claims.
- Keep public-facing copy free of technology-stack name-dropping. Do not put secrets or personal data in Git; local environment files stay ignored.

## Stack and assets
- Keep the existing Vite, React, TypeScript, Tailwind CSS v4 and Motion setup. Do not change installed dependencies or add dependencies without prior approval; explain the name, purpose, size, licence, simpler alternative and reason.
- Use original Motion, CSS, inline SVG and small canvas effects where useful. Do not copy Stitch implementation or animation loops.
- No CDNs, external scripts, trackers or remote font requests. Self-host fonts with their licence notices; use inline SVG icons, not icon fonts.
- Verify third-party licences at the asset's own source page and record approved assets in `LICENCES.md`. Do not use unclear licences.

## Code quality and accessibility
- Keep application source files under 150 lines; use one component per file and split complex illustrations and styles.
- Read each complete current file before editing. Do not guess its contents or overwrite uninspected work.
- Use semantic HTML, one h1, logical headings, landmarks, visible focus, keyboard access and AA contrast. Controls must work by keyboard and touch, target at least 44px, and labels must be at least 12px.
- Respect reduced-motion preferences with meaningful alternatives. Pause section animations offscreen; disable cursor tracking on touch and reduced-motion devices. Prefer transform/opacity and reduce mobile effect complexity.
- Check 375, 768, 1024 and 1440px layouts for horizontal overflow.

## Collaboration and verification
- Implement the five reviewable phases in `DESIGN.md` in order, on `main`; do not create commits.
- The owner exclusively handles Git write operations: staging, commits, pushes, merges and branch/history changes. Do not run commands that modify Git state. Leave assistant edits unstaged and uncommitted for owner review.
- Do not delete project files without explaining the impact and getting approval.
- The owner prefers implementation to proceed without build logs or screenshots after every phase. Self-review changes; defer consolidated build, responsive, accessibility and performance checks until the phases are complete. Never claim unrun checks passed or visual behavior is verified.
- Use only scripts present in `package.json`. Check official documentation before using a library API; cite the URL and version when explaining it.
- Use plain explanations and Windows PowerShell for commands. Do not inspect existing screenshots unless asked. Keep ordinary replies under 150 words unless delivering requested work.
