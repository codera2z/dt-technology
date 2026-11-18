# DT Technology — Design and interaction specification

**Status:** Current owner brief, 18 Nov 2026. Stitch HTML is a visual reference only; do not copy its implementation or simple CSS animation loops.

## Site and identity
One responsive scrolling page at /, with Hero, Services and Contact only. No footer. Header contains DT wordmark/company name and exactly two links: Services and Contact. Use the square-bracket motif selectively.

## Art direction
Refined, cinematic, warm and expensive. Calm, cohesive motion; no gimmicks, neon, generic AI gradients or template-like layouts.

| Token | Value |
|---|---|
| Cream canvas | #FAF5EC |
| Cream surface | #F3E9D8 |
| Espresso | #2A1F1A |
| Terracotta | #C4622D |

Self-host EB Garamond for display and Inter for body/interface. Variable WOFF2 files and OFL notices are in src/assets/fonts/. No remote font requests, CDNs or external scripts. Use inline SVG icons, not Material Symbols.

## Honest content
Positioning: **AI-accelerated, engineer-accountable.** Speak plainly to startups and growing businesses; larger organisations are welcome. Do not invent or imply clients, products, case studies, testimonials, logos, metrics, credentials, awards, locations, response-time promises, guarantees or technical-stack claims.

## Hero
Eyebrow: **[01] PRODUCTS / WEBSITES / AI / AUTOMATION**.
Headline: **Build what matters. Then [scale / ship / grow / launch].** Cycle the italic accent through those words with a masked slide; reveal headline words from blur to sharp. Primary CTA: **Discuss Your Project**; secondary: **Explore services**.
- Mobile: fit within one phone screen. Animation is a dimmed full-bleed backdrop behind centred text, never stacked below.
- Desktop: text left, animation right.
- Original luminous generative centerpiece: at least three parallax/depth layers of mesh, lines and particles; slow morph/breath; restrained light sweep/shimmer. Respond smoothly to desktop cursor; drift or respond to scroll on touch.
- Opening: brackets slide in to frame “DT”, then page reveals with a restrained stagger.
- Primary CTA: magnetic with inner glow and sliding arrow. Secondary: animated underline.

## Marquee
Repeat only these five services, separated by small dots:
1. Product Strategy & Budget Planning
2. Websites & Web Applications
3. AI & GenAI Solutions
4. Automation & Integration
5. Product Engineering & Lifecycle
Scroll velocity may subtly affect speed/direction. No extra promotional phrases.

## Services
Label: **[02] Services**. Intro in plain, confident language: explain how DT helps startups and growing businesses decide what to build, create useful software and improve workflows; larger organisations are welcome.
Five rows with distinct original illustrations:
1. **Strategy & Budget:** roadmap path and milestones draw; allocation bars grow/rebalance; small counter.
2. **Websites & Web Applications:** browser wireframe assembles, morphs desktop/tablet/phone; cursor moves and clicks.
3. **AI & GenAI:** node network gently attracts/connects near cursor; short chat reply types token by token; completion sparkle.
4. **Automation & Integration:** app tiles connect by curves; pulses travel to hub; gear engages on arrival.
5. **Product Engineering & Lifecycle:** build → ship → improve cycle; orbiting nodes, progress arc and lifting/settling layers.
Rows reveal only on scroll into view. Hairline draws, copy staggers up, index changes to terracotta on hover, arrow slides in and desktop spotlight follows cursor. Use compact mobile illustrations. Support tap; pause loops offscreen; provide static/reduced-motion alternatives.

## Contact and submission
Label: **[03] Contact**. Email label: **Email us**. Approachable invitation; heading word reveal and restrained shimmer. Subtle grid/dot texture and travelling form-border light.
Exact labels: **Name**, **Email**, **Company (optional)**, **What do you need?**, **Tell us about your project**. Neutral placeholders. Floating labels and expanding terracotta focus underline. Magnetic/shimmer submit button. States: loading/spinner, success with palette-matched particles and confirmation, error with gentle shake.
The contact form currently provides client-side validation only and does not submit or send messages. Keep hello@dttechnology.com visible as the provisional email option even though the mailbox is not yet set up. When the owner creates a company inbox and explicitly asks to connect form delivery, add that company inbox as the receiving address and a second public email option. Do not use a personal inbox for Web3Forms or publish a personal email address.

**Email caveat:** hello@dttechnology.com came from Stitch and is unverified; confirm before public launch.

## Global motion, accessibility and performance
Use installed Motion, CSS, inline SVG and small canvas only where useful. No new dependencies without approval. Write original motion, not the Stitch loops. Consistent ease, e.g. cubic-bezier(0.16, 1, 0.3, 1).
Smooth in-page navigation, active-section indication, thin terracotta progress and header opacity/shadow on scroll. Section headings need scroll-margin-top. Throttle desktop pointer effects; disable on touch; pause offscreen; reduce mobile complexity. Prefer transform/opacity when practical.
One h1, semantic landmarks, logical headings, visible focus, keyboard access, AA contrast, 44px targets and 12px labels. Respect prefers-reduced-motion. No horizontal overflow at 375, 768, 1024 or 1440px. Essential content must not depend on animation.

## Delivery and review
1. Fixes, content, header and hero layout — provisionally accepted in the owner's preview.
2. Original hero animation.
3. Five service illustrations and in-view interactions.
4. Contact form and client-side validation. Email delivery integration is deferred until a company inbox is ready and the owner requests it.
5. Global polish, responsive, accessibility and performance review.
Proceed through design commits without requesting build logs/screenshots between each one. Use sound responsive judgment and review the code at each breakpoint. The owner may provide preview feedback at any time. After commit 5, provide one consolidated local build and QA checklist with exact commands. Never claim checks passed until the owner runs them.