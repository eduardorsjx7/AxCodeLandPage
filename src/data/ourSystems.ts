/**
 * Sistemas e produtos próprios da AxCode.
 * Para incluir um novo item, adicione um objeto ao array `ourSystems`.
 */
export type SystemStatus = "disponivel" | "beta" | "em-breve";

export type OurSystem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Caminho da logo em /public (ex.: /systems/quizflow-logo.svg). */
  logoSrc?: string;
  /** URL pública do produto (site ou app). Opcional enquanto não houver link. */
  href?: string;
  status: SystemStatus;
};

export const ourSystems: OurSystem[] = [
  {
    id: "quizflow",
    name: "QuizFlow",
    tagline: "Treinamento corporativo gamificado",
    description:
      "Plataforma para criar jornadas de aprendizagem com quizzes, rankings e analytics em tempo real para desenvolver equipes com mais engajamento.",
    logoSrc: "/systems/quizflow-logo.webp",
    href: "https://quizflow.com.br",
    status: "disponivel",
  },
  {
    id: "exatas-view",
    name: "Exatas View",
    tagline: "BI financeiro para decisões em tempo real",
    description:
      "Dashboard financeiro com DRE, DFC, contas a pagar/receber e metas orçamentárias para transformar dados do ERP em decisões rápidas e seguras.",
    logoSrc: "/systems/exatasview-logo.webp",
    href: "https://exatasview.com.br",
    status: "disponivel",
  },
  {
    id: "mycontabil",
    name: "MyContabil",
    tagline: "Plataforma contábil digital",
    description:
      "Centraliza documentos, rotinas fiscais e acompanhamento contábil em um fluxo online simples para empresas e escritórios operarem com mais controle.",
    logoSrc: "/systems/mycontabil-logo.webp",
    href: "https://mycontabil.app",
    status: "disponivel",
  },
  {
    id: "regua-cobranca",
    name: "Regua de Cobranca",
    tagline: "Cobranca automatizada multicanal",
    description:
      "Sistema separado do Exatas View para disparar cobrancas por WhatsApp, SMS e e-mail, com regras de envio, lembretes e acompanhamento de retorno dos clientes.",
    href: "https://reguadecobranca.exatasview.com.br",
    status: "disponivel",
  },
];
