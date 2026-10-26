import { Compass, Wrench, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const cycle = [
  { icon: Compass, title: "Planeamos", desc: "Estratégia clara, com metas mensais." },
  { icon: Wrench, title: "Executamos", desc: "Tráfego, criativos, funil e vendas." },
  { icon: BarChart3, title: "Medimos", desc: "Cada métrica acompanhada em tempo real." },
  { icon: Sparkles, title: "Optimizamos", desc: "Ajustes semanais para escalar o que funciona." },
];

const options = [
  {
    title: "Assessoria Completa",
    desc: "Equipa Raise integrada na sua operação. Estratégia, execução e acompanhamento contínuo — tudo num só lugar.",
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
    <section id="formas-de-trabalhar" className="py-16 md:py-24 bg-gradient-fade-b border-y border-border">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">Formas de trabalhar</span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 text-balance leading-tight mb-6">
              Somos a sua <span className="text-primary">equipa externa</span> de marketing e vendas.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Não entregamos relatórios e desaparecemos. Entramos na operação, assumimos as métricas e respondemos pelo crescimento.
            </p>

            <ul className="space-y-3 mb-10">
              {cycle.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.title} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-lg leading-tight">{c.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Button asChild variant="hero" size="lg">
              <a href="#diagnostico-form">
                Quero o meu diagnóstico
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            {options.map((o, i) => (
              <article
                key={o.title}
                className={`p-7 rounded-lg border transition-smooth animate-fade-up ${
                  o.highlighted
                    ? "bg-card border-primary shadow-glow-red"
                    : "bg-card border-border hover:border-primary/40"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-semibold">{o.title}</h3>
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
