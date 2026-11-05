import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return [
    { slug: "kuvula" },
    { slug: "lumen-beverages" },
    { slug: "voda-commerce" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Plataforma Digital Kuvula — Estudo de Caso | DigitAfrika",
    description: "Arquitetura integral de ecossistema financeiro para inclusão de micro-empresas na África Austral.",
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex flex-col w-full text-on-surface">
      <div className="flex flex-col w-full">
{/*  CASE STUDY TOP MASTHEAD & HERO  */}
<section className="relative w-full bg-surface-container-lowest -mt-20 pt-28 pb-space-xl overflow-hidden">
<div className="absolute inset-0 pointer-events-none opacity-20">
<div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-container blur-[140px]"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-surface-bright blur-[100px]"></div>
</div>
<div className="relative max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop flex flex-col">
{/*  Breadcrumb Technical Eyebrow  */}
<div className="flex flex-wrap items-center gap-space-xs font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest pb-space-md">
<span className="text-primary-container font-bold">07 // ESTUDO DE CASO</span>
<span className="text-secondary-container">/</span>
<span className="text-on-surface">DIGITAL &amp; ENGENHARIA</span>
<span className="text-secondary-container">/</span>
<span className="text-primary-container">2026</span>
<span className="hidden sm:inline-block ml-auto text-on-surface-variant">ID: KVL-MZ-8820</span>
</div>
{/*  Main Project Title & Client Subline  */}
<div className="pt-space-sm pb-space-lg flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div className="max-w-5xl">
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase text-primary tracking-tight font-extrabold leading-none">
            PLATAFORMA<br/>DIGITAL KUVULA
          </h1>
<p className="font-headline-sm text-headline-sm uppercase text-primary-container tracking-wider mt-space-sm">
            Consórcio Kuvula Microfinanças &amp; Pagamentos Digitais
          </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-end">
<span className="w-3 h-3 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface">STATUS: PRODUÇÃO ATIVA</span>
</div>
</div>
{/*  Technical Metadata Bar  */}
<div className="w-full bg-surface-container-low rounded-lg p-space-md mb-space-xl grid grid-cols-2 md:grid-cols-4 gap-space-md shadow-md">
<div>
<span className="font-label-technical text-label-technical uppercase text-outline block mb-1">CATEGORIA</span>
<span className="font-headline-sm text-base text-primary font-bold">Digital &amp; FinTech</span>
</div>
<div>
<span className="font-label-technical text-label-technical uppercase text-outline block mb-1">CRONOGRAMA</span>
<span className="font-headline-sm text-base text-primary font-bold">2025 / 2026 (14 Semanas)</span>
</div>
<div>
<span className="font-label-technical text-label-technical uppercase text-outline block mb-1">LOCALIZAÇÃO</span>
<span className="font-headline-sm text-base text-primary font-bold">Moçambique (Maputo &amp; Zambézia)</span>
</div>
<div>
<span className="font-label-technical text-label-technical uppercase text-outline block mb-1">SERVIÇOS ENTREGUES</span>
<span className="font-body-sm text-body-sm text-on-surface truncate block" title="UI/UX, React Native, Integração M-Pesa/SIMO, Backend Cloud">
            UI/UX, React Native, M-Pesa/SIMO, Cloud
          </span>
</div>
</div>
{/*  Hero Monumental Mockup Showcase  */}
<div className="relative w-full rounded-xl overflow-hidden bg-surface-container shadow-2xl group">
<div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" data-alt="Editorial dark mode FinTech interface showcase featuring high fidelity smartphone mockup running the Kuvula banking app next to an analytical tablet dashboard on an obsidian brushed metal slab with neon lime graphical overlays and ambient lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcmmSTLWDTD8ZIYX1jBPEr-S3sG2NUumL18BPNV16nF3Tl4PfLtvx0ZNqvUscDmfv4e5F832jEjpCDBEkxbsWio1Zzspm_oqXFZALpytjF2c19zgpD-pqQH-jwLIKoNXD5pNKkXUQenXNEIrE92tR6d6z8BMf4Qo9qt-ek96yXrPgg-9_m-vG-qxPYMRGwnydZd4fIuawbqkoLNFLMLO89xSecfxkJdVWeSKPK0XTA"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
<div className="absolute bottom-space-md left-space-md right-space-md flex flex-wrap items-center justify-between gap-space-sm pointer-events-none">
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container bg-surface-container-lowest/90 px-3 py-1.5 rounded-full">
              FIG 1.0 — ECOSSISTEMA FULLSTACK MOBILE &amp; DASHBOARD ANALÍTICO
            </span>
<span className="font-label-technical text-label-technical uppercase tracking-widest text-outline bg-surface-container-lowest/90 px-3 py-1.5 rounded-full">
              LATÊNCIA: 140MS // CAT REGION
            </span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTIONS 1 & 2: VISÃO GERAL & O DESAFIO (EDITORIAL ASYMMETRIC GRID)  */}
<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
{/*  Sticky Sub-Index Sidebar  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
<div className="sticky top-28 bg-surface-container-low p-space-lg rounded-xl shadow-lg">
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container mb-space-sm block">
              // ARQUITETURA DE VALOR
            </span>
<h3 className="font-headline-md text-headline-md uppercase text-primary font-bold leading-tight mb-space-md">
              Inclusão Financeira em Escala Real.
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Em Moçambique, a velocidade da circulação de capital depende da capacidade de processar micro-transações diárias sem interrupções de telecomunicações.
            </p>
<div className="flex flex-col gap-space-xs font-label-technical text-label-technical text-outline uppercase">
<div className="flex justify-between py-2 bg-surface-container px-3 rounded">
<span>SEGMENTO</span>
<span className="text-primary">Micro-comércio Informal</span>
</div>
<div className="flex justify-between py-2 bg-surface-container px-3 rounded">
<span>MOTOR CORE</span>
<span className="text-primary">SIMO / M-Pesa Native API</span>
</div>
<div className="flex justify-between py-2 bg-surface-container px-3 rounded">
<span>CONFORMIDADE</span>
<span className="text-primary">Banco de Moçambique</span>
</div>
</div>
</div>
</div>
{/*  Narrative Content Columns  */}
<div className="lg:col-span-8 flex flex-col gap-space-2xl">
{/*  Secção 1: VISÃO GERAL  */}
<div className="flex flex-col">
<div className="flex items-center gap-space-xs mb-space-sm font-label-technical text-label-technical uppercase tracking-widest text-primary-container">
<span>SEÇÃO 01</span>
<span className="w-8 h-[2px] bg-primary-container"></span>
<span>ESTRATÉGIA</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-bold mb-space-md">
              Visão Geral
            </h2>
<div className="font-body-lg text-body-lg text-on-surface-variant space-y-space-md">
<p>
                O consórcio Kuvula reuniu as maiores cooperativas de poupança comunitária (Xitique digital) e plataformas de microcrédito emergentes de Maputo e da província da Zambézia com a missão de substituir livros-caixa de papel por um motor transacional seguro, instantâneo e acessível em smartphones de entrada.
              </p>
<p>
                A DigitAfrika foi incubada como parceira principal de engenharia e direcção de produto, responsável por reimaginar a experiência humana da movimentação financeira informal, integrando canais de telecomunicações já consolidados com infraestruturas bancárias de nível institucional.
              </p>
</div>
{/*  In-Content Technical Pullquote  */}
<div className="mt-space-lg bg-surface-container p-space-lg rounded-xl shadow-md">
<p className="font-headline-sm text-headline-sm text-primary italic font-semibold">
                “A verdadeira soberania tecnológica em África não é importar soluções de Silicon Valley, mas desenhar para a realidade das redes instáveis e do fluxo diário dos nossos mercados.”
              </p>
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container mt-space-sm block">
                — MANIFESTO DE ENGENHARIA KUVULA × DIGITAFRIKA
              </span>
</div>
</div>
{/*  Secção 2: O DESAFIO  */}
<div className="flex flex-col">
<div className="flex items-center gap-space-xs mb-space-sm font-label-technical text-label-technical uppercase tracking-widest text-primary-container">
<span>SEÇÃO 02</span>
<span className="w-8 h-[2px] bg-primary-container"></span>
<span>RESTRIÇÕES &amp; RISCOS</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-bold mb-space-md">
              O Desafio
            </h2>
<div className="font-body-lg text-body-lg text-on-surface-variant space-y-space-md mb-space-lg">
<p>
                O mercado apresentava três barreiras simultâneas de altíssima complexidade técnica e comportamental, exigindo soluções sem precedentes no ecossistema local:
              </p>
</div>
{/*  Obstacle Matrix Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md">
<div>
<span className="material-symbols-outlined text-primary-container text-3xl mb-space-xs">signal_cellular_nodata</span>
<h4 className="font-headline-sm text-base text-primary uppercase font-bold mb-space-xs">Queda de Conectividade</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Áreas periféricas e corredores comerciais sofrem com latência intermitente (3G degradado e falhas súbitas de pacote de dados).
                  </p>
</div>
<span className="font-label-technical text-label-technical text-outline uppercase mt-space-md">IMPACTO: FALHAS CRÍTICAS DE PAGAMENTO</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md">
<div>
<span className="material-symbols-outlined text-primary-container text-3xl mb-space-xs">fingerprint</span>
<h4 className="font-headline-sm text-base text-primary uppercase font-bold mb-space-xs">Fricção de Autenticação</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Comerciantes com baixa literacia digital esqueciam senhas alfanuméricas complexas, gerando bloqueios de caixa frequentes.
                  </p>
</div>
<span className="font-label-technical text-label-technical text-outline uppercase mt-space-md">IMPACTO: 42% DE ABANDONO NO ONBOARDING</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-md">
<div>
<span className="material-symbols-outlined text-primary-container text-3xl mb-space-xs">shield</span>
<h4 className="font-headline-sm text-base text-primary uppercase font-bold mb-space-xs">Crise de Confiança</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Histórico de golpes digitais por SMS gerava desconfiança visceral em relação a interfaces puramente automatizadas.
                  </p>
</div>
<span className="font-label-technical text-label-technical text-outline uppercase mt-space-md">IMPACTO: RESISTÊNCIA CULTURAL À ADOÇÃO</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTIONS 3 & 4: A ABORDAGEM & A SOLUÇÃO  */}
<section className="w-full bg-surface-container-lowest py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl">
{/*  Secção 3: A ABORDAGEM  */}
<div className="flex flex-col bg-surface-container-low p-space-xl rounded-xl shadow-xl">
<div className="flex items-center gap-space-xs mb-space-sm font-label-technical text-label-technical uppercase tracking-widest text-primary-container">
<span>SEÇÃO 03</span>
<span className="w-6 h-[2px] bg-primary-container"></span>
<span>MÉTODO COGNITIVO</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-bold mb-space-md">
            A Abordagem
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">
            Rejeitamos o isolamento de gabinete. Durante 22 dias, a equipa da DigitAfrika realizou imersão etnográfica no Mercado Central de Maputo e nos polos agrícolas de Quelimane, registando a mecânica comportamental dos comerciantes.
          </p>
<div className="space-y-space-md mt-auto">
<div className="bg-surface-container p-space-md rounded-lg flex gap-space-md items-start">
<span className="font-headline-sm text-primary-container font-extrabold">01</span>
<div>
<h4 className="font-headline-sm text-base uppercase text-primary font-semibold">Pesquisa Etnográfica In Situ</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Acompanhamento de 120 feirantes e gravação contextual de transações sob luz solar intensa e ruído acústico elevado.
                </p>
</div>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex gap-space-md items-start">
<span className="font-headline-sm text-primary-container font-extrabold">02</span>
<div>
<h4 className="font-headline-sm text-base uppercase text-primary font-semibold">Arquitetura Offline-First &amp; P2P</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Conceção de uma fila criptografada em SQLite local que assina tokens de autorização sem necessidade de handshake em tempo real com a nuvem.
                </p>
</div>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex gap-space-md items-start">
<span className="font-headline-sm text-primary-container font-extrabold">03</span>
<div>
<h4 className="font-headline-sm text-base uppercase text-primary font-semibold">Prototipagem Ágil com Usuários Reais</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Sprints de teste semanais com dispositivos de tela de 5 polegadas e brilho reduzido para validar tamanho de tipografia e contrastes ópticos.
                </p>
</div>
</div>
</div>
</div>
{/*  Secção 4: A SOLUÇÃO  */}
<div className="flex flex-col bg-surface-container-low p-space-xl rounded-xl shadow-xl">
<div className="flex items-center gap-space-xs mb-space-sm font-label-technical text-label-technical uppercase tracking-widest text-primary-container">
<span>SEÇÃO 04</span>
<span className="w-6 h-[2px] bg-primary-container"></span>
<span>PRODUTO ENTREGUE</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-bold mb-space-md">
            A Solução
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">
            Um ecossistema unificado composto por um app móvel ultra-leve (11MB em React Native otimizado) e um backoffice de gestão de liquidez em tempo real para bancos liquidatários.
          </p>
{/*  Interactive Feature List  */}
<div className="space-y-space-md mt-auto">
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm text-base uppercase text-primary font-bold">Checkout em 2 Toques</h4>
<span className="font-label-technical text-label-technical text-primary-container">UI RADICAL</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Eliminação de 7 etapas burocráticas tradicionais. Escaneamento por QR dinâmico gerado offline com confirmação biométrica háptica instantânea.
              </p>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm text-base uppercase text-primary font-bold">Ponte Híbrida SIMO / M-Pesa</h4>
<span className="font-label-technical text-label-technical text-primary-container">BACKEND CORE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Roteador de micro-transações com fallback automático: se a API direta do SIMO oscilar, a transação converte via USSD/STK Push sem falha perceptível.
              </p>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm text-base uppercase text-primary font-bold">Microssegurança Físico-Digital</h4>
<span className="font-label-technical text-label-technical text-primary-container">ZERO-TRUST</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Enclave criptográfico no telemóvel associado ao IMEI do aparelho e padrão de pressão táctil para prevenção instantânea de fraudes de troca de SIM.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  GALERIA VISUAL DO PROJECTO (3 FIDELITY SHOWCASES)  */}
<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-xl gap-space-md">
<div>
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container block mb-space-xs">
            // DOCUMENTAÇÃO VISUAL &amp; SISTEMA
          </span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-bold">
            Galeria do Sistema
          </h2>
