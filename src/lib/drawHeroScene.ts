export type ScenePointer = { x: number; y: number };

type ScenePoint = { x: number; y: number; z: number };

const TAU = Math.PI * 2;

function spherePoint(lat: number, lon: number, radius: number, spin: number, time: number): ScenePoint {
  const ripple = Math.sin(lon * 2.4 + time * 0.00045 + lat * 3) * 2.4;
  const r = radius + ripple;
  const x = r * Math.cos(lat) * Math.sin(lon);
  const y = r * Math.sin(lat);
  const z = r * Math.cos(lat) * Math.cos(lon);
  return { x: x * Math.cos(spin) + z * Math.sin(spin), y, z: z * Math.cos(spin) - x * Math.sin(spin) };
}

function strokeMesh(ctx: CanvasRenderingContext2D, center: ScenePoint, radius: number, spin: number, time: number, compact: boolean) {
  const parallels = compact ? 7 : 10;
  const meridians = compact ? 12 : 18;
  const segments = compact ? 32 : 52;
  ctx.lineWidth = 0.72;
  for (let i = 0; i <= parallels; i++) {
    const lat = -1.28 + (2.56 * i) / parallels;
    ctx.beginPath();
    for (let j = 0; j <= segments; j++) {
      const p = spherePoint(lat, (j / segments) * TAU, radius, spin, time);
      const x = center.x + p.x;
      const y = center.y + p.y;
      if (j === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(42,31,26,${0.09 + (Math.cos(lat) + 1) * 0.075})`;
    ctx.stroke();
  }
  for (let i = 0; i < meridians; i++) {
    const lon = (TAU * i) / meridians;
    ctx.beginPath();
    for (let j = 0; j <= segments; j++) {
      const p = spherePoint(-Math.PI / 2 + (Math.PI * j) / segments, lon, radius, spin, time);
      if (j === 0) ctx.moveTo(center.x + p.x, center.y + p.y);
      else ctx.lineTo(center.x + p.x, center.y + p.y);
    }
    ctx.strokeStyle = `rgba(42,31,26,${0.12 + (Math.sin(lon) + 1) * 0.055})`;
    ctx.stroke();
  }
}

export function drawHeroScene(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  pointer: ScenePointer,
  compact: boolean,
) {
  ctx.clearRect(0, 0, width, height);
  const size = Math.min(width, height);
  const radius = size * 0.235;
  const cx = width / 2;
  const cy = height / 2;
  const t = time * 0.001;
  const drift = { x: Math.sin(t * 0.19) * 3, y: Math.cos(t * 0.16) * 4 };

  const haze = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 2.1);
  haze.addColorStop(0, "rgba(196,98,45,0.15)");
  haze.addColorStop(0.55, "rgba(243,233,216,0.18)");
  haze.addColorStop(1, "rgba(250,245,236,0)");
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(cx + pointer.x * size * 0.025, cy + pointer.y * size * 0.025);
  ctx.rotate(-0.48 + t * 0.025);
  [1.32, 1.52, 1.72].forEach((scale, index) => {
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * scale, radius * (0.35 + index * 0.075), 0, 0, TAU);
    ctx.strokeStyle = index === 1 ? "rgba(196,98,45,0.24)" : "rgba(42,31,26,0.13)";
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });
  ctx.restore();

  const particles = compact ? 26 : 54;
  for (let i = 0; i < particles; i++) {
    const depth = (i % 7) / 7;
    const angle = i * 2.39996 + t * (0.05 + depth * 0.025);
    const orbit = radius * (1.35 + (i % 5) * 0.095);
    const x = cx + Math.cos(angle) * orbit + drift.x + pointer.x * size * (0.012 + depth * 0.012);
    const y = cy + Math.sin(angle * 1.17) * orbit * 0.58 + drift.y + pointer.y * size * 0.018;
    ctx.beginPath();
    ctx.arc(x, y, i % 9 === 0 ? 1.65 : 0.9, 0, TAU);
    ctx.fillStyle = i % 4 === 0 ? "rgba(196,98,45,0.62)" : "rgba(42,31,26,0.27)";
    ctx.fill();
  }

  const core = { x: cx + pointer.x * size * 0.018, y: cy + pointer.y * size * 0.018 };
  const ball = ctx.createRadialGradient(core.x - radius * 0.38, core.y - radius * 0.5, radius * 0.05, core.x, core.y, radius * 1.16);
  ball.addColorStop(0, "#fffdf7");
  ball.addColorStop(0.4, "#F3E9D8");
  ball.addColorStop(0.78, "#E5CBB6");
  ball.addColorStop(1, "#C98A65");
  ctx.beginPath();
  ctx.arc(core.x, core.y, radius, 0, TAU);
  ctx.fillStyle = ball;
  ctx.shadowColor = "rgba(196,98,45,0.2)";
  ctx.shadowBlur = compact ? 22 : 34;
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.save();
  ctx.beginPath();
  ctx.arc(core.x, core.y, radius - 1, 0, TAU);
  ctx.clip();
  strokeMesh(ctx, core, radius * 0.965, t * 0.075 + pointer.x * 0.14, time, compact);
  const sweep = (time % 11800) / 11800;
  if (sweep > 0.68 && sweep < 0.84) {
    const progress = (sweep - 0.68) / 0.16;
    const x = core.x - radius * 1.55 + progress * radius * 3.1;
    const light = ctx.createLinearGradient(x - radius * 0.3, 0, x + radius * 0.3, 0);
    light.addColorStop(0, "rgba(255,255,255,0)");
    light.addColorStop(0.5, "rgba(255,255,255,0.34)");
    light.addColorStop(1, "rgba(196,98,45,0)");
    ctx.fillStyle = light;
    ctx.fillRect(x - radius * 0.32, core.y - radius, radius * 0.64, radius * 2);
  }
  ctx.restore();

  ctx.beginPath();
  ctx.arc(core.x - radius * 0.53, core.y - radius * 0.55, 2.2, 0, TAU);
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.fill();
}
