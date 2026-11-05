"use client";

import React, { useState } from "react";
import Link from "next/link";

const DIAG_DATA = {
  traction: {
    tag: "// SOLUÇÃO RECOMENDADA: TRACÇÃO RÁPIDA",
    title: "Publicidade Paga & Funil Inbound",
    desc: "Estruturação urgente de segmentação no Meta e Google Ads com páginas dedicadas de alta conversão para nutrir imediatamente a equipa comercial com oportunidades quentes.",
    impact: "Redução de até 40% no custo por aquisição nos primeiros 60 dias de execução tática."
  },
  positioning: {
    tag: "// SOLUÇÃO RECOMENDADA: VALOR DE MARCA",
    title: "Posicionamento & Território Verbal",
    desc: "Reconfiguração da proposta de valor e distinção cultural para que a sua empresa seja percecionada como a autoridade inquestionável, libertando a sua operação de descontos forçados.",
    impact: "Aumento sustentado de margens e facilidade imediata de negociação de contratos de maior porte."
  },
  scale: {
    tag: "// SOLUÇÃO RECOMENDADA: ARQUITETURA DE ESCALA",
    title: "Consultoria & Ecossistema Digital Completo",
    desc: "Aconselhamento executivo para conselhos de administração aliado à montagem de canais omnicanal automatizados para expandir a presença de mercado sem inchar custos fixos.",
    impact: "Aceleração da expansão com previsibilidade e retenção calculada através de CRM integrado."
  }
};

