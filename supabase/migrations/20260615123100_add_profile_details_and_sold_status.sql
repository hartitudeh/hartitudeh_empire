-- Migration: Add Profile Details, Listing Sold Status, and Commission Columns

-- 1. Add columns to profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'blog_user';

-- 2. Add columns to partner_listings table
ALTER TABLE public.partner_listings ADD COLUMN IF NOT EXISTS is_sold BOOLEAN DEFAULT FALSE;
ALTER TABLE public.partner_listings ADD COLUMN IF NOT EXISTS commission_rate NUMERIC DEFAULT 10.0;
ALTER TABLE public.partner_listings ADD COLUMN IF NOT EXISTS commission_amount BIGINT;

-- 3. Provision storage buckets for avatars and properties
INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('properties', 'properties', true)
ON CONFLICT (id) DO NOTHING;

-- 4. Clean up any existing policies
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload avatar images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update/delete their own avatar images" ON storage.objects;
DROP POLICY IF EXISTS "Property images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload property images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update/delete their own property images" ON storage.objects;

-- 5. Create storage RLS policies
CREATE POLICY "Avatar images are publicly accessible" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'avatars');

CREATE POLICY "Authenticated users can upload avatar images" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'avatars');

CREATE POLICY "Users can update/delete their own avatar images" 
ON storage.objects FOR ALL 
TO authenticated 
USING (bucket_id = 'avatars' AND (owner = auth.uid()::text));

CREATE POLICY "Property images are publicly accessible" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'properties');

CREATE POLICY "Authenticated users can upload property images" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'properties');

CREATE POLICY "Users can update/delete their own property images" 
ON storage.objects FOR ALL 
TO authenticated 
USING (bucket_id = 'properties' AND (owner = auth.uid()::text));
