"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PublicidadePage() {
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);

  const toggleScope = (scope: string) => {
    setSelectedScopes(prev => 
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]
    );
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      <div className="flex flex-col w-full">
{/*  HERO / MANIFESTO SECTION  */}
<section className="relative w-full overflow-hidden bg-surface-container-lowest">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-start">
{/*  Left: Typographic Anchor  */}
<div className="lg:col-span-8 flex flex-col space-y-space-md">
<div className="flex items-center gap-space-xs font-label-technical text-label-technical text-primary-fixed uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-primary-fixed shadow-md shadow-primary-fixed/20"></span>
<span>04 // PUBLICIDADE &amp; NARRATIVA CRIATIVA</span>
<span className="text-on-surface-variant font-label-technical text-label-technical ml-space-sm">[ESTÚDIO DE PRODUÇÃO MAPUTO]</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight uppercase leading-[0.95] max-w-5xl">
            CRIAÇÃO QUE PROVOCA, ENVOLVE E <span className="text-primary-fixed">PERMANECE.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs">
            Direcção de arte radical, identidade visual de excelência e campanhas transmediáticas concebidas para capturar a atenção cultural e desafiar o óbvio.
          </p>
<div className="pt-space-md flex flex-wrap items-center gap-space-md">
<a className="inline-flex items-center gap-space-xs px-6 py-3.5 bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg font-bold uppercase tracking-wider hover:bg-tertiary hover:text-on-tertiary transition-all shadow-lg shadow-primary-fixed/15" href="/contactos">
<span>Iniciar Projeto Criativo</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
<div className="flex items-center gap-space-sm px-4 py-3 bg-surface-container font-label-technical text-label-technical text-on-surface-variant uppercase">
<span className="material-symbols-outlined text-primary-fixed text-sm">filter_vintage</span>
<span>Campanhas 360° + Direcção de Arte</span>
</div>
</div>
</div>
{/*  Right: Technical Status & Metric Box  */}
<div className="lg:col-span-4 flex flex-col space-y-space-md">
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-xl">
<div className="flex justify-between items-start">
<span className="font-label-technical text-label-technical text-outline uppercase tracking-widest">// COEFICIENTE DE IMPACTO</span>
<span className="font-label-technical text-label-technical text-primary-fixed">MAPUTO : CAT</span>
</div>
<div className="my-space-md">
<div className="font-headline-lg text-headline-lg text-primary font-bold">142M+</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Impressões visuais orquestradas em campanhas transcontinentais (Moçambique, África do Sul, Angola e Portugal).</p>
</div>
{/*  Minimal SVG Metric Bar Chart  */}
<div className="pt-space-xs">
<div className="flex justify-between font-label-technical text-label-technical text-outline uppercase mb-1">
<span>Retenção de Marca</span>
<span className="text-primary-fixed">94.8%</span>
</div>
<svg className="w-full h-3 text-surface-container-highest" fill="none" viewBox="0 0 300 12">
<rect className="fill-surface-container" height="12" rx="2" width="300"></rect>
<rect className="fill-primary-fixed" height="12" rx="2" width="284"></rect>
</svg>
</div>
</div>
<div className="bg-surface-container p-space-md flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary-fixed">verified</span>
<span className="font-body-sm text-body-sm text-primary font-medium">Linguagem Pós-Colonial &amp; Vanguarda</span>
</div>
<span className="font-label-technical text-label-technical text-outline">EST. 2024</span>
</div>
</div>
</div>
</div>
</section>
{/*  MARQUEE DISRUPTOR  */}
<div className="w-full bg-primary-fixed text-on-primary-fixed py-3 overflow-hidden select-none">
<div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] gap-space-xl font-label-lg text-label-lg tracking-widest uppercase font-bold">
<span>BRANDING DISRUPTIVO // MAPUTO</span>
<span>•</span>
<span>DIRECÇÃO DE ARTE RADICAL</span>
<span>•</span>
<span>NARRATIVAS PAN-AFRICANAS</span>
<span>•</span>
<span>MOTION 3D &amp; CINEMA PUBLICITÁRIO</span>
<span>•</span>
<span>OUTDOORS MONUMENTAIS</span>
<span>•</span>
<span>BRANDING DISRUPTIVO // MAPUTO</span>
<span>•</span>
<span>DIRECÇÃO DE ARTE RADICAL</span>
<span>•</span>
<span>NARRATIVAS PAN-AFRICANAS</span>
<span>•</span>
<span>MOTION 3D &amp; CINEMA PUBLICITÁRIO</span>
</div>
</div>
{/*  EDITORIAL PORTFOLIO GRID: 7 CORES DE PUBLICIDADE  */}
<section className="w-full bg-surface py-space-xl lg:py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
<div>
<span className="font-label-technical text-label-technical text-outline uppercase tracking-widest block mb-space-xs">// 04.1 ARQUITECTURA DE DISCIPLINAS</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase">SERVIÇOS DE PUBLICIDADE</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Engenharia estética meticulosa concebida para marcas que se recusam a fundir-se no ruído ambiente digital e urbano.
        </p>
