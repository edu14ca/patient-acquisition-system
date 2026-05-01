import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/raise/Header";
import Footer from "@/components/raise/Footer";
import WhatsAppFloat from "@/components/raise/WhatsAppFloat";
import Diagnostico from "@/components/raise/Diagnostico";
import SocialProof from "@/components/raise/SocialProof";
import FAQ from "@/components/raise/FAQ";
import QualifyForm from "@/components/raise/QualifyForm";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Megaphone,
  Heart,
  DollarSign,
  Repeat,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export type SegmentPageProps = {
  segment: string; // ex.: "Clínicas"
  badge: string;
  headline: React.ReactNode;
  subheadline: string;
  pains: { title: string; desc: string }[];
  pillars: { title: string; desc: string }[];
  services: { title: string; desc: string }[];
  caseStudy: {
    title: React.ReactNode;
    before: string[];
    after: string[];
  };
  faqs?: { q: string; a: string }[];
  whatsappMessage: string;
  seoTitle: string;
  seoDescription: string;
};

const pillarIcons = [Megaphone, Heart, DollarSign, Repeat];

const SegmentPage = ({
  segment,
  badge,
  headline,
  subheadline,
  pains,
  pillars,
  services,
  caseStudy,
  faqs,
  whatsappMessage: _whatsappMessage,
  seoTitle,
  seoDescription,
}: SegmentPageProps) => {
  useEffect(() => {
    document.title = seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", seoDescription);
  }, [seoTitle, seoDescription]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />

          <div className="container-tight relative">
            <div className="chip mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {badge}
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance max-w-5xl animate-fade-up">
              {headline}
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: "120ms" }}>
              {subheadline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button asChild variant="hero" size="xl" className="group">
                <a href="#diagnostico-form">
                  Quero o meu diagnóstico
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Diagnóstico gratuito · Vagas limitadas por semana
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="py-24 md:py-32">
          <div className="container-tight">
            <div className="max-w-3xl mb-14">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">O Problema</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
                A maioria dos negócios de {segment.toLowerCase()} não cresce porque{" "}
                <span className="text-primary italic">faltam-lhes processos</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {pains.map((p, i) => (
                <div
                  key={p.title}
                  className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-smooth">
                      <XCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAGNÓSTICO (componente reutilizável) */}
        <Diagnostico />

        {/* 4 PILARES */}
        <section className="py-24 md:py-32 bg-gradient-fade-b border-y border-border relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container-tight relative">
            <div className="max-w-3xl mb-16">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">A Solução</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
                Sistema completo construído em <span className="text-primary">4 pilares</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map((p, i) => {
                const Icon = pillarIcons[i] ?? Megaphone;
                return (
                  <article
                    key={p.title}
                    className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary transition-smooth overflow-hidden animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute -top-4 -right-2 text-7xl font-display font-bold text-stroke opacity-30 select-none">
                      0{i + 1}
                    </div>
                    <div className="relative">
                      <div className="inline-flex p-3 rounded-xl bg-primary text-primary-foreground mb-6 group-hover:shadow-glow-red transition-smooth">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES RAISE */}
        <section className="py-24 md:py-32">
          <div className="container-tight">
            <div className="max-w-3xl mb-14">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Soluções Raise</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
                Não vendemos serviços. <span className="text-primary">Vendemos crescimento.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-2 leading-tight">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MODELO DE ENTREGA */}
        <section className="py-24 md:py-32 bg-gradient-fade-b border-y border-border">
          <div className="container-tight">
            <div className="max-w-3xl mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Modelo de entrega</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
                Somos o seu <span className="text-primary">time externo</span> de marketing e vendas.
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Planeamos, executamos, medimos e optimizamos. Toda a semana. Sem desculpas.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {["Planeamos", "Executamos", "Medimos", "Optimizamos"].map((t, i) => (
                <div
                  key={t}
                  className="p-6 rounded-2xl bg-card border border-border animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <p className="text-sm text-muted-foreground mb-2">0{i + 1}</p>
                  <p className="font-display text-xl font-bold">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL (reutilizável) */}
        <SocialProof />

        {/* CASE BEFORE/AFTER */}
        <section className="py-24 md:py-32">
          <div className="container-tight">
            <div className="max-w-3xl mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Caso real</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
                {caseStudy.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="chip mb-5">
                  <TrendingDown className="w-4 h-4 text-primary" />
                  ANTES da Raise
                </div>
                <ul className="space-y-4">
                  {caseStudy.before.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-red text-primary-foreground border border-primary shadow-glow-red">
                <div className="chip mb-5 bg-background/20 border-background/30 text-primary-foreground">
                  <TrendingUp className="w-4 h-4" />
                  DEPOIS da Raise
                </div>
                <ul className="space-y-4">
                  {caseStudy.after.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={faqs} />

        {/* CTA FINAL */}
        <section className="py-24 md:py-32 relative overflow-hidden border-t border-border">
          <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
          <div className="container-tight relative text-center max-w-4xl">
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] text-balance mb-8">
              Ou cresce agora… <span className="block text-primary italic">ou continua no mesmo lugar.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Diagnóstico gratuito em 20 minutos. Sem compromisso.
            </p>
            <Button asChild variant="hero" size="xl" className="group h-16 px-8 sm:px-12 mx-auto w-full sm:w-auto max-w-sm justify-center">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <span>Falar com a equipa no WhatsApp</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="mt-6 text-muted-foreground text-sm">
              +244 939 636 042 · Resposta rápida · Sem compromisso
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default SegmentPage;
