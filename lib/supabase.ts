import { createClient } from "@supabase/supabase-js"

/**
 * Read Supabase credentials from NEXT_PUBLIC_… env-vars.
 * – During local/preview runs in next-lite these vars might be undefined,
 *   so we fall back to demo placeholders to avoid the
 *   “supabaseUrl is required” runtime error.
 * – Replace the demo values with your real project credentials
 *   or add them to the Environment Variables tab.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://demo.supabase.co" // <- demo fallback
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "public-anon-key" // <- demo fallback

/* Warn the developer if real keys are missing */
if (
  (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) &&
  typeof window !== "undefined"
) {
  // eslint-disable-next-line no-console
  console.warn(
    "[Supabase] Using demo credentials. " +
      "Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY " +
      "in your environment for full functionality.",
  )
}

/* Create the client (works both on client & server) */
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type { Profile, Course, Enrollment } from "./supabase-types"