</div>
{/*  Bento-inspired Editorial Services Layout  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md">
{/*  01: Branding e Identidade Visual (Span 7)  */}
<div className="lg:col-span-7 bg-surface-container-low p-space-lg flex flex-col justify-between group shadow-xl hover:bg-surface-container transition-all">
<div className="flex justify-between items-start mb-space-lg">
<div>
<span className="font-label-technical text-label-technical text-primary-fixed uppercase tracking-wider block mb-1">PILAR 01 // SISTEMAS VISUAIS</span>
<h3 className="font-headline-md text-headline-md text-primary uppercase">Branding e Identidade Visual</h3>
</div>
<span className="font-display-lg text-headline-md text-outline font-bold">01</span>
</div>
<div className="relative w-full h-72 overflow-hidden mb-space-md shadow-md">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Avant-garde brand design identity system layout with bold typography, dark obsidian textures, electric lime graphic accents, luxury editorial stationery, poster presentation in Maputo art style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvxCYQdCWCYT0N_kcK_jMESyvEZ0NJfeXdVxD7CdB5sfBnm6xKTshMUndQvVde7xJGZgW0moDiizvgn8jmik60n1izEGESWCykie1NBBWepgisHfU7p96Jxpa8IAnri7CFL7Y-raocNp2BfEQBY_f4D-5eyjht2c1wEWLxqF5yuvVtWhTzYC48BdlQzHmZvXKUQf1IgyRPX0Aa2JtC3TzeodjzPhHumBWyVys4OAGS"/>
<div className="absolute bottom-3 left-3 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 font-label-technical text-label-technical text-primary-fixed">
              BRAND GUIDELINES &amp; TYPOGRAPHY
            </div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Criação de marcas completas, logótipos intemporais, sistemas de tipografia arrojados, paletas de cores de elevado impacto e directrizes de identidade concebidas para coerência multicanal global.
          </p>
<div className="flex flex-wrap gap-2 pt-space-xs">
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface font-label-technical text-label-technical">Design de Logótipo</span>
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface font-label-technical text-label-technical">Design Tokens Visuais</span>
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface font-label-technical text-label-technical">Manual de Normas</span>
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface font-label-technical text-label-technical">Tipografia Proprietária</span>
</div>
</div>
{/*  02: Design Gráfico (Span 5)  */}
<div className="lg:col-span-5 bg-surface-container-low p-space-lg flex flex-col justify-between group shadow-xl hover:bg-surface-container transition-all">
<div className="flex justify-between items-start mb-space-lg">
<div>
<span className="font-label-technical text-label-technical text-primary-fixed uppercase tracking-wider block mb-1">PILAR 02 // ALTA FIDELIDADE</span>
<h3 className="font-headline-md text-headline-md text-primary uppercase">Design Gráfico</h3>
</div>
<span className="font-display-lg text-headline-md text-outline font-bold">02</span>
</div>
<div className="relative w-full h-72 overflow-hidden mb-space-md shadow-md">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Editorial catalog spread and luxury packaging design mockup, high contrast matte black and lime green print finishing, high definition minimalist layout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyox6cd1oNlOKXk6B39IG8OydM9qbro7AKEH3tAqWyWGiJlD--yS4xK-gSz_IWeAkxlGOsB1LClYt9c3GSo22GWxr-A6DTMRTFMcUEXvtx35_PRr0ylQcvwAi_YOwWvU0Oqbo7gU1rIsbYNWq9pN-4O8YpxySdPJq4QPnJCvPPwestrIWBZshZeijaYcQIrjVDYHzeZ9xtS8kGset18Zbql3mzrzdyQPdXn2ga71d2"/>
<div className="absolute bottom-3 left-3 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 font-label-technical text-label-technical text-primary-fixed">
              PRINT &amp; PACKAGING ARTIFACTS
            </div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Peças editoriais monumentais, catálogos premium, packaging de impacto táctil e materiais institucionais refinados que consolidam a autoridade e o prestígio corporativo.
          </p>
