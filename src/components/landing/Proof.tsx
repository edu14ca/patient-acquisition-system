import { CheckCircle2 } from "lucide-react";

const Proof = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container-tight relative">
        <div className="max-w-3xl">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Por que funciona</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 text-balance leading-tight">
            A maioria das clínicas foca apenas em atrair pacientes.{" "}
            <span className="italic text-accent">As que crescem criam um sistema completo</span> — do primeiro clique até o retorno do paciente.
          </h2>

          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10">
            Este modelo é baseado em estratégias utilizadas por centenas de negócios locais que dependem de clientes todos os dias.
          </p>

          <div className="space-y-4">
            {[
              "Não é sobre postar mais",
              "É sobre construir um processo previsível",
              "Cada etapa mensurada, cada lead acompanhada",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-lg text-primary-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
