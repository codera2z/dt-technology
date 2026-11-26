# DT Technology — Design specification

**Status:** Current owner brief, 26 Nov 2026. Stitch HTML is a visual reference only.

## Experience and identity
One responsive scrolling page at `/`, with Hero, Services and Contact only. No footer or additional sections. The header contains the DT wordmark/company name and exactly two links: Services and Contact. Use the square-bracket motif selectively.

Art direction: refined, cinematic, warm and expensive. Keep the experience calm and cohesive; avoid gimmicks, neon, generic AI gradients and template-like layouts.

| Token | Value |
|---|---|
| Cream canvas | `#FAF5EC` |
| Cream surface | `#F3E9D8` |
| Espresso | `#2A1F1A` |
| Terracotta | `#C4622D` |

Use EB Garamond for display and Inter for body/interface text. Both are self-hosted; their licence notices are retained beside the font files.

Positioning: **AI-accelerated, engineer-accountable.** Speak plainly to startups and growing businesses; larger organisations are welcome.

## Hero
- Eyebrow: **[01] PRODUCTS / WEBSITES / AI / AUTOMATION**.
- Headline: **Build what matters. Then [scale / ship / grow / launch].** Cycle the italic accent through those words with a masked slide; reveal headline words from blur to sharp.
- Primary CTA: **Discuss Your Project**. Secondary CTA: **Explore services**.
- Mobile: fit within one phone screen. Use a dimmed, full-bleed animated backdrop behind centred text, never stacked below it. Desktop: text left, animation right.
- Original luminous generative centerpiece with at least three parallax/depth layers of mesh, lines and particles; slow morph/breath and restrained light sweep/shimmer. Respond smoothly to desktop cursor; drift or respond to scroll on touch.
- Opening: brackets slide in to frame “DT”, then reveal the page with a restrained stagger.
- Primary CTA: magnetic treatment, inner glow and sliding arrow. Secondary CTA: animated underline.

## Marquee
Repeat only these five services, separated by small dots:
1. Product Strategy & Budget Planning
2. Websites & Web Applications
3. AI & GenAI Solutions
4. Automation & Integration
5. Product Engineering & Lifecycle

Scroll velocity may subtly affect speed/direction. Disable movement when reduced motion is requested; do not add an on-page pause control.

## Services
Label: **[02] Services**. Use an editorial two-column desktop introduction. Explain plainly how DT helps startups and growing businesses decide what to build, create useful software and improve workflows; larger organisations are welcome.

Five service rows, each with a distinct, detailed original illustration:
1. **Strategy & Budget:** a prioritised roadmap with milestones; allocation bars that grow/rebalance and a small counter.
2. **Websites & Web Applications:** a responsive browser wireframe that assembles and morphs across desktop, tablet and phone; cursor movement and click.
3. **AI & GenAI:** a contextual node network that gently attracts/connects near the cursor; a short chat response types token by token, followed by a completion sparkle.
4. **Automation & Integration:** app tiles connected by curves; pulses travel to a hub and engage a gear on arrival.
5. **Product Engineering & Lifecycle:** a build → ship → improve cycle with orbiting nodes, a progress arc and lifting/settling layers.

Give artwork enough room to read. On mobile, use compact illustrations below the service copy. Rows reveal on scroll: draw the hairline, stagger the copy upward, change the index to terracotta on hover, slide in the arrow and use a desktop cursor spotlight. Support tap; use static alternatives when motion is reduced. Do not add an on-page pause control.

## Contact and submission
Label: **[03] Contact**. Email label: **Email us**. Use an approachable invitation, heading word reveal, restrained shimmer, subtle grid/dot texture and travelling form-border light.

Exact fields: **Name**, **Email**, **Company (optional)**, **What do you need?**, **Tell us about your project**. Use neutral placeholders, floating labels and an expanding terracotta focus underline. The submit button may use a restrained magnetic/shimmer treatment. Provide loading/spinner, success confirmation with palette-matched particles, and a gentle error state.

The form is client-side only; do not enable message delivery until the owner has created a company inbox and explicitly requested integration. Never use a personal inbox for Web3Forms or publish a personal email address. `hello@dttechnology.com` is provisional, came from Stitch and is unverified; keep it only as the provisional public email option until the owner confirms or replaces it. Do not present the mailbox as configured.

## Global interaction and motion
- Smooth in-page navigation, active-section indication, thin terracotta scroll progress, and header opacity/shadow changes on scroll. Give section headings suitable scroll margin.
- Keep easing consistent (for example, `cubic-bezier(0.16, 1, 0.3, 1)`). Throttle desktop pointer effects; use drift or scroll response on touch instead.
- Keep essential copy and actions understandable without animation.

Accessibility thresholds, responsive test widths and implementation guardrails are defined once in `AGENTS.md`.

## Delivery sequence
Implement these as separate, reviewable change sets in order. Current progress belongs in `HANDOFF.md`.
1. Fixes, content, header and hero layout — provisionally accepted in the owner's preview.
2. Original hero animation.
3. Five service illustrations and in-view interactions.
4. Contact form and client-side validation. Delivery integration remains deferred under the Contact rules above.
5. Global polish, responsive, accessibility and performance review.
