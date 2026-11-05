"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string>("PROGRAMAÇÃO");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/*  =========================================================================
     HERO SECTION (FAITHFUL TO SCREEN_6 / SCREEN_8 LAYOUT)
     =========================================================================  */}
<section className="relative w-full overflow-hidden bg-[#0B0C0F] -mt-20 pt-20 lg:pt-24 pb-3 lg:pb-4 h-screen min-h-[620px] max-h-[960px] flex flex-col justify-between select-none">
{/*  Subtle Architectural Ambient Atmosphere (No diffuse green blooming halos)  */}
<div className="absolute inset-0 pointer-events-none z-0" style={{"background":"radial-gradient(circle 600px at 70% 45%, rgba(139, 92, 246, 0.04) 0%, rgba(11, 12, 15, 0) 70%)"}}></div>
<div className="absolute -top-12 left-1/4 w-96 h-96 bg-surface-container-high/10 rounded-full blur-[140px] pointer-events-none"></div>

<div className="max-w-[1600px] w-full mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop relative z-10 flex-grow flex flex-col justify-between">
{/*  Main Split Hero Layout (Elevated Content Closer to Header)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-8 items-center pt-0 pb-1 relative flex-grow my-auto">
{/*  Left Content Column (Shifted up to eliminate empty space)  */}
<div className="lg:col-span-5 flex flex-col z-20 space-y-3 lg:space-y-3.5 max-w-lg py-1 -mt-2 sm:-mt-4 lg:-mt-6">
{/*  Eyebrow Badge Pill  */}
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-outline-variant/40 text-on-surface font-mono text-xs uppercase tracking-wider w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="text-[11px] font-semibold tracking-wide">AGÊNCIA CRIATIVA &amp; DIGITAL</span>
</div>
{/*  Headline stacked line-by-line (Crisp and pure without green halo drop-shadow)  */}
<h1 className="font-display-xl text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black uppercase tracking-tight leading-[1.02]">
<span className="block text-white">Pensamos.</span>
<span className="block text-white">Criamos.</span>
<span className="block text-primary-container">Transformamos.</span>
</h1>
{/*  Narrative Paragraph  */}
<p className="font-body-md text-xs sm:text-sm lg:text-base text-secondary max-w-md leading-relaxed">
Unimos marketing, publicidade, programação e produção gráfica para impulsionar marcas, criar experiências e desenvolver soluções digitais de alto impacto global.
</p>
{/*  CTA Buttons  */}
<div className="flex flex-wrap items-center gap-space-sm pt-1">
<Link className="px-5 sm:px-6 py-3 rounded-full bg-primary-container text-on-primary-fixed font-label-lg text-xs sm:text-label-lg font-bold uppercase tracking-wider hover:bg-primary hover:text-surface-container-lowest transition-all flex items-center gap-2 group" href="/contactos">
<span className="">Vamos Trabalhar Juntos</span>
<span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">north_east</span>
</Link>
<a className="px-4 sm:px-5 py-3 rounded-full bg-surface-container-high/50 hover:bg-surface-container-high border border-outline-variant/40 hover:border-primary-container text-white font-label-lg text-xs sm:text-label-lg font-medium uppercase tracking-wider transition-all flex items-center gap-2.5 group" href="#work">
<span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-black transition-colors">
<span className="material-symbols-outlined text-sm">play_arrow</span>
</span>
<span className="">Ver Nosso Reel</span>
<span className="text-xs text-outline font-mono">1:45</span>
</a>
</div>
</div>

{/*  Right 3D Visual Sculpture Column with Sketch-Mapped Glass Cards  */}
<div className="lg:col-span-7 relative flex items-center justify-center h-full w-full">
{/*  Preserved Spatial Ambient Rings  */}
<div className="absolute w-[440px] h-[440px] lg:w-[580px] lg:h-[580px] rounded-full border border-primary-container/15 -z-0 pointer-events-none animate-pulse"></div>
<div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-outline-variant/25 -z-0 pointer-events-none"></div>

{/*  High Resolution Cyber Sculpture with 100% Transparent Background (PNG Oficial)  */}
<div className="relative z-10 w-full flex items-center justify-center overflow-visible pointer-events-none" style={{"maskImage":"linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)","WebkitMaskImage":"linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"}}>
<img alt="Retrato Cibernético com Fitas Digitais DigitAfrika" className="h-[320px] sm:h-[400px] lg:h-[440px] xl:h-[490px] 2xl:h-[540px] max-h-[68vh] w-auto max-w-none object-contain filter brightness-105 contrast-105" src="/images/hero-sculpture.png" />
<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/85 to-transparent pointer-events-none z-20"></div>
</div>

{/*  Sketch Box 1: Upper Left (ao lado do visor, no espaço escuro entre headline e escultura)  */}
<div className="absolute top-[10%] left-0 sm:left-4 lg:-left-12 xl:-left-8 z-20 hidden md:flex items-center group">
<Link href="/servicos/marketing" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#12141A]/65 backdrop-blur-md border border-white/10 hover:border-primary-container/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 w-52 lg:w-60">
<div className="w-8 h-8 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center text-primary-container flex-shrink-0">
<span className="material-symbols-outlined text-sm">campaign</span>
</div>
<div className="flex-1 min-w-0 pr-1">
<div className="flex items-center justify-between">
<p className="text-xs font-bold text-white group-hover:text-primary-container transition-colors truncate">Estratégia de Marca</p>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container text-xs ml-1">north_east</span>
</div>
<p className="text-[10px] text-on-surface-variant truncate">Ideias em marcas de poder.</p>
</div>
</Link>
</div>

