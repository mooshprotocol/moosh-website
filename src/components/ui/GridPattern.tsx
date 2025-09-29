'use client';

import { useEffect, useId, useMemo, useState } from 'react';
import { mergeClassNames } from '@/lib/classnames';

type HighlightPoint = {
  cx: number;
  cy: number;
  r?: number;
};

interface GridPatternProps {
  className?: string;
  /** Optional override for preset highlight dots (values are 0..1 percentages). */
  highlights?: HighlightPoint[];
}

const DEFAULT_HIGHLIGHTS: HighlightPoint[] = [
  { cx: 0.32, cy: 0.28, r: 2.1 },
  { cx: 0.68, cy: 0.34, r: 2.4 },
  { cx: 0.46, cy: 0.58, r: 1.9 },
  { cx: 0.58, cy: 0.72, r: 2.0 },
  { cx: 0.76, cy: 0.52, r: 1.8 },
];

function useResponsiveGridSize() {
  const [size, setSize] = useState(132);

  useEffect(() => {
    function update() {
      const width = window.innerWidth;
      let next = 132; // desktop baseline within 124–140px range
      if (width < 640) {
        next = 88; // mobile target within 80–96px range
      } else if (width < 1024) {
        next = 112; // tablet target within 104–120px range
      }
      setSize(next);
    }

    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  return size;
}

export default function GridPattern({ className, highlights = DEFAULT_HIGHLIGHTS }: GridPatternProps) {
  const patternSize = useResponsiveGridSize();
  const patternId = useId();
  const highlightNodes = useMemo(
    () =>
      highlights.map((point, index) => (
        <circle
          key={`${point.cx}-${point.cy}-${index}`}
          cx={`${Math.round(point.cx * 100)}%`}
          cy={`${Math.round(point.cy * 100)}%`}
          r={point.r ?? 1.2}
          fill="rgba(32, 241, 142, 0.12)"
        />
      )),
    [highlights],
  );

  return (
    <svg
      aria-hidden
      className={mergeClassNames('h-full w-full', className)}
    >
      <defs>
        <pattern
          id={patternId}
          width={patternSize}
          height={patternSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${patternSize} 0 L 0 0 0 ${patternSize}`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
            shapeRendering="crispEdges"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      {highlightNodes}
    </svg>
  );
}
