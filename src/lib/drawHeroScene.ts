import { drawOrbitalShell } from "./heroScene/orbits";
import { drawParticleField } from "./heroScene/particles";
import { drawHeroSphere } from "./heroScene/surface";
import type { ScenePointer } from "./heroScene/types";

export type { ScenePointer } from "./heroScene/types";

export function drawHeroScene(
  ctx: CanvasRenderingContext2D, width: number, height: number,
  time: number, pointer: ScenePointer, compact: boolean,
) {
  ctx.clearRect(0, 0, width, height);
  const size = Math.min(width, height);
  const radius = size * (0.248 + Math.sin(time * 0.00034) * 0.002);
  const center = { x: width / 2, y: height / 2 };
  const atmosphere = ctx.createRadialGradient(center.x, center.y, radius * 0.25, center.x, center.y, radius * 2.55);
  atmosphere.addColorStop(0, "rgba(196,98,45,0.19)");
  atmosphere.addColorStop(0.38, "rgba(243,233,216,0.23)");
  atmosphere.addColorStop(0.72, "rgba(217,179,151,0.09)");
  atmosphere.addColorStop(1, "rgba(250,245,236,0)");
  ctx.fillStyle = atmosphere;
  ctx.fillRect(0, 0, width, height);

  drawOrbitalShell(ctx, center, radius, time, pointer, compact);
  drawParticleField(ctx, center, radius, time, pointer, compact);
  drawHeroSphere(ctx, center, radius, time, pointer, compact);
  drawParticleField(ctx, center, radius, time, pointer, compact, true);
}