{/*  Sketch Box 2: Middle Left (no espaço escuro ao lado do pescoço, abaixo do texto)  */}
<div className="absolute top-[46%] left-0 sm:left-2 lg:-left-14 xl:-left-10 z-20 hidden md:flex items-center group">
<Link href="/servicos/publicidade" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#12141A]/65 backdrop-blur-md border border-white/10 hover:border-primary-container/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 w-52 lg:w-60">
<div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-container flex-shrink-0">
<span className="material-symbols-outlined text-sm">palette</span>
</div>
<div className="flex-1 min-w-0 pr-1">
<div className="flex items-center justify-between">
<p className="text-xs font-bold text-white group-hover:text-primary-container transition-colors truncate">Design Criativo</p>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container text-xs ml-1">north_east</span>
</div>
<p className="text-[10px] text-on-surface-variant truncate">Direcção criativa de impacto.</p>
</div>
</Link>
</div>

{/*  Sketch Box 3: Upper/Middle Right (ao lado das aletas dobradas)  */}
<div className="absolute top-[22%] right-0 lg:right-2 z-20 hidden md:flex items-center group">
<Link href="/servicos/programacao" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#12141A]/65 backdrop-blur-md border border-white/10 hover:border-primary-container/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 w-52 lg:w-60">
<div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 flex-shrink-0">
<span className="material-symbols-outlined text-sm">trending_up</span>
</div>
<div className="flex-1 min-w-0 pr-1">
<div className="flex items-center justify-between">
<p className="text-xs font-bold text-white group-hover:text-primary-container transition-colors truncate">Crescimento Digital</p>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container text-xs ml-1">north_east</span>
</div>
<p className="text-[10px] text-on-surface-variant truncate">Tráfego, leads e conversão.</p>
</div>
</Link>
</div>

{/*  Sketch Position 4: Lower Right (elevado na fita lateral direita, idêntico aos outros cartões de vidro)  */}
<div className="absolute top-[56%] right-0 lg:right-2 xl:right-4 z-20 hidden md:flex items-center group">
<Link href="/portfolio/kuvula" className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#12141A]/65 backdrop-blur-md border border-white/10 hover:border-primary-container/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 w-52 lg:w-60">
<div className="w-8 h-8 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/10 relative">
<img alt="Último Projecto" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ylttlFRVxemPGEj7bPY5tGpdzj6awNc3sMYpOUiwOHT-WkebiRTrL2iKvy_bbza5MQR6n8AzP_VtEi-WLp3yCa7Jdb0qxhgXa_F4FyQZThc0j0odRZWYoeN7IioaTXXSjgSNCjtI4JygGdaOKKi-vda-aVqbDK-nf5nDL-T2iOJCLlu6UizkDe8t5GXRndmgAFiCuDQyljeYrWNd7NbV1opgJhLYU7ltkqOeijzL" />
</div>
<div className="flex-1 min-w-0 pr-1">
<div className="flex items-center justify-between">
<p className="text-xs font-bold text-white group-hover:text-primary-container transition-colors truncate">Branding Futuro</p>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container text-xs ml-1">north_east</span>
</div>
<p className="text-[10px] text-primary-container font-mono uppercase tracking-wider truncate">Último Projecto</p>
</div>
</Link>
</div>
</div>
</div>

{/*  Bottom Unified Utility Bar: Navigation + Centered Metrics + Scroll Cue  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-2.5 pb-1 border-t border-outline-variant/20 text-on-surface-variant font-label-technical text-label-technical uppercase tracking-widest mt-auto z-20">
{/*  Left: Scroll cue  */}
<div className="w-full sm:w-48 flex items-center justify-start shrink-0">
<a className="flex items-center gap-space-xs text-secondary hover:text-primary-container transition-colors group" href="#triad">
<span className="w-5 h-5 flex items-center justify-center bg-surface-container-high group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors rounded-sm">
<span className="material-symbols-outlined text-xs">arrow_downward</span>
</span>
<span className="text-[10px] sm:text-[11px] font-semibold tracking-wider">ROLE P/ EXPLORAR</span>
</a>
</div>

{/*  Center: Perfectly Centered Highlight Metrics Strip  */}
<div className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 py-1.5 px-5 rounded-full bg-surface-container-high/40 border border-outline-variant/30 backdrop-blur-md mx-auto">
<div className="flex items-baseline gap-1.5">
<span className="font-headline-sm text-sm sm:text-base lg:text-lg text-primary font-bold">85+</span>
<span className="text-[9px] sm:text-[10px] text-on-surface-variant tracking-wider">PROJECTOS</span>
</div>
<span className="text-outline-variant text-xs">•</span>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-sm text-sm sm:text-base lg:text-lg text-primary font-bold">5+</span>
<span className="text-[9px] sm:text-[10px] text-on-surface-variant tracking-wider">ANOS EXP.</span>
</div>
<span className="text-outline-variant text-xs">•</span>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-sm text-sm sm:text-base lg:text-lg text-primary font-bold">12+</span>
<span className="text-[9px] sm:text-[10px] text-on-surface-variant tracking-wider">MERCADOS</span>
</div>
<span className="text-outline-variant text-xs">•</span>
<div className="flex items-baseline gap-1.5">
<span className="font-headline-sm text-sm sm:text-base lg:text-lg text-primary-container font-bold">98%</span>
<span className="text-[9px] sm:text-[10px] text-on-surface-variant tracking-wider">SATISFAÇÃO</span>
</div>
</div>

