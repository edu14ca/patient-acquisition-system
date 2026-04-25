import { CheckCheck } from "lucide-react";

type Mockup = {
  brand: string;
  context: string;
  message: string;
  bubbles: { from: "client" | "raise"; text: string }[];
};

const proofs: Mockup[] = [
  {
    brand: "Michael Machado",
    context: "Humorista · Início de carreira",
    message: "Acompanhámos o crescimento desde o início.",
    bubbles: [
      { from: "client", text: "Mano, preciso fazer campanha para o próximo show. Consegues tratar?" },
      { from: "raise", text: "Sim. Já preparo criativos e segmentação. Lançamos amanhã." },
      { from: "client", text: "Bora! 🚀" },
    ],
  },
  {
    brand: "Linhas D'Ouro",
    context: "Empresa de confecção",
    message: "Apoio em marketing e crescimento.",
    bubbles: [
      { from: "client", text: "Queremos vender mais este mês. As redes não estão a converter." },
      { from: "raise", text: "Vamos restruturar o funil e activar tráfego pago para os produtos com maior margem." },
      { from: "client", text: "Perfeito. Quando começamos?" },
    ],
  },
  {
    brand: "Happy Kitchen",
    context: "Delivery + serviços",
    message: "Estruturação de crescimento e aquisição.",
    bubbles: [
      { from: "client", text: "Precisamos de mais pedidos durante a semana, não só fim-de-semana." },
      { from: "raise", text: "Vamos montar campanhas por horário e activar remarketing para clientes inactivos." },
      { from: "client", text: "Top, conta connosco." },
    ],
  },
];

const SocialProof = () => {
  return (
    <section id="prova" className="py-24 md:py-32 relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-tight relative">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Prova social</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Resultados reais. <span className="text-primary italic">Não promessas.</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Marcas e profissionais em Angola que confiam na Raise para executar o crescimento — e não apenas falar dele.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {proofs.map((p, i) => (
            <article
              key={p.brand}
              className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary">
                    {p.brand.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold leading-tight">{p.brand}</p>
                    <p className="text-xs text-muted-foreground">{p.context}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-2 bg-[hsl(0_0%_5%)] flex-1">
                {p.bubbles.map((b, idx) => (
                  <div
                    key={idx}
                    className={`flex ${b.from === "raise" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        b.from === "raise"
                          ? "bg-success/15 text-foreground rounded-br-sm"
                          : "bg-secondary text-foreground/90 rounded-bl-sm"
                      }`}
                    >
                      {b.text}
                      {b.from === "raise" && (
                        <CheckCheck className="inline-block w-3.5 h-3.5 ml-1 text-success" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-border">
                <p className="font-display text-base font-semibold leading-snug">
                  “{p.message}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
