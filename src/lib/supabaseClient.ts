<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js';
=======

import { createClient } from '@supabase/supabase-js'
>>>>>>> 8ed9164cf01b1213cc4689e53c1bf463562d2133

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are not set.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
