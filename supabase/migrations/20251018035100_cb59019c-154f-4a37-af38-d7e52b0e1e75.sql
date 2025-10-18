-- Add DELETE policy for contact form to enable data lifecycle management
-- This allows admins to handle data deletion requests for GDPR/privacy compliance
CREATE POLICY "Only admins can delete contact form submissions"
ON "Website Contact Form"
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));