</div>
<div className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">
          3 ARTEFACTOS ARQUITETURAIS // DESIGN ATIVO
        </div>
</div>
{/*  Bento Visual Gallery Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
{/*  Artefacto 1: Aplicação Mobile (Vertical Dominant)  */}
<div className="md:col-span-4 bg-surface-container-low rounded-xl overflow-hidden shadow-xl flex flex-col group">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Close up product photography of a smartphone display demonstrating the Kuvula mobile microfinance interface in dark mode with luminous lime green balance badges and clean minimal typography designed for African merchants." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjhuLz95Y5OZ9uAeALDzSCDQ-snFoHR58CRhCQ6DzL5-QMoySClSiXPYWIe7y5ZwCmwgsHbvKkkVj5OR7hqwIkboiVL0-KF0eIfQwi9ahDe4m5NvEBAlmOLC86-vyx685VPSo0MdhalwbnSr3fNAzrL1q5IlXKj9SP8dKuLSGsSlH8qOqGHZZv21k8bj5B0aF6FXZlaFZiXwd343ru7OzcwP0xo3pq5Gadegvois2n"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
</div>
<div className="p-space-md flex flex-col justify-between flex-grow">
<div>
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container mb-1 block">ARTEFACTO 01</span>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary font-bold mb-2">Aplicação Móvel React Native</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Fluxo de liquidação instantânea otimizado para operação com apenas uma mão durante o atendimento de banca.
              </p>
