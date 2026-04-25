import SegmentPage from "@/components/raise/SegmentPage";

const Servicos = () => (
  <SegmentPage
    segment="Serviços"
    badge="Para empresas de serviços em Angola"
    seoTitle="Raise — Assessoria de Marketing para Empresas de Serviços"
    seoDescription="Geramos leads qualificados e estruturamos o processo comercial para empresas de serviços crescerem com previsibilidade."
    headline={
      <>
        Serviço bom sem cliente é o mesmo que{" "}
        <span className="text-primary italic">não ter serviço</span>.
      </>
    }
    subheadline="Construímos um sistema de geração e qualificação de leads que enche a agenda comercial — e estrutura o fecho."
    pains={[
      { title: "Lead caro e sem qualidade", desc: "Paga por contactos que nunca fecham contrato." },
      { title: "Ciclo de venda longo e desorganizado", desc: "Propostas que ficam sem resposta. Pipeline frio." },
      { title: "Comercial sem processo", desc: "Cada vendedor faz à sua maneira. Não há método, não escala." },
      { title: "Crescimento dependente do dono", desc: "Quem vende é o fundador. Quando ele para, a empresa para." },
    ]}
    pillars={[
      { title: "Aquisição", desc: "Tráfego pago focado em leads qualificados, não em volume vazio." },
      { title: "Engajamento", desc: "Autoridade, prova social e materiais que aceleram a decisão de compra." },
      { title: "Monetização", desc: "Processo comercial estruturado: scripts, follow-up, propostas e fecho." },
      { title: "Retenção", desc: "Pós-venda, upsell e indicação activa para multiplicar cada cliente." },
    ]}
    services={[
      { title: "Geramos leads qualificados todos os dias", desc: "Campanhas pagas com qualificação prévia para o comercial não perder tempo." },
      { title: "Construímos páginas e funis que vendem", desc: "Landing pages e materiais que aumentam a taxa de conversão." },
      { title: "Estruturamos o processo comercial", desc: "CRM, pipeline, scripts e follow-up para fechar mais negócios." },
      { title: "Implementamos dados e dashboards", desc: "Decisões baseadas em métricas reais, não em achismo." },
    ]}
    caseStudy={{
      title: <>Empresa de serviços <span className="text-primary">multiplicou propostas fechadas</span> em 90 dias.</>,
      before: ["Leads caros e sem qualidade", "Comercial improvisado", "Crescimento dependente do dono"],
      after: ["Pipeline cheio de oportunidades qualificadas", "Processo comercial replicável", "Crescimento sustentado mês a mês"],
    }}
    whatsappMessage="Olá Raise, tenho uma empresa de serviços e quero o diagnóstico de crescimento."
  />
);

export default Servicos;
