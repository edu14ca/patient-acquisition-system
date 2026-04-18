import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Isso funciona para clínicas pequenas?",
    a: "Sim. O sistema é escalável — funciona tanto para clínicas com 1 cadeira como para clínicas maiores.",
  },
  {
    q: "Preciso investir muito dinheiro?",
    a: "Não. Começamos com orçamentos acessíveis e aumentamos conforme os resultados aparecem.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "As primeiras marcações podem aparecer já na primeira semana de campanhas activas.",
  },
  {
    q: "Já trabalho com outra agência.",
    a: "A análise é gratuita e sem compromisso. Pode comparar e decidir com dados na mão.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Dúvidas frequentes</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance leading-tight">
            As perguntas que toda a gente faz
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 shadow-card-soft data-[state=open]:shadow-elegant transition-smooth"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
