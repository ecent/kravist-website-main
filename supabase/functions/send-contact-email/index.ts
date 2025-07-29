import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, division, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, division });

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
      subject: "Thank you for contacting Kravist!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ff6600;">Thank you for contacting Kravist!</h1>
          <p>Hi ${name},</p>
          <p>We have received your message regarding our <strong>${division}</strong> division and will get back to you as soon as possible.</p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>Your Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>In the meantime, feel free to visit us at:</p>
          <div style="background: #ff6600; color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Kravist</strong><br>
            11 Irving Place #02-04<br>
            Tai Seng Point<br>
            Singapore 369551<br>
            <br>
            Closest MRT: Tai Seng
          </div>
          
          <p>Follow us on social media for updates and training tips:</p>
          <p>
            <a href="https://facebook.com/kravist" style="color: #ff6600;">Facebook</a> | 
            <a href="https://instagram.com/kravist" style="color: #ff6600;">Instagram</a>
          </p>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>The Kravist Team</strong><br>
            <em>Building stronger, safer communities one student at a time.</em>
          </p>
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