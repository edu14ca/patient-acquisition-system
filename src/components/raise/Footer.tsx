import { buildWhatsAppLink } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container-tight grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-red flex items-center justify-center font-display font-bold text-primary-foreground">
              R
            </div>
            <span className="font-display font-bold text-lg">Raise</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Consultoria de crescimento para empresas em Angola. Aquisição, Engajamento, Monetização, Retenção.
          </p>
        </div>

        <div>
          <p className="font-display font-semibold mb-3">Navegar</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#problema" className="hover:text-foreground transition-smooth">Problema</a></li>
            <li><a href="#pilares" className="hover:text-foreground transition-smooth">4 Pilares</a></li>
            <li><a href="#solucoes" className="hover:text-foreground transition-smooth">Soluções</a></li>
            <li><a href="#caso" className="hover:text-foreground transition-smooth">Resultados</a></li>
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold mb-3">Contacto</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-smooth">
                WhatsApp · +244 939 636 042
              </a>
            </li>
            <li>Luanda, Angola</li>
          </ul>
        </div>
      </div>

      <div className="container-tight mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Raise · Todos os direitos reservados</p>
        <p>Feito com foco em facturamento.</p>
      </div>
    </footer>
  );
};

export default Footer;
