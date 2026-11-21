import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;
    const updateScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? Math.min(100, window.scrollY / maxScroll * 100) : 0;
        headerRef.current?.style.setProperty("--scroll-progress", progress + "%");
        headerRef.current?.classList.toggle("is-scrolled", window.scrollY > 8);
      });
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    const sections = links.map(({ href }) => document.querySelector(href)).filter(
      (section): section is Element => section !== null,
    );
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActiveSection(current.target.id);
    }, { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const handleResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <a className="site-brand" href="#top" aria-label="DT Technology, home">
          <span className="site-brand__mark" aria-hidden="true">
            <motion.span initial={reduceMotion ? false : { x: -14, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.72, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}>[</motion.span>
            <motion.strong initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.54, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}>DT</motion.strong>
            <motion.span initial={reduceMotion ? false : { x: 14, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.72, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}>]</motion.span>
          </span>
          <motion.span className="site-brand__name" initial={reduceMotion ? false : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.56, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}>
            Technology
          </motion.span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} aria-current={activeSection === link.href.slice(1) ? "location" : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
        <button ref={menuButtonRef} className="site-menu-button" type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen} aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </div>
      <nav className={`site-mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {links.map((link) => (
          <a key={link.href} href={link.href} tabIndex={menuOpen ? 0 : -1}
            aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
            onClick={closeMenu}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
