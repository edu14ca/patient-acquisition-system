import SegmentPage from "@/components/raise/SegmentPage";

const Gyms = () => (
  <SegmentPage
    segment="Ginásios"
    badge="Para ginásios e estúdios em Angola"
    seoTitle="Raise — Assessoria de Marketing para Ginásios em Angola"
    seoDescription="Enchemos o ginásio com novos alunos todos os meses e construímos retenção real para parar a sangria de cancelamentos."
    headline={
      <>
        Ginásio cheio em Janeiro e vazio em Março?{" "}
        <span className="text-primary italic">Isso tem solução.</span>
      </>
    }
    subheadline="Construímos um sistema previsível de novos alunos e um funil de retenção que mantém o seu ginásio cheio o ano todo."
    pains={[
      { title: "Falta de novos alunos", desc: "Captação só funciona em Janeiro. O resto do ano vive de sobras." },
      { title: "Baixa retenção", desc: "Aluno entra, paga uma mensalidade e desaparece. Sangria silenciosa." },
      { title: "Dependência do boca-a-boca", desc: "Sem aquisição activa, o crescimento depende de sorte e indicação." },
      { title: "Equipa sem processo comercial", desc: "Visita guiada sem fecho. Lead que vai embora a pensar." },
    ]}
    pillars={[
      { title: "Aquisição", desc: "Campanhas geo-localizadas para atrair alunos da sua zona, todos os meses." },
      { title: "Engajamento", desc: "Conteúdo de transformação, provas reais e prova social do seu staff." },
      { title: "Monetização", desc: "Funil de visita guiada com qualificação e fecho estruturado." },
      { title: "Retenção", desc: "Onboarding, acompanhamento e plano de relacionamento para o aluno ficar." },
    ]}
    services={[
      { title: "Sistema previsível de novos alunos", desc: "Campanhas pagas activas o ano inteiro — não só na época das resoluções." },
      { title: "Funil de visita guiada que converte", desc: "Processo claro do clique ao fecho da matrícula no balcão." },
      { title: "Funil de retenção e onboarding", desc: "Reduzimos a taxa de cancelamento com acompanhamento e relacionamento." },
      { title: "CRM e WhatsApp para reactivar inactivos", desc: "Base de ex-alunos trabalhada para voltar a treinar." },
    ]}
    caseStudy={{
      title: <>Ginásio em Luanda <span className="text-primary">parou de perder alunos</span> e cresceu 80%.</>,
      before: ["Captação só em Janeiro", "Cancelamentos altos no 2º mês", "Sem processo comercial no balcão"],
      after: ["Matrículas previsíveis todos os meses", "Retenção elevada e plano activo", "Equipa com método de fecho que funciona"],
    }}
    whatsappMessage="Olá Raise, tenho um ginásio e quero o diagnóstico de crescimento."
  />
);

export default Gyms;
