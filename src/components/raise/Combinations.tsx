import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { combinationExamples, models, solutions } from "@/data/offer";

const Combinations = () => {
  const [active, setActive] = useState(combinationExamples[0].id);
  const example = combinationExamples.find((e) => e.id === active) ?? combinationExamples[0];

  return (
    <section id="combinacoes" className="py-20 md:py-24 border-t border-border">
      <div className="container-tight">
        <div className="max-w-3xl mb-10 md:mb-12">
          <span className="eyebrow">03 · Assessoria modular</span>
          <h2 className="font-display text-3xl md:text-5xl font-medium mt-4 leading-[1.08] text-balance">
            Monte a combinação certa para a sua empresa
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {solutions.length} soluções em {models.length} modelos de entrega dão {solutions.length * models.length} combinações possíveis. Veja como alguns clientes da Raise combinaram as suas.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div role="tablist" className="flex overflow-x-auto border-b border-border">
            {combinationExamples.map((e) => {
              const selected = e.id === active;
              return (
                <button
                  key={e.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(e.id)}
                  className={`flex-shrink-0 text-left px-5 py-4 border-b-2 transition-smooth ${
                    selected ? "border-primary bg-secondary" : "border-transparent hover:bg-secondary/50"
                  }`}
                >
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Exemplo</span>
                  <span className={`block font-medium mt-1 ${selected ? "text-foreground" : "text-muted-foreground"}`}>{e.client}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{e.segment}</span>
                </button>
              );
            })}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-normal px-5 py-4 eyebrow">Solução</th>
                  {models.map((m) => (
                    <th key={m.id} className="font-normal px-3 py-4 eyebrow text-center">{m.short}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {solutions.map((s) => {
                  const Icon = s.icon;
                  const pick = example.picks[s.id];
                  return (
                    <tr key={s.id} className={`border-b border-border last:border-0 ${pick ? "" : "text-muted-foreground/60"}`}>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${pick ? "text-primary" : ""}`} />
                          <span className={pick ? "text-foreground font-medium" : ""}>{s.label}</span>
                        </span>
                      </td>
                      {models.map((m) => (
                        <td key={m.id} className="px-3 py-3.5 text-center">
                          {pick === m.id ? (
                            <Check className="w-5 h-5 text-primary inline" aria-label="Incluído" />
                          ) : (
                            <Minus className="w-4 h-4 text-muted-foreground/40 inline" aria-hidden />
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <Button asChild variant="hero" size="lg">
            <a href="#diagnostico-form">Descobrir a minha combinação</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Combinations;
