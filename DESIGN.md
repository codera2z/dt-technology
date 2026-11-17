# DESIGN.md: DT Technology

**Status: DRAFT.** Direction, palette and fonts are NOT chosen. Do not lock any of them until the owner writes "APPROVED: Blueprint". After approval, fill every TBD, change this status, and put a 3-line summary in HANDOFF.md.

## Purpose
Explain DT Technology's services and give visitors a clear route to Contact. One scrolling page. Header: brand + Services + Contact. No footer.

## Direction (TBD after Blueprint)
Concept: TBD | Tone (3 words): TBD | Reference sites (3 to 5 URLs): TBD | Avoid: TBD

## Tokens (TBD)
Define as CSS variables, then use only tokens.
- Colours: background, surface, text, muted text, accent, accent-contrast, border, focus ring
- Type: display font, text font; fluid scale with clamp(), roughly 14 / 16 / 18 / 24 / 32 / 48 / 72
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 | Radius: one family | Shadows: max 2 levels
- Content max width: TBD | Text lines: 65 to 75 characters

## Typography
One large h1, body 16 to 18px, line-height 1.5 to 1.7. Distinctive but legible free fonts, licences logged in LICENCES.md. No default-looking Inter/Roboto/Arial-only page unless chosen deliberately.

## Layout
12-column grid on desktop, one column on mobile, generous vertical rhythm. Each section: one purpose, one headline, one supporting idea. Vary compositions (split, sticky visual, list, tabs) on one consistent grid. Not every section is a row of three cards.

## Scroll storyline (TBD)
| Section | Purpose | Background / visual state | Component | Behaviour |
|---|---|---|---|---|
| Hero | TBD | TBD | TBD | TBD |
| Services | TBD | TBD | TBD | TBD |
| Contact | TBD | TBD | TBD | TBD |

Changes between sections connect to the content. Background or scenery shifts are gradual and use opacity or transform. No unrelated full-screen effects. Sticky visuals need a static mobile fallback.

## Components
Define default, hover, focus and disabled states for: buttons (primary, secondary), links, cards or list items, tabs or accordion (if used), form fields (visible labels, inline validation, success and error messages), header.

## Motion
Motion guides attention, shows a state change or tells the story. UI transitions 150 to 400ms, scenic up to 800ms, one consistent easing, at most one signature interaction. Reduced motion: no parallax, no autoplay, crossfades only.

## Imagery
Prefer open or custom illustration, diagrams, abstract or 3D visuals. No generic stock photos. Never show a fake product screenshot as real work; label demos as concepts. Every asset is logged in LICENCES.md.

## Anti-generic audit (run on every section)
- Is the headline specific to DT Technology, not "Transform your business"?
- Any purple or blue gradient blob, random glassmorphism, emoji icons, identical card grids, everything centred? Remove unless deliberate.
- Does it look different from the previous section while using the same tokens?
- Does the page still look designed with motion off?
- Is there one memorable element?

## Budgets
Lighthouse mobile: performance 90+, accessibility, best practices and SEO 95+ (state exceptions). LCP under 2.5s, CLS under 0.1, small JavaScript, initial weight under about 1.5 MB. Keyboard-test every interactive element, visible focus, skip link.
