import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import Footer from "@/components/raise/Footer";
import WhatsAppFloat from "@/components/raise/WhatsAppFloat";
import raiseLogo from "@/assets/raise-logo.png";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Calendar,
  TrendingDown,
  TrendingUp,
  Target,
  Heart,
  DollarSign,
  Repeat,
  Megaphone,
  MessageSquare,
  Workflow,
  BarChart3,
  Clock,
  Flame,
} from "lucide-react";

const CLINIC_MSG =
  "Olá Raise! Sou dono(a) de uma clínica e quero a análise gratuita para encher a minha agenda.";
const clinicLink = buildWhatsAppLink(CLINIC_MSG);

/* ------------------------------- HEADER ------------------------------- */
const ClinicHeader = () => (
  <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
    <div className="container-tight h-16 flex items-center justify-between">
      <a href="/clinicas" className="flex items-center gap-2 group">
        <img
          src={raiseLogo}
          alt="Raise"
          className="w-9 h-9 object-contain transition-smooth group-hover:scale-105"
        />
        <span className="font-display font-bold text-lg tracking-tight">
          Raise <span className="text-muted-foreground font-normal">· Clínicas</span>
        </span>
      </a>

      <Button asChild variant="neon" size="sm" className="h-10 px-5">
        <a href={clinicLink} target="_blank" rel="noopener noreferrer">
          Análise gratuita
        </a>
      </Button>
    </div>
  </header>
);

