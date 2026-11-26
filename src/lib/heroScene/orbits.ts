import { TAU } from "./types";

type Center = { x: number; y: number };

export function drawOrbitalShell(
  ctx: CanvasRenderingContext2D, center: Center, radius: number,
  time: number, pointer: { x: number; y: number }, compact: boolean,
) {
  const t = time * 0.001;
  ctx.save();
  ctx.translate(center.x, center.y);
  const rings = [
    { x: 1.36, y: 0.53, angle: -0.46, color: "rgba(196,98,45,0.42)" },
    { x: 1.58, y: 0.69, angle: 0.82, color: "rgba(42,31,26,0.19)" },
    { x: 1.82, y: 0.77, angle: -0.18, color: "rgba(196,98,45,0.2)" },
  ];
  rings.forEach((ring, index) => {
    ctx.save();
    ctx.rotate(ring.angle + t * (index === 1 ? -0.012 : 0.008) + pointer.x * (index - 1) * 0.018 + pointer.y * 0.008);
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * ring.x, radius * ring.y, 0, 0, TAU);
    ctx.strokeStyle = ring.color;
    ctx.lineWidth = index === 0 ? 1.1 : 0.8;
    ctx.setLineDash(index === 2 ? [2, 7] : []);
    ctx.stroke();
    ctx.setLineDash([]);
    if (index !== 1) {
      const ticks = compact ? 28 : 48;
      ctx.beginPath();
      for (let i = 0; i < ticks; i++) {
        const a = i * TAU / ticks;
        const nx = Math.cos(a);
        const ny = Math.sin(a);
        const x = nx * radius * ring.x;
        const y = ny * radius * ring.y;
        const length = i % 6 === 0 ? 7 : 2.5;
        ctx.moveTo(x - nx * 1.5, y - ny * 1.5);
        ctx.lineTo(x + nx * length, y + ny * length);
      }
      ctx.strokeStyle = "rgba(42,31,26,0.2)";
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }
    ctx.restore();
  });

  ctx.save();
  ctx.rotate(-0.62 + t * 0.018);
  ctx.beginPath();
  ctx.moveTo(-radius * 1.72, radius * 0.24);
  ctx.bezierCurveTo(-radius * 0.76, -radius * 1.18, radius * 0.54, radius * 1.15, radius * 1.72, -radius * 0.19);
  const ribbon = ctx.createLinearGradient(-radius, 0, radius, 0);
  ribbon.addColorStop(0, "rgba(196,98,45,0)");
  ribbon.addColorStop(0.46, "rgba(196,98,45,0.15)");
  ribbon.addColorStop(1, "rgba(196,98,45,0)");
  ctx.strokeStyle = ribbon;
  ctx.lineWidth = compact ? 4 : 7;
  ctx.stroke();
  ctx.restore();

  for (let i = 0; i < 3; i++) {
    const a = t * (0.12 + i * 0.025) + i * TAU / 3;
    const x = Math.cos(a) * radius * (1.48 + i * 0.12);
    const y = Math.sin(a) * radius * (0.58 + i * 0.06);
    ctx.beginPath();
    ctx.moveTo(x - Math.cos(a) * 15, y - Math.sin(a) * 8);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(196,98,45,0.28)";
    ctx.lineWidth = 1;
    ctx.stroke();
    const glow = ctx.createRadialGradient(x, y, 0, x, y, compact ? 8 : 12);
    glow.addColorStop(0, "rgba(196,98,45,0.38)");
    glow.addColorStop(1, "rgba(196,98,45,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, compact ? 8 : 12, 0, TAU);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, i === 1 ? 3.2 : 2.2, 0, TAU);
    ctx.fillStyle = i === 1 ? "#C4622D" : "#2A1F1A";
    ctx.fill();
  }
  ctx.restore();
}
