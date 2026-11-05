export interface StudioProductOption {
  id: string;
  slug: string;
  name: string;
  category: "vestuario" | "brindes" | "papelaria";
  description: string;
  minQuantity: number;
  availableColors: { name: string; hex: string }[];
  availableSizes: string[];
  printPositions: string[];
  placeholderImage: string;
}

export const STUDIO_PRODUCTS: StudioProductOption[] = [
  {
    id: "prod-1",
    slug: "camisetas",
    name: "Camisetas",
    category: "vestuario",
    description: "Algodão penteado 180g ou poliéster premium. Ideal para fardamentos, eventos corporativos e ativações de marca com estampa serigráfica de alta durabilidade.",
    minQuantity: 10,
    availableColors: [
      { name: "Preto Profundo", hex: "#0B0C0F" },
      { name: "Branco Puro", hex: "#FFFFFF" },
      { name: "Verde Cinético", hex: "#C6FF00" },
      { name: "Cinza Urbano", hex: "#292a2d" },
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    printPositions: ["Frente Central", "Peito Esquerdo", "Costas Panorâmicas", "Manga"],
    placeholderImage: "/images/studio/mockup-tshirt.png",
  },
  {
    id: "prod-2",
    slug: "polos",
    name: "Polos",
    category: "vestuario",
    description: "Tecido piqué com toque acetinado e colarinho reforçado. Acabamento formal com bordado computorizado de alta definição.",
    minQuantity: 10,
    availableColors: [
      { name: "Preto Monolítico", hex: "#0B0C0F" },
      { name: "Branco Puro", hex: "#FFFFFF" },
      { name: "Azul Meia-Noite", hex: "#111318" },
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    printPositions: ["Peito Esquerdo", "Manga Direita", "Gola / Costas"],
    placeholderImage: "/images/studio/mockup-polo.png",
  },
  {
    id: "prod-3",
    slug: "canecas",
    name: "Canecas",
    category: "brindes",
    description: "Cerâmica de parede dupla com capacidade de 325ml. Sublimação térmica que não desbota na lavagem, acabamento brilhante ou mate.",
    minQuantity: 12,
    availableColors: [
      { name: "Branco Editorial", hex: "#FFFFFF" },
      { name: "Preto Mate", hex: "#111318" },
    ],
    availableSizes: ["325ml Padrão"],
    printPositions: ["Frente / Verso Simétrico", "Panorâmico Envolvente"],
    placeholderImage: "/images/studio/mockup-mug.png",
  },
  {
    id: "prod-4",
    slug: "sacolas",
    name: "Sacolas",
    category: "brindes",
    description: "Tote bags ecológicas em lona de algodão reforçado ou poliéster sustentável. Alças longas e costura industrial para transporte seguro.",
    minQuantity: 25,
    availableColors: [
      { name: "Algodão Cru", hex: "#E8E9E9" },
      { name: "Preto Profundo", hex: "#0B0C0F" },
    ],
    availableSizes: ["38 x 42 cm", "40 x 45 cm (com fole)"],
    printPositions: ["Frente Central", "Frente e Verso"],
    placeholderImage: "/images/studio/mockup-tote.png",
  },
  {
    id: "prod-5",
    slug: "cartoes-de-visita",
    name: "Cartões de Visita",
    category: "papelaria",
    description: "Papel couché espesso de 350g com laminação aveludada soft-touch, cantos retos com corte térmico e opção de verniz UV localizado ou foil.",
    minQuantity: 100,
    availableColors: [
      { name: "Base Preta Fosca", hex: "#0B0C0F" },
      { name: "Base Branca Pura", hex: "#FFFFFF" },
    ],
    availableSizes: ["85 x 55 mm", "90 x 50 mm"],
    printPositions: ["Frente com Verniz Localizado", "Frente e Verso 4x4 Cores"],
    placeholderImage: "/images/studio/mockup-cards.png",
  },
];