</div>
<div className="pt-space-md flex items-center justify-between text-outline font-label-technical text-label-technical">
<span>DEVICE: ANDROID 11+</span>
<span>PESO: 11.2 MB</span>
</div>
</div>
</div>
{/*  Artefacto 2: Painel Web Administrativo  */}
<div className="md:col-span-8 flex flex-col gap-space-lg">
<div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xl flex flex-col group">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Wide high angle render of the Kuvula central web operational dashboard displayed on a dual monitor workstation featuring dark analytical charts, real time Maputo settlement telemetry, and live liquidity nodes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxvMSvfpI0F4jU3kOosQ_5zh-hONUKqjm11G0EkvqbvhrK3SwmFpgkcXQiurpT4ypjWBbzboKR5882D8lWu3tYjMoECQNQMlY9Q4OK8DiJquH7sWG_usV4BgPU-hBbdVsJ6dInLW2lOb2i8K-UDnDgkC6yEa-WNVe75aLLh6I38zcld8u8mpsbJCQ5uc9KnqvDzWMHl0KdZsCPBNSCBeQ5dorQyny_EM1P9S8hZJ6E"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
</div>
<div className="p-space-md flex flex-col justify-between">
<div>
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container mb-1 block">ARTEFACTO 02</span>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary font-bold mb-2">Painel de Controlo &amp; Liquidação Central</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dashboard de observabilidade para gerentes de cooperativa monitorarem conciliação bancária, volume de depósitos e taxas de inadimplência em tempo real.
                </p>
