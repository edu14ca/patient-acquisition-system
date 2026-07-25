import { Filter, UserX, Activity, LayoutTemplate } from "lucide-react";

const issues = [
  {
    icon: Filter,
    title: "Investimento sem retorno",
    desc: "Pagas anúncios e posts e no fim do mês não sabes o que gerou venda.",
  },
  {
    icon: UserX,
    title: "Leads que não viram cliente",
    desc: "Mensagens chegam, ninguém faz follow-up. Cada lead perdido é dinheiro perdido.",
  },
  {
    icon: Activity,
    title: "Vendas que oscilam",
    desc: "Mês bom, mês mau. Sem previsibilidade não há expansão nem tranquilidade.",
  },
  {
    icon: LayoutTemplate,
    title: "Dependência de posts e design",
    desc: "Bonito não paga salários. Marketing existe para gerar facturamento.",
  },
];

const Problem = () => {
  return (
    <section id="problema" className="py-16 md:py-24 relative">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs">O Problema</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-balance leading-[1.08]">
            Estás a perder dinheiro todos os dias e nem sabes onde.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {issues.map((issue, i) => {
            const Icon = issue.icon;
            return (
              <div
                key={i}
                className="group p-4 md:p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-smooth animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:bg-primary transition-smooth">
                  <Icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="font-display text-sm md:text-base font-bold mt-4 leading-snug">{issue.title}</h3>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">{issue.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
