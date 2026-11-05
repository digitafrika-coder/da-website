---
name: DigitAfrika
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393c'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#c3caac'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#303034'
  outline: '#8d9479'
  outline-variant: '#434933'
  surface-tint: '#a6d700'
  primary: '#ffffff'
  on-primary: '#273500'
  primary-container: '#bef500'
  on-primary-container: '#536d00'
  inverse-primary: '#4e6700'
  secondary: '#c5c7c7'
  on-secondary: '#2e3131'
  secondary-container: '#47494a'
  on-secondary-container: '#b7b9b9'
  tertiary: '#ffffff'
  on-tertiary: '#2c3137'
  tertiary-container: '#dfe2eb'
  on-tertiary-container: '#60646c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bef500'
  primary-fixed-dim: '#a6d700'
  on-primary-fixed: '#151f00'
  on-primary-fixed-variant: '#3a4d00'
  secondary-fixed: '#e1e3e3'
  secondary-fixed-dim: '#c5c7c7'
  on-secondary-fixed: '#191c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#dfe2eb'
  tertiary-fixed-dim: '#c3c6cf'
  on-tertiary-fixed: '#181c22'
  on-tertiary-fixed-variant: '#43474e'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 96px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Syne
    fontSize: 68px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md-mobile:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-technical:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.18em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  margin: 2rem
  margin-mobile: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 3.5rem
  space-2xl: 6rem
---

## PRD de Design — Lei Visual DigitAfrika

Este PRD é a autoridade visual do website. Em caso de conflito, estas regras prevalecem sobre as secções legadas abaixo. Alterações ao sistema visual devem actualizar primeiro este documento e depois os componentes e tokens correspondentes.

### 1. Objectivo

Manter uma identidade escura, editorial e tecnológica, com verde-lima reconhecível, sem sacrificar conforto visual, legibilidade ou clareza da hierarquia. O verde é um acento funcional; não é iluminação ambiente permanente.

### 2. Paleta oficial e papéis

| Papel | Cor | Uso permitido |
|---|---|---|
| Fundo base | `#0B0C0F` | Fundo principal e áreas de descanso visual |
| Superfície baixa | `#121316` | Secções alternadas e painéis discretos |
| Superfície elevada | `#1B1B1F` | Cartões, controlos e navegação |
| Superfície activa | `#292A2D` | Hover/seleção subtil; distinguir do fundo por tom, não por glow |
| Texto principal | `#FFFFFF` | Títulos, valores e texto essencial |
| Texto secundário | `#C5C7C7` | Parágrafos e instruções |
| Texto auxiliar | `#A0A3A5` | Metadados; nunca usar cinzento demasiado escuro em texto necessário |
| Verde da marca | `#98FB06` | Logótipo e pequenos detalhes que identificam a marca |
| Verde de interface | `#BEF500` | CTA principal, estado seleccionado e destaque curto |
| Verde de apoio | `#C6FF00` | Reservado a arte/imagens existentes; não introduzir em novos componentes sem actualizar este PRD |
| Borda discreta | `rgba(255,255,255,0.10)` | Separadores e contornos de superfície |
| Erro | `#FF6B6B` | Erros e validação, sempre acompanhados por texto/ícone |

Não substituir uma cor por outra por aproximação visual: logo usa `#98FB06`; interface usa `#BEF500`. Não misturar dois verdes no mesmo controlo. Texto corrido deve usar branco ou cinzento claro, nunca verde como cor de leitura prolongada.

### 3. Proporção e hierarquia

Como orientação por ecrã: cerca de 75–85% fundos/superfícies escuras, 14–24% conteúdo neutro e no máximo 5% acento verde. O verde deve conduzir o olhar a uma acção ou estado, não competir com o conteúdo. Em cada secção, reservar o destaque verde mais forte para um único foco principal.

### 4. Luz, brilho e sombras

