import { Check, X, Minus } from "lucide-react";

const columns = [
  {
    label: "Agência",
    tone: "muted",
    icon: X,
    points: [
      "Foca em posts e design",
      "Sem responsabilidade pelos resultados",
      "Mede sucesso por likes",
      "Trabalha por entregáveis, não por metas",
    ],
  },
  {
    label: "Consultoria",
    tone: "muted",
    icon: Minus,
    points: [
      "Dá recomendações em PDF",
      "Não executa nada",
      "Deixa o trabalho na sua mão",
      "Cobra horas, não resultado",
    ],
  },
  {
    label: "Raise · Assessoria",
    tone: "primary",
    icon: Check,
    points: [
      "Estratégia + execução completa",
      "Foco directo em facturamento",
      "Acompanhamento contínuo, semana a semana",
      "Responsabilidade pelo crescimento",
    ],
  },
];

const Differentiation = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-fade-b border-y border-border">
      <div className="container-tight">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Diferenciação</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-balance leading-[1.05]">
            Assessoria <span className="text-muted-foreground">vs</span> Agência <span className="text-muted-foreground">vs</span> <span className="text-primary">Consultoria</span>.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            A diferença não está no nome. Está em quem assume responsabilidade pelo crescimento da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {columns.map((c, i) => {
            const Icon = c.icon;
            const isPrimary = c.tone === "primary";
            return (
              <article
                key={c.label}
                className={`p-7 rounded-2xl border transition-smooth animate-fade-up ${
                  isPrimary
                    ? "bg-card border-primary shadow-glow-red md:scale-105"
                    : "bg-card/60 border-border"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl mb-5 ${
                  isPrimary
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`font-display text-2xl font-bold mb-5 ${isPrimary ? "text-foreground" : "text-muted-foreground"}`}>
                  {c.label}
                </h3>
                <ul className="space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full ${isPrimary ? "bg-primary" : "bg-muted-foreground/40"}`} />
                      <span className={`leading-relaxed ${isPrimary ? "text-foreground/90" : "text-muted-foreground"}`}>
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 p-8 md:p-10 rounded-3xl border border-primary/30 bg-gradient-red text-primary-foreground shadow-glow-red text-center">
          <p className="font-display text-2xl md:text-4xl font-bold leading-tight text-balance">
            Não somos consultores. Somos <span className="italic">responsáveis</span> pelo crescimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
