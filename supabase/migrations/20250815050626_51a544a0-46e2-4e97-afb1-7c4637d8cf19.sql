-- Add SELECT policy to restrict reading contact form submissions to authenticated users only
CREATE POLICY "Only authenticated users can view contact form submissions" 
ON public."Website Contact Form" 
FOR SELECT 
USING (auth.uid() IS NOT NULL);