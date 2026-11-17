# DESIGN.md: DT Technology

**Status: BLUEPRINT APPROVED — 2026-11-17.** This document is the visual and interaction source of truth for implementation. Keep the page honest: no invented clients, case studies, testimonials, statistics, credentials or product screenshots.

## Purpose and structure
One premium, vertically scrolling page at `/`. The only page sections are Hero, Services and Contact. No footer. Header contains the DT Technology wordmark and exactly two links: Services and Contact. The primary CTA is **Discuss Your Project**, linking to Contact.

## Direction
**Concept:** The Systems Studio — a practical product-engineering partner, expressed through an editorial design system and a visual metaphor of separate ideas becoming a working system.

**Tone:** confident, precise, approachable.

**Positioning:** "AI-accelerated, engineer-accountable."

**Avoid:** generic AI gradients, stock-photo agency layouts, fake product screenshots, jargon-heavy copy, identical three-card grids, decorative motion without meaning, and claims the company cannot substantiate.

**Reference sites (inspiration, not templates or assets):**
- https://studiofreight.com/ — expressive visual systems, diagrammatic illustration and purposeful motion.
- https://codestudiolabs.com/ — clear studio positioning and service communication.
- https://www.kaisei.studio/ — restrained editorial layout and engineering-led copy.
- https://linear.app/ — product clarity, typographic hierarchy and interface discipline.
Do not copy their layouts, text, logos, imagery or proprietary assets.

## Brand identity
Use a custom DT wordmark as the primary identity. Develop a compact DT monogram as a secondary mark, built from simple geometric forms. A connecting line / node motif may support the idea of systems being brought together. No existing logo was present in the repository when checked; do not imply one exists. Keep the mark legible at small sizes and avoid generic chip, brain or circuit icons.

## Design tokens
Define these as CSS custom properties and use tokens rather than scattered raw values.

| Token | Value | Use |
|---|---|---|
| Background | `#F3F1E9` | Warm paper page canvas |
| Surface | `#FFFFFF` | Form surfaces and restrained light panels |
| Dark surface / primary text | `#20251F` | Graphite panels and main text |
| Muted text | `#777D72` | Secondary text; check contrast per context |
| Accent | `#C8F169` | Signal lime for key actions and active visual states |
| Accent text | `#20251F` | Text on lime surfaces |
| Border | `#D8D9D0` | Dividers and form outlines |
| Focus on light | `#587A20` | Visible keyboard focus |
| Focus on dark | `#C8F169` | Visible keyboard focus |

Use the accent sparingly. Do not use muted text for small text unless contrast passes WCAG AA. Check all final foreground/background pairs before approval.

## Typography
- Display and headings: **Space Grotesk**, variable weight 400–700.
- Body, labels and controls: **DM Sans**, variable weight 400–700.
- Self-host font files; do not load them from a third-party CDN. Preserve the copyright notice and OFL.txt for each font when redistributing font files. LICENCES.md records the source and licence.
- Fluid scale: display `clamp(3.25rem, 7vw, 7rem)`; section heading `clamp(2.2rem, 4.5vw, 4.5rem)`; subheading `clamp(1.25rem, 2vw, 1.75rem)`; body `clamp(1rem, 1.1vw, 1.125rem)`; small labels 0.75–0.875rem.
- Body line-height 1.5–1.7. Keep long-form text to roughly 65–75 characters per line.

## Layout and spacing
- Desktop: 12-column grid; mobile: single column. Use a consistent max-width container of approximately 1240px and generous side gutters.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- One restrained radius family (8–16px); maximum two shadow levels.
- Use varied compositions: split hero, a connected scroll visual, editorial service rows, and a focused contact form. Do not turn every item into a card.
- Mobile layouts must keep the headline, services, form and navigation immediately understandable.

## Scroll storyline
| Section | Purpose | Background / visual state | Component | Behaviour |
|---|---|---|---|---|
| Hero | Explain the offer and invite a project conversation | Warm paper, oversized graphite headline, lime signal; abstract modular 3D system visual | HeroSection + JourneyVisual | Modules begin separate and assemble into a connected system; journey marker introduces Idea → Plan → Build → Evolve |
| Services | Show practical ways DT Technology helps | Graphite field with warm-paper type, lime active connections and a clear service index | ServicesSection + ServiceList + EngagementModels | As the visitor moves through services, the system visual changes state and connections illuminate; a sticky/pinned sequence may hold the visual while content advances |
| Contact | Convert interest into an approachable enquiry | Return to warm paper; paths and modules converge toward the form | ContactSection + ProjectEnquiryForm | Visual movement resolves and settles; the form becomes the clear final action |

