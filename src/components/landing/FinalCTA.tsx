import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-tight relative text-center max-w-3xl">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-8 text-balance leading-[1.1]">
          Se você quer mais pacientes de forma previsível,{" "}
          <span className="italic text-accent">o primeiro passo é entender o que está errado hoje.</span>
        </h2>

        <Button variant="hero" size="xl" onClick={scrollToForm} className="group">
          Quero a minha análise gratuita
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="mt-6 text-primary-foreground/60 text-sm">Sem compromisso · Resposta em 24h</p>
      </div>
    </section>
  );
};

export default FinalCTA;
