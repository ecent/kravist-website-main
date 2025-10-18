-- Add restrictive policy to block anonymous access to contact form submissions
-- This works with the existing admin/staff policy to ensure only authenticated admin/staff can read submissions
CREATE POLICY "Require authentication for contact form access" 
ON "Website Contact Form" 
AS RESTRICTIVE
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Also ensure RLS is enabled (idempotent operation)
ALTER TABLE "Website Contact Form" ENABLE ROW LEVEL SECURITY;