<div className="flex flex-wrap gap-2 pt-space-xs">
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface font-label-technical text-label-technical">Design Editorial</span>
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface font-label-technical text-label-technical">Embalagens Premium</span>
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface font-label-technical text-label-technical">Relatórios de Sustentabilidade</span>
</div>
</div>
{/*  03: Campanhas Publicitárias (Span 4)  */}
<div className="lg:col-span-4 bg-surface-container-low p-space-lg flex flex-col justify-between group shadow-xl hover:bg-surface-container transition-all">
<div>
<div className="flex justify-between items-start mb-space-md">
<span className="font-label-technical text-label-technical text-primary-fixed uppercase">PILAR 03 // MATRIZ 360°</span>
<span className="font-headline-sm text-headline-sm text-outline">03</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary uppercase mb-space-sm">Campanhas Publicitárias</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Conceitos criativos omnicanal e anúncios integrados para ecossistemas digitais, rádio, imprensa e televisão, concebidos para alterar comportamentos de consumo.
            </p>
</div>
<div className="bg-surface-container-high p-space-md mt-space-sm">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">Alcance Estimado</span>
<div className="font-headline-sm text-headline-sm text-primary-fixed font-bold">+350% CTR Médio</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">em comparação com anúncios convencionais do setor.</span>
</div>
</div>
{/*  04: Direcção de Arte (Span 4)  */}
<div className="lg:col-span-4 bg-surface-container-low p-space-lg flex flex-col justify-between group shadow-xl hover:bg-surface-container transition-all">
<div>
<div className="flex justify-between items-start mb-space-md">
<span className="font-label-technical text-label-technical text-primary-fixed uppercase">PILAR 04 // VANGUARDA</span>
<span className="font-headline-sm text-headline-sm text-outline">04</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary uppercase mb-space-sm">Direcção de Arte</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Estética cinematográfica visceral, curadoria visual arrojada e supervisão estilística implacável que transforma produtos industriais em peças de desejo cultural contemporâneo.
            </p>
</div>
<div className="bg-surface-container-high p-space-md mt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-technical text-label-technical text-outline uppercase">Curadoria Estética</span>
<span className="font-body-sm text-body-sm text-primary">Cinematografia &amp; Design Editorial</span>
</div>
<span className="material-symbols-outlined text-primary-fixed">palette</span>
</div>
</div>
{/*  05: Fotografia e Produção de Vídeo (Span 4)  */}
<div className="lg:col-span-4 bg-surface-container-low p-space-lg flex flex-col justify-between group shadow-xl hover:bg-surface-container transition-all">
<div>
<div className="flex justify-between items-start mb-space-md">
<span className="font-label-technical text-label-technical text-primary-fixed uppercase">PILAR 05 // AUDIOVISUAL</span>
<span className="font-headline-sm text-headline-sm text-outline">05</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary uppercase mb-space-sm">Fotografia &amp; Vídeo</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Sessões conceituais em locação e estúdio, spots publicitários de 30/60 segundos, minidocumentários de marca e cobertura técnica de alto calibre.
            </p>
</div>
<div className="bg-surface-container-high p-space-md mt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-technical text-label-technical text-outline uppercase">Resolução Master</span>
<span className="font-body-sm text-body-sm text-primary">4K Cinema / RAW Workflow</span>
</div>
<span className="material-symbols-outlined text-primary-fixed">videocam</span>
</div>
</div>
{/*  06: Motion Design (Span 6)  */}
<div className="lg:col-span-6 bg-surface-container-low p-space-lg flex flex-col justify-between group shadow-xl hover:bg-surface-container transition-all">
<div className="flex justify-between items-start mb-space-md">
<div>
<span className="font-label-technical text-label-technical text-primary-fixed uppercase block mb-1">PILAR 06 // CINÉTICA DIGITAL</span>
<h3 className="font-headline-md text-headline-md text-primary uppercase">Motion Design &amp; 3D</h3>
</div>
<span className="font-headline-sm text-headline-sm text-outline">06</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Animações de logotipo cinéticas, gráficos tridimensionais proceduralmente renderizados, vinhetas institucionais e transições imersivas que conferem vida pulsante à identidade digital da marca em qualquer ecrã.
          </p>
