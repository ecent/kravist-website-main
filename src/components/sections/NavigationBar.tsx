import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-orange-500">KRAVIST</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#divisions" className="hover:text-orange-400 transition-colors">Programs</a>
            <Link to="/trials" className="hover:text-orange-400 transition-colors">Trials</Link>
            <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
            <a href="#schedule" className="hover:text-orange-400 transition-colors">Schedule</a>
            <a href="#instructors" className="hover:text-orange-400 transition-colors">Instructors</a>
            <a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
            <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 border-gray-800 w-[250px]">
              <div className="flex flex-col space-y-6 mt-8">
                <a href="#home" className="text-lg text-white hover:text-orange-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#divisions" className="text-lg text-white hover:text-orange-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Programs</a>
                <Link to="/trials" className="text-lg text-white hover:text-orange-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Trials</Link>
                <a href="#pricing" className="text-lg text-white hover:text-orange-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                <a href="#schedule" className="text-lg text-white hover:text-orange-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Schedule</a>
                <a href="#instructors" className="text-lg text-white hover:text-orange-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Instructors</a>
                <a href="#faq" className="text-lg text-white hover:text-orange-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <Link to="/contact" className="text-lg text-white hover:text-orange-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
