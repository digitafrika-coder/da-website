import { z } from "zod";

// Schema para formulário de contacto geral
export const ContactQuoteSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  company: z.string().optional(),
  email: z.string().email("Endereço de e-mail inválido"),
  phone: z.string().min(8, "Número de telefone ou WhatsApp obrigatório"),
  service_areas: z.array(z.string()).min(1, "Selecione pelo menos uma área de interesse"),
  message: z.string().min(10, "Descreva brevemente o projeto ou objetivo pretendido"),
});

export type ContactQuoteInput = z.infer<typeof ContactQuoteSchema>;

// Schema para pedidos de orçamento do Estúdio de Personalização (MVP)
export const StudioQuoteSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  company: z.string().optional(),
  email: z.string().email("Endereço de e-mail inválido"),
  phone: z.string().min(8, "Contacto telefónico/WhatsApp é obrigatório"),
  
  // Produto e configuração
  product_id: z.string().min(1, "Produto não selecionado"),
  product_name: z.string().min(1),
  quantity: z.number().int().min(1, "Quantidade mínima é 1 unidade"),
  color: z.string().optional(),
  size: z.string().optional(),
  material: z.string().optional(),
  print_position: z.string().optional(),
  custom_text: z.string().max(200, "Texto muito longo").optional(),
  
  // Referência visual / upload de arte
  file_url: z.string().url().optional().or(z.literal("")),
  file_name: z.string().optional(),
  
  notes: z.string().optional(),
});

export type StudioQuoteInput = z.infer<typeof StudioQuoteSchema>;
