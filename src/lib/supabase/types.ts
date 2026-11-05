export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      quote_requests: {
        Row: {
          id: string;
          created_at: string;
          type: "contact" | "studio" | "service";
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          service_areas: string[] | null;
          message: string | null;
          product_id: string | null;
          product_config: Json | null;
          file_urls: string[] | null;
          status: "pending" | "read" | "replied" | "closed";
          notes: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          type: "contact" | "studio" | "service";
          name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          service_areas?: string[] | null;
          message?: string | null;
          product_id?: string | null;
          product_config?: Json | null;
          file_urls?: string[] | null;
          status?: "pending" | "read" | "replied" | "closed";
          notes?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["quote_requests"]["Insert"]>;
      };
      products: {
        Row: {
          id: string;
          slug: string;
          name: string;
          category: string;
          description: string | null;
          base_price: number | null;
          images: string[];
          config_options: Json;
          active: boolean;
          sort_order: number;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          category: string;
          description?: string | null;
          base_price?: number | null;
          images: string[];
          config_options: Json;
          active?: boolean;
          sort_order?: number;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
      };
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          client: string | null;
          category: string[];
          year: number | null;
          description: string | null;
          cover_image: string | null;
          images: string[];
          tags: string[];
          featured: boolean;
          published: boolean;
          sort_order: number;
          meta: Json | null;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          client?: string | null;
          category: string[];
          year?: number | null;
          description?: string | null;
          cover_image?: string | null;
          images?: string[];
          tags?: string[];
          featured?: boolean;
          published?: boolean;
          sort_order?: number;
          meta?: Json | null;
        };
        Update: Partial<Database["public"]["Tables"]["projects"]["Insert"]>;
      };
    };
  };
}
