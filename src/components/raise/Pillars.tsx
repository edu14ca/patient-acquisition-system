import { Megaphone, Users, DollarSign, Repeat } from "lucide-react";

const pillars = [
  {
    icon: Megaphone,
    title: "Aquisição",
    desc: "Tráfego pago no Google, Meta e TikTok. Atrair os clientes certos, no momento certo.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Engajamento",
    desc: "Conteúdo estratégico que constrói autoridade e gera confiança antes da venda.",
  },
  {
    icon: DollarSign,
    title: "Monetização",
    desc: "Funil de vendas e estrutura comercial para transformar interesse em facturamento.",
  },
  {
    icon: Repeat,
    title: "Retenção",
    desc: "CRM, automação e relacionamento para fazer cada cliente valer o triplo.",
  },
];

const Pillars = () => {
  return (
    <section id="pilares" className="py-16 md:py-24 bg-gradient-fade-b border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container-tight relative">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs">A Solução</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-balance leading-[1.08]">
            Crescimento real é construído sobre 4 pilares
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className={`group p-5 md:p-6 rounded-xl bg-card border transition-smooth animate-fade-up ${
                  p.highlight ? "border-primary/60" : "border-border hover:border-primary/40"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg md:text-xl font-bold">{p.title}</h3>
                </div>
                <p className="mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
