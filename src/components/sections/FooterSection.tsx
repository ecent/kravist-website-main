import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold text-orange-500 mb-4">KRAVIST</div>
        <p className="text-gray-400 mb-6">Krav Maga self-defence for families in Singapore — kids, teens, adults, and corporate teams.</p>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a 
            href="https://www.facebook.com/kravistsg/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://www.instagram.com/kravist.sg/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>
        </div>

        <div className="text-sm text-gray-400 mb-6 space-y-1">
          <p>11 Irving Place, Tai Seng Point, #02-04, Singapore 369551</p>
          <p>Nearest MRT: Tai Seng</p>
          <p>Email: <a href="mailto:info@kravist.sg" className="hover:text-white transition-colors underline">info@kravist.sg</a></p>
        </div>

        <div className="flex justify-center space-x-6">
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
            Contact Us
          </Link>
          <a href="#divisions" className="text-gray-400 hover:text-white transition-colors">
            Programs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
