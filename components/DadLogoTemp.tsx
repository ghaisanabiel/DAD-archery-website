interface DadLogoProps {
  size?: number;
  className?: string;
}

// Coded recreation of the DAD Archery shield emblem — crossed arrows,
// gold-bordered shield, red/gold target rings, ribbon banner with
// curved "ARCHERY" / "SUPPLY" text. Built as SVG instead of a raster
// PNG so it stays crisp at any size and can inherit theme colors.
export default function DadLogo({ size = 64, className = '' }: DadLogoProps) {
  return (
    <svg
      viewBox="0 0 200 220"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="DAD Archery"
    >
      <defs>
        <path id="archTop" d="M 48 62 A 52 52 0 0 1 152 62" />
        <path id="archBottom" d="M 55 168 A 48 48 0 0 0 145 168" />
        <linearGradient id="shaftGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4D775" />
          <stop offset="50%" stopColor="#D9A61C" />
          <stop offset="100%" stopColor="#9C7412" />
        </linearGradient>
      </defs>

      {/* Crossed arrows behind the shield */}
      <g stroke="url(#shaftGold)" strokeWidth="5" strokeLinecap="round">
        <line x1="18" y1="35" x2="150" y2="200" />
        <line x1="182" y1="35" x2="50" y2="200" />
      </g>
      {/* Arrowheads */}
      <polygon points="12,22 30,30 20,42" fill="#8A8F98" />
      <polygon points="188,22 170,30 180,42" fill="#8A8F98" />
      {/* Fletching */}
      <polygon points="144,190 158,204 150,210 138,198" fill="#C1272D" />
      <polygon points="56,190 42,204 50,210 62,198" fill="#C1272D" />

      {/* Shield outline */}
      <path
        d="M100 8 L172 28 V110 C172 158 142 190 100 212 C58 190 28 158 28 110 V28 Z"
        fill="#140F0D"
        stroke="url(#shaftGold)"
        strokeWidth="7"
      />
      <path
        d="M100 20 L160 37 V108 C160 148 136 175 100 196 C64 175 40 148 40 108 V37 Z"
        fill="#1C1310"
        stroke="#D9A61C"
        strokeWidth="1.5"
      />

      {/* Stars */}
      {[-46, -23, 0, 23, 46].map((dx) => (
        <text
          key={dx}
          x={100 + dx}
          y={46}
          fontSize="10"
          fill="#D9A61C"
          textAnchor="middle"
        >
          ★
        </text>
      ))}
      {[-30, 0, 30].map((dx) => (
        <text
          key={dx}
          x={100 + dx}
          y={186}
          fontSize="9"
          fill="#D9A61C"
          textAnchor="middle"
        >
          ★
        </text>
      ))}

      {/* Curved ARCHERY / SUPPLY labels */}
      <text fontSize="15" fill="#D9A61C" fontWeight="700" letterSpacing="2">
        <textPath href="#archTop" startOffset="50%" textAnchor="middle">
          ARCHERY
        </textPath>
      </text>
      <text fontSize="13" fill="#D9A61C" fontWeight="700" letterSpacing="2">
        <textPath href="#archBottom" startOffset="50%" textAnchor="middle">
          SUPPLY
        </textPath>
      </text>

      {/* Target rings */}
      <circle cx="100" cy="112" r="34" fill="#C1272D" />
      <circle cx="100" cy="112" r="24" fill="#D9A61C" />
      <circle cx="100" cy="112" r="14" fill="#C1272D" />

      {/* Banner */}
      <path d="M40 104 L160 104 L172 118 L160 132 L40 132 L28 118 Z" fill="#D9A61C" stroke="#140F0D" strokeWidth="2" />
      <text
        x="100"
        y="124"
        fontSize="22"
        fontWeight="800"
        fill="#140F0D"
        textAnchor="middle"
        letterSpacing="1"
      >
        D.A.D
      </text>
    </svg>
  );
}