- **Proibido:** glow verde difuso em títulos, cartões, ilustrações, imagens ou grandes áreas; múltiplos halos concorrentes; sombras verdes persistentes; `drop-shadow` escuro ou colorido em torno de imagens recortadas sem necessidade demonstrável.
- **Permitido:** um brilho verde muito subtil num indicador activo pequeno (até 8px), com opacidade baixa; transição de cor/borda no hover sem bloom; luz ambiente estática apenas quando já integrada numa imagem/arte aprovada.
- CTAs destacam-se primeiro pelo preenchimento `#BEF500`, contraste e forma; qualquer sombra é opcional, neutra e discreta. Estados de foco devem ser nítidos e visíveis, sem depender de glow.
- Imagens e escultura mantêm a iluminação que faz parte do próprio asset. Não acrescentar halo à silhueta via CSS.

### 5. Legibilidade e acessibilidade

- Corpo: `#C5C7C7` ou mais claro sobre superfícies escuras. Texto pequeno/essencial não pode depender de opacidade reduzida.
- Verde sobre fundo escuro é adequado a palavras curtas e controlos; não usar para parágrafos nem metadados longos.
- Texto em botão verde usa `#0B0C0F`. Texto branco/cinzento sobre verde só após verificação de contraste.
- Interacção comunica estado também por forma, borda, ícone ou texto, nunca apenas pela cor.
- Preservar foco de teclado claramente visível e estados hover/active distintos sem animações luminosas intensas.

### 6. Formas e consistência

Seguir os componentes e raios já aprovados no site (pílulas, cartões e botões existentes). Não aplicar uma regra global de cantos rectos que contradiga o sistema actual. Usar bordas finas para separar superfícies; evitar glassmorphism carregado e sombras difusas.

### 7. Checklist obrigatório para alterações visuais

1. Confirmar que cada cor respeita o papel da paleta.
2. Confirmar que o verde está limitado aos focos funcionais e não domina a secção.
3. Inspeccionar texto pequeno, contraste, foco e estados seleccionados.
4. Verificar que imagens não ganharam halo/sombra CSS indesejada.
5. Registar no `PROJECT_LOG.md` cada alteração visual implementada.

## Brand & Style (referência legada; aplicar apenas quando compatível com o PRD acima)

This design system embodies the ethos of a premier African creative and digital power player operating on a global scale. Rooted in the philosophy of radical reinvention and expansive potential, the identity unites marketing, advertising, and high-performance software engineering.

The aesthetic fuses **Avant-Garde Editorial Design** with **Technical Precision**. It eschews typical corporate SaaS conventions, decorative fluff, and soft consumer app tropes. Visual impact is established through expansive typographic scale, cinematic black space, and razor-sharp structural alignments.

### Core Tenets
- **Cinematic Void:** The interface is anchored in a 70% architecture of obsidian and basalt darkness. Emptiness is treated as a premium material, lending weight and drama to work showcases.
- **Editorial Authority:** Typography acts as visual architecture, taking inspiration from international design manifestos and progressive European/African culture journals.
- **Hyper-Targeted Energy:** Electric lime is deployed with surgical discipline—occupying only 10% of the canvas—acting as a targeted laser for user intent and critical conversion paths.
- **Brutal Precision:** Sharp, technical details juxtaposed with massive, expressive editorial headlines evoke both software craftsmanship and avant-garde art direction.

## Colors

The palette operates under an uncompromising 70/20/10 proportional rule to preserve dramatic restraint and prevent visual fatigue.

### Palette Hierarchy & Balance
- **70% Foundation (Void & Architecture):**
  - Canvas Deep Black: `#0B0C0F` (Base background)
  - Surface Level 1: `#111318` (Structural divisions, major paneling)
  - Surface Level 2: `#181A20` (Elevated elements, hover targets, cards)
  - Border Muted: `rgba(255, 255, 255, 0.08)`
  - Border Sharp: `rgba(255, 255, 255, 0.16)`

