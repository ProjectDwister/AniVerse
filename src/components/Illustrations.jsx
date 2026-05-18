export const Illustrations = {
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
