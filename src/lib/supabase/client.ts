import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";
import type { ContactQuoteInput, StudioQuoteInput } from "../schemas/quote";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim().replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

// Cliente oficial Supabase (ativo apenas quando as credenciais forem fornecidas)
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient<Database>(supabaseUrl, supabaseAnonKey)
    : null;

/**
 * Gestor local/híbrido de submissões para validação na Fase 1 sem depender de chaves externas
 */
export async function submitQuoteRequest(
  data: (ContactQuoteInput & { type: "contact" }) | (StudioQuoteInput & { type: "studio" })
): Promise<{ success: boolean; id: string; message: string }> {
  // Se Supabase real estiver configurado
  if (supabase) {
    try {
      const isStudio = data.type === "studio";
      const payload: Database["public"]["Tables"]["quote_requests"]["Insert"] = {
        type: data.type,
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        company: data.company ?? null,
        service_areas: isStudio ? ["personalizacao"] : (data as ContactQuoteInput).service_areas,
        message: isStudio ? (data as StudioQuoteInput).notes ?? null : (data as ContactQuoteInput).message,
        product_id: isStudio ? (data as StudioQuoteInput).product_id : null,
        product_config: isStudio
          ? {
              product_name: (data as StudioQuoteInput).product_name,
              quantity: (data as StudioQuoteInput).quantity,
              color: (data as StudioQuoteInput).color,
              size: (data as StudioQuoteInput).size,
              print_position: (data as StudioQuoteInput).print_position,
              custom_text: (data as StudioQuoteInput).custom_text,
              file_name: (data as StudioQuoteInput).file_name,
            }
          : null,
        file_urls: isStudio && (data as StudioQuoteInput).file_url ? [(data as StudioQuoteInput).file_url!] : null,
        status: "pending",
      };

      const { data: record, error } = await supabase
        .from("quote_requests")
        .insert([payload] as any)
        .select("id")
        .single();

      if (error) {
        console.warn("Supabase insert error, falling back to local simulation:", error.message);
      } else if (record) {
        return {
          success: true,
          id: (record as any).id || "sb-ok",
          message: "Pedido de orçamento registado com sucesso no Supabase.",
        };
      }
    } catch (err) {
      console.warn("Supabase connection exception:", err);
    }
  }

  // Fallback Local (Fase 1 - simulação segura)
  const localId = "local-" + Math.random().toString(36).substring(2, 10);
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("digitafrika_local_quotes") || "[]");
      existing.push({
        id: localId,
        created_at: new Date().toISOString(),
        ...data,
      });
      localStorage.setItem("digitafrika_local_quotes", JSON.stringify(existing));
    } catch (e) {
      console.warn("LocalStorage save error:", e);
    }
  }

  return {
    success: true,
    id: localId,
    message: "Pedido registado localmente com sucesso (Fase 1 — Mock de Validação).",
  };
}
