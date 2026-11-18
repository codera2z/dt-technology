# DT Technology — Design and interaction specification

**Status:** Current owner brief, 18 Nov 2026. The attached Stitch HTML is a visual reference only; do not copy its implementation or simple CSS animation loops.

## Site and identity
One responsive scrolling page at `/`, with only Hero, Services and Contact. No footer. Header contains the DT wordmark/company name and exactly two links: Services and Contact. Use the square-bracket motif selectively in the wordmark and section labels.

## Art direction
Refined, cinematic, warm and expensive. Calm, cohesive motion; no gimmicks, neon, generic AI gradients or agency-template layouts.

| Token | Value |
|---|---|
| Cream canvas | `#FAF5EC` |
| Cream surface | `#F3E9D8` |
| Espresso | `#2A1F1A` |
| Terracotta | `#C4622D` |

Typography: self-host EB Garamond for display and Inter for body/interface. Both variable WOFF2 fonts and their OFL notices are in `src/assets/fonts/`. No remote font requests, CDN or external scripts. Use inline SVG icons, not Material Symbols.

## Honest content
Positioning: **AI-accelerated, engineer-accountable.** Speak to startups and growing businesses in plain language; established/enterprise organisations may also be welcomed. No invented clients, products, case studies, testimonials, logos, statistics, credentials, awards, locations, response-time promises, delivery guarantees or technical-stack claims. Keep every public claim supportable.

## Hero
Headline structure: **Build what matters. Then [scale / ship / grow / launch].** Cycle the italic accent word through those four words with a masked slide. Reveal the headline word-by-word from blur to sharp. Primary CTA: **Discuss Your Project**; secondary link: **Explore services**.

- Mobile: fit the hero into one phone screen. The animation is a dimmed full-bleed backdrop behind centred text, never a block stacked below it.
- Desktop: text left, animation right.
- Create an original luminous generative centerpiece: layered mesh/lines/particles with at least three depth/parallax layers, slow morph/breath, restrained light sweep and shimmer. Respond smoothly to desktop cursor; on touch, drift or respond to scroll.
- Opening: square brackets slide in to frame “DT”, followed by a restrained staggered page reveal.
- CTA: restrained magnetic primary button with inner glow and sliding arrow; secondary animated underline.

## Marquee
Repeat only these five services, separated by small dots:
1. Product Strategy & Budget Planning
2. Websites & Web Applications
3. AI & GenAI Solutions
4. Automation & Integration
5. Product Engineering & Lifecycle

Scroll velocity may subtly alter marquee speed/direction. Do not insert additional words or promotional phrases.

## Services
Section label: **[ 01 ] Services**. Intro copy must be plain and confident: explain how DT helps startups and growing businesses decide what to build, create useful software and improve workflows; make clear larger organisations are welcome without using enterprise jargon.

Five editorial rows, each with a distinct original illustration:
1. **Product Strategy & Budget Planning:** roadmap path draws across milestone nodes; budget bars grow/rebalance; small counter.
2. **Websites & Web Applications:** browser wireframe assembles; morph between desktop/tablet/phone; cursor moves and clicks a button.
3. **AI & GenAI Solutions:** node network responds to nearby cursor with gentle attraction/connections; short chat response types token by token; completion sparkle.
4. **Automation & Integration:** app tiles connect by curves; pulses travel to a central hub; gear engages on arrival.
5. **Product Engineering & Lifecycle:** build → ship → improve cycle; orbiting nodes, progress arc and lifting/settling layers.

Rows reveal only when scrolled into view—never pre-apply the visible state. Hairline draws, copy staggers upward, index turns terracotta on hover, arrow slides in, and a soft cursor spotlight follows desktop pointer. On mobile use compact illustrations. Support hover and tap; pause idle motion offscreen. Use a clear static/reduced-motion state.

## Contact and submission
Section label: **[ 02 ] Contact**. Change “Direct Line” to **Email us**. Use an approachable invitation, heading word reveal and restrained accent shimmer. Add subtle grid/dot texture and a slowly travelling border light around the form.

Labels must be exactly: **Name**, **Email**, **Company (optional)**, **What do you need?**, **Tell us about your project**. Use neutral placeholders. Focus styling uses floating labels and an expanding terracotta underline. Submit button: restrained magnetic hover and shimmer. States: loading/spinner, success with palette-matched particle feedback and confirmation, error with a gentle shake.

Keep all form submission orchestration/transport in `src/lib/submitContact.ts`, behind `submitContact(data)`. Use Web3Forms with `import.meta.env.VITE_WEB3FORMS_KEY`, a hidden honeypot and client-side validation. Keep the provider boundary isolated so a future AWS endpoint swap requires changes only in this module and its environment configuration. Never put a real key in Git. Do not fake success.

**Email caveat:** `hello@dttechnology.com` currently appears in the prototype because it was in the Stitch reference; it is unverified. Confirm the address before public launch.

## Global motion, accessibility and performance
Use installed Motion, CSS, inline SVG and small canvas only where useful; add no dependency without approval. Write original animation choreography, not the Stitch CSS loops. Use a coherent ease such as `cubic-bezier(0.16, 1, 0.3, 1)`.

Add smooth in-page navigation, active-section indication, thin terracotta scroll progress and a header that gains opacity/shadow after scrolling. Add `scroll-margin-top` so section headings clear the fixed header. Animate transform/opacity where practical; throttle desktop pointer effects, disable them on touch, pause loops offscreen and reduce effect complexity on mobile.

One h1, semantic landmarks, correct heading order, visible focus, keyboard access, AA contrast, targets at least 44px and labels at least 12px. Respect `prefers-reduced-motion` with useful static alternatives. No horizontal overflow at 375, 768, 1024 or 1440px. Never hide essential information in animation.

## Delivery sequence
1. Fixes, content cleanup, header and hero layout.
2. Original hero animation.
3. Five service illustrations and in-view interactions.
4. Contact form, validation and Web3Forms submission.
5. Global polish, responsive, accessibility and performance QA.

After each commit, give exact local commands/checks and wait for the owner's build output and screenshots before proceeding. Current commit-1 implementation and review status are in HANDOFF.md.
