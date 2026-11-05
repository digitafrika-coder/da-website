-- =====================================================================
-- DIGITAFRIKA — SUPABASE DATABASE SCHEMA & POLICIES (FASE 1)
-- =====================================================================

-- 1. EXTENSÕES
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. TABELA: PEDIDOS DE ORÇAMENTO (quote_requests)
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  type            TEXT NOT NULL CHECK (type IN ('contact', 'studio', 'service')),
  
  -- Dados do Cliente
  name            TEXT NOT NULL,
  email           TEXT NOT NULL,
  phone           TEXT,
  company         TEXT,
  
  -- Para contactos gerais / serviços
  service_areas   TEXT[],
  message         TEXT,
  
  -- Para o Estúdio de Personalização
  product_id      TEXT,
  product_config  JSONB,
  file_urls       TEXT[],
  
  -- Gestão interna
  status          TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'read', 'replied', 'closed')),
  notes           TEXT
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON public.quote_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_type ON public.quote_requests (type);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON public.quote_requests (status);

-- 3. TABELA: PRODUTOS DO STUDIO (products)
CREATE TABLE IF NOT EXISTS public.products (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT UNIQUE NOT NULL,
  name            TEXT NOT NULL,
  category        TEXT NOT NULL,
  description     TEXT,
  base_price      DECIMAL(10,2),
  images          TEXT[] DEFAULT '{}',
  config_options  JSONB NOT NULL DEFAULT '{}'::jsonb,
  active          BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order      INT NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_products_category ON public.products (category);
CREATE INDEX IF NOT EXISTS idx_products_active ON public.products (active);

-- 4. TABELA: PROJECTOS DE PORTFÓLIO (projects)
CREATE TABLE IF NOT EXISTS public.projects (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT UNIQUE NOT NULL,
  title           TEXT NOT NULL,
  client          TEXT,
  category        TEXT[] NOT NULL DEFAULT '{}',
  year            INT,
  description     TEXT,
  cover_image     TEXT,
  images          TEXT[] DEFAULT '{}',
  tags            TEXT[] DEFAULT '{}',
  featured        BOOLEAN NOT NULL DEFAULT FALSE,
  published       BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order      INT NOT NULL DEFAULT 0,
  meta            JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects (slug);
CREATE INDEX IF NOT EXISTS idx_projects_published ON public.projects (published);

-- =====================================================================
-- 5. ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- quote_requests:
-- Qualquer cliente anónimo pode SUBMETER (INSERT) um pedido de orçamento
CREATE POLICY "Public can insert quote requests"
  ON public.quote_requests
  FOR INSERT
  WITH CHECK (true);

-- Apenas admins autenticados podem LER ou ATUALIZAR pedidos de orçamento
CREATE POLICY "Admins can view and manage quote requests"
  ON public.quote_requests
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'authenticated');

-- products:
-- Qualquer visitante pode visualizá-los (SELECT)
CREATE POLICY "Public can view active products"
  ON public.products
  FOR SELECT
  USING (active = true);

-- Apenas admins podem modificar produtos
CREATE POLICY "Admins can manage products"
  ON public.products
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'authenticated');

-- projects:
-- Qualquer visitante pode ver projectos publicados (SELECT)
CREATE POLICY "Public can view published projects"
  ON public.projects
  FOR SELECT
  USING (published = true);

-- Apenas admins podem gerir projectos
CREATE POLICY "Admins can manage projects"
  ON public.projects
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'authenticated');

-- =====================================================================
-- 6. STORAGE BUCKETS SETUP
-- =====================================================================

-- Inserção declarativa dos buckets
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('quote-files', 'quote-files', false),
  ('product-mockups', 'product-mockups', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies:
-- Clientes podem enviar ficheiros para o bucket de orçamentos
CREATE POLICY "Public can upload quote files"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'quote-files');

-- Apenas admins leem ficheiros de clientes
CREATE POLICY "Admins can read quote files"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (bucket_id = 'quote-files');

-- Mockups de produtos são públicos para leitura
CREATE POLICY "Public can read product mockups"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'product-mockups');

-- =====================================================================
-- 7. SEED INICIAL: OS 5 PRODUTOS DO STUDIO MVP
-- =====================================================================

INSERT INTO public.products (slug, name, category, description, config_options, sort_order)
VALUES
  (
    'camisetas-personalizadas',
    'Camisetas',
    'vestuario',
    'Camisetas em algodão penteado 180g ou poliéster de alta durabilidade com estampa serigráfica, DTF ou bordado de alta definição.',
    '{"colors": ["#0B0C0F", "#FFFFFF", "#111318", "#777B83", "#C6FF00"], "sizes": ["S", "M", "L", "XL", "2XL"], "positions": ["Peito Esquerdo", "Frente Central", "Costas", "Manga"], "min_qty": 10}'::jsonb,
    1
  ),
  (
    'polos-bordados',
    'Polos',
    'vestuario',
    'Polos corporativos em tecido piqué premium com acabamento acetinado e bordado computorizado de alta precisão.',
    '{"colors": ["#0B0C0F", "#FFFFFF", "#181A20", "#1E3A8A"], "sizes": ["S", "M", "L", "XL", "2XL"], "positions": ["Peito Esquerdo", "Manga Direita", "Costas"], "min_qty": 10}'::jsonb,
    2
  ),
  (
    'canecas-personalizadas',
    'Canecas',
    'brindes',
    'Canecas de cerâmica premium 325ml com acabamento brilhante ou fosco, personalizadas por sublimação térmica de alta fidelidade.',
    '{"colors": ["#FFFFFF", "#0B0C0F", "#181A20"], "sizes": ["325ml"], "positions": ["Frente / Verso", "Panorâmica Total"], "min_qty": 12}'::jsonb,
    3
  ),
  (
    'sacolas-ecologicas',
    'Sacolas',
    'brindes',
    'Sacolas ecológicas tipo Tote Bag em lona/algodão cru ou poliéster resistente, serigrafadas com tintas sustentáveis.',
    '{"colors": ["#E8E9E9", "#0B0C0F", "#181A20"], "sizes": ["38x42cm", "40x45cm com fole"], "positions": ["Frente Central", "Frente e Verso"], "min_qty": 25}'::jsonb,
    4
  ),
  (
    'cartoes-de-visita-premium',
    'Cartões de Visita',
    'papelaria',
    'Cartões executivos em papel couché 350g com laminação soft-touch fosca, verniz localizado UV ou foil verde lima / metálico.',
    '{"colors": ["#0B0C0F", "#FFFFFF"], "sizes": ["85x55mm", "90x50mm"], "finishes": ["Fosco Soft-Touch", "Verniz UV Localizado", "Hot Stamping"], "min_qty": 100}'::jsonb,
    5
  )
ON CONFLICT (slug) DO NOTHING;
