import SegmentPage from "@/components/raise/SegmentPage";

const Restaurantes = () => (
  <SegmentPage
    segment="Restaurantes"
    badge="Para restaurantes em Angola"
    seoTitle="Raise — Assessoria de Marketing para Restaurantes em Angola"
    seoDescription="Enchemos o seu restaurante todos os dias da semana. Aquisição de clientes, delivery, fidelização e dados."
    headline={
      <>
        Mesa vazia não é falta de comida boa.{" "}
        <span className="text-primary italic">É falta de sistema.</span>
      </>
    }
    subheadline="Construímos um motor previsível de novos clientes, recompras e delivery — para o seu restaurante facturar todos os dias da semana."
    pains={[
      { title: "Movimento só ao fim-de-semana", desc: "Segunda a quinta paradas. Equipa parada, custo a correr." },
      { title: "Delivery dependente das apps", desc: "Margem espremida e zero relacionamento directo com o cliente." },
      { title: "Cliente que não volta", desc: "Sem CRM, sem follow-up. Cada cliente é uma venda única." },
      { title: "Marketing sem retorno", desc: "Posts bonitos no Instagram que não enchem a casa." },
    ]}
    pillars={[
      { title: "Aquisição", desc: "Campanhas geo-localizadas para atrair clientes próximos na hora certa." },
      { title: "Engajamento", desc: "Conteúdo de comida que gera desejo e trafego orgânico consistente." },
      { title: "Monetização", desc: "Reservas, delivery directo e ofertas dia-a-dia para subir o ticket médio." },
      { title: "Retenção", desc: "Programa de recompra e WhatsApp para o cliente voltar todas as semanas." },
    ]}
    services={[
      { title: "Atraímos clientes na sua zona com anúncios", desc: "Campanhas geo-segmentadas em Meta e TikTok focadas em hora de almoço, jantar e fins-de-semana." },
      { title: "Criamos conteúdo de comida que vende", desc: "Vídeos, fotos e criativos pensados para gerar reserva e pedido — não só likes." },
      { title: "Estruturamos delivery e reservas no WhatsApp", desc: "Funil directo, com cardápio, pagamento e confirmação automática." },
      { title: "Activamos cliente antigo todas as semanas", desc: "Base de contactos, campanhas de recompra e ofertas semanais." },
    ]}
    caseStudy={{
      title: <>Restaurante em Luanda <span className="text-primary">triplicou o movimento</span> à semana.</>,
      before: ["Casa cheia só sexta e sábado", "Delivery refém das apps", "Sem base de clientes própria"],
      after: ["Movimento consistente de segunda a domingo", "Delivery directo com margem maior", "Base activa de clientes com recompra mensal"],
    }}
    whatsappMessage="Olá Raise, tenho um restaurante e quero o diagnóstico de crescimento."
  />
);

export default Restaurantes;
