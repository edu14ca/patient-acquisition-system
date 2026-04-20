import {
  Crosshair,
  Film,
  LayoutTemplate,
  LineChart,
  Workflow,
  Briefcase,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Crosshair,
    title: "Gestão de Tráfego Pago",
    outcome: "Mais leads qualificados ao menor custo possível.",
  },
  {
    icon: Film,
    title: "Criativos para Anúncios",
    outcome: "Anúncios que param o scroll e geram cliques.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages & Websites",
    outcome: "Páginas que convertem visita em venda.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    outcome: "Dashboards e dados claros para decidir com segurança.",
  },
  {
    icon: Workflow,
    title: "CRM & Automação",
    outcome: "Cada lead acompanhada, nenhuma oportunidade perdida.",
  },
  {
    icon: Briefcase,
    title: "Estrutura Comercial",
    outcome: "Time, scripts e processos que vendem todos os dias.",
  },
  {
    icon: Rocket,
    title: "Growth Estratégico",
    outcome: "Plano completo de crescimento, com metas mensais.",
  },
];

const Services = () => {
  return (
    <section id="solucoes" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Soluções Raise</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-balance leading-[1.05]">
            Tudo o que a sua empresa precisa para{" "}
            <span className="italic text-primary">crescer</span>.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Não vendemos serviços soltos. Implementamos um motor de crescimento integrado, do primeiro clique até à recompra.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isLast = i === services.length - 1;
            return (
              <article
                key={s.title}
                className={`group p-7 rounded-2xl border transition-smooth animate-fade-up ${
                  isLast
                    ? "bg-gradient-purple text-accent-foreground border-accent shadow-glow-purple"
                    : "bg-card border-border hover:border-primary/40"
                }`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl mb-5 ${
                  isLast ? "bg-background/20 text-accent-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                } transition-smooth`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className={`leading-relaxed ${isLast ? "text-accent-foreground/85" : "text-muted-foreground"}`}>
                  {s.outcome}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
