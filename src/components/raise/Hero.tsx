import { Button } from "@/components/ui/button";
import DashboardPreview from "@/components/raise/DashboardPreview";
import LogoMarquee from "@/components/raise/LogoMarquee";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="container-tight relative grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <span className="eyebrow">Assessoria de marketing e growth para empresas angolanas</span>

          <h1 className="mt-6 font-display text-[40px] leading-[1.1] sm:text-5xl lg:text-[56px] lg:leading-[1.02] font-extrabold tracking-[-0.04em] text-balance">
            Cada semana sem processo é dinheiro perdido.
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            A Raise assume tráfego, funil, dados e vendas e responde por facturamento previsível. Não somos agência. Não vendemos posts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#diagnostico-form">Agendar diagnóstico</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#solucoes">Ver soluções</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Diagnóstico gratuito e sem compromisso.</p>
        </div>

        <DashboardPreview />
      </div>

      <div className="container-tight mt-16 md:mt-20">
        <p className="text-sm text-foreground mb-6">Empresas que já cresceram com a Raise:</p>
      </div>
      <LogoMarquee />
    </section>
  );
};

export default Hero;
