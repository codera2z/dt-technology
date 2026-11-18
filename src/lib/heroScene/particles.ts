import { TAU } from "./types";

type Center = { x: number; y: number };
type Particle = { x: number; y: number; size: number; alpha: number; accent: boolean };

export function drawParticleField(
  ctx: CanvasRenderingContext2D, center: Center, radius: number,
  time: number, pointer: { x: number; y: number }, compact: boolean, foreground = false,
) {
  const count = compact ? 38 : 82;
  const t = time * 0.001;
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const angle = i * 2.39996 + t * (0.035 + (i % 6) * 0.006);
    const depth = (i % 9) / 9;
    const orbit = radius * (1.42 + (i % 9) * 0.045);
    particles.push({
      x: center.x + Math.cos(angle) * orbit + pointer.x * radius * (0.1 + depth * 0.08),
      y: center.y + Math.sin(angle * 1.13) * orbit * 0.66 + pointer.y * radius * 0.12,
      size: i % 13 === 0 ? 2.1 : i % 4 === 0 ? 1.35 : 0.8,
      alpha: 0.14 + depth * 0.34,
      accent: i % 5 === 0,
    });
  }

  if (!foreground) {
    for (let i = 0; i < particles.length; i += 4) {
      const a = particles[i];
      const b = particles[(i + 7) % particles.length];
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.quadraticCurveTo(center.x * 0.5 + b.x * 0.5, center.y - radius * 0.25, b.x, b.y);
      ctx.strokeStyle = "rgba(42,31,26,0.09)";
      ctx.lineWidth = 0.65;
      ctx.stroke();
    }
  }

  particles.forEach((particle, i) => {
    if (foreground !== (i % 3 === 0)) return;
    if (particle.size > 2) {
      const flare = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, 12);
      flare.addColorStop(0, "rgba(196,98,45,0.25)");
      flare.addColorStop(1, "rgba(196,98,45,0)");
      ctx.fillStyle = flare;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 12, 0, TAU);
      ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, TAU);
    ctx.fillStyle = particle.accent
      ? `rgba(196,98,45,${particle.alpha + 0.16})`
      : `rgba(42,31,26,${particle.alpha})`;
    ctx.fill();

    if (particle.size > 2) {
      ctx.beginPath();
      ctx.moveTo(particle.x - 5, particle.y);
      ctx.lineTo(particle.x + 5, particle.y);
      ctx.moveTo(particle.x, particle.y - 5);
      ctx.lineTo(particle.x, particle.y + 5);
      ctx.strokeStyle = "rgba(196,98,45,0.32)";
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }
  });
}
