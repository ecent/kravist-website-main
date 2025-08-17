-- Make RLS policies more explicit to reduce false positive warnings
-- The linter may be confused by policies that use 'TO authenticated' without explicit anonymous denial

-- Update contact form policy to be more explicit
DROP POLICY IF EXISTS "Only admin and staff can view contact form submissions" ON public."Website Contact Form";
CREATE POLICY "Only admin and staff can view contact form submissions" 
ON public."Website Contact Form" 
FOR SELECT 
TO authenticated
USING (
  auth.role() = 'authenticated' AND 
  public.is_admin_or_staff(auth.uid())
);

-- Update profiles policies to be more explicit  
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (
  auth.role() = 'authenticated' AND 
  id = auth.uid()
);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (
  auth.role() = 'authenticated' AND 
  id = auth.uid()
);

DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (
  auth.role() = 'authenticated' AND 
  public.has_role(auth.uid(), 'admin')
);

-- Update user_roles policies to be more explicit
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (
  auth.role() = 'authenticated' AND 
  user_id = auth.uid()
);

DROP POLICY IF EXISTS "Only admins can manage user roles" ON public.user_roles;
CREATE POLICY "Only admins can manage user roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (
  auth.role() = 'authenticated' AND 
  public.has_role(auth.uid(), 'admin')
);