import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | DigitAfrika — Agência Criativa & Digital Independente",
  description:
    "Nascemos em Maputo para desafiar as convenções da comunicação, publicidade e tecnologia em África e no mundo. Sem intermediários, sem ruído corporativo.",
};

export default function SobrePage() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      <div className="flex flex-col w-full">
        {/* SECTION 01: HERO MANIFESTO */}
        <section className="relative w-full bg-surface-container-lowest px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl overflow-hidden">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-lg">
            {/* Eyebrow & Status Pill */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs font-label-technical text-label-technical uppercase tracking-widest text-primary-container">
                <span className="w-1.5 h-1.5 bg-primary-container"></span>
                <span>08 // MANIFESTO &amp; IDENTIDADE</span>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-low px-3 py-1 text-on-surface-variant font-label-technical text-label-technical tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span>EST. 2021 — MAPUTO, MOÇAMBIQUE</span>
              </div>
            </div>

            {/* Main Headline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-sm">
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <h1 className="font-display-lg text-display-lg-mobile md:text-headline-lg lg:text-display-lg uppercase tracking-tight text-primary leading-none">
                  UM MUNDO DE POSSIBILIDADES.
                  <br />
                  <span className="text-outline">UMA AGÊNCIA INDEPENDENTE.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface max-w-3xl leading-relaxed">
                  Nascemos em Maputo para desafiar as abordagens convencionais da comunicação, publicidade e tecnologia em África e no mundo. Sem intermediários, sem ruído corporativo: puro músculo estratégico e inovação radical.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-between gap-space-md bg-surface-container p-space-md shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                    // VETOR INSTITUCIONAL
                  </span>
                  <span className="material-symbols-outlined text-primary-container">polyline</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Construímos sistemas digitais, campanhas omnicanal e narrativas de marca desenhadas com precisão matemática e vitalidade estética afro-contemporânea.
                </p>
                <Link
                  href="/servicos"
                  className="flex items-center gap-space-xs pt-space-xs text-primary hover:text-primary-container transition-colors font-label-md text-label-md uppercase tracking-wider"
                >
                  <span>Matriz Operacional</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Atmospheric Hero Visual Panel */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md pt-space-lg">
              <div className="md:col-span-8 relative h-[360px] md:h-[480px] overflow-hidden bg-surface-container-high shadow-xl">
                <img
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  alt="Avant-garde architectural design studio in Maputo Mozambique"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgBfJIHZoWC3ZsYLOIDSm6J90bAOHFeBt3joqmH33qdzFEPSx6i-gfqweP3LNzqaJECA0lKXfrNCWrg00J-NEnFqFb0Z8S4bnBx9yLwhQEsJdviGIEjIeUFIwHLhqFsAxBxRl6XWUfmykiC-ys6Pr3cCxRUYYjcwOXH9n8r9TT0qaUXfeBDh1N_qmfFhT7IWGDYkiurvrYLII7LZU18JAssjtEF4sP8XkLwJ6cdOn9"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent flex flex-col justify-end p-space-md md:p-space-lg">
                  <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                    // COORDENADA: -25.9692° S, 32.5732° E
                  </span>
                  <p className="font-headline-sm text-headline-sm text-primary uppercase mt-1">
                    O Estúdio de Maputo: Epicentro Criativo Pan-Africano
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col justify-between gap-space-md bg-surface-container-low p-space-lg">
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-technical text-label-technical text-outline uppercase tracking-widest">
                    // MÉTRICAS DE IMPACTO
                  </span>
                  <div className="space-y-space-md">
                    <div>
                      <span className="font-display-lg text-headline-lg text-primary block leading-none">100%</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                        Independência Editorial e Operacional
                      </span>
                    </div>
                    <div>
                      <span className="font-display-lg text-headline-lg text-primary-container block leading-none">12+</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                        Mercados Africanos e Globais Alcançados
                      </span>
                    </div>
                    <div>
                      <span className="font-display-lg text-headline-lg text-primary block leading-none">99.98%</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                        Disponibilidade e Resiliência de Código
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container p-space-sm flex items-center justify-between text-on-surface font-label-technical text-label-technical uppercase">
                  <span>SISTEMA REGISTRADO</span>
                  <span className="text-primary-container font-bold">DIGIT_CORE_v2.6</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: A FILOSOFIA // REPENSAR O ÓBVIO */}
        <section className="w-full bg-surface px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Left Sticky Typography Column */}
              <div className="lg:col-span-5 flex flex-col gap-space-md lg:sticky lg:top-28">
                <div className="flex items-center gap-space-xs font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                  <span>// 01. NÚCLEO FILOSÓFICO</span>
                </div>
                <h2 className="font-display-lg text-headline-lg md:text-display-lg uppercase tracking-tight text-primary leading-tight">
                  REPENSAR
                  <br />
                  <span className="text-primary-container">O ÓBVIO.</span>
                </h2>
                <div className="w-16 h-1 bg-primary-container mt-2"></div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-space-xs">
                  Acreditamos que a criatividade africana contemporânea não precisa de validação externa nem de mimetismos superficiais. Quando ancorada em arquitectura técnica rigorosa, torna-se uma das forças culturais e de negócio mais magnéticas do planeta.
                </p>
                <div className="p-space-md bg-surface-container-high mt-space-sm">
                  <span className="font-label-technical text-label-technical text-outline uppercase block mb-1">
                    AXIOMA DIGITAFRIKA
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface italic">
                    &quot;A verdadeira vanguarda não segue templates corporativos. Ela desmantela os consensos ultrapassados para erigir novos padrões de utilidade e fascínio.&quot;
                  </p>
                </div>
              </div>

              {/* Right Manifesto Extended Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-space-lg">
                <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-xl">
                  <span className="font-label-technical text-label-technical text-outline uppercase tracking-widest">
                    // O PROBLEMA COM O STATUS QUO
                  </span>
                  <h3 className="font-headline-md text-headline-md uppercase text-primary">
                    A Fadiga do Mimetismo Digital
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Durante anos, as marcas e corporações em África foram forçadas a escolher entre dois extremos frustrantes: grandes agências multinacionais ancoradas em burocracias pesadas e templates ocidentais descontextualizados, ou pequenos fornecedores fragmentados incapazes de sustentar infraestruturas digitais de escala crítica.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Recusamos essa dicotomia. A DigitAfrika nasceu como um estúdio de acção directa: arquitectos, estrategas e engenheiros que dialogam à mesa sem barreiras burocráticas, fundindo o dinamismo cultural de Moçambique com a excelência técnica exigida pelos maiores mercados do mundo.
                  </p>
                </div>

                {/* Secondary Image Anchor */}
                <div className="relative h-[280px] bg-surface-container overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    alt="Macro view of custom code editor with abstract African geometry"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNiPGgaZLg14yqrGf3uoigJkMG64uZ9N8LzXlOL-BMwpPsFcWgexauOOGOI-vir9P8IvZt--DXpWWbVRjtHqUn61-CSfh_PohbiT_4lWciK1IcPLj6mxo9DMj-eT8t7tN7JXnjdM0osDULXkE37zbDpb-JqdEhN3RTq8U_KiIa4IoISn61ouZSCsLn9OzL-P1ar-gaT-22YRXGwJbR7WiCEvuTL17hUiYyg5g76yVV"
                  />
                  <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-technical text-label-technical text-primary uppercase">
                    SÍNTESE // CÓDIGO FONTE &amp; IDENTIDADE CULTURAL
                  </div>
                </div>

                <div className="bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-xl">
                  <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                    // A RESPOSTA DIGITAFRIKA
                  </span>
                  <h3 className="font-headline-md text-headline-md uppercase text-primary">
                    Engenharia de Impacto Descomunal
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Não fazemos comunicação para preencher calendários vazios de redes sociais nem escrevemos software descartável. Desenvolvemos ecossistemas que geram tração imediata, fidelização irrevogável e rentabilidade demonstrável para clientes ambiciosos.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="p-space-sm bg-surface-container">
                      <span className="material-symbols-outlined text-primary-container mb-1">offline_bolt</span>
                      <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-1">Velocidade Direta</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Linha direta entre os criadores e os decisores da sua organização. Sem filtros esterilizantes.
                      </p>
                    </div>
                    <div className="p-space-sm bg-surface-container">
                      <span className="material-symbols-outlined text-primary-container mb-1">hub</span>
                      <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-1">Visão Integrada</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Design, publicidade e backend nascem do mesmo plano director estratégico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: POSICIONAMENTO // DUPLO PILAR ESTRATÉGICO */}
        <section className="w-full bg-surface-container-lowest px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div>
                <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-xs">
                  // 02. ARQUITETURA DE VALOR
                </span>
                <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
                  O NOSSO POSICIONAMENTO
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                A convergência singular entre independência radical e alcance continental sem concessões à mediocridade.
              </p>
            </div>

            {/* Bento Grid de Posicionamento */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
              {/* Bloco 1: Agência Independente */}
              <div className="bg-surface-container p-space-xl flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                <div className="flex flex-col gap-space-md relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                      ESTRUTURA INDEPENDENTE
                    </span>
                    <span className="font-headline-sm text-headline-sm text-outline font-bold">01</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg uppercase text-primary leading-tight">
                    AGÊNCIA CRIATIVA &amp; DIGITAL INDEPENDENTE
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Sem redes corporativas multinacionais a ditar prioridades ou impor fórmulas pré-fabricadas. A nossa fidelidade é exclusivamente com o projeto, com a eficácia do resultado e com a criação de relevância tangível.
                  </p>
                  <div className="space-y-space-xs pt-space-sm font-body-sm text-body-sm text-on-surface">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>
                      <span>Zero camadas burocráticas intermediárias e tomada de decisão ágil.</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>
                      <span>Alocação directa de seniores em todos os projectos estratégicos.</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>
                      <span>Liberdade para inovar em formatos e linguagens proprietárias.</span>
                    </div>
                  </div>
                </div>
                <div className="mt-space-xl pt-space-md flex items-center justify-between text-on-surface-variant font-label-technical text-label-technical uppercase">
                  <span>MODELO: BOUTIQUE DE ALTA ENERGIA</span>
                  <span className="material-symbols-outlined text-primary-container">lock_open</span>
                </div>
              </div>

              {/* Bloco 2: Raízes Locais, Padrões Globais */}
              <div className="bg-surface-container-high p-space-xl flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                <div className="flex flex-col gap-space-md relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                      ALCANCE &amp; ORIGEM
                    </span>
                    <span className="font-headline-sm text-headline-sm text-outline font-bold">02</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg uppercase text-primary leading-tight">
                    RAÍZES LOCAIS, PADRÕES GLOBAIS
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Operamos a partir de Maputo, no cruzamento entre as dinâmicas pulsantes da África Austral e os mais exigentes parâmetros internacionais de qualidade tecnológica e direcção artística.
                  </p>
                  <div className="space-y-space-xs pt-space-sm font-body-sm text-body-sm text-on-surface">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>
                      <span>Compreensão granular dos mercados da CPLP e África Subsahariana.</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>
                      <span>Padrões de engenharia em conformidade com normas globais (ISO, OWASP).</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>
                      <span>Polinização de ideias locais exportadas para contextos mundiais.</span>
                    </div>
                  </div>
                </div>
                <div className="mt-space-xl pt-space-md flex items-center justify-between text-on-surface-variant font-label-technical text-label-technical uppercase">
                  <span>ESCALA: PAN-AFRICANA &amp; DIÁSPORA</span>
                  <span className="material-symbols-outlined text-primary-container">public</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: OS 4 PILARES DA ABORDAGEM DIGITAFRIKA */}
        <section className="w-full bg-surface px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                // 03. O NOSSO CÓDIGO METODOLÓGICO
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
                OS 4 PILARES DA ABORDAGEM
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Princípios inegociáveis que regem cada estratégia de marca, cada campanha publicitária e cada sprint de software que concebemos.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Pilar 1 */}
              <div className="bg-surface-container p-space-lg flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300 shadow-lg">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase font-bold">
                      PILAR // 01
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                      analytics
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-primary leading-snug">
                    Rigor Estratégico
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Nenhuma linha de design ou código sem fundamentação em dados e contexto comercial real. O visual bonito sem fundamentação económica é apenas decoração fútil.
                  </p>
                </div>
                <div className="pt-space-md font-label-technical text-label-technical text-outline uppercase flex items-center gap-1">
                  <span>MÉTRICA DE DECISÃO</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>

              {/* Pilar 2 */}
              <div className="bg-surface-container p-space-lg flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300 shadow-lg">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase font-bold">
                      PILAR // 02
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                      fingerprint
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-primary leading-snug">
                    Autenticidade Radical
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Não copiamos tendências ocidentais genéricas; traduzimos a identidade contemporânea com sofisticação e irreverência. A nossa assinatura é inconfundível.
                  </p>
                </div>
                <div className="pt-space-md font-label-technical text-label-technical text-outline uppercase flex items-center gap-1">
                  <span>IDENTIDADE PRÓPRIA</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>

              {/* Pilar 3 */}
              <div className="bg-surface-container p-space-lg flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300 shadow-lg">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase font-bold">
                      PILAR // 03
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                      terminal
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-primary leading-snug">
                    Excelência em Engenharia
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Software robusto e resiliente que não quebra sob escala ou pressão repentina de tráfego. Escrevemos código limpo, documentado e pronto para o crescimento contínuo.
                  </p>
                </div>
                <div className="pt-space-md font-label-technical text-label-technical text-outline uppercase flex items-center gap-1">
                  <span>RESILIÊNCIA NATIVA</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>

              {/* Pilar 4 */}
              <div className="bg-surface-container p-space-lg flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300 shadow-lg">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase font-bold">
                      PILAR // 04
                    </span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors">
                      update
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-primary leading-snug">
                    Compromisso com o Futuro
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Desenhar experiências duradouras que constroem relevância ao longo de anos, e não modismos efémeros que caducam no trimestre seguinte.
                  </p>
                </div>
                <div className="pt-space-md font-label-technical text-label-technical text-outline uppercase flex items-center gap-1">
                  <span>LONGEVIDADE OPERACIONAL</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: ÁREAS DE FOCO & MATRIZ DE DISCIPLINAS */}
        <section className="w-full bg-surface-container-lowest px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div>
                <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest block mb-space-xs">
                  // 04. TOPOGRAFIA OPERACIONAL
                </span>
                <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
                  ÁREAS DE FOCO &amp; DISCIPLINAS
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                O diagrama sintético de convergência entre os três motores fundamentais da DigitAfrika.
              </p>
            </div>

            {/* Diagrama Sintético Tripartido com SVG Central */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              {/* Painel Esquerdo: Marketing & Publicidade */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container p-space-md">
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase">
                      PILARES DE DISPONIBILIDADE
                    </span>
                    <span className="font-label-technical text-label-technical text-outline">DISC.01</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-xs">
                    Marketing Estratégico
                  </h4>
                  <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                    <li>• Posicionamento de Marca Pan-Africana</li>
                    <li>• Análise de Comportamento do Consumidor</li>
                    <li>• Estratégia de Conteúdo e Influência</li>
                    <li>• Growth Hacking &amp; Funis de Aquisição</li>
                  </ul>
                </div>
                <div className="bg-surface-container p-space-md">
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase">
                      PILARES DE DISPONIBILIDADE
                    </span>
                    <span className="font-label-technical text-label-technical text-outline">DISC.02</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-xs">
                    Publicidade &amp; Criação
                  </h4>
                  <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                    <li>• Identidades Visuais Neo-Brutalistas</li>
                    <li>• Campanhas 360° Omnicanal</li>
                    <li>• Direcção de Arte &amp; Redação Publicitária</li>
                    <li>• Produção Audiovisual e Motion 3D</li>
                  </ul>
                </div>
              </div>

              {/* Centro: Diagrama SVG de Intersecção Sinérgica */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-space-lg bg-surface-container-low min-h-[380px] shadow-xl">
                <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full text-outline" fill="none" viewBox="0 0 200 200">
                    {/* Triângulo de Ligação */}
                    <polygon
                      fill="none"
                      opacity="0.4"
                      points="100,25 175,155 25,155"
                      stroke="currentColor"
                      strokeDasharray="4 4"
                      strokeWidth="1.5"
                    />
                    {/* Nó Marketing */}
                    <circle cx="100" cy="25" fill="#1f1f23" r="16" stroke="#bef500" strokeWidth="2" />
                    <text
                      fill="#bef500"
                      fontFamily="Space Grotesk"
                      fontSize="7"
                      fontWeight="bold"
                      textAnchor="middle"
                      x="100"
                      y="28"
                    >
                      MKT
                    </text>
                    {/* Nó Publicidade */}
                    <circle cx="175" cy="155" fill="#1f1f23" r="16" stroke="#e3e2e6" strokeWidth="2" />
                    <text
                      fill="#e3e2e6"
                      fontFamily="Space Grotesk"
                      fontSize="7"
                      fontWeight="bold"
                      textAnchor="middle"
                      x="175"
                      y="158"
                    >
                      PUB
                    </text>
                    {/* Nó Programação */}
                    <circle cx="25" cy="155" fill="#1f1f23" r="16" stroke="#e3e2e6" strokeWidth="2" />
                    <text
                      fill="#e3e2e6"
                      fontFamily="Space Grotesk"
                      fontSize="7"
                      fontWeight="bold"
                      textAnchor="middle"
                      x="25"
                      y="158"
                    >
                      DEV
                    </text>
                    {/* Epicentro Núcleo DigitAfrika */}
                    <circle cx="100" cy="112" fill="#bef500" r="28" />
                    <text
                      fill="#151f00"
                      fontFamily="Syne"
                      fontSize="8"
                      fontWeight="800"
                      textAnchor="middle"
                      x="100"
                      y="110"
                    >
                      DIGIT
                    </text>
                    <text
                      fill="#151f00"
                      fontFamily="Space Grotesk"
                      fontSize="6"
                      fontWeight="600"
                      textAnchor="middle"
                      x="100"
                      y="120"
                    >
                      AFRIKA
                    </text>
                    {/* Conexões Centrais */}
                    <line stroke="#bef500" strokeWidth="1.5" x1="100" x2="100" y1="41" y2="84" />
                    <line stroke="#bef500" strokeWidth="1.5" x1="161" x2="124" y1="145" y2="122" />
                    <line stroke="#bef500" strokeWidth="1.5" x1="39" x2="76" y1="145" y2="122" />
                  </svg>
                </div>
                <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest mt-space-sm text-center">
                  CONVERGÊNCIA TRÍPLICE
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-xs mt-1">
                  A intersecção onde a imaginação crua encontra a robustez do software executável.
                </span>
              </div>

              {/* Painel Direito: Engenharia & Sistemas */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container p-space-md">
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase">
                      PILARES DE DISPONIBILIDADE
                    </span>
                    <span className="font-label-technical text-label-technical text-outline">DISC.03</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-xs">
                    Engenharia de Software
                  </h4>
                  <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                    <li>• Plataformas Web de Alto Rendimento</li>
                    <li>• Aplicações Móveis e PWAs</li>
                    <li>• Arquiteturas Cloud &amp; Microsserviços</li>
                    <li>• APIs RESTful, GraphQL &amp; Integrações</li>
                  </ul>
                </div>
                <div className="bg-surface-container p-space-md">
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-technical text-label-technical text-primary-container uppercase">
                      PILARES DE DISPONIBILIDADE
                    </span>
                    <span className="font-label-technical text-label-technical text-outline">DISC.04</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-space-xs">
                    Design Systems UI/UX
                  </h4>
                  <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                    <li>• Interfaces Digitais Complexas</li>
                    <li>• Bibliotecas de Componentes Modulares</li>
                    <li>• Auditorias de Acessibilidade &amp; UX</li>
                    <li>• Prototipagem Rápida e Validação Real</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: INFORMAÇÃO INSTITUCIONAL & GOVERNANÇA */}
        <section className="w-full bg-surface px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-widest">
                // 05. DADOS CORPORATIVOS &amp; CONFORMIDADE
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
                TRANSPARÊNCIA INSTITUCIONAL
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                A idoneidade formal que sustenta contratos com empresas multinacionais, governos e líderes de ecossistema.
              </p>
            </div>

            {/* Institutional Index Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // REGISTRO CORPORATIVO
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary uppercase">Razão Social</span>
                  <p className="font-body-md text-body-md text-on-surface">DigitAfrika Digital Solutions Lda.</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Sociedade por Quotas legalmente constituída ao abrigo da legislação de Moçambique.
                  </p>
                </div>
                <div className="pt-space-md text-outline font-label-technical text-label-technical uppercase">
                  REGISTRO COMERCIAL: RC-MPM-2021-B-8491
                </div>
              </div>

              <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // IDENTIFICAÇÃO FISCAL
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary uppercase">NUIT &amp; Tributação</span>
                  <p className="font-body-md text-body-md text-on-surface">NUIT: 401 289 741</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Conformidade fiscal integral perante a Autoridade Tributária de Moçambique (AT).
                  </p>
                </div>
                <div className="pt-space-md text-primary-container font-label-technical text-label-technical uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary-container"></span>
                  <span>STATUS: CERTIDÃO EM DIA</span>
                </div>
              </div>

              <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // SEDE &amp; OPERAÇÃO
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary uppercase">Localização Física</span>
                  <p className="font-body-md text-body-md text-on-surface">Av. Julius Nyerere, Polana Cimento</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Maputo, Moçambique [CAT — Central Africa Time]. Operação híbrida com rede global.
                  </p>
                </div>
                <div className="pt-space-md text-outline font-label-technical text-label-technical uppercase">
                  FUSO HORÁRIO: UTC+02:00
                </div>
              </div>

              <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // ACREDITAÇÕES &amp; PADRÕES
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary uppercase">Engenharia e Dados</span>
                  <p className="font-body-md text-body-md text-on-surface">OWASP Top 10 Compliance</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Práticas de segurança de dados alinhadas ao RGPD e aos normativos de privacidade africanos.
                  </p>
                </div>
                <div className="pt-space-md text-primary-container font-label-technical text-label-technical uppercase">
                  AUDITORIA CONTÍNUA
                </div>
              </div>

              <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // DIRETORIA EXECUTIVA
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary uppercase">Governança Criativa</span>
                  <p className="font-body-md text-body-md text-on-surface">Liderança Própria e Plural</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Equipa multidisciplinar com experiência prévia em agências globais e scale-ups tecnológicas.
                  </p>
                </div>
                <div className="pt-space-md text-outline font-label-technical text-label-technical uppercase">
                  100% MOÇAMBICANA &amp; INDEPENDENTE
                </div>
              </div>

              <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-technical text-label-technical text-outline uppercase">
                    // POLÍTICA DE CONTRATAÇÃO
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary uppercase">Parcerias &amp; NDA</span>
                  <p className="font-body-md text-body-md text-on-surface">Acordos de Confidencialidade</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Proteção rigorosa de propriedade intelectual e sigilo absoluto para clientes corporativos.
                  </p>
                </div>
                <div className="pt-space-md text-outline font-label-technical text-label-technical uppercase">
                  PROTOCOLO JURÍDICO BLINDADO
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07: CTA FINAL CONVOCATÓRIO */}
        <section className="w-full bg-surface-container-lowest px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl">
          <div className="max-w-[1600px] mx-auto bg-primary-container p-space-lg md:p-space-xl lg:p-space-2xl text-on-primary-fixed shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg relative z-10">
              <div className="flex flex-col gap-space-sm max-w-3xl">
                <span className="font-label-technical text-label-technical text-on-primary uppercase tracking-widest font-bold">
                  // 06. O PRÓXIMO PASSO
                </span>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg lg:text-display-lg uppercase tracking-tight text-on-primary-fixed leading-none">
                  QUER FAZER PARTE DESTA VISÃO?
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-fixed/80 max-w-2xl leading-relaxed mt-2">
                  Estamos sempre à procura de líderes corporativos destemidos, fundadores de alto crescimento e marcas que se recusam a aceitar o comum. A nossa mesa de trabalho está aberta.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
                <Link
                  className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-surface text-primary font-label-lg text-label-lg font-bold uppercase tracking-wider hover:bg-surface-container-high transition-all shadow-xl"
                  href="/contactos"
                >
                  <span>Vamos Conversar</span>
                  <span className="material-symbols-outlined text-xl">north_east</span>
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 px-8 py-5 border border-on-primary-fixed/40 text-on-primary-fixed font-label-lg text-label-lg uppercase tracking-wider hover:bg-on-primary-fixed/10 transition-all"
                  href="/portfolio"
                >
                  <span>Ver Portfólio</span>
                </Link>
              </div>
            </div>
            {/* Watermark Background Decorative Typography */}
            <div className="absolute -bottom-10 -right-10 pointer-events-none select-none opacity-10">
              <span className="font-display-xl text-[180px] leading-none uppercase font-extrabold text-on-primary-fixed">
                AFRIKA
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

