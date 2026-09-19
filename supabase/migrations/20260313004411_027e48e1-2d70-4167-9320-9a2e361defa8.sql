
-- Partner property listings table
CREATE TABLE public.partner_listings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  location TEXT NOT NULL,
  price BIGINT NOT NULL,
  price_label TEXT NOT NULL,
  property_type TEXT NOT NULL CHECK (property_type IN ('house', 'apartment', 'land', 'commercial')),
  listing_type TEXT NOT NULL CHECK (listing_type IN ('sale', 'rent', 'lease')),
  bedrooms INTEGER DEFAULT 0,
  bathrooms INTEGER DEFAULT 0,
  area TEXT NOT NULL,
  image_url TEXT,
  features TEXT[] DEFAULT '{}',
  amenities TEXT[] DEFAULT '{}',
  contact_name TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.partner_listings ENABLE ROW LEVEL SECURITY;

-- Everyone can view approved listings
CREATE POLICY "Approved listings are viewable by everyone"
  ON public.partner_listings FOR SELECT
  USING (status = 'approved');

-- Authenticated users can view their own listings (any status)
CREATE POLICY "Users can view their own listings"
  ON public.partner_listings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Authenticated users can insert their own listings
CREATE POLICY "Users can create listings"
  ON public.partner_listings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own listings
CREATE POLICY "Users can update their own listings"
  ON public.partner_listings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can delete their own listings
CREATE POLICY "Users can delete their own listings"
  ON public.partner_listings FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Auto-update updated_at
CREATE TRIGGER update_partner_listings_updated_at
  BEFORE UPDATE ON public.partner_listings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
