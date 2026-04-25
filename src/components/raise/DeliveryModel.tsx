import { Check, Compass, Wrench, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const cycle = [
  { icon: Compass, title: "Planeamos", desc: "Estratégia clara, com metas mensais." },
  { icon: Wrench, title: "Executamos", desc: "Tráfego, criativos, funil e vendas." },
  { icon: BarChart3, title: "Medimos", desc: "Cada métrica acompanhada em tempo real." },
  { icon: Sparkles, title: "Optimizamos", desc: "Ajustes semanais para escalar o que funciona." },
];

const options = [
  {
    title: "Assessoria Completa",
    desc: "Time Raise integrado à sua operação. Estratégia, execução e acompanhamento contínuo — tudo num só lugar.",
    badge: "Mais escolhida",
    highlighted: true,
  },
  {
    title: "Projectos Específicos",
    desc: "Resolvemos uma frente concreta com execução completa: lançamento, landing page, estrutura comercial.",
    badge: "Pontual",
    highlighted: false,
  },
  {
    title: "Mentoria de Execução",
    desc: "Acesso ao método Raise para a sua equipa interna executar com clareza, ritmo e métricas claras.",
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-balance leading-tight mb-6">
              Somos o seu <span className="text-primary">time externo</span> de marketing e vendas.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Não entregamos relatórios e desaparecemos. Entramos na operação, assumimos as métricas e respondemos pelo crescimento.
            </p>

            <ul className="space-y-3 mb-10">
              {cycle.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg leading-tight">{c.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Button asChild variant="hero" size="lg">
              <a href={buildWhatsAppLink("Olá Raise! Quero entender qual modelo de assessoria faz mais sentido para a minha empresa.")} target="_blank" rel="noopener noreferrer">
                Falar com a equipa no WhatsApp
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
