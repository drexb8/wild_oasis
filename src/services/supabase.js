import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gxubycidyhuqkswtjneb.supabase.co";
const supabaseKey = import.meta.env.VITE_APP_OASIS_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
