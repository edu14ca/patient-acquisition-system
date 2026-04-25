import SegmentPage from "@/components/raise/SegmentPage";

const Imobiliarias = () => (
  <SegmentPage
    segment="Imobiliárias"
    badge="Para imobiliárias e construtoras em Angola"
    seoTitle="Raise — Assessoria de Marketing para Imobiliárias em Angola"
    seoDescription="Geramos compradores qualificados, estruturamos o comercial e aceleramos a venda de imóveis e empreendimentos em Angola."
    headline={
      <>
        Imóvel parado não falta de procura.{" "}
        <span className="text-primary italic">É falta de aquisição activa.</span>
      </>
    }
    subheadline="Criamos um motor de captação de compradores qualificados — e estruturamos o comercial para fechar negócios mais rápido."
    pains={[
      { title: "Stand vazio e visitas a zero", desc: "Empreendimento bonito que ninguém visita. Capital parado." },
      { title: "Lead curioso, não comprador", desc: "Muita gente a perguntar preço, ninguém a fechar negócio." },
      { title: "Ciclo de venda muito longo", desc: "Sem nutrição nem follow-up, o lead esfria e desaparece." },
      { title: "Dependência do agente certo", desc: "Quando o melhor vendedor sai, as vendas caem com ele." },
    ]}
    pillars={[
      { title: "Aquisição", desc: "Campanhas segmentadas por tipo de imóvel, ticket e perfil de comprador." },
      { title: "Engajamento", desc: "Tour virtual, prova social e conteúdo que constrói confiança." },
      { title: "Monetização", desc: "Qualificação de lead, agendamento de visita e processo de fecho." },
      { title: "Retenção", desc: "Pós-venda, indicações e gestão da carteira para vender o próximo imóvel." },
    ]}
    services={[
      { title: "Geramos compradores qualificados todos os dias", desc: "Campanhas focadas em quem tem capacidade e intenção real de compra." },
      { title: "Tours virtuais e criativos premium", desc: "Conteúdo que valoriza o imóvel e diminui o tempo de decisão." },
      { title: "Funil comercial estruturado no WhatsApp e CRM", desc: "Qualificação, agendamento de visitas e follow-up automático." },
      { title: "Dashboards de vendas e funil", desc: "Visibilidade total do pipeline para decidir com base em dados." },
    ]}
    caseStudy={{
      title: <>Imobiliária <span className="text-primary">acelerou venda de empreendimento</span> em 60 dias.</>,
      before: ["Stand vazio", "Leads sem qualificação", "Ciclo de venda longo"],
      after: ["Visitas agendadas todas as semanas", "Pipeline qualificado e organizado", "Velocidade de venda muito superior"],
    }}
    whatsappMessage="Olá Raise, tenho uma imobiliária e quero o diagnóstico de crescimento."
  />
);

export default Imobiliarias;
