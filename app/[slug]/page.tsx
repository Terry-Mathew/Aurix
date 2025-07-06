'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Profile } from '@/lib/supabase'

export default function ProfilePage() {
  const params = useParams()
  const slug = params.slug as string
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('slug', slug)
          .single()

        if (error) {
          setError('Profile not found')
          return
        }

        setProfile(data)
        
        // Track the view
        await supabase
          .from('analytics_views')
          .insert({
            profile_id: data.id,
            viewer_ip: null, // Will be handled by backend
            referrer: document.referrer || null,
            user_agent: navigator.userAgent,
            viewed_at: new Date().toISOString()
          })
      } catch (err) {
        setError('Failed to load profile')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchProfile()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
          <p className="text-gray-600 mb-4">
            The profile you're looking for doesn't exist or has been made private.
          </p>
          <a href="/" className="text-blue-600 hover:text-blue-500">
            Go to Aurix
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center space-x-4 mb-6">
              {profile.avatar_url && (
                <img
                  src={profile.avatar_url}
                  alt={profile.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                {profile.headline && (
                  <p className="text-lg text-gray-600 mt-1">{profile.headline}</p>
                )}
              </div>
            </div>

            {profile.bio && (
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              </div>
            )}

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">
                This profile is powered by Aurix - a platform for creating stunning digital portfolios.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Create Your Own Profile
          </a>
        </div>
      </div>
    </div>
  )
} 