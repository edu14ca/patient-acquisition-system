import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100, "Nome demasiado longo"),
  clinic: z.string().trim().min(2, "Insira o nome da clínica").max(100),
  whatsapp: z.string().trim().min(7, "WhatsApp inválido").max(25),
  city: z.string().trim().min(2, "Insira a cidade").max(80),
});

type FormData = z.infer<typeof formSchema>;

const OfferForm = () => {
  const { toast } = useToast();
  const [data, setData] = useState<FormData>({ name: "", clinic: "", whatsapp: "", city: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const k = issue.path[0] as keyof FormData;
        fieldErrors[k] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast({ title: "Pedido recebido!", description: "Entraremos em contacto em breve." });
    }, 800);
  };

  return (
    <section id="oferta" className="py-24 md:py-32 bg-gradient-soft relative overflow-hidden">
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Oferta</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance leading-tight">
              Análise gratuita de aquisição de pacientes para clínicas dentárias
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Você vai receber:</p>

            <ul className="space-y-4 mb-8">
              {[
                "Diagnóstico completo do marketing actual da clínica",
                "Identificação dos pontos onde está a perder pacientes",
                "Plano simples e prático para aumentar marcações",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30">
              <AlertTriangle className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">Apenas 3 clínicas por semana</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-card rounded-2xl shadow-elegant border border-border p-8 md:p-10 animate-scale-in">
            {done ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 rounded-full bg-success/10 mb-4">
                  <CheckCircle2 className="w-12 h-12 text-success" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Recebemos o seu pedido</h3>
                <p className="text-muted-foreground">Vamos entrar em contacto pelo WhatsApp em breve.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Nome</Label>
                  <Input id="name" value={data.name} onChange={handleChange("name")} placeholder="O seu nome" className="mt-2 h-12" maxLength={100} />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="clinic" className="text-foreground font-medium">Nome da clínica</Label>
                  <Input id="clinic" value={data.clinic} onChange={handleChange("clinic")} placeholder="Ex: Clínica Sorriso" className="mt-2 h-12" maxLength={100} />
                  {errors.clinic && <p className="text-sm text-destructive mt-1">{errors.clinic}</p>}
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-foreground font-medium">WhatsApp</Label>
                  <Input id="whatsapp" type="tel" value={data.whatsapp} onChange={handleChange("whatsapp")} placeholder="+351 ..." className="mt-2 h-12" maxLength={25} />
                  {errors.whatsapp && <p className="text-sm text-destructive mt-1">{errors.whatsapp}</p>}
                </div>

                <div>
                  <Label htmlFor="city" className="text-foreground font-medium">Cidade</Label>
                  <Input id="city" value={data.city} onChange={handleChange("city")} placeholder="A cidade da clínica" className="mt-2 h-12" maxLength={80} />
                  {errors.city && <p className="text-sm text-destructive mt-1">{errors.city}</p>}
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={submitting}>
                  {submitting ? "A enviar..." : "Quero a minha análise gratuita"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">Leva menos de 1 minuto</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferForm;