</div>
<div className="pt-space-md flex items-center justify-between text-outline font-label-technical text-label-technical">
<span>STACK: NEXT.JS // GO MICROSERVICES</span>
<span>CONCORRÊNCIA: 50.000 TPS</span>
</div>
</div>
</div>
{/*  Artefacto 3: Design System & Tokens  */}
<div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row group">
<div className="relative w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Technical design system board showing typographic scales, color tokens, button states in electric lime and obsidian dark theme, and vector component specs for the Kuvula digital platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAovMoAUt_H9nwIGJe4ER0CNCZ9VpL7Nr727iqmfJelmXCMKfAmrSTuS4Sk5v6OU9K11pSCS4X3xXPyTGEPBS2zxF_ouYcqrJPEHTlcC_OGbl0d72FvpYKJbtY592jzhXFKeIp-Mr2VNNvgxhwuFlU1t0FuNWi5G1V_7_kizHp2NOsWKiN1udOTbHBtans4I4B-9EPtnnXwcoq-iCAmyK2hO6LlsyR1D2z5gIWykxR"/>
</div>
<div className="p-space-md md:w-1/2 flex flex-col justify-between">
<div>
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container mb-1 block">ARTEFACTO 03</span>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary font-bold mb-2">Kuvula Core Design System</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Biblioteca de componentes tokenizada para React Native e Web, garantindo coerência visual e conformidade WCAG AAA de alto contraste em luz solar direta.
                </p>
