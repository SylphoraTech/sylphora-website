import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://etaticzkwtiugcbbjqnk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0YXRpY3prd3RpdWdjYmJqcW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NjQ0NTgsImV4cCI6MjA2NjI0MDQ1OH0.eHhPInLw-UA4SXJXPc-A7lLiZ9-CIgjIKDogAFxGMDU"; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
