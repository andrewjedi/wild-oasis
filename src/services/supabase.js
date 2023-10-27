import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://okjdmiehlxubmydducps.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ramRtaWVobHh1Ym15ZGR1Y3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMzE3NzgsImV4cCI6MjAxMzkwNzc3OH0.U0J0OtLYXYAk945uiOnzSLa5Ziyb9IYbmVfGpjzqLZc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
