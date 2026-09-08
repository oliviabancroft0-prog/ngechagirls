import React from 'react';

interface SchoolBadgeProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const SchoolBadge: React.FC<SchoolBadgeProps> = ({
  size = 'md',
  className = '',
  showText = false,
}) => {
  // Proportions matching the official logo from BSCrU.png (~2.2:1 aspect ratio)
  const sizeClasses = {
    sm: 'w-24 h-11 sm:w-28 sm:h-13',
    md: 'w-32 h-15 sm:w-40 sm:h-18',
    lg: 'w-48 h-22 sm:w-56 sm:h-26',
    xl: 'w-64 h-30 sm:w-72 sm:h-34',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} shrink-0 select-none`}>
        <svg
          viewBox="0 0 320 145"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Official Ngecha Girls High School Crest - Dream Persist and Succeed"
        >
          <defs>
            {/* Arched path for the top yellow banner text */}
            <path
              id="topBannerTextPath"
              d="M 28,32 Q 160,8 292,32"
              fill="none"
            />

            {/* Arched path for bottom ribbon text */}
            <path
              id="bottomRibbonTextPath"
              d="M 95,138 Q 160,144 225,138"
              fill="none"
            />

            {/* Filter for subtle crisp shadow */}
            <filter id="badgeShadowFilter" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* ================= 1. TOP ARCHED YELLOW BANNER ================= */}
          <g id="top-banner">
            {/* Top banner background ribbon */}
            <path
              d="M 20,35 Q 160,5 300,35 L 290,14 Q 160,-12 30,14 Z"
              fill="#FFE812"
              stroke="#000000"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Left fishtail notch */}
            <path
              d="M 20,35 L 30,14 L 14,24 Z"
              fill="#E5C700"
              stroke="#000000"
              strokeWidth="1.4"
            />
            {/* Right fishtail notch */}
            <path
              d="M 300,35 L 290,14 L 306,24 Z"
              fill="#E5C700"
              stroke="#000000"
              strokeWidth="1.4"
            />

            {/* Banner Text: NGECHA GIRLS HIGH SCHOOL */}
            <text
              fill="#000000"
              fontSize="14.5"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
              letterSpacing="2.2"
              textAnchor="middle"
            >
              <textPath href="#topBannerTextPath" startOffset="50%">
                NGECHA GIRLS HIGH SCHOOL
              </textPath>
            </text>
          </g>

          {/* ================= 2. MAIN SHIELD / COAT OF ARMS ================= */}
          <g id="shield">
            {/* Outer Green Border */}
            <path
              d="M 28,40 Q 160,62 292,40 Q 284,98 160,130 Q 36,98 28,40 Z"
              fill="#0A5C36"
              stroke="#000000"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Inner Gold / Yellow Field */}
            <path
              d="M 34,44 Q 160,65 286,44 Q 278,94 160,123 Q 42,94 34,44 Z"
              fill="#FFEB3B"
              stroke="#000000"
              strokeWidth="1.4"
            />

            {/* Subtle inner shield accent line */}
            <path
              d="M 38,47 Q 160,67 282,47"
              fill="none"
              stroke="#0A5C36"
              strokeWidth="1"
              opacity="0.4"
            />
          </g>

          {/* ================= 3. INSIDE SHIELD ELEMENTS ================= */}
          {/* CROSSED WRITING IMPLEMENTS (Behind the open book) */}
          <g id="crossed-pens">
            {/* Diagonal Red Pencil (Top-right to Bottom-left) */}
            <g transform="rotate(-32 160 82)">
              {/* Pencil body (red) */}
              <rect x="156" y="52" width="9" height="52" fill="#D32F2F" stroke="#000000" strokeWidth="1" />
              {/* Sharpened wood cone (beige) */}
              <polygon points="156,104 165,104 160.5,116" fill="#FFE0B2" stroke="#000000" strokeWidth="1" />
              {/* Graphite/lead tip (black) */}
              <polygon points="159,112 162,112 160.5,116" fill="#1A1A1A" />
              {/* Top eraser / ferrule */}
              <rect x="156" y="48" width="9" height="4" fill="#B0BEC5" stroke="#000000" strokeWidth="0.8" />
            </g>

            {/* Diagonal Pen / Ruler (Top-left to Bottom-right) */}
            <g transform="rotate(32 160 82)">
              {/* Pen barrel (black and gold/red) */}
              <rect x="156" y="52" width="8" height="50" fill="#1A1A1A" stroke="#000000" strokeWidth="1" />
              {/* Pen nib cone */}
              <polygon points="156,102 164,102 160,114" fill="#D4AF37" stroke="#000000" strokeWidth="0.9" />
              {/* Writing tip */}
              <polygon points="159,110 161,110 160,114" fill="#000000" />
            </g>
          </g>

          {/* OPEN BOOK IN THE CENTER */}
          <g id="open-book">
            {/* Book spine / shadow */}
            <path
              d="M 160,63 L 160,103"
              stroke="#000000"
              strokeWidth="2.4"
            />

            {/* Left Page (White with curved top & bottom) */}
            <path
              d="M 160,64 Q 135,59 110,65 L 110,102 Q 135,97 160,102 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Left page text lines indication */}
            <line x1="116" y1="73" x2="152" y2="71" stroke="#B0BEC5" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="116" y1="80" x2="152" y2="78" stroke="#B0BEC5" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="116" y1="87" x2="152" y2="85" stroke="#B0BEC5" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="116" y1="94" x2="148" y2="92" stroke="#B0BEC5" strokeWidth="1.2" strokeLinecap="round" />

            {/* Right Page (White with curved top & bottom) */}
            <path
              d="M 160,64 Q 185,59 210,65 L 210,102 Q 185,97 160,102 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Right page text lines indication */}
            <line x1="168" y1="71" x2="204" y2="73" stroke="#B0BEC5" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="168" y1="78" x2="204" y2="80" stroke="#B0BEC5" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="168" y1="85" x2="204" y2="87" stroke="#B0BEC5" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="172" y1="92" x2="204" y2="94" stroke="#B0BEC5" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* STUDENT GIRL ON LEFT (Standing in green school uniform holding book) */}
          <g id="left-student">
            {/* Head / Hair */}
            <circle cx="78" cy="62" r="5" fill="#3E2723" />
            {/* Face */}
            <circle cx="78" cy="63" r="3.6" fill="#8D6E63" />
            {/* Hair bun */}
            <circle cx="76" cy="60" r="2.2" fill="#3E2723" />

            {/* White collar & black necktie */}
            <polygon points="76,66 80,66 78,71" fill="#FFFFFF" />
            <line x1="78" y1="67" x2="78" y2="72" stroke="#000000" strokeWidth="1.2" />

            {/* Green School Sweater / Blazer */}
            <path
              d="M 70,68 L 86,68 L 89,84 L 67,84 Z"
              fill="#0A5C36"
              stroke="#000000"
              strokeWidth="1.2"
            />
            {/* Left arm resting downwards */}
            <path d="M 68,69 L 65,83" stroke="#0A5C36" strokeWidth="3" strokeLinecap="round" />
            {/* Right arm extended holding the open book */}
            <path
              d="M 85,70 Q 98,72 109,76"
              fill="none"
              stroke="#0A5C36"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Right hand touching the book */}
            <circle cx="110" cy="76" r="2" fill="#8D6E63" />

            {/* Green Pleated School Skirt */}
            <path
              d="M 66,84 L 90,84 L 94,98 L 62,98 Z"
              fill="#0A5C36"
              stroke="#000000"
              strokeWidth="1.2"
            />
            {/* Pleat creases */}
            <line x1="72" y1="84" x2="70" y2="98" stroke="#063E24" strokeWidth="1" />
            <line x1="78" y1="84" x2="78" y2="98" stroke="#063E24" strokeWidth="1" />
            <line x1="84" y1="84" x2="86" y2="98" stroke="#063E24" strokeWidth="1" />

            {/* Legs with white socks */}
            <line x1="72" y1="98" x2="72" y2="108" stroke="#8D6E63" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="70.5" y="102" width="3" height="6" fill="#FFFFFF" stroke="#000000" strokeWidth="0.6" />
            <ellipse cx="72" cy="109" rx="3.5" ry="1.8" fill="#1A1A1A" />

            <line x1="84" y1="98" x2="84" y2="108" stroke="#8D6E63" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="82.5" y="102" width="3" height="6" fill="#FFFFFF" stroke="#000000" strokeWidth="0.6" />
            <ellipse cx="84" cy="109" rx="3.5" ry="1.8" fill="#1A1A1A" />
          </g>

          {/* STUDENT GIRL ON RIGHT (Standing in green school uniform holding book) */}
          <g id="right-student">
            {/* Head / Hair */}
            <circle cx="242" cy="62" r="5" fill="#3E2723" />
            {/* Face */}
            <circle cx="242" cy="63" r="3.6" fill="#8D6E63" />
            {/* Hair bun */}
            <circle cx="244" cy="60" r="2.2" fill="#3E2723" />

            {/* White collar & black necktie */}
            <polygon points="240,66 244,66 242,71" fill="#FFFFFF" />
            <line x1="242" y1="67" x2="242" y2="72" stroke="#000000" strokeWidth="1.2" />

            {/* Green School Sweater / Blazer */}
            <path
              d="M 234,68 L 250,68 L 253,84 L 231,84 Z"
              fill="#0A5C36"
              stroke="#000000"
              strokeWidth="1.2"
            />
            {/* Left arm extended holding the open book */}
            <path
              d="M 235,70 Q 222,72 211,76"
              fill="none"
              stroke="#0A5C36"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Left hand touching the book */}
            <circle cx="210" cy="76" r="2" fill="#8D6E63" />

            {/* Right arm resting downwards */}
            <path d="M 252,69 L 255,83" stroke="#0A5C36" strokeWidth="3" strokeLinecap="round" />

            {/* Green Pleated School Skirt */}
            <path
              d="M 230,84 L 254,84 L 258,98 L 226,98 Z"
              fill="#0A5C36"
              stroke="#000000"
              strokeWidth="1.2"
            />
            {/* Pleat creases */}
            <line x1="236" y1="84" x2="234" y2="98" stroke="#063E24" strokeWidth="1" />
            <line x1="242" y1="84" x2="242" y2="98" stroke="#063E24" strokeWidth="1" />
            <line x1="248" y1="84" x2="250" y2="98" stroke="#063E24" strokeWidth="1" />

            {/* Legs with white socks */}
            <line x1="236" y1="98" x2="236" y2="108" stroke="#8D6E63" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="234.5" y="102" width="3" height="6" fill="#FFFFFF" stroke="#000000" strokeWidth="0.6" />
            <ellipse cx="236" cy="109" rx="3.5" ry="1.8" fill="#1A1A1A" />

            <line x1="248" y1="98" x2="248" y2="108" stroke="#8D6E63" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="246.5" y="102" width="3" height="6" fill="#FFFFFF" stroke="#000000" strokeWidth="0.6" />
            <ellipse cx="248" cy="109" rx="3.5" ry="1.8" fill="#1A1A1A" />
          </g>

          {/* ================= 4. BOTTOM MOTTO RIBBON ================= */}
          <g id="bottom-motto-ribbon">
            {/* LEFT BANNER SECTION: DREAM */}
            <path
              d="M 18,124 Q 58,138 98,132 L 98,144 Q 58,148 18,136 Z"
              fill="#FFE812"
              stroke="#000000"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Left fishtail notch */}
            <path
              d="M 18,124 L 18,136 L 26,130 Z"
              fill="#E5C700"
              stroke="#000000"
              strokeWidth="1.2"
            />
            <text
              x="58"
              y="135"
              fill="#000000"
              fontSize="10"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.5"
              textAnchor="middle"
              transform="rotate(6 58 135)"
            >
              DREAM
            </text>

            {/* CENTER BANNER SECTION: PERSIST AND */}
            <path
              d="M 90,132 Q 160,146 230,132 L 230,145 Q 160,158 90,144 Z"
              fill="#FFE812"
              stroke="#000000"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Fold transitions */}
            <polygon points="90,132 98,132 90,144" fill="#CBB200" stroke="#000000" strokeWidth="0.8" />
            <polygon points="230,132 222,132 230,145" fill="#CBB200" stroke="#000000" strokeWidth="0.8" />

            <text
              fill="#000000"
              fontSize="10"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.8"
              textAnchor="middle"
            >
              <textPath href="#bottomRibbonTextPath" startOffset="50%">
                PERSIST AND
              </textPath>
            </text>

            {/* RIGHT BANNER SECTION: SUCCEED */}
            <path
              d="M 222,132 Q 262,138 302,124 L 302,136 Q 262,148 222,144 Z"
              fill="#FFE812"
              stroke="#000000"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Right fishtail notch */}
            <path
              d="M 302,124 L 302,136 L 294,130 Z"
              fill="#E5C700"
              stroke="#000000"
              strokeWidth="1.2"
            />
            <text
              x="262"
              y="135"
              fill="#000000"
              fontSize="10"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.5"
              textAnchor="middle"
              transform="rotate(-6 262 135)"
            >
              SUCCEED
            </text>
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-gray-900 tracking-tight text-sm sm:text-base leading-tight font-serif-heading">
            Ngecha Girls High School
          </span>
          <span className="text-[11px] font-bold text-[#0A5C36] uppercase tracking-wider">
            Dream, Persist and Succeed
          </span>
        </div>
      )}
    </div>
  );
};
