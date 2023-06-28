import { createClient } from "@supabase/supabase-js";

export const client = createClient(
  process.env.URL_SPLIT_TASK_SUPABASE,
  process.env.API_KEY_SUPBASE
);
