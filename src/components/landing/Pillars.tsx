import { Target, Heart, MessageSquare, Repeat } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Target,
    title: "Tráfego",
    headline: "Atrair as pessoas certas da sua região que já procuram serviços dentários.",
    practical: 'Anúncios no Google para quem pesquisa "dentista perto de mim", campanhas segmentadas no Instagram para a sua cidade.',
  },
  {
    number: "02",
    icon: Heart,
    title: "Engajamento",
    headline: "Criar confiança antes do paciente entrar em contacto.",
    practical: "Conteúdos que educam e geram autoridade, respostas rápidas, posicionamento como referência na região.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Conversão",
    headline: "Transformar interesse em consultas marcadas.",
    practical: "Atendimento rápido no WhatsApp, scripts de resposta, ofertas directas, follow-up de leads que não responderam.",
  },
  {
    number: "04",
    icon: Repeat,
    title: "Retenção",
    headline: "Fazer pacientes voltarem e indicarem novos pacientes.",
    practical: "Lembretes de consultas, campanhas de retorno, upsell (clareamento, estética), programas de fidelização.",
  },
];

const Pillars = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">O Sistema</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance leading-tight">
            Os 4 Pilares da aquisição previsível
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.number}
                className="group relative p-8 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth animate-fade-up overflow-hidden"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="absolute -top-6 -right-6 text-9xl font-display font-bold text-secondary/60 select-none pointer-events-none">
                  {pillar.number}
                </div>

                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-primary text-primary-foreground mb-5 group-hover:scale-110 transition-smooth">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Pilar {pillar.number.replace("0", "")}: <span className="text-primary">{pillar.title}</span>
                  </h3>

                  <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                    {pillar.headline}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Na prática</p>
                    <p className="text-muted-foreground leading-relaxed">{pillar.practical}</p>
                  </div>
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
