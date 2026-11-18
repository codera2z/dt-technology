import { HeroScene } from "./HeroScene";
import { Marquee } from "./Marquee";

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">PRODUCTS / WEBSITES / AI / AUTOMATION</p>
          <h1 className="hero-title" id="hero-title">
            Build what matters.
            <br />
            Then <em>scale</em>.
          </h1>
          <p className="hero-description">
            We help startups and growing businesses plan, build and improve
            digital products, websites and AI-powered workflows. We also work
            with established teams when they need a thoughtful engineering
            partner.
          </p>
          <p className="hero-positioning">AI-accelerated, engineer-accountable.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">
              Discuss Your Project <span aria-hidden="true">↗</span>
            </a>
            <a className="button-secondary" href="#services">
              Explore services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="hero-scene" aria-hidden="true">
          <HeroScene />
        </div>
      </div>
      <Marquee />
    </section>
  );
}
