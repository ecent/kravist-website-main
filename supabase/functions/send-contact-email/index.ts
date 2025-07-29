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
      subject: "We've got your message!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #ff6600;">We've got your message!</h1>
          <p>Hi ${name},</p>
          <p>Thanks for reaching out! We've received your message about our <strong>${division}</strong> program, and one of our instructors will get back to you soon.</p>
          
          <div style="background: #f9f9f9; padding: 25px; border-radius: 5px; margin: 25px 0;">
            <h3>Your Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <h2 style="color: #ff6600; margin-top: 30px; margin-bottom: 20px;">Next Steps</h2>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="https://www.kravist.sg/pricing" style="display: inline-block; background: #ff6600; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">View Trial Class Options</a>
          </div>
          
          <p>Other helpful links:</p>
          <ul style="margin: 20px 0; padding-left: 20px;">
            <li style="margin-bottom: 8px;">Class Schedule → <a href="https://www.kravist.sg/schedule" style="color: #ff6600;">www.kravist.sg/schedule</a></li>
            <li style="margin-bottom: 8px;">Frequently Asked Questions → <a href="https://www.kravist.sg/faq" style="color: #ff6600;">www.kravist.sg/faq</a></li>
          </ul>
          
          <div style="background: #ff6600; color: white; padding: 20px; border-radius: 5px; margin: 30px 0;">
            <strong>Kravist</strong><br>
            11 Irving Place #02-04<br>
            Tai Seng Point<br>
            Singapore 369551<br>
            <br>
            Closest MRT: Tai Seng
          </div>
          
          <p>Follow us on social media for updates and training tips:</p>
          <p style="text-align: center; margin: 20px 0;">
            <a href="https://www.facebook.com/kravistsg/" style="display: inline-block; margin: 0 15px; text-decoration: none;">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style="width: 32px; height: 32px; vertical-align: middle;">
            </a>
            <a href="https://www.instagram.com/kravist.sg/" style="display: inline-block; margin: 0 15px; text-decoration: none;">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" style="width: 32px; height: 32px; vertical-align: middle;">
            </a>
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="margin-top: 30px;">
            Looking forward to welcoming you to Kravist soon!<br>
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