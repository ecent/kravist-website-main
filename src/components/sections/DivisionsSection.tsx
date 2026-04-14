import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { Users, Shield, Target, Building, User, ChevronLeft, ChevronRight } from "lucide-react";

const divisions = [
  {
    id: "youth",
    title: "Youth Division",
    subtitle: "Ages 6-17",
    description: "Empowering Youth with Self‑Defence Skills: Our Kravist Youth Division offers practical Krav Maga classes that teach children and teens (6–17 years old) how to protect themselves in real-life situations. It's not just about punches and kicks – kids learn to deter, prevent, and solve problems both in school and outside, from handling bullies at school to dealing with stranger dangers, all in a safe and fun environment. By training with us, students become more aware of their surroundings and confident in their ability to defend themselves and their loved ones.",
    icon: Shield,
    features: ["Parent-approved curriculum", "Character development focus", "Anti-bullying training", "Confidence & discipline building", "CPR-certified instructors", "Safe learning environment"],
    images: [
      "/lovable-uploads/31bfa747-f390-49e6-9f28-92ccc22bfe5e.webp",
      "/lovable-uploads/27ddcbcf-fd29-47c9-a64b-50be168c4e54.webp",
      "/lovable-uploads/9336e19d-8609-4a2a-8b7c-ce67f6c719b6.webp",
      "/lovable-uploads/df91761c-1c15-4e44-a903-4458693e62aa.webp",
      "/lovable-uploads/e23d215b-10ed-4b27-b287-96e86d88ffc2.webp",
      "/lovable-uploads/1bf5a9dd-cafd-4926-9ced-4184b0c574ac.webp"
    ],
    cta: { label: "Learn More", to: "/programs/youth/learn-more" }
  },
  {
    id: "womens",
    title: "Women's Division",
    subtitle: "Empowerment Through Real-World Self Defence",
    description: "Join Singapore's leading women's self defence classes, combining Krav Maga techniques, fitness, and confidence-building in a safe, supportive environment designed exclusively for women.",
    icon: Target,
    features: ["Women-only self defence classes", "Real-life threat scenarios", "Stress-tested training", "Progressive, structured curriculum"],
    images: [
      "/lovable-uploads/60750581-3991-42cf-8588-bf262fe64ea9.webp",
      "/lovable-uploads/985f264b-e56a-4cd2-bfd0-a78167ab7004.webp",
      "/lovable-uploads/2a23a671-1b9c-4b18-a790-10f5beecbef5.webp"
    ],
    cta: { label: "Learn More", to: "/programs/women/learn-more" }
  },
  {
    id: "adults",
    title: "Adult Division",
    subtitle: "Practical Self Defence for Every Adult",
    description: "Dynamic Krav Maga training for adults of all skill levels, blending real-world self defence with high-intensity workouts to improve strength, conditioning, and confidence.",
    icon: Users,
    features: ["Beginner-friendly to advanced techniques", "Full-body conditioning drills", "Realistic stress scenario training", "Safe and challenging environment"],
    images: [
      "/lovable-uploads/06652838-a8c4-4ee8-bf31-806bb8675f84.webp",
      "/lovable-uploads/80ca1777-7ed2-445a-94a2-646837f256b4.webp",
      "/lovable-uploads/6eb8f2f8-3d84-4028-9ef3-f8c2b7ae068a.webp",
      "/lovable-uploads/b3bb76b8-a3a5-4c1c-b8a0-ea3c1324cddb.webp",
      "/lovable-uploads/54d43c3a-5d14-4396-abbc-6596fd2c6a5b.webp",
      "/lovable-uploads/2460f76f-4ebf-4f48-8155-b5562908961e.webp",
      "/lovable-uploads/81ce8b4c-e435-459f-835c-558f35177b43.webp"
    ],
    cta: { label: "Contact Us", to: "/contact" }
  },
  {
    id: "corporate",
    title: "Corporate Training",
    subtitle: "Workplace Safety & Team Cohesion",
    description: "Tailored corporate self defence and team-building programs that enhance employee confidence, stress management, and workplace safety through Krav Maga principles.",
    icon: Building,
    features: ["On-site or off-site corporate training", "Team-building exercises", "Workplace safety techniques", "Stress-resilience and confidence building"],
    images: [
      "/lovable-uploads/65b46f6e-9532-42fe-a30a-8642e6892304.webp"
    ],
    cta: { label: "Contact Us", to: "/contact" }
  },
  {
    id: "private",
    title: "Private Training",
    subtitle: "One-on-One Krav Maga Coaching",
    description: "Accelerate your progress with private Krav Maga sessions tailored to your specific goals, schedule, and fitness level for a personalized and focused learning experience.",
    icon: User,
    features: ["Fully customized self defence curriculum", "Flexible scheduling options", "Rapid skill development", "Personal instructor guidance"],
    images: [
      "/lovable-uploads/215d4bad-4cfa-4938-bfe1-5023913ef9a0.webp"
    ],
    cta: { label: "Contact Us", to: "/contact" }
  }
];

const DivisionsSection = () => {
  const [activeDivisionId, setActiveDivisionId] = useState("youth");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const activeDivision = divisions.find(d => d.id === activeDivisionId);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
  };

  const handlePrevImage = () => {
    if (activeDivision?.images) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? activeDivision.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (activeDivision?.images) {
      setSelectedImageIndex((prev) => 
        prev === activeDivision.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section id="divisions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Programs</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Led by our Youth Division, we offer world-class self defence training for the whole family. 
            Every program receives expert instruction and personalised attention.
          </p>
        </div>

        {/* Division Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {divisions.map((division) => (
            <button
              key={division.id}
              onClick={() => setActiveDivisionId(division.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDivisionId === division.id
                  ? "bg-orange-600 text-white transform scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {division.title}
            </button>
          ))}
        </div>

        {/* Active Division Display */}
        {activeDivision && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <activeDivision.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{activeDivision.title}</h3>
                  <p className="text-orange-400 text-lg">{activeDivision.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {activeDivision.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {activeDivision.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              {/* Single primary CTA */}
              <Link to={activeDivision.cta.to}>
                <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                  {activeDivision.cta.label}
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              {activeDivision.images ? (
                <>
                  <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                      {activeDivision.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div 
                            className="h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => handleImageClick(index)}
                          >
                            <img 
                              src={image} 
                              alt={`${activeDivision.title} training ${index + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-gray-800/80 border-gray-600 hover:bg-gray-700 text-white" />
                    <CarouselNext className="bg-gray-800/80 border-gray-600 hover:bg-gray-700 text-white" />
                  </Carousel>
                  
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="max-w-5xl max-h-[90vh] p-6 bg-black">
                      <div className="relative">
                        <img 
                          src={activeDivision.images[selectedImageIndex]} 
                          alt={`${activeDivision.title} training ${selectedImageIndex + 1}`}
                          className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                        />
                        {activeDivision.images.length > 1 && (
                          <>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                              onClick={handlePrevImage}
                            >
                              <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                              onClick={handleNextImage}
                            >
                              <ChevronRight className="h-6 w-6" />
                            </Button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                              {selectedImageIndex + 1} / {activeDivision.images.length}
                            </div>
                          </>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              ) : (
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Training Image Placeholder</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DivisionsSection;