{/*  Right: Scroll cue with mouse indicator matching left width for perfect center  */}
<div className="hidden sm:flex items-center justify-end gap-2 text-on-surface-variant w-48 shrink-0">
<a className="flex items-center gap-2 text-secondary hover:text-primary-container transition-colors group cursor-pointer" href="#triad">
<span className="text-[10px] sm:text-[11px] font-semibold tracking-wider">ROLAR P/ BAIXO</span>
<div className="w-3.5 h-5 rounded-full border border-outline-variant/60 flex items-start justify-center p-0.5">
<span className="w-1 h-1.5 rounded-full bg-primary-container animate-bounce"></span>
</div>
</a>
</div>
</div>
</div>
</section>
{/*  =========================================================================
       SECTION 03 — THREE WORLDS. ONE VISION. (THE TRIAD)
       =========================================================================  */}
<section className="w-full bg-surface py-space-2xl" id="triad">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
{/*  Section Header  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-2xl">
<div className="max-w-2xl">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-xs">// 02 — A TRÍADE</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight leading-tight">
            TRÊS MUNDOS.<br />UMA VISÃO.
          </h2>
</div>
<p className="font-body-md text-body-md text-secondary max-w-md leading-relaxed">
          Da estratégia à criatividade. Da comunicação à tecnologia. Reunimos diferentes competências para transformar possibilidades em resultados reais, mensuráveis e escaláveis.
        </p>
</div>
{/*  Asymmetrical 3-Column Editorial Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
{/*  Pillar 01: MARKETING  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md hover:bg-surface-container transition-colors duration-300 group">
<div>
<div className="flex items-center justify-between pb-space-md mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase">PILAR // 01</span>
<span className="font-headline-sm text-headline-sm text-surface-bright group-hover:text-primary transition-colors">01</span>
</div>
<h3 className="font-headline-md text-headline-md uppercase text-primary mb-space-sm">MARKETING</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg leading-relaxed">
              Pensamento analítico, estratégia de penetração de mercado e aceleração de performance comercial focada no consumidor africano e em escalas globais.
            </p>
{/*  Interactive Metric Highlight Box  */}
<div className="p-space-md bg-surface-container-lowest mb-space-lg">
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">Métrica Média de Impacto</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-md text-headline-md text-primary-container">+340%</span>
<span className="font-body-sm text-body-sm text-secondary">Aumento de Alcance Orgânico</span>
</div>
</div>
{/*  List Tags  */}
<ul className="space-y-space-xs font-body-sm text-body-sm text-secondary">
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Estratégia de Marketing &amp; Crescimento</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Posicionamento &amp; Território de Marca</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Sistemas de Redes Sociais &amp; Influência</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Publicidade Paga &amp; Performance</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Consultoria Executiva de Marketing</li>
</ul>
</div>
<div className="pt-space-xl mt-space-lg flex items-center justify-between">
<span className="font-label-technical text-label-technical uppercase text-outline">ESTRATÉGIA PRIMEIRO</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 group-hover:text-primary-container transition-all">arrow_forward</span>
</div>
</div>
{/*  Pillar 02: PUBLICIDADE  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md hover:bg-surface-container transition-colors duration-300 group">
<div>
<div className="flex items-center justify-between pb-space-md mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase">PILAR // 02</span>
<span className="font-headline-sm text-headline-sm text-surface-bright group-hover:text-primary transition-colors">02</span>
</div>
<h3 className="font-headline-md text-headline-md uppercase text-primary mb-space-sm">PUBLICIDADE</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg leading-relaxed">
              Direção de arte radical, campanhas transmidiáticas e narrativa cinematográfica que desafiam a mesmice visual e dominam a atenção cultural.
            </p>
{/*  Visual Asset Mockup Preview  */}
<div className="w-full h-32 bg-surface-container-lowest mb-space-lg overflow-hidden relative group-hover:brightness-110 transition-all">
<img className="w-full h-full object-cover" data-alt="Design visual publicitário de vanguarda com tipografia africana ousada e grafismos neon experimentais" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN6yhjN3AWU49MlvhtXGpmEOOoq9bLtft_XfG2WYFrjIO0J9WDD2xQHJ6mO09MpuwLVKz4fJVF-YAedoeTRl9f1MJGR94xiaR9XBOVz-X07q9HGDnRBxdQxiRhFiwIMbaIlmlyDs1EUBdYUkxpDm1-69za5kvxGy2_bRtIVpa5SDmNc9DOeVuLVy8Mjm6I8lIOgJYRIP8peFEHpimQf51nwVjWiACZA061Q1cNE48U" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
<span className="absolute bottom-2 left-2 font-label-technical text-label-technical text-primary uppercase">CRAFT &amp; DIRECÇÃO</span>
</div>
{/*  List Tags  */}
<ul className="space-y-space-xs font-body-sm text-body-sm text-secondary">
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Identidade Visual &amp; Rebranding Sistémico</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Direcção de Arte &amp; Editorial Global</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Cinema &amp; Produção de Vídeo High-End</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Motion Graphics &amp; 3D Hiper-surrealismo</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Dominação OOH &amp; Impressão Espacial</li>
</ul>
</div>
<div className="pt-space-xl mt-space-lg flex items-center justify-between">
<span className="font-label-technical text-label-technical uppercase text-outline">EMOÇÃO &amp; IMPACTO</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 group-hover:text-primary-container transition-all">arrow_forward</span>
</div>
</div>
{/*  Pillar 03: PROGRAMAÇÃO  */}
<div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-xl hover:bg-surface-container-high transition-colors duration-300 group">
<div>
<div className="flex items-center justify-between pb-space-md mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container tracking-widest uppercase">PILAR // 03</span>
<span className="font-headline-sm text-headline-sm text-surface-bright group-hover:text-primary transition-colors">03</span>
</div>
<h3 className="font-headline-md text-headline-md uppercase text-primary mb-space-sm">PROGRAMAÇÃO</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg leading-relaxed">
              Engenharia digital de vanguarda: plataformas web resilientes, aplicações móveis nativas e sistemas de infraestrutura de carga crítica.
            </p>
{/*  Technical Terminal Window Preview  */}
<div className="p-space-md bg-surface-container-lowest mb-space-lg font-mono text-xs text-on-surface-variant flex flex-col gap-1">
<div className="flex items-center gap-1.5 pb-1 text-[9px] text-outline">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="w-2 h-2 rounded-full bg-surface-bright"></span>
<span className="ml-2 uppercase">SISTEMA.STACK</span>
</div>
<p className="text-primary-container">&gt; deploy: micro-frontend.core</p>
<p className="text-secondary">&gt; latência: 14ms (CDN África Subsaariana)</p>
</div>
{/*  List Tags  */}
<ul className="space-y-space-xs font-body-sm text-body-sm text-secondary">
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Plataformas Web Personalizadas &amp; Portais</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Aplicações Web &amp; Mobile Escaláveis</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Integrações de API &amp; Microsserviços</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Sistemas de Design UI/UX Empresariais</li>
<li className="flex items-center gap-space-xs"><span className="w-1 h-1 bg-primary-container"></span>Infraestrutura Cloud Resiliente</li>
</ul>
</div>
<div className="pt-space-xl mt-space-lg flex items-center justify-between">
<span className="font-label-technical text-label-technical uppercase text-primary-container">ZERO LATÊNCIA</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 group-hover:text-primary-container transition-all">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/*  =========================================================================
       SECTION 04 — SELECTED WORK. REAL IDEAS. REAL IMPACT.
       =========================================================================  */}
