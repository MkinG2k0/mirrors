"use client";

interface MirrorPreviewProps {
  width: number;
  height: number;
  shape: string;
  className?: string;
}

const MAX_DIM = 220;
const PADDING = 20;

export function MirrorPreview({ width, height, shape, className }: MirrorPreviewProps) {
  const ratio = Math.min(MAX_DIM / width, MAX_DIM / height, 1);
  const w = width * ratio;
  const h = height * ratio;
  const cx = (MAX_DIM + PADDING - w) / 2;
  const cy = (MAX_DIM + PADDING - h) / 2;

  return (
    <svg
      width={MAX_DIM + PADDING}
      height={MAX_DIM + PADDING}
      viewBox={`0 0 ${MAX_DIM + PADDING} ${MAX_DIM + PADDING}`}
      className={className}
    >
      <defs>
        <linearGradient id="mirrorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8edf2" />
          <stop offset="30%" stopColor="#c5d3e0" />
          <stop offset="50%" stopColor="#dce5ed" />
          <stop offset="70%" stopColor="#b8c9d9" />
          <stop offset="100%" stopColor="#d0dbe6" />
        </linearGradient>
        <linearGradient id="mirrorShine" x1="0%" y1="0%" x2="50%" y2="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id="mirrorShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.18)" />
        </filter>
      </defs>
      <g transform={`translate(${cx}, ${cy})`} filter="url(#mirrorShadow)">
        {shape === "rect" && (
          <>
            <rect
              x="0"
              y="0"
              width={w}
              height={h}
              rx="3"
              fill="url(#mirrorGrad)"
              stroke="#a0b0c0"
              strokeWidth="1.5"
            />
            <rect x="0" y="0" width={w} height={h} rx="3" fill="url(#mirrorShine)" />
          </>
        )}
        {shape === "round" && (
          <>
            <ellipse
              cx={w / 2}
              cy={h / 2}
              rx={w / 2}
              ry={h / 2}
              fill="url(#mirrorGrad)"
              stroke="#a0b0c0"
              strokeWidth="1.5"
            />
            <ellipse cx={w / 2} cy={h / 2} rx={w / 2} ry={h / 2} fill="url(#mirrorShine)" />
          </>
        )}
        {shape === "arch" && (
          <>
            <path
              d={`M 0 ${h} L 0 ${w / 2} A ${w / 2} ${w / 2} 0 0 1 ${w} ${w / 2} L ${w} ${h} Z`}
              fill="url(#mirrorGrad)"
              stroke="#a0b0c0"
              strokeWidth="1.5"
            />
            <path
              d={`M 0 ${h} L 0 ${w / 2} A ${w / 2} ${w / 2} 0 0 1 ${w} ${w / 2} L ${w} ${h} Z`}
              fill="url(#mirrorShine)"
            />
          </>
        )}
        <text
          x={w / 2}
          y={h / 2 - 6}
          textAnchor="middle"
          fill="#5a7088"
          fontSize="13"
          fontFamily="inherit"
          fontWeight="600"
        >
          {width} × {height}
        </text>
        <text
          x={w / 2}
          y={h / 2 + 12}
          textAnchor="middle"
          fill="#7a95ab"
          fontSize="11"
          fontFamily="inherit"
        >
          см
        </text>
      </g>
    </svg>
  );
}
