import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iwgmyxywletcaytowelz.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3Z215eHl3bGV0Y2F5dG93ZWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NDIxNTksImV4cCI6MjA0NjMxODE1OX0.us4yT2LduoXlhM7RtIgb_XnqOXj8IT9cAqVai-yzXTU";
export const supabase = createClient(supabaseUrl, supabaseKey);
