import { supabase } from "@/utils/supabase";

export default function getAssetURL(path: string): string {
  return supabase.storage.from("main").getPublicUrl(path).data.publicUrl;
}