### Signature visual
Create an abstract **product system** from geometric modules, paths and connection points — not a fake application screenshot. Its states represent Idea, Plan, Build and Evolve. A restrained 3D scene is the preferred visual expression if it can be performant and art-directed well; SVG/CSS remains a viable fallback. The visual must support the copy, not compete with it.

Native scrolling is preferred but not mandatory. Scroll-driven transitions, pinned/sticky sequences, parallax, scroll-jacking and autoplaying 3D scenes are allowed when they materially strengthen the story or composition. Scroll-jacking is an option to prototype, not a requirement: retain predictable touch, wheel and keyboard behaviour, make navigation and content reachable, and avoid trapping the visitor. Use the simplest technique that achieves the intended effect.

## Content architecture and approved copy direction

### Hero
Eyebrow: **PRODUCT ENGINEERING / AI / AUTOMATION**

Headline: **Build the right thing. Then build it well.**

Body: DT Technology helps businesses turn ideas into useful digital products, bring AI into real workflows, and automate the work that slows teams down — from early planning and budget clarity to engineering and ongoing improvement.

Positioning line: **AI-accelerated, engineer-accountable.**

Primary CTA: **Discuss Your Project**

### Services
Intro headline: **Good technology starts before the first line of code.**

Intro: We help you decide what is worth building, then design, engineer and evolve the solution around the way your business works.

Five service groups:
1. **Product strategy & budget planning** — Requirements, technical feasibility, MVP scope, priorities, roadmap and realistic cost planning.
2. **Websites & web applications** — Websites, custom web apps, SaaS products, portals and business applications.
3. **AI & GenAI solutions** — LLM integrations, RAG-based knowledge tools, AI assistants and AI features within existing products.
4. **Automation & integrations** — Workflow automation, API connections and systems that reduce repetitive manual work.
5. **Product engineering & lifecycle** — Product development, deployment, maintenance and continuous improvement.

Show four engagement models within Services, without creating extra page sections: one-time projects; end-to-end product partnerships; ongoing engineering; technology consulting.

### Contact
Headline: **Let's work out the right next step.**

Body: Have a product idea, a process to improve, or an existing system that needs a better next step? Tell us a little about it. You don't need a complete technical brief to get started.

Form fields: name, email, what the visitor needs help with, and a project description. Button: **Discuss Your Project**. The form is UI only in this phase; do not connect a provider or send data.

## Components and states
- `SiteHeader`: wordmark, Services anchor, Contact anchor; default, scrolled, hover and keyboard-focus states.
- `HeroSection`: eyebrow, h1, supporting copy and primary CTA.
- `JourneyVisual`: abstract 3D / SVG system visual with clear Idea → Plan → Build → Evolve states.
- `ServicesSection`: intro, five editorial service rows and four engagement models.
- `ServiceItem`: index, title, concise description and active/focus treatment.
- `ContactSection`: invitation and `ProjectEnquiryForm`.
- `ProjectEnquiryForm`: persistent visible labels, appropriate input types, inline validation, submitting / success / error UI states (visual only; no network request).
Buttons, links, fields and interactive rows need default, hover, focus-visible, disabled and invalid states as applicable. All functionality must be keyboard-operable.

## Motion and accessibility
- Motion must clarify hierarchy, change state or carry the product-journey story.
- Routine UI transitions: 150–400ms. Larger scenic transitions: up to approximately 800ms unless scroll-driven.
- One coherent easing language. Transform/opacity are preferred for routine UI transitions; other effects and 3D are permitted when justified.
- A one-time hero assembly or subtle autoplaying 3D motion is allowed. Avoid endless motion that competes with reading.
- Respect `prefers-reduced-motion`: stop autoplay, parallax and scroll-linked movement; show a meaningful composed static state. Essential copy and navigation must never depend on animation.
- Semantic HTML, one h1, correct heading order, visible focus, AA contrast, keyboard access and reduced-motion support are mandatory.
- Sticky visuals need a useful mobile fallback; do not force a small-screen visitor through a complex 3D scene.

## Imagery and assets
Prefer the custom system visual, diagrams and geometric 3D. No generic stock photos. Never present demo visuals as client work. Log every third-party component, font, model, texture or illustration in LICENCES.md before use.

## Anti-generic audit
- Does the headline say something specific rather than "Transform your business"?
- Are gradients, glass effects, cards and animation purposeful rather than decorative defaults?
- Does each section feel compositionally distinct while sharing the same tokens?
- Does the page remain designed with motion disabled?
- Is there one memorable idea — the product system evolving across the page?

## Performance and QA budgets
- Lighthouse mobile targets: performance 90+, accessibility 95+, best practices 95+, SEO 95+; record exceptions rather than hiding them.
- LCP under 2.5s; CLS under 0.1; keep JavaScript and initial asset weight small (roughly under 1.5 MB).
- Keyboard-test every interactive element. Test reduced motion and widths 360, 390, 768, 1024 and 1440px.