<section className="w-full bg-surface-container-lowest py-space-2xl" id="work">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
{/*  Section Title & Meta  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
<div>
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-xs">// 03 — PORTFÓLIO SELECIONADO</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight">
            PROJECTOS SELECIONADOS.<br /><span className="text-secondary">IMPACTO REAL.</span>
</h2>
</div>
<div className="flex items-center gap-space-md">
<p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Uma selecção de projectos que reflecte a nossa criatividade, capacidade estratégica e versatilidade em múltiplos mercados.
          </p>
</div>
</div>
{/*  Asymmetrical Portfolio Bento Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md mb-space-xl">
{/*  Project 01: Hero Massive Card (12 Columns)  */}
<div className="lg:col-span-12 group bg-surface-container-low overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500">
<div className="grid grid-cols-1 lg:grid-cols-12">
<div className="lg:col-span-7 h-[380px] lg:h-[520px] overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Visual editorial da interface da plataforma Kuvula FinTech em tablet, dashboard analítico e financeiro moderno em Maputo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ylttlFRVxemPGEj7bPY5tGpdzj6awNc3sMYpOUiwOHT-WkebiRTrL2iKvy_bbza5MQR6n8AzP_VtEi-WLp3yCa7Jdb0qxhgXa_F4FyQZThc0j0odRZWYoeN7IioaTXXSjgSNCjtI4JygGdaOKKi-vda-aVqbDK-nf5nDL-T2iOJCLlu6UizkDe8t5GXRndmgAFiCuDQyljeYrWNd7NbV1opgJhLYU7ltkqOeijzL" />
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container-low hidden lg:block"></div>
</div>
<div className="lg:col-span-5 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-low">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">ESTUDO DE CASO // 01</span>
<span className="font-label-technical text-label-technical text-outline uppercase">FINTECH • 2024</span>
</div>
<h3 className="font-headline-lg text-headline-md lg:text-headline-lg uppercase text-primary mb-space-sm group-hover:text-primary-container transition-colors">
                  PLATAFORMA DIGITAL KUVULA
                </h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">
                  Arquitectura integral de ecossistema financeiro para inclusão de micro-empresas na África Austral. Desenvolvimento de front-end reativo, autenticação biométrica e sistema visual completo.
                </p>
