import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://kngihgusiyfrbdxbxhdx.supabase.co",
  "sb_secret_tGQz_OWQwVmSjmL6tbaXpg_QOWO7gle"
);

export default supabase;
