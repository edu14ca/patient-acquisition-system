import { Button } from "@/components/ui/button";
import DashboardPreview from "@/components/raise/DashboardPreview";
import LogoMarquee from "@/components/raise/LogoMarquee";
import hero1800 from "@/assets/site/hero-tacada-1800.webp";
import hero900 from "@/assets/site/hero-tacada-900.webp";

const Hero = () => {
  return (
    <>
      <section className="theme-dark relative overflow-hidden min-h-[88vh] flex items-end pt-32 pb-14 md:pb-20">
        {/* Fundo: «a tacada certa», do material da marca. Afasta-se ao fazer scroll. */}
        <div className="absolute inset-0 sd-hero-bg" aria-hidden>
          <img
            src={hero1800}
            srcSet={`${hero900} 900w, ${hero1800} 1800w`}
            sizes="100vw"
            alt=""
            width={1800}
            height={1200}
            {...{ fetchpriority: "high" }}
            className="h-full w-full object-cover object-[65%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="container-tight relative grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-end w-full">
          <div className="animate-fade-up">
            <span className="eyebrow">Assessoria de marketing e growth para empresas angolanas</span>

            <h1 className="mt-6 font-display text-[40px] leading-[1.05] sm:text-5xl lg:text-[64px] lg:leading-[1] font-extrabold tracking-[-0.04em] text-balance">
              Cada semana sem processo é dinheiro perdido.
            </h1>

            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              A Raise assume tráfego, funil, dados e vendas e responde por facturamento previsível. Não somos agência. Não vendemos posts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#diagnostico-form">Agendar diagnóstico</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent">
                <a href="#solucoes">Ver soluções</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-foreground/70">Diagnóstico gratuito e sem compromisso.</p>
          </div>

          <DashboardPreview />
        </div>
      </section>

      <section className="py-10 md:py-12 border-b border-border" aria-label="Clientes da Raise">
        <LogoMarquee />
      </section>
    </>
  );
};

export default Hero;