<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container p-3">
<span className="font-label-technical text-label-technical text-outline block">Modelagem 3D</span>
<span className="font-body-sm text-body-sm text-primary font-medium">Texturização Realista</span>
</div>
<div className="bg-surface-container p-3">
<span className="font-label-technical text-label-technical text-outline block">Kinetic Typography</span>
<span className="font-body-sm text-body-sm text-primary font-medium">Animação Tipográfica</span>
</div>
</div>
</div>
{/*  07: Publicidade Exterior e Offline (Span 6)  */}
<div className="lg:col-span-6 bg-surface-container-low p-space-lg flex flex-col justify-between group shadow-xl hover:bg-surface-container transition-all">
<div className="flex justify-between items-start mb-space-md">
<div>
<span className="font-label-technical text-label-technical text-primary-fixed uppercase block mb-1">PILAR 07 // MONUMENTAL URBANO</span>
<h3 className="font-headline-md text-headline-md text-primary uppercase">Publicidade Exterior &amp; Offline</h3>
</div>
<span className="font-headline-sm text-headline-sm text-outline">07</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Outdoors de escala colossal nas principais artérias de Maputo, ativações urbanas experienciais, totens LED interativos e mídias de trânsito que tomam posse do espaço físico com autoridade incontestável.
          </p>
<div className="grid grid-cols-2 gap-space-sm">
<div className="bg-surface-container p-3">
<span className="font-label-technical text-label-technical text-outline block">Localizações</span>
<span className="font-body-sm text-body-sm text-primary font-medium">Av. Julius Nyerere / Marginal</span>
</div>
<div className="bg-surface-container p-3">
<span className="font-label-technical text-label-technical text-outline block">Formato</span>
<span className="font-body-sm text-body-sm text-primary font-medium">Painéis Mega LED / Unipoles</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  STORYTELLING VISUAL & CULTURAL REINVENTION  */}
<section className="w-full bg-surface-container-lowest py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/*  Left: Imagery Matrix  */}
<div className="lg:col-span-6 relative">
<div className="relative w-full h-[480px] overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Contemporary African model in avant-garde architectural fashion against a stark graphic backdrop in Maputo, bold dramatic studio lighting, rich deep obsidian skin tones, glowing neon lime geometric shadow patterns, magazine editorial cover style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh0i95FF1TFouZfmsXH9qbU1mWz3QMZQQpPHmn7zy5NYe5gH6kzPSYvBtZ1V7SC6spDFg-ATt4tEBBtO3nwb0kMAc2zJ714OysA1OvZjYqJw7bUHkJ_FNVcRXJOCJ59vc3Op4hEdKwJPP_3_PE5NWz3otDuDoHBLk2nmLieC4uZTv6YqUjrGkLRuFhaWOZ4uvaxdz6gCIrtf8iTr1H1E5kX4R8h9FWWn2ORNp3aPyi"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
</div>
{/*  Overlapping Secondary Asset  */}
<div className="hidden sm:block absolute -bottom-8 -right-8 w-64 h-64 bg-surface-container p-space-md shadow-2xl">
<div className="w-full h-full relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Abstract geometric African textile patterns reinterpreted in ultra-clean modern minimalist 3D rendering with glowing neon lime and obsidian textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk9d7GfExaKHi8CgSn1EfhHBgCqwBVP4CxtATaak5FuO_Xe-VrSwv4C6pDwEmmP2_qVo5tCn2Ie517QqK0yEgCv_qlhe3un_5qsql_SqKGifAYyVeFERY8GtqoiLOFZ1e4jkUSBUUuTXBRrNUVEI_sBseon5s2M_kNqzglpLzl0n-iSxtfSMuEGBfvHzyYHGxGNpqnUIxPHc4ARYFrVFIeK1K9hXbcta8rvhXiBya2"/>
<div className="absolute top-2 left-2 bg-surface-container-lowest/90 px-2 py-1 font-label-technical text-label-technical text-primary-fixed uppercase">
                // MATRIZ LOCAL
              </div>
