import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // On the homepage, use hash anchors for in-page scrolling.
  // On sub-pages, route to the homepage with the hash so the section loads.
  const sectionHref = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  const sectionLinks = [
    { label: "Home", hash: "home" },
    { label: "Programs", hash: "divisions" },
  ];

  const moreSectionLinks = [
    { label: "Pricing", hash: "pricing" },
    { label: "Schedule", hash: "schedule" },
    { label: "Instructors", hash: "instructors" },
    { label: "FAQ", hash: "faq" },
  ];

  const renderSectionLink = (
    label: string,
    hash: string,
    className: string,
    onClick?: () => void
  ) => {
    if (isHome) {
      return (
        <a key={label} href={`#${hash}`} className={className} onClick={onClick}>
          {label}
        </a>
      );
    }
    return (
      <Link key={label} to={`/#${hash}`} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  };

  const desktopClass = "hover:text-orange-400 transition-colors";
  const mobileClass = "text-lg text-white hover:text-orange-400 transition-colors";
  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-orange-500">KRAVIST</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sectionLinks.map(({ label, hash }) => renderSectionLink(label, hash, desktopClass))}
            <Link to="/trials" className={desktopClass}>Trials</Link>
            {moreSectionLinks.map(({ label, hash }) => renderSectionLink(label, hash, desktopClass))}
            <Link to="/contact" className={desktopClass}>Contact</Link>
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
                {sectionLinks.map(({ label, hash }) => renderSectionLink(label, hash, mobileClass, closeMobile))}
                <Link to="/trials" className={mobileClass} onClick={closeMobile}>Trials</Link>
                {moreSectionLinks.map(({ label, hash }) => renderSectionLink(label, hash, mobileClass, closeMobile))}
                <Link to="/contact" className={mobileClass} onClick={closeMobile}>Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
