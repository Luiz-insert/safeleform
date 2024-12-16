import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Substitua pela URL do seu projeto
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Substitua pela sua anon key
console.log(supabaseUrl, supabaseKey);
export const supabase = createClient(supabaseUrl, supabaseKey);
