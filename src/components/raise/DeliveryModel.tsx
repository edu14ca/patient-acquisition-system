import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const principles = [
  "Time externo de marketing dedicado à sua empresa",
  "Foco em facturamento real, não em vaidade",
  "Decisões 100% baseadas em dados",
  "Acompanhamento contínuo, semana a semana",
];

const options = [
  {
    title: "Assessoria Completa",
    desc: "Time Raise integrado à sua operação. Tráfego, criativos, CRM, vendas — tudo num só lugar.",
    badge: "Mais escolhida",
    highlighted: true,
  },
  {
    title: "Projectos Específicos",
    desc: "Resolvemos uma frente concreta: lançamento, landing page, estrutura comercial.",
    badge: "Pontual",
    highlighted: false,
  },
  {
    title: "Consultoria Estratégica",
    desc: "Acesso ao método Raise para a sua equipa interna executar com clareza.",
    badge: "Estratégico",
    highlighted: false,
  },
];

const DeliveryModel = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-fade-b border-y border-border">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Como trabalhamos</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-balance leading-tight mb-8">
              Não somos uma agência.<br />
              Somos o seu <span className="text-primary">time de crescimento</span>.
            </h2>

            <ul className="space-y-4">
              {principles.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="hero" size="lg" className="mt-10">
              <a href={buildWhatsAppLink("Olá Raise! Quero entender qual modelo faz mais sentido para a minha empresa.")} target="_blank" rel="noopener noreferrer">
                Quero uma conversa
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            {options.map((o, i) => (
              <article
                key={o.title}
                className={`p-7 rounded-2xl border transition-smooth animate-fade-up ${
                  o.highlighted
                    ? "bg-card border-primary shadow-glow-red"
                    : "bg-card border-border hover:border-primary/40"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold">{o.title}</h3>
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                    o.highlighted ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground border border-border"
                  }`}>
                    {o.badge}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{o.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryModel;
