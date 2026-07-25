import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container-tight relative text-center">
        <div className="chip animate-fade-up mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Assessoria de Marketing e Growth em Angola
        </div>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight text-balance max-w-4xl mx-auto animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Cada semana sem processo
          <span className="block">é dinheiro perdido.</span>
        </h1>

        <p
          className="mt-7 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          A Raise assume tráfego, funil, dados e vendas — e responde por{" "}
          <span className="text-foreground font-semibold">facturamento previsível</span>. Não somos agência. Não vendemos posts.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: "240ms" }}>
          <Button asChild variant="hero" size="lg" className="w-full sm:w-auto max-w-xs justify-center">
            <a href="#diagnostico-form">Agende um diagnóstico agora</a>
          </Button>
          <p className="text-xs md:text-sm text-muted-foreground">
            Diagnóstico gratuito · Apenas 4 vagas por semana
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
