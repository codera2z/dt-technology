import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const words = ["scale", "ship", "grow", "launch"];
const opticalClass = (word: string) => word === "grow" ? " hero-accent--grow" : "";
const entrance = {
  hidden: { opacity: 0, y: 18, filter: "blur(9px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.82, delay: 0.96, ease: [0.16, 1, 0.3, 1] },
  },
};

export function CyclingAccent() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [widths, setWidths] = useState<number[]>([]);
  const measureRefs = useRef<Array<HTMLElement | null>>([]);

  useLayoutEffect(() => {
    let mounted = true;
    const measure = () => {
      const next = words.map((_, index) =>
        measureRefs.current[index]?.getBoundingClientRect().width ?? 0
      );
      if (mounted && next.every((width) => width > 0)) setWidths(next);
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    document.fonts?.ready.then(measure);
    return () => {
      mounted = false;
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % words.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <span className="hero-title__mask hero-title__mask--static">
        <em className="hero-accent-static">scale</em>
      </span>
    );
  }

  return (
    <motion.span
      className="hero-title__mask"
      aria-live="off"
      initial="hidden"
      animate="visible"
      variants={entrance}
      style={{ width: widths[active] ? `${widths[active]}px` : undefined }}
    >
      <span className={`hero-accent hero-accent--sizer${opticalClass(words[active])}`} aria-hidden="true">
        {words[active]}
      </span>
      <AnimatePresence initial={false}>
        <motion.em
          className={`hero-accent${opticalClass(words[active])}`}
          key={words[active]}
          initial={{ y: "112%", opacity: 0, filter: "blur(5px)" }}
          animate={{
            y: "0%", opacity: 1, filter: "blur(0px)",
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          exit={{ y: "-112%", opacity: 0, filter: "blur(4px)" }}
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
      <span className="hero-title__measure" aria-hidden="true">
        {words.map((word, index) => (
          <em
            className={`hero-accent hero-accent--measure${opticalClass(word)}`}
            key={word}
            ref={(node) => { measureRefs.current[index] = node; }}
          >
            {word}
          </em>
        ))}
      </span>
    </motion.span>
  );
}
