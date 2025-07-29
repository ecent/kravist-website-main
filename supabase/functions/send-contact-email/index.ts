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