import SegmentPage from "@/components/raise/SegmentPage";

const Clinicas = () => (
  <SegmentPage
    segment="Clínicas"
    badge="Para clínicas em Angola"
    seoTitle="Raise — Assessoria de Marketing para Clínicas em Angola"
    seoDescription="Sistema completo para clínicas encherem a agenda em Angola: tráfego pago, conversão no WhatsApp e retenção de pacientes."
    headline={
      <>
        Se a sua agenda não está cheia, o problema{" "}
        <span className="text-primary italic">não é falta de pacientes</span>.
      </>
    }
    subheadline="É falta de um sistema para atrair, converter e reter pacientes todos os dias. A Raise executa tudo por si."
    pains={[
      { title: "Dependência de indicações", desc: "Cresce só quando alguém lembra de si. Sem indicação, agenda vazia." },
      { title: "Tráfego sem conversão", desc: "Paga por cliques, mas o telefone não toca. O dinheiro evapora." },
      { title: "Agenda inconsistente", desc: "Uma semana lotada, três paradas. Imprevisibilidade total." },
      { title: "Leads que não aparecem", desc: "Pessoas pedem informação, marcam e nunca aparecem na consulta." },
    ]}
    pillars={[
      { title: "Aquisição", desc: "Anúncios no Google, Meta e TikTok para atrair pacientes na sua zona, todos os dias." },
      { title: "Engajamento", desc: "Conteúdo e prova social que constrói confiança antes do paciente ligar." },
      { title: "Monetização", desc: "Atendimento estruturado no WhatsApp para transformar interesse em consulta marcada." },
      { title: "Retenção", desc: "Follow-up e relacionamento para o paciente voltar e indicar outros." },
    ]}
    services={[
      { title: "Geramos pacientes diariamente com anúncios", desc: "Campanhas pagas optimizadas para a sua zona e especialidade." },
      { title: "Criamos campanhas que convertem", desc: "Criativos, ofertas e segmentação testados para baixar o custo por marcação." },
      { title: "Estruturamos o atendimento (WhatsApp + CRM)", desc: "Processo de resposta rápida que transforma curioso em consulta marcada." },
      { title: "Organizamos o processo comercial da clínica", desc: "Do primeiro contacto à confirmação: scripts, follow-ups e métricas." },
    ]}
    caseStudy={{
      title: <>Clínica em Luanda saiu de agenda vazia para <span className="text-primary">semanas completas</span>.</>,
      before: ["Agenda inconsistente", "Dependência de indicações", "Investimento sem retorno claro"],
      after: ["Agenda cheia todas as semanas", "Pacientes recorrentes e indicações activas", "Previsibilidade mensal de facturamento"],
    }}
    whatsappMessage="Olá Raise, sou dono(a) de uma clínica e quero o diagnóstico de crescimento."
  />
);

export default Clinicas;
