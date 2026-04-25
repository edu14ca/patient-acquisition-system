import { Search, ClipboardList, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Auditoria",
    desc: "Analisamos canais, criativos, funil e números actuais. Sem suposições.",
  },
  {
    icon: ClipboardList,
    title: "Diagnóstico",
    desc: "Identificamos o gargalo real: aquisição, conversão, ticket ou retenção.",
  },
  {
    icon: Target,
    title: "Plano",
    desc: "Metas mensais, prioridades semanais e responsáveis por cada métrica.",
  },
  {
    icon: Rocket,
    title: "Execução",
    desc: "A equipa Raise entra na operação e começa a executar na mesma semana.",
  },
];

const Diagnostico = () => {
  return (
    <section id="diagnostico" className="py-24 md:py-32 relative">
      <div className="container-tight">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Diagnóstico</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Antes de vender, <span className="text-primary">diagnosticamos</span>.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Não propomos pacotes prontos. Olhamos para os seus números e definimos o que precisa de ser executado para crescer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth animate-fade-up"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="absolute top-4 right-5 text-sm font-display font-bold text-muted-foreground/50">
                  0{i + 1}
                </span>
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Diagnostico;
