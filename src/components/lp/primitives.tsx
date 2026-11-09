import { Fragment, type ReactNode } from "react";

/** Título que sobe palavra a palavra. */
export const Words = ({ text, className = "" }: { text: string; className?: string }) => (
  <span className={`lp-words ${className}`}>
    {text.split(" ").map((w, i) => (
      <Fragment key={i}>
        <span className="w">
          <span style={{ ["--i" as string]: i }}>{w}</span>
        </span>{" "}
      </Fragment>
    ))}
  </span>
);

/** Botão vermelho com texto que rola no hover. Leva sempre ao formulário. */
export const RollButton = ({ children, href = "#formulario", className = "" }: { children: string; href?: string; className?: string }) => (
  <a href={href} className={`lp-btn ${className}`}>
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  </a>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow flex items-center gap-2">
    <span className="inline-block h-1.5 w-1.5 bg-primary" aria-hidden />
    {children}
  </p>
);

/** Fitas diagonais em movimento (vermelha e branca). */
export const Tapes = ({ red, white }: { red: string[]; white: string[] }) => {
  const row = (items: string[]) => {
    const seq = [...items, ...items, ...items, ...items];
    return (
      <div className="lp-tape__track">
        {[0, 1].map((k) => (
          <span key={k} className="flex shrink-0" aria-hidden={k === 1}>
            {seq.map((t, i) => (
              <span key={i} className="px-6">
                {t} <span className="opacity-60">✕</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    );
  };
  return (
    <div className="lp-tapes" role="presentation">
      <div className="lp-tape lp-tape--white">{row(white)}</div>
      <div className="lp-tape lp-tape--red">{row(red)}</div>
    </div>
  );
};

/** Balde furado com notas a escapar. Desenho em código (substituível pelo criativo original). */
export const Balde = ({ className = "" }: { className?: string }) => {
  const drops = [
    { x: 150, d: "0s", r: "25deg" },
    { x: 190, d: "0.8s", r: "-30deg" },
    { x: 230, d: "1.5s", r: "40deg" },
    { x: 170, d: "1.9s", r: "-15deg" },
  ];
  return (
    <svg viewBox="0 0 380 420" className={className} role="img" aria-label="Balde furado com dinheiro a escapar">
      <defs>
        <linearGradient id="bd" x1="0" x2="1">
          <stop offset="0" stopColor="#1c1c1c" />
          <stop offset="0.5" stopColor="#2a2a2a" />
          <stop offset="1" stopColor="#161616" />
        </linearGradient>
      </defs>
      {/* asa */}
      <path d="M95 92 C95 10, 285 10, 285 92" fill="none" stroke="#3a3a3a" strokeWidth="6" />
      {/* notas no topo */}
      <g>
        <rect x="120" y="70" width="70" height="34" rx="3" fill="#e9e9e9" transform="rotate(-12 155 87)" />
        <rect x="185" y="66" width="70" height="34" rx="3" fill="#d4d4d4" transform="rotate(9 220 83)" />
        <rect x="150" y="60" width="70" height="34" rx="3" fill="#f4f4f4" transform="rotate(-2 185 77)" />
        <circle cx="185" cy="77" r="8" fill="none" stroke="#9a9a9a" strokeWidth="2" />
      </g>
      {/* corpo */}
      <path d="M80 92 H300 L272 262 H108 Z" fill="url(#bd)" stroke="#3a3a3a" strokeWidth="2" />
      <ellipse cx="190" cy="92" rx="110" ry="14" fill="#111" stroke="#3a3a3a" strokeWidth="2" />
      <path d="M90 140 H290" stroke="#333" strokeWidth="2" />
      {/* furos */}
      {drops.map((d, i) => (
        <circle key={i} cx={d.x} cy={252} r={6} fill="#050505" stroke="hsl(357 91% 48%)" strokeWidth="2" />
      ))}
      {/* notas a cair */}
      {drops.map((d, i) => (
        <g key={`n${i}`} className="lp-drop" style={{ animationDelay: d.d, ["--r" as string]: d.r }}>
          <rect x={d.x - 16} y={258} width="32" height="16" rx="2" fill={i % 2 ? "#e9e9e9" : "hsl(357 91% 48%)"} />
        </g>
      ))}
      {/* poça */}
      <ellipse cx="190" cy="405" rx="120" ry="8" fill="hsl(357 91% 48%)" opacity="0.18" />
    </svg>
  );
};
