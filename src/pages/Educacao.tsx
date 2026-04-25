import SegmentPage from "@/components/raise/SegmentPage";

const Educacao = () => (
  <SegmentPage
    segment="Educação"
    badge="Para escolas, cursos e formações em Angola"
    seoTitle="Raise — Assessoria de Marketing para Educação em Angola"
    seoDescription="Enchemos turmas e cursos com sistema de captação, conversão e retenção de alunos. Marketing educacional que gera matrículas."
    headline={
      <>
        Curso bom sem matrículas é{" "}
        <span className="text-primary italic">apenas uma boa ideia</span>.
      </>
    }
    subheadline="Construímos um sistema previsível de matrículas — da primeira visualização do anúncio até à confirmação do pagamento."
    pains={[
      { title: "Turmas que não fecham", desc: "Investe na divulgação e a sala fica meia. Custo fixo a correr na mesma." },
      { title: "Lead que não vira matrícula", desc: "Muito interessado, pouca confirmação. Falta processo de fecho." },
      { title: "Dependência da época", desc: "Vende só em Janeiro e Setembro. O resto do ano é deserto." },
      { title: "Aluno que desiste a meio", desc: "Sem retenção, perde matrículas e referências." },
    ]}
    pillars={[
      { title: "Aquisição", desc: "Campanhas focadas em interessados certos para cada curso ou modalidade." },
      { title: "Engajamento", desc: "Aulas-aberta, conteúdo do professor e provas de resultado dos alunos." },
      { title: "Monetização", desc: "Funil de matrícula no WhatsApp, com follow-up e fecho activo." },
      { title: "Retenção", desc: "Engajamento contínuo do aluno para terminar o curso e indicar novos." },
    ]}
    services={[
      { title: "Atraímos interessados certos para cada curso", desc: "Segmentação por idade, profissão e objectivo. Lead barato e qualificado." },
      { title: "Aulas-abertas e iscas digitais que convertem", desc: "Materiais que aumentam confiança e aceleram a matrícula." },
      { title: "Funil de matrícula no WhatsApp", desc: "Atendimento estruturado, follow-up e confirmação de pagamento." },
      { title: "Activação contínua de matrículas o ano todo", desc: "Calendário de campanhas para não depender só das épocas." },
    ]}
    caseStudy={{
      title: <>Escola em Luanda <span className="text-primary">encheu turmas fora da época</span> tradicional.</>,
      before: ["Matrículas concentradas em duas épocas", "Lead caro e desqualificado", "Sem retenção de alunos"],
      after: ["Matrículas o ano todo, com previsibilidade", "Custo por matrícula reduzido drasticamente", "Alunos que terminam e trazem mais alunos"],
    }}
    whatsappMessage="Olá Raise, tenho um projecto de educação e quero o diagnóstico de crescimento."
  />
);

export default Educacao;
