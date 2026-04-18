import { X } from "lucide-react";

const problems = [
  "Pacientes entram em contacto e não recebem resposta a tempo",
  "WhatsApp desorganizado ou sem resposta",
  "Instagram com seguidores mas sem marcações reais",
  "Dependência total de indicação para ter pacientes",
  "Falta de previsibilidade no número de consultas por semana",
];

const Problem = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">O Problema</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-12 text-balance leading-tight">
            Se você é dono de clínica, provavelmente já passou por isto:
          </h2>

          <ul className="space-y-4 mb-12">
            {problems.map((problem, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-lg text-foreground/90 leading-relaxed">{problem}</span>
              </li>
            ))}
          </ul>

          <div className="p-8 rounded-2xl bg-gradient-hero text-primary-foreground shadow-elegant">
            <p className="text-2xl md:text-3xl font-display font-semibold text-balance leading-snug">
              Isto não é falta de pacientes —{" "}
              <span className="text-accent italic">é falta de processo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