</div>
</div>
</div>
{/*  Right: The Manifesto / Narrative  */}
<div className="lg:col-span-6 flex flex-col space-y-space-md">
<span className="font-label-technical text-label-technical text-primary-fixed uppercase tracking-widest block">
            STORYTELLING // A FORÇA DA AUTENTICIDADE AFRICANA
          </span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase leading-tight">
            A NARRATIVA VISUAL DO SUL GLOBAL EM DIÁLOGO COM O MUNDO.
          </h2>
<p className="font-body-lg text-body-lg text-on-surface">
            Rejeitamos a cópia estéril de fórmulas ocidentais pré-fabricadas. Acreditamos que a publicidade africana contemporânea detém uma potência imagética ímpar: rica em contrastes, visceral nas cores e profundamente conectada com as dinâmicas socioculturais que movem o continente.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant">
            Em Maputo, desenhamos marcas que honram o legado da nossa identidade ao mesmo tempo que projetam uma vanguarda estética capaz de disputar o olhar e o respeito nos maiores centros cosmopolitas globais. Não fazemos apenas campanhas — criamos referências visuais definitivas.
          </p>
<div className="pt-space-md grid grid-cols-2 gap-space-md">
<div className="bg-surface-container-low p-space-md">
<span className="font-headline-sm text-headline-sm text-primary font-bold">100%</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Narrativas proprietárias desenvolvidas com respeito antropológico e inovação formal.</p>
</div>
<div className="bg-surface-container-low p-space-md">
<span className="font-headline-sm text-headline-sm text-primary font-bold">ZERO</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Fórmulas genéricas. Cada conceito nasce de um núcleo de investigação radical.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  WORKFLOW STEPS / O PROCESSO DE PUBLICIDADE  */}
<section className="w-full bg-surface py-space-xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="mb-space-lg">
<span className="font-label-technical text-label-technical text-outline uppercase tracking-widest block mb-space-xs">// 04.2 METODOLOGIA DE EXECUÇÃO</span>
<h2 className="font-headline-md text-headline-md text-primary uppercase">COMO MATERIALIZAMOS CADA NARRATIVA</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
{/*  Step 1  */}
<div className="bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="font-headline-sm text-headline-sm text-primary-fixed font-bold mb-space-sm">F1</div>
<h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-2">Imersão Cultural</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mapeamento dos códigos do público, tensões culturais e território de diferenciação da marca.</p>
</div>
<span className="font-label-technical text-label-technical text-outline mt-space-md uppercase">01 / DISCOVERY</span>
</div>
{/*  Step 2  */}
<div className="bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="font-headline-sm text-headline-sm text-primary-fixed font-bold mb-space-sm">F2</div>
<h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-2">Direcção Criativa</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Desenho de roteiros, moodboards de arte, prototipagem tipográfica e paletas visuais definitivas.</p>
</div>
<span className="font-label-technical text-label-technical text-outline mt-space-md uppercase">02 / CONCEITO</span>
</div>
{/*  Step 3  */}
<div className="bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="font-headline-sm text-headline-sm text-primary-fixed font-bold mb-space-sm">F3</div>
<h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-2">Produção Imersiva</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sessões fotográficas, pós-produção cinematográfica, modelação 3D e preparação pré-impressão.</p>
</div>
<span className="font-label-technical text-label-technical text-outline mt-space-md uppercase">03 / REALIZAÇÃO</span>
</div>
{/*  Step 4  */}
<div className="bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="font-headline-sm text-headline-sm text-primary-fixed font-bold mb-space-sm">F4</div>
<h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-2">Ocupação Multicanal</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Desdobramento em massa em outdoors, canais digitais de alta conversão e mídias de grande porte.</p>
</div>
<span className="font-label-technical text-label-technical text-outline mt-space-md uppercase">04 / DISPERSÃO</span>
</div>
</div>
</div>
</section>
{/*  INTERACTIVE CAMPAIGN CALCULATOR / SCOPE ESTIMATOR  */}
<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="bg-surface-container p-space-lg lg:p-space-xl shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-5 flex flex-col space-y-space-sm">
<span className="font-label-technical text-label-technical text-primary-fixed uppercase tracking-wider">// FERRAMENTA DE DIMENSIONAMENTO</span>
<h3 className="font-headline-md text-headline-md text-primary uppercase">DEFINA O ÂMBITO DA SUA CAMPANHA</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Selecione as frentes necessárias para uma resposta orçamental e conceptual ultra-rápida pelos nossos diretores de criação em Maputo.
            </p>
