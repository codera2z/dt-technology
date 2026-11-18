import { TAU } from "./types";
import type { ScenePoint } from "./types";

export function spherePoint(lat: number, lon: number, radius: number, spin: number, time: number): ScenePoint {
  const flow = Math.sin(lon * 2.2 + time * 0.00032 + lat * 2.8) * 1.8;
  const ripple = Math.cos(lon * 4.1 - time * 0.0002 + lat) * 0.7;
  const r = radius + flow + ripple;
  const x = r * Math.cos(lat) * Math.sin(lon);
  const y = r * Math.sin(lat);
  const z = r * Math.cos(lat) * Math.cos(lon);
  return {
    x: x * Math.cos(spin) + z * Math.sin(spin),
    y,
    z: z * Math.cos(spin) - x * Math.sin(spin),
  };
}

function strokeProjectedPath(ctx: CanvasRenderingContext2D, points: ScenePoint[]) {
  ctx.beginPath();
  points.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
  ctx.strokeStyle = "rgba(42,31,26,0.055)";
  ctx.lineWidth = 0.7;
  ctx.stroke();

  ctx.beginPath();
  let drawing = false;
  points.forEach((p) => {
    if (p.z > 0) {
      if (drawing) ctx.lineTo(p.x, p.y);
      else ctx.moveTo(p.x, p.y);
      drawing = true;
    } else drawing = false;
  });
  ctx.strokeStyle = "rgba(42,31,26,0.34)";
  ctx.lineWidth = 0.9;
  ctx.stroke();
}

export function drawSphereMesh(
  ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number,
  spin: number, time: number, compact: boolean,
) {
  const parallels = compact ? 8 : 13;
  const meridians = compact ? 14 : 23;
  const segments = compact ? 42 : 68;
  const latitudes = Array.from({ length: parallels + 1 }, (_, i) => -1.3 + 2.6 * i / parallels);

  latitudes.forEach((lat) => {
    const points = Array.from({ length: segments + 1 }, (_, j) => {
      const p = spherePoint(lat, j / segments * TAU, radius, spin, time);
      return { x: cx + p.x, y: cy + p.y, z: p.z };
    });
    strokeProjectedPath(ctx, points);
  });

  Array.from({ length: meridians }, (_, i) => i * TAU / meridians).forEach((lon) => {
    const points = Array.from({ length: segments + 1 }, (_, j) => {
      const p = spherePoint(-Math.PI / 2 + Math.PI * j / segments, lon, radius, spin, time);
      return { x: cx + p.x, y: cy + p.y, z: p.z };
    });
    strokeProjectedPath(ctx, points);
  });

  for (let band = 0; band < (compact ? 3 : 6); band++) {
    const points = Array.from({ length: segments + 1 }, (_, j) => {
      const lon = j / segments * TAU;
      const lat = -0.83 + band * 0.33 + Math.sin(lon * 1.7 + time * 0.00022 + band) * 0.055;
      const p = spherePoint(lat, lon, radius * 1.003, spin, time);
      return { x: cx + p.x, y: cy + p.y, z: p.z };
    });
    ctx.save();
    ctx.setLineDash([compact ? 2 : 3, compact ? 5 : 7]);
    strokeProjectedPath(ctx, points);
    ctx.restore();
  }
}
