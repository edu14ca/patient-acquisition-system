import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";
import { ArrowRight, ShieldCheck } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clínica dentária moderna com dentista a sorrir"
          className="w-full h-full object-cover opacity-30"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      {/* Decorative element */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary-glow/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container-tight relative z-10 py-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">Aquisição previsível para clínicas dentárias</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.05] text-balance mb-6">
            A sua clínica está a perder pacientes todos os dias —{" "}
            <span className="text-accent italic">e você nem percebe</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl text-balance leading-relaxed">
            Descubra como transformar Instagram, Google e WhatsApp numa fonte constante de marcações previsíveis.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button variant="hero" size="xl" onClick={scrollToForm} className="group">
              Quero mais pacientes
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Sem compromisso — análise gratuita
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