</div>
<div className="lg:col-span-7 flex flex-col space-y-space-md">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2" id="scope-selector">
{[
  { label: "Identidade Visual", id: "identidade" },
  { label: "Campanha 360°", id: "campanha" },
  { label: "Vídeo & Spots 4K", id: "video" },
  { label: "Design Editorial", id: "editorial" },
  { label: "Motion 3D", id: "motion" },
  { label: "Outdoor & OOH", id: "ooh" }
].map((item) => {
  const isSelected = selectedScopes.includes(item.id);
  return (
    <button
      key={item.id}
      className={`scope-btn p-3 text-left font-label-technical text-label-technical uppercase tracking-wider transition-all flex items-center justify-between ${
        isSelected
          ? "bg-primary-fixed text-on-primary-fixed font-bold shadow-md"
          : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
      }`}
      onClick={() => toggleScope(item.id)}
      type="button"
    >
      <span>{item.label}</span>
      <span className={`material-symbols-outlined text-sm status-icon ${isSelected ? "text-on-primary-fixed" : "text-outline"}`}>
        {isSelected ? "check" : "add"}
      </span>
    </button>
  );
})}
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-label-technical text-label-technical text-outline uppercase" id="selected-count">
  {selectedScopes.length} {selectedScopes.length === 1 ? "DISCIPLINA SELECCIONADA" : "DISCIPLINAS SELECCIONADAS"}
</span>
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg uppercase tracking-wider text-primary-fixed hover:text-tertiary transition-colors" href="/contactos">
<span>Enviar Especificações Directas</span>
<span className="material-symbols-outlined text-sm">north_east</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  MONUMENTAL CALL TO ACTION (CTA)  */}
<section className="w-full bg-surface-container-lowest py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="bg-gradient-to-r from-surface-container to-surface-container-low p-space-xl lg:p-space-2xl relative overflow-hidden shadow-2xl">
{/*  Background Graphic Elements  */}
<div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-fixed/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-4 right-6 font-display-xl text-display-xl text-surface-container-highest/20 font-extrabold select-none pointer-events-none">
          04
        </div>
<div className="relative z-10 max-w-4xl flex flex-col space-y-space-md">
<div className="flex items-center gap-2 font-label-technical text-label-technical text-primary-fixed uppercase tracking-widest">
<span className="w-2.5 h-2.5 bg-primary-fixed rounded-full"></span>
<span>DIRECÇÃO DE ARTE &amp; CAMPANHAS</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase leading-tight">
            VAMOS CONCEBER UMA CAMPANHA MEMORÁVEL PARA A SUA MARCA?
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Do conceito disruptivo em Maputo à difusão global. Entre em contacto com a nossa equipa criativa e agende uma sessão de alinhamento estratégico.
          </p>
<div className="pt-space-md flex flex-wrap items-center gap-space-md">
<a className="inline-flex items-center gap-space-xs px-8 py-4 bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg font-bold uppercase tracking-wider hover:bg-tertiary hover:text-on-tertiary transition-all" href="/contactos">
<span>Fale Connosco Agora</span>
<span className="material-symbols-outlined text-lg">north_east</span>
</a>
<a className="inline-flex items-center gap-space-xs px-6 py-4 bg-surface-container-highest text-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-fixed hover:text-on-primary-fixed transition-all" href="/portfolio">
<span>Explorar O Portfólio</span>
<span className="material-symbols-outlined text-lg">visibility</span>
</a>
</div>
<div className="pt-space-md flex items-center gap-space-lg text-on-surface-variant font-label-technical text-label-technical uppercase">
<span>RESPOSTA EM ATÉ 24H</span>
<span>•</span>
<span>MAPUTO [CAT]</span>
<span>•</span>
<span>HELLLO@DIGITAFRIKA.COM</span>
</div>
</div>
</div>
</div>
</section>
</div>

    </div>
  );
}
