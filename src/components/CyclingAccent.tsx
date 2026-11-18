import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const words = ["scale", "ship", "grow", "launch"];

export function CyclingAccent() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % words.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  if (reduceMotion) return <em className="hero-accent-static">scale</em>;

  return (
    <span className="hero-title__mask" aria-live="off">
      <AnimatePresence mode="wait" initial={false}>
        <motion.em
          className="hero-accent"
          key={words[active]}
          initial={{ y: "110%", opacity: 0, filter: "blur(5px)" }}
          animate={{
            y: "0%", opacity: 1, filter: "blur(0px)",
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          exit={{ y: "-110%", opacity: 0, filter: "blur(4px)" }}
          transition={{
            y: { duration: 0.58, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.42 },
            filter: { duration: 0.58 },
            backgroundPosition: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
        >
          {words[active]}
        </motion.em>
      </AnimatePresence>
    </span>
  );
}
