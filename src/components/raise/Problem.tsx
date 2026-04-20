import { X } from "lucide-react";

const issues = [
  { title: "Falta de estratégia", desc: "Investimento sem direcção, sem plano de longo prazo." },
  { title: "Falta de dados", desc: "Decisões tomadas no \"achismo\", sem métricas reais." },
  { title: "Falta de processo", desc: "Cada campanha é improvisada. Nada se repete, nada escala." },
  { title: "Dependência de posts e design", desc: "Bonito não vende. Marketing precisa gerar facturamento." },
];

const Problem = () => {
  return (
    <section id="problema" className="py-24 md:py-32 relative">
      <div className="container-tight">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">O Problema</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-balance leading-[1.05]">
            O problema <span className="italic text-muted-foreground">não é</span> o seu negócio.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            A maioria das empresas em Angola não cresce porque está a apostar tudo no canal errado, com a equipa errada, a medir as coisas erradas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {issues.map((issue, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:bg-card/80 transition-smooth animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <X className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{issue.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{issue.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 md:p-10 rounded-3xl border border-primary/30 bg-gradient-red text-primary-foreground shadow-glow-red">
          <p className="font-display text-2xl md:text-4xl font-bold leading-tight text-balance">
            Não falta cliente. Falta <span className="italic">processo</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
