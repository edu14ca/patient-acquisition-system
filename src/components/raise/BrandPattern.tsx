import markShape from "@/assets/mark-shape.png";

/** Símbolo da Raise em grande, como padrão de fundo (como nas aplicações do manual). Decorativo. */
const BrandPattern = ({ className = "", opacity = 0.05 }: { className?: string; opacity?: number }) => (
  <img
    src={markShape}
    alt=""
    aria-hidden
    loading="lazy"
    className={`pointer-events-none select-none absolute ${className}`}
    style={{ opacity }}
  />
);

export default BrandPattern;
