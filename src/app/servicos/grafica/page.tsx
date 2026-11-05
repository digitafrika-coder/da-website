"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ProductItem {
  id: string;
  category: string;
  badge: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  specs: { label: string; value: string; isPrimary?: boolean }[];
}

export default function GraficaPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [previewConfig, setPreviewConfig] = useState("Algodão 450g + Foil Ouro");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalTitle(null);
      }
    };
    if (modalTitle) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalTitle]);

  const categories = [
    { id: "all", label: "Todos" },
    { id: "papelaria", label: "Cartões & Papelaria" },
    { id: "editorial", label: "Flyers & Catálogos" },
    { id: "promocional", label: "Cartazes & Promo" },
    { id: "grande-formato", label: "Banners & Roll-ups" },
    { id: "etiquetas", label: "Autocolantes & Rótulos" },
    { id: "textil", label: "Camisetas & Uniformes" },
    { id: "brindes", label: "Brindes Corporativos" },
    { id: "embalagens", label: "Embalagens & Caixas Rígidas" },
  ];

  const products: ProductItem[] = [
    {
      id: "cartoes",
      category: "papelaria",
      badge: "// Papelaria Prestige",
      tag: "HOT STAMPING FOIL",
      title: "Cartões de Visita Prestige",
      description:
        "Papel puro algodão com acabamento texturado artesanal, verniz localizado dimensional e folheamento a ouro/prata.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCIFjveuCphgli-iYOB2LwzusSjnbypMr292epqK4NYBqi1AWGaAhei52A2txggP2xNwWzp_vRl_6q_G8L4QYORMw30S_BBMeJmVySa95iuRmOVK-ssziGCk3Im2s2tYmQMZGt750iaBhGdE5gwQKnTUc4Je8UqYT4G-z06I2fss_24qw1IFw4Cl0tTsw5ZwQIsBZHTGQk8Qt39uPAPVlPFZ-tZqvtPbbGoGu3j9hTw",
      alt: "Close up photograph of luxury black cotton business cards",
      specs: [
        { label: "Gramagem Padrão:", value: "450g / 600g Duplex" },
        { label: "Técnica:", value: "Offset + Hot Foil Stamping" },
        { label: "Tiragem Mínima:", value: "100 Unidades", isPrimary: true },
      ],
    },
    {
      id: "brochuras",
      category: "editorial",
      badge: "// Editorial Corporativo",
      tag: "CAPA DURA LUXO",
      title: "Brochuras & Relatórios",
      description:
        "Encadernação artesanal cosida com lombada aberta ou PUR, laminação aveludada soft-touch e cadernos interiores de alta opacidade.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBaljq3bI-8Lq-cVxr1--vfd779v2YDFj47Np2VuORl3dscc_b9VvmDn2jcJHT22ebuBL_C9S_cVyLYIx4SrN7aibwVmqRejrj8QegEgKU0He-IYEq06qZqvgXoC5348P6SZ1Xn3NsaepGjNJub_OTKq8oxQXY0y695Xaruku1mIbTB4wwT-O4OXRAqpE-ldh_gPOIo6SLP7nMIcg_-C9BblzeVHltsBxPNB1EirQCO",
      alt: "High-end editorial corporate brochure and annual report",
      specs: [
        { label: "Interior / Capa:", value: "150g Couché / 350g + Hardcover" },
        { label: "Encadernação:", value: "Cosida Singer / PUR Wire-O" },
        { label: "Tiragem Mínima:", value: "25 Unidades", isPrimary: true },
      ],
    },
    {
      id: "camisetas",
      category: "textil",
      badge: "// Serigrafia Industrial",
      tag: "100% ALGODÃO NACIONAL",
      title: "Camisetas Têxteis Premium",
      description:
        "Algodão penteado 200g-240g, tingimento reactivo sem desbotamento e estampagem plastisol HD ou discharge de toque zero.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBZGFICWJsIWrZzZZYazAunWgA_CGouSKYfSby6gus18tYnAKQ99vmaP1K7NXXCEaA_-BUAsiN84is8Jolq-u7LbFdEUIbYtspphHrKKcBIT8MTsgbLjwjB0_iQL-Mgb2zNdzfRqtvLZM3ZYnro7HHj10GlVmE1W3AHKkA2gL-XS5jB8jm7RTWEcfV4vo8bS4eR0AB71FWIAcb-FiV_CbqHqWFDEV-REMkiWPWEt3Qr",
      alt: "Heavyweight black streetwear t-shirt",
      specs: [
        { label: "Gramagem Têxtil:", value: "180g / 220g / 240g Heavyweight" },
        { label: "Técnica:", value: "Plastisol HD / Discharge Eco" },
        { label: "Tiragem Mínima:", value: "30 Peças", isPrimary: true },
      ],
    },
    {
      id: "polos",
      category: "textil",
      badge: "// Fardamento & EPIs",
      tag: "BORDADO COMPUTADORIZADO",
      title: "Polos & Uniformes de Trabalho",
      description:
        "Tecidos piquet de resistência ultra e ripstop industrial. Bordados em máquinas Tajima de 12 cabeças com fios resistentes a cloro.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPO7KdQ3cpptQnb-Ct8zdqarcVVTpTKKctLIcU7BuCEsgDxOS5mH8bz_BnxQQ9odFok2dahv52RE7B4mnF77gN7lMfr4VmSgRDoGO1Q-7Go2jxLiVu7NUOE7AOEc6Y2fPJ4sovdarOTx8K0KkhYLzSgj0zXrhbO_iqII2WKws2feWWvQi69SMwJ4onMtKCz2VPjSiakbvBDFH6NGxPXyBoOtSDsu-sfudw2MGnU2RT",
      alt: "Technical heavy duty industrial polo shirt in dark graphite",
      specs: [
        { label: "Composição:", value: "Piquet 65/35 Polialgodão 220g" },
        { label: "Marcação:", value: "Bordado Alta Densidade / Patch" },
        { label: "Tiragem Mínima:", value: "20 Unidades", isPrimary: true },
      ],
    },
    {
      id: "rollups",
      category: "grande-formato",
      badge: "// Grande Formato",
      tag: "ANTI-CURL UV",
      title: "Roll-ups & Lonas Estruturais",
      description:
        "Bases de alumínio de peso calibrado, lonas blackout que não curvam nas bordas e impressão UV LED com durabilidade de 3 anos no exterior.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAylkOAtIAQtRhA3-ntq9cIgdvrm5Sk-Jx4uhR3oBMpXqg5vUk28m9YFO23dkqq_s_JZoHwii-tUww14jo8zpqvDg5gzA3JxA7gwymKGr9FtilGsyXj0EHOAQnQftommkLBXHI0nMSiReCdFWfDAWR72kVyiBr7xD0GKihqx0jm_fvRG9BFwb6M6G_83qwLcU95_MjJWDTdHwHZX40ZYjFAs5K4huI1PvQ50Z-SmdnO",
      alt: "Modern high precision aluminum roll-up banner",
      specs: [
        { label: "Dimensões:", value: "85x200cm / 120x200cm / 2x3m" },
        { label: "Material:", value: "Lona Frontlit 510g / Microperfurada" },
        { label: "Tiragem Mínima:", value: "1 Unidade", isPrimary: true },
      ],
    },
    {
      id: "autocolantes",
      category: "etiquetas",
      badge: "// Sinalética & Rótulos",
      tag: "VINIL RESISTENTE",
      title: "Autocolantes & Rótulos Die-Cut",
      description:
        "Corte digital em contorno livre, vinil polimérico com laminação anti-UV e adesivo acrílico solvente resistente à água e congelamento.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEGlQ-_bPXZnrZ9Ul1Zu2UjVdS3rfMy9BGow_6D7XmkmrTzee6eh7F_Bfkka2QPFzZmQ0zIsm0hbYKJD7MdZVbKZsVRgeJa7jOw-yIQ8EcgrHv1XZmcCdtCUL6yob_8yfmi0Rd_iF4Vb8AQqIhC3FKY2Jd5Vh_2OQVK970bmvXBn5E5WES8bF7Dc-gsr-vmaRjLY5aouXFl9N5IhO3YKIOyrmYvKrEcdQQI6LDF51m",
      alt: "Collection of custom die-cut vinyl stickers",
      specs: [
        { label: "Substrato:", value: "Vinil Polimérico / Holográfico" },
        { label: "Corte:", value: "Die-Cut / Kiss-Cut em Folha" },
        { label: "Tiragem Mínima:", value: "100 Unidades", isPrimary: true },
      ],
    },
    {
      id: "brindes",
      category: "brindes",
      badge: "// Merchandising Corporativo",
      tag: "GRAVAÇÃO LASER FIBRA",
      title: "Brindes Corporativos VIP",
      description:
        "Termos em aço cirúrgico gravados a laser, tote bags de lona crua 380g e blocos Moleskine com deboss profundo.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtFmoWlSyAVNRrOtBJPsHT4ch1bWrUa4m4Tu8OFvKpr53tjoNVRxuRin40knSv81wyH4nRqXXV4y9_oBHHv-yPZjDvgS724L1JbSuSYqg4rqiCbdIYEP_zesXy2UnbEA14XIZJ0AIZgc9bK_i01cOwt9VGyJBg31O1lDs18MPbmVou5vXXXoy22l7pNd75qNSBjK9P99BcYvy7dVTEhDFB_4kGyZTwQDma04U5Vu40",
      alt: "Executive corporate gift kit featuring matte black tumbler and bag",
      specs: [
        { label: "Personalização:", value: "Gravação Laser Fibra / Serigrafia" },
        { label: "Kit Padrão:", value: "Termo 500ml + Bloco + Caneta" },
        { label: "Tiragem Mínima:", value: "25 Kits", isPrimary: true },
      ],
    },
    {
      id: "packaging",
      category: "embalagens",
      badge: "// Packaging Estrutural",
      tag: "FECHO MAGNÉTICO",
      title: "Packaging & Caixas Rígidas",
      description:
        "Papelão cinza prensado 2.5mm revestido a papéis especiais Fedrigoni, fecho com ímanes embutidos e berço de corte a laser em EVA aveludado.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmL4rXGUm8bEnH9O3gkG-RQAVjOALLMuIPtuxiZQHhOB-piYvWqmDIr7BDoHGvmW0hJABt48MRubdVbvQxLb6EHQlT3iOL9ILNIBlMu96_LD00fvc04yUy3TPGtoTLjcFcdxaAJVI57r0Y2JdbFUgyt5dKhOBEdZpYU2WPXJuff2TzYl-Qg5j5PfOweXMTazbKi-k5rRKdHyc72giz47NbDPpbZfvCG3RwD2KepKbv",
      alt: "Monolithic luxury rigid magnetic gift box",
      specs: [
        { label: "Estrutura:", value: "Papelão Paraná 1500g/m²" },
        { label: "Berço Interior:", value: "Espuma EVA Flocada em Veludo" },
        { label: "Tiragem Mínima:", value: "50 Unidades", isPrimary: true },
      ],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full text-on-surface">
      <div className="flex flex-col w-full">
        {/* SECTION 1: HERO & INDUSTRIAL WORKSHOP METRICS */}
        <section className="relative w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface overflow-hidden">
          <div className="absolute -right-32 -top-40 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/4 -bottom-32 w-80 h-80 bg-surface-variant/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-lg relative z-10">
            {/* Eyebrow Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-variant">
              <div className="flex items-center gap-space-xs font-label-technical text-label-technical uppercase tracking-widest text-primary-container">
                <span className="w-2 h-2 bg-primary-container rounded-none shadow-sm animate-pulse"></span>
                <span>// 10 // DIVISÃO DE PRODUÇÃO &amp; MANUFATURA TÁCTIL</span>
              </div>
              <div className="flex items-center gap-space-sm font-label-technical text-label-technical text-secondary uppercase">
                <span className="inline-block w-1.5 h-1.5 bg-outline rounded-full"></span>
                <span>OFICINA ACTIVA EM MAPUTO [CAT] // NÚCLEO INDUSTRIAL</span>
              </div>
            </div>

            {/* Main Asymmetric Grid Hero Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-end pt-space-sm">
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <h1 className="font-display-lg text-headline-lg lg:text-display-lg text-on-surface uppercase tracking-tighter leading-none">
                  Damos forma às suas ideias. Da impressão à personalização{" "}
                  <span className="text-primary-container">monumental.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
                  Da impressão à personalização, transformamos ideias em materiais que comunicam. Unimos tecnologia gráfica industrial, serigrafia manual de alta densidade e acabamentos nobres para marcas que exigem substância tangível.
                </p>

                {/* Actions & CTA Hub */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                  <Link
                    className="bg-primary-container text-on-primary-fixed font-label-lg text-label-lg uppercase tracking-wider px-8 py-4 font-bold shadow-md hover:bg-surface-bright hover:text-on-surface transition-all flex items-center gap-2"
                    href="/studio"
                  >
                    <span>Abrir Estúdio de Personalização</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </Link>
                  <a
                    className="bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase tracking-wider px-8 py-4 hover:bg-surface-variant transition-all flex items-center gap-2"
                    href="#catalogo-produtos"
                  >
                    <span>Explorar Catálogo de Produtos</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                  </a>
                </div>
              </div>

              {/* Technical Dispatch / Visual Stamp */}
              <div className="lg:col-span-4 flex flex-col justify-end">
                <div className="bg-surface-container-low p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between font-label-technical text-label-technical text-on-surface-variant uppercase">
                    <span>Padrão ISO 12647-2</span>
                    <span>Lote V-2026 // MPT</span>
                  </div>
                  <div className="flex items-center gap-space-md py-space-xs">
                    <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-[28px]">print</span>
                    </div>
                    <div>
                      <p className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Oficina Central</p>
                      <p className="font-body-sm text-body-sm text-secondary">Parque Gráfico &amp; Carrossel Têxtil Automatizado</p>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-surface-variant overflow-hidden">
                    <div className="h-full bg-primary-container w-3/4"></div>
                  </div>
                  <div className="flex justify-between items-center font-label-technical text-label-technical text-on-surface-variant">
                    <span>Capacidade Operacional</span>
                    <span className="text-primary-container font-bold">Consultar Disponibilidade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Capacity Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mt-space-md bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-1 p-space-sm">
                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// Volume Anual</span>
                <span className="font-headline-md text-headline-md text-primary-container font-bold">+200.000</span>
                <span className="font-body-sm text-body-sm text-secondary">Peças produzidas e inspecionadas</span>
              </div>
              <div className="flex flex-col gap-1 p-space-sm bg-surface-container/30">
                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// Turnaround Padrão</span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">48H — 72H</span>
                <span className="font-body-sm text-body-sm text-secondary">Linhas expresso disponíveis</span>
              </div>
              <div className="flex flex-col gap-1 p-space-sm">
                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// Fidelidade Cromática</span>
                <span className="font-headline-md text-headline-md text-primary-container font-bold">100%</span>
                <span className="font-body-sm text-body-sm text-secondary">Calibração PMS &amp; Espectrofotometria</span>
              </div>
              <div className="flex flex-col gap-1 p-space-sm bg-surface-container/30">
                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// Corte &amp; Registo</span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">&lt; 0.2 mm</span>
                <span className="font-body-sm text-body-sm text-secondary">Tolerância dimensional cirúrgica</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE PRODUCT & SERVICE CATALOG */}
        <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface-container-lowest" id="catalogo-produtos">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-lg">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">// MATRIZ DE PRODUTOS &amp; ESPECIFICAÇÕES</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">Catálogo Industrial &amp; Serigrafia Técnica</h2>
                <p className="font-body-md text-body-md text-secondary">Materiais de grau corporativo, papelaria de luxo, têxteis personalizados e peças de visibilidade de grande formato com controle de qualidade em Maputo.</p>
              </div>
              <div className="flex items-center gap-space-xs font-label-technical text-label-technical text-on-surface-variant uppercase bg-surface-container-high px-4 py-2">
                <span className="material-symbols-outlined text-[16px] text-primary-container">inventory_2</span>
                <span>8 Categorias Principais // 64 Formatos Activos</span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-space-xs scrollbar-none flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                  className={`px-4 py-2 font-label-md text-label-md uppercase tracking-wider transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary-container text-on-primary-fixed font-bold shadow-sm"
                      : "bg-surface-container-high text-secondary hover:text-on-surface hover:bg-surface-variant"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Rich Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="product-item group bg-surface-container-low flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="relative h-60 w-full overflow-hidden bg-surface-container">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={prod.alt}
                        src={prod.image}
                      />
                      <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-1 text-on-surface font-label-technical text-label-technical uppercase">
                        {prod.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-primary-container px-2 py-0.5 font-label-technical text-label-technical text-on-primary-fixed font-bold">
                        {prod.tag}
                      </div>
                    </div>
                    <div className="p-space-md flex flex-col gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase group-hover:text-primary-container transition-colors">
                        {prod.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-secondary">
                        {prod.description}
                      </p>
                      {/* Specs Table mini */}
                      <div className="mt-space-sm pt-space-xs flex flex-col gap-1.5 font-label-technical text-label-technical text-on-surface-variant">
                        {prod.specs.map((spec, i) => (
                          <div key={i} className="flex justify-between">
                            <span>{spec.label}</span>
                            <span className={spec.isPrimary ? "text-primary-container font-bold" : "text-on-surface"}>
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md pt-0 flex items-center gap-space-xs">
                    <button
                      className="flex-1 py-2.5 bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-md text-label-md uppercase tracking-wider text-center transition-colors"
                      onClick={() => setModalTitle(prod.title)}
                    >
                      Ficha Técnica
                    </button>
                    <Link
                      className="px-3 py-2.5 bg-primary-container text-on-primary-fixed hover:bg-primary transition-colors flex items-center justify-center gap-1.5"
                      href="/studio"
                      aria-label="Configurar no Estúdio de Personalização"
                      title="Configurar no Estúdio"
                    >
                      <span className="material-symbols-outlined text-[18px]">palette</span>
                      <span className="font-label-technical text-[10px] uppercase font-bold hidden lg:inline">Estúdio</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: GUIA DE ACABAMENTOS ESPECIAIS & TEXTURAS INDUSTRIAIS */}
        <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-surface-variant pb-space-md">
              <div>
                <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">// ARQUITETURA TÁCTIL</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">Guia de Acabamentos Especiais</h2>
              </div>
              <p className="font-body-md text-body-md text-secondary max-w-md">
                A diferença entre um mero impresso descartável e um artefacto de colecionador reside na alquimia dos acabamentos mecânicos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
              {/* Acabamento 1 */}
              <div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 bg-primary-container/10 text-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">flare</span>
                  </div>
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// 01 // TÉCNICA</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Hot Stamping Foil</h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Transferência térmica sob pressão de película metálica. Disponível em Ouro Rich, Prata Espelhada, Cobre e Holográfico de Segurança.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs font-label-technical text-label-technical text-primary-container">
                  ▲ Impacto Visual Ultra-Alto
                </div>
              </div>

              {/* Acabamento 2 */}
              <div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 bg-primary-container/10 text-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">layers</span>
                  </div>
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// 02 // TÉCNICA</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Verniz UV Localizado 3D</h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Polímero curado por ultravioleta aplicado com espessura dimensional (relevo sensível ao toque), criando contraste brilhante sobre papel mate.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs font-label-technical text-label-technical text-primary-container">
                  ▲ Sensação Táctil Dimensional
                </div>
              </div>

              {/* Acabamento 3 */}
              <div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 bg-primary-container/10 text-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">filter_center_focus</span>
                  </div>
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// 03 // TÉCNICA</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Golpe Seco &amp; Relevo</h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Deformação mecânica das fibras do papel através de clichê macho/fêmea de bronze, gerando relevos positivos (emboss) ou negativos (deboss).
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs font-label-technical text-label-technical text-primary-container">
                  ▲ Elegância Pura Sem Tinta
                </div>
              </div>

              {/* Acabamento 4 */}
              <div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 bg-primary-container/10 text-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">touch_app</span>
                  </div>
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// 04 // TÉCNICA</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Laminação Soft-Touch</h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Película de polipropileno com acabamento micro-aveludado mate. Elimina reflexos e proporciona textura sedosa idêntica à pele de pêssego.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs font-label-technical text-label-technical text-primary-container">
                  ▲ Toque Aveludado &amp; Proteção
                </div>
              </div>

              {/* Acabamento 5 */}
              <div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 bg-primary-container/10 text-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">border_color</span>
                  </div>
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">// 05 // TÉCNICA</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Bordas Pintadas (Edge Foil)</h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Pintura ou aplicação manual de folha metálica ou pigmento Pantone neon nas laterais de papéis espessos (a partir de 450g).
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs font-label-technical text-label-technical text-primary-container">
                  ▲ Distinção Arquitetural 360°
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: GALERIA EDITORIAL DE PRODUÇÃO REAL & PORTFÓLIO DE OFICINA */}
        <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface-container-lowest">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">// REGISTO FOTOGRÁFICO DE OFICINA</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">Exemplos de Produção Real // Portfólio Gráfico</h2>
                <p className="font-body-md text-body-md text-secondary">
                  Distinção clara entre o catálogo de serviços disponíveis e obras já executadas e entregues a marcas de referência em Moçambique e na região da SADC.
                </p>
              </div>
              <div className="font-label-technical text-label-technical text-on-surface-variant uppercase bg-surface-container-high px-4 py-2">
                <span>Arquivo de Entregas // 2025–2026</span>
              </div>
            </div>

            {/* Asymmetric Editorial Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
              {/* Showcase 1: Large Feature (7 Columns) */}
              <div className="md:col-span-7 bg-surface-container-low flex flex-col justify-between overflow-hidden shadow-sm group">
                <div className="relative h-96 md:h-[460px] w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    alt="Real production photo of complete VIP event identity collateral"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW2KR0Nu3bvleN9yYoyJ0sji5mBm1i_JSwFM4yUWqtiaXatRt9TLylleVtbu3FMS8LZV3DXsI5JJkzcjmRBt7kw5ErAUmxWmf9V3uzrc_mp8VnLnGTXP-xwTycL6TWdYp7mkdFiunY2apqXGfR2bQCLnUv9u4T3ip6Zsiw5YZq7mohfPl_NDzcjAQ16nq_EXSkDSwQ9UUBlUFuc-Hke9al2KhDTjsDZ8cMREu1bI2H"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary-container font-bold">
                    // CASE 01 // FORUM ENERGÉTICO MOÇAMBIQUE
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-space-sm -mt-8 relative z-10 bg-surface-container-low">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Kit Institucional &amp; Credenciamento Blindado</span>
                    <span className="bg-surface-variant px-2.5 py-1 text-on-surface font-label-technical text-label-technical">TIRAGEM: 1.500 KITS</span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary">
                    Produção integral de crachás rígidos em PVC 1mm com microchip RFID integrado, cordões de pescoço em jacquard de alta definição e pastas de conferência revestidas a buckram escovado.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-space-xs font-label-technical text-label-technical text-on-surface-variant uppercase">
                    <span className="bg-surface-container px-2 py-1">Hot Stamping 3D</span>
                    <span className="bg-surface-container px-2 py-1">Verniz UV Seletivo</span>
                    <span className="bg-surface-container px-2 py-1">Corte Digital Laser</span>
                    <span className="bg-surface-container px-2 py-1 text-primary-container">Cliente Corporativo Tier 1</span>
                  </div>
                </div>
              </div>

              {/* Showcase 2: Vertical Secondary (5 Columns) */}
              <div className="md:col-span-5 bg-surface-container-low flex flex-col justify-between overflow-hidden shadow-sm group">
                <div className="relative h-96 md:h-[460px] w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    alt="High precision screen printing carousel in Maputo workshop"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ClLOXcz6JRFFjdIUj9W6NUENjML-D1faqYNuYyV7i4c19Om5OTTCDxmD9OrP9QA3DuP1J4kNeXm6bLGcleztBpS9vkjJbhXvu82MOE--roQumUxocBbHqjHBhPg83j9BmzaZ0q90B0EwsnlsblVV5MdIBD4qsS2SJJ-EklEYpYE3ylKfHhHKuTCTT7RUXDGVT0A89OVeS25fzupemQVOSnDmS2nrH7x2xyozVWcs"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary-container font-bold">
                    // CASE 02 // CÁPSULA TÊXTIL INDIE
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-space-sm -mt-8 relative z-10 bg-surface-container-low">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Merchandising de Marca de Moda Urbana</span>
                    <span className="bg-surface-variant px-2.5 py-1 text-on-surface font-label-technical text-label-technical">TIRAGEM: 600 PEÇAS</span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary">
                    Serigrafia manual a 6 cores em carrossel térmico, com tintas especiais discharge de base aquosa que penetram no fio mantendo respirabilidade zero-peso.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-space-xs font-label-technical text-label-technical text-on-surface-variant uppercase">
                    <span className="bg-surface-container px-2 py-1">Discharge Ink</span>
                    <span className="bg-surface-container px-2 py-1">Algodão 280g</span>
                    <span className="bg-surface-container px-2 py-1 text-primary-container">Etiquetas Tecidas HD</span>
                  </div>
                </div>
              </div>

              {/* Showcase 3: Third Project Tile (6 Columns) */}
              <div className="md:col-span-6 bg-surface-container-low flex flex-col justify-between overflow-hidden shadow-sm group">
                <div className="relative h-72 w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    alt="Editorial spread of bespoke luxury wine bottle labels"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFhsV21kDIKyp1gF4cd0Yw_4l8BTtR8Bq2q9i1uawPWLnh0PvsnJkhkqzkKPzikAcKwAXY_VswhLiiGyNxcvhq1NYmj7co2--WNLN1pRsgCGkaM3FrWcyOkqii5FrbkQ5XwilhIvkLJ8-uiBdhFarY9_GsCBmITvf2aURtKNc_F3OnMPX_l-KjbNgOqTfe8rhBw6S1cNeYo90lXu3EgViCa9hnkwhLmo0Jn8U6lfpf"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-1 font-label-technical text-label-technical text-primary-container">
                    // CASE 03 // BEBIDAS PREMIUM &amp; RÓTULOS
                  </div>
                </div>
                <div className="p-space-md flex flex-col gap-space-xs">
                  <div className="flex justify-between items-center">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Rótulos Enológicos Resistentes ao Gelo</h4>
                    <span className="font-label-technical text-label-technical text-secondary">5.000 UNID</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Papel feltro autoadesivo com barreira fungicida, estampagem a quente bronze e verniz táctil micro-granulado.
                  </p>
                </div>
              </div>

              {/* Showcase 4: Fourth Project Tile (6 Columns) */}
              <div className="md:col-span-6 bg-surface-container-low flex flex-col justify-between overflow-hidden shadow-sm group">
                <div className="relative h-72 w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    alt="Massive illuminated outdoor hoarding in Maputo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgss24N9EaPK3MfkIS0A8up29i-2fZ01QqnHJtojYxkZZS6QmAhALvIHhGgQd3b8-k5fcBLFsCt5nDzUgXc8NWRyguCAkx0btI8cRYf64uK-vlbQvY-5W6UtdqaUcbtTAJkppb0fw8QEqCeO7-IAejhamhsMorR5LM0hvZ6QvdUeEeU1il3ahn-BIMVl7GryQlv2xVvjLvUrG-Uw6zL-LMh50rwoW3Bs3jUQbYDcMI"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-1 font-label-technical text-label-technical text-primary-container">
                    // CASE 04 // FACHADA CORPORATIVA MAPUTO
                  </div>
                </div>
                <div className="p-space-md flex flex-col gap-space-xs">
                  <div className="flex justify-between items-center">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Lona Arquitetónica Microperfurada</h4>
                    <span className="font-label-technical text-label-technical text-secondary">180 M² INSTALADOS</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Impressão contínua em grande formato com solda de alta frequência e ilhoses de latão niquelado anti-corrosão marítima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: INTERACTIVE CUSTOMIZATION STUDIO BANNER & CTA CONVERSION */}
        <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface relative overflow-hidden" id="estudio-personalizacao">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-end">
            <span className="font-display-xl text-display-xl text-primary-container select-none uppercase tracking-tighter">STUDIO</span>
          </div>
          <div className="max-w-[1600px] mx-auto bg-surface-container p-space-lg md:p-space-xl shadow-xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              {/* Left Statement */}
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                  <span className="w-2 h-2 bg-primary-container"></span>
                  <span>MÓDULO DE SIMULAÇÃO TÉCNICA // ESTÚDIO DIGITAL</span>
                </div>
                <h2 className="font-display-lg text-headline-lg lg:text-headline-lg text-on-surface uppercase tracking-tight">
                  Tem um projecto em mente? <br /><span className="text-primary-container">Vamos produzir.</span>
                </h2>
                <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
                  Experimente o nosso novo Estúdio de Personalização interactivo: teste cores, adicione o seu logótipo, veja o mockup em tempo real e requisite uma cotação técnica em menos de 2 minutos.
                </p>

                {/* Interactive Micro-Test Studio Preview Inline */}
                <div className="bg-surface-container-low p-space-md max-w-xl shadow-inner flex flex-col gap-space-sm">
                  <div className="flex justify-between items-center text-on-surface-variant font-label-technical text-label-technical uppercase">
                    <span>Seletor Rápido de Acabamento &amp; Têxtil</span>
                    <span className="text-primary-container">Modo Demo</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      className="p-2 bg-surface-container-high text-on-surface font-label-md text-label-md uppercase text-center hover:bg-surface-variant transition-colors"
                      onClick={() => setPreviewConfig("Algodão 450g + Foil Ouro")}
                    >
                      Papel 450g
                    </button>
                    <button
                      className="p-2 bg-surface-container-high text-on-surface font-label-md text-label-md uppercase text-center hover:bg-surface-variant transition-colors"
                      onClick={() => setPreviewConfig("Camiseta 240g Discharge")}
                    >
                      Têxtil Heavy
                    </button>
                    <button
                      className="p-2 bg-surface-container-high text-on-surface font-label-md text-label-md uppercase text-center hover:bg-surface-variant transition-colors"
                      onClick={() => setPreviewConfig("Caixa Magnética Rígida")}
                    >
                      Packaging
                    </button>
                  </div>
                  <div className="p-3 bg-surface-container-lowest flex items-center justify-between font-label-technical text-label-technical text-secondary">
                    <span>Configuração selecionada:</span>
                    <span className="text-primary-container font-bold">{previewConfig}</span>
                  </div>
                </div>

                {/* Master Action Buttons */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <Link
                    className="bg-primary-container text-on-primary-fixed font-label-lg text-label-lg uppercase tracking-wider px-8 py-4 font-bold shadow-md hover:bg-primary hover:text-surface transition-all flex items-center gap-2"
                    href="/studio"
                  >
                    <span>Entrar no Estúdio de Personalização</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </Link>
                  <a
                    className="bg-surface-container-highest text-on-surface font-label-lg text-label-lg uppercase tracking-wider px-8 py-4 hover:bg-surface-variant transition-all flex items-center gap-2"
                    href="https://wa.me/258840000000"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#25D366]">chat</span>
                    <span>Mestre de Impressão via WhatsApp (+258 84 000 0000)</span>
                  </a>
                </div>
              </div>

              {/* Right Visual Guarantee Card */}
              <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg shadow-sm">
                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">// GARANTIA TÉCNICA DIGITAFRIKA</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">Compromisso de Fidelidade de Impressão</h3>
                <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-secondary pt-space-xs">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0">check_circle</span>
                    <span>Prova digital e amostra física de cor pré-produção disponível.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0">check_circle</span>
                    <span>Tintas ecológicas com certificação OEKO-TEX® para têxteis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0">check_circle</span>
                    <span>Entrega direta nas províncias de Maputo, Matola, Gaza, Inhambane, Sofala, Tete e Nampula.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0">check_circle</span>
                    <span>Emissão de fatura fiscal com IVA e documentação técnica de compliance.</span>
                  </li>
                </ul>
                <div className="mt-space-sm pt-space-sm border-t border-surface-variant flex items-center justify-between font-label-technical text-label-technical text-on-surface-variant">
                  <span>Selo de Qualidade MPT-2026</span>
                  <span className="text-primary-container font-bold">100% GARANTIDO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODAL DINÂMICO DE FICHA TÉCNICA */}
        {modalTitle && (
          <div 
            className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center p-space-md animate-fadeIn"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalTitle(null);
            }}
          >
            <div className="bg-surface-container max-w-xl w-full p-space-lg shadow-2xl relative flex flex-col gap-space-md border border-outline-variant/30">
              <div className="flex items-center justify-between border-b border-surface-variant pb-space-sm">
                <div>
                  <span className="font-label-technical text-label-technical text-primary-container uppercase">// FICHA TÉCNICA INDUSTRIAL</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">{modalTitle}</h3>
                </div>
                <button
                  className="w-8 h-8 bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-variant"
                  onClick={() => setModalTitle(null)}
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-secondary">
                <p>Esta especificação reflete as normas industriais aplicadas na oficina de Maputo. Todos os trabalhos passam por verificação de sangria (mínimo 3mm), resolução de 300 DPI e conversão CMYK / FOGRA39.</p>
                <div className="bg-surface-container-low p-space-sm flex flex-col gap-2 font-label-technical text-label-technical">
                  <div className="flex justify-between"><span className="text-on-surface-variant">Controlo de Qualidade:</span><span className="text-on-surface">Inspeção 100% Manual por Peça</span></div>
                  <div className="flex justify-between"><span className="text-on-surface-variant">Prazo Expresso:</span><span className="text-primary-container font-bold">24 Horas sob consulta prévia</span></div>
                  <div className="flex justify-between"><span className="text-on-surface-variant">Acondicionamento:</span><span className="text-on-surface">Caixas térmicas seladas e filmadas</span></div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                <button
                  className="px-5 py-2.5 bg-surface-container-high text-on-surface font-label-md text-label-md uppercase"
                  onClick={() => setModalTitle(null)}
                >
                  Fechar
                </button>
                <Link
                  className="px-5 py-2.5 bg-primary-container text-on-primary-fixed font-label-md text-label-md uppercase font-bold hover:bg-primary transition-colors"
                  href="/studio"
                  onClick={() => setModalTitle(null)}
                >
                  Configurar Agora
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

