import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Users, Shield, Target, Building, User, DollarSign, BookOpen, Info, Smartphone, Award, HelpCircle, Facebook, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Instructors from "@/components/Instructors";
import Schedule from "@/components/Schedule";

const Index = () => {
  const [activeSection, setActiveSection] = useState("youth");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const divisions = [
    {
      id: "youth",
      title: "Youth Division",
      subtitle: "Ages 6-17",
      description: "Empowering Youth with Self‑Defence Skills: Our Kravist Youth Division offers practical Krav Maga classes that teach children and teens (6–17 years old) how to protect themselves in real-life situations. It's not just about punches and kicks – kids learn to deter, prevent, and solve problems both in school and outside, from handling bullies at school to dealing with stranger dangers, all in a safe and fun environment. By training with us, students become more aware of their surroundings and confident in their ability to defend themselves and their loved ones.",
      icon: Shield,
      features: ["Parent-approved curriculum", "Character development focus", "Anti-bullying training", "Confidence & discipline building", "CPR-certified instructors", "Safe learning environment"],
      images: [
        "/lovable-uploads/31bfa747-f390-49e6-9f28-92ccc22bfe5e.png",
        "/lovable-uploads/27ddcbcf-fd29-47c9-a64b-50be168c4e54.png",
        "/lovable-uploads/9336e19d-8609-4a2a-8b7c-ce67f6c719b6.png",
        "/lovable-uploads/df91761c-1c15-4e44-a903-4458693e62aa.png",
        "/lovable-uploads/e23d215b-10ed-4b27-b287-96e86d88ffc2.png",
        "/lovable-uploads/1bf5a9dd-cafd-4926-9ced-4184b0c574ac.png"
      ]
    },
    {
      id: "womens",
      title: "Women's Division",
      subtitle: "Empowerment Through Training",
      description: "Specialised classes focusing on practical self defence, fitness, and confidence building in a supportive environment designed specifically for women.",
      icon: Target,
      features: ["Women-only classes", "Real-world scenarios", "Stress testing", "Structured curriculum"],
      images: [
        "/lovable-uploads/60750581-3991-42cf-8588-bf262fe64ea9.png",
        "/lovable-uploads/985f264b-e56a-4cd2-bfd0-a78167ab7004.png",
        "/lovable-uploads/03c754f0-8024-443d-87f3-6d24eb80123c.png",
        "/lovable-uploads/2a23a671-1b9c-4b18-a790-10f5beecbef5.png",
        "/lovable-uploads/35742340-0db0-41f2-bb78-03f915d1fd22.png"
      ]
    },
    {
      id: "adults",
      title: "General Adults",
      subtitle: "All Skill Levels Welcome",
      description: "Comprehensive Krav Maga training for adults of all fitness levels. Learn practical self defence while getting an incredible workout.",
      icon: Users,
      features: ["Beginner to advanced", "Full-body conditioning", "Stress drills", "Challenging and safe training"],
      images: [
        "/lovable-uploads/31c7cb7f-41a1-4955-b5ad-4242a419b348.png",
        "/lovable-uploads/5c0fca09-c6a3-4bf6-aae3-81ec7d7c9417.png"
      ]
    },
    {
      id: "corporate",
      title: "Corporate Training",
      subtitle: "Team Building & Safety",
      description: "Custom programs for businesses focusing on employee safety, team building, and stress management through Krav Maga principles.",
      icon: Building,
      features: ["On-site training", "Team building", "Workplace safety", "Stress management"],
      images: [
        "/lovable-uploads/65b46f6e-9532-42fe-a30a-8642e6892304.png"
      ]
    },
    {
      id: "private",
      title: "Private Training",
      subtitle: "Personalised Instruction",
      description: "One-on-one or small group sessions tailored to your specific goals, schedule, and skill level for accelerated learning.",
      icon: User,
      features: ["Customised curriculum", "Flexible scheduling", "Accelerated learning", "Personal attention"],
      images: [
        "/lovable-uploads/215d4bad-4cfa-4938-bfe1-5023913ef9a0.png"
      ]
    }
  ];

  const activeDivision = divisions.find(d => d.id === activeSection);

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-orange-500">KRAVIST</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="#divisions" className="hover:text-orange-400 transition-colors">Programs</a>
              <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
              <a href="#schedule" className="hover:text-orange-400 transition-colors">Schedule</a>
              <a href="#instructors" className="hover:text-orange-400 transition-colors">Instructors</a>
              <a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
              <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            SINGAPORE'S PREMIER YOUTH AND ADULTS SELF DEFENCE STUDIO
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From Youth to Adult classes, we help families grow stronger together. Our CPR-certified instructors teach authentic self-defence while building confidence, discipline, and resilience in every student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#divisions">
              <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                Explore Programs
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
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
                onClick={() => setActiveSection(division.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === division.id
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                      Contact Us
                    </Button>
                  </Link>
                  <a href="#pricing">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                      Start Training
                    </Button>
                  </a>
                </div>
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
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-600 rounded-lg">
                <DollarSign className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Different pricing for different programs and training frequencies. Find the plan that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Youth Division Pricing - Highlighted */}
            <Card className="bg-gradient-to-br from-orange-800 to-orange-900 border-orange-600 text-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  FLAGSHIP PROGRAM
                </span>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-orange-300" />
                </div>
                <CardTitle className="text-2xl">Youth Division</CardTitle>
                <CardDescription className="text-orange-200">Ages 6-17 • Most Trusted Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-200 mb-3">Term Program</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Kids (6-10)</a>
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-300 transition-colors">$450</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Juniors (10-13)</a>
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-300 transition-colors">$495</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Teens (14-17)</a>
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-300 transition-colors">$510</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-200 mb-3">Trials</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_cd5f10a5137544/login" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Kids (6-10)</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_cd5f10a5137544/login" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-400 hover:text-orange-300 transition-colors">FREE</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_c949e71f9af2d5/login" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Juniors (10-13)</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_c949e71f9af2d5/login" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-400 hover:text-orange-300 transition-colors">FREE</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_f2f2e14d3e5ec5/login" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Teens (14-17)</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_f2f2e14d3e5ec5/login" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-400 hover:text-orange-300 transition-colors">FREE</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-200 mb-3">General Classes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_0356777de099d3" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">All Ages 5 Sessions</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_0356777de099d3" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-300 transition-colors">$160</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* General Adults Pricing */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl">General Adults</CardTitle>
                <CardDescription className="text-gray-400">All Skill Levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-3">Session Packages</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_f8520cf13fd6f3/login" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">Trial</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_f8520cf13fd6f3/login" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$20</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_0356777de099d3" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">5 Sessions</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_0356777de099d3" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$160</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_a6e2c16911adf0/login" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">10 Sessions</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_a6e2c16911adf0/login" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$285</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_9506d14411bb3b/login" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">25 Sessions</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_9506d14411bb3b/login" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$660</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_7104c09d5ea5f2/login" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">50 Sessions</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_7104c09d5ea5f2/login" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$950</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-3">Unlimited Access</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_01f914d06a3d3f/login" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">1 Month Unlimited</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_01f914d06a3d3f/login" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$275</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_a685b2cefce871/login" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">3 Months Unlimited</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_a685b2cefce871/login" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$760</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Women's Division Pricing */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Target className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl">Women's Division</CardTitle>
                <CardDescription className="text-gray-400">Empowerment Training</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-3">Term Program</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">Term Program</a>
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$250</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Corporate Training Pricing */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Building className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl">Corporate Training</CardTitle>
                <CardDescription className="text-gray-400">Team Building & Safety</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="space-y-2">
                    <div className="text-center">
                      <span className="text-gray-300">Corporate Programs</span>
                      <div className="font-semibold text-orange-400 text-lg mt-2">Enquire for rates</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    Contact for Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Private Training Pricing */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <User className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl">Private Training</CardTitle>
                <CardDescription className="text-gray-400">Personalised Instruction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="space-y-2">
                    <div className="text-center">
                      <span className="text-gray-300">Private Training</span>
                      <div className="font-semibold text-orange-400 text-lg mt-2">Enquire for rates</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    Contact for Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Schedule />
      
      <div id="instructors">
        <Instructors />
      </div>

      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-600 rounded-lg">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about Krav Maga training and our programs.
            </p>
          </div>

          <Tabs defaultValue="what-is" className="w-full">
            <TabsList className="grid w-full grid-cols-7 bg-gray-800 mb-8">
              <TabsTrigger value="what-is" className="flex items-center gap-2 text-sm">
                <Info className="h-4 w-4" />
                What is Krav Maga?
              </TabsTrigger>
              <TabsTrigger value="youth-krav-maga" className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4" />
                Youth Krav Maga
              </TabsTrigger>
              <TabsTrigger value="youth-term-program" className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4" />
                Youth Term Program
              </TabsTrigger>
              <TabsTrigger value="first-timer" className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                First Timer Info
              </TabsTrigger>
              <TabsTrigger value="member-app" className="flex items-center gap-2 text-sm">
                <Smartphone className="h-4 w-4" />
                Member App
              </TabsTrigger>
              <TabsTrigger value="grading" className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4" />
                Grading
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2 text-sm">
                <HelpCircle className="h-4 w-4" />
                General FAQ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="what-is" className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Info className="h-6 w-6 text-orange-500" />
                    What is Krav Maga?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Krav Maga is a self defence and fighting system developed for practical, real-world applications. 
                    At Kravist alongside our adult and corporate programs, we've adapted this proven system for youth development, emphasizing character building, 
                    confidence, and practical safety skills in age-appropriate ways.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our youth-focused Krav Maga program teaches children to be aware of their surroundings, 
                    avoid confrontation when possible, and build the confidence to handle challenging situations. 
                    Our approach prioritizes mental resilience and character development alongside physical techniques.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-400">Youth Focus:</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Character development</li>
                        <li>• Confidence building</li>
                        <li>• Bullying prevention</li>
                        <li>• Safety awareness</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-400">Parent Peace of Mind:</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li>• CPR-certified instructors</li>
                        <li>• Age-appropriate curriculum</li>
                        <li>• Safe learning environment</li>
                        <li>• Regular progress updates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="youth-krav-maga" className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Shield className="h-6 w-6 text-orange-500" />
                    Youth Krav Maga
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    The best martial arts class for your child is one that is effective, safe, and engaging. The Kravist Youth Division specialises in Krav Maga for kids, which many parents consider ideal because it focuses on both self-defence and character development.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our classes near Tai Seng teach practical self-defence skills in a fun, supportive setting. Children learn to handle bullying situations and stranger-danger scenarios confidently, all while getting fit and having fun.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    With our experienced instructors and age-specific groups, we offer one of the top kids' self defence programs in Singapore – a program that not only keeps kids active but also builds their confidence and life skills.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Located at 11 Irving Place (Tai Seng Point) near Tai Seng MRT, our studio is convenient for families in Tai Seng, MacPherson, Paya Lebar, Serangoon, and surrounding areas. We foster a welcoming, community-oriented atmosphere where students and parents alike feel at home. All levels are welcome – whether your child is a complete beginner or has tried other martial arts, they'll find encouraging peers and mentors here.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our coaches are certified professionals who prioritise safety, personal growth, and fun.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="youth-term-program" className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Shield className="h-6 w-6 text-orange-500" />
                    Youth Term Program
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Our Youth Term Program runs three terms per year, each lasting around four months. We have a waitlist for new students, as spots are limited to ensure quality instruction and personal attention. The program is divided into three age groups:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-300"><strong>Kids (6–10 years old)</strong></p>
                    <p className="text-gray-300"><strong>Juniors (10–14 years old)</strong></p>
                    <p className="text-gray-300"><strong>Teens (14–17 years old)</strong></p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This structure ensures that each class is age-appropriate, engaging, and tailored to the developmental needs of your child.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our curriculum is progressive and structured, building core skills over time. Students learn fundamental self-defence techniques, but also focus on confidence, discipline, leadership, and accountability. Each term builds on the previous one, ensuring steady growth in both physical ability and character.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We offer a formal grading system and certification, allowing students to track their progress and celebrate milestones. This structured pathway keeps children motivated and gives parents a clear sense of their development.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <Link to="/contact" className="text-orange-400 hover:text-orange-300 transition-colors">Contact us</Link> or register to our <a href="https://kravist.pushpress.com/landing/plans/plan_0356777de099d3" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">waitlist</a> to find out more!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="first-timer" className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Users className="h-6 w-6 text-orange-500" />
                    First Timer Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Welcome to Singapore's most trusted youth self defence program! We understand that starting something new can be 
                    exciting for children and concerning for parents. Our first-timer experience is designed to be welcoming, safe, and supportive for the whole family.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-400">What Your Child Can Expect:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Gentle, age-appropriate introduction</li>
                        <li>• Fun, engaging activities</li>
                        <li>• Character-building focus</li>
                        <li>• Supportive peer environment</li>
                        <li>• No pressure or intimidation</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-400">What Parents Love:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• CPR-certified instructors</li>
                        <li>• Regular progress updates</li>
                        <li>• Character development focus</li>
                        <li>• Safe, supervised environment</li>
                        <li>• Family-friendly community</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="member-app" className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Smartphone className="h-6 w-6 text-orange-500" />
                    Member App
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Stay connected to the gym and manage your training schedule through our dedicated members app.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orange-400">App Features:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Class scheduling and booking</li>
                      <li>• Manage your packages and plans</li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a href="https://apps.apple.com/us/app/pushpress-members/id1309909578" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Download for iOS
                      </Button>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.pushpress.memberportal&hl=en_US&pli=1" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Download for Android
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="grading" className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Award className="h-6 w-6 text-orange-500" />
                    Grading System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    We have a comprehensive grading system for both adults and youth that follows international Krav Maga Global (KMG) standards. 
                    Our structured progression system helps students track their development and provides clear goals to work towards.
                  </p>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-400 mb-2">Adult & Youth Programs</h4>
                    <p className="text-gray-300 mb-3">
                      Both our adult and youth programs feature age-appropriate grading systems that recognize technical proficiency, 
                      physical development, and character growth.
                    </p>
                    <p className="text-gray-300">
                      For detailed information about grading requirements, levels, and schedules, please contact us directly or 
                      speak with one of our instructors during class.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="space-y-6">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <HelpCircle className="h-6 w-6 text-orange-500" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">What should I wear for my first class?</h4>
                      <p className="text-gray-300">
                        Comfortable workout clothes that allow free movement. Athletic shoes with good grip are recommended. 
                        We'll provide any necessary protective equipment for beginners.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Do I need any prior martial arts experience?</h4>
                      <p className="text-gray-300">
                        No previous experience is required. Krav Maga is designed to be learned quickly by people of all backgrounds. 
                        Our instructors will guide you through the basics and adapt training to your fitness level.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Is Krav Maga suitable for women?</h4>
                      <p className="text-gray-300">
                        Absolutely! Krav Maga was designed to be effective regardless of size or strength. We have dedicated women's classes 
                        that focus on real-world scenarios and building confidence in a supportive environment.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">How often should I train?</h4>
                      <p className="text-gray-300">
                        For beginners, we recommend 2-3 times per week to build muscle memory and conditioning. 
                        As you progress, you can increase frequency based on your goals and schedule.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Will I get hurt during training?</h4>
                      <p className="text-gray-300">
                        Safety is our top priority. We use controlled training methods and protective equipment. 
                        While Krav Maga involves contact, beginners start with light contact and progress gradually as skills develop.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">What's the difference between your youth and adult programs?</h4>
                      <p className="text-gray-300">
                        Our youth programs focus heavily on character development, anti-bullying, and age-appropriate self-defense techniques. 
                        Adult programs include more intense physical conditioning and advanced combat scenarios.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">Can I try a class before committing?</h4>
                      <p className="text-gray-300">
                        Yes! We offer trial classes for most programs. Check our pricing section for trial options, 
                        including free trials for youth programs and affordable trial sessions for adults.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-400">Families and Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">20+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">5+</div>
              <div className="text-gray-400">Years of Kravist</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-orange-500 mb-4">KRAVIST</div>
          <p className="text-gray-400 mb-6">Singapore's most trusted youth self defence program, building character and confidence in the next generation.</p>
          
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

          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </Link>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
