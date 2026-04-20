import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container-tight h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-gradient-red shadow-glow-red flex items-center justify-center font-display font-bold text-primary-foreground">
            R
          </div>
          <span className="font-display font-bold text-lg tracking-tight">Raise</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition-smooth">Problema</a>
          <a href="#pilares" className="hover:text-foreground transition-smooth">Pilares</a>
          <a href="#solucoes" className="hover:text-foreground transition-smooth">Soluções</a>
          <a href="#caso" className="hover:text-foreground transition-smooth">Resultados</a>
        </nav>

        <Button asChild variant="hero" size="sm" className="h-10 px-5">
          <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
