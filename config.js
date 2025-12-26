import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// const supabaseUrl = 'https://szsiinflooaigabkvldo.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6c2lpbmZsb29haWdhYmt2bGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNzE5MTksImV4cCI6MjA4MDg0NzkxOX0.grSEGDm9kptRtZOh-FPhJG2f8fS6f4TWwt4DwsK3JZ0'
// // const supabaseKey = 'sb_publishable_bRh8w64YJQ8qYX1Ffxk6Dw_sxIjwZR0'
// // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'



const supabaseUrl = 'https://ygposisucuqlyfnnjppr.supabase.'
const supabaseKey = 'sb_publishable_bRh8w64YJQ8qYX1Ffxk6Dw_sxIjwZR0'
        
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase };