import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-orange-500">KRAVIST</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <a href="/#divisions" className="hover:text-orange-400 transition-colors">Divisions</a>
              <a href="/#schedule" className="hover:text-orange-400 transition-colors">Schedule</a>
              <a href="/#instructors" className="hover:text-orange-400 transition-colors">Instructors</a>
              <a href="/#about" className="hover:text-orange-400 transition-colors">About</a>
              <a href="/#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
              <span className="text-orange-400">Contact</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <MapPin className="h-6 w-6 text-orange-500" />
                      <span>Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-lg">11 Irving Place</p>
                    <p className="text-lg">#02-04, Tai Seng Point</p>
                    <p className="text-lg">Singapore 369551</p>
                    <p className="mt-3 text-sm text-gray-400">
                      Closest MRT: Tai Seng
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <Phone className="h-6 w-6 text-orange-500" />
                      <span>Contact Info</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:info@kravist.sg" className="text-orange-400 hover:text-orange-300 transition-colors">info@kravist.sg</a></p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-orange-500 mb-4">KRAVIST</div>
          <p className="text-gray-400 mb-6">Building stronger, safer communities one student at a time.</p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="https://facebook.com/kravist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a 
              href="https://instagram.com/kravist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <a href="/#divisions" className="text-gray-400 hover:text-white transition-colors">
              Our Programmes
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
