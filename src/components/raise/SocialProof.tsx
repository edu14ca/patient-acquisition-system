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

import logoMichael from "@/assets/logo-michael-machado.jpg";
import logoLinhas from "@/assets/logo-linhas-douro.jpg";
import logoHappy from "@/assets/logo-happy-kitchen.jpg";
import logoFercal from "@/assets/logo-fercal.jpg";

import proofMichael1 from "@/assets/proof-michael-1.jpg";
import proofMichael2 from "@/assets/proof-michael-2.jpg";
import proofMichael3 from "@/assets/proof-michael-3.jpg";
import proofMichaelIg from "@/assets/proof-michael-ig.jpg";
import proofLinhas from "@/assets/proof-linhas-douro.jpg";
import proofHappy from "@/assets/proof-happy-kitchen.jpg";

type Brand = {
  id: string;
  name: string;
  category: string;
  logo: string;
  logoFit?: "contain" | "cover";
  logoBg?: "light" | "dark";
  summary: string;
  proofs: { src: string; caption: string }[];
};

const brands: Brand[] = [
  {
    id: "michael-machado",
    name: "Michael Machado",
    category: "Humor / Marca pessoal",
    logo: logoMichael,
    logoFit: "contain",
    logoBg: "light",
    summary:
      "A Raise apoiou campanhas no início da trajectória digital de Michael Machado, ajudando a impulsionar a sua presença e alcance através de anúncios pagos. Hoje, é uma das maiores referências de humor digital em Angola, com mais de 118 mil seguidores.",
    proofs: [
      { src: proofMichaelIg, caption: "Perfil actual: 118K seguidores no Instagram." },
      { src: proofMichael1, caption: "Pedido de campanha enviado directamente à equipa." },
      { src: proofMichael2, caption: "Coordenação de publicações patrocinadas." },
      { src: proofMichael3, caption: "Acompanhamento de novos projectos digitais." },
    ],
  },
  {
    id: "linhas-douro",
    name: "Linhas D’Ouro",
    category: "Confecção / Uniformes",
    logo: logoLinhas,
    logoFit: "cover",
    logoBg: "dark",
    summary:
      "A Raise apoiou a Linhas D’Ouro com gestão de tráfego e comunicação digital para aumentar procura, visibilidade e oportunidades comerciais. A marca consolidou-se como referência em bordados, uniformes e parcerias no Lubango.",
    proofs: [
      { src: proofLinhas, caption: "Crescimento de presença digital no Instagram." },
    ],
  },
  {
    id: "happy-kitchen",
    name: "Happy Kitchen",
    category: "Food service / Delivery",
    logo: logoHappy,
    logoFit: "contain",
    logoBg: "light",
    summary:
      "A Raise estruturou estratégias de aquisição, conteúdo e recorrência para aumentar pedidos dos kitutes e fortalecer os serviços de buffet e personal chef da Happy Kitchen.",
    proofs: [
      { src: proofHappy, caption: "Conversa com cliente a confirmar recorrência semanal de pedidos." },
    ],
  },
  {
    id: "fercal",
    name: "Complexo Escolar Fercal",
    category: "Educação / Lubango",
    logo: logoFercal,
    logoFit: "contain",
    logoBg: "light",
    summary:
      "A Raise apoia o Complexo Escolar Privado Fercal, no Lubango, com estratégia de comunicação e captação de novos alunos, reforçando a presença institucional e a confiança das famílias.",
    proofs: [],
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(b)}
              className="group rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-smooth p-6 flex flex-col items-center justify-between text-center min-h-[260px] animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
              aria-label={`Ver case de ${b.name}`}
            >
              <div
                className={`w-full aspect-square rounded-xl border border-border flex items-center justify-center overflow-hidden transition-smooth group-hover:border-primary/40 ${
                  b.logoBg === "light" ? "bg-white" : "bg-secondary"
                }`}
              >
                <img
                  src={b.logo}
                  alt={`Logótipo ${b.name}`}
                  loading="lazy"
                  className={`w-full h-full ${
                    b.logoFit === "cover" ? "object-cover" : "object-contain p-4"
                  } group-hover:scale-105 transition-smooth`}
                />
              </div>
              <div className="mt-5">
                <p className="font-display font-semibold text-lg leading-tight">
                  {b.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {b.category}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="bg-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className={`w-16 h-16 rounded-xl border border-border flex items-center justify-center overflow-hidden shrink-0 ${
                      active.logoBg === "light" ? "bg-white" : "bg-secondary"
                    }`}
                  >
                    <img
                      src={active.logo}
                      alt={`Logótipo ${active.name}`}
                      className={`w-full h-full ${
                        active.logoFit === "cover" ? "object-cover" : "object-contain p-2"
                      }`}
                    />
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

              {active.proofs.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    Prova real
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {active.proofs.map((p, idx) => (
                      <figure
                        key={idx}
                        className="rounded-lg border border-border overflow-hidden bg-secondary/40"
                      >
                        <img
                          src={p.src}
                          alt={p.caption}
                          loading="lazy"
                          className="w-full h-48 object-cover object-top"
                        />
                        <figcaption className="p-2 text-xs text-muted-foreground leading-snug">
                          {p.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
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
