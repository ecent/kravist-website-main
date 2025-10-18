-- Drop the redundant restrictive authentication policy
-- The admin/staff policy already requires authentication AND proper role
DROP POLICY IF EXISTS "Require authentication for contact form access" ON "Website Contact Form";