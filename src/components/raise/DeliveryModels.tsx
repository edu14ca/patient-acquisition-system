import { useState } from "react";
import { models } from "@/data/offer";

const DeliveryModels = () => {
  const [active, setActive] = useState(models[0].id);
  const current = models.find((m) => m.id === active) ?? models[0];

  return (
    <section id="modelos" className="py-20 md:py-24 border-t border-border">
      <div className="container-tight">
        <div className="max-w-3xl mb-10 md:mb-12">
          <span className="eyebrow">02 · Modelos de entrega</span>
          <h2 className="font-display text-3xl md:text-[40px] font-medium mt-4 leading-[1.08] text-balance">
            Escolha como quer trabalhar connosco
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            O mesmo método, quatro formas de o pôr a funcionar. Escolha o modelo que melhor se adapta ao momento e ao orçamento da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-3">
          <div role="tablist" className="flex md:flex-col gap-2 overflow-x-auto">
            {models.map((m, i) => {
              const selected = m.id === active;
              return (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(m.id)}
                  className={`flex-shrink-0 text-left px-4 py-3 rounded-lg border transition-smooth ${
                    selected
                      ? "border-primary/60 bg-card text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-xs text-muted-foreground mr-3">0{i + 1}</span>
                  <span className="font-medium">{m.label}</span>
                </button>
              );
            })}
          </div>

          <div key={current.id} role="tabpanel" className="rounded-lg border border-border bg-card p-6 md:p-10 animate-fade-up">
            <h3 className="font-display text-2xl md:text-3xl font-medium">{current.label}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg max-w-2xl">{current.desc}</p>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="eyebrow mb-2">Ideal para</p>
              <p className="text-foreground/90">{current.idealFor}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryModels;
