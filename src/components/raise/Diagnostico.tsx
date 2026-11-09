import { Megaphone, MessageCircle, Banknote, Repeat } from "lucide-react";

const steps = [
  {
    icon: Megaphone,
    title: "Tráfego",
    desc: "Quantas pessoas certas chegam até si, por que canal e a que custo.",
  },
  {
    icon: MessageCircle,
    title: "Engajamento",
    desc: "Quantas respondem, perguntam e avançam. Aqui medimos o atendimento e o tempo de resposta.",
  },
  {
    icon: Banknote,
    title: "Monetização",
    desc: "Quantas compram, por que valor e com que frequência. Oferta, preço e fecho.",
  },
  {
    icon: Repeat,
    title: "Retenção",
    desc: "Quantas voltam e recomendam. Um cliente que regressa custa menos do que um novo.",
  },
];

const Diagnostico = () => {
  return (
    <section id="como-funciona" className="theme-wine py-20 md:py-24 relative overflow-hidden">
      <div className="container-tight">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="font-display text-3xl md:text-[40px] font-bold leading-[1.08] text-balance">
            Antes de vender, diagnosticamos.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Olhamos para as quatro etapas do crescimento, encontramos onde a sua empresa perde vendas e só depois definimos o que executar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="sd-card relative p-7 rounded-lg bg-card border border-border"
              >
                <span className="absolute top-4 right-5 text-sm font-display font-medium text-muted-foreground/50">
                  0{i + 1}
                </span>
                <div className="inline-flex text-primary mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Palavras das quatro etapas a deslizar com o scroll */}
      <div className="mt-16 md:mt-24 select-none" aria-hidden>
        <p className="sd-slide whitespace-nowrap font-display font-extrabold text-[64px] md:text-[128px] leading-none tracking-[-0.04em] text-white/10">
          Tráfego Engajamento Monetização Retenção Tráfego
        </p>
        <p className="sd-slide sd-slide--rev mt-2 whitespace-nowrap font-display font-extrabold text-[64px] md:text-[128px] leading-none tracking-[-0.04em] text-primary">
          Retenção Monetização Engajamento Tráfego Retenção
        </p>
      </div>
    </section>
  );
};

export default Diagnostico;
