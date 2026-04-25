import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Brand = {
  id: string;
  name: string;
  category: string;
  summary: string;
  initials: string;
};

const brands: Brand[] = [
  {
    id: "michael-machado",
    name: "Michael Machado",
    category: "Humor / Marca pessoal",
    summary:
      "A Raise apoiou campanhas no início da trajectória digital de Michael Machado, ajudando a impulsionar a sua presença e alcance através de anúncios pagos.",
    initials: "MM",
  },
  {
    id: "linhas-douro",
    name: "Linhas D’Ouro",
    category: "Confecção / Uniformes",
    summary:
      "A Raise apoiou a marca com gestão de tráfego e comunicação digital para aumentar procura, visibilidade e oportunidades comerciais.",
    initials: "LD",
  },
  {
    id: "happy-kitchen",
    name: "Happy Kitchen",
    category: "Food service / Delivery",
    summary:
      "A Raise estruturou estratégias de aquisição, conteúdo e recorrência para aumentar pedidos dos kitutes e fortalecer os serviços de buffet e personal chef.",
    initials: "HK",
  },
];

const SocialProof = () => {
  const [active, setActive] = useState<Brand | null>(null);

  return (
    <section
      id="resultados"
      className="py-24 md:py-32 relative overflow-hidden border-y border-border"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-tight relative">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Prova social
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Marcas que já <span className="text-primary italic">confiaram na Raise</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Resultados reais, construídos com estratégia, execução e acompanhamento próximo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(b)}
              className="group rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-smooth p-10 flex flex-col items-center justify-center text-center min-h-[220px] animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
              aria-label={`Ver case de ${b.name}`}
            >
              <div className="w-20 h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center font-display font-bold text-2xl text-foreground group-hover:scale-105 group-hover:border-primary/40 transition-smooth">
                {b.initials}
              </div>
              <p className="mt-5 font-display font-semibold text-lg leading-tight">
                {b.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {b.category}
              </p>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="bg-card border-border">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center font-display font-bold text-foreground">
                    {active.initials}
                  </div>
                  <div className="text-left">
                    <DialogTitle className="font-display text-2xl">
                      {active.name}
                    </DialogTitle>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {active.category}
                    </p>
                  </div>
                </div>
                <DialogDescription className="text-base text-foreground/80 leading-relaxed pt-2">
                  {active.summary}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <Button asChild variant="hero" className="w-full">
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com a equipa no WhatsApp
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SocialProof;
