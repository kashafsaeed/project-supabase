import { createClient } from  'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://willogykamizeldxnyou.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbGxvZ3lrYW1pemVsZHhueW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MDM4MzYsImV4cCI6MjA4MDA3OTgzNn0.EIpcMVNxzBo9hfWsaoRFz6kBK5-6yciPLRkfgbaaM3Y';

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

// kashafsareed project 