- **20% Editorial Content (Typography & Lineage):**
  - Primary Content / High-Contrast White: `#FFFFFF` (Headlines, prominent metrics)
  - Secondary Editorial Grey: `#E8E9E9` (Subheads, active state outlines)
  - Supporting Muted Grey: `#777B83` (Body copy, technical metadata, inactive states)

- **10% Kinetic Accent (The Electric Catalyst):**
  - Kinetic Lime: `#C6FF00` (High-priority action targets, active indicators, crucial punctuation, spotlight keywords)
  - Darkened Lime Wash: `rgba(198, 255, 0, 0.08)` (Selected state backings, hover tints)

### Usage Rules
Never flood large background areas with `#C6FF00`. It is forbidden to use the accent color as large container backgrounds, full-screen loaders, or decorative wallpaper. It exists strictly as a functional laser: an active status pip, a high-converting CTA, a typographic focal word, or an interactive cursor anchor.

## Typography

Typography establishes an assertive tension between expressive avant-garde form and high-engineering functionality.

- **Syne (Display & Major Headlines):** Imparts artistic, unconventional confidence. Used at monumental scales with tight letter spacing for core brand statements, hero moments, and discipline declarations (MARKETING, ADVERTISING, PROGRAMMING).
- **Space Grotesk (Body, Technical Metadata & Controls):** Delivers clean readability, mathematical pacing, and a subtle coding/system aesthetic.

### Editorial Treatments
- **All-Caps Metadata:** Category stamps, discipline markers, and technical indicators use `label-md` or `label-technical` transformed to uppercase with expanded letter-spacing (`0.12em` to `0.18em`).
- **Accent Highlighting:** Singular impactful words within Syne headlines may carry the Kinetic Lime color (`#C6FF00`), while surrounding text remains `#FFFFFF` or `#E8E9E9`.

## Layout & Spacing

The layout philosophy rejects cramped, component-stuffed interfaces in favor of architectural, modular broadsheets with rhythm and intention.

### Grid Engine
- **Desktop (>= 1280px):** 12-column fluid grid, `4rem` outer canvas margin, `2rem` gutters. Maximum layout container bound at `1600px` for ultra-wide monitors.
- **Tablet (768px - 1279px):** 8-column grid, `2rem` outer margins, `1.5rem` gutters.
- **Mobile (<= 767px):** 4-column grid, `1.25rem` outer margins, `1rem` gutters.

### Sectional Rhythm
- Sections are delineated by continuous micro-borders (`1px solid rgba(255, 255, 255, 0.08)`) rather than ambient dropshadows or floating card blobs.
- Asymmetrical column distributions (e.g., 5-column manifesto text alongside 7-column media showcase) are favored over equal split boxes to reinforce an agency portfolio cadence.
- Generous vertical padding (`space-xl` to `space-2xl`) isolates case studies, project statistics, and programmatic service panels, preventing visual contamination.

## Elevation & Depth

This system intentionally rejects synthetic software glassmorphism, heavy blurry shadows, and multi-colored bloom glows. Depth is created via **Tonal Stepping**, **Architectural Outlines**, and **Directional Atmospheric Sheen**.

### Elevation Stack
1. **Canvas Base (`#0B0C0F`):** The ground floor. Absorbs ambient light; holds default section backdrops.
2. **Structural Paneling (`#111318`):** Split drawers, sticky navigation ribbons, and persistent work grids. Bounded by `1px solid rgba(255, 255, 255, 0.08)`.
3. **Interactive Blocks (`#181A20`):** Modular tiles and interactive cards. Separated by hairline borders (`rgba(255, 255, 255, 0.12)`). On hover, borders transition to `rgba(198, 255, 0, 0.4)`.
4. **Transient Modals / Flyouts (`#111318`):** Floated above the canvas with a zero-blur structural offset: `0 24px 48px -12px rgba(0, 0, 0, 0.85)` coupled with a perimeter hairline border `1px solid rgba(255, 255, 255, 0.18)`.

