import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/e1f2812e-eebc-4041-803f-87ca9deb6746.webp"
          alt="Kravist Krav Maga training session"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
          Real Self-Defence. Taught by Real Experts.
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Singapore's most experienced Krav Maga instructors — with military special forces, law enforcement, and 20+ years of teaching behind them — training kids, teens, and adults to be confident, disciplined, and ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#divisions">
            <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3 shadow-lg">
              Explore Programs
            </Button>
          </a>
          <Link to="/trials">
            <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10 text-lg px-8 py-3 shadow-lg">
              Book a Trial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
