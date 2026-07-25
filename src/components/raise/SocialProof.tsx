import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

import logoMichael from "@/assets/logo-michael-machado.jpg";
import logoLinhas from "@/assets/logo-linhas-douro.jpg";
import logoHappy from "@/assets/logo-happy-kitchen.jpg";
import logoFercal from "@/assets/logo-fercal.jpg";
import logoWamiAsset from "@/assets/logo-wamikixima.jpg.asset.json";
import logoSesalinAsset from "@/assets/logo-sesalin.webp.asset.json";
import logoMavisherAsset from "@/assets/logo-mavisher.jpg.asset.json";

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
  caseUrl?: string;
  testimonial?: string;
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
  {
    id: "wamikixima",
    name: "Clínica WamiKixima Dental",
    category: "Clínica odontológica / Luanda",
    logo: logoWamiAsset.url,
    logoFit: "contain",
    logoBg: "light",
    summary:
      "A Raise trabalha com a Clínica WamiKixima Dental, em Luanda, na estruturação da aquisição de pacientes e da comunicação da clínica.",
    caseUrl: "",
    proofs: [],
  },
  {
    id: "sesalin",
    name: "Sesalin",
    category: "Marketplace / Comércio digital",
    logo: logoSesalinAsset.url,
    logoFit: "contain",
    logoBg: "dark",
    summary:
      "A Raise acompanha a Sesalin na estruturação do crescimento do marketplace e da sua operação de comércio digital.",
    caseUrl: "",
    proofs: [],
  },
  {
    id: "mavisher",
    name: "Mavisher",
    category: "Logística / E-commerce",
    logo: logoMavisherAsset.url,
    logoFit: "contain",
    logoBg: "dark",
    summary:
      "A Raise acompanha a Mavisher na estruturação de crescimento na área de logística e e-commerce.",
    caseUrl: "",
    proofs: [],
  },
];

const AUTOPLAY_MS = 3500;

const SocialProof = () => {
  const [active, setActive] = useState<Brand | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!api || paused || reduceMotion) return;
    const id = setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [api, paused, reduceMotion]);

  const open = useCallback((b: Brand) => setActive(b), []);

  return (
    <section
      id="resultados"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container-tight relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs">
            Prova social
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 leading-[1.08] text-balance">
            Marcas que já confiaram na Raise
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Toca em cada marca para ver a prova real.
          </p>
        </div>
      </div>

      <div
        className="relative px-6 md:px-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start", dragFree: false }}
          className="container-tight"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {brands.map((b) => (
              <CarouselItem
                key={b.id}
                className="pl-3 md:pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <button
                  onClick={() => open(b)}
                  className="group w-full h-full rounded-xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-smooth p-4 md:p-6 flex flex-col items-center text-center"
                  aria-label={`Ver case de ${b.name}`}
                >
                  <div
                    className={`flex items-center justify-center rounded-lg overflow-hidden transition-smooth shrink-0 ${
                      b.logoBg === "light" ? "bg-white" : "bg-secondary"
                    } w-16 h-16 md:w-20 md:h-20`}
                  >
                    <img
                      src={b.logo}
                      alt={`Logótipo ${b.name}`}
                      loading="lazy"
                      width={80}
                      height={80}
                      className={`max-w-full max-h-full ${
                        b.logoFit === "cover" ? "w-full h-full object-cover" : "object-contain p-2"
                      } group-hover:scale-105 transition-smooth`}
                    />
                  </div>
                  <p className="mt-4 font-display font-semibold text-sm md:text-base leading-tight">
                    {b.name}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {b.category}
                  </p>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-2 bg-card/80 border-border" />
          <CarouselNext className="hidden md:flex -right-2 bg-card/80 border-border" />
        </Carousel>
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
                        <div className="relative w-full h-48 overflow-hidden bg-secondary">
                          <img
                            src={p.src}
                            alt={p.caption}
                            loading="lazy"
                            className="absolute inset-x-0 w-full h-[125%] -top-[12%] object-cover object-center"
                          />
                        </div>
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
