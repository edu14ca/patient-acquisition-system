import { ArrowUpRight, TrendingUp } from "lucide-react";

const metrics = [
  { label: "Facturamento mensal", before: "60M Kz", after: "120M Kz", delta: "+100%" },
  { label: "Custo por lead", before: "8.500 Kz", after: "2.100 Kz", delta: "-75%" },
  { label: "Marcações / semana", before: "12", after: "47", delta: "+291%" },
];

const CaseStudy = () => {
  return (
    <section id="caso" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-tight relative">
        <div className="max-w-3xl mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Prova real</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-balance leading-[1.05]">
            Empresas em Angola já estão a sair da estagnação com a <span className="text-primary">Raise</span>.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Caso real: clínica em Luanda dobrou o facturamento em 6 meses com a nossa assessoria.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card overflow-hidden">
          <div className="p-8 md:p-12 border-b border-border">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="chip mb-4">
                  <TrendingUp className="w-4 h-4 text-success" />
                  Sector: Saúde · Luanda
                </div>
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-2xl">
                  "A Raise não veio dar palpites. Entrou na operação e montou o sistema completo. Hoje sabemos exactamente quanto custa cada paciente novo — e quanto ele vale para a clínica."
                </p>
                <p className="mt-4 text-muted-foreground">— Director Clínico</p>
              </div>
              <ArrowUpRight className="w-8 h-8 text-primary flex-shrink-0" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {metrics.map((m) => (
              <div key={m.label} className="p-8">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">{m.label}</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-muted-foreground line-through text-lg">{m.before}</span>
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                  <span className="font-display text-3xl font-bold text-foreground">{m.after}</span>
                </div>
                <span className="inline-block text-sm font-semibold text-success">{m.delta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
