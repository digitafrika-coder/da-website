# PROJECT_LOG.md — REGISTO CENTRAL DE CONTINUIDADE E SINCRONIZAÇÃO
**Projecto:** Website Institucional DigitAfrika  
**Repositório:** `C:\Users\HP\Documents\JC\DigitAfrika\DigitAfrika-Website`  
**Data de Criação:** 2026-11-05  
**Última Actualização:** 2026-11-05 (Conclusão do Refinamento da Hero v1.3.6)  
**Objectivo:** Garantir alinhamento contínuo, preservação de contexto técnico e consistência operacional entre ferramentas (Antigravity, Claude Code e intervenções manuais).

---

## Registo de Alterações Recentes

- **2026-11-06 — Conexão Supabase 100% Validada e Operacional:**
  - Configurado o ficheiro `.env.local` na raiz com as chaves oficiais de publicação (`NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
  - Protegido o repositório com criação de `.gitignore` para bloquear fuga de credenciais para o Git.
  - Sanitização de URLs em `src/lib/supabase/client.ts` para evitar erros de barra ou sufixos `/rest/v1`.
  - Conexão e leitura directa à tabela `quote_requests` testadas com sucesso (código 200 OK).
  - Recarregamento automático de variáveis no servidor Next.js confirmado.
- **2026-11-06 — Implementação de Melhorias UX/UI na Gráfica e Estúdio:**
  - **Estúdio (`/studio`):** Integrado envio real de orçamentos via Formspree (`digitafrika@gmail.com`) com tratamento de estados (`isSubmitting`, `submitError`, feedback de protocolo); adicionada nota de estimativa indicativa de preços e indicação de IVA; adicionado botão para remoção/substituição de logotipo no upload; corrigido texto técnico para "MOCKUP INTERACTIVO EM TEMPO REAL // ACTIVO"; removidos halos/glows verdes proibidos no botão de submissão e no modal de sucesso.
  - **Gráfica & Serigrafia (`/servicos/grafica`):** Substituído indicador arbitrário "88.4% Disponível" por "Capacidade Operacional: Consultar Disponibilidade"; adicionado `aria-label` e etiqueta "Estúdio" ao botão de paleta nos cards do catálogo; refinada a nomenclatura para "Merchandising Corporativo", "HOT STAMPING FOIL" e remoção da menção a "Ecrã 11" nos botões e títulos de simulação técnica.
- **2026-11-06 — Padronização Visual Global & Eliminação de Halos (DESIGN.md PRD):**
  - Padronização rigorosa do verde de interface `#BEF500` e preservação do verde de marca `#98FB06` no logo.
  - Remoção cirúrgica de todas as classes de glow verde difuso (`shadow-[0_0_...px_#bef500]`, `shadow-[0_0_...px_rgba(190,245,0,...)]`, etc.) em botões, cartões, títulos e barras de progresso em todo o site (`Header`, `Footer`, `MobileNav`, `Button`, `Badge`, `page.tsx`, `contactos`, `portfolio`, `servicos`, `marketing`, `publicidade`, `programacao`, `sobre`).
  - Botões de CTA agora usam alto contraste sólido e preenchimento puro, sem halos difusos, respeitando o DESIGN.md com 0 erros de compilação TypeScript.

- **2026-11-06 — Navegação do Header:** “Portfólio” e “Sobre” passam a abrir sempre `/portfolio` e `/sobre`, inclusive quando acionados na Home, em vez de fazer scroll para secções internas.
- **2026-11-05 — Asset da Hero optimizado:** substituído `public/images/hero-sculpture.png` pela exportação Web fornecida pelo utilizador. O ficheiro passou de 1.993.777 bytes para 465.542 bytes (redução aproximada de 77%). Mantidos caminho, dimensões de layout e design.
- **2026-11-05 — Navegação do Header:** o item “Serviços” da pílula agora aponta sempre para `/servicos`, inclusive na Home, em vez de fazer scroll para `#triad`.
- **2026-11-05 — PRD de Design:** actualizado `DESIGN.md` com a lei visual do site: papéis oficiais da paleta (incluindo `#98FB06` para o logo e `#BEF500` para UI), limite de uso do verde, regras para luz/glow/sombras e critérios de contraste e legibilidade. As regras novas prevalecem sobre orientações legadas incompatíveis.
- **2026-11-05 — Refinamento visual da Hero:** removida a classe `drop-shadow` da escultura em `src/app/page.tsx` para eliminar o halo escuro em redor da cabeça. Mantido o tamanho aprovado (`max-h-[68vh]`) e as restantes iluminações de fundo. Alteração autorizada pelo utilizador.

## 1. Estado Actual do Projecto

- **Fase Actual:** Conclusão bem-sucedida de **TODAS AS 5 FASES CENTRAIS** (11 Ecrãs Oficiais do Protótipo Stitch 100% Implementados e Integrados).
- **Páginas Estáveis e Validadas:**
  1. `/` (Home): 10 secções oficiais do protótipo Stitch aprovado (`code.html` / `screen.png`).
  2. `/servicos` (Ecrã 02: `02_servi_os_digitafrika`): Visão panorâmica dos três pilares, arquitetura de valor industrial e etapas de actuação estruturada.
  3. `/servicos/marketing` (Ecrã 03: `03_marketing_digitafrika`): Os 6 núcleos de execução, análise de ROI, selector interactivo de maturidade/diagnóstico (tracção, posicionamento, escala) e agendamento executivo.
  4. `/servicos/publicidade` (Ecrã 04: `04_publicidade_digitafrika`): Os 7 núcleos de publicidade, cinema/motion 3D, direcção de arte cultural, selector interactivo de âmbito de campanha com contagem dinâmica e CTA de contacto.
  5. `/servicos/programacao` (Ecrã 05: `05_programa_o_digitafrika`): Os 7 pilares técnicos de engenharia, sistemas web/mobile críticos, terminal de infraestrutura, diferencial de robustez e formulário para desafios complexos.
  6. `/portfolio` (Ecrã 06: `06_portf_lio_digitafrika`): Galeria editorial Bento com 7 projectos reais e filtro dinâmico por categoria em React.
  7. `/portfolio/[slug]` (Ecrã 07: `07_detalhe_do_projecto_digitafrika`): Estudo de caso canónico para `kuvula` com métricas reais, galeria de sistemas e fluxo de conversão.
  8. `/sobre` (Ecrã 08: `08_sobre_n_s_digitafrika`): Manifesto de independência, dados corporativos (RC, NUIT, OWASP, ISO), matriz de disciplinas com diagrama sinérgico em SVG e diretoria.
  9. `/contactos` (Ecrã 09: `09_contactos_digitafrika`): Hub avançado de contacto com selector interactivo de serviços, faixas de orçamento, formulário blindado por NDA e FAQ de onboarding.
  10. `/servicos/grafica` (Ecrã 10: `10_gr_fica_e_serigrafia_digitafrika`): Matriz de produtos industriais, catálogo filtrável com 8 categorias, fichas técnicas modais, guia de acabamentos especiais e galeria real de produção.
  11. `/studio` (Ecrã 11: `11_est_dio_de_personaliza_o_digitafrika`): Estúdio de personalização interactivo paramétrico com 3 abas (Modelo, Arte, Cotação), viewport 3D realista, seletor de cores, upload de logo, tipografia dinâmica e cálculo de lote com desconto progressivo.
- **Servidor Local & Validação:**
  - Typecheck TypeScript (`tsc --noEmit`) com 0 erros em todas as rotas e componentes.
  - Pílula de Navegação aprovada activa no Header (`Início`, `Serviços`, `Portfólio`, `Gráfica & Serigrafia`, `Sobre`).

---

## 2. Arquitectura e Decisões Técnicas Importantes

1. **Stack Tecnológica:**
   - **Framework:** Next.js 15 (App Router, React 19).
   - **Estilos:** Tailwind CSS 3.4 com tokens exactos do Stitch (cores `surface-*`, `primary-container` `#bef500`, `kinetic-lime` `#C6FF00`, `canvas-deep` `#0B0C0F`).
   - **Tipografia:** Fontes editoriais `Syne` (Headings/Display) e `Space Grotesk` (Body/Labels/Mono), combinadas com `Material Symbols Outlined` para ícones do sistema.
   - **Backend / Database:** Supabase (`@supabase/supabase-js`) configurado com esquema de orçamentos e contactos.
2. **Resolução de Imports & Módulos:**
   - Ficheiro de configuração `next.config.mjs` configurado com alias Webpack explícito para `@/*` -> `./src/*`.
   - `unoptimized: true` activo em imagens para suportar de imediato os assets remotos e locais sem bloqueios de CDN.
3. **Gestão de Fontes e Ícones:**
   - Carregamento de fontes e ícones via tags `<link rel="stylesheet">` com `preconnect` no `<head>` do `src/app/layout.tsx`. Esta abordagem elimina dependência de rede durante o `next build` no ambiente isolado (sandbox), garantindo builds determinísticos sem erros `ENOTFOUND fonts.googleapis.com`.
4. **Preservação de Design & Telas Estáveis:**
   - **Regra de ouro:** Nenhuma tela aprovada (ex.: Home `/`) é alterada sem solicitação explícita.
   - Proibição de regras CSS globais destrutivas (ex.: remoção de `border-radius: 0px !important`), garantindo que pílulas flutuantes, badges arredondados e cartões do Stitch mantenham suas curvaturas oficiais (`rounded-full`, `rounded-xl`, etc.).
5. **Conversão de Scripts do Protótipo em React State:**
   - Widgets interativos originários do Stitch que utilizavam scripts em vanilla JS foram transformados em hooks idiomáticos do React (`useState` para estágios de diagnóstico em Marketing e para escopos de campanha em Publicidade), preservando as classes de estilo exatas sem manipulação direta e frágil do DOM.

---

## 3. Tarefas em Curso & Concluídas

- [x] **Fase 1:** Reposição integral e validação da Home pixel-perfect com as 10 secções oficiais do protótipo Stitch.
- [x] **Fase 2:** Implementação e validação do Núcleo de Serviços:
  - [x] `/servicos` (Ecrã 02: `02_servi_os_digitafrika`)
  - [x] `/servicos/marketing` (Ecrã 03: `03_marketing_digitafrika`)
  - [x] `/servicos/publicidade` (Ecrã 04: `04_publicidade_digitafrika`)
  - [x] `/servicos/programacao` (Ecrã 05: `05_programa_o_digitafrika`)
- [x] **Fase 3:** Portfólio & Detalhe de Estudo de Caso:
  - [x] `/portfolio` (Ecrã 06: `06_portf_lio_digitafrika`)
  - [x] `/portfolio/[slug]` (Ecrã 07: `07_detalhe_do_projecto_digitafrika` com slug canónico `kuvula`)
  - [x] Pílula de navegação central oficial (`Início`, `Serviços`, `Portfólio`, `Gráfica & Serigrafia`, `Sobre`)
- [x] **Fase 4:** Institucional & Contactos:
  - [x] `/sobre` (Ecrã 08: `08_sobre_n_s_digitafrika`)
  - [x] `/contactos` (Ecrã 09: `09_contactos_digitafrika` com formulário reactivo NDA e FAQ)
- [x] **Fase 5:** Gráfica e Estúdio Interactivo MVP:
  - [x] `/servicos/grafica` (Ecrã 10: `10_gr_fica_e_serigrafia_digitafrika` com catálogo de 8 categorias e modal)
  - [x] `/studio` (Ecrã 11: `11_est_dio_de_personaliza_o_digitafrika` com configurador 3D para Camisetas, Polos, Canecas, Sacolas e Cartões)
- [x] **Fase 6:** Validação Final de Produção:
  - [x] Compilação estática `next build` com 16 páginas estáticas pré-renderizadas geradas com sucesso (código 0).
  - [x] Validação TypeScript `tsc --noEmit` com 0 erros.

---

## 4. Tarefas Pendentes (Roadmap Geral)

- **Fase 3: Portfólio & Detalhe de Estudo de Caso:**
  - Galeria geral interactiva `/portfolio` (Ecrã 06: `06_portf_lio_digitafrika`).
  - Template de Estudo de Caso `/portfolio/[slug]` com Kuvula como referência principal (Ecrã 07: `07_detalhe_do_projecto_digitafrika`).
- **Fase 4: Institucional & Contactos:**
  - Sobre a agência `/sobre` (Ecrã 08: `08_sobre_n_s_digitafrika`).
  - Hub avançado de contacto `/contactos` (Ecrã 09: `09_contactos_digitafrika`).
- **Fase 5: Gráfica e Estúdio Interactivo MVP:**
  - Catálogo de Gráfica & Serigrafia `/servicos/grafica` (Ecrã 10: `10_gr_fica_e_serigrafia_digitafrika`).
  - Estúdio Interactivo de Personalização `/studio` (Ecrã 11: `11_est_dio_de_personaliza_o_digitafrika`) cobrindo os 5 produtos MVP (Camisetas, Polos, Canecas, Sacolas, Cartões).
- **Fase 6: Polimento e Otimização:**
  - Metatags dinâmicas OpenGraph/Twitter.
  - Acessibilidade WCAG, performance Lighthouse e refinamento de micro-interacções.

---

## 5. Problemas Conhecidos

1. **Ausência de Git CLI no Ambiente:**
   - O comando `git` não se encontra instalado no `PATH` do sistema operativo da máquina. As actualizações de código devem ser preservadas localmente e geridas com rigor através deste ficheiro de log até que o Git seja disponibilizado ou instalado.
2. **Ambiente Sandbox Windows (EPERM em `realpath`):**
   - O Node.js no Windows sob restrições de sandbox falha chamadas a `fs.promises.realpath` em bibliotecas que validam dependências (Next.js dependency checks). Solução implementada com fallback em `has-necessary-dependencies.js`.
3. **Bloqueio de Ficheiros `.next` por Processos Concorrentes:**
   - No Windows, se uma instância do servidor estiver aberta ou ficheiros em cache estiverem retidos, a criação de pastas no `.next` pode emitir EPERM. A limpeza da directoria `.next` (`Remove-Item -Recurse -Force .next`) antes de uma compilação de produção resolve a retenção.

---

## 6. Histórico Cronológico de Actualizações

### [2026-11-05] — Implementação da FASE 2: Núcleo de Serviços Completo
- **Agente:** Antigravity.
- **Tarefa Executada:** Criação integral das 4 páginas de serviços com base nos ecrãs 02 a 05 do protótipo Stitch, preservando integralmente todas as telas aprovadas anteriormente sem toques desnecessários.
- **Ficheiros Criados:**
  - `src/app/servicos/page.tsx` (Ecrã 02): Hub geral com Bento grid dos três motores, arquitectura industrial e etapas de actuação.
  - `src/app/servicos/marketing/page.tsx` (Ecrã 03): 6 núcleos de marketing, selector reactivo de maturidade/diagnóstico comercial e agendamento de auditoria.
  - `src/app/servicos/publicidade/page.tsx` (Ecrã 04): 7 núcleos de publicidade/arte, selector interactivo de âmbito de campanha com contagem dinâmica e CTA de criação.
  - `src/app/servicos/programacao/page.tsx` (Ecrã 05): 7 pilares técnicos de infraestrutura, terminal de sistema micro-frontend e formulário técnico.
- **Ficheiros Preservados Sem Alteração:**
  - `src/app/page.tsx` (Home): 100% preservada e intacta.
  - `src/components/layout/Header.tsx`, `Footer.tsx`, `layout.tsx`, `globals.css`, `tailwind.config.ts`: intactos.
- **Problemas Resolvidos:**
  - Ajuste de atributos SVG JSX: `preserveaspectratio` -> `preserveAspectRatio`, `viewbox` -> `viewBox`.
  - Tratamento de scripts inline do Stitch convertidos em componentes React com `useState`.
- **Estado Final:** Sucesso total. Typecheck TypeScript com 0 erros. Build estático com código de saída 0 gerando todas as rotas. Verificação HTTP com status 200 OK em todas as 5 rotas.

---

## 7. Histórico de Tentativas Falhadas e Conclusões

1. **Tentativa 1: Simplificação e Fusão Prematura da Home com o Studio**
   - *Ferramenta:* Antigravity (sessão inicial).
   - *O que falhou:* A Home foi simplificada e foram enxertados componentes prematuros do estúdio interactivo.
   - *Conclusão / Regra:* A Home do projecto é sagrada e reflecte 100% o protótipo aprovado (`code.html`).

2. **Tentativa 2: Uso de `next/font/google` no `layout.tsx`**
   - *Ferramenta:* Antigravity.
   - *O que falhou:* `next build` falhou com erro `getaddrinfo ENOTFOUND fonts.googleapis.com`.
   - *Conclusão / Regra:* Utilizar tags normativas `<link rel="stylesheet">` no `<head>` do `layout.tsx`.

3. **Tentativa 3: Override Global `border-radius: 0px !important` no `globals.css`**
   - *Ferramenta:* Antigravity (sessão inicial).
   - *O que falhou:* Quebrou botões arredondados e a pílula de navegação.
   - *Conclusão / Regra:* Respeitar as classes oficiais do Tailwind do Stitch.

4. **Tentativa 4: Execução do `next.config.ts` no Windows Sandbox**
   - *Ferramenta:* Antigravity.
   - *O que falhou:* SWC falhou com `failed to canonicalize jsc.baseUrl`.
   - *Conclusão / Regra:* Utilizar `next.config.mjs` nativo ESM.

---

## 8. Versões Estáveis e Referências Técnicas

- **Versão Estável Actual:** `v1.3.4-hero-transparent-png-final` (Imagem PNG oficial 100% transparente `Retrato Cibernético Hero IMG2.png` integrada em `/images/hero-sculpture.png`, eliminando qualquer caixa quadrada escura; elevação total do bloco esquerdo eliminando o vazio sob o Header; Cartão Último Projecto reposicionado no ponto '4' da fita direita).
- **Entrada de Log — 2026-11-05 (Hero PNG Transparente & Alinhamento Fiel):**
  - **Ativo PNG Oficial:** Copiado o ficheiro `Retrato Cibernético Hero IMG2.png` (1.99 MB, fundo transparente nativo) para `public/images/hero-sculpture.png`. Eliminada qualquer borda ou recorte retangular escuro.
  - **Elevação do Conteúdo Esquerdo:** Reduzido o topo da secção (`pt-14`) e aplicado `-mt-10` no bloco esquerdo, eliminando o espaço vazio e aproximando o headline do Header flutuante conforme a anotação do utilizador.
  - **Reposicionamento Cirúrgico do Cartão 4:** O cartão `Último Projecto: Branding Tech Futuro` foi alocado exatamente na coordenada `4` da fita na parte inferior direita.
  - **Validação:** Typecheck TypeScript (`tsc --noEmit`) verificado com 0 erros; dev server a correr ativamente em `localhost:3000`.
- **Entrada de Log — 2026-11-05 (Implementação do Esboço da Hero):**
  - **Mapeamento Fiel dos 4 Cartões Glass:**
    1. Box 1 (Esquerda Superior - ao lado do visor): `Estratégia de Marca` -> `/servicos/marketing`
    2. Box 2 (Esquerda Média - ao lado do pescoço e fita): `Design Criativo` -> `/servicos/publicidade`
    3. Box 3 (Centro / Peito Inferior): `Último Projecto: Branding Tech Futuro` -> `/portfolio/kuvula`
    4. Box 4 (Direita Superior/Média - ao lado das aletas dobradas): `Crescimento Digital` -> `/servicos/programacao`
    - Eliminada qualquer sobreposição sobre a cabeça ou cartões perdidos no chão.
  - **Ativo de Imagem HQ Local:** Integração do ficheiro `/images/hero-sculpture-hq.jpg` com 304 KB de alta resolução e filtros `brightness-105 contrast-105` com fade suave da base.
  - **Iluminação & Contornos:** Preservados os anéis concêntricos orbitais e ativado o Radial Glow suave (fusão neon lima e violeta das fitas).
  - **Rodapé Centralizado:** Removida a string `LAT // LONG`, permitindo à pílula de métricas `85+ | 5+ | 12+ | 98%` ficar perfeitamente centralizada na barra de navegação.
  - **Validação:** Typecheck TypeScript (`tsc --noEmit`) com 0 erros; compilação em 275ms no dev server `localhost:3000`.
- **Entrada de Log — 2026-11-05 (Refinamento da Hero Section):**
  - **Elevação do Conteúdo:** Removida a barra superior de ticker redundante (`AGÊNCIA CRIATIVA & DIGITAL INDEPENDENTE...`), eliminando 100px de espaço vertical ocioso e elevando o título e a escultura 3D para protagonismo imediato acima da dobra (conforme protótipo Anexo 3).
  - **Cartões Glassmorphism:** Implementado estilo ultra-translúcido `bg-[#0B0C0F]/55 backdrop-blur-2xl border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.65)] hover:border-primary-container/60` com cantos `rounded-2xl` e conectores finos.
  - **Ramificação Equilibrada:**
    - Topo direito: `Estratégia de Marca` -> `/servicos/marketing`
    - Meio esquerdo (entre texto e escultura): `Design Criativo` -> `/servicos/publicidade`
    - Meio direito: `Crescimento Digital` -> `/servicos/programacao`
    - Base esquerda: `Último Projecto` -> `/portfolio/kuvula`
  - **Narrativa Expandida:** Incluída a menção a "produção gráfica" no parágrafo principal da Hero.
  - **Conversão Direta:** Botão principal *"Vamos Trabalhar Juntos"* direciona agora para `/contactos`.
  - **Barra de Rodapé da Hero Unificada:** Integrados na mesma linha horizontal o indicador de scroll `[↓] ↓ ROLE P/ EXPLORAR`, as métricas de destaque `85+ PROJECTOS · 5+ ANOS EXP. · 12+ MERCADOS · 98% SATISFAÇÃO` centralizadas numa pílula translúcida e as coordenadas de Maputo com o mouse animado.
  - **Validação:** Typecheck TypeScript (`tsc --noEmit`) verificado com 0 erros. Dev server a correr em `localhost:3000`.
- **Entrada de Log — 2026-11-05 (Lote 1 de Refinamentos):**
  - **Header (`Header.tsx`):** Otimizada responsividade da pílula central com suporte a etiqueta compacta (`GRÁFICA` em ecrãs médios `md`/`lg` e `GRÁFICA & SERIGRAFIA` em ecrãs `xl+`), eliminando risco de quebra de linha.
  - **Footer (`Footer.tsx`):** Integrada quarta coluna para Gráfica & Serigrafia, com links directos para `/servicos/grafica` e `/studio`.
  - **Semântica HTML & WCAG:** Removidas tags `<main>` aninhadas em `/sobre`, `/contactos`, `/servicos/grafica` e `/studio`, garantindo um único elemento `<main>` fornecido pelo `layout.tsx`.
  - **Acessibilidade (a11y):** Inclusão de `aria-pressed` nos botões de filtro dinâmico de `/portfolio` e `/servicos/grafica`.
  - **UX & Teclado:** Listener para tecla `Escape` e clique no backdrop escurecido no modal de ficha técnica em `/servicos/grafica`.
  - **Navegação:** Substituição de links `#` residuais por rotas Next.js definitivas em `/portfolio`.
  - **Validação:** Typecheck TypeScript (`tsc --noEmit`) verificado com 0 erros. Dev server a correr em `localhost:3000`.

- **Rotas Activas e Compiladas (16 páginas estáticas pré-renderizadas):**
  - `http://localhost:3000/` (Home Oficial com 10 secções)
  - `http://localhost:3000/servicos` (Hub de Serviços)
  - `http://localhost:3000/servicos/marketing` (Marketing Estratégico & Diagnóstico)
  - `http://localhost:3000/servicos/publicidade` (Publicidade, Motion 3D & Selector de Âmbito)
  - `http://localhost:3000/servicos/programacao` (Engenharia de Software & Terminal)
  - `http://localhost:3000/portfolio` (Galeria de Portfólio Bento & Filtro Reactivo)
  - `http://localhost:3000/portfolio/kuvula` (Estudo de Caso Canónico Kuvula)
  - `http://localhost:3000/portfolio/lumen-beverages` (Estudo de Caso Lumen)
  - `http://localhost:3000/portfolio/voda-commerce` (Estudo de Caso Voda)
  - `http://localhost:3000/sobre` (Manifesto, Governança, Matriz de Disciplinas & Dados Fiscais)
  - `http://localhost:3000/contactos` (Recepção Executiva, Formulário Reactivo NDA & FAQ)
  - `http://localhost:3000/servicos/grafica` (Catálogo Gráfico, Acabamentos Especiais & Casos Reais)
  - `http://localhost:3000/studio` (Estúdio de Personalização 3D Paramétrico MVP)
- **Checkpoints Locais Seguros:**
  - `code.html` e `screen.png` na pasta raiz e nas pastas `02_*`, `03_*`, `04_*`, `05_*`.
