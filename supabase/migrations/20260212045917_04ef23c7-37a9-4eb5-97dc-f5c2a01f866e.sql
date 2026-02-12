
-- Deny anonymous users from reading contact form submissions
CREATE POLICY "Deny anonymous reads"
ON public."Website Contact Form"
FOR SELECT
TO anon
USING (false);
