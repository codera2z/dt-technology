import { useMotionValue, useReducedMotion, useSpring, motion } from "motion/react";
import type { PointerEvent } from "react";
import { HeroScene } from "./HeroScene";
import { CyclingAccent } from "./CyclingAccent";
import { Marquee } from "./Marquee";

const ease = [0.16, 1, 0.3, 1] as const;
const wordReveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(9px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.82, ease } },
};
const headlineReveal = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.48 } } };

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 190, damping: 22 });
  const y = useSpring(useMotionValue(0), { stiffness: 190, damping: 22 });
  const moveCta = (event: PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  };

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-layout">
        <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.25, ease }}>
          <motion.p className="eyebrow hero-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35, ease }}>
            PRODUCTS / WEBSITES / AI / AUTOMATION
          </motion.p>
          <motion.h1 className="hero-title" id="hero-title" variants={headlineReveal}
            initial={reduceMotion ? false : "hidden"} animate="visible">
            <span className="hero-title__line">
              <motion.span variants={wordReveal}>Build</motion.span>{" "}
              <motion.span variants={wordReveal}>what</motion.span>{" "}
              <motion.span variants={wordReveal}>matters.</motion.span>
            </span>
            <span className="hero-title__line">
              <motion.span variants={wordReveal}>Then</motion.span>{" "}
              <CyclingAccent />.
            </span>
          </motion.h1>
          <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.18, ease }}>
            We help startups and growing businesses plan, build and improve
            digital products, websites and AI-powered workflows. We also work
            with established teams when they need a thoughtful engineering
            partner.
          </motion.p>
          <motion.p className="hero-positioning" initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.38 }}>
            AI-accelerated, engineer-accountable.
          </motion.p>
          <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.52, ease }}>
            <motion.a className="button-primary" href="#contact" style={{ x, y }}
              onPointerMove={moveCta} onPointerLeave={() => { x.set(0); y.set(0); }}
              whileHover={reduceMotion ? undefined : { scale: 1.025 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}>
              Discuss Your Project
              <span aria-hidden="true">↗</span>
            </motion.a>
            <a className="button-secondary" href="#services">
              Explore services <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="hero-scene" aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.25, delay: 0.55, ease }}>
          <HeroScene />
        </motion.div>
      </div>
      <Marquee />
    </section>
  );
}
