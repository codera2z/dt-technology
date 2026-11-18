import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { ServiceIllustration } from "./ServiceIllustration";
import type { ServiceKind } from "./ServiceIllustration";

const aiNodePoints = [[31, 71], [64, 39], [88, 77], [116, 42], [139, 78], [171, 49]] as const;
const clampPull = (value: number) => Math.max(-4, Math.min(4, value));

type ServiceRowProps = {
  title: string;
  description: string;
  kind: ServiceKind;
  index: number;
};

export function ServiceRow({ title, description, kind, index }: ServiceRowProps) {
  const rowRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  const moveSpotlight = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    event.currentTarget.style.setProperty("--spotlight-x", x + "%");
    event.currentTarget.style.setProperty("--spotlight-y", y + "%");
    if (kind === "ai") {
      const artwork = event.currentTarget.querySelector<SVGSVGElement>(".service-illustration--ai");
      if (artwork) {
        const artBounds = artwork.getBoundingClientRect();
        const pointerX = ((event.clientX - artBounds.left) / artBounds.width) * 220;
        const pointerY = ((event.clientY - artBounds.top) / artBounds.height) * 132;
        artwork.querySelectorAll<SVGCircleElement>(".service-art__node").forEach((node, index) => {
          const point = aiNodePoints[index];
          if (!point) return;
          node.style.setProperty("--pull-x", clampPull((pointerX - point[0]) * .035) + "px");
          node.style.setProperty("--pull-y", clampPull((pointerY - point[1]) * .035) + "px");
        });
      }
    }
  };

  const resetSpotlight = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--spotlight-x", "50%");
    event.currentTarget.style.setProperty("--spotlight-y", "50%");
    event.currentTarget.querySelectorAll<SVGCircleElement>(".service-art__node").forEach((node) => {
      node.style.setProperty("--pull-x", "0px");
      node.style.setProperty("--pull-y", "0px");
    });
  };

  return (
    <article
      ref={rowRef}
      className={"service-row" + (revealed ? " has-revealed" : "") + (inView ? " is-visible" : "")}
      onPointerMove={moveSpotlight}
      onPointerLeave={resetSpotlight}
    >
      <span className="service-row__number">[ {String(index + 1).padStart(2, "0")} ]</span>
      <div className="service-row__illustration">
        <ServiceIllustration kind={kind} />
      </div>
      <div className="service-row__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="service-row__arrow" aria-hidden="true">↗</span>
    </article>
  );
}
