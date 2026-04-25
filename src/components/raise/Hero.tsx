import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, BarChart3 } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const stats = [
  { icon: TrendingUp, value: "+312%", label: "Crescimento médio em 6 meses" },
  { icon: Target, value: "4 Pilares", label: "Estratégia + execução" },
  { icon: BarChart3, value: "100%", label: "Decisões baseadas em dados" },
];

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 h-[700px] bg-gradient-hero" />

      <div className="container-tight relative">
        <div className="max-w-4xl">
          <div className="chip animate-fade-up mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Assessoria de marketing e growth em Angola
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance mb-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
            Agências de marketing{" "}
            <span className="relative inline-block">
              <span className="text-primary">não funcionam.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 9C50 3 150 3 298 9" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "180ms" }}>
            Somos uma <span className="text-foreground font-semibold">assessoria</span> que executa estratégia, tráfego, dados e vendas para transformar marketing em <span className="text-foreground font-semibold">crescimento previsível</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up" style={{ animationDelay: "260ms" }}>
            <Button asChild variant="hero" size="xl" className="group">
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Falar com a equipa no WhatsApp
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Sem compromisso · Resposta rápida
            </p>
          </div>

          <p className="mt-10 font-display text-lg md:text-xl text-foreground/80 max-w-2xl animate-fade-up" style={{ animationDelay: "320ms" }}>
            <span className="text-primary">"</span>Não damos ideias. Somos <span className="italic">responsáveis</span> pelo crescimento.<span className="text-primary">"</span>
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "360ms" }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-display font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
