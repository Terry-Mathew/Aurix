import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export type Profile = {
  id: string
  user_id: string
  slug: string
  name: string
  headline?: string
  bio?: string
  avatar_url?: string
  is_public: boolean
  created_at: string
  updated_at: string
}

export type ProfileSection = {
  id: string
  profile_id: string
  type: 'work' | 'project' | 'writing' | 'contact' | 'media' | 'custom'
  title: string
  content: any // JSON content
  order_index: number
  is_visible: boolean
  created_at: string
  updated_at: string
}

export type MediaFile = {
  id: string
  profile_id: string
  file_url: string
  file_name: string
  file_type: string
  file_size: number
  created_at: string
}

export type AnalyticsView = {
  id: string
  profile_id: string
  viewer_ip?: string
  referrer?: string
  user_agent?: string
  viewed_at: string
} 