</div>
<div className="pt-space-md flex items-center justify-between text-outline font-label-technical text-label-technical">
<span>TOKENS: 140+</span>
<span>ACCESSIBILITY: WCAG 2.1 AAA</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTÇÃO 5: RESULTADOS & IMPACTO (METRICS ENGINE WITH SVG DATA VIZ)  */}
<section className="w-full bg-surface-container-lowest py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-2xl gap-space-lg">
<div className="max-w-3xl">
<div className="flex items-center gap-space-xs mb-space-sm font-label-technical text-label-technical uppercase tracking-widest text-primary-container">
<span>SEÇÃO 05</span>
<span className="w-8 h-[2px] bg-primary-container"></span>
<span>DESEMPENHO AUDITADO</span>
</div>
<h2 className="font-display-lg text-headline-lg md:text-display-lg uppercase text-primary font-extrabold leading-none">
            Resultados &amp;<br/>Impacto Real
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Métricas consolidadas após 90 dias de operações em ambiente de produção contínua, certificadas pelos relatórios operacionais do consórcio.
        </p>
</div>
{/*  High-Impact 3 Metric Monoliths  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg mb-space-2xl">
{/*  Métrica 1  */}
<div className="bg-surface-container-low p-space-xl rounded-xl shadow-xl flex flex-col justify-between group hover:bg-surface-container transition-colors">
<div>
<div className="flex justify-between items-center mb-space-md">
<span className="font-label-technical text-label-technical uppercase tracking-widest text-outline">// MÉTRICA 01</span>
<span className="material-symbols-outlined text-primary-container text-2xl">trending_up</span>
</div>
<div className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-extrabold leading-none tracking-tight">
              +68<span className="text-primary-container">%</span>
</div>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary font-bold mt-space-md mb-space-xs">
              Aumento na Adoção
            </h4>
<p className="font-body-md text-body-md text-on-surface-variant">
              Taxa de adesão orgânica de comerciantes nos primeiros 90 dias após o rollout de campo em Maputo e Quelimane.
            </p>
