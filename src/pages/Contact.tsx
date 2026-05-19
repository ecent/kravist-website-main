import { Link } from "react-router-dom";
import NavigationBar from "@/components/sections/NavigationBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Facebook, Instagram, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  division: z.string().min(1, "Please select a division"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      division: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Send data to edge function which handles both database insert and email sending
      const { error: functionError } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (functionError) {
        console.error('Function error:', functionError);
        throw functionError;
      }

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEO 
        title="Contact Kravist | Krav Maga Self-Defence Studio Singapore"
        description="Get in touch with Kravist Singapore for youth, adult, women's, or corporate Krav Maga training enquiries. Located at 11 Irving Place, Tai Seng Point, near Tai Seng MRT."
        keywords="kravist contact, krav maga singapore enquiry, self defence classes tai seng, kravist location"
        url="https://kravist.sg/contact"
      />
      <NavigationBar />

      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-k-orange-deep">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-k-orange bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-fg-label max-w-2xl mx-auto">
            Ready to start your self defence journey? Contact us to learn more about our programs or schedule a visit.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Visit Our Gym</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-800 border-rule">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <MapPin className="h-6 w-6 text-k-orange" />
                      <span>Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-fg-label">
                    <p className="text-lg">11 Irving Place</p>
                    <p className="text-lg">#02-04, Tai Seng Point</p>
                    <p className="text-lg">Singapore 369551</p>
                    <p className="mt-3 text-sm text-fg-mute">
                      Closest MRT: Tai Seng
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-rule">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <Phone className="h-6 w-6 text-k-orange" />
                      <span>Follow Us</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-fg-label space-y-3">
                    <a 
                      href="https://www.facebook.com/kravistsg/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-k-orange hover:text-orange-300 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/kravist.sg/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-k-orange hover:text-orange-300 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Instagram</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Send Us A Message</h2>
              <Card className="bg-gray-800 border-rule">
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  className="bg-gray-700 border-rule text-white placeholder:text-fg-mute"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your.email@example.com"
                                  className="bg-gray-700 border-rule text-white placeholder:text-fg-mute"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="division"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Division</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-gray-700 border-rule text-white">
                                  <SelectValue placeholder="Select a division" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-gray-700 border-rule">
                                <SelectItem value="Youth" className="text-white hover:bg-gray-600">Youth</SelectItem>
                                <SelectItem value="Adults" className="text-white hover:bg-gray-600">Adults</SelectItem>
                                <SelectItem value="Women's" className="text-white hover:bg-gray-600">Women's</SelectItem>
                                <SelectItem value="Corporate" className="text-white hover:bg-gray-600">Corporate</SelectItem>
                                <SelectItem value="Private" className="text-white hover:bg-gray-600">Private</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your interest in Krav Maga or any questions you have..."
                                className="bg-gray-700 border-rule text-white placeholder:text-fg-mute min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-k-orange-hover hover:bg-k-orange-hover text-white font-semibold py-3"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-k-orange mb-4">KRAVIST</div>
          <p className="text-fg-mute mb-6">Building stronger, safer communities one student at a time.</p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="https://www.facebook.com/kravistsg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-k-orange-hover transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a 
              href="https://www.instagram.com/kravist.sg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-k-orange-hover transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <Link to="/" className="text-fg-mute hover:text-white transition-colors">
              Home
            </Link>
            <a href="/#divisions" className="text-fg-mute hover:text-white transition-colors">
              Programs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
