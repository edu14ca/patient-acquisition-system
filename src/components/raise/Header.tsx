import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import raiseLogo from "@/assets/raise-logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problema", href: "/#problema" },
  { label: "Pilares", href: "/#pilares" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Resultados", href: "/#resultados" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

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
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="sm" className="h-10 px-5 hidden sm:inline-flex">
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Falar com a equipa no WhatsApp
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
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-2 py-2 text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" size="sm" className="mt-3">
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Falar com a equipa no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