</div>
<div className="pt-space-lg mt-space-md bg-surface-container-lowest/50 p-space-sm rounded">
{/*  Inline SVG Sparkline  */}
<svg className="w-full h-12 text-primary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 300 50">
<path d="M0,45 L40,40 L80,38 L120,28 L160,30 L200,18 L240,12 L300,4" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<path d="M0,45 L40,40 L80,38 L120,28 L160,30 L200,18 L240,12 L300,4 L300,50 L0,50 Z" fill="currentColor" fill-opacity="0.1"></path>
</svg>
<div className="flex justify-between font-label-technical text-label-technical text-outline mt-1">
<span>DIA 01: 1.2K USUÁRIOS</span>
<span className="text-primary-container">DIA 90: 28.4K USUÁRIOS</span>
</div>
</div>
</div>
{/*  Métrica 2  */}
<div className="bg-surface-container-low p-space-xl rounded-xl shadow-xl flex flex-col justify-between group hover:bg-surface-container transition-colors">
<div>
<div className="flex justify-between items-center mb-space-md">
<span className="font-label-technical text-label-technical uppercase tracking-widest text-outline">// MÉTRICA 02</span>
<span className="material-symbols-outlined text-primary-container text-2xl">bolt</span>
</div>
<div className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-extrabold leading-none tracking-tight">
              &lt;1.2<span className="text-primary-container">s</span>
</div>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary font-bold mt-space-md mb-space-xs">
              Conclusão de Transação
            </h4>
<p className="font-body-md text-body-md text-on-surface-variant">
              Tempo médio de processamento ponta a ponta desde o escaneamento do QR até a notificação bancária de liquidação.
            </p>
</div>
<div className="pt-space-lg mt-space-md bg-surface-container-lowest/50 p-space-sm rounded">
{/*  Progress Ring Comparison  */}
<div className="flex items-center gap-space-md">
<div className="relative w-12 h-12 shrink-0">
<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="88, 100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
<div className="flex flex-col font-label-technical text-label-technical">
<span className="text-primary">BENCHMARK ANTERIOR: 8.6S</span>
<span className="text-primary-container font-bold">REDUÇÃO DE LATÊNCIA: -86%</span>
</div>
</div>
</div>
</div>
{/*  Métrica 3  */}
<div className="bg-surface-container-low p-space-xl rounded-xl shadow-xl flex flex-col justify-between group hover:bg-surface-container transition-colors">
<div>
<div className="flex justify-between items-center mb-space-md">
<span className="font-label-technical text-label-technical uppercase tracking-widest text-outline">// MÉTRICA 03</span>
<span className="material-symbols-outlined text-primary-container text-2xl">verified</span>
</div>
<div className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-extrabold leading-none tracking-tight">
              99.98<span className="text-primary-container">%</span>
</div>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary font-bold mt-space-md mb-space-xs">
              Disponibilidade Core
            </h4>
<p className="font-body-md text-body-md text-on-surface-variant">
              Uptime contínuo sustentado pelo cluster multi-região da nuvem com suporte a chaveamento offline em nós regionais.
            </p>
</div>
<div className="pt-space-lg mt-space-md bg-surface-container-lowest/50 p-space-sm rounded">
{/*  Technical Status Ribbon  */}
<div className="flex items-center justify-between font-label-technical text-label-technical">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="text-on-surface">ZERO DOWNTIME NÃO PROGRAMADO</span>
</div>
<span className="text-outline">SLA NÍVEL TIER 4</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTÇÃO 6: PROJECTOS RELACIONADOS  */}
<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-xl gap-space-md">
<div>
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container block mb-space-xs">
            // ARQUIVO SELECIONADO
          </span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-bold">
            Projectos Relacionados
          </h2>
</div>
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-primary-container transition-colors" href="/portfolio">
<span>Explorar Todo o Portfólio</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/*  Related 1: Rebrand Lumen  */}
<a className="group bg-surface-container-low rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300 block" href="/portfolio/kuvula">
<div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial visual identity mockup for Lumen Energy featuring minimalist brutalist solar hardware branding, typography poster guidelines, and futuristic stationery on a dark basalt textured background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlgRmwpn7hai0qV853SbahLuQHMR10YE9C4a2h5sYxZNzujlP6CuqKONSJlLTdNXneV61oPlXJQ89udaOjdbAVeloYe1eV0tQ5aGentQTAk7t0PD2hXN5ZP6N8PLvlepTW8estJrxgwT0h7KfFtz6pdIpx7myuBqjE7EchDyl1uWxbnBU7CeNcBhtCjTWBTB5fFKRC7KSYdyCD-VWtDsVeqn3hHi6bfeEMjg4ccPvG"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
<div className="absolute top-space-md left-space-md">
<span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface bg-surface-container-lowest/90 px-3 py-1.5 rounded-full">
                06 // IDENTIDADE &amp; MARCA
              </span>
