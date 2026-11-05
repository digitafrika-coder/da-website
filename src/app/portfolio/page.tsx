"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterButtons = [
    { label: "Todos [07]", value: "all" },
    { label: "Branding", value: "branding" },
    { label: "Digital & Tech", value: "digital" },
    { label: "Publicidade", value: "publicidade" },
    { label: "Fotografia", value: "fotografia" },
    { label: "Motion", value: "motion" },
    { label: "SERIGRAFIA & GRÁFICA", value: "serigrafia" },
  ];

  return (
    <div className="flex flex-col w-full text-on-surface">
      <div className="flex flex-col w-full">
{/*  SECTION HEADER & ARCHITECTURAL MANIFESTO  */}
<section className="relative w-full overflow-hidden bg-surface-container-lowest">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
{/*  Top Meta Track  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
<div className="flex items-center gap-space-xs font-label-technical text-label-technical text-primary-container tracking-widest uppercase">
<span className="inline-block w-2 h-2 rounded-full bg-primary-container"></span>
<span className="">06 // PORTFÓLIO DE IMPACTO</span>
</div>
<div className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">
<span className="">CURADORIA EXECUTIVA — 2023 // 2026</span>
</div>
</div>
{/*  Main Editorial Headline Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-space-lg pt-space-sm items-end">
<div className="lg:col-span-8">
<h1 className="font-display-lg text-display-lg text-primary uppercase tracking-tight leading-none">
            TRABALHO QUE TRANSFORMA MARCAS E MERCADOS.
          </h1>
</div>
<div className="lg:col-span-4 lg:pb-space-xs">
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Uma seleção com curadoria de projetos em branding, desenvolvimento de tecnologia e campanhas de impacto desenvolvidas para o mercado de Moçambique e escala internacional.
          </p>
</div>
</div>
{/*  Real-Time Metrics Strip (Tonal Stepping)  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-xl">
<div className="bg-surface-container-low p-space-md">
<span className="font-label-technical text-label-technical text-outline uppercase block">// ARQUITETURA ENTREGUE</span>
<span className="font-display-lg text-headline-md text-primary block mt-1">48+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Sistemas &amp; Marcas Lançadas</span>
</div>
<div className="bg-surface-container-low p-space-md">
<span className="font-label-technical text-label-technical text-outline uppercase block">// VALOR TRANSACIONADO</span>
<span className="font-display-lg text-headline-md text-primary-container block mt-1">$42M+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Via Infraestruturas DigitAfrika</span>
</div>
<div className="bg-surface-container-low p-space-md">
<span className="font-label-technical text-label-technical text-outline uppercase block">// ALCANCE CULTURAL</span>
<span className="font-display-lg text-headline-md text-primary block mt-1">11M</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pessoas Impactadas em África</span>
</div>
<div className="bg-surface-container-low p-space-md">
<span className="font-label-technical text-label-technical text-outline uppercase block">// PRECISÃO DE ENGENHARIA</span>
<span className="font-display-lg text-headline-md text-primary block mt-1">99.98%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Uptime Médio em Produção</span>
</div>
</div>
</div>
</section>
{/*  INTERACTIVE FILTER BAR  */}
<section className="sticky top-20 z-40 w-full bg-surface-container-lowest/95 backdrop-blur-xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop py-space-sm flex items-center justify-between gap-space-md overflow-x-auto">
{/*  Category Filter Pills  */}
<div className="flex items-center gap-space-xs shrink-0 py-1" id="filter-container">
{filterButtons.map((btn) => {
  const isActive = activeFilter === btn.value;
  return (
    <button
      key={btn.value}
      onClick={() => setActiveFilter(btn.value)}
      aria-pressed={isActive}
      className={`filter-btn px-4 py-2 font-label-lg text-label-lg uppercase tracking-wider transition-all flex items-center gap-1.5 ${
        isActive
          ? "bg-primary-container text-on-primary-fixed font-bold"
          : "bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-container-highest"
      }`}
    >
      {isActive && <span className="w-1.5 h-1.5 bg-on-primary-fixed"></span>}
      <span>{btn.label}</span>
    </button>
  );
})}
</div>
{/*  Quick Index Indicator  */}
<div className="hidden md:flex items-center gap-space-xs font-label-technical text-label-technical text-outline shrink-0">
<span className="material-symbols-outlined text-sm text-primary-container">tune</span>
<span className="">INDEXAÇÃO DINÂMICA // MOÇAMBIQUE &amp; GLOBAL</span>
</div>
<Link href="/contactos" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-bold uppercase tracking-wider hover:bg-primary transition-all shrink-0">
<span className="">PEDIR ORÇAMENTO</span>
<span className="material-symbols-outlined text-base">north_east</span>
</Link>
</div>
</section>
{/*  ASYMMETRIC BESPOKE EDITORIAL GRID  */}
<section className="w-full bg-surface py-space-xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col gap-space-xl" id="projects-grid">
{/*  PROJETO 01: MONOLITH HIGHLIGHT (PLATAFORMA DIGITAL KUVULA)  */}
<article className={`project-card group relative bg-surface-container-lowest transition-all duration-300 ${(activeFilter === "all" || activeFilter === "digital") ? "" : "hidden"}`} data-category="digital">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
{/*  Left Info Panel (5 cols)  */}
<div className="lg:col-span-5 p-space-md sm:p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-low">
<div>
{/*  Metadata Header  */}
<div className="flex items-center justify-between pb-space-md">
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase">// DESTAQUE 01</span>
<span className="font-label-technical text-label-technical text-outline uppercase">2025 — PROD // MAPUTO</span>
</div>
{/*  Category Tag  */}
<div className="inline-block bg-surface-container-highest px-3 py-1 font-label-technical text-label-technical text-on-surface uppercase mb-space-sm">
                  DIGITAL &amp; ENGENHARIA // MOÇAMBIQUE
                </div>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase leading-tight mb-space-sm group-hover:text-primary-container transition-colors">
                  PLATAFORMA DIGITAL KUVULA
                </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  Infraestrutura de nuvem resiliente e portal governamental de licenciamento descentralizado projetado para reduzir a burocracia comercial em Moçambique de semanas para minutos com autenticação biométrica nacional.
                </p>
{/*  Technical Badges  */}
<div className="flex flex-wrap gap-2 pt-space-xs">
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">Next.js 15</span>
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">PostgreSQL Core</span>
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">Sub-second Latency</span>
<span className="bg-surface-container px-2.5 py-1 text-primary-container font-label-technical text-label-technical uppercase">+340k Contribuintes</span>
</div>
</div>
{/*  Case Study Action Link  */}
<div className="pt-space-lg">
<a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary-container group-hover:text-primary transition-colors" href="/portfolio/kuvula">
<span className="">Ver Estudo de Caso</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
</a>
</div>
</div>
{/*  Right Media Panel (7 cols)  */}
<div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Editorial close-up of a state of the art minimalist software dashboard interface glowing on modern hardware screens inside a contemporary architectural tech lab in Maputo Mozambique. Moody obsidian tones with neon lime data highlights, high precision typography, high dynamic range rendering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5CCNKqx53FMUCzOwin7Ur49Bgy3busUS8TtydAS42MjklKyLbelDU5VpHf2Wo4vptF-XCo-arNIXh441V_P6uFAdV2q2etTg7IlTLEyWDJ0eQ1PCc1zodgRlhkdGcd3MCDITo00vh2iBht6FQIOacnMNnadJ1gaRydVnkZr7GiFsjQbuNT5uYEMDI5q5bl-sf8UDpSjh4aK4c34Jtg-nxFcEoGuG9437DmZfIeeEL" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 right-6 bg-surface-container-lowest/90 px-3 py-1.5 backdrop-blur-md font-label-technical text-label-technical text-primary uppercase">
                LATÊNCIA: 18MS // MAPUTO SERVER FARM
              </div>
</div>
</div>
</article>
{/*  DUO ROW: PROJETO 02 & PROJETO 03  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-space-lg">
{/*  PROJETO 02: REBRAND LUMEN BEVERAGES (7 cols)  */}
<article className={`project-card group lg:col-span-7 bg-surface-container-low flex flex-col justify-between ${(activeFilter === "all" || activeFilter === "branding") ? "" : "hidden"}`} data-category="branding">
<div className="relative h-[420px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="High-end studio photography of avant-garde matte black beverage bottles and amber glass vessels with brutalist typography and embossed neon lime foil labels. Dramatic cinematic rim lighting, deep obsidian shadows, editorial luxury packaging showcase for Mozambican premium distillates." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmiu80rihPjKW48G3uJh5HDKJtWTjg-XuW_6fzUbzYuVJ2cF1k8lET2shmKqaJovEfKNK8nx6Aal00AxEnrCBptqjvHH7ecFh2-CK3cdeVO6MZWck7wttleCldlCNSDPqSGkcMuUuQtXF4GhcuuTEIOIFsjjQJJZN_jaqTMtMLK7xL8ShOcyFJRpvbFo7sGttPz7fo2xRPlF1XSz-qLAo8aoF3_fwobKTkMdbxkC65" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary uppercase">
                02 // PACKAGING &amp; MARCA
              </div>
</div>
<div className="p-space-md sm:p-space-lg flex flex-col justify-between flex-1">
<div>
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-technical text-label-technical text-outline uppercase">BEBIDAS PREMIUM // LUXO AFRO-CONTEMPORÂNEO</span>
<span className="font-label-technical text-label-technical text-on-surface-variant uppercase">2024</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary uppercase leading-tight mb-space-xs group-hover:text-primary-container transition-colors">
                  REBRAND LUMEN BEVERAGES
                </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  Redefinição estética e estratégia de packaging radical para a maior exportadora de destilados finos da costa oriental africana, unindo botânicos endémicos com elegância brutalista.
                </p>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">Sistema de Identidade</span>
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">Design Editorial</span>
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">3D Render Industrial</span>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between">
<a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary group-hover:text-primary-container transition-colors" href="/portfolio/kuvula">
<span className="">Ver Estudo de Caso</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
<span className="font-label-technical text-label-technical text-outline uppercase">+184% VENDAS INT.</span>
</div>
</div>
</article>
{/*  PROJETO 03: VODA COMMERCE (5 cols)  */}
<article className={`project-card group lg:col-span-5 bg-surface-container-low flex flex-col justify-between ${(activeFilter === "all" || activeFilter === "digital") ? "" : "hidden"}`} data-category="digital">
<div className="relative h-[420px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Editorial visual of an ultra sleek mobile payment interface mockup displaying seamless M-Pesa digital wallet integration in Mozambique. High contrast typography, sleek smartphone bezel resting on black volcanic stone surface, subtle green glow from ambient LED accent lights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOcmUPK3gTz8EPDYREr-5nQF_HGLBdr22PgHmQZYPy-Fa0VcNbKoL9uejSj10GX6O0k9IYsMoRTa_vROOKTNJMC6rk-yKmC3G0A7OI50oO5HA4dXCMueCTtNfwDan5nOHLQ9JbZewe38N5jBXQRefvcLtWlzxmBBdEa3vmOqPOlvT1-uR3O15pnxuNZlhgbqSgttwVy7vLYQeTMKJA5petBPjx9pVoJK9JzkiQMRoA" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary-container uppercase">
                03 // FINTECH OMNICANAL
              </div>
</div>
<div className="p-space-md sm:p-space-lg flex flex-col justify-between flex-1">
<div>
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-technical text-label-technical text-outline uppercase">MOBILE &amp; PAGAMENTOS</span>
<span className="font-label-technical text-label-technical text-on-surface-variant uppercase">2025</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary uppercase leading-tight mb-space-xs group-hover:text-primary-container transition-colors">
                  EXPERIÊNCIA VODA COMMERCE
                </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  Arquitetura de checkout sem fricção com liquidação direta via M-Pesa e cartões bancários moçambicanos para mais de 1.200 retalhistas físicos e virtuais.
                </p>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">API M-Pesa</span>
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">Flutter Core</span>
<span className="bg-surface-container px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">Design System</span>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between">
<a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary group-hover:text-primary-container transition-colors" href="/portfolio/kuvula">
<span className="">Ver Estudo de Caso</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
<span className="font-label-technical text-label-technical text-primary-container uppercase">TRANSACÇÕES INSTANTÂNEAS</span>
</div>
</div>
</article>
</div>
{/*  FULL-WIDTH CULTURAL STATEMENT: PROJETO 04 (AFROPOLITAN)  */}
<article className={`project-card group relative bg-surface-container-lowest overflow-hidden ${(activeFilter === "all" || activeFilter === "publicidade") ? "" : "hidden"}`} data-category="publicidade">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
{/*  Visual Canvas (8 cols)  */}
<div className="lg:col-span-8 relative min-h-[360px] lg:min-h-full overflow-hidden bg-surface-container-high order-2 lg:order-1">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Avant-garde creative advertising campaign poster mockup for a massive African contemporary art and music festival in Maputo. Expressive vibrant experimental typography, bold portrait of an African digital artist with chromatic distortion, dark cinematic street atmosphere, lime and magenta accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvIwDVoBKgOZfeHKhWseuvmmCXfMxczjwH6VWrDXtPZtdIuGVOxfmWR7CKx9grQo_zH4Xh9ONMsCojf8EzELFkBaU7XQhMDWpoNCIaauqIO8YoRl8G3EQ0DpuJ9RB4wQthjThxUXuHdG6iAkIzQk9mi4pD6ywaSARVVjoBZDdv8lCLrJ2-p19T84O9OH_GWb1z8zkC7NMzRyatUtL_ida25jZxmb5B9Zf5_zQvY1c3" />
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container-lowest hidden lg:block"></div>
<div className="absolute bottom-6 left-6 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary uppercase">
                CAMPANHA 360° // OOH + DIGITAL + MOTION EXPERIMENTAL
              </div>
</div>
{/*  Text & Cultural Metrics (4 cols)  */}
<div className="lg:col-span-4 p-space-md sm:p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-low order-1 lg:order-2">
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase">// 04 — PUBLICIDADE</span>
<span className="font-label-technical text-label-technical text-outline uppercase">MAPUTO / GLOBAL</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary uppercase leading-tight mb-space-sm group-hover:text-primary-container transition-colors">
                  FESTIVAL AFROPOLITAN
                </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                  Campanha viral de posicionamento cultural que reposicionou Maputo no mapa dos maiores festivais de criatividade urbana contemporânea do hemisfério sul.
                </p>
{/*  Cultural KPI Data Visualization Box  */}
<div className="bg-surface-container p-space-md mb-space-md flex flex-col gap-2">
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">Engajamento Viral</span>
<span className="text-primary font-bold">4.8M Visualizações</span>
</div>
<div className="w-full h-1 bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary-container w-[92%]"></div>
</div>
<div className="flex justify-between items-center text-body-sm pt-1">
<span className="text-on-surface-variant">Bilheteira Esgotada</span>
<span className="text-primary-container font-bold">48 Horas Recorde</span>
</div>
<div className="w-full h-1 bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary w-[100%]"></div>
</div>
</div>
</div>
<div>
<a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary group-hover:text-primary-container transition-colors" href="/portfolio/kuvula">
<span className="">Explorar Estudo Completo</span>
<span className="material-symbols-outlined text-base">north_east</span>
</a>
</div>
</div>
</div>
</article>
{/*  TRIO ASYMMETRIC GRID: PROJETO 05, 06, 07  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md lg:gap-space-lg">
{/*  PROJETO 05: BANCO MATOLA HORIZONTE  */}
<article className={`project-card group bg-surface-container-low flex flex-col justify-between ${(activeFilter === "all" || activeFilter === "digital") ? "" : "hidden"}`} data-category="digital">
<div>
<div className="relative h-[320px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Editorial visual of a high security enterprise fintech design system with interactive component libraries, data grids, and cryptographic key monitors. Obsidian theme with sharp lime green indicators, razor clean data hierarchy displayed on dark screens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9njFZ7GKde6eFfM_H3xNUgzU88PrprUZx8Rdtjp9yMt1LLuxmHsE0xmgldO4ZoC0ms0JkJPggK85_JbN2CSSjxgwr5ajj_J4I2atB6vi2INqTl4zqcC8Hgwt8TuyWpo-L9DECVlQfrb27tDFI1i0kVjCoMcwm9YpKCw23BiFbcc-bEdvmKosHOyGjxu0CoMTDM_m0F3eB5cflFMiKMVXhP0OidWJd7-GJQkPyQvo2" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary uppercase">
                  05 // SISTEMA FINANCEIRO
                </div>
</div>
<div className="p-space-md sm:p-space-lg">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">DIGITAL &amp; UI/UX // ENTERPRISE</span>
<h3 className="font-headline-sm text-headline-sm text-primary uppercase leading-tight mb-space-xs group-hover:text-primary-container transition-colors">
                  BANCO MATOLA HORIZONTE
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Design System com mais de 300 componentes auditados segundo as normas do Banco de Moçambique, reduzindo o tempo de lançamento de novos produtos em 65%.
                </p>
</div>
</div>
<div className="p-space-md sm:p-space-lg pt-0">
<a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary group-hover:text-primary-container transition-colors" href="/portfolio/kuvula">
<span className="">Ver Caso</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</article>
{/*  PROJETO 06: MOÇAMBIQUE EM FOCO  */}
<article className={`project-card group bg-surface-container-low flex flex-col justify-between ${(activeFilter === "all" || activeFilter === "fotografia") ? "" : "hidden"}`} data-category="fotografia">
<div>
<div className="relative h-[320px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Stunning editorial documentary portrait photography of contemporary Mozambican architects and creators working inside a brutalist concrete building in Maputo. Rich black skin tones, sharp chiaroscuro lighting, subtle industrial lime reflections, photographic monograph aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtX9HuUYM85Zs_-_Q2MRUiTULcmPKLpOLv1BKXAH-5Mh5uFUUw2Zj3uMjqswOAxVlNgzgUzpIUQVod8UPgo7TkxKEigiHP0Zprz89SisIWnFkIdTafc4FZvwExmiYREbRpyxn1mgToTl-zH7IV4NIa8L7mbYQjdkF9qloP-3YDJyRgHycDPVEDG413EUMfgXoRZJDERRYYNseIzAzsun4-J2G7JLwci8MrhYsF4A8f" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary uppercase">
                  06 // EDITORIAL
                </div>
</div>
<div className="p-space-md sm:p-space-lg">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">FOTOGRAFIA &amp; DIRECÇÃO DE ARTE</span>
<h3 className="font-headline-sm text-headline-sm text-primary uppercase leading-tight mb-space-xs group-hover:text-primary-container transition-colors">
                  MOÇAMBIQUE EM FOCO
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Monografia fotográfica e campanha editorial pan-africana documentando a nova geração de arquitetos, programadores e artistas em Maputo, Beira e Nampula.
                </p>
</div>
</div>
<div className="p-space-md sm:p-space-lg pt-0">
<a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary group-hover:text-primary-container transition-colors" href="/portfolio/kuvula">
<span className="">Ver Caso</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</article>
{/*  PROJETO 07: KINETIC SOUND IDENTIDADE  */}
<article className={`project-card group bg-surface-container-low flex flex-col justify-between ${(activeFilter === "all" || activeFilter === "motion") ? "" : "hidden"}`} data-category="motion">
<div>
<div className="relative h-[320px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Abstract 3D motion design render featuring kinetic generative soundwave sculptures made of dark chrome and vibrating lime liquid energy against a deep dark background. Avant-garde acoustic branding visualization, futuristic spatial computing aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmTb1R40_lJFGQIhnuRQkX7Aetca5N5cbzHTrjBV2fA9a2JA5diYtlR8uO4SgiihlcRSmx1zKwcHBCESrKzGaOgsokz_tsb690drCXIgNJ09273OMQI4NOtV5FH_mvrPviXrWhO3MXcxVL7r9F89ndGg7vaDKtmuKUo1A-ICEA_sGmG6h2sNROHKFZhcUwh9XBjHm5V7EE9wf2_3GMyg3AvvVMuaKonDicQCilYlHh" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary uppercase">
                  07 // ÁUDIO-VISUAL
                </div>
</div>
<div className="p-space-md sm:p-space-lg">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">MOTION &amp; IDENTIDADE SONORA</span>
<h3 className="font-headline-sm text-headline-sm text-primary uppercase leading-tight mb-space-xs group-hover:text-primary-container transition-colors">
                  KINETIC SOUND IDENTIDADE
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Identidade cinética multissensorial concebida para rádio digital e streaming africano, traduzindo ritmos polirrítmicos tradicionais em algoritmos visuais 3D.
                </p>
</div>
</div>
<div className="p-space-md sm:p-space-lg pt-0">
<a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary group-hover:text-primary-container transition-colors" href="/portfolio/kuvula">
<span className="">Ver Caso</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</article>
</div>
</div>
</div>
</section>
{/*  REPUTATION & SECTOR CAPABILITIES MATRIX  */}
<section className="w-full bg-surface-container-lowest py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col lg:flex-row justify-between items-start gap-space-lg pb-space-xl">
<div className="max-w-xl">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-2">// CAPACIDADE MULTIDISCIPLINAR</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase leading-tight">
            DO CONCEITO RADICAL À IMPLEMENTAÇÃO DE PRECISÃO.
          </h2>
</div>
<p className="max-w-md font-body-md text-body-md text-on-surface-variant">
          Não acreditamos na separação tradicional entre agência criativa e software house. A nossa equipa unifica direção de arte internacional com engenharia robusta em todas as entregas.
        </p>
</div>
{/*  Capability Breakdown Rows  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="p-space-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="font-label-technical text-label-technical text-outline uppercase mb-space-sm">// 01 — BRAND ARCHITECTURE</div>
<h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-space-xs">Identidade &amp; Reputação</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Naming, sistemas tipográficos personalizados, diretrizes de marca e narrativa institucional para empresas preparadas para a expansão continental.
            </p>
</div>
<div className="font-label-technical text-label-technical text-primary-container uppercase">
            TEMPO MÉDIO DE EXECUÇÃO: 4-8 SEMANAS
          </div>
</div>
<div className="p-space-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="font-label-technical text-label-technical text-outline uppercase mb-space-sm">// 02 — PLATAFORMAS DIGITAIS</div>
<h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-space-xs">Engenharia Web &amp; Mobile</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Aplicações web modernas, portais de autoatendimento, gateways de pagamento móvel e integrações bancárias de missão crítica.
            </p>
</div>
<div className="font-label-technical text-label-technical text-primary-container uppercase">
            STACK DE TOPO: REACT, NODE, GO, AWS
          </div>
</div>
<div className="p-space-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="font-label-technical text-label-technical text-outline uppercase mb-space-sm">// 03 — CULTURA &amp; PERFORMANCE</div>
<h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-space-xs">Campanhas 360°</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Estratégias de lançamento multimédia, produção fotográfica documental, animação cinematográfica e planeamento de meios com medição de ROI.
            </p>
</div>
<div className="font-label-technical text-label-technical text-primary-container uppercase">
            AUDIÊNCIA TOTAL CONVERTIDA: 14M+
          </div>
</div>
</div>
</div>
</section>
{/*  SCALABILITY STATEMENT & HIGH IMPACT CTA  */}
<section className="w-full bg-surface-container-low py-space-2xl relative overflow-hidden">
{/*  Ambient Structural Graphic  */}
<div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary-container/5 blur-3xl pointer-events-none"></div>
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-8">
<div className="flex items-center gap-space-xs font-label-technical text-label-technical text-primary-container uppercase tracking-widest mb-space-sm">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="">NOVO CICLO OPERACIONAL ABERTO // 2026</span>
</div>
<h2 className="font-display-lg text-display-lg text-primary uppercase tracking-tight leading-none mb-space-md">
            O SEU PRÓXIMO PROJECTO PODE ESTAR AQUI.
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Seja para criar uma nova categoria em Moçambique, redesenhar sistemas obsoletos ou lançar uma campanha que redefina a cultura da sua indústria: estamos prontos para colaborar.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md items-start lg:items-end">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-8 py-4 bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-bold uppercase tracking-wider hover:bg-primary hover:text-surface-container-lowest transition-all" href="/contactos">
<span className="">Iniciar Um Projeto</span>
<span className="material-symbols-outlined text-lg">north_east</span>
</a>
<Link href="/servicos/grafica" className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-6 py-4 border border-outline-variant/40 text-primary hover:text-primary-container hover:bg-surface-container font-label-lg text-label-lg font-bold uppercase tracking-wider transition-all">
<span className="">ORÇAMENTO DE SERIGRAFIA &amp; GRÁFICA</span>
<span className="material-symbols-outlined text-base">north_east</span>
</Link>
<a className="inline-flex items-center gap-2 font-label-technical text-label-technical text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase" href="mailto:hello@digitafrika.com">
<span className="">DISCUSSÃO CONFIDENCIAL: HELLO@DIGITAFRIKA.COM</span>
</a>
</div>
</div>
</div>
</section>
{/*  CLIENT-SIDE INTERACTIVITY FOR DYNAMIC FILTERING  */}

</div>
    </div>
  );
}
