import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { q: string; a: string };

const defaultFaqs: FaqItem[] = [
  {
    q: "Quanto custa a assessoria?",
    a: "O investimento depende do estágio do seu negócio e dos canais que precisamos activar. Após o diagnóstico inicial gratuito, apresentamos uma proposta clara e fixa — sem surpresas.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Os primeiros leads e métricas chegam normalmente entre 7 e 21 dias. Resultados consistentes de facturamento aparecem entre o segundo e o terceiro mês, à medida que optimizamos o sistema.",
  },
  {
    q: "Vocês fazem só posts?",
    a: "Não. Posts são apenas uma pequena parte. Executamos tráfego pago, criativos, landing pages, CRM, automação, dados e estrutura comercial. O foco é facturamento, não vaidade.",
  },
  {
    q: "Preciso ter equipa interna?",
    a: "Não é obrigatório. Funcionamos como o seu time externo de marketing e vendas. Se já tem equipa, integramo-nos e elevamos o nível de execução.",
  },
  {
    q: "Funciona em Angola?",
    a: "Sim. A Raise é nascida e operada em Angola. Conhecemos as plataformas de pagamento, comportamento do consumidor local e os canais que realmente convertem aqui.",
  },
  {
    q: "Já investi em marketing e não tive resultado — o que muda?",
    a: "Muda quem assume responsabilidade. Em vez de cobrar pelo trabalho feito, nós respondemos pela métrica que importa: facturamento. Diagnóstico, execução e dados — tudo num só lugar.",
  },
];

const FAQ = ({ items = defaultFaqs }: { items?: FaqItem[] }) => {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="container-tight max-w-4xl">
        <div className="mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">FAQ</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-[1.05] text-balance">
            Perguntas que ouvimos <span className="text-primary">todos os dias</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-primary/40 transition-smooth"
            >
              <AccordionTrigger className="font-display text-lg md:text-xl font-bold text-left hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
