
-- Remove redundant email column from profiles (already in auth.users)
ALTER TABLE public.profiles DROP COLUMN IF EXISTS email;

-- Prevent profile deletion (protect data integrity)
CREATE POLICY "Prevent profile deletion"
ON public.profiles
FOR DELETE
TO authenticated
USING (false);
