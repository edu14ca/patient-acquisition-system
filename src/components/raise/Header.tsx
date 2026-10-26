import { Button } from "@/components/ui/button";
import raiseLogo from "@/assets/raise-logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Modelos", href: "/#modelos" },
  { label: "Clientes", href: "/#resultados" },
  { label: "Clínicas", href: "/clinicas" },

];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-tight h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src={raiseLogo}
            alt="Raise"
            className="w-9 h-9 object-contain transition-smooth group-hover:scale-105"
          />
          <span className="font-display font-medium text-lg tracking-tight">Raise</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-foreground/90 hover:bg-secondary transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="/#faq" className="hidden lg:inline text-sm font-medium text-foreground/90 hover:text-foreground">FAQ</a>
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href="/#diagnostico-form">
              Fazer diagnóstico
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
              <a href="/#diagnostico-form">
                Fazer diagnóstico
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