</div>
</div>
<div className="p-space-lg flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-technical text-label-technical text-primary-container uppercase">ENERGIA RENOVÁVEL · 2025</span>
<span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span>
</div>
<h3 className="font-headline-md text-headline-md uppercase text-primary font-bold group-hover:text-primary-container transition-colors mb-space-xs">
              Rebrand Lumen África
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Reposicionamento cultural e nova arquitetura de marca pan-africana para o maior operador independente de energia solar descentralizada de Moçambique.
            </p>
</div>
</a>
{/*  Related 2: Voda Commerce  */}
<a className="group bg-surface-container-low rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300 block" href="/portfolio/kuvula">
<div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern dark mode e-commerce application design on a laptop and mobile screen mockup showcasing enterprise retail logistics for Voda Commerce with sleek neon lime navigation accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEyWpw6SoFYHAIJyeaGTFv0fHC15VUHMbceiH0ngJyxsf2S8ip8EYw8cdWkAfPMYqlU5nFuzDgPkDovliISNUzL2I8FuxjTrMn4ga5W9LR116w9hjDJq70lU5yDic5gk_vP0RcAHJx1Rj9VoJCzNR8ed3miQsJlr1j2hNAKDR2a09-lJS4RagTpTZazgpe6x_tKUWizD8yKovVsHCqQTeCX6BRWL8LnYVJleJoBsVQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
<div className="absolute top-space-md left-space-md">
<span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface bg-surface-container-lowest/90 px-3 py-1.5 rounded-full">
                05 // ENGENHARIA DE SOFTWARE
              </span>
</div>
</div>
<div className="p-space-lg flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-technical text-label-technical text-primary-container uppercase">RETAIL &amp; LOGÍSTICA · 2025</span>
<span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span>
</div>
<h3 className="font-headline-md text-headline-md uppercase text-primary font-bold group-hover:text-primary-container transition-colors mb-space-xs">
              Voda Commerce Core
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Plataforma omnicanal B2B de compras atacadistas com catálogo sincronizado offline e rastreamento rodoviário de frotas em tempo real.
            </p>
</div>
</a>
</div>
</div>
</section>
{/*  CTA FINAL: CALL TO ACTION SECTION  */}
<section className="w-full bg-surface-container-lowest py-space-2xl relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary-container/10 rounded-full blur-[160px] pointer-events-none"></div>
<div className="relative max-w-[1200px] mx-auto px-margin-mobile md:px-margin text-center flex flex-col items-center">
<span className="font-label-technical text-label-technical uppercase tracking-widest text-primary-container block mb-space-sm">
        // INICIE O PRÓXIMO CAPÍTULO
      </span>
<h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg uppercase text-primary font-extrabold tracking-tight max-w-4xl mb-space-md">
        Tem uma visão semelhante para a sua marca? Vamos construí-la juntos.
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-xl">
        Conectamos estratégia radical, design editorial de classe mundial e arquitetura de software resiliente a partir de Maputo para empresas globais.
      </p>
<div className="flex flex-col sm:flex-row items-center gap-space-md">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-container text-on-primary-fixed font-headline-sm text-base uppercase font-bold tracking-wider rounded-none hover:bg-primary transition-colors" href="/contactos">
<span>Iniciar um Projecto</span>
<span className="material-symbols-outlined text-lg">north_east</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-container-high text-primary font-headline-sm text-base uppercase font-bold tracking-wider hover:bg-surface-container-highest transition-colors" href="/portfolio">
<span>Ver Outros Estudos de Caso</span>
<span className="material-symbols-outlined text-lg">arrow_downward</span>
</a>
</div>
{/*  Quick Agency Contact Line  */}
<div className="mt-space-xl pt-space-md flex flex-wrap justify-center items-center gap-space-lg font-label-technical text-label-technical text-outline uppercase">
<span>RESPOSTA EM ATÉ 24H ÚTEIS</span>
<span>•</span>
<span>MAPUTO [CAT] // DISPONÍVEL GLOBALMENTE</span>
<span>•</span>
<a className="text-primary hover:text-primary-container transition-colors" href="mailto:hello@digitafrika.com">HELLO@DIGITAFRIKA.COM</a>
</div>
</div>
</section>
</div>
    </div>
  );
}
