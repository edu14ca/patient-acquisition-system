import {
  Compass,
  Megaphone,
  Clapperboard,
  LayoutTemplate,
  BarChart3,
  Workflow,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export type SolutionId = "gestao" | "midia" | "criativos" | "paginas" | "dados" | "crm" | "vendas";
export type ModelId = "assessoria" | "estruturacao" | "projecto" | "mentoria";

export type Solution = {
  id: SolutionId;
  label: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
};

export type DeliveryModel = {
  id: ModelId;
  label: string;
  short: string;
  desc: string;
  idealFor: string;
};

export const solutions: Solution[] = [
  {
    id: "gestao",
    label: "Gestão",
    icon: Compass,
    title: "Assessoria de Growth",
    desc: "Gestão do projecto e estratégia de crescimento da sua empresa, com metas mensais e foco no maior retorno sobre cada kwanza investido.",
    points: [
      "Growth Advisor da Raise a liderar o plano",
      "Reuniões semanais com métricas, metas e próximos passos",
      "Método desenhado para a realidade das PMEs angolanas",
    ],
  },
  {
    id: "midia",
    label: "Mídia",
    icon: Megaphone,
    title: "Gestão de Mídia Paga",
    desc: "Campanhas no Meta, Google e TikTok para trazer os clientes certos todos os dias, ao menor custo por lead e por venda.",
    points: [
      "Campanhas organizadas por objectivo de negócio, não por gosto",
      "UTMs e pixel configurados para saber o que gera venda",
      "Optimização semanal de orçamento, público e anúncio",
    ],
  },
  {
    id: "criativos",
    label: "Criativos",
    icon: Clapperboard,
    title: "Estratégia e Produção de Criativos",
    desc: "Anúncios, vídeos e conteúdos pensados para parar o scroll e levar a pessoa à conversa, não para ganhar prémios de design.",
    points: [
      "Ângulos baseados nas dores e objecções reais do seu cliente",
      "Testes contínuos para descobrir o que converte",
      "Produção adaptada ao contexto angolano",
    ],
  },
  {
    id: "paginas",
    label: "Páginas",
    icon: LayoutTemplate,
    title: "Web Design e Landing Pages",
    desc: "Sites e páginas de conversão rápidos, claros e ligados ao WhatsApp, feitos para transformar visitas em contactos.",
    points: [
      "Páginas focadas numa única acção",
      "Integração com WhatsApp, pixel e CRM",
      "Optimizadas para telemóvel e internet lenta",
    ],
  },
  {
    id: "dados",
    label: "Dados",
    icon: BarChart3,
    title: "Dados e Business Intelligence",
    desc: "Dashboards que mostram quanto custa cada cliente novo, quanto ele vale e onde está o dinheiro a fugir.",
    points: [
      "CAC, LTV, taxa de conversão e breakeven num só lugar",
      "Leitura semanal dos números com a sua equipa",
      "Decisões tomadas com base em dados, não em percepção",
    ],
  },
  {
    id: "crm",
    label: "CRM",
    icon: Workflow,
    title: "CRM e Jornadas",
    desc: "Organização do WhatsApp e do funil no CRM para que nenhum lead fique sem resposta e cada cliente volte a comprar.",
    points: [
      "Implementação de funil no Kommo, com etapas claras",
      "Automações de resposta, follow-up e reactivação",
      "Réguas de relacionamento para aumentar a recompra",
    ],
  },
  {
    id: "vendas",
    label: "Vendas",
    icon: Handshake,
    title: "Estruturação Comercial",
    desc: "Processo, scripts e formação para a sua equipa transformar conversas em vendas com previsibilidade.",
    points: [
      "Scripts de atendimento, qualificação e fecho",
      "Cliente Oculto para avaliar o atendimento real",
      "Formação da equipa e apoio de SDR / Closer",
    ],
  },
];

export const models: DeliveryModel[] = [
  {
    id: "assessoria",
    label: "Assessoria contínua",
    short: "Assessoria",
    desc: "Uma equipa de especialistas Raise opera o seu marketing e vendas, partilhando a atenção com outras empresas. Modelo desenhado para ter uma equipa completa por uma fracção do custo de a contratar.",
    idealFor: "Empresas que querem crescer todos os meses sem montar um departamento interno.",
  },
  {
    id: "estruturacao",
    label: "Estruturação",
    short: "Estruturação",
    desc: "Um sprint de 4 semanas para diagnosticar o negócio, montar a base (tracking, CRM, oferta e plano) e deixar a operação pronta para escalar.",
    idealFor: "A porta de entrada para quem quer começar com risco controlado.",
  },
  {
    id: "projecto",
    label: "Projectos pontuais",
    short: "Pontual",
    desc: "Resolvemos uma frente concreta com execução completa e prazo definido: uma campanha, uma landing page, a implementação do CRM.",
    idealFor: "Empresas com uma necessidade clara e delimitada.",
  },
  {
    id: "mentoria",
    label: "Mentoria de execução",
    short: "Mentoria",
    desc: "A sua equipa interna executa, com o método, os modelos e o acompanhamento da Raise para manter ritmo e métricas.",
    idealFor: "Empresas que já têm equipa e querem elevar o nível de execução.",
  },
];

export type CombinationExample = {
  id: string;
  client: string;
  segment: string;
  picks: Partial<Record<SolutionId, ModelId>>;
};

// Exemplos baseados no trabalho já feito com cada cliente.
export const combinationExamples: CombinationExample[] = [
  {
    id: "wamikixima",
    client: "WamiKixima Dental",
    segment: "Clínica · Luanda",
    picks: { gestao: "assessoria", midia: "assessoria", crm: "assessoria", vendas: "assessoria" },
  },
  {
    id: "mavisher",
    client: "Mavisher Tecnologia",
    segment: "Revenda Apple · Luanda e Lubango",
    picks: { midia: "assessoria", criativos: "assessoria", crm: "assessoria" },
  },
  {
    id: "michael-machado",
    client: "Michael Machado",
    segment: "Marca pessoal",
    picks: { midia: "projecto" },
  },
];
