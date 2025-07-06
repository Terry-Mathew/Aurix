-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table
CREATE TABLE profiles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    headline TEXT,
    bio TEXT,
    avatar_url TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create profile_sections table
CREATE TABLE profile_sections (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('work', 'project', 'writing', 'contact', 'media', 'custom')),
    title TEXT NOT NULL,
    content JSONB NOT NULL DEFAULT '{}',
    order_index INTEGER NOT NULL DEFAULT 0,
    is_visible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create media_files table
CREATE TABLE media_files (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    file_url TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_type TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create analytics_views table
CREATE TABLE analytics_views (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    viewer_ip INET,
    referrer TEXT,
    user_agent TEXT,
    viewed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create abuse_reports table
CREATE TABLE abuse_reports (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    reporter_email TEXT,
    reason TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_slug ON profiles(slug);
CREATE INDEX idx_profiles_is_public ON profiles(is_public);
CREATE INDEX idx_profile_sections_profile_id ON profile_sections(profile_id);
CREATE INDEX idx_profile_sections_order ON profile_sections(profile_id, order_index);
CREATE INDEX idx_media_files_profile_id ON media_files(profile_id);
CREATE INDEX idx_analytics_views_profile_id ON analytics_views(profile_id);
CREATE INDEX idx_analytics_views_viewed_at ON analytics_views(viewed_at);

-- Set up Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE abuse_reports ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profiles" ON profiles
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profiles" ON profiles
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profiles" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own profiles" ON profiles
    FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Public profiles are viewable by everyone" ON profiles
    FOR SELECT USING (is_public = true);

-- RLS Policies for profile_sections
CREATE POLICY "Users can manage their own profile sections" ON profile_sections
    FOR ALL USING (
        profile_id IN (
            SELECT id FROM profiles WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Public profile sections are viewable by everyone" ON profile_sections
    FOR SELECT USING (
        is_visible = true AND profile_id IN (
            SELECT id FROM profiles WHERE is_public = true
        )
    );

-- RLS Policies for media_files
CREATE POLICY "Users can manage their own media files" ON media_files
    FOR ALL USING (
        profile_id IN (
            SELECT id FROM profiles WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Public media files are viewable by everyone" ON media_files
    FOR SELECT USING (
        profile_id IN (
            SELECT id FROM profiles WHERE is_public = true
        )
    );

-- RLS Policies for analytics_views
CREATE POLICY "Users can view their own analytics" ON analytics_views
    FOR SELECT USING (
        profile_id IN (
            SELECT id FROM profiles WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Anyone can insert analytics views" ON analytics_views
    FOR INSERT WITH CHECK (true);

-- RLS Policies for abuse_reports
CREATE POLICY "Anyone can insert abuse reports" ON abuse_reports
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view reports for their profiles" ON abuse_reports
    FOR SELECT USING (
        profile_id IN (
            SELECT id FROM profiles WHERE user_id = auth.uid()
        )
    );

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_profile_sections_updated_at BEFORE UPDATE ON profile_sections
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create function to automatically create profile slug
CREATE OR REPLACE FUNCTION generate_unique_slug(input_name TEXT, user_id UUID)
RETURNS TEXT AS $$
DECLARE
    base_slug TEXT;
    final_slug TEXT;
    counter INTEGER := 0;
BEGIN
    -- Generate base slug from name
    base_slug := lower(regexp_replace(input_name, '[^a-zA-Z0-9\s-]', '', 'g'));
    base_slug := regexp_replace(base_slug, '\s+', '-', 'g');
    base_slug := regexp_replace(base_slug, '-+', '-', 'g');
    base_slug := trim(both '-' from base_slug);
    
    -- If slug is empty, use user id
    IF base_slug = '' THEN
        base_slug := 'user-' || substring(user_id::text from 1 for 8);
    END IF;
    
    final_slug := base_slug;
    
    -- Check if slug exists and increment counter if needed
    WHILE EXISTS (SELECT 1 FROM profiles WHERE slug = final_slug) LOOP
        counter := counter + 1;
        final_slug := base_slug || '-' || counter;
    END LOOP;
    
    RETURN final_slug;
END;
$$ LANGUAGE plpgsql; 