<div className="flex flex-wrap gap-space-xs mb-space-lg">
<span className="px-space-xs py-1 bg-surface-container text-on-surface-variant font-label-technical text-label-technical uppercase">FINTECH UI/UX</span>
<span className="px-space-xs py-1 bg-surface-container text-on-surface-variant font-label-technical text-label-technical uppercase">REACT NATIVE</span>
<span className="px-space-xs py-1 bg-surface-container text-on-surface-variant font-label-technical text-label-technical uppercase">BRANDING</span>
</div>
</div>
<div className="flex items-center gap-space-sm text-primary font-label-lg text-label-lg uppercase tracking-wider group-hover:text-primary-container transition-colors">
<span className="">VER ESTUDO DE CASO</span>
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
</div>
{/*  Project 02: Side by Side Left (6 Columns)  */}
<div className="lg:col-span-6 group bg-surface-container-low overflow-hidden flex flex-col justify-between shadow-md">
<div className="h-72 w-full overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Design de embalagens e campanha da Lumen Beverages, marca de bebidas com rótulos minimalistas em preto fosco e detalhes em lima" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6PNxKzYu_Tyg0zrGDpgeKtFkNcw1U_GnrT26qlZCrghVGH9e950LQaKG8LsxRIVFIt8HZ4Q02lCX5rZIlJZwMnJWY7-m6fovomxPB9Zvy6HOW-YPiEK7NMj2sOmmreoW1zEKXxvOL4wxrW6MB4ymknSkAs0YBzwvYCcNiBMIEI0geJeGgHaoWwiyf8QgQ2sX0hVwrnywk0fr3XLecblY_dNg09FEzCflwZAWJysQ_" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-space-xs py-1 text-primary-container font-label-technical text-label-technical uppercase">
              // 02 BRANDING
            </div>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-technical text-label-technical text-outline uppercase">BEBIDAS • DIRECÇÃO DE ARTE</span>
<span className="font-label-technical text-label-technical text-on-surface-variant">2024</span>
</div>
<h3 className="font-headline-md text-headline-sm lg:text-headline-md uppercase text-primary mb-space-xs group-hover:text-primary-container transition-colors">
                REBRAND LUMEN BEVERAGES
              </h3>
<p className="font-body-sm text-body-sm text-secondary mb-space-md">
                Redesign de marca premium e campanha de posicionamento nacional com foco em embalagens sustentáveis e apelo editorial contemporâneo.
              </p>
</div>
<div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg uppercase tracking-wider group-hover:text-primary-container transition-colors pt-space-md">
<span className="">EXPLORAR SISTEMA DE MARCA</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</div>
</div>
{/*  Project 03: Side by Side Right (6 Columns)  */}
<div className="lg:col-span-6 group bg-surface-container-low overflow-hidden flex flex-col justify-between shadow-md">
<div className="h-72 w-full overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Mockup em smartphone de aplicativo de e-commerce moderno com checkout rápido e estética escura" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvjGHGMc3kn6Qjh7k9WTuOMUBes-yGXJeCpr1Qd6gzFiPnHKSu6Ek3hES597OojmAIJX4G50IiL4Iw2RqYSknUeaq30xFZGKzdco6cZiRQC-m0PBYhbwG1XbnNixSoiwFqJEpJywkUnzcGL8hVJiHrTFL-dEDm3fcfsMTVDPfMks5mgLQrwhW5vMRuxxcqPMda5LAYGRk7-jJH5Gl2O-yJ4Zep9Fi58A135_uW3KxI" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-space-xs py-1 text-primary-container font-label-technical text-label-technical uppercase">
              // 03 APLICAÇÃO MOBILE
            </div>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-technical text-label-technical text-outline uppercase">E-COMMERCE • MOBILE</span>
<span className="font-label-technical text-label-technical text-on-surface-variant">2023</span>
</div>
<h3 className="font-headline-md text-headline-sm lg:text-headline-md uppercase text-primary mb-space-xs group-hover:text-primary-container transition-colors">
                EXPERIÊNCIA VODA COMMERCE
              </h3>
<p className="font-body-sm text-body-sm text-secondary mb-space-md">
                Solução omnicanal de comércio eletrónico com suporte a pagamentos móveis locais M-Pesa e experiência fluida de compra com checkout em 2 etapas.
              </p>
</div>
<div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg uppercase tracking-wider group-hover:text-primary-container transition-colors pt-space-md">
<span className="">VER APLICAÇÃO</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</div>
</div>
{/*  Project 04: Panoramic Campaign Card (12 Columns)  */}
<div className="lg:col-span-12 group bg-surface-container p-space-lg lg:p-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg shadow-md hover:bg-surface-container-high transition-colors">
<div className="max-w-xl">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-xs">// 04 — FESTIVAL &amp; MOTION</span>
<h3 className="font-headline-md text-headline-md uppercase text-primary mb-space-sm group-hover:text-primary-container transition-colors">
              FESTIVAL DE ARTES AFROPOLITAN
            </h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              Direção de campanha para o maior festival de artes multidisciplinares da capital. Vídeos em motion design, totens dinâmicos OOH e aplicativo para programação em tempo real.
            </p>
</div>
<div className="flex items-center gap-space-md">
<span className="px-space-md py-space-sm bg-surface-container-lowest text-primary font-label-technical text-label-technical uppercase">140K+ PARTICIPANTES</span>
<a className="px-6 py-3 bg-primary-container text-on-primary-fixed font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary transition-all flex items-center gap-space-xs" href="#">
<span className="">ESTUDO DE CASO</span>
<span className="material-symbols-outlined text-sm">north_east</span>
</a>
</div>
</div>
</div>
{/*  Action Row  */}
<div className="flex justify-center pt-space-md">
<a className="px-10 py-5 bg-surface-container text-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-fixed transition-all shadow-md flex items-center gap-space-sm" href="#work">
<span className="">EXPLORAR TODOS OS PROJECTOS</span>
<span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>
</section>
{/*  =========================================================================
       SECTION 05 — OUR CAPABILITIES (WHAT WE BRING TO THE TABLE)
       =========================================================================  */}
<section className="w-full bg-surface py-space-2xl" id="services">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col lg:flex-row justify-between items-start gap-space-lg mb-space-xl">
<div>
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-xs">// 04 — MATRIZ DE CAPACIDADES</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight">
            O QUE TRAZEMOS<br />PARA A MESA.
          </h2>
</div>
<p className="font-body-md text-body-md text-secondary max-w-md">
          Não acreditamos em silos de comunicação. Do diagnóstico inicial à linha final de código de produção, operamos como um departamento de crescimento unificado.
        </p>
</div>
{/*  Interactive Accordion / Capability Rows  */}
<div className="flex flex-col gap-space-sm">
{/*  Capability Row 01  */}
<div className="bg-surface-container-low p-space-lg hover:bg-surface-container transition-all group">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase">CAPACIDADE 01</span>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary group-hover:text-primary-container transition-colors">MARKETING &amp; ESTRATÉGIA</h3>
</div>
<div className="flex flex-wrap gap-space-xs max-w-xl">
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Pesquisa de Mercado</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Estratégia de Marca</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Canais Sociais</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Anúncios Pagos &amp; Performance</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Consultoria de Analytics</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors self-end lg:self-center">add</span>
</div>
</div>
{/*  Capability Row 02  */}
<div className="bg-surface-container-low p-space-lg hover:bg-surface-container transition-all group">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase">CAPACIDADE 02</span>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary group-hover:text-primary-container transition-colors">PUBLICIDADE &amp; DIRECÇÃO DE ARTE</h3>
</div>
<div className="flex flex-wrap gap-space-xs max-w-xl">
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Identidade de Marca</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Sistemas Gráficos</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Filmes Comerciais</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Motion Graphics 3D</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Dominação Exterior</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors self-end lg:self-center">add</span>
</div>
</div>
{/*  Capability Row 03  */}
<div className="bg-surface-container-low p-space-lg hover:bg-surface-container transition-all group">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase">CAPACIDADE 03</span>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary group-hover:text-primary-container transition-colors">PROGRAMAÇÃO &amp; ENGENHARIA</h3>
</div>
<div className="flex flex-wrap gap-space-xs max-w-xl">
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Plataformas Dedicadas</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">React / Next.js / Vue</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Aplicações iOS &amp; Android</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Infraestrutura de APIs</span>
<span className="px-space-xs py-1 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase">Design Systems em Figma</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors self-end lg:self-center">add</span>
</div>
</div>
</div>
</div>
</section>
{/*  =========================================================================
       SECTION 07 — OUR APPROACH (GOOD WORK STARTS WITH GOOD THINKING)
       =========================================================================  */}
<section className="w-full bg-surface py-space-2xl" id="approach">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
<div>
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-xs">// 06 — ARQUITETURA DE PROCESSO</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight">
            BOM TRABALHO COMEÇA COM<br />BOM PENSAMENTO.
          </h2>
</div>
<p className="font-body-md text-body-md text-secondary max-w-sm">
          Um método rigoroso e repetível concebido para eliminar incertezas e maximizar o retorno criativo e comercial.
        </p>
</div>
{/*  4 Numbered Horizontal Stages  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  Stage 01  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">ETAPA 01</span>
<span className="font-headline-sm text-headline-sm text-secondary">01</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-xs">DESCOBERTA</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Compreensão profunda da marca, do mercado, concorrência, dores do utilizador e objectivos comerciais críticos.
            </p>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-label-technical text-label-technical text-outline uppercase">PESQUISA &amp; AUDITORIA</span>
</div>
</div>
{/*  Stage 02  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">ETAPA 02</span>
<span className="font-headline-sm text-headline-sm text-secondary">02</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-xs">ESTRATÉGIA</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Definição clara do rumo estratégico, arquitectura de marca, posicionamento e roadmaps de engenharia.
            </p>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-label-technical text-label-technical text-outline uppercase">FUNDAÇÃO &amp; PLANO</span>
</div>
</div>
{/*  Stage 03  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">ETAPA 03</span>
<span className="font-headline-sm text-headline-sm text-secondary">03</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-xs">CRIAÇÃO</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Materialização da estratégia em direcção de arte singular, protótipos de alta precisão e código robusto.
            </p>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-label-technical text-label-technical text-outline uppercase">DESIGN &amp; DESENVOLVIMENTO</span>
</div>
</div>
{/*  Stage 04  */}
<div className="bg-surface-container-low p-space-lg flex flex-col justify-between hover:bg-surface-container transition-colors shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">ETAPA 04</span>
<span className="font-headline-sm text-headline-sm text-primary-container">04</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-xs">ENTREGA</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Implementação, lançamento no mercado, monitorização com métricas em tempo real e optimização contínua.
            </p>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-label-technical text-label-technical text-primary-container uppercase">LANÇAMENTO &amp; ITERAÇÃO</span>