export default function MarketingPage() {
  const [stage, setStage] = useState<"traction" | "positioning" | "scale">("traction");
  const [formSent, setFormSent] = useState(false);

  const currentDiag = DIAG_DATA[stage];

  return (
    <div className="flex flex-col w-full text-on-surface">
      <div className="flex flex-col w-full">
{/*  HERO / STATEMENT SECTION  */}
<section className="relative w-full bg-surface-container-lowest overflow-hidden">
{/*  Atmospheric subtle ambient glow  */}
<div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none"></div>
<div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-surface-container-high/40 blur-[100px] pointer-events-none"></div>
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl relative z-10">
{/*  Breadcrumb Meta Strip  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg text-outline">
<div className="flex items-center gap-space-xs font-label-technical text-label-technical tracking-widest uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="text-primary-container font-semibold">03 // MARKETING &amp; ESTRATÉGIA COMERCIAL</span>
<span className="text-outline-variant">/</span>
<span>PILAR CORE DA MATRIX</span>
</div>
<div className="font-label-technical text-label-technical uppercase tracking-widest bg-surface-container-low px-3 py-1 rounded">
          EXPANSÃO PAN-AFRICANA • MAPUTO HUB
        </div>
</div>
{/*  Main Asymmetric Headline & Intro Block  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-end mb-space-xl">
<div className="lg:col-span-8 min-w-0">
<h1 className="font-display-lg text-headline-lg lg:text-display-lg uppercase text-primary tracking-tight leading-none mb-space-md">
            ESTRATÉGIA QUE GERA IMPACTO REAL NO MERCADO.
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Longe de fórmulas vazias: desenvolvemos inteligência de marca, tração comercial e posicionamento sólido para empresas que desafiam o status quo em Moçambique e além-fronteiras.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-md bg-surface-container p-space-md rounded-lg shadow-xl">
<div className="flex items-center justify-between font-label-technical text-label-technical text-outline uppercase pb-space-xs">
<span>// METRICAS DE IMPACTO</span>
<span className="text-primary-container font-bold">+340% MÉDIA ROI</span>
</div>
{/*  Sparkline Data Vis Inline SVG  */}
<div className="w-full h-16 relative">
<svg className="w-full h-full text-primary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 300 60">
<path d="M0,50 Q40,48 70,35 T140,28 T210,12 T270,18 L300,5" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0,50 Q40,48 70,35 T140,28 T210,12 T270,18 L300,5 L300,60 L0,60 Z" fill="currentColor" fill-opacity="0.08"></path>
</svg>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Transformamos orçamentos estagnados em maquinarias previsíveis de geração de receita com dados operacionais em tempo real.
          </p>
</div>
</div>
{/*  Key Focus Strip Cards  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
<div className="bg-surface-container-low p-space-md rounded">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">01 / ENGENHARIA</span>
<span className="font-headline-sm text-headline-sm text-primary uppercase block">Dados</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pesquisa viva em mercado africano</span>
</div>
<div className="bg-surface-container-low p-space-md rounded">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">02 / POSIÇÃO</span>
<span className="font-headline-sm text-headline-sm text-primary uppercase block">Poder</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Liderança de categoria irrefutável</span>
</div>
<div className="bg-surface-container-low p-space-md rounded">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">03 / VELOCIDADE</span>
<span className="font-headline-sm text-headline-sm text-primary uppercase block">Escala</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Execução multicanal agressiva</span>
</div>
<div className="bg-surface-container-low p-space-md rounded">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">04 / BALANÇO</span>
<span className="font-headline-sm text-headline-sm text-primary uppercase block">Valor</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">LTV maximizado por cliente activo</span>
</div>
</div>
</div>
</section>
{/*  6 CORE MARKETING SERVICES (BESPOKE BENTO ARCHITECTURE)  */}
<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-xl gap-space-md">
<div>
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase block mb-space-xs">// ARSENAL TÁTICO &amp; ESTRATÉGICO</span>
<h2 className="font-headline-lg text-headline-lg uppercase text-primary">SEIS NÚCLEOS DE EXECUÇÃO</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Cada disciplina opera interligada através da nossa metodologia orientada a valor comercial mensurável no terreno.
        </p>
</div>
{/*  Grid of 6 High-Impact Modular Panels  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
{/*  Serviço 1: Estratégia de Marketing  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 p-space-lg rounded-xl flex flex-col justify-between shadow-md">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase px-2 py-1 bg-surface-container-lowest rounded">
                // SERVIÇO 01
              </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                query_stats
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm group-hover:text-primary-container transition-colors">
              Estratégia de Marketing
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Diagnóstico aprofundado do terreno competitivo, mapeamento minucioso de rivais directos, seleção cirúrgica de canais prioritários e criação de um roadmap acionável de tração comercial.
            </p>
</div>
<div className="pt-space-md bg-surface-container-lowest/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex flex-wrap gap-1.5">
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Diagnóstico de Mercado</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Auditoria de Rivais</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Roadmap de Tração</span>
</div>
</div>
{/*  Serviço 2: Posicionamento de Marca  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 p-space-lg rounded-xl flex flex-col justify-between shadow-md">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase px-2 py-1 bg-surface-container-lowest rounded">
                // SERVIÇO 02
              </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                diamond
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm group-hover:text-primary-container transition-colors">
              Posicionamento de Marca
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Definição de território verbal soberano, proposta de valor inconfundível perante o comprador e ressonância cultural contemporânea adaptada aos códigos do ecossistema moçambicano e regional.
            </p>
</div>
<div className="pt-space-md bg-surface-container-lowest/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex flex-wrap gap-1.5">
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Território Verbal</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Proposta de Valor</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Ressonância Cultural</span>
</div>
</div>
{/*  Serviço 3: Gestão de Redes Sociais  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 p-space-lg rounded-xl flex flex-col justify-between shadow-md">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase px-2 py-1 bg-surface-container-lowest rounded">
                // SERVIÇO 03
              </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                hub
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm group-hover:text-primary-container transition-colors">
              Gestão de Redes Sociais
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Linha editorial pensada para dominar feeds, moderação activa de comunidades engajadas e produção editorial contínua focada em construir autoridade inquestionável e afinidade emocional.
            </p>
</div>
<div className="pt-space-md bg-surface-container-lowest/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex flex-wrap gap-1.5">
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Linha Editorial</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Comunidade Activa</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Brand Authority</span>
</div>
</div>
{/*  Serviço 4: Marketing Digital  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 p-space-lg rounded-xl flex flex-col justify-between shadow-md">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase px-2 py-1 bg-surface-container-lowest rounded">
                // SERVIÇO 04
              </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                polyline
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm group-hover:text-primary-container transition-colors">
              Marketing Digital
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Estruturação completa de ecossistemas de atracção inbound, réguas inteligentes de nutrição de leads, automação comercial de ponta a ponta e consolidação de uma presença de ciclo fechado.
            </p>
</div>
<div className="pt-space-md bg-surface-container-lowest/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex flex-wrap gap-1.5">
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Inbound Architecture</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Nutrição CRM</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Presença Omnicanal</span>
</div>
</div>
{/*  Serviço 5: Publicidade Paga e Performance  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 p-space-lg rounded-xl flex flex-col justify-between shadow-md">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase px-2 py-1 bg-surface-container-lowest rounded">
                // SERVIÇO 05
              </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                bolt
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm group-hover:text-primary-container transition-colors">
              Publicidade Paga e Performance
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Campanhas ultra-direccionadas no Meta Ads, Google Search/Display e LinkedIn Ads orientadas por análise granular de atribuição, com calibração contínua de CAC e retorno sobre investimento publicitário.
            </p>
</div>
<div className="pt-space-md bg-surface-container-lowest/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex flex-wrap gap-1.5">
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Meta &amp; Google Ads</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">LinkedIn B2B Scale</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">CAC Otimizado</span>
</div>
</div>
{/*  Serviço 6: Consultoria de Marketing  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 p-space-lg rounded-xl flex flex-col justify-between shadow-md">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase px-2 py-1 bg-surface-container-lowest rounded">
                // SERVIÇO 06
              </span>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                psychology
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm group-hover:text-primary-container transition-colors">
              Consultoria de Marketing
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Aconselhamento executivo estratégico para conselhos de administração, comités executivos e diretores comerciais que buscam alinhar expansão de faturação com sustentabilidade operacional duradoura.
            </p>
</div>
<div className="pt-space-md bg-surface-container-lowest/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex flex-wrap gap-1.5">
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Board Advisory</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Crescimento Sustentável</span>
<span className="font-label-technical text-label-technical text-secondary bg-surface-container px-2 py-0.5 rounded">Auditoria de Eficiência</span>
</div>
</div>
</div>
</div>
</section>
{/*  VALOR TANGÍVEL: COMO O MARKETING CONTRIBUI PARA O CRESCIMENTO  */}
<section className="w-full bg-surface-container-lowest py-space-2xl relative overflow-hidden">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="mb-space-xl">
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase block mb-space-xs">// MECÂNICA DE VALOR</span>
<h2 className="font-headline-lg text-headline-lg uppercase text-primary max-w-2xl">
          COMO O MARKETING CONTRIBUI PARA O CRESCIMENTO DO NEGÓCIO
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-sm">
          Marketing de alta performance não é vaidade digital nem contagem de gostos. Medimos cada ação sob três dimensões comerciais irrefutáveis.
        </p>
</div>
{/*  3 Business Dimensions Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
{/*  Dimensão 1  */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-space-xs mb-space-md">
<span className="font-display-lg text-headline-lg text-primary-container font-extrabold leading-none">01</span>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm">
              Reconhecimento de Marca Duradouro
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Uma marca forte elimina a dependência de descontos predatórios e guerras de preços. Ao posicionar a sua empresa no topo da mente do decisor, reduzimos a fricção no momento da compra e criamos autoridade premium que perdura por décadas no mercado africano.
            </p>
</div>
<div className="bg-surface-container p-space-sm rounded">
<span className="font-label-technical text-label-technical text-primary-container uppercase block mb-1">IMPACTO DIRECTO:</span>
<span className="font-body-sm text-body-sm text-on-surface">Poder de fixação de preços (Pricing Power) e preferência espontânea do consumidor.</span>
</div>
</div>
{/*  Dimensão 2  */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-space-xs mb-space-md">
<span className="font-display-lg text-headline-lg text-primary-container font-extrabold leading-none">02</span>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm">
              Eficiência de Aquisição
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Alinhamos os funis comerciais para eliminar desperdício orçamental. Estruturamos segmentações apuradas que reduzem radicalmente o Custo por Lead (CPL) e o Custo de Aquisição de Clientes (CAC), entregando contactos qualificados e pré-educados à sua equipa de vendas.
            </p>
</div>
<div className="bg-surface-container p-space-sm rounded">
<span className="font-label-technical text-label-technical text-primary-container uppercase block mb-1">IMPACTO DIRECTO:</span>
<span className="font-body-sm text-body-sm text-on-surface">Aceleração de ciclos de fecho comercial e compressão de custos de conversão.</span>
</div>
</div>
{/*  Dimensão 3  */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-space-xs mb-space-md">
<span className="font-display-lg text-headline-lg text-primary-container font-extrabold leading-none">03</span>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm">
              Retenção &amp; Valor de Vida do Cliente
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Conquistar um cliente é o primeiro marco; monetizar a sua fidelidade ao longo dos anos é onde reside o verdadeiro património corporativo. Desenvolvemos ecossistemas de relacionamento e cross-sell contínuos que multiplicam o Lifetime Value (LTV).
            </p>
</div>
<div className="bg-surface-container p-space-sm rounded">
<span className="font-label-technical text-label-technical text-primary-container uppercase block mb-1">IMPACTO DIRECTO:</span>
<span className="font-body-sm text-body-sm text-on-surface">Redução drástica do Churn Rate e maximização de faturação recorrente.</span>
</div>
</div>
</div>
{/*  Photographic Contextual Anchor with Detailed Prompt  */}
<div className="mt-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center bg-surface-container p-space-lg rounded-xl">
<div className="lg:col-span-7 min-w-0">
<div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="High-contrast modern corporate boardroom in Maputo, Mozambique with executive strategists discussing data dashboards illuminated by cool ambient monitor glow and warm architectural lighting, professional, sophisticated dark luxury agency aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC50o6svtGz9YLVFi2sFy15Y0IMn0PBf0LUitUM1JrUZfMq9V3H3ITWrQLBPRxvZbWUjillt9m2xnBpSpHo5Tx4rW4I6KC5ntfLu2Y_P8JQ9fZmH5q5ecM4omF0XOB2faW36lPdjvfVKFqdq4jpbZN8JxHCVD7ruog3d8CO8jBgysDUdGKA0P97cLdRLw9DowVXHF42xuTdSUJzQABfH-rphycbTwpSlcgJKsfUrwOd"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 font-label-technical text-label-technical uppercase tracking-widest text-primary-container bg-surface-container-lowest/80 px-2.5 py-1 rounded">
              WAR ROOM ESTRATÉGICA // MAPUTO HEADQUARTERS
            </div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col justify-center">
<span className="font-label-technical text-label-technical text-outline uppercase tracking-wider block mb-2">// INTELIGÊNCIA LOCAL, NORMAS INTERNACIONAIS</span>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-3">Conhecemos os fluxos reais de consumo em Moçambique</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Da banca ao retalho de alta rotação, das telecomunicações à indústria transformadora: a nossa leitura de mercado combina ferramentas de telemetria analítica com a sensibilidade cultural local necessária para gerar tração genuína.
          </p>
<div className="flex items-center gap-space-md text-on-surface font-body-sm text-body-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-container text-base">check_circle</span>
<span>Dados Primários de Mercado</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-container text-base">check_circle</span>
<span>Testes Empíricos de Mensagem</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  FLUXO DE TRABALHO DE MARKETING (4 PASSOS)  */}
<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-xl gap-space-md">
<div>
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase block mb-space-xs">// PROCESSO RIGOROSO</span>
<h2 className="font-headline-lg text-headline-lg uppercase text-primary">FLUXO DE TRABALHO EM 4 FASES</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Não deixamos o crescimento ao acaso. Cada projeto avança através de uma rota metodológica com portões de validação rigorosos.
        </p>
</div>
{/*  4 Stepped Flow Columns  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
{/*  Passo 1  */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md relative">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-display-lg text-headline-sm text-primary-container font-extrabold">FASE 01</span>
<span className="material-symbols-outlined text-outline">analytics</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm">
              Auditoria &amp; Dados
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Imersão analítica nos ativos existentes do cliente, mapeamento de funil de vendas, levantamento da concorrência e identificação de gargalos de retenção e conversão.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-high/20 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<span className="font-label-technical text-label-technical text-outline uppercase block">Entregável:</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Relatório Diagnóstico &amp; Benchmarking</span>
</div>
</div>
{/*  Passo 2  */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md relative">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-display-lg text-headline-sm text-primary-container font-extrabold">FASE 02</span>
<span className="material-symbols-outlined text-outline">architecture</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm">
              Estruturação do Plano
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Definição de posicionamento estratégico, modelagem de personas ideais, formulação de teses de atracção, atribuição orçamental e desenho de arquitetura de campanhas.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-high/20 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<span className="font-label-technical text-label-technical text-outline uppercase block">Entregável:</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Plano Diretor Estratégico &amp; KPIs</span>
</div>
</div>
{/*  Passo 3  */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md relative">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-display-lg text-headline-sm text-primary-container font-extrabold">FASE 03</span>
<span className="material-symbols-outlined text-outline">rocket_launch</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm">
              Execução Multicanal
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Implementação táctica ágil: produção de peças editoriais, ativação de criativos de performance, configuração de esteiras de automação e disparo de mídia paga.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-high/20 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<span className="font-label-technical text-label-technical text-outline uppercase block">Entregável:</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Campanhas em Produção Viva</span>
</div>
</div>
{/*  Passo 4  */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md relative">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-display-lg text-headline-sm text-primary-container font-extrabold">FASE 04</span>
<span className="material-symbols-outlined text-outline">tune</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-sm">
              Monitoria &amp; Otimização
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Telemetria contínua com dashboards em tempo real, testes A/B iterativos de mensagens, realocação de capital para criativos vencedores e reuniões táticas mensais.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-high/20 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<span className="font-label-technical text-label-technical text-outline uppercase block">Entregável:</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Dashboards &amp; Ajustes de Tração</span>
</div>
</div>
</div>
</div>
</section>
{/*  INTERACTIVE DIAGNOSTIC / MATURITY CALCULATOR BANNER  */}
<section className="w-full bg-surface-container-lowest py-space-xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="bg-surface-container-low rounded-2xl p-space-lg lg:p-space-xl shadow-2xl relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-primary-container font-label-technical text-label-technical uppercase tracking-widest mb-space-sm">
<span>SISTEMA DE AVALIAÇÃO COMERCIAL</span>
</div>
<h2 className="font-headline-lg text-headline-lg uppercase text-primary mb-space-sm">
              ONDE SE ENCONTRA O SEU NEGÓCIO HOJE?
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-space-md">
              A maioria das empresas opera com desperdício silencioso em campanhas que não conversam com o time de vendas. Faça o teste de 3 cliques e identifique a alavanca correta.
            </p>
{/*  Interactive Selector Pill Buttons (Vanilla JS controlled)  */}
<div className="space-y-space-sm" id="diagnostic-selector">
<span className="font-label-technical text-label-technical text-outline uppercase block">Selecione o seu maior desafio atual:</span>
<div className="flex flex-wrap gap-2">
<button className={`diag-btn px-4 py-2 text-left rounded font-label-lg text-label-lg transition-all ${stage === "traction" ? "bg-primary-container text-on-primary-fixed font-bold shadow-md" : "bg-surface-container text-on-surface hover:text-primary-container"}`} onClick={() => setStage("traction")} type="button">
                  01. Falta de Leads Qualificados
                </button>
<button className={`diag-btn px-4 py-2 text-left rounded font-label-lg text-label-lg transition-all ${stage === "positioning" ? "bg-primary-container text-on-primary-fixed font-bold shadow-md" : "bg-surface-container text-on-surface hover:text-primary-container"}`} onClick={() => setStage("positioning")} type="button">
                  02. Guerra de Preços com Concorrentes
                </button>
<button className={`diag-btn px-4 py-2 text-left rounded font-label-lg text-label-lg transition-all ${stage === "scale" ? "bg-primary-container text-on-primary-fixed font-bold shadow-md" : "bg-surface-container text-on-surface hover:text-primary-container"}`} onClick={() => setStage("scale")} type="button">
                  03. Dificuldade de Expansão Regional
                </button>
</div>
</div>
</div>
{/*  Dynamic Output Card  */}
<div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-inner" id="diagnostic-result">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-wider" id="diag-rec-tag">{currentDiag.tag}</span>
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
</div>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-2" id="diag-rec-title">{currentDiag.title}</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md" id="diag-rec-desc">
              {currentDiag.desc}
            </p>
<div className="p-3 bg-surface-container-low rounded font-body-sm text-body-sm text-on-surface">
<span className="font-semibold text-primary block mb-1">Impacto Previsto:</span>
<span id="diag-rec-impact">{currentDiag.impact}</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  STRATEGIC DIAGNOSIS SCHEDULING CTA SECTION  */}
<section className="w-full bg-surface-container-high py-space-2xl relative overflow-hidden">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-6">
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase block mb-space-xs">// DISPONIBILIDADE EXECUTIVA</span>
<h2 className="font-display-lg text-headline-lg lg:text-headline-lg uppercase text-primary leading-tight mb-space-md">
            AGENDE UM DIAGNÓSTICO ESTRATÉGICO DE MARKETING
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">
            Sente-se com os nossos diretores de estratégia para dissecar o seu modelo de marketing actual. Uma análise executiva profunda de 45 minutos sem custos ou obrigações com retorno imediato de clareza.
          </p>
<div className="space-y-space-sm font-body-md text-body-md text-on-surface mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center font-bold text-xs">✓</span>
<span>Análise preliminar de tráfego, autoridade digital e posicionamento</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center font-bold text-xs">✓</span>
<span>Identificação clara de 3 fugas de receita no seu fluxo comercial</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center font-bold text-xs">✓</span>
<span>Recomendações aplicáveis para implementação imediata pela sua equipa</span>
</div>
</div>
<div className="flex items-center gap-space-sm text-outline font-label-technical text-label-technical uppercase">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span>Slots limitados por ciclo quinzenal para clientes corporativos</span>
</div>
</div>
{/*  High-End Brutalist Direct Form Card  */}
<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-2xl">
<div className="mb-space-md">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">// PROTOCOLO DE RESERVA</span>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary">Preencha os dados da sua empresa</h3>
</div>
<form className="space-y-space-md" >
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-technical text-label-technical text-on-surface-variant uppercase mb-1.5">Nome do Decisor</label>
<input className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3 rounded outline-none focus:bg-surface-container-high transition-colors placeholder:text-outline" placeholder="Ex: Armando Sitoe" required type="text"/>
</div>
<div>
<label className="block font-label-technical text-label-technical text-on-surface-variant uppercase mb-1.5">Nome da Empresa</label>
<input className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3 rounded outline-none focus:bg-surface-container-high transition-colors placeholder:text-outline" placeholder="Ex: Grupo Horizonte Lda" required type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-technical text-label-technical text-on-surface-variant uppercase mb-1.5">Email Corporativo</label>
<input className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3 rounded outline-none focus:bg-surface-container-high transition-colors placeholder:text-outline" placeholder="decisor@empresa.co.mz" required type="email"/>
</div>
<div>
<label className="block font-label-technical text-label-technical text-on-surface-variant uppercase mb-1.5">WhatsApp / Contacto Directo</label>
<input className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3 rounded outline-none focus:bg-surface-container-high transition-colors placeholder:text-outline" placeholder="+258 84 000 0000" required type="tel"/>
</div>
</div>
<div>
<label className="block font-label-technical text-label-technical text-on-surface-variant uppercase mb-1.5">Serviço de Maior Interesse</label>
<select className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3 rounded outline-none focus:bg-surface-container-high transition-colors">
<option value="1">Estratégia Integral &amp; Posicionamento</option>
<option value="2">Publicidade Paga &amp; Performance (CAC / Leads)</option>
<option value="3">Gestão de Redes Sociais &amp; Linha Editorial</option>
<option value="4">Marketing Digital &amp; Automação de Vendas</option>
<option value="5">Consultoria de Marketing para Comité Executivo</option>
</select>
</div>
<button className="w-full py-4 bg-primary-container text-on-primary-fixed hover:bg-primary hover:text-surface-container-lowest font-headline-sm text-label-lg font-bold uppercase tracking-wider rounded transition-all duration-300 flex items-center justify-center gap-2 shadow-lg mt-space-md" type="submit">
<span>SOLICITAR DIAGNÓSTICO ESTRATÉGICO</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
<p className="font-label-technical text-label-technical text-outline uppercase text-center mt-2">
              Privacidade estrita. Acordo de Confidencialidade (NDA) executável sob pedido.
            </p>
</form>
</div>
</div>
</div>
</section>
{/*  Interactive JavaScript for Diagnostic Micro-interaction  */}

</div>
    </div>
  );
}
