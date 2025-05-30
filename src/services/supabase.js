import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gxubycidyhuqkswtjneb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4dWJ5Y2lkeWh1cWtzd3RqbmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NjAwMTEsImV4cCI6MjAzODEzNjAxMX0.3sY1WyxBFEwCXOwUUxDikD-LpAkyaYV91Na6KaX3N6s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
