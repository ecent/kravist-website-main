-- Allow anonymous users to submit contact forms (INSERT only)
-- This is safe because they can only write data, not read it
CREATE POLICY "Allow public contact form submissions" 
ON "Website Contact Form" 
FOR INSERT 
WITH CHECK (true);

-- Verify RLS is enabled
ALTER TABLE "Website Contact Form" ENABLE ROW LEVEL SECURITY;