### Focused Energy Glows
Glows are restricted to active status nodes:
- `box-shadow: 0 0 12px rgba(198, 255, 0, 0.35)` applied strictly to `8px` or smaller live status indicators, system beacons, or high-focus active chips.

## Shapes

The design system enforces a sharp geometric aesthetic (`roundedness: 0`). 

- **Containers & Surfaces:** 0px radius. Crisp, clean-cut, uncompromising rectangularity evokes architectural layouts, printing presses, and terminal viewports.
- **Buttons & Tags:** Strictly 0px radius. Rectangular monoliths with sharp corners underline digital agency rigor.
- **Exceptions:** Circular geometry is permitted solely for system status indicator pips (`50%` radius, fixed at `6px` to `8px` diameter) and customized magnetic cursor rings.

## Components

### Buttons
- **Primary Kinetic Action:** Solid `#C6FF00` fill with `#0B0C0F` text (Space Grotesk, Bold, uppercase). 0px border radius. Padding: `14px 28px`. Hover: Background shifts to `#FFFFFF` with instantaneous color inversion, subtle border flash.
- **Secondary Ghost:** Transparent fill, `1px solid rgba(255, 255, 255, 0.25)`, text `#FFFFFF`. Hover: Border shifts to `#C6FF00`, text shifts to `#C6FF00`, background receives a `rgba(198, 255, 0, 0.04)` fill.
- **Editorial Text Link:** Inline text with a directional right-facing arrow (`→`). Underline sits 4px below baseline with `1px solid rgba(255, 255, 255, 0.3)`. Hover: Arrow translates 4px right, underline changes to `#C6FF00`.

### Cards & Work Tiles
- Reject standard bubbly SaaS cards. Work containers are monolithic `#111318` frames divided by `1px solid rgba(255, 255, 255, 0.08)`.
- Cards feature integrated header metadata (index numbering like `// 01`, client tag, delivery year) in `label-technical` muted text.
- Media elements within cards scale subtly (`transform: scale(1.02)`) on interaction, with the border snapping to `#E8E9E9`.

### Chips & Discipline Badges
- Compact rectangular modules: `6px 12px` padding, 0px border radius.
- Background `#181A20`, border `1px solid rgba(255, 255, 255, 0.1)`. Text in `label-md`, `#777B83`.
- Active / Selected State: Border turns to `#C6FF00`, text becomes `#FFFFFF`, prepended by a solid `4px` square `#C6FF00` dot.

### Form Inputs & Fields
- Background `#111318`, bottom-border-dominant or full border with `1px solid rgba(255, 255, 255, 0.12)`. Padding: `16px 20px`.
- Typography: `Space Grotesk`, `15px`, text `#FFFFFF`. Placeholder text `#777B83`.
- Focus State: Border color transitions sharply to `#C6FF00`. No soft outline ring; razor-thin `1px` crisp outline.
- Error State: Border color `#FF334B`, accompanying technical error message in `label-md` uppercase.

### Checkboxes & Radios
- Sharp `16px × 16px` squares with `1px solid rgba(255, 255, 255, 0.25)`.
- Checked State: Filled `#C6FF00` with deep black `#0B0C0F` technical checkmark or inner square.

### Lists & Index Rows
- Editorial index rows featuring generous vertical rhythm (`24px` top/bottom padding) separated by full-width `1px solid rgba(255, 255, 255, 0.08)` rules.
- Layout: Monospaced numeric prefix (`01`, `02`), followed by headline-sm title, category tags right-aligned, and an interactive chevron. Rows light up with a `#181A20` background tint on hover.

### Live Status Tickers (Bespoke Agency Component)
- Horizontal technical strips pinned to borders containing agency timezones (e.g., `MAPUTO [CAT] // 14:32`), current availability badges (`● OPEN FOR COMMISSIONS`), and real-time project throughput tickers.
