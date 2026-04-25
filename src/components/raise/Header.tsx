import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import raiseLogo from "@/assets/raise-logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const segments = [
  { label: "Clínicas", href: "/clinicas" },
  { label: "Restaurantes", href: "/restaurantes" },
  { label: "Lojas", href: "/lojas" },
  { label: "Serviços", href: "/servicos" },
  { label: "Educação", href: "/educacao" },
  { label: "Imobiliárias", href: "/imobiliarias" },
  { label: "Ginásios", href: "/gyms" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [segOpen, setSegOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container-tight h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src={raiseLogo}
            alt="Raise"
            className="w-9 h-9 object-contain transition-smooth group-hover:scale-105"
          />
          <span className="font-display font-bold text-lg tracking-tight">Raise</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="/#problema" className="hover:text-foreground transition-smooth">Problema</a>
          <a href="/#pilares" className="hover:text-foreground transition-smooth">Pilares</a>
          <a href="/#solucoes" className="hover:text-foreground transition-smooth">Soluções</a>
          <div
            className="relative"
            onMouseEnter={() => setSegOpen(true)}
            onMouseLeave={() => setSegOpen(false)}
          >
            <button className="hover:text-foreground transition-smooth">Segmentos</button>
            {segOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-xl bg-card border border-border shadow-elegant p-2">
                {segments.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block px-3 py-2 rounded-lg text-sm text-foreground/80 hover:text-foreground hover:bg-secondary transition-smooth"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/#faq" className="hover:text-foreground transition-smooth">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="sm" className="h-10 px-5 hidden sm:inline-flex">
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
          <button
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg border border-border"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-tight py-4 flex flex-col gap-1 text-sm">
            <a href="/#problema" className="px-2 py-2 text-foreground/80 hover:text-foreground">Problema</a>
            <a href="/#pilares" className="px-2 py-2 text-foreground/80 hover:text-foreground">Pilares</a>
            <a href="/#solucoes" className="px-2 py-2 text-foreground/80 hover:text-foreground">Soluções</a>
            <a href="/#faq" className="px-2 py-2 text-foreground/80 hover:text-foreground">FAQ</a>
            <p className="px-2 pt-3 pb-1 text-xs uppercase tracking-wider text-muted-foreground">Segmentos</p>
            {segments.map((s) => (
              <a key={s.href} href={s.href} className="px-2 py-2 text-foreground/80 hover:text-foreground">
                {s.label}
              </a>
            ))}
            <Button asChild variant="hero" size="sm" className="mt-3">
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