/* -------------------------------- HERO -------------------------------- */
const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 grid-bg opacity-40" />
    <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neon/10 blur-3xl pointer-events-none" />

    <div className="container-tight relative">
      <div className="chip mb-6 animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
        Para clínicas em Angola
      </div>

      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance max-w-5xl animate-fade-up">
        Se a sua agenda não está cheia, o problema{" "}
        <span className="text-primary italic">não é falta de pacientes</span>.
      </h1>

      <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: "120ms" }}>
        É falta de um sistema para <span className="text-foreground font-semibold">atrair, converter e reter</span> pacientes todos os dias.
      </p>

      <div
        className="mt-8 inline-block p-5 md:p-6 rounded-2xl border border-primary/30 bg-primary/5 max-w-2xl animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <p className="font-display text-xl md:text-2xl font-bold leading-snug">
          Você já investe em marketing…{" "}
          <span className="text-primary">mas sabe quanto está a perder?</span>
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-fade-up" style={{ animationDelay: "280ms" }}>
        <Button asChild variant="neon" size="xl" className="group h-16 px-10 text-base">
          <a href={clinicLink} target="_blank" rel="noopener noreferrer">
            QUERO A ANÁLISE GRATUITA
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        <p className="text-sm text-muted-foreground">
          Diagnóstico gratuito via WhatsApp · Sem compromisso
        </p>
      </div>

      {/* Quick proof */}
      <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl">
        {[
          { icon: Calendar, value: "+47", label: "marcações/sem" },
          { icon: TrendingUp, value: "2x", label: "facturamento" },
          { icon: Target, value: "-75%", label: "custo/lead" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="p-4 rounded-xl bg-card border border-border animate-fade-up"
              style={{ animationDelay: `${360 + i * 80}ms` }}
            >
              <Icon className="w-5 h-5 text-neon mb-2" />
              <p className="font-display text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ------------------------------ PROBLEM ------------------------------ */
const Problem = () => {
  const pains = [
    { icon: Heart, title: "Dependência de indicações", desc: "Cresce só quando alguém lembra de si. Sem indicação, agenda vazia." },
    { icon: TrendingDown, title: "Tráfego sem conversão", desc: "Paga por cliques, mas o telefone não toca. O dinheiro evapora." },
    { icon: Calendar, title: "Agenda inconsistente", desc: "Uma semana lotada, três semanas paradas. Imprevisibilidade total." },
    { icon: XCircle, title: "Leads que não aparecem", desc: "Pessoas pedem informação, marcam — e nunca aparecem na consulta." },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">A realidade</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            A maioria das clínicas paga por cliques que{" "}
            <span className="text-primary">nunca viram consultas</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- AGITATION ----------------------------- */
const Agitation = () => (
  <section className="py-24 md:py-32 relative overflow-hidden border-y border-border">
    <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
    <div className="absolute inset-0 grid-bg opacity-30" />

    <div className="container-tight relative text-center max-w-4xl">
      <Flame className="w-12 h-12 text-primary mx-auto mb-6" />
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
        Não basta ser{" "}
        <span className="italic text-muted-foreground">um bom profissional</span>.
      </h2>
      <p className="mt-8 font-display text-2xl md:text-4xl font-bold text-balance">
        Se ninguém vê a sua clínica,{" "}
        <span className="text-primary">ninguém marca consulta</span>.
      </p>
      <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Excelência clínica não paga as contas. Sistema de aquisição de pacientes paga.
      </p>
    </div>
  </section>
);

/* ----------------------------- SOLUTION ------------------------------ */
const Solution = () => {
  const pillars = [
    { n: "01", icon: Megaphone, title: "Aquisição", desc: "Anúncios no Google, Meta e TikTok para atrair pacientes na sua zona, todos os dias." },
    { n: "02", icon: Heart, title: "Engajamento", desc: "Conteúdo e prova social que constrói confiança antes do paciente ligar." },
    { n: "03", icon: DollarSign, title: "Monetização", desc: "Atendimento estruturado no WhatsApp para transformar interesse em consulta marcada." },
    { n: "04", icon: Repeat, title: "Retenção", desc: "Follow-up e relacionamento para o paciente voltar e indicar outros." },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-fade-b border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container-tight relative">
        <div className="max-w-3xl mb-16">
          <span className="text-neon font-semibold uppercase tracking-wider text-sm">A solução</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Um sistema completo construído em <span className="text-primary">4 pilares</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.n}
                className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary transition-smooth overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute -top-4 -right-2 text-7xl font-display font-bold text-stroke opacity-30 select-none">
                  {p.n}
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
  );
};

/* ------------------------------ SERVICES ----------------------------- */
const Services = () => {
  const items = [
    { icon: Megaphone, title: "Geramos pacientes diariamente com anúncios", desc: "Campanhas pagas optimizadas para a sua zona e especialidade." },
    { icon: Target, title: "Criamos campanhas que convertem", desc: "Criativos, ofertas e segmentação testados para baixar o custo por marcação." },
    { icon: MessageSquare, title: "Estruturamos o atendimento (WhatsApp + CRM)", desc: "Processo de resposta rápida que transforma curioso em consulta marcada." },
    { icon: Workflow, title: "Organizamos o processo comercial da clínica", desc: "Do primeiro contacto à confirmação: scripts, follow-ups e métricas." },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container-tight">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">O que fazemos pela sua clínica</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Não vendemos serviços.{" "}
            <span className="text-primary">Vendemos agenda cheia.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-neon transition-smooth animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center group-hover:bg-neon group-hover:shadow-glow-neon transition-smooth">
                    <Icon className="w-6 h-6 text-neon group-hover:text-neon-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 leading-tight">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* --------------------------- DIFFERENTIATION ------------------------- */
const Differentiation = () => {
  const cols: { label: string; tone: "muted" | "primary"; points: { ok: boolean; text: string }[] }[] = [
    {
      label: "Agência",
      tone: "muted",
      points: [
        { ok: false, text: "Faz posts bonitos" },
        { ok: false, text: "Não responde por resultado" },
        { ok: false, text: "Não entra na operação" },
      ],
    },
    {
      label: "Consultoria",
      tone: "muted",
      points: [
        { ok: false, text: "Dá ideias e relatórios" },
        { ok: false, text: "Não executa" },
        { ok: false, text: "Você fica a fazer tudo" },
      ],
    },
    {
      label: "Raise · Assessoria",
      tone: "primary",
      points: [
        { ok: true, text: "Executa tudo por si" },
        { ok: true, text: "Foco em facturamento" },
        { ok: true, text: "Trabalha com dados" },
        { ok: true, text: "Crescimento previsível" },
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-fade-b border-y border-border relative">
      <div className="container-tight">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Por que falhamos onde os outros falham</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Por que a maioria das clínicas{" "}
            <span className="text-muted-foreground italic">não cresce?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {cols.map((c, i) => (
            <article
              key={c.label}
              className={`relative p-8 rounded-2xl border animate-fade-up ${
                c.tone === "primary"
                  ? "bg-gradient-red text-primary-foreground border-primary shadow-glow-red"
                  : "bg-card border-border"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <p className={`text-sm uppercase tracking-wider font-semibold mb-2 ${c.tone === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {c.tone === "primary" ? "A diferença" : "O comum"}
              </p>
              <h3 className="font-display text-2xl font-bold mb-6">{c.label}</h3>
              <ul className="space-y-3">
                {c.points.map((p) => (
                  <li key={p.text} className="flex items-start gap-3">
                    {p.ok ? (
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${c.tone === "primary" ? "" : "text-muted-foreground"}`} />
                    )}
                    <span className={`leading-relaxed ${c.tone === "primary" ? "" : "text-foreground/90"}`}>{p.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------- CASE ------------------------------- */
const Case = () => {
  const before = ["Agenda inconsistente", "Dependência de indicações", "Investimento sem retorno claro"];
  const after = ["Agenda cheia todas as semanas", "Pacientes recorrentes e indicações activas", "Previsibilidade mensal de facturamento"];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-tight relative">
        <div className="max-w-3xl mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Caso real</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Clínica em Luanda saiu de agenda vazia para{" "}
            <span className="text-primary">semanas completas</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="chip mb-5">
              <TrendingDown className="w-4 h-4 text-primary" />
              ANTES da Raise
            </div>
            <ul className="space-y-4">
              {before.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-neon/5 border border-neon/40">
            <div className="chip mb-5 border-neon/40 bg-neon/10">
              <TrendingUp className="w-4 h-4 text-neon" />
              DEPOIS da Raise
            </div>
            <ul className="space-y-4">
              {after.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90 font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { label: "Marcações / semana", before: "12", after: "47" },
            { label: "Custo por lead", before: "8.500 Kz", after: "2.100 Kz" },
            { label: "Facturamento", before: "60M Kz", after: "120M Kz" },
          ].map((m) => (
            <div key={m.label} className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{m.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-muted-foreground line-through text-sm">{m.before}</span>
                <ArrowRight className="w-3 h-3 text-primary" />
                <span className="font-display text-2xl font-bold text-foreground">{m.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------ URGENCY ------------------------------ */
const Urgency = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-red opacity-95" />
    <div className="absolute inset-0 grid-bg opacity-20" />

    <div className="container-tight relative text-center max-w-4xl text-primary-foreground">
      <AlertTriangle className="w-14 h-14 mx-auto mb-6" />
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
        Quantos pacientes deixou de atender{" "}
        <span className="italic">este mês</span>?
      </h2>
      <p className="mt-8 font-display text-2xl md:text-4xl font-bold text-balance opacity-95">
        Quanto dinheiro está a perder por não ter um sistema?
      </p>

      <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {[
          { icon: Clock, big: "30+", small: "leads/mês perdidos" },
          { icon: DollarSign, big: "5M Kz", small: "facturamento perdido" },
          { icon: BarChart3, big: "0", small: "previsibilidade" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.small} className="p-5 rounded-xl bg-background/10 border border-primary-foreground/20 backdrop-blur">
              <Icon className="w-5 h-5 mx-auto mb-2 opacity-90" />
              <p className="font-display text-2xl md:text-3xl font-bold">{s.big}</p>
              <p className="text-xs opacity-80">{s.small}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ----------------------------- FINAL CTA ----------------------------- */
const FinalCTA = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
    <div className="absolute inset-0 grid-bg opacity-40" />

    <div className="container-tight relative text-center max-w-4xl">
      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance mb-8">
        Ou muda agora…{" "}
        <span className="block text-primary italic">ou continua no mesmo lugar.</span>
      </h2>

      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
        Análise gratuita em 20 minutos via WhatsApp. Mostramos exactamente o que está a impedir a sua agenda de encher.
      </p>

      <Button asChild variant="neon" size="xl" className="group text-base h-16 px-12">
        <a href={clinicLink} target="_blank" rel="noopener noreferrer">
          QUERO ENCHER A MINHA AGENDA
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>

      <p className="mt-6 text-muted-foreground text-sm">
        Fale agora com a equipa da Raise no WhatsApp · +244 939 636 042
      </p>
    </div>
  </section>
);

/* -------------------------------- PAGE -------------------------------- */
const Clinicas = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Raise · Marketing para Clínicas em Angola — Encha a sua agenda";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Assessoria de marketing para clínicas em Angola. Sistema completo para atrair, converter e reter pacientes. Análise gratuita via WhatsApp.",
    );

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <ClinicHeader />
      <main className="min-h-screen bg-background">
        <Hero />
        <Problem />
        <Agitation />
        <Solution />
        <Services />
        <Differentiation />
        <Case />
        <Urgency />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Clinicas;
