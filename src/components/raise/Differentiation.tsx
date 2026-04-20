const points = [
  {
    n: "01",
    title: "Não vendemos serviços soltos",
    desc: "Vendemos crescimento. Tudo o que entregamos serve a um único objectivo: facturamento.",
  },
  {
    n: "02",
    title: "Trabalhamos com dados",
    desc: "Cada decisão é baseada em métricas. Nada de \"acho que está bom\".",
  },
  {
    n: "03",
    title: "Foco em facturamento",
    desc: "Não medimos sucesso por likes. Medimos por receita gerada e ROI real.",
  },
  {
    n: "04",
    title: "Metodologia estruturada",
    desc: "Os 4 pilares são repetíveis, escaláveis e funcionam em qualquer sector.",
  },
];

const Differentiation = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-fade-b border-y border-border">
      <div className="container-tight">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Diferenciação</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-balance leading-[1.05]">
            Por que a Raise é <span className="text-primary">diferente</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {points.map((p, i) => (
            <div
              key={p.n}
              className="bg-background p-8 md:p-10 hover:bg-card transition-smooth animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="font-display text-5xl font-bold text-primary/40">{p.n}</span>
              <h3 className="font-display text-2xl font-bold mt-4 mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
