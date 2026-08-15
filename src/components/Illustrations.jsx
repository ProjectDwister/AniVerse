export const Illustrations = {
  dactarsahab: (
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="dsbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5ede0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#e8d5b7" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="dspaper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf7" />
          <stop offset="100%" stopColor="#f5ede0" />
        </linearGradient>
      </defs>

      {/* Warm background */}
      <rect width="520" height="300" fill="url(#dsbg)" />

      {/* Subtle grid lines like old paper */}
      {[0,1,2,3,4,5].map((i) =>
        `<line x1="0" y1="${50 * i}" x2="520" y2="${50 * i}" stroke="#8b5e3c" stroke-width="0.3" opacity="0.08"/>`
      )}
      <line x1="0" y1="50" x2="520" y2="50" stroke="#8b5e3c" strokeWidth="0.3" opacity="0.08" />
      <line x1="0" y1="100" x2="520" y2="100" stroke="#8b5e3c" strokeWidth="0.3" opacity="0.08" />
      <line x1="0" y1="150" x2="520" y2="150" stroke="#8b5e3c" strokeWidth="0.3" opacity="0.08" />
      <line x1="0" y1="200" x2="520" y2="200" stroke="#8b5e3c" strokeWidth="0.3" opacity="0.08" />
      <line x1="0" y1="250" x2="520" y2="250" stroke="#8b5e3c" strokeWidth="0.3" opacity="0.08" />

      {/* Medical certificate / degree parchment */}
      <rect x="60" y="40" width="180" height="220" rx="4" fill="url(#dspaper)" opacity="0.92" />
      <rect x="60" y="40" width="180" height="220" rx="4" fill="none" stroke="#8b5e3c" strokeWidth="1" opacity="0.30" />
      {/* Inner border of certificate */}
      <rect x="68" y="48" width="164" height="204" rx="2" fill="none" stroke="#8b5e3c" strokeWidth="0.5" opacity="0.20" />
      {/* Certificate seal circle */}
      <circle cx="150" cy="85" r="28" fill="none" stroke="#c4603a" strokeWidth="1" opacity="0.35" />
      <circle cx="150" cy="85" r="22" fill="none" stroke="#c4603a" strokeWidth="0.5" opacity="0.25" />
      <text x="150" y="90" fontFamily="Georgia, serif" fontSize="9" fill="#c4603a" opacity="0.55" textAnchor="middle">MBBS 1952</text>
      {/* Certificate text lines */}
      <rect x="80" y="125" width="140" height="3" rx="1.5" fill="#8b5e3c" opacity="0.18" />
      <rect x="90" y="135" width="120" height="2.5" rx="1" fill="#8b5e3c" opacity="0.14" />
      <rect x="80" y="145" width="140" height="2.5" rx="1" fill="#8b5e3c" opacity="0.12" />
      <rect x="85" y="155" width="130" height="2.5" rx="1" fill="#8b5e3c" opacity="0.10" />
      <rect x="80" y="168" width="140" height="2.5" rx="1" fill="#8b5e3c" opacity="0.10" />
      {/* Signature line */}
      <line x1="90" y1="230" x2="170" y2="230" stroke="#8b5e3c" strokeWidth="0.8" opacity="0.25" />
      <path d="M95 228 Q110 222 125 228 Q140 234 155 228" stroke="#8b5e3c" strokeWidth="1" fill="none" opacity="0.30" />

      {/* Stethoscope — draped elegantly over the certificate */}
      <path d="M210 60 Q240 55 260 80 Q280 105 270 140 Q260 170 240 175 Q220 180 215 165 Q210 150 220 145 Q230 140 235 150"
        stroke="#3a3460" strokeWidth="5" fill="none" opacity="0.55" strokeLinecap="round" />
      {/* Ear tips */}
      <circle cx="210" cy="60" r="5" fill="#3a3460" opacity="0.50" />
      <circle cx="240" cy="57" r="5" fill="#3a3460" opacity="0.50" />
      {/* Diaphragm */}
      <circle cx="235" cy="150" r="14" fill="#3a3460" opacity="0.35" />
      <circle cx="235" cy="150" r="10" fill="#3a3460" opacity="0.20" />

      {/* Tricolour freedom fighter ribbon */}
      <rect x="340" y="50" width="110" height="18" rx="3" fill="#FF9933" opacity="0.75" />
      <rect x="340" y="68" width="110" height="18" rx="0" fill="white" opacity="0.85" />
      <rect x="340" y="86" width="110" height="18" rx="0" fill="#138808" opacity="0.75" />
      {/* Ashoka chakra on ribbon */}
      <circle cx="395" cy="77" r="7" fill="none" stroke="#000080" strokeWidth="1" opacity="0.40" />
      {/* Medal/pin at top of ribbon */}
      <circle cx="395" cy="50" r="8" fill="#c4a050" opacity="0.70" />
      <circle cx="395" cy="50" r="5" fill="#e8c870" opacity="0.60" />
      {/* Small text on ribbon */}
      <text x="395" y="115" fontFamily="Georgia, serif" fontSize="7.5" fill="#3a3460" opacity="0.55" textAnchor="middle" letterSpacing="0.5">FREEDOM FIGHTER</text>

      {/* Five small figures — five children, silhouetted small at base */}
      {[390, 410, 430, 450, 470].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="235" r="5" fill="#8b5e3c" opacity="0.22" />
          <rect x={x - 4} y="240" width="8" height="14" rx="3" fill="#8b5e3c" opacity="0.18" />
        </g>
      ))}
      <ellipse cx="430" cy="270" rx="90" ry="12" fill="#8b5e3c" opacity="0.06" />

      {/* Warm ambient glow */}
      <ellipse cx="260" cy="295" rx="200" ry="22" fill="#c4603a" opacity="0.05" />
    </svg>
  ),
  hotel: (
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4603a" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#8b5e3c" stopOpacity="0.20" />
        </linearGradient>
        <linearGradient id="hwall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5e8d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e8d5b7" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Room background */}
      <rect width="520" height="300" fill="url(#hg)" />
      <rect x="0" y="0" width="520" height="300" fill="url(#hwall)" opacity="0.5" />

      {/* Floor line */}
      <line x1="0" y1="240" x2="520" y2="240" stroke="#8b5e3c" strokeWidth="0.5" opacity="0.25" />

      {/* Bed frame */}
      <rect x="80" y="155" width="260" height="80" rx="6" fill="#8b5e3c" opacity="0.22" />
      {/* Headboard */}
      <rect x="80" y="130" width="260" height="35" rx="8" fill="#8b5e3c" opacity="0.30" />
      {/* Mattress / sheet, tucked in violently tight */}
      <rect x="86" y="160" width="248" height="70" rx="4" fill="#f5ede0" opacity="0.85" />
      {/* Sheet tuck lines */}
      <line x1="86" y1="175" x2="334" y2="175" stroke="#c4603a" strokeWidth="0.6" opacity="0.20" strokeDasharray="4 6" />
      <line x1="86" y1="190" x2="334" y2="190" stroke="#c4603a" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 6" />

      {/* Pillows — many, absurdly many */}
      {/* Big decorative pillow */}
      <rect x="100" y="138" width="70" height="28" rx="14" fill="#f0e0cc" opacity="0.9" />
      <ellipse cx="135" cy="152" rx="28" ry="10" fill="#e8d0b8" opacity="0.4" />
      {/* Second pillow */}
      <rect x="178" y="138" width="60" height="28" rx="14" fill="#eedcc8" opacity="0.9" />
      {/* Tall judgey pillow */}
      <rect x="246" y="128" width="24" height="40" rx="12" fill="#e8d0b8" opacity="0.85" />
      <line x1="258" y1="128" x2="258" y2="168" stroke="#c4603a" strokeWidth="0.7" opacity="0.18" />
      {/* Small sofa-pillow on floor beside bed */}
      <ellipse cx="70" cy="232" rx="22" ry="14" fill="#f0e0cc" opacity="0.75" />
      <ellipse cx="350" cy="235" rx="18" ry="11" fill="#eedcc8" opacity="0.70" />

      {/* Nightstand */}
      <rect x="348" y="190" width="48" height="52" rx="4" fill="#8b5e3c" opacity="0.18" />
      {/* Coffee tray on nightstand */}
      <ellipse cx="372" cy="190" rx="22" ry="5" fill="#c4603a" opacity="0.22" />
      {/* Sad complimentary coffee cup */}
      <rect x="362" y="175" width="20" height="16" rx="4" fill="#f5ede0" opacity="0.90" />
      <ellipse cx="372" cy="175" rx="10" ry="3" fill="#8b5e3c" opacity="0.30" />
      {/* Tiny sachet beside cup */}
      <rect x="385" y="182" width="10" height="6" rx="2" fill="#c4603a" opacity="0.35" />

      {/* Slipper on lobby floor — white fluffy slipper, going where no slipper should */}
      <ellipse cx="450" cy="230" rx="26" ry="10" fill="#f5f5f5" opacity="0.85" />
      <ellipse cx="450" cy="225" rx="18" ry="7" fill="white" opacity="0.70" />
      {/* Mickey-boxers uncle, stick figure, confident */}
      <circle cx="455" cy="175" r="12" fill="#3a3460" opacity="0.30" />
      <rect x="448" y="188" width="14" height="22" rx="4" fill="#3a3460" opacity="0.22" />
      {/* Boxer shorts pattern dots */}
      <circle cx="451" cy="196" r="2" fill="#c4603a" opacity="0.40" />
      <circle cx="457" cy="201" r="2" fill="#c4603a" opacity="0.40" />
      <circle cx="452" cy="206" r="1.5" fill="#c4603a" opacity="0.35" />

      {/* Warm ambient glow at base */}
      <ellipse cx="210" cy="295" rx="180" ry="28" fill="#c4603a" opacity="0.06" />
    </svg>
  ),
  friendship: (
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4603a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3a3460" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="520" height="300" fill="url(#fg)" />

      {/* Fading dashed line connecting the two figures */}
      <line x1="160" y1="150" x2="360" y2="150" stroke="#c4603a" strokeWidth="1.5"
        strokeDasharray="6 8" opacity="0.4" />

      {/* Left figure */}
      <circle cx="130" cy="110" r="22" fill="#c4603a" opacity="0.7" />
      <rect x="108" y="135" width="44" height="60" rx="22" fill="#c4603a" opacity="0.6" />

      {/* Right figure — slightly faded, drifting away */}
      <circle cx="390" cy="110" r="22" fill="#3a3460" opacity="0.45" />
      <rect x="368" y="135" width="44" height="60" rx="22" fill="#3a3460" opacity="0.35" />

      {/* Speech / memory bubbles */}
      <circle cx="175" cy="85" r="8" fill="#f5ede0" opacity="0.5" />
      <circle cx="192" cy="72" r="5" fill="#f5ede0" opacity="0.35" />
      <circle cx="203" cy="63" r="3" fill="#f5ede0" opacity="0.2" />

      {/* Sunset horizon */}
      <ellipse cx="260" cy="285" rx="220" ry="40" fill="#c4603a" opacity="0.08" />
      <line x1="60" y1="245" x2="460" y2="245" stroke="#c4603a" strokeWidth="0.5" opacity="0.2" />
    </svg>
  ),
};
