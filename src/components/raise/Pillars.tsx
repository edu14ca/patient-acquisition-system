import { Megaphone, Users, DollarSign, Repeat } from "lucide-react";

const pillars = [
  {
    n: "01",
    icon: Megaphone,
    title: "Aquisição",
    desc: "Tráfego pago no Google, Meta e TikTok. Atrair os clientes certos, no momento certo.",
  },
  {
    n: "02",
    icon: Users,
    title: "Engajamento",
    desc: "Conteúdo estratégico que constrói autoridade e gera confiança antes da venda.",
  },
  {
    n: "03",
    icon: DollarSign,
    title: "Monetização",
    desc: "Funil de vendas e estrutura comercial para transformar interesse em facturamento.",
  },
  {
    n: "04",
    icon: Repeat,
    title: "Retenção",
    desc: "CRM, automação e relacionamento para fazer cada cliente valer o triplo.",
  },
];

const Pillars = () => {
  return (
    <section id="pilares" className="py-24 md:py-32 bg-gradient-fade-b border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container-tight relative">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">A Solução</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-balance leading-[1.05]">
            Crescimento real é construído sobre{" "}
            <span className="text-primary">4 pilares</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.n}
                className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary transition-smooth overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute -top-4 -right-2 text-7xl font-display font-bold text-stroke opacity-30 select-none">
                  {p.n}
                </div>

                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-primary text-primary-foreground mb-6 group-hover:shadow-glow-red transition-smooth">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
