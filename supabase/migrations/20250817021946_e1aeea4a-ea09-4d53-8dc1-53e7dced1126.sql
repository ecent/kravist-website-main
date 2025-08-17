-- Lock down public inserts to contact form table; insert will be done via Edge Function using service role
ALTER TABLE public."Website Contact Form" ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow insert from public form" ON public."Website Contact Form";