</div>
</div>
</div>
</div>
</section>
{/*  =========================================================================
       SECTION 08 — OUR CLIENTS (BRANDS THAT TRUST OUR WORK)
       =========================================================================  */}
<section className="w-full bg-surface-container-lowest py-space-xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-lg gap-space-sm">
<div>
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-1">// 07 — ECOSSISTEMA DE CLIENTES</span>
<h2 className="font-headline-sm text-headline-sm uppercase text-primary">MARCAS QUE CONFIAM NO NOSSO TRABALHO</h2>
</div>
<p className="font-body-sm text-body-sm text-secondary max-w-sm">
          Construímos relações profissionais sólidas através da criatividade, colaboração constante e compromisso absoluto.
        </p>
</div>
{/*  Monochromatic Client Grid  */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm pt-space-md">
<div className="p-space-lg bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-all">
<span className="font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors tracking-tighter">VODACOM</span>
</div>
<div className="p-space-lg bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-all">
<span className="font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors tracking-tighter">STANDARD BANK</span>
</div>
<div className="p-space-lg bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-all">
<span className="font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors tracking-tighter">BTM CORRIDOR</span>
</div>
<div className="p-space-lg bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-all">
<span className="font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors tracking-tighter">MOZA BANCO</span>
</div>
<div className="p-space-lg bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-all">
<span className="font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors tracking-tighter">TDM TELECOM</span>
</div>
<div className="p-space-lg bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-all">
<span className="font-headline-sm text-headline-sm text-secondary hover:text-primary transition-colors tracking-tighter">HEINEKEN MZ</span>
</div>
</div>
</div>
</section>
{/*  =========================================================================
       SECTION 09 & 10 — NUMBERS & TRUST (METRICS & TESTIMONIALS)
       =========================================================================  */}
<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
{/*  Metrics Strip  */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-2xl">
<div className="bg-surface-container-low p-space-lg">
<span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary font-bold block mb-1">85+</span>
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-wider block">PROJECTOS ENTREGUES</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Em fintech, retalho, hospitalidade e telecomunicações.</p>
</div>
<div className="bg-surface-container-low p-space-lg">
<span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary font-bold block mb-1">12+</span>
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-wider block">MERCADOS IMPACTADOS</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">África Austral, África Ocidental e Europa Lusófona.</p>
</div>
<div className="bg-surface-container-low p-space-lg">
<span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary-container font-bold block mb-1">100%</span>
<span className="font-label-technical text-label-technical text-outline uppercase tracking-wider block">EQUIPA INTERNA DE ELITE</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Equipa interna de criativos, engenheiros e estrategas.</p>
</div>
<div className="bg-surface-container-low p-space-lg">
<span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary font-bold block mb-1">03</span>
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-wider block">PILARES INTEGRADOS</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Marketing, Publicidade e Programação em total simbiose.</p>
</div>
</div>
{/*  Testimonials / Voices of Trust  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
<div className="bg-surface-container p-space-xl flex flex-col justify-between shadow-md">
<div className="mb-space-lg">
<span className="material-symbols-outlined text-primary-container text-3xl mb-space-sm">format_quote</span>
<p className="font-body-lg text-body-lg text-primary italic leading-relaxed">
              "A DigitAfrika redefiniu completamente a nossa presença no ecossistema digital. A união entre a visão estética contemporânea e a arquitetura técnica impecável colocou a nossa plataforma num patamar de liderança regional incontestado."
            </p>
</div>
<div className="flex items-center gap-space-md pt-space-md bg-surface-container-high/40 p-space-sm">
<div className="w-10 h-10 bg-surface-bright flex items-center justify-center text-primary font-headline-sm text-headline-sm">AM</div>
<div>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary">Anísio Machava</h4>
<span className="font-label-technical text-label-technical text-on-surface-variant uppercase">Director de Inovação Digital, Kuvula Capital</span>
</div>
</div>
</div>
<div className="bg-surface-container p-space-xl flex flex-col justify-between shadow-md">
<div className="mb-space-lg">
<span className="material-symbols-outlined text-primary-container text-3xl mb-space-sm">format_quote</span>
<p className="font-body-lg text-body-lg text-primary italic leading-relaxed">
              "Trabalhar com a equipa da DigitAfrika é ter a certeza de que não teremos mais uma campanha genérica. A profundidade cultural que eles trazem para a direção de arte e branding é inigualável no mercado africano."
            </p>
</div>
<div className="flex items-center gap-space-md pt-space-md bg-surface-container-high/40 p-space-sm">
<div className="w-10 h-10 bg-surface-bright flex items-center justify-center text-primary font-headline-sm text-headline-sm">ST</div>
<div>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary">Samira Tavares</h4>
<span className="font-label-technical text-label-technical text-on-surface-variant uppercase">Directora de Marca, Lumen Group</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  =========================================================================
       SECTION 11 — CONTACT CTA: "LET'S CREATE WHAT'S NEXT."
       =========================================================================  */}
<section className="w-full bg-surface-container-lowest py-space-2xl" id="contact">
<div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
{/*  Left Editorial Column (5 Cols)  */}
<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-sm">// 08 — ENTRE EM CONTACTO</span>
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase text-primary tracking-tight leading-[0.92] mb-space-md">
              VAMOS CRIAR <br />
<span className="text-primary-container">O QUE VEM A SEGUIR.</span>
</h2>
<p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-space-xl">
              Tem uma ideia, um desafio complexo ou um projecto ambicioso em mente? Vamos conversar e traçar os novos caminhos do seu crescimento.
            </p>
<div className="space-y-space-md text-on-surface-variant font-body-md text-body-md">
<div>
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">Sede Principal</span>
<p className="text-primary">Av. Julius Nyerere, Polana Cimento, Maputo [CAT]</p>
</div>
<div>
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">Endereço de E-mail</span>
<p className="text-primary hover:text-primary-container transition-colors">hello@digitafrika.com</p>
</div>
<div>
<span className="font-label-technical text-label-technical text-outline uppercase block mb-1">WhatsApp Prioritário</span>
<p className="text-primary">+258 84 000 0000</p>
</div>
</div>
</div>
<div className="pt-space-xl">
<div className="flex items-center gap-space-xs text-primary-container font-label-technical text-label-technical uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="">DISPONIBILIDADE ATUAL: PROJECTOS ABERTOS PARA 2026</span>
</div>
</div>
</div>
{/*  Right Interactive Form Column (7 Cols)  */}
<div className="lg:col-span-7 bg-surface-container-low p-space-lg lg:p-space-xl shadow-2xl">
<form className="space-y-space-lg" >
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-technical text-label-technical text-secondary uppercase tracking-wider mb-2">Nome Completo *</label>
<input className="w-full bg-surface-container-highest px-4 py-3.5 text-primary placeholder-on-surface-variant font-body-md text-body-md focus:bg-surface-bright focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" placeholder="ex. Aníbal Sitoe" required type="text" />
</div>
<div>
<label className="block font-label-technical text-label-technical text-secondary uppercase tracking-wider mb-2">Empresa / Organização</label>
<input className="w-full bg-surface-container-highest px-4 py-3.5 text-primary placeholder-on-surface-variant font-body-md text-body-md focus:bg-surface-bright focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" placeholder="ex. Standard Bank MZ" type="text" />
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-technical text-label-technical text-secondary uppercase tracking-wider mb-2">Endereço de E-mail *</label>
<input className="w-full bg-surface-container-highest px-4 py-3.5 text-primary placeholder-on-surface-variant font-body-md text-body-md focus:bg-surface-bright focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" placeholder="seu@email.com" required type="email" />
</div>
<div>
<label className="block font-label-technical text-label-technical text-secondary uppercase tracking-wider mb-2">Telefone / WhatsApp *</label>
<input className="w-full bg-surface-container-highest px-4 py-3.5 text-primary placeholder-on-surface-variant font-body-md text-body-md focus:bg-surface-bright focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" placeholder="+258 84 000 0000" required type="tel" />
</div>
</div>
{/*  Service Interest Selector  */}
<div>
<label className="block font-label-technical text-label-technical text-secondary uppercase tracking-wider mb-3">Áreas de Interesse *</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs" id="service-pills">
<button className="py-2.5 px-3 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase text-center hover:bg-surface-bright transition-colors focus:bg-primary-container focus:text-on-primary-fixed" type="button">MARKETING</button>
<button className="py-2.5 px-3 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase text-center hover:bg-surface-bright transition-colors focus:bg-primary-container focus:text-on-primary-fixed" type="button">PUBLICIDADE</button>
<button className="py-2.5 px-3 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase text-center hover:bg-surface-bright transition-colors focus:bg-primary-container focus:text-on-primary-fixed" type="button">PROGRAMAÇÃO</button>
<button className="py-2.5 px-3 bg-surface-container-high text-on-surface-variant font-label-technical text-label-technical uppercase text-center hover:bg-surface-bright transition-colors focus:bg-primary-container focus:text-on-primary-fixed" type="button">INTEGRADO 360°</button>
</div>
</div>
{/*  Project Vision / Details  */}
<div>
<label className="block font-label-technical text-label-technical text-secondary uppercase tracking-wider mb-2">Visão do Projecto / Desafio</label>
<textarea className="w-full bg-surface-container-highest px-4 py-3.5 text-primary placeholder-on-surface-variant font-body-md text-body-md focus:bg-surface-bright focus:outline-none focus:ring-1 focus:ring-primary-container transition-all resize-none" placeholder="Descreva brevemente a sua ideia, metas pretendidas e prazos estimados..." rows={4}></textarea>
</div>
{/*  Submit Button  */}
<button className="w-full py-5 bg-primary-container text-on-primary-fixed font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary hover:text-surface-container-lowest transition-all duration-200 flex items-center justify-center gap-space-xs shadow-md" type="submit">
<span className="">INICIAR UM PROJECTO</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</form>
</div>
</div>
</div>
</section>
    </div>
  );
}
