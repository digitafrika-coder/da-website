export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  slug: string;
  capabilities: string[];
  ctaLabel: string;
}

export const AGENCY_SERVICES: ServicePillar[] = [
  {
    id: "marketing",
    number: "01",
    title: "Marketing",
    slug: "marketing",
    tagline: "Estratégia Primeiro",
    description: "Pensamento analítico, estratégia de penetração de mercado e aceleração de performance comercial focada no consumidor africano e em escalas globais.",
    capabilities: [
      "Estratégia de Marketing & Crescimento",
      "Posicionamento & Território de Marca",
      "Sistemas de Redes Sociais & Influência",
      "Publicidade Paga & Performance",
      "Consultoria Executiva de Marketing",
    ],
    ctaLabel: "EXPLORAR MARKETING",
  },
  {
    id: "publicidade",
    number: "02",
    title: "Publicidade",
    slug: "publicidade",
    tagline: "Emoção & Impacto",
    description: "Direção de arte radical, campanhas transmidiáticas e narrativa cinematográfica que desafiam a mesmice visual e dominam a atenção cultural.",
    capabilities: [
      "Identidade Visual & Rebranding Sistémico",
      "Direcção de Arte & Editorial Global",
      "Cinema & Produção de Vídeo High-End",
      "Motion Graphics & Animação 3D",
      "Dominação OOH & Impressão Espacial",
    ],
    ctaLabel: "EXPLORAR PUBLICIDADE",
  },
  {
    id: "programacao",
    number: "03",
    title: "Programação",
    slug: "programacao",
    tagline: "Engenharia de Vanguarda",
    description: "Engenharia digital de vanguarda: plataformas web resilientes, aplicações móveis nativas e sistemas de infraestrutura de carga crítica.",
    capabilities: [
      "Plataformas Web Personalizadas & Portais",
      "Aplicações Web & Mobile Escaláveis",
      "Integrações de API & Microsserviços",
      "Sistemas de Design UI/UX Empresariais",
      "Infraestrutura Cloud Resiliente",
    ],
    ctaLabel: "EXPLORAR PROGRAMAÇÃO",
  },
  {
    id: "grafica",
    number: "04",
    title: "Gráfica & Serigrafia",
    slug: "grafica",
    tagline: "Precisão & Acabamento Físico",
    description: "Produção gráfica de excelência, serigrafia têxtil de alta precisão, fardamentos corporativos, brindes promocionais e materiais editoriais tangíveis.",
    capabilities: [
      "Serigrafia Têxtil & Fardamentos",
      "Brindes Corporativos de Alto Padrão",
      "Impressão Offset & Digital de Grande Formato",
      "Acabamentos Especiais (UV, Relevo, Foil)",
      "Estúdio Integrado de Personalização",
    ],
    ctaLabel: "EXPLORAR GRÁFICA",
  },
];
