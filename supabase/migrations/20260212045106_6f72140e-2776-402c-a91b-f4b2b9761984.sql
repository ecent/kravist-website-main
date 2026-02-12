
-- Drop the existing SELECT policy that allows staff access
DROP POLICY "Only admin and staff can view contact form submissions" ON public."Website Contact Form";

-- Create a new SELECT policy restricted to admins only
CREATE POLICY "Only admins can view contact form submissions"
ON public."Website Contact Form"
FOR SELECT
USING (auth.role() = 'authenticated'::text AND has_role(auth.uid(), 'admin'::app_role));
