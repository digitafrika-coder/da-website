"use client";

import React, { useState } from "react";

export default function ContactosPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((s) => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable protocol intake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const servicesList = [
    { id: "marketing", label: "Marketing Estratégico", code: "03" },
    { id: "publicidade", label: "Publicidade & Branding", code: "04" },
    { id: "programacao", label: "Programação & Engenharia", code: "05" },
    { id: "solucao360", label: "Solução 360° Completa", code: "ALL" },
  ];

  const budgetList = [
    { id: "tier1", range: "< 500.000 MT", title: "Arrancada" },
    { id: "tier2", range: "500K – 1.5M MT", title: "Expansão" },
    { id: "tier3", range: "> 1.500.000 MT", title: "Empresarial" },
    { id: "tier_custom", range: "CONSULTORIA", title: "A Definir" },
  ];

  return (
    <div className="flex flex-col w-full text-on-surface">
      <div className="flex flex-col w-full">
        {/* AMBIENT GLOW SYSTEM */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-[600px] -right-24 w-[480px] h-[480px] bg-primary-container/5 rounded-full blur-[160px] pointer-events-none"></div>

          {/* HERO HEADER SECTION */}
          <section className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-lg w-full">
            <div className="flex flex-col gap-space-sm max-w-5xl">
              <div className="flex items-center gap-space-xs font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                <span className="inline-block w-2 h-2 bg-primary-container"></span>
                <span>09 // ENTRE EM CONTACTO</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-primary uppercase tracking-tight leading-[0.95]">
                Vamos iniciar uma conversa que transforma o seu negócio.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-space-xs">
                Seja para conceber uma nova marca, lançar uma plataforma digital de alto desempenho ou planear uma campanha memorável, a nossa equipa está pronta para ouvir o seu desafio.
              </p>
            </div>

            {/* RUNNING METRICS TICKER STRIP */}
            <div className="mt-space-lg grid grid-cols-2 md:grid-cols-4 gap-space-xs bg-surface-container-low p-space-xs">
              <div className="bg-surface-container px-space-md py-space-sm">
                <span className="block font-label-technical text-label-technical text-outline uppercase tracking-wider">
                  // LOCALIZAÇÃO
                </span>
                <span className="font-headline-sm text-headline-sm text-primary uppercase">MAPUTO [CAT]</span>
              </div>
              <div className="bg-surface-container px-space-md py-space-sm">
                <span className="block font-label-technical text-label-technical text-outline uppercase tracking-wider">
                  // LATÊNCIA DE RESPOSTA
                </span>
                <span className="font-headline-sm text-headline-sm text-primary-container uppercase">&lt; 24H ÚTEIS</span>
              </div>
              <div className="bg-surface-container px-space-md py-space-sm">
                <span className="block font-label-technical text-label-technical text-outline uppercase tracking-wider">
                  // DISPONIBILIDADE
                </span>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-label-lg text-label-lg text-primary uppercase">Q1 / Q2 2026</span>
                </div>
              </div>
              <div className="bg-surface-container px-space-md py-space-sm">
                <span className="block font-label-technical text-label-technical text-outline uppercase tracking-wider">
                  // ENCRIPTAÇÃO
                </span>
                <span className="font-headline-sm text-headline-sm text-primary uppercase">CONFIDENCIAL</span>
              </div>
            </div>
          </section>

          {/* CORE 2-COLUMN INTERFACE */}
          <section className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop pb-space-2xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
              {/* LEFT COLUMN: INSTITUTIONAL ARCHITECTURE & DIRECT ACCESS */}
              <aside className="lg:col-span-5 flex flex-col gap-space-md">
                {/* LIVE OPERATIONAL STATUS CARD */}
                <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-xl">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-technical text-label-technical text-outline uppercase">
                      // NÓ OPERACIONAL ACTUAL
                    </span>
                    <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                      LIVE RADAR
                    </span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="w-3 h-3 rounded-full bg-primary-container mt-1 shrink-0 animate-pulse"></span>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-primary uppercase">
                        Disponível Para Novos Projectos // 2026
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant pt-1">
                        Capacidade operacional desbloqueada para contratos estratégicos pan-africanos e globais. Aceitamos mandatos com início imediato.
                      </p>
                    </div>
                  </div>
                  {/* Guarantee Ribbon */}
                  <div className="bg-surface-container-high px-space-md py-space-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-lg">verified</span>
                      <span className="font-label-lg text-label-lg text-on-surface uppercase">Garantia de Protocolo</span>
                    </div>
                    <span className="font-label-technical text-label-technical text-primary-container uppercase font-bold">
                      Resposta &lt; 24h úteis
                    </span>
                  </div>
                </div>

                {/* DIRECT METRICS / CHANNELS */}
                <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-xl">
                  <span className="font-label-technical text-label-technical text-outline uppercase tracking-wider">
                    // CANAIS DIRECTOS EXECUTIVOS
                  </span>
                  <div className="space-y-space-md">
                    {/* Location Point */}
                    <div className="group flex items-start gap-space-sm">
                      <div className="w-10 h-10 bg-surface-container flex items-center justify-center shrink-0 text-primary-container">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div>
                        <span className="font-label-technical text-label-technical text-outline uppercase block">
                          Endereço do Estúdio
                        </span>
                        <p className="font-headline-sm text-headline-sm text-primary pt-0.5">
                          Av. Julius Nyerere, Polana Cimento
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Maputo [CAT], Moçambique
                        </p>
                      </div>
                    </div>
                    {/* Email Channel */}
                    <div className="group flex items-start gap-space-sm">
                      <div className="w-10 h-10 bg-surface-container flex items-center justify-center shrink-0 text-primary-container">
                        <span className="material-symbols-outlined">alternate_email</span>
                      </div>
                      <div>
                        <span className="font-label-technical text-label-technical text-outline uppercase block">
                          Email Directo Institucional
                        </span>
                        <a
                          className="font-headline-sm text-headline-sm text-primary hover:text-primary-container transition-colors pt-0.5 block"
                          href="mailto:hello@digitafrika.com"
                        >
                          hello@digitafrika.com
                        </a>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Recepção executiva monitorada em tempo real
                        </p>
                      </div>
                    </div>
                    {/* WhatsApp Hotline */}
                    <div className="group flex items-start gap-space-sm">
                      <div className="w-10 h-10 bg-surface-container flex items-center justify-center shrink-0 text-primary-container">
                        <span className="material-symbols-outlined">phone_iphone</span>
                      </div>
                      <div>
                        <span className="font-label-technical text-label-technical text-outline uppercase block">
                          Linha Directa &amp; WhatsApp
                        </span>
                        <a
                          className="font-headline-sm text-headline-sm text-primary hover:text-primary-container transition-colors pt-0.5 block"
                          href="tel:+258840000000"
                        >
                          +258 84 000 0000
                        </a>
                        <span className="inline-block font-label-technical text-label-technical text-outline uppercase bg-surface px-2 py-0.5 mt-1">
                          Linha Executiva Directa
                        </span>
                      </div>
                    </div>
                    {/* Working Hours */}
                    <div className="group flex items-start gap-space-sm">
                      <div className="w-10 h-10 bg-surface-container flex items-center justify-center shrink-0 text-primary-container">
                        <span className="material-symbols-outlined">schedule</span>
                      </div>
                      <div>
                        <span className="font-label-technical text-label-technical text-outline uppercase block">
                          Horário de Atendimento
                        </span>
                        <p className="font-headline-sm text-headline-sm text-primary pt-0.5">
                          Segunda a Sexta, 08:30 – 17:30
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Central Africa Time [CAT] // UTC+2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CINEMATIC STUDIO VISUAL & MAP INTEGRATION */}
                <div className="bg-surface-container-low overflow-hidden shadow-xl flex flex-col">
                  <div
                    className="w-full h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTbTqobDxNIVYH_GPiIObQg2ve66lppyWu9IMY6a5YiQ5rTgRkynp3oG0nPwGeiLlFEXXOd-0LgvVtEKq93IelzlgHHTDgfjpFhF7a6Uz4JcnquWRxBQWzTqxjTMMctxd81zVnXIipvo3r-wJ_Cpwpf8twDuR5GAHSi1iTWqmzsh_5UZOcn_3Dst1MTO4LHhtCYrc7rTKRbM56zdqoAni6fbyJM-qmeUvJ9uEsbiTc')",
                    }}
                  >
                    <div className="absolute inset-0 bg-surface/70 mix-blend-multiply"></div>
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-surface-container-lowest/90 px-3 py-1">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      <span className="font-label-technical text-label-technical text-primary uppercase">
                        HUB // MAPUTO LAT -25.9692 LON 32.5732
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container flex items-center justify-between">
                    <div>
                      <span className="font-label-technical text-label-technical text-outline uppercase block">
                        Presença Pan-Africana
                      </span>
                      <span className="font-label-lg text-label-lg text-primary uppercase">
                        Engenharia Local, Alcance Global
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-primary-container">public</span>
                  </div>
                </div>

                {/* SECURE DATA STATEMENT */}
                <div className="bg-surface-container-low p-space-md flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-outline text-2xl">shield</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Os seus dados são tratados com rigor e confidencialidade profissional sob acordos prévios de não-divulgação (NDA).
                  </p>
                </div>
              </aside>

              {/* RIGHT COLUMN: INTERACTIVE BESPOKE PROJECT INTAKE FORM */}
              <div className="lg:col-span-7 bg-surface-container-low p-space-lg md:p-space-xl shadow-2xl relative">
                <div className="flex items-center justify-between pb-space-lg">
                  <div className="flex items-center gap-space-xs font-label-technical text-label-technical text-primary-container uppercase">
                    <span>// REQUISIÇÃO FORMAL DE PROJECTO</span>
                  </div>
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    ETAPA 01 / 01
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="bg-surface-container-highest p-space-lg flex flex-col gap-space-xs transition-all animate-fadeIn">
                    <div className="flex items-center gap-2 text-primary-container font-headline-sm text-headline-sm uppercase">
                      <span className="material-symbols-outlined text-2xl">check_circle</span>
                      <span>Proposta Registada com Sucesso</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">
                      Obrigado pelo contacto, <strong className="text-primary">{formData.fullname}</strong>. O protocolo foi aberto e o seu dossier foi encaminhado à Direcção Executiva em Maputo. Entraremos em contacto em menos de 24 horas úteis.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullname: "",
                          email: "",
                          phone: "",
                          company: "",
                          description: "",
                        });
                        setSelectedServices([]);
                        setSelectedBudget("");
                      }}
                      className="mt-space-md self-start px-6 py-2.5 bg-surface-container text-primary hover:text-primary-container text-label-lg font-label-lg uppercase tracking-wider transition-colors"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                ) : (
                  <form className="space-y-space-lg" onSubmit={handleSubmit}>
                    {/* ROW 1: PERSONAL & PROFESSIONAL IDENTITY */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider flex justify-between"
                          htmlFor="contact-name"
                        >
                          <span>01. Nome Completo</span>
                          <span className="text-primary-container">*</span>
                        </label>
                        <input
                          className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3.5 focus:bg-surface-container-high focus:outline-none focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline/70"
                          id="contact-name"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          placeholder="Ex: Amílcar Sitoe"
                          required
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider flex justify-between"
                          htmlFor="contact-email"
                        >
                          <span>02. Email Corporativo</span>
                          <span className="text-primary-container">*</span>
                        </label>
                        <input
                          className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3.5 focus:bg-surface-container-high focus:outline-none focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline/70"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="exemplo@empresa.com"
                          required
                          type="email"
                        />
                      </div>
                    </div>

                    {/* ROW 2: TELEPHONE & COMPANY */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider flex justify-between"
                          htmlFor="contact-phone"
                        >
                          <span>03. Telefone / WhatsApp</span>
                          <span className="text-primary-container">*</span>
                        </label>
                        <input
                          className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3.5 focus:bg-surface-container-high focus:outline-none focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline/70"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+258 84 000 0000"
                          required
                          type="tel"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider flex justify-between"
                          htmlFor="contact-company"
                        >
                          <span>04. Empresa / Organização</span>
                          <span className="text-outline">Opcional</span>
                        </label>
                        <input
                          className="w-full bg-surface-container text-primary font-body-md text-body-md px-4 py-3.5 focus:bg-surface-container-high focus:outline-none focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline/70"
                          id="contact-company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nome da sua empresa"
                          type="text"
                        />
                      </div>
                    </div>

                    {/* ROW 3: SERVICE SELECTION (PILL MATRIX) */}
                    <div className="flex flex-col gap-2 pt-space-xs">
                      <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider flex justify-between">
                        <span>05. Serviço Pretendido</span>
                        <span className="text-primary-container">* Seleccione uma ou mais opções</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="service-selector">
                        {servicesList.map((service) => {
                          const isSelected = selectedServices.includes(service.id);
                          return (
                            <button
                              key={service.id}
                              className={`flex items-center justify-between p-3.5 text-left transition-all group ${
                                isSelected
                                  ? "bg-surface-container-highest text-primary-container border border-primary-container/30"
                                  : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                              }`}
                              onClick={() => toggleService(service.id)}
                              type="button"
                            >
                              <div className="flex items-center gap-2.5">
                                <span
                                  className={`w-2 h-2 transition-colors ${
                                    isSelected ? "bg-primary-container" : "bg-outline group-hover:bg-primary-container"
                                  }`}
                                ></span>
                                <span
                                  className={`font-label-lg text-label-lg uppercase ${
                                    isSelected ? "text-primary-container font-bold" : "text-on-surface group-hover:text-primary"
                                  }`}
                                >
                                  {service.label}
                                </span>
                              </div>
                              <span
                                className={`font-label-technical text-label-technical ${
                                  isSelected ? "text-primary-container font-bold" : "text-outline"
                                }`}
                              >
                                {service.code}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* ROW 4: ESTIMATED BUDGET RANGES */}
                    <div className="flex flex-col gap-2 pt-space-xs">
                      <label className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider flex justify-between">
                        <span>06. Orçamento Estimado</span>
                        <span className="text-primary-container">* Escala em Meticais (MT) / USD</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2" id="budget-selector">
                        {budgetList.map((budget) => {
                          const isSelected = selectedBudget === budget.id;
                          return (
                            <button
                              key={budget.id}
                              className={`p-3 text-left transition-all flex flex-col gap-1 ${
                                isSelected
                                  ? "bg-surface-container-highest border border-primary-container/40"
                                  : "bg-surface-container hover:bg-surface-container-high"
                              }`}
                              onClick={() => setSelectedBudget(budget.id)}
                              type="button"
                            >
                              <span className="font-label-technical text-label-technical text-outline">
                                {budget.range}
                              </span>
                              <span
                                className={`font-label-lg text-label-lg uppercase font-bold ${
                                  isSelected ? "text-primary-container" : "text-on-surface"
                                }`}
                              >
                                {budget.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* ROW 5: DETAILED PROJECT BRIEF */}
                    <div className="flex flex-col gap-1.5 pt-space-xs">
                      <label
                        className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider flex justify-between"
                        htmlFor="project-description"
                      >
                        <span>07. Descrição do Projecto</span>
                        <span className="text-primary-container">* Contexto &amp; Metas</span>
                      </label>
                      <textarea
                        className="w-full bg-surface-container text-primary font-body-md text-body-md p-4 focus:bg-surface-container-high focus:outline-none focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline/70 resize-y"
                        id="project-description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Conte-nos sobre os objectivos, prazos e a visão do seu projecto..."
                        required
                        rows={5}
                      ></textarea>
                    </div>

                    {/* SUBMIT ACTION WITH MAXIMAL KINETIC EMPHASIS */}
                    <div className="pt-space-md flex flex-col gap-space-sm">
                      <button
                        className="w-full py-5 px-8 bg-primary-container text-on-primary-fixed hover:bg-primary hover:text-surface-container-lowest font-label-lg text-label-lg uppercase tracking-widest font-extrabold flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer group disabled:opacity-50"
                        id="submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span>Processando Envio...</span>
                            <span className="material-symbols-outlined text-2xl animate-spin">refresh</span>
                          </>
                        ) : (
                          <>
                            <span>Enviar Proposta de Projecto</span>
                            <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                              north_east
                            </span>
                          </>
                        )}
                      </button>
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left pt-2">
                        <span className="font-label-technical text-label-technical text-outline uppercase tracking-wider">
                          Os seus dados são tratados com rigor e confidencialidade profissional.
                        </span>
                        <div className="flex items-center gap-1.5 font-label-technical text-label-technical text-primary-container uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                          <span>SSL 256-BIT ENCRIPTADO</span>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* FREQUENTLY ASKED STRATEGIC INQUIRIES */}
          <section className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop pb-space-2xl w-full">
            <div className="bg-surface-container-low p-space-lg md:p-space-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-space-sm pb-space-lg">
                <div>
                  <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                    // PROTOCOLOS DE ENGAJAMENTO
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary uppercase pt-1">
                    Perguntas Frequentes de Onboarding
                  </h3>
                </div>
                <span className="font-label-technical text-label-technical text-outline uppercase">
                  TRANSPARÊNCIA TOTAL // MAPUTO
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container p-space-md flex flex-col justify-between gap-space-sm">
                  <div>
                    <span className="font-label-technical text-label-technical text-primary-container uppercase block mb-1">
                      01 / PRAZOS
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-2">
                      Qual a velocidade de arranque após o contacto?
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      A resposta técnica ocorre em 24h úteis. Sessões de alinhamento estratégico e kick-off de produção são tipicamente marcadas para até 5 dias úteis após a validação da proposta.
                    </p>
                  </div>
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // TEMPO DE RESPOSTA ÁGIL
                  </span>
                </div>
                <div className="bg-surface-container p-space-md flex flex-col justify-between gap-space-sm">
                  <div>
                    <span className="font-label-technical text-label-technical text-primary-container uppercase block mb-1">
                      02 / CONFIDENCIALIDADE
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-2">
                      Assinam acordos de confidencialidade (NDA)?
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Sim. Para projectos proprietários, tecnologia restrita e relatórios de marca em incubação, firmamos acordos bilaterais de confidencialidade antes de qualquer partilha aprofundada.
                    </p>
                  </div>
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // RIGOR CORPORATIVO
                  </span>
                </div>
                <div className="bg-surface-container p-space-md flex flex-col justify-between gap-space-sm">
                  <div>
                    <span className="font-label-technical text-label-technical text-primary-container uppercase block mb-1">
                      03 / ATENDIMENTO GLOBAL
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-2">
                      Trabalham fora do fuso horário de Moçambique?
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Operamos a partir de Maputo [CAT], mas a nossa infraestrutura atende clientes em Joanesburgo, Lisboa, Londres, Luanda e mercados pan-africanos através de fluxos remotos assíncronos.
                    </p>
                  </div>
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // ALCANCE SEM FRONTEIRAS
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

