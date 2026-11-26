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

function strokeSurfacePath(ctx: CanvasRenderingContext2D, points: ScenePoint[], accent: boolean) {
  ctx.beginPath();
  points.forEach((point, index) => index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y));
  ctx.strokeStyle = "rgba(42,31,26,0.035)";
  ctx.lineWidth = 0.5;
  ctx.stroke();

  ctx.beginPath();
  let drawing = false;
  points.forEach((point) => {
    if (point.z > 0) {
      if (drawing) ctx.lineTo(point.x, point.y);
      else ctx.moveTo(point.x, point.y);
      drawing = true;
    } else drawing = false;
  });
  ctx.strokeStyle = accent ? "rgba(196,98,45,0.24)" : "rgba(42,31,26,0.19)";
  ctx.lineWidth = accent ? 0.78 : 0.62;
  ctx.stroke();
}

export function drawSphereMesh(
  ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number,
  spin: number, time: number, compact: boolean,
) {
  const contourCount = compact ? 8 : 12;
  const flowCount = compact ? 6 : 11;
  const samples = compact ? 56 : 88;

  for (let band = 0; band < contourCount; band++) {
    const level = -1.24 + band * 2.48 / (contourCount - 1);
    const points = Array.from({ length: samples + 1 }, (_, step) => {
      const lon = step / samples * TAU;
      const drift = Math.sin(lon * 2.1 + level * 3 + time * 0.00018) * 0.048;
      const fold = Math.sin(lon * 4.4 - time * 0.00013 + band) * 0.018;
      const point = spherePoint(level + drift + fold, lon, radius * 1.002, spin, time);
      return { x: cx + point.x, y: cy + point.y, z: point.z };
    });
    strokeSurfacePath(ctx, points, band % 4 === 1);
  }

  for (let strand = 0; strand < flowCount; strand++) {
    const points = Array.from({ length: samples + 1 }, (_, step) => {
      const lat = -1.36 + step / samples * 2.72;
      const phase = strand * TAU / flowCount;
      const lon = phase + lat * (0.72 + strand * 0.018)
      + Math.sin(lat * 3.2 + time * 0.0002 + strand) * 0.16;
      const point = spherePoint(lat, lon, radius * 1.006, spin, time);
      return { x: cx + point.x, y: cy + point.y, z: point.z };
    });
    strokeSurfacePath(ctx, points, strand % 3 === 0);
  }

  const counterflow = compact ? 2 : 5;
  for (let strand = 0; strand < counterflow; strand++) {
    const points = Array.from({ length: samples + 1 }, (_, step) => {
      const lat = -1.2 + step / samples * 2.4;
      const phase = strand * TAU / counterflow + 0.4;
      const lon = phase - lat * 1.12 + Math.sin(lat * 4 + time * 0.00016) * 0.1;
      const point = spherePoint(lat, lon, radius * 1.008, spin, time);
      return { x: cx + point.x, y: cy + point.y, z: point.z };
    });
    strokeSurfacePath(ctx, points, strand % 2 === 0);
  }

  const flecks = compact ? 24 : 56;
  for (let i = 0; i < flecks; i++) {
    const lat = Math.sin(i * 17.13) * 1.22;
    const lon = i * 2.39996 + time * 0.000025;
    const point = spherePoint(lat, lon, radius * 1.009, spin, time);
    if (point.z <= 0) continue;
    ctx.beginPath();
    ctx.arc(cx + point.x, cy + point.y, i % 7 === 0 ? 1 : 0.62, 0, TAU);
    ctx.fillStyle = i % 4 === 0 ? "rgba(196,98,45,0.52)" : "rgba(42,31,26,0.25)";
    ctx.fill();
  }
}
