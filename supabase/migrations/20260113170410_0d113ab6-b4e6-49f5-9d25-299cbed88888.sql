-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Service role can manage blog posts" ON public.blog_posts;

-- Create specific policies for blog posts management (service role will use service key which bypasses RLS)
-- No additional policy needed as service role key bypasses RLS