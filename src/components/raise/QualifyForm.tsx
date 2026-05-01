import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Lock, Clock } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { z } from "zod";

type FormState = {
  sector: string;
  revenue: string;
  newClients: string;
  problem: string;
  invest: string;
  name: string;
  whatsapp: string;
};

const initial: FormState = {
  sector: "",
  revenue: "",
  newClients: "",
  problem: "",
  invest: "",
  name: "",
  whatsapp: "",
};

const sectors = ["Clínica", "Restaurante", "Loja", "Serviços", "Outro"];
const revenues = [
  "Menos de 500.000 KZ",
  "500.000 – 2M KZ",
  "2M – 5M KZ",
  "+5M KZ",
];
const problems = [
  "Falta de clientes",
  "Não consigo converter",
  "Vendas inconsistentes",
  "Não tenho processo",
];
const invests = ["Sim", "Depende do plano", "Não"];

const schema = z.object({
  sector: z.string().min(1),
  revenue: z.string().min(1),
  newClients: z.string().trim().min(1).max(50),
  problem: z.string().min(1),
  invest: z.string().min(1),
  name: z.string().trim().min(2).max(80),
  whatsapp: z
    .string()
    .trim()
    .min(6)
    .max(25)
    .regex(/^[+0-9\s()-]+$/, { message: "Número inválido" }),
});

const Pill = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-left p-4 rounded-xl border transition-smooth font-medium ${
      active
        ? "border-primary bg-primary/10 text-foreground shadow-glow-red"
        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
    }`}
  >
    <span className="flex items-center justify-between gap-3">
      <span>{children}</span>
      {active && <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />}
    </span>
  </button>
);

const QualifyForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 6;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setError(null);
  };

  const stepValid = useMemo(() => {
    switch (step) {
      case 0: return !!data.sector;
      case 1: return !!data.revenue;
      case 2: return data.newClients.trim().length > 0;
      case 3: return !!data.problem;
      case 4: return !!data.invest;
      case 5: return data.name.trim().length >= 2 && data.whatsapp.trim().length >= 6;
      default: return false;
    }
  }, [step, data]);

  const next = () => {
    if (!stepValid) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError("Verifica os teus dados antes de enviar.");
      return;
    }
    const message = [
      "Preenchi o diagnóstico e quero analisar o meu negócio.",
      "",
      `Nome: ${data.name}`,
      `Sector: ${data.sector}`,
      `Facturamento mensal: ${data.revenue}`,
      `Clientes novos por semana: ${data.newClients}`,
      `Maior problema: ${data.problem}`,
      `Disposto a investir: ${data.invest}`,
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="diagnostico-form" className="py-24 md:py-32 relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container-tight relative">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Diagnóstico de crescimento
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Isto <span className="text-primary italic">não é</span> para todos.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Só analisamos negócios que querem crescer com <span className="text-foreground font-semibold">processo</span>, não com tentativa.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            Vagas limitadas — <span className="text-foreground font-semibold">apenas 4 diagnósticos por semana</span>.
          </div>
        </div>

        <div className="max-w-2xl mx-auto rounded-3xl border border-border bg-card/80 backdrop-blur-md p-6 md:p-10 shadow-elegant">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>Passo {step + 1} de {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="min-h-[320px]">
            {step === 0 && (
              <div className="animate-fade-up">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  Qual é o teu sector?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sectors.map((s) => (
                    <Pill key={s} active={data.sector === s} onClick={() => update("sector", s)}>
                      {s}
                    </Pill>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="animate-fade-up">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  Quanto o teu negócio fatura por mês?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Resposta confidencial. Usamos apenas para qualificar o diagnóstico.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {revenues.map((r) => (
                    <Pill key={r} active={data.revenue === r} onClick={() => update("revenue", r)}>
                      {r}
                    </Pill>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-up">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  Quantos clientes novos tens por semana?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Pacientes, vendas, contratos — usa o teu indicador real.
                </p>
                <Input
                  value={data.newClients}
                  onChange={(e) => update("newClients", e.target.value)}
                  placeholder="Ex.: 12"
                  maxLength={50}
                  className="h-14 text-lg"
                />
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-up">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  Qual é o teu maior problema hoje?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {problems.map((p) => (
                    <Pill key={p} active={data.problem === p} onClick={() => update("problem", p)}>
                      {p}
                    </Pill>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-up">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  Estás disposto a investir para estruturar crescimento?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Trabalhamos com empresas que tratam marketing como <span className="text-foreground font-semibold">investimento</span>, não como custo.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {invests.map((i) => (
                    <Pill key={i} active={data.invest === i} onClick={() => update("invest", i)}>
                      {i}
                    </Pill>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="animate-fade-up space-y-5">
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                  Para onde enviamos o teu diagnóstico?
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="qf-name">Nome</Label>
                  <Input
                    id="qf-name"
                    value={data.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="O teu nome"
                    maxLength={80}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qf-wpp">WhatsApp</Label>
                  <Input
                    id="qf-wpp"
                    value={data.whatsapp}
                    onChange={(e) => update("whatsapp", e.target.value)}
                    placeholder="+244 9XX XXX XXX"
                    maxLength={25}
                    inputMode="tel"
                    className="h-12"
                  />
                </div>
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="w-3.5 h-3.5" />
                  Dados protegidos. Sem spam. Resposta em até 24h úteis.
                </p>
              </div>
            )}
          </div>

          {error && (
            <p className="mt-4 text-sm text-destructive font-medium">{error}</p>
          )}

          <div className="mt-8 flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={prev}
              disabled={step === 0}
              className="h-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>

            {step < totalSteps - 1 ? (
              <Button
                type="button"
                variant="hero"
                onClick={next}
                disabled={!stepValid}
                className="h-12 px-6"
              >
                Continuar
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="button"
                variant="hero"
                onClick={submit}
                disabled={!stepValid}
                className="h-12 px-6"
              >
                Quero o meu diagnóstico
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-success" />
            Diagnóstico gratuito
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-success" />
            Sem compromisso
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-success" />
            Resposta em 24h úteis
          </span>
        </div>
      </div>
    </section>
  );
};

export default QualifyForm;
