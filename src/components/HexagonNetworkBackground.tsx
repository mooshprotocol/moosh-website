'use client';

export default function HexagonNetworkBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial gradient for fade effect */}
          <radialGradient id="fadeGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Hexagon grid */}
        <g opacity="0.15">
          {/* Row 1 */}
          <path d="M200 100 L260 130 L260 190 L200 220 L140 190 L140 130 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M320 100 L380 130 L380 190 L320 220 L260 190 L260 130 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M440 100 L500 130 L500 190 L440 220 L380 190 L380 130 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M560 100 L620 130 L620 190 L560 220 L500 190 L500 130 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M680 100 L740 130 L740 190 L680 220 L620 190 L620 130 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M800 100 L860 130 L860 190 L800 220 L740 190 L740 130 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M920 100 L980 130 L980 190 L920 220 L860 190 L860 130 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M1040 100 L1100 130 L1100 190 L1040 220 L980 190 L980 130 Z" stroke="#121212" strokeWidth="1" fill="none" />
          
          {/* Row 2 (offset) */}
          <path d="M140 190 L200 220 L200 280 L140 310 L80 280 L80 220 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M260 190 L320 220 L320 280 L260 310 L200 280 L200 220 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M380 190 L440 220 L440 280 L380 310 L320 280 L320 220 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M500 190 L560 220 L560 280 L500 310 L440 280 L440 220 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M620 190 L680 220 L680 280 L620 310 L560 280 L560 220 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M740 190 L800 220 L800 280 L740 310 L680 280 L680 220 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M860 190 L920 220 L920 280 L860 310 L800 280 L800 220 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M980 190 L1040 220 L1040 280 L980 310 L920 280 L920 220 Z" stroke="#121212" strokeWidth="1" fill="none" />
          
          {/* Row 3 */}
          <path d="M200 280 L260 310 L260 370 L200 400 L140 370 L140 310 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M320 280 L380 310 L380 370 L320 400 L260 370 L260 310 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M440 280 L500 310 L500 370 L440 400 L380 370 L380 310 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M560 280 L620 310 L620 370 L560 400 L500 370 L500 310 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M680 280 L740 310 L740 370 L680 400 L620 370 L620 310 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M800 280 L860 310 L860 370 L800 400 L740 370 L740 310 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M920 280 L980 310 L980 370 L920 400 L860 370 L860 310 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M1040 280 L1100 310 L1100 370 L1040 400 L980 370 L980 310 Z" stroke="#121212" strokeWidth="1" fill="none" />
          
          {/* Row 4 (offset) */}
          <path d="M140 370 L200 400 L200 460 L140 490 L80 460 L80 400 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M260 370 L320 400 L320 460 L260 490 L200 460 L200 400 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M380 370 L440 400 L440 460 L380 490 L320 460 L320 400 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M500 370 L560 400 L560 460 L500 490 L440 460 L440 400 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M620 370 L680 400 L680 460 L620 490 L560 460 L560 400 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M740 370 L800 400 L800 460 L740 490 L680 460 L680 400 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M860 370 L920 400 L920 460 L860 490 L800 460 L800 400 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M980 370 L1040 400 L1040 460 L980 490 L920 460 L920 400 Z" stroke="#121212" strokeWidth="1" fill="none" />
          
          {/* Row 5 */}
          <path d="M200 460 L260 490 L260 550 L200 580 L140 550 L140 490 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M320 460 L380 490 L380 550 L320 580 L260 550 L260 490 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M440 460 L500 490 L500 550 L440 580 L380 550 L380 490 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M560 460 L620 490 L620 550 L560 580 L500 550 L500 490 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M680 460 L740 490 L740 550 L680 580 L620 550 L620 490 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M800 460 L860 490 L860 550 L800 580 L740 550 L740 490 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M920 460 L980 490 L980 550 L920 580 L860 550 L860 490 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M1040 460 L1100 490 L1100 550 L1040 580 L980 550 L980 490 Z" stroke="#121212" strokeWidth="1" fill="none" />
          
          {/* Row 6 (offset) */}
          <path d="M140 550 L200 580 L200 640 L140 670 L80 640 L80 580 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M260 550 L320 580 L320 640 L260 670 L200 640 L200 580 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M380 550 L440 580 L440 640 L380 670 L320 640 L320 580 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M500 550 L560 580 L560 640 L500 670 L440 640 L440 580 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M620 550 L680 580 L680 640 L620 670 L560 640 L560 580 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M740 550 L800 580 L800 640 L740 670 L680 640 L680 580 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M860 550 L920 580 L920 640 L860 670 L800 640 L800 580 Z" stroke="#121212" strokeWidth="1" fill="none" />
          <path d="M980 550 L1040 580 L1040 640 L980 670 L920 640 L920 580 Z" stroke="#121212" strokeWidth="1" fill="none" />
        </g>
        
        {/* Green dots at some vertices */}
        <g opacity="0.08">
          <circle cx="200" cy="100" r="2" fill="#20F18E" />
          <circle cx="320" cy="100" r="2" fill="#20F18E" />
          <circle cx="440" cy="100" r="2" fill="#20F18E" />
          <circle cx="560" cy="100" r="2" fill="#20F18E" />
          <circle cx="680" cy="100" r="2" fill="#20F18E" />
          <circle cx="800" cy="100" r="2" fill="#20F18E" />
          <circle cx="920" cy="100" r="2" fill="#20F18E" />
          <circle cx="1040" cy="100" r="2" fill="#20F18E" />
          
          <circle cx="140" cy="190" r="2" fill="#20F18E" />
          <circle cx="260" cy="190" r="2" fill="#20F18E" />
          <circle cx="380" cy="190" r="2" fill="#20F18E" />
          <circle cx="500" cy="190" r="2" fill="#20F18E" />
          <circle cx="620" cy="190" r="2" fill="#20F18E" />
          <circle cx="740" cy="190" r="2" fill="#20F18E" />
          <circle cx="860" cy="190" r="2" fill="#20F18E" />
          <circle cx="980" cy="190" r="2" fill="#20F18E" />
          
          <circle cx="200" cy="280" r="2" fill="#20F18E" />
          <circle cx="320" cy="280" r="2" fill="#20F18E" />
          <circle cx="440" cy="280" r="2" fill="#20F18E" />
          <circle cx="560" cy="280" r="2" fill="#20F18E" />
          <circle cx="680" cy="280" r="2" fill="#20F18E" />
          <circle cx="800" cy="280" r="2" fill="#20F18E" />
          <circle cx="920" cy="280" r="2" fill="#20F18E" />
          <circle cx="1040" cy="280" r="2" fill="#20F18E" />
          
          <circle cx="140" cy="370" r="2" fill="#20F18E" />
          <circle cx="260" cy="370" r="2" fill="#20F18E" />
          <circle cx="380" cy="370" r="2" fill="#20F18E" />
          <circle cx="500" cy="370" r="2" fill="#20F18E" />
          <circle cx="620" cy="370" r="2" fill="#20F18E" />
          <circle cx="740" cy="370" r="2" fill="#20F18E" />
          <circle cx="860" cy="370" r="2" fill="#20F18E" />
          <circle cx="980" cy="370" r="2" fill="#20F18E" />
          
          <circle cx="200" cy="460" r="2" fill="#20F18E" />
          <circle cx="320" cy="460" r="2" fill="#20F18E" />
          <circle cx="440" cy="460" r="2" fill="#20F18E" />
          <circle cx="560" cy="460" r="2" fill="#20F18E" />
          <circle cx="680" cy="460" r="2" fill="#20F18E" />
          <circle cx="800" cy="460" r="2" fill="#20F18E" />
          <circle cx="920" cy="460" r="2" fill="#20F18E" />
          <circle cx="1040" cy="460" r="2" fill="#20F18E" />
          
          <circle cx="140" cy="550" r="2" fill="#20F18E" />
          <circle cx="260" cy="550" r="2" fill="#20F18E" />
          <circle cx="380" cy="550" r="2" fill="#20F18E" />
          <circle cx="500" cy="550" r="2" fill="#20F18E" />
          <circle cx="620" cy="550" r="2" fill="#20F18E" />
          <circle cx="740" cy="550" r="2" fill="#20F18E" />
          <circle cx="860" cy="550" r="2" fill="#20F18E" />
          <circle cx="980" cy="550" r="2" fill="#20F18E" />
        </g>
        
        {/* Apply fade gradient mask */}
        <rect
          width="100%"
          height="100%"
          fill="url(#fadeGradient)"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
