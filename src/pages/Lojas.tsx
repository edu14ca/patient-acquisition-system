import SegmentPage from "@/components/raise/SegmentPage";

const Lojas = () => (
  <SegmentPage
    segment="Lojas"
    badge="Para lojas e e-commerce em Angola"
    seoTitle="Raise — Assessoria de Marketing para Lojas em Angola"
    seoDescription="Vendemos os seus produtos todos os dias com tráfego pago, conversão no WhatsApp e retenção de clientes."
    headline={
      <>
        Loja parada não é falta de produto.{" "}
        <span className="text-primary italic">É falta de tráfego que converte.</span>
      </>
    }
    subheadline="Criamos um sistema de vendas que funciona todos os dias — online e na loja física — com previsibilidade e margem."
    pains={[
      { title: "Stock parado", desc: "Produto bom acumulado em armazém porque ninguém sabe que existe." },
      { title: "Vendas só por indicação", desc: "Sem aquisição activa, o crescimento é refém da sorte." },
      { title: "Carrinho abandonado", desc: "Cliente interessado que nunca finaliza a compra. Dinheiro deixado em cima da mesa." },
      { title: "Cliente compra uma vez e some", desc: "Sem recompra nem programa de fidelização, cada venda é a primeira." },
    ]}
    pillars={[
      { title: "Aquisição", desc: "Anúncios para os produtos com maior margem e melhor conversão." },
      { title: "Engajamento", desc: "Conteúdo e prova social que constroem desejo antes da compra." },
      { title: "Monetização", desc: "Funil directo no WhatsApp/loja, com ofertas, upsell e ticket médio maior." },
      { title: "Retenção", desc: "Recompra automática, programa de fidelização e relacionamento contínuo." },
    ]}
    services={[
      { title: "Anúncios que vendem produto, não só geram likes", desc: "Campanhas focadas em facturamento por colecção ou produto-âncora." },
      { title: "Criativos que param o scroll e vendem", desc: "Vídeos, fotos e copies pensados para conversão real." },
      { title: "Funil de venda no WhatsApp e checkout simplificado", desc: "Reduzimos o atrito até ao pagamento e recuperamos carrinho abandonado." },
      { title: "Recompra activa todos os meses", desc: "Base de clientes trabalhada com campanhas e ofertas exclusivas." },
    ]}
    caseStudy={{
      title: <>Loja em Luanda <span className="text-primary">duplicou as vendas</span> em 4 meses.</>,
      before: ["Stock parado", "Vendas dependentes de boca-a-boca", "Sem recompra"],
      after: ["Stock a girar todas as semanas", "Aquisição diária previsível", "Clientes a comprar mais de uma vez por mês"],
    }}
    whatsappMessage="Olá Raise, tenho uma loja e quero o diagnóstico de crescimento."
  />
);

export default Lojas;
