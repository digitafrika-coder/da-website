"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProductModel {
  name: string;
  basePrice: number;
  defaultFabric: string;
  icon: string;
}

export default function StudioPage() {
  // Navigation tabs: 'product', 'editor', 'quote'
  const [activeTab, setActiveTab] = useState<"product" | "editor" | "quote">("product");

  // Product model selection
  const [selectedProduct, setSelectedProduct] = useState<ProductModel>({
    name: "Camisetas",
    basePrice: 485,
    defaultFabric: "Algodão Heavy 220g",
    icon: "apparel",
  });

  const [fabricOption, setFabricOption] = useState("Algodão Heavy 220g");
  const [selectedColor, setSelectedColor] = useState({
    name: "Preto Obsidiana",
    hex: "#121212",
  });
  const [printTech, setPrintTech] = useState("Serigrafia Plastisol Alta Densidade");

  // Artwork layer
  const [headingText, setHeadingText] = useState("DIGITAFRIKA");
  const [subheadingText, setSubheadingText] = useState("MAPUTO CREATIVE HUB // 2026");
  const [fontFamily, setFontFamily] = useState<"font-display-lg" | "font-body-lg">("font-display-lg");
  const [inkColor, setInkColor] = useState("#bef500");
  const [artScale, setArtScale] = useState(1);
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);

  // Viewport controls
  const [mockupView, setMockupView] = useState<"front" | "back" | "detail">("front");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLightMode, setIsLightMode] = useState(false);

  // Quote Calculator
  const [quantity, setQuantity] = useState(100);
  const [leadTime, setLeadTime] = useState<"regular" | "rush">("regular");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const [customerData, setCustomerData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Calculate discount percentage based on quantity
  const getDiscountPercent = (qty: number) => {
    if (qty >= 250) return 35;
    if (qty >= 100) return 22;
    if (qty >= 50) return 12;
    return 0;
  };

  const discountPercent = getDiscountPercent(quantity);
  const unitPrice = Math.round(selectedProduct.basePrice * (1 - discountPercent / 100));

  const productList: ProductModel[] = [
    { name: "Camisetas", basePrice: 485, defaultFabric: "Algodão Heavy 220g", icon: "apparel" },
    { name: "Polos", basePrice: 690, defaultFabric: "Piqué Algodão 240g", icon: "styler" },
    { name: "Sweatshirts", basePrice: 1250, defaultFabric: "Moletom Cardado 320g", icon: "dry_cleaning" },
    { name: "Bonés", basePrice: 380, defaultFabric: "Sarja Estruturada 6 Painéis", icon: "sports_baseball" },
    { name: "Canecas", basePrice: 290, defaultFabric: "Cerâmica Premium Sublimada", icon: "local_cafe" },
    { name: "Sacolas / Totes", basePrice: 340, defaultFabric: "Lona Crua Reforçada 300g", icon: "shopping_bag" },
  ];

  const colorSwatches = [
    { name: "Preto Obsidiana", hex: "#121212" },
    { name: "Branco Puro", hex: "#FFFFFF" },
    { name: "Verde Neon DigitAfrika", hex: "#bef500" },
    { name: "Cinzento Chumbo", hex: "#2C2D30" },
    { name: "Azul Marinho Corporativo", hex: "#141B2D" },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedLogo(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FORMSPREE_ENDPOINT: substitua «YOUR_FORM_ID» pelo ID real em formspree.io após criar a conta com digitafrika@gmail.com
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    const refId = `DA-EST-2026-${Math.floor(100 + Math.random() * 900)}`;
    try {
      const payload = {
        referencia: refId,
        nome: customerData.fullname,
        empresa: customerData.company,
        email: customerData.email,
        telefone: customerData.phone,
        produto: selectedProduct.name,
        tecnica_impressao: printTech,
        material: fabricOption,
        cor_tecido: `${selectedColor.name} (${selectedColor.hex})`,
        quantidade: quantity,
        desconto_volume: `${discountPercent}%`,
        preco_unitario_estimado: `${unitPrice.toLocaleString("pt-MZ")} MZN + IVA`,
        prazo: leadTime === "rush" ? "Urgente: 48h–72h" : "Normal: 5–7 dias úteis",
        notas: customerData.notes || "—",
      };
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setQuoteSubmitted(true);
      } else {
        setSubmitError("Erro ao enviar. Por favor tente novamente ou contacte-nos via WhatsApp.");
      }
    } catch {
      setSubmitError("Sem ligação. Verifique a sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      <div className="flex flex-col w-full">
        {/* Top Operational Banner & Technical Status Strip */}
        <section className="w-full bg-surface-container-lowest px-margin-mobile md:px-margin lg:px-margin-desktop py-space-sm border-b border-outline-variant/20">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-xs text-on-surface-variant">
            <div className="flex items-center gap-space-sm font-label-technical text-label-technical uppercase tracking-widest">
              <span className="text-primary-container font-bold">// ESTÚDIO</span>
              <span className="text-on-surface font-semibold">ESTÚDIO DE PERSONALIZAÇÃO &amp; MOCKUP BUILDER</span>
              <span className="text-secondary">•</span>
              <span className="text-primary-container">PRODUÇÃO INDUSTRIAL MAPUTO</span>
            </div>
            <div className="flex items-center gap-space-md font-label-technical text-label-technical uppercase">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="text-on-surface font-medium">MOCKUP INTERACTIVO EM TEMPO REAL // ACTIVO</span>
              </div>
              <span className="text-secondary-container">|</span>
              <span className="text-on-surface-variant">CALIBRAÇÃO: FOGRA51 / PANTONE SOLID</span>
            </div>
          </div>
        </section>

        {/* Title & Context Area */}
        <section className="w-full bg-surface px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-lg pb-space-md">
          <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-4xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface-container-high text-primary-container font-label-technical text-label-technical uppercase tracking-widest">
                <span className="material-symbols-outlined text-[14px]">tune</span>
                Configurador Paramétrico em Tempo Real
              </div>
              <h1 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">
                Estúdio de Personalização Interactivo
              </h1>
              <p className="font-body-md text-body-md text-secondary max-w-2xl">
                Configure o seu produto, teste variantes de cor têxtil e acabamento, posicione a sua marca na malha tridimensional e receba uma cotação técnica calibrada em Moçambique.
              </p>
            </div>

            {/* Quick Action / Live Quote Badge */}
            <div className="bg-surface-container-low p-4 flex items-center justify-between sm:justify-start gap-space-lg shadow-md border border-outline-variant/30">
              <div className="flex flex-col">
                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">
                  Estimativa por Unidade
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-sm text-headline-sm text-primary-container font-bold">
                    {unitPrice.toLocaleString("pt-MZ")},00
                  </span>
                  <span className="font-label-technical text-label-technical text-secondary uppercase">MZN + IVA</span>
                </div>
                <span className="font-label-technical text-[10px] text-secondary/70 mt-0.5">* Valor indicativo. Sujeito a confirmação técnica.</span>
              </div>
              <div className="h-8 w-px bg-surface-variant"></div>
              <div className="flex flex-col">
                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">
                  Desconto Volume
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  -{discountPercent}% (LOTE {quantity})
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Studio Workspace */}
        <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-md">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* LEFT / CENTER COLUMN: Realistic Mockup Viewport */}
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              {/* Viewport Toolbar */}
              <div className="bg-surface-container-low p-3 flex flex-wrap items-center justify-between gap-space-xs shadow-sm border border-outline-variant/30">
                {/* Views Switcher */}
                <div className="flex items-center gap-1 bg-surface-container-lowest p-1">
                  <button
                    className={`px-3 py-1.5 font-label-technical text-label-technical uppercase tracking-wider transition-all ${
                      mockupView === "front"
                        ? "bg-surface-variant text-primary-container font-bold shadow-sm"
                        : "text-secondary hover:text-on-surface"
                    }`}
                    onClick={() => setMockupView("front")}
                    type="button"
                  >
                    Frente
                  </button>
                  <button
                    className={`px-3 py-1.5 font-label-technical text-label-technical uppercase tracking-wider transition-all ${
                      mockupView === "back"
                        ? "bg-surface-variant text-primary-container font-bold shadow-sm"
                        : "text-secondary hover:text-on-surface"
                    }`}
                    onClick={() => setMockupView("back")}
                    type="button"
                  >
                    Costas
                  </button>
                  <button
                    className={`px-3 py-1.5 font-label-technical text-label-technical uppercase tracking-wider transition-all ${
                      mockupView === "detail"
                        ? "bg-surface-variant text-primary-container font-bold shadow-sm"
                        : "text-secondary hover:text-on-surface"
                    }`}
                    onClick={() => setMockupView("detail")}
                    type="button"
                  >
                    Gola &amp; Etiqueta
                  </button>
                </div>

                {/* Studio Simulation Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-surface-container-lowest p-1">
                    <button
                      className="w-7 h-7 flex items-center justify-center text-secondary hover:text-primary-container hover:bg-surface-container transition-colors"
                      onClick={() => setZoomLevel((z) => Math.min(z + 0.15, 1.45))}
                      title="Zoom +"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                    </button>
                    <button
                      className="w-7 h-7 flex items-center justify-center text-secondary hover:text-primary-container hover:bg-surface-container transition-colors"
                      onClick={() => setZoomLevel((z) => Math.max(z - 0.15, 0.75))}
                      title="Zoom -"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">zoom_out</span>
                    </button>
                    <button
                      className="w-7 h-7 flex items-center justify-center text-secondary hover:text-primary-container hover:bg-surface-container transition-colors"
                      onClick={() => {
                        setZoomLevel(1);
                        setArtScale(1);
                      }}
                      title="Repor Vista"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">refresh</span>
                    </button>
                  </div>
                  <button
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest text-secondary hover:text-primary-container font-label-technical text-label-technical uppercase transition-colors"
                    onClick={() => setIsLightMode(!isLightMode)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px] text-primary-container">light_mode</span>
                    <span>{isLightMode ? "Luz Neutra" : "Luz Studio"}</span>
                  </button>
                </div>
              </div>

              {/* 3D / Mockup Canvas Arena */}
              <div
                className={`relative w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden flex items-center justify-center shadow-2xl select-none group border border-outline-variant/30 transition-colors ${
                  isLightMode ? "bg-[#222428]" : "bg-surface-container-lowest"
                }`}
              >
                {/* Background Studio Grid Texture */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #8d9479 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>

                {/* Technical Alignment Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 pointer-events-none"></div>
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/5 pointer-events-none"></div>

                {/* Product Base Render / Realistic Model Backdrop */}
                <div
                  className="relative w-full h-full flex items-center justify-center transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  {/* Simulated Apparel Vector Silhouette with Dynamic Fill */}
                  <div
                    className="relative w-[340px] md:w-[420px] h-[380px] md:h-[460px] flex items-center justify-center transition-colors duration-500"
                    style={{ color: selectedColor.hex }}
                  >
                    <svg className="w-full h-full drop-shadow-2xl transition-all duration-300" fill="currentColor" viewBox="0 0 500 550">
                      {/* Main Body */}
                      <path d="M 175 40 C 205 75 295 75 325 40 L 450 120 C 475 135 450 195 415 195 L 375 190 L 390 490 C 390 515 370 525 350 525 L 150 525 C 130 525 110 515 110 490 L 125 190 L 85 195 C 50 195 25 135 50 120 Z"></path>
                      {/* Shading Overlays */}
                      <path d="M 175 40 C 210 65 290 65 325 40 C 300 80 200 80 175 40 Z" fill="#000000" fillOpacity="0.35"></path>
                      <path d="M 125 190 L 150 525 L 140 525 L 115 190 Z" fill="#000000" fillOpacity="0.18"></path>
                      <path d="M 375 190 L 350 525 L 360 525 L 385 190 Z" fill="#ffffff" fillOpacity="0.08"></path>
                      <path d="M 230 110 Q 250 170 235 240 Q 250 350 245 490" fill="none" stroke="#000000" strokeOpacity="0.15" strokeWidth="2"></path>
                      <path d="M 270 120 Q 260 210 275 310 Q 265 420 270 490" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.5"></path>
                    </svg>

                    {/* Printable Bounding Box Overlay */}
                    <div className="absolute w-[210px] md:w-[250px] h-[280px] md:h-[330px] top-[105px] md:top-[115px] flex flex-col items-center justify-start pointer-events-auto">
                      {/* Bounding Box Frame Indicator */}
                      <div className="absolute inset-0 bg-primary-container/[0.03] outline outline-1 outline-dashed outline-primary-container/40 pointer-events-none">
                        <div className="absolute top-1 left-1 font-label-technical text-[9px] uppercase tracking-widest text-primary-container/80 px-1 py-0.5 bg-surface-container-lowest/80">
                          Área Útil A3 // 297×420mm
                        </div>
                        <div className="absolute bottom-1 right-1 font-label-technical text-[8px] uppercase tracking-widest text-secondary/60">
                          Centro Óptico [CAT]
                        </div>
                      </div>

                      {/* Live Dynamic Customisation Layer */}
                      <div
                        className="relative mt-12 px-4 py-3 bg-surface-container-high/90 shadow-2xl select-none flex flex-col items-center justify-center transition-transform hover:shadow-primary-container/20 group/art border border-primary-container/30"
                        style={{ transform: `scale(${artScale})` }}
                      >
                        {/* Artwork Content */}
                        <div className="flex flex-col items-center text-center">
                          {uploadedLogo && (
                            <div className="mb-2 max-w-[120px] max-h-[70px] overflow-hidden">
                              <img
                                className="w-full h-full object-contain"
                                alt="Logótipo do cliente"
                                src={uploadedLogo}
                              />
                            </div>
                          )}
                          <span
                            className={`${fontFamily} text-[22px] md:text-[26px] leading-none uppercase font-extrabold tracking-tight`}
                            style={{ color: inkColor }}
                          >
                            {headingText}
                          </span>
                          <span className="font-label-technical text-[10px] uppercase tracking-[0.25em] text-on-surface mt-1">
                            {subheadingText}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Viewport Production Safeguard Watermark */}
                <div className="absolute bottom-3 inset-x-3 bg-surface-container-high/90 p-2.5 flex items-center justify-between gap-space-sm backdrop-blur-sm border border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">verified_user</span>
                    <p className="font-label-technical text-label-technical text-secondary uppercase tracking-tight">
                      PRÉ-VISUALIZAÇÃO DE CONCEITO // A ARTE FINAL SERÁ CALIBRADA EM VECTOR (AI / PDF / EPS) PELA EQUIPA TÉCNICA
                    </p>
                  </div>
                  <span className="font-label-technical text-label-technical text-primary-container uppercase font-bold shrink-0 hidden sm:inline">
                    100% REPRODUÇÃO FIEL
                  </span>
                </div>
              </div>

              {/* Specifications & Live Attributes Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-surface-container-low p-3 flex flex-col border border-outline-variant/20">
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">Substrato Base</span>
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">{fabricOption}</span>
                </div>
                <div className="bg-surface-container-low p-3 flex flex-col border border-outline-variant/20">
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">Tonalidade Selecionada</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-3 h-3 inline-block shadow-sm" style={{ backgroundColor: selectedColor.hex }}></span>
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">{selectedColor.name}</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-3 flex flex-col border border-outline-variant/20">
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">Processo de Impressão</span>
                  <span className="font-label-lg text-label-lg text-primary-container font-semibold truncate">{printTech}</span>
                </div>
                <div className="bg-surface-container-low p-3 flex flex-col border border-outline-variant/20">
                  <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">Local de Produção</span>
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Maputo [Oficina Central]</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Control Panel & Configuration Engine */}
            <div className="lg:col-span-5 flex flex-col bg-surface-container-low shadow-xl border border-outline-variant/30">
              {/* Tabbed Navigation Ribbon */}
              <div className="grid grid-cols-3 bg-surface-container-lowest text-center select-none border-b border-outline-variant/20">
                <button
                  className={`py-3.5 px-2 font-label-lg text-label-lg uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "product"
                      ? "text-primary-container bg-surface-container-low font-bold"
                      : "text-secondary hover:text-on-surface"
                  }`}
                  onClick={() => setActiveTab("product")}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">checkroom</span>
                  <span className="hidden sm:inline">1. Modelo</span>
                  <span className="sm:hidden">1</span>
                </button>
                <button
                  className={`py-3.5 px-2 font-label-lg text-label-lg uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "editor"
                      ? "text-primary-container bg-surface-container-low font-bold"
                      : "text-secondary hover:text-on-surface"
                  }`}
                  onClick={() => setActiveTab("editor")}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">draw</span>
                  <span className="hidden sm:inline">2. Arte</span>
                  <span className="sm:hidden">2</span>
                </button>
                <button
                  className={`py-3.5 px-2 font-label-lg text-label-lg uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "quote"
                      ? "text-primary-container bg-surface-container-low font-bold"
                      : "text-secondary hover:text-on-surface"
                  }`}
                  onClick={() => setActiveTab("quote")}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">request_quote</span>
                  <span className="hidden sm:inline">3. Cotação</span>
                  <span className="sm:hidden">3</span>
                </button>
              </div>

              {/* TAB CONTENT CONTAINER */}
              <div className="p-space-md sm:p-space-lg flex-1 flex flex-col justify-between">
                {/* TAB 1: PRODUCT & MODEL */}
                {activeTab === "product" && (
                  <div className="flex flex-col gap-space-lg animate-fadeIn">
                    {/* Category Selector Matrix */}
                    <div className="space-y-space-xs">
                      <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest block">
                        Seleccione a Linha de Produto
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {productList.map((prod) => (
                          <button
                            key={prod.name}
                            className={`p-2.5 font-semibold flex flex-col items-center gap-1 text-center transition-all ${
                              selectedProduct.name === prod.name
                                ? "bg-surface-container-high text-primary-container border border-primary-container/40"
                                : "bg-surface-container-lowest text-secondary hover:text-on-surface"
                            }`}
                            onClick={() => {
                              setSelectedProduct(prod);
                              setFabricOption(prod.defaultFabric);
                            }}
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">{prod.icon}</span>
                            <span className="font-label-technical text-label-technical uppercase">{prod.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Material & Fabric Weight */}
                    <div className="space-y-space-xs">
                      <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest block">
                        Gramagem &amp; Especificação do Têxtil
                      </label>
                      <div className="space-y-2">
                        {[
                          { title: "Algodão Penteado Heavyweight 220g", desc: "Toque encorpado, estrutura premium e alta durabilidade", tag: "Padrão Agency", value: "Algodão Heavy 220g" },
                          { title: "Têxtil Orgânico Sustentável 180g", desc: "Toque sedoso, algodão biológico com certificação OEKO-TEX", tag: "+45 MZN", value: "Têxtil Orgânico 180g" },
                          { title: "Tech Dry-Fit Performance", desc: "Microfibra transpirável de secagem ultrarrápida para eventos", tag: "+15 MZN", value: "Tech Dry-Fit Performance" },
                        ].map((fab) => (
                          <label
                            key={fab.value}
                            className={`flex items-center justify-between p-3 cursor-pointer transition-colors ${
                              fabricOption === fab.value
                                ? "bg-surface-container-high border border-primary-container/30"
                                : "bg-surface-container-lowest hover:bg-surface-container-high/60"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                className="accent-primary-container w-4 h-4"
                                checked={fabricOption === fab.value}
                                onChange={() => setFabricOption(fab.value)}
                                name="fabricOption"
                                type="radio"
                              />
                              <div className="flex flex-col">
                                <span className="font-label-lg text-label-lg text-on-surface">{fab.title}</span>
                                <span className="font-body-sm text-body-sm text-secondary">{fab.desc}</span>
                              </div>
                            </div>
                            <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-wider">
                              {fab.tag}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Color Palette Selector */}
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest block">
                          Cor do Tecido / Substrato
                        </label>
                        <span className="font-label-technical text-label-technical text-primary-container font-mono">
                          {selectedColor.hex} [{selectedColor.name.toUpperCase()}]
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant/20">
                        {colorSwatches.map((color) => (
                          <button
                            key={color.hex}
                            className={`w-9 h-9 shadow-md flex items-center justify-center transition-all ${
                              selectedColor.hex === color.hex ? "ring-2 ring-primary-container scale-105" : ""
                            }`}
                            style={{ backgroundColor: color.hex }}
                            onClick={() => setSelectedColor(color)}
                            title={color.name}
                            type="button"
                          >
                            {selectedColor.hex === color.hex && (
                              <span className="w-1.5 h-1.5 bg-primary-container"></span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Print Techniques Options */}
                    <div className="space-y-space-xs">
                      <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest block">
                        Técnica de Gravação / Impressão Industrial
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          { title: "Serigrafia Plastisol", desc: "Máxima vivacidade e durabilidade", icon: "opacity" },
                          { title: "Serigrafia Discharge", desc: "Zero toque na fibra escura", icon: "eco" },
                          { title: "Digital Directa DTG", desc: "Gradientes e fotos em alta definição", icon: "print" },
                          { title: "Bordado Industrial 3D", desc: "Relevo de alta costura em fios Madeira", icon: "texture" },
                        ].map((tech) => (
                          <button
                            key={tech.title}
                            className={`p-3 text-left flex items-start gap-2.5 transition-all ${
                              printTech === tech.title
                                ? "bg-surface-container-high text-primary-container border border-primary-container/40"
                                : "bg-surface-container-lowest text-secondary hover:text-on-surface"
                            }`}
                            onClick={() => setPrintTech(tech.title)}
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px] mt-0.5">{tech.icon}</span>
                            <div className="flex flex-col">
                              <span className="font-label-technical text-label-technical uppercase font-bold">{tech.title}</span>
                              <span className="font-body-sm text-body-sm text-secondary">{tech.desc}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Advance Tab Button */}
                    <button
                      className="w-full py-3.5 bg-surface-container-high text-on-surface hover:text-primary-container font-label-lg text-label-lg uppercase tracking-widest flex items-center justify-center gap-2 transition-colors mt-2"
                      onClick={() => setActiveTab("editor")}
                      type="button"
                    >
                      <span>Avançar para Personalização de Arte</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                )}

                {/* TAB 2: VISUAL EDITOR */}
                {activeTab === "editor" && (
                  <div className="flex flex-col gap-space-lg animate-fadeIn">
                    {/* Upload Asset Box */}
                    <div className="space-y-space-xs">
                      <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest block">
                        Ficheiro Vectorial ou Imagem de Marca
                      </label>
                      <div className="relative">
                        <div className="p-6 bg-surface-container-lowest text-center flex flex-col items-center justify-center gap-3 relative cursor-pointer hover:bg-surface-container-high/40 transition-colors border border-dashed border-outline-variant/40">
                          <input
                            accept=".png,.svg,.ai,.pdf,.jpg,.jpeg"
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            onChange={handleFileUpload}
                            type="file"
                          />
                          <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center text-primary-container">
                            <span className="material-symbols-outlined text-[26px]">{uploadedLogo ? "check_circle" : "cloud_upload"}</span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-label-lg text-label-lg uppercase text-on-surface font-semibold">
                              {uploadedLogo ? "Logótipo carregado — Clique para trocar" : "Carregar Logótipo / Arte do Cliente"}
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              Formatos aceites: .SVG, .PNG, .AI ou .PDF (mín. 300 DPI) · Máx. 10 MB
                            </span>
                          </div>
                        </div>
                        {uploadedLogo && (
                          <button
                            className="absolute top-2 right-2 w-7 h-7 bg-surface-container-high hover:bg-error hover:text-on-error text-secondary flex items-center justify-center transition-colors z-10"
                            onClick={() => setUploadedLogo(null)}
                            title="Remover logótipo"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">close</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Text & Signature Input Generator */}
                    <div className="space-y-space-xs">
                      <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest block">
                        Adicionar Tipografia / Assinatura de Marca
                      </label>
                      <div className="space-y-3">
                        <div>
                          <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                            Título Primário
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
                            value={headingText}
                            onChange={(e) => setHeadingText(e.target.value)}
                            placeholder="Ex: NOME DA EMPRESA"
                            type="text"
                          />
                        </div>
                        <div>
                          <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                            Subtítulo / Tagline
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
                            value={subheadingText}
                            onChange={(e) => setSubheadingText(e.target.value)}
                            placeholder="Ex: DIVISÃO INDUSTRIAL // 2026"
                            type="text"
                          />
                        </div>

                        {/* Font Family Selection */}
                        <div>
                          <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                            Família Tipográfica
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              className={`p-2 font-label-technical text-label-technical uppercase transition-all ${
                                fontFamily === "font-display-lg"
                                  ? "bg-surface-container-high text-primary-container font-bold border border-primary-container/40"
                                  : "bg-surface-container-lowest text-secondary hover:text-on-surface"
                              }`}
                              onClick={() => setFontFamily("font-display-lg")}
                              type="button"
                            >
                              Syne [Editorial]
                            </button>
                            <button
                              className={`p-2 font-label-technical text-label-technical uppercase transition-all ${
                                fontFamily === "font-body-lg"
                                  ? "bg-surface-container-high text-primary-container font-bold border border-primary-container/40"
                                  : "bg-surface-container-lowest text-secondary hover:text-on-surface"
                              }`}
                              onClick={() => setFontFamily("font-body-lg")}
                              type="button"
                            >
                              Space Grotesk [Modern]
                            </button>
                          </div>
                        </div>

                        {/* Ink Color Swatches */}
                        <div>
                          <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                            Tinta de Estampa Principal
                          </span>
                          <div className="flex items-center gap-2 p-2 bg-surface-container-lowest border border-outline-variant/20">
                            {[
                              { hex: "#bef500", title: "Lime" },
                              { hex: "#ffffff", title: "Branco" },
                              { hex: "#000000", title: "Preto" },
                              { hex: "#ff334b", title: "Magenta" },
                              { hex: "#00f0ff", title: "Ciano" },
                            ].map((ink) => (
                              <button
                                key={ink.hex}
                                className={`w-7 h-7 shadow-sm transition-transform ${
                                  inkColor === ink.hex ? "ring-2 ring-primary-container scale-110" : ""
                                }`}
                                style={{ backgroundColor: ink.hex }}
                                onClick={() => setInkColor(ink.hex)}
                                title={ink.title}
                                type="button"
                              ></button>
                            ))}
                            <span className="font-label-technical text-label-technical text-secondary ml-auto uppercase tracking-tight">
                              Cores Pantone
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Layer Operations Controls */}
                    <div className="space-y-space-xs">
                      <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest block">
                        Controlos de Camada &amp; Transformação
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        <button
                          className="p-2.5 bg-surface-container-lowest text-secondary hover:text-primary-container font-label-technical text-[10px] uppercase flex flex-col items-center gap-1 transition-colors border border-outline-variant/20"
                          onClick={() => setArtScale(1)}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">vertical_align_center</span>
                          Centrar
                        </button>
                        <button
                          className="p-2.5 bg-surface-container-lowest text-secondary hover:text-primary-container font-label-technical text-[10px] uppercase flex flex-col items-center gap-1 transition-colors border border-outline-variant/20"
                          onClick={() => setArtScale((s) => Math.min(s + 0.15, 1.8))}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">zoom_out_map</span>
                          Aumentar
                        </button>
                        <button
                          className="p-2.5 bg-surface-container-lowest text-secondary hover:text-primary-container font-label-technical text-[10px] uppercase flex flex-col items-center gap-1 transition-colors border border-outline-variant/20"
                          onClick={() => setArtScale((s) => Math.max(s - 0.15, 0.5))}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">zoom_in_map</span>
                          Reduzir
                        </button>
                        <button
                          className="p-2.5 bg-surface-container-lowest text-secondary hover:text-error font-label-technical text-[10px] uppercase flex flex-col items-center gap-1 transition-colors border border-outline-variant/20"
                          onClick={() => {
                            setHeadingText("DIGITAFRIKA");
                            setSubheadingText("MAPUTO CREATIVE HUB // 2026");
                            setArtScale(1);
                            setUploadedLogo(null);
                          }}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                          Repor
                        </button>
                      </div>
                    </div>

                    {/* Advance Tab Button */}
                    <button
                      className="w-full py-3.5 bg-surface-container-high text-on-surface hover:text-primary-container font-label-lg text-label-lg uppercase tracking-widest flex items-center justify-center gap-2 transition-colors mt-2"
                      onClick={() => setActiveTab("quote")}
                      type="button"
                    >
                      <span>Finalizar &amp; Solicitar Cotação</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                )}

                {/* TAB 3: QUOTE REQUEST */}
                {activeTab === "quote" && (
                  <div className="flex flex-col gap-space-lg animate-fadeIn">
                    {/* Quantity Tier Engine */}
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest block">
                          Volume de Produção Pretendido
                        </label>
                        <span className="font-label-technical text-label-technical text-primary-container uppercase font-bold">
                          {quantity} Unidades // Desconto -{discountPercent}%
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-4 space-y-3 border border-outline-variant/20">
                        <div className="flex items-center gap-4">
                          <input
                            className="w-full accent-primary-container cursor-pointer"
                            max="1000"
                            min="25"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            step="25"
                            type="range"
                            value={quantity}
                          />
                          <div className="w-24 shrink-0 bg-surface-container-high px-3 py-1.5 text-center font-headline-sm text-headline-sm text-primary-container font-bold">
                            <span>{quantity}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-center font-label-technical text-[9px] text-secondary uppercase">
                          <span className={quantity < 50 ? "text-primary-container font-bold" : ""}>25-49 [Base]</span>
                          <span className={quantity >= 50 && quantity < 100 ? "text-primary-container font-bold" : ""}>50-99 [-12%]</span>
                          <span className={quantity >= 100 && quantity < 250 ? "text-primary-container font-bold" : ""}>100-249 [-22%]</span>
                          <span className={quantity >= 250 ? "text-primary-container font-bold" : ""}>250+ [-35%]</span>
                        </div>
                      </div>
                    </div>

                    {/* Customer Details Form */}
                    <form className="space-y-space-sm" onSubmit={handleQuoteSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <div>
                          <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                            Nome Completo *
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
                            placeholder="Ex: Arnaldo Mondlane"
                            required
                            type="text"
                            value={customerData.fullname}
                            onChange={(e) => setCustomerData({ ...customerData, fullname: e.target.value })}
                          />
                        </div>
                        <div>
                          <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                            Empresa / Organização
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
                            placeholder="Ex: Moza Creatives Lda."
                            type="text"
                            value={customerData.company}
                            onChange={(e) => setCustomerData({ ...customerData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <div>
                          <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                            Email Corporativo *
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
                            placeholder="contacto@empresa.co.mz"
                            required
                            type="email"
                            value={customerData.email}
                            onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                            Contacto WhatsApp (+258) *
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
                            placeholder="+258 84 / 85 000 0000"
                            required
                            type="tel"
                            value={customerData.phone}
                            onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Production Urgency */}
                      <div>
                        <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                          Prazo de Entrega Solicitado
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          <label
                            className={`p-3 cursor-pointer flex items-center gap-2 border ${
                              leadTime === "regular"
                                ? "bg-surface-container-high border-primary-container/40"
                                : "bg-surface-container-lowest border-outline-variant/20"
                            }`}
                          >
                            <input
                              className="accent-primary-container"
                              checked={leadTime === "regular"}
                              onChange={() => setLeadTime("regular")}
                              name="leadTime"
                              type="radio"
                              value="regular"
                            />
                            <div className="flex flex-col">
                              <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold">
                                Normal: 5 a 7 Dias Úteis
                              </span>
                              <span className="font-body-sm text-body-sm text-secondary">Sem taxa de urgência gráfica</span>
                            </div>
                          </label>
                          <label
                            className={`p-3 cursor-pointer flex items-center gap-2 border ${
                              leadTime === "rush"
                                ? "bg-surface-container-high border-primary-container/40"
                                : "bg-surface-container-lowest border-outline-variant/20"
                            }`}
                          >
                            <input
                              className="accent-primary-container"
                              checked={leadTime === "rush"}
                              onChange={() => setLeadTime("rush")}
                              name="leadTime"
                              type="radio"
                              value="rush"
                            />
                            <div className="flex flex-col">
                              <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold">
                                Urgente: 48h a 72h
                              </span>
                              <span className="font-body-sm text-body-sm text-primary-container">Linha expressa prioritária</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Technical Notes */}
                      <div>
                        <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                          Notas de Produção &amp; Especificações Adicionais
                        </span>
                        <textarea
                          className="w-full bg-surface-container-lowest p-3 font-body-md text-body-md text-on-surface placeholder:text-secondary-container focus:outline-none focus:ring-1 focus:ring-primary-container resize-none border border-outline-variant/30"
                          placeholder="Indique requisitos específicos: códigos Pantone exactos, ensacamento individual, entrega em províncias ou etiquetagem personalizada..."
                          rows={3}
                          value={customerData.notes}
                          onChange={(e) => setCustomerData({ ...customerData, notes: e.target.value })}
                        ></textarea>
                      </div>

                      {/* Error message */}
                      {submitError && (
                        <div className="p-3 bg-error/10 border border-error/30 text-error font-label-technical text-label-technical uppercase flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px]">error</span>
                          <span>{submitError}</span>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        className="w-full py-4 bg-primary-container text-on-primary-fixed font-label-lg text-label-lg uppercase tracking-widest font-extrabold flex items-center justify-center gap-2 hover:bg-primary hover:text-surface-container-lowest transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                            <span>A enviar...</span>
                          </>
                        ) : (
                          <>
                            <span>Solicitar Orçamento Técnico</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Modal Confirmação de Orçamento */}
        {quoteSubmitted && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-surface-container-low max-w-xl w-full p-space-lg shadow-2xl relative border border-outline-variant/40">
              <button
                className="absolute top-4 right-4 text-secondary hover:text-on-surface"
                onClick={() => setQuoteSubmitted(false)}
                type="button"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
              <div className="flex flex-col items-center text-center space-y-space-md">
                <div className="w-16 h-16 bg-primary-container/15 border border-primary-container/30 rounded-full flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                    Protocolo Técnico Registado // Maputo Hub
                  </span>
                  <h2 className="font-headline-md text-headline-md uppercase text-on-surface font-bold">
                    Pedido de Orçamento Recebido
                  </h2>
                  <div className="font-label-technical text-label-technical text-secondary uppercase font-mono px-3 py-1 bg-surface-container-lowest inline-block">
                    Ref: #DA-EST-2026-{Math.floor(100 + Math.random() * 900)}
                  </div>
                </div>
                <p className="font-body-md text-body-md text-secondary max-w-md">
                  A equipa de engenharia de pré-impressão da DigitAfrika irá analisar a geometria da sua arte, verificar a calibração de cor em escala Pantone e enviar a proposta comercial detalhada para o seu e-mail e WhatsApp em menos de 24 horas úteis.
                </p>
                {/* Technical Summary Digest */}
                <div className="w-full bg-surface-container-lowest p-4 text-left grid grid-cols-2 gap-2 font-label-technical text-label-technical uppercase border border-outline-variant/20">
                  <div className="text-on-surface-variant">Lote Previsto:</div>
                  <div className="text-on-surface font-bold text-right">{quantity} Unidades</div>
                  <div className="text-on-surface-variant">Linha &amp; Técnica:</div>
                  <div className="text-on-surface font-bold text-right truncate">
                    {selectedProduct.name} // {printTech}
                  </div>
                  <div className="text-on-surface-variant">Atendimento:</div>
                  <div className="text-primary-container font-bold text-right">Polana Cimento, Maputo</div>
                </div>
                {/* Action Options */}
                <div className="w-full flex flex-col sm:flex-row gap-space-sm pt-space-xs">
                  <button
                    className="flex-1 py-3 bg-primary-container text-on-primary-fixed font-label-lg text-label-lg uppercase tracking-wider font-bold hover:bg-white hover:text-black transition-colors"
                    onClick={() => setQuoteSubmitted(false)}
                    type="button"
                  >
                    Nova Personalização
                  </button>
                  <Link
                    className="flex-1 py-3 bg-surface-container-high text-on-surface hover:text-primary-container font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    href="/contactos"
                  >
                    Falar com Mestre Gráfico
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Industrial Studio Footprint & Technical Specifications Grid */}
        <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low mt-space-lg">
          <div className="max-w-[1600px] mx-auto">
            <div className="mb-space-md">
              <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-1">
                // CRITÉRIOS DE FABRICO DE ALTA FIDELIDADE
              </span>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface font-bold">
                Normas de Produção da Oficina Técnica DigitAfrika
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="bg-surface-container-lowest p-6 space-y-space-xs shadow-md border border-outline-variant/20">
                <div className="flex items-center gap-2 text-primary-container">
                  <span className="material-symbols-outlined text-[24px]">palette</span>
                  <span className="font-label-lg text-label-lg uppercase font-bold">Colorimetria &amp; Tintas</span>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  Todas as artes fornecidas em RGB são calibradas para perfis industriais CMYK e escalas Pantone Solid Coated. As tintas plastisol são curadas em estufa a 160°C para garantia de resistência a 80+ lavagens.
                </p>
                <div className="font-label-technical text-label-technical text-on-surface-variant uppercase pt-2">
                  Tolerância Cromática: Delta E &lt; 1.5
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 space-y-space-xs shadow-md border border-outline-variant/20">
                <div className="flex items-center gap-2 text-primary-container">
                  <span className="material-symbols-outlined text-[24px]">square_foot</span>
                  <span className="font-label-lg text-label-lg uppercase font-bold">Áreas Úteis &amp; Resolução</span>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  Impressões até formato A3 estendido (320 × 450 mm). Vetorização assistida gratuita para elementos complexos submetidos em baixa resolução e fornecimento de prova digital em mockup 3D antes da tiragem física.
                </p>
                <div className="font-label-technical text-label-technical text-on-surface-variant uppercase pt-2">
                  Matrizes: 77T / 120T Fios de Poliéster
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 space-y-space-xs shadow-md border border-outline-variant/20">
                <div className="flex items-center gap-2 text-primary-container">
                  <span className="material-symbols-outlined text-[24px]">local_shipping</span>
                  <span className="font-label-lg text-label-lg uppercase font-bold">Logística &amp; Cobertura Nacional</span>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  Expedição diária a partir do Hub Polana Cimento, Maputo. Envio expresso para todas as províncias de Moçambique com embalamento a vácuo, etiquetagem por tamanho e controlo rigoroso de qualidade peça a peça.
                </p>
                <div className="font-label-technical text-label-technical text-on-surface-variant uppercase pt-2">
                  Hub: Av. Julius Nyerere, Maputo
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

