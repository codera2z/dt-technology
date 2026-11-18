import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { drawHeroScene } from "../lib/drawHeroScene";

export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    let width = 1;
    let height = 1;
    let visible = false;
    let frame = 0;
    let elapsed = 0;
    let lastFrame = 0;
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const paint = (time: number) => {
      drawHeroScene(context, width, height, time, pointer, width < 440);
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint(reduceMotion ? 0 : elapsed);
    };
    const animate = (now: number) => {
      if (!visible || reduceMotion) return;
      elapsed += Math.min(now - (lastFrame || now), 40);
      lastFrame = now;
      pointer.x += (target.x - pointer.x) * 0.055;
      pointer.y += (target.y - pointer.y) * 0.055;
      paint(elapsed);
      frame = window.requestAnimationFrame(animate);
    };
    const start = () => {
      if (!reduceMotion && !frame && visible) {
        lastFrame = 0;
        frame = window.requestAnimationFrame(animate);
      }
    };
    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };
    const movePointer = (event: PointerEvent) => {
      if (!finePointer || event.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const resetPointer = () => {
      target.x = 0;
      target.y = 0;
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    }, { rootMargin: "120px" });
    intersection.observe(canvas);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", movePointer, { passive: true });
    canvas.addEventListener("pointerleave", resetPointer);
    resize();

    return () => {
      stop();
      intersection.disconnect();
      observer.disconnect();
      canvas.removeEventListener("pointermove", movePointer);
      canvas.removeEventListener("pointerleave", resetPointer);
    };
  }, [reduceMotion]);

  return (
    <div className="hero-artwork">
      <canvas ref={canvasRef} className="hero-artwork__canvas" aria-hidden="true" />
      <span className="hero-artwork__halo" />
    </div>
  );
}
