import { drawSphereMesh } from "./geometry";
import { TAU } from "./types";

type Center = { x: number; y: number };

export function drawHeroSphere(
  ctx: CanvasRenderingContext2D, center: Center, radius: number,
  time: number, pointer: { x: number; y: number }, compact: boolean,
) {
  const breathing = 1 + Math.sin(time * 0.00034) * 0.012;
  const r = radius * breathing;
  const x = center.x + pointer.x * r * 0.07;
  const y = center.y + pointer.y * r * 0.07;

  const castShadow = ctx.createRadialGradient(x + r * 0.08, y + r * 0.9, r * 0.08, x + r * 0.08, y + r * 0.9, r * 0.92);
  castShadow.addColorStop(0, "rgba(73,43,31,0.17)");
  castShadow.addColorStop(0.58, "rgba(73,43,31,0.07)");
  castShadow.addColorStop(1, "rgba(73,43,31,0)");
  ctx.beginPath();
  ctx.ellipse(x + r * 0.08, y + r * 0.9, r * 0.92, r * 0.2, -0.12, 0, TAU);
  ctx.fillStyle = castShadow;
  ctx.fill();

  const ball = ctx.createRadialGradient(x - r * 0.4, y - r * 0.5, r * 0.04, x, y, r * 1.16);
  ball.addColorStop(0, "#fffefa");
  ball.addColorStop(0.28, "#FAF5EC");
  ball.addColorStop(0.58, "#F0DDCA");
  ball.addColorStop(0.84, "#D9B397");
  ball.addColorStop(0.96, "#C17B54");
  ball.addColorStop(1, "#9F5939");

  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fillStyle = ball;
  ctx.shadowColor = "rgba(196,98,45,0.26)";
  ctx.shadowBlur = compact ? 24 : 42;
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r - 1, 0, TAU);
  ctx.clip();

  const sheen = ctx.createRadialGradient(x - r * 0.46, y - r * 0.58, 0, x - r * 0.22, y - r * 0.28, r * 1.35);
  sheen.addColorStop(0, "rgba(255,255,255,0.46)");
  sheen.addColorStop(0.48, "rgba(255,255,255,0.08)");
  sheen.addColorStop(1, "rgba(196,98,45,0)");
  ctx.fillStyle = sheen;
  ctx.fillRect(x - r, y - r, r * 2, r * 2);

  drawSphereMesh(ctx, x, y, r * 0.99, time * 0.000075 + pointer.x * 0.16, time, compact);

  const edgeShade = ctx.createRadialGradient(x - r * 0.12, y - r * 0.2, r * 0.24, x + r * 0.2, y + r * 0.28, r * 1.18);
  edgeShade.addColorStop(0, "rgba(74,36,23,0)");
  edgeShade.addColorStop(0.68, "rgba(74,36,23,0.035)");
  edgeShade.addColorStop(1, "rgba(74,36,23,0.22)");
  ctx.fillStyle = edgeShade;
  ctx.fillRect(x - r, y - r, r * 2, r * 2);

  ctx.beginPath();
  ctx.ellipse(x - r * 0.37, y - r * 0.45, r * 0.2, r * 0.075, -0.76, 0, TAU);
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.fill();

  const sweep = (time % 13200) / 13200;
  if (sweep > 0.61 && sweep < 0.82) {
    const progress = (sweep - 0.61) / 0.21;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-0.42);
    const sx = -r * 1.5 + progress * r * 3;
    const light = ctx.createLinearGradient(sx - r * 0.34, 0, sx + r * 0.34, 0);
    light.addColorStop(0, "rgba(255,255,255,0)");
    light.addColorStop(0.48, "rgba(255,255,255,0.62)");
    light.addColorStop(0.7, "rgba(196,98,45,0.2)");
    light.addColorStop(1, "rgba(196,98,45,0)");
    ctx.fillStyle = light;
    ctx.fillRect(sx - r * 0.4, -r, r * 0.8, r * 2);
    ctx.restore();
  }

  ctx.restore();

  ctx.beginPath();
  ctx.ellipse(x - r * 0.16, y - r * 0.22, r * 0.91, r * 0.93, -0.36, -2.2, -0.55);
  ctx.strokeStyle = "rgba(255,255,255,0.72)";
  ctx.lineWidth = 1.2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x - r * 0.52, y - r * 0.56, compact ? 2.1 : 2.8, 0, TAU);
  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.shadowColor = "rgba(255,255,255,0.8)";
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.shadowBlur = 0;
}
