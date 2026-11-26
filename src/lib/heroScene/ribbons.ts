type Point = { x: number; y: number };

type Ribbon = {
  start: [number, number];
  first: [number, number];
  second: [number, number];
  end: [number, number];
  width: number;
};

export function drawSilkRibbons(
  ctx: CanvasRenderingContext2D, x: number, y: number, radius: number,
  time: number, pointer: Point, compact: boolean,
) {
  const scale = compact ? 0.72 : 1;
  const ribbons: Ribbon[] = [
    { start: [-0.98, 0.3], first: [-0.62, -0.72], second: [0.04, 0.68], end: [0.97, -0.16], width: 4.8 },
    { start: [-0.88, -0.42], first: [-0.34, -0.04], second: [0.37, -0.82], end: [0.84, 0.56], width: 3.1 },
    { start: [-0.72, 0.74], first: [-0.2, 0.18], second: [0.4, 0.9], end: [0.94, 0.3], width: 2.2 },
  ];

  ribbons.forEach((ribbon, index) => {
    const wave = Math.sin(time * 0.00017 + index * 1.8);
    const nudge = pointer.x * (index + 1) * 0.012;
    const point = (value: [number, number], offset = 0): Point => ({
      x: x + (value[0] + nudge + offset) * radius,
      y: y + (value[1] + wave * (index + 1) * 0.018 + pointer.y * (index + 1) * 0.006) * radius,
    });
    const start = point(ribbon.start);
    const first = point(ribbon.first, -0.012);
    const second = point(ribbon.second, 0.012);
    const end = point(ribbon.end);
    const gradient = ctx.createLinearGradient(x - radius, y, x + radius, y);
    gradient.addColorStop(0, "rgba(255,255,255,0)");
    gradient.addColorStop(0.2, "rgba(255,248,235,0.18)");
    gradient.addColorStop(0.48, "rgba(255,255,255,0.7)");
    gradient.addColorStop(0.68, "rgba(235,179,141,0.34)");
    gradient.addColorStop(0.9, "rgba(255,255,255,0.14)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(first.x, first.y, second.x, second.y, end.x, end.y);
    ctx.lineCap = "round";
    ctx.strokeStyle = gradient;
    ctx.lineWidth = ribbon.width * scale;
    ctx.shadowColor = "rgba(196,98,45,0.3)";
    ctx.shadowBlur = compact ? 4 : 8;
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.lineWidth = compact ? 0.55 : 0.72;
    ctx.strokeStyle = "rgba(255,255,255,0.58)";
    ctx.stroke();
    ctx.restore();
  });
}
