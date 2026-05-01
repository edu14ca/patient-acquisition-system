import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container-tight relative text-center max-w-4xl">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance mb-8">
          Continuar como está{" "}
          <span className="block text-primary italic">é mais caro do que agir.</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Cada semana sem processo é dinheiro a sair pela porta. Em 20 minutos, mostramos onde está a perda — e como fechar a torneira.
        </p>

        <Button asChild variant="hero" size="xl" className="group text-base sm:text-lg h-16 px-8 sm:px-12 mx-auto w-full sm:w-auto max-w-sm justify-center">
          <a href="#diagnostico-form">
            <span>Quero o meu diagnóstico</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <p className="mt-6 text-muted-foreground text-sm">
          Apenas 4 diagnósticos por semana · Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
