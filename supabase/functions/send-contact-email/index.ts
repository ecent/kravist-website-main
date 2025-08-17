import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Create Supabase client with service role key for database operations
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  division: string;
  message: string;
}

// Multi-layer rate limiting
const ipRateLimitMap = new Map<string, { count: number; lastReset: number }>();
const emailRateLimitMap = new Map<string, { count: number; lastReset: number }>();

const IP_RATE_LIMIT = 15; // 15 submissions per IP per hour (allows shared connections)
const EMAIL_RATE_LIMIT = 3; // 3 submissions per email per hour (prevents individual abuse)
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Basic spam detection patterns
const SPAM_PATTERNS = [
  /https?:\/\//gi, // URLs
  /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/gi,
  /(.)\1{10,}/, // Repeated characters
  /<[^>]*>/g, // HTML tags
];

function getClientIP(req: Request): string {
  return req.headers.get('cf-connecting-ip') || 
         req.headers.get('x-forwarded-for') || 
         req.headers.get('x-real-ip') || 
         'unknown';
}

function checkRateLimit(identifier: string, limitMap: Map<string, { count: number; lastReset: number }>, limit: number): boolean {
  const now = Date.now();
  const userLimit = limitMap.get(identifier);
  
  if (!userLimit) {
    limitMap.set(identifier, { count: 1, lastReset: now });
    return false;
  }
  
  // Reset counter if window expired
  if (now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    limitMap.set(identifier, { count: 1, lastReset: now });
    return false;
  }
  
  // Check if limit exceeded
  if (userLimit.count >= limit) {
    return true;
  }
  
  // Increment counter
  userLimit.count++;
  return false;
}

function containsSpam(text: string): boolean {
  return SPAM_PATTERNS.some(pattern => pattern.test(text));
}

function validateContactData(data: ContactFormData): string | null {
  // Basic validation
  if (!data.name || data.name.length < 2 || data.name.length > 100) {
    return "Name must be between 2 and 100 characters";
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "Please provide a valid email address";
  }
  
  if (!data.division || !['Youth', 'Adults', 'Women\'s', 'Corporate', 'Private'].includes(data.division)) {
    return "Please select a valid division";
  }
  
  if (!data.message || data.message.length < 10 || data.message.length > 2000) {
    return "Message must be between 10 and 2000 characters";
  }
  
  // Spam detection
  const fullText = `${data.name} ${data.message}`;
  if (containsSpam(fullText)) {
    return "Message contains invalid content";
  }
  
  return null;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIP = getClientIP(req);
    const data: ContactFormData = await req.json();
    
    // Validate and check for spam first
    const validationError = validateContactData(data);
    if (validationError) {
      console.log(`Validation failed for IP ${clientIP}: ${validationError}`);
      return new Response(
        JSON.stringify({ error: validationError }), 
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, division, message } = data;
    
    // Multi-layer rate limiting
    if (checkRateLimit(clientIP, ipRateLimitMap, IP_RATE_LIMIT)) {
      console.log(`IP rate limited: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many submissions from this location. Please try again later." }), 
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    if (checkRateLimit(email.toLowerCase(), emailRateLimitMap, EMAIL_RATE_LIMIT)) {
      console.log(`Email rate limited: ${email}`);
      return new Response(
        JSON.stringify({ error: "Too many submissions from this email address. Please try again later." }), 
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Received contact form submission:", { name, email, division, ip: clientIP });

    // Save to database using service role
    const { error: dbError } = await supabase
      .from('Website Contact Form')
      .insert([{ name, email, division, message }]);

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database insert failed: ${dbError.message}`);
    }

    console.log("Contact form data saved to database successfully");

    // Send notification email to the gym
    const notificationResponse = await resend.emails.send({
      from: "noreply@kravist.sg",
      to: ["info@kravist.sg"],
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <p>New contact form submission:</p>
        <br>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Division:</strong> ${division}</p>
        <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "Kravist <info@kravist.sg>",
      to: [email],
      replyTo: email,
      subject: "We've received your message!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: white; line-height: 1.5;">
          <h1 style="color: #ff6600; font-size: 20px; font-weight: bold; margin: 0 0 20px 0;">We've got your message!</h1>
          
          <p style="font-size: 16px; margin: 0 0 15px 0;">Hi ${name},</p>
          <p style="font-size: 16px; margin: 0 0 20px 0;">Thanks for reaching out! We've received your message about our <strong>${division}</strong> program, and one of our instructors will get back to you soon.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="font-weight: bold; margin: 0 0 10px 0; font-size: 16px;"><strong>Your Message:</strong></h3>
            <p style="font-size: 16px; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="https://www.kravist.sg/pricing" style="display: inline-block; background: #ff6600; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">View Trial Class Options</a>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="font-size: 16px; margin: 0 0 10px 0;">
              <a href="https://www.kravist.sg/schedule" style="color: #ff6600; text-decoration: none;">Class Schedule →</a>
            </p>
            <p style="font-size: 16px; margin: 0;">
              <a href="https://www.kravist.sg/faq" style="color: #ff6600; text-decoration: none;">Frequently Asked Questions →</a>
            </p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <div style="font-size: 16px;">
              <strong>Kravist</strong><br>
              11 Irving Place #02-04<br>
              Tai Seng Point<br>
              Singapore 369551<br>
              <br>
              Closest MRT: Tai Seng
            </div>
          </div>
          
          <p style="font-size: 16px; margin: 20px 0 10px 0;">Follow us on social media for updates and training tips:</p>
          <div style="text-align: center; margin: 15px 0;">
            <a href="https://www.facebook.com/kravistsg/" style="display: inline-block; margin: 0 10px; text-decoration: none;">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style="width: 32px; height: 32px; vertical-align: middle;">
            </a>
            <a href="https://www.instagram.com/kravist.sg/" style="display: inline-block; margin: 0 10px; text-decoration: none;">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" style="width: 32px; height: 32px; vertical-align: middle;">
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #f5f5f5; margin: 25px 0;">
          
          <div style="font-size: 16px; margin-top: 20px;">
            <p style="margin: 0 0 5px 0;">Looking forward to training with you soon!</p>
            <p style="margin: 0 0 5px 0;">Best regards,</p>
            <p style="margin: 0;"><strong>The Kravist Team</strong></p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        notificationId: notificationResponse.data?.id,
        confirmationId: confirmationResponse.data?.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);