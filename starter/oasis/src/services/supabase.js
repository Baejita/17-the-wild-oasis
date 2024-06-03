import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://npuughwwnslsitaxwzqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wdXVnaHd3bnNsc2l0YXh3enFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5NDg5NzgsImV4cCI6MjAzMTUyNDk3OH0.4FW2-TCsmVyFt8t7SApE_gM4te_JZSok581r-GN7Hs0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
