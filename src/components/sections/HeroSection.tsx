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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-k-orange bg-clip-text text-transparent drop-shadow-lg">
          Self-defence skills your family will carry for life.
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Where families learn to stand their ground — with Singapore's most experienced Krav Maga instructors. Military special forces, law enforcement, and 20+ years of teaching behind every class.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#divisions">
            <Button className="bg-k-orange-hover hover:bg-orange-700 text-lg px-8 py-3 shadow-lg">
              Explore Programs
            </Button>
          </a>
          <Link to="/trials">
            <Button variant="outline" className="border-k-orange text-k-orange hover:bg-k-orange/10 text-lg px-8 py-3 shadow-lg">
              Book a Trial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
