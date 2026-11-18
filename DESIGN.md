# DT Technology — Design and interaction brief

**Status:** Implementation underway — updated 2026-11-18. This brief supersedes the previous palette and typography direction. The attached Stitch HTML is a visual reference, not source code to copy.

## Purpose and structure
One vertically scrolling page at `/`. Header: DT wordmark and exactly two navigation links, Services and Contact. Sections: Hero, Services, Contact. No footer, extra pages or unapproved sections. Contact form is a real Web3Forms integration when implemented; keep the API key out of source control.

## Visual direction
Refined, cinematic, warm and expensive. Editorial rather than template-like. Use the square-bracket motif sparingly in the wordmark and section labels. No generic AI gradients, stock-photo layout, false product screenshots or flashy neon.

| Token | Value |
|---|---|
| Cream background | `#FAF5EC` |
| Cream panel | `#F3E9D8` |
| Espresso | `#2A1F1A` |
| Terracotta | `#C4622D` |

Typography: self-hosted EB Garamond for display and Inter for body/interface. Variable WOFF2 files are stored in `src/assets/fonts`; fonts must never load from a CDN. Preserve each font's OFL notice.

## Content and positioning
Positioning: **AI-accelerated, engineer-accountable.**

Audience: startups and growing businesses; open to established enterprises. Do not publish company size or internal skills. No invented clients, products, case studies, logos, testimonials, metrics, credentials, awards, locations, response-time promises or delivery guarantees. Avoid stack-name-dropping and enterprise jargon.

### Hero
Headline: **Build what matters. Then scale.** The accent word cycles through scale, ship, grow and launch. Explain that DT Technology plans, builds and improves digital products, websites and AI-powered workflows. Primary CTA: **Discuss Your Project**. Secondary: **Explore services**.

Mobile: hero fits one phone screen; artwork is a dimmed, full-bleed backdrop behind centred copy, never stacked below. Desktop: copy left, artwork right. The generative centerpiece has layered depth, gentle cursor response on desktop and autonomous drift on touch, with a static reduced-motion composition.

### Marquee
Repeat only these five services, separated by small dots:
1. Product Strategy & Budget Planning
2. Websites & Web Applications
3. AI & GenAI Solutions
4. Automation & Integration
5. Product Engineering & Lifecycle

### Services
Section label: **[ 01 ] Services**.
Intro: explain in plain, confident language how DT helps startups and growing businesses make sensible product decisions, build useful software and improve workflows; established organisations are also welcome.
Five editorial rows with custom, distinct illustrations. Each row draws or assembles on scroll into view, then idles gently and responds to hover/tap. Do not show the revealed state before it enters view.

### Contact
Section label: **[ 02 ] Contact**. Label the direct email **Email us**. Use a warm, clear invitation. Fields and labels: **Name**, **Email**, **Company (optional)**, **What do you need?**, **Tell us about your project**. Keep placeholders neutral. Form submission is handled only by `src/lib/submitContact.ts`.

## Motion and interaction
Use the installed Motion library, inline SVG, CSS and small canvas where useful. Write original animation choreography; do not reuse the simple CSS loops from the Stitch HTML. Consistent easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Layer the hero scene at three parallax speeds; use a restrained light sweep and shimmer. Reveal headline by word with blur-to-sharp, cycle the italic accent through a masked slide, and give CTAs restrained magnetic/underline feedback. Marquee responds subtly to scroll velocity.

Service illustrations:
- Strategy: route, milestones and rebalancing budget bars.
- Websites: responsive wireframe changing between desktop/tablet/mobile.
- AI: responsive node network and a small typed response.
- Automation: connected tiles, travelling pulses and central hub.
- Lifecycle: build/ship/improve cycle with orbital progress.

Contact: travelling border light, floating labels, expanding focus underline, submit loading/success/error feedback and a subtle background grid.

Global: smooth in-page navigation, active section indication, thin terracotta scroll progress and header opacity/shadow changes on scroll. Effects pause outside their section, avoid pointer tracking on touch and use reduced-motion alternatives. Animate transform/opacity where practical.

## Accessibility and performance
One h1, semantic landmarks and ordered headings. All controls keyboard operable with visible focus. Touch targets at least 44px; labels at least 12px; adequate contrast. Respect `prefers-reduced-motion` with a meaningful static state. No horizontal overflow at 375, 768, 1024 or 1440px. Mobile illustrations are compact. Keep particle counts and effects lower on mobile. No external scripts, CDNs or trackers.

## Implementation sequence
1. Fixes and responsive header/hero layout.
2. Hero animation.
3. Service illustrations and in-view reveals.
4. Contact form and submission.
5. Global polish and responsive/accessibility QA.
