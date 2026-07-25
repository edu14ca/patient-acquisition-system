import { buildWhatsAppLink } from "@/lib/whatsapp";
import raiseLogo from "@/assets/raise-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container-tight grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2">
            <img src={raiseLogo} alt="Raise" className="w-9 h-9 object-contain" />
            <span className="font-display font-bold text-lg">Raise</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Raise — Assessoria de Marketing e Growth em Angola. Estratégia, execução e responsabilidade pelo facturamento.
          </p>
        </div>

        <div>
          <p className="font-display font-semibold mb-3">Navegar</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#problema" className="hover:text-foreground transition-smooth">Problema</a></li>
            <li><a href="/#pilares" className="hover:text-foreground transition-smooth">Pilares</a></li>
            <li><a href="/#resultados" className="hover:text-foreground transition-smooth">Resultados</a></li>
            <li><a href="/#diagnostico-form" className="hover:text-foreground transition-smooth">Diagnóstico</a></li>

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
        <p>© {new Date().getFullYear()} Raise — Assessoria de Marketing e Growth em Angola. Todos os direitos reservados.</p>
        <p>Responsáveis pelo seu crescimento.</p>
      </div>
    </footer>
  );
};

export default Footer;
