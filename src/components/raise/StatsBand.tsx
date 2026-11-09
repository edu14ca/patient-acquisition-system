import { Layers, Boxes, Grid2x2 } from "lucide-react";
import { models, solutions } from "@/data/offer";

const stats = [
  { icon: Layers, value: String(solutions.length), label: "Soluções", desc: "Da aquisição às vendas e à retenção." },
  { icon: Boxes, value: String(models.length), label: "Modelos de entrega", desc: "Do projecto pontual à assessoria contínua." },
  { icon: Grid2x2, value: String(solutions.length * models.length), label: "Combinações", desc: "Só contrata o que o seu negócio precisa." },
];

const StatsBand = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container-tight grid grid-cols-1 sm:grid-cols-3 gap-10">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="text-center">
              <Icon className="w-5 h-5 text-primary mx-auto" strokeWidth={1.5} />
              <p className="mt-4 font-display text-[40px] leading-none font-medium tracking-[-0.03em]">{s.value}</p>
              <p className="mt-3 text-base">{s.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsBand;
