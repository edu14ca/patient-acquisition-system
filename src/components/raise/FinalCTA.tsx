import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container-tight relative text-center max-w-4xl">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance mb-8">
          Quer crescer{" "}
          <span className="block text-primary italic">ou continuar no mesmo lugar?</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          A análise é gratuita. Em 20 minutos a nossa equipa mostra exactamente onde está a perder dinheiro — e como podemos crescer juntos.
        </p>

        <Button asChild variant="hero" size="xl" className="group text-lg h-16 px-12">
          <a href={buildWhatsAppLink("Olá Raise! Quero crescer o meu negócio. Quando podemos falar?")} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Quero crescer o meu negócio
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <p className="mt-6 text-muted-foreground text-sm">
          +244 939 636 042 · Resposta rápida · Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
