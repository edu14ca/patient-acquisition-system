import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/offer";

const Solutions = () => {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((s) => s.id === active) ?? solutions[0];
  const Icon = current.icon;

  return (
    <section id="solucoes" className="py-20 md:py-24 border-t border-border">
      <div className="container-tight">
        <div className="max-w-3xl mb-10 md:mb-12">
          <span className="eyebrow">01 · Soluções</span>
          <h2 className="font-display text-3xl md:text-[40px] font-medium mt-4 leading-[1.08] text-balance">
            Conheça as soluções da Raise
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Sete frentes para atrair mais clientes, vender mais vezes e pelo maior valor. Contrate só as que o seu negócio precisa.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div role="tablist" className="flex overflow-x-auto border-b border-border">
            {solutions.map((s) => {
              const TabIcon = s.icon;
              const selected = s.id === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(s.id)}
                  className={`flex-1 min-w-[96px] flex flex-col items-center gap-2 px-3 py-4 font-mono text-xs uppercase tracking-[0.071em] border-b-2 transition-smooth ${
                    selected
                      ? "border-primary text-foreground bg-secondary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <TabIcon className={`w-5 h-5 ${selected ? "text-primary" : ""}`} />
                  {s.label}
                </button>
              );
            })}
          </div>

          <div key={current.id} role="tabpanel" className="p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-end animate-fade-up">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-primary" />
                <h3 className="font-display text-2xl md:text-3xl font-medium">{current.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">{current.desc}</p>
              <ul className="mt-6 space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild variant="hero" size="lg">
              <a href="#diagnostico-form">Quero esta solução</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
