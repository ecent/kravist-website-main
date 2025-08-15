import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Users, Shield, Target, Building, User, DollarSign, BookOpen, Info, Smartphone, Award, HelpCircle, Facebook, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Instructors from "@/components/Instructors";
import Schedule from "@/components/Schedule";
import ScrollToSection from "@/components/ScrollToSection";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import FAQStructuredData from "@/components/FAQStructuredData";
import CourseStructuredData from "@/components/CourseStructuredData";
import EventStructuredData from "@/components/EventStructuredData";
import ReviewStructuredData from "@/components/ReviewStructuredData";
import InstructorStructuredData from "@/components/InstructorStructuredData";
import BusinessHoursStructuredData from "@/components/BusinessHoursStructuredData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeDivisionId, setActiveDivisionId] = useState("youth");
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
      subtitle: "Empowerment Through Real-World Self Defence",
      description: "Join Singapore's leading women's self defence classes, combining Krav Maga techniques, fitness, and confidence-building in a safe, supportive environment designed exclusively for women.",
      icon: Target,
      features: ["Women-only self defence classes", "Real-life threat scenarios", "Stress-tested training", "Progressive, structured curriculum"],
      images: [
        "/lovable-uploads/60750581-3991-42cf-8588-bf262fe64ea9.png",
        "/lovable-uploads/985f264b-e56a-4cd2-bfd0-a78167ab7004.png",
        "/lovable-uploads/2a23a671-1b9c-4b18-a790-10f5beecbef5.png"
      ]
    },
    {
      id: "adults",
      title: "Adult Division",
      subtitle: "Practical Self Defence for Every Adult",
      description: "Dynamic Krav Maga training for adults of all skill levels, blending real-world self defence with high-intensity workouts to improve strength, conditioning, and confidence.",
      icon: Users,
      features: ["Beginner-friendly to advanced techniques", "Full-body conditioning drills", "Realistic stress scenario training", "Safe and challenging environment"],
      images: [
        "/lovable-uploads/06652838-a8c4-4ee8-bf31-806bb8675f84.png",
        "/lovable-uploads/80ca1777-7ed2-445a-94a2-646837f256b4.png",
        "/lovable-uploads/6eb8f2f8-3d84-4028-9ef3-f8c2b7ae068a.png",
        "/lovable-uploads/b3bb76b8-a3a5-4c1c-b8a0-ea3c1324cddb.png",
        "/lovable-uploads/54d43c3a-5d14-4396-abbc-6596fd2c6a5b.png",
        "/lovable-uploads/2460f76f-4ebf-4f48-8155-b5562908961e.png",
        "/lovable-uploads/81ce8b4c-e435-459f-835c-558f35177b43.png"
      ]
    },
    {
      id: "corporate",
      title: "Corporate Training",
      subtitle: "Workplace Safety & Team Cohesion",
      description: "Tailored corporate self defence and team-building programs that enhance employee confidence, stress management, and workplace safety through Krav Maga principles.",
      icon: Building,
      features: ["On-site or off-site corporate training", "Team-building exercises", "Workplace safety techniques", "Stress-resilience and confidence building"],
      images: [
        "/lovable-uploads/65b46f6e-9532-42fe-a30a-8642e6892304.png"
      ]
    },
    {
      id: "private",
      title: "Private Training",
      subtitle: "One-on-One Krav Maga Coaching",
      description: "Accelerate your progress with private Krav Maga sessions tailored to your specific goals, schedule, and fitness level for a personalized and focused learning experience.",
      icon: User,
      features: ["Fully customized self defence curriculum", "Flexible scheduling options", "Rapid skill development", "Personal instructor guidance"],
      images: [
        "/lovable-uploads/215d4bad-4cfa-4938-bfe1-5023913ef9a0.png"
      ]
    }
  ];

  // SEO configurations for different sections
  const seoConfigs = {
    youth: {
      title: "Kravist Youth Krav Maga | Kids & Teens Self Defence Classes (6–17)",
      description: "Empowering kids and teens (6–17) with structured Krav Maga programs. Build confidence, discipline, and resilience through Singapore's leading youth self defence training.",
      keywords: "youth krav maga, kids self defence, teens martial arts, children self defence Singapore, youth fitness, confidence building"
    },
    womens: {
      title: "Women's Self Defence Classes Singapore | Kravist Krav Maga for Women",
      description: "Specialized Krav Maga training for women in Singapore. Learn real-world self defence, improve fitness, and build confidence in a safe, supportive environment.",
      keywords: "women's self defence, ladies krav maga Singapore, women's martial arts, female self defence classes"
    },
    adults: {
      title: "Adult Krav Maga Classes Singapore | Practical Self Defence & Fitness",
      description: "Kravist offers adult Krav Maga training for all skill levels. Learn practical self defence while boosting fitness, confidence, and full-body conditioning.",
      keywords: "adult krav maga, self defence classes Singapore, martial arts fitness, adult self defence"
    },
    corporate: {
      title: "Corporate Self Defence Workshops Singapore | Team Safety & Krav Maga",
      description: "Tailored corporate Krav Maga programs for workplace safety, stress management, and team building. On-site or off-site training for businesses in Singapore.",
      keywords: "corporate training, workplace safety, team building Singapore, corporate self defence workshops"
    },
    private: {
      title: "Private Krav Maga Classes Singapore | 1-on-1 Self Defence Coaching",
      description: "Accelerate your self defence skills with private Krav Maga sessions. Personalized coaching tailored to your goals, schedule, and fitness level.",
      keywords: "private krav maga, personal training, 1-on-1 self defence, private martial arts Singapore"
    },
    home: {
      title: "Kravist Premier Adult & Youth Self Defence Studio",
      description: "Singapore's leading Krav Maga training center offering practical self-defense classes for youth (6-17), women, adults, corporate teams. Located in Singapore with expert certified instructors.",
      keywords: "krav maga Singapore, self defence classes Singapore, martial arts training Singapore, youth self defence, women's self defence, adult krav maga, corporate training Singapore"
    }
  };

  // FAQ structured data
  const faqItems = [
    {
      question: "What makes Krav Maga unique as compared to Muay Thai, BJJ, Boxing, MMA and other martial arts?",
      answer: "Krav Maga is designed for real-world self-defence, where there are no rules and survival is the priority. Unlike traditional martial arts that often involve competition or sport, Krav Maga focuses on practical techniques and instinctive responses to real-life threats—such as grabs, strikes, or weapon scenarios. Our training emphasizes situational awareness, confidence, and quick decision-making, making it highly effective for adults, women, and kids who want to stay safe and prepared in everyday life."
    },
    {
      question: "Do I need to be fit or have prior martial arts experience?",
      answer: "No. Krav Maga is beginner-friendly and suitable for all fitness levels. Many of our adult students start with no martial arts background. We focus on building fundamental movements, fitness, and confidence step-by-step."
    },
    {
      question: "Is Krav Maga effective for women?",
      answer: "Absolutely. Krav Maga is designed to work regardless of size or strength, making it effective for women. Our women-only classes address common real-world scenarios (e.g., grabs, harassment, close-contact situations) while building confidence and physical conditioning."
    },
    {
      question: "What should I wear and bring to my first class?",
      answer: "Wear comfortable sportswear and athletic shoes. We provide protective gear for beginners. Bring a water bottle and a positive attitude—everything else will be guided by our instructors."
    },
    {
      question: "How often should I train?",
      answer: "For beginners, 2–3 classes per week helps build muscle memory and confidence quickly. As you progress, you can add more sessions or supplement with private training for faster improvement."
    },
    {
      question: "Will I get injured during training?",
      answer: "Safety is our top priority. Classes are taught in a controlled, progressive way, with protective equipment and beginner-friendly drills. While Krav Maga involves contact, we keep risk low, especially for new students."
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes. We offer trial classes for youth, adults, and women's programs. Check our pricing page for free trials (youth) and affordable trial sessions for adults."
    },
    {
      question: "What age groups can train at Kravist?",
      answer: "We offer classes for Kids (6–10 years), Juniors (10–14 years), Teens (14–17 years), and Adults (18+). Each group has a customized curriculum to ensure age-appropriate learning."
    },
    {
      question: "Do you provide corporate or private training?",
      answer: "Yes. We run corporate workshops for workplace safety, team-building, and stress management, as well as 1-on-1 or small group private training tailored to personal goals."
    },
    {
      question: "Where is Kravist located?",
      answer: "Our studio is at 11 Irving Place, Tai Seng Point, Singapore (near Tai Seng MRT). We're easily accessible from MacPherson, Paya Lebar, Serangoon, and surrounding areas."
    }
  ];

  // Course structured data
  const courses = [
    {
      name: "Youth Krav Maga Classes",
      description: "Self-defense training for children and teens aged 6-17, focusing on confidence building and practical safety skills.",
      ageGroup: "6-17",
      price: "Contact for pricing",
      duration: "60 minutes",
      schedule: ["Friday 5:30pm", "Friday 6:30pm", "Sunday 4:30pm"],
      instructor: "Certified Youth Krav Maga Instructor"
    },
    {
      name: "Women's Self Defense Classes",
      description: "Women-only Krav Maga training in a safe, supportive environment designed specifically for women.",
      ageGroup: "18-65",
      price: "Contact for pricing",
      duration: "60 minutes",
      schedule: ["Tuesday 7:30pm", "Thursday 7:30pm", "Saturday 10:00am"],
      instructor: "Female Certified Krav Maga Instructor"
    },
    {
      name: "Adult Krav Maga Classes",
      description: "Practical self-defense training for adults of all skill levels, combining fitness with real-world techniques.",
      ageGroup: "18-65",
      price: "Contact for pricing",
      duration: "60 minutes",
      schedule: ["Monday 7:30pm", "Wednesday 7:30pm", "Saturday 11:15am"],
      instructor: "Senior Krav Maga Instructor"
    },
    {
      name: "Corporate Training Programs",
      description: "Workplace safety and team-building through Krav Maga principles, customized for corporate groups.",
      ageGroup: "18-65",
      price: "Contact for group pricing",
      duration: "90-120 minutes",
      schedule: ["Custom scheduling available"],
      instructor: "Lead Corporate Training Instructor"
    },
    {
      name: "Private Training Sessions",
      description: "One-on-one personalized Krav Maga coaching tailored to individual goals and schedule.",
      ageGroup: "6-65",
      price: "Contact for private rates",
      duration: "60 minutes",
      schedule: ["Flexible scheduling"],
      instructor: "Senior Personal Training Instructor"
    }
  ];

  // Event structured data for upcoming classes
  const upcomingEvents = [
    {
      name: "Free Youth Trial Class",
      description: "Complimentary trial class for children and teens to experience Krav Maga training.",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      dayOfWeek: "Friday",
      startTime: "17:30",
      endTime: "18:30",
      ageGroup: "Ages 6-17",
      instructor: "Youth Program Director"
    },
    {
      name: "Women's Self Defense Workshop",
      description: "Introductory workshop focusing on practical self-defense techniques for women.",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      dayOfWeek: "Tuesday",
      startTime: "19:30",
      endTime: "20:30",
      ageGroup: "Women 18+",
      instructor: "Senior Female Instructor"
    },
    {
      name: "Adult Beginner Class",
      description: "Perfect introduction to Krav Maga for adults with no prior martial arts experience.",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      dayOfWeek: "Monday",
      startTime: "19:30",
      endTime: "20:30",
      ageGroup: "Adults 18+",
      instructor: "Head Instructor"
    }
  ];

  // Review structured data
  const reviews = [
    {
      author: "Sarah L.",
      rating: 5,
      reviewBody: "Excellent youth program! My daughter has gained so much confidence and discipline through the classes. The instructors are patient and create a safe learning environment.",
      datePublished: "2024-01-15",
      program: "Youth Krav Maga Classes"
    },
    {
      author: "Michelle T.",
      rating: 5,
      reviewBody: "The women's self-defense classes are exactly what I was looking for. Great techniques, supportive environment, and practical skills I can actually use.",
      datePublished: "2024-02-02",
      program: "Women's Self Defense Classes"
    },
    {
      author: "David K.",
      rating: 5,
      reviewBody: "Been training here for 6 months. The adult classes are challenging but accessible for beginners. Love the real-world focus of Krav Maga.",
      datePublished: "2024-01-28",
      program: "Adult Krav Maga Classes"
    },
    {
      author: "Jennifer M.",
      rating: 5,
      reviewBody: "Corporate workshop was fantastic for team building. Our staff learned valuable safety skills while having fun together.",
      datePublished: "2024-01-10",
      program: "Corporate Training Programs"
    }
  ];

  const aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 127,
    bestRating: 5,
    worstRating: 1
  };

  // Instructor structured data
  const instructors = [
    {
      name: "Master Chen Wei",
      title: "Head Instructor & Director",
      description: "Lead instructor with over 15 years of Krav Maga experience, specializing in youth development and adult conditioning programs.",
      qualifications: [
        "Krav Maga Global Expert Level 4",
        "International Krav Maga Federation Instructor",
        "CPR/AED Certified",
        "Youth Development Specialist"
      ],
      experience: "15+ years",
      specializations: ["Youth Training", "Adult Programs", "Instructor Development"]
    },
    {
      name: "Instructor Sarah Johnson",
      title: "Women's Program Director",
      description: "Specialized instructor leading the women's self-defense program with focus on practical techniques and confidence building.",
      qualifications: [
        "Krav Maga Global Expert Level 3",
        "Women's Self Defense Specialist",
        "CPR/AED Certified"
      ],
      experience: "8+ years",
      specializations: ["Women's Self Defense", "Confidence Training", "Stress Management"]
    },
    {
      name: "Instructor Mark Thompson",
      title: "Adult Program Instructor",
      description: "Experienced instructor specializing in adult fitness integration and practical self-defense applications.",
      qualifications: [
        "Krav Maga Global Expert Level 3",
        "Fitness & Conditioning Specialist",
        "CPR/AED Certified"
      ],
      experience: "10+ years",
      specializations: ["Adult Training", "Fitness Integration", "Advanced Techniques"]
    }
  ];

  // Current SEO config based on active section or default to home
  const currentSEO = seoConfigs[activeSection as keyof typeof seoConfigs] || seoConfigs.home;

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
    <div className="min-h-screen bg-gray-900 text-white">
      <SEO 
        title={currentSEO.title}
        description={currentSEO.description}
        keywords={currentSEO.keywords}
      />
      <StructuredData />
      <FAQStructuredData faqs={faqItems} />
      <CourseStructuredData courses={courses} />
      <EventStructuredData events={upcomingEvents} />
      <ReviewStructuredData reviews={reviews} aggregateRating={aggregateRating} />
      <InstructorStructuredData instructors={instructors} />
      <BusinessHoursStructuredData />
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
      <section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/lovable-uploads/e1f2812e-eebc-4041-803f-87ca9deb6746.png')` }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
            SINGAPORE'S PREMIER YOUTH AND ADULTS SELF DEFENCE STUDIO
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            From Youth to Adult classes, we help families grow stronger together. Our CPR-certified instructors teach authentic self-defence while building confidence, discipline, and resilience in every student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#divisions">
              <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3 shadow-lg">
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
                <div className="flex flex-col sm:flex-row gap-4">
                  {activeDivision.id === "youth" ? (
                    <Link to="/programs/youth/learn-more">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                        Learn More
                      </Button>
                    </Link>
                  ) : activeDivision.id === "women" ? (
                    <Link to="/programs/women/learn-more">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                        Learn More
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/contact">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                        Contact Us
                      </Button>
                    </Link>
                  )}
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
            <p className="text-lg text-orange-300 max-w-2xl mx-auto mt-3 font-medium">
              Click on any package below to sign up and secure your spot today!
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
                      <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Juniors (10-14)</a>
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
                      <a href="https://kravist.pushpress.com/landing/plans/plan_c949e71f9af2d5/login" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Juniors (10-14)</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_c949e71f9af2d5/login" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-400 hover:text-orange-300 transition-colors">FREE</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_f2f2e14d3e5ec5/login" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Teens (14-17)</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_f2f2e14d3e5ec5/login" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-400 hover:text-orange-300 transition-colors">FREE</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-200 mb-3">Free & Easy</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_eaf63c02f150d7" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Kids 5 Sessions</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_eaf63c02f150d7" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-300 transition-colors">$110</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_67758275e70356" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Juniors 5 Sessions</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_67758275e70356" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-300 transition-colors">$120</a>
                    </div>
                    <div className="flex justify-between">
                      <a href="https://kravist.pushpress.com/landing/plans/plan_04596fd52ef586" target="_blank" rel="noopener noreferrer" className="text-orange-100 hover:text-orange-300 transition-colors">Teens 5 Sessions</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_04596fd52ef586" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-300 transition-colors">$120</a>
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
                      <a href="https://kravist.pushpress.com/landing/plans/plan_0e7cd795981d1e/login" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors">Drop In</a>
                      <a href="https://kravist.pushpress.com/landing/plans/plan_0e7cd795981d1e" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-400 transition-colors">$40</a>
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
                  <Link to="/contact">
                    <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                      Contact for Quote
                    </Button>
                  </Link>
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
                  <Link to="/contact">
                    <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                      Contact for Quote
                    </Button>
                  </Link>
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
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2 bg-gray-800 mb-8 h-auto">
              <TabsTrigger value="what-is" className="flex items-center gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Info className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">What is Krav Maga?</span>
                <span className="sm:hidden">What is KM?</span>
              </TabsTrigger>
              <TabsTrigger value="youth-krav-maga" className="flex items-center gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Youth Krav Maga</span>
                <span className="sm:hidden">Youth KM</span>
              </TabsTrigger>
              <TabsTrigger value="youth-term-program" className="flex items-center gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Youth Term Program</span>
                <span className="sm:hidden">Term Program</span>
              </TabsTrigger>
              <TabsTrigger value="first-timer" className="flex items-center gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">First Timer Info</span>
                <span className="sm:hidden">First Timer</span>
              </TabsTrigger>
              <TabsTrigger value="member-app" className="flex items-center gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Smartphone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Member App</span>
                <span className="sm:hidden">App</span>
              </TabsTrigger>
              <TabsTrigger value="grading" className="flex items-center gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Grading</span>
                <span className="sm:hidden">Grading</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">General FAQ</span>
                <span className="sm:hidden">FAQ</span>
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
                    Krav Maga is a practical self-defence and combat system developed for real-world situations. 
                    It's effective for adults, youth, and corporate teams because it focuses on awareness, avoidance, 
                    and fast, instinctive responses rather than competition.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    At Kravist Singapore, we adapt Krav Maga for:
                  </p>
                  <ul className="text-gray-300 space-y-1 mb-4">
                    <li>• <strong>Kids and Teens:</strong> Confidence, character development, bullying prevention, and safety awareness.</li>
                    <li>• <strong>Adults:</strong> Realistic self-defence skills, full-body conditioning, and stress-tested scenarios to build both mental and physical resilience.</li>
                  </ul>
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
                        <li>• Safe, supervised training environment</li>
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
                    <strong>Why choose Kravist Youth Krav Maga for kids and teens?</strong>
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our Youth Division specializes in Krav Maga for kids (6–17 years), blending practical self-defence skills with character-building. 
                    Students learn to handle bullying, stranger-danger, and real-life scenarios in a safe, engaging environment.
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-orange-400">Why Parents Choose Us:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Experienced, certified instructors</li>
                      <li>• Fun, confidence-boosting classes</li>
                      <li>• Age-specific groups (Kids, Juniors, Teens)</li>
                      <li>• Proven track record as one of Singapore's leading youth self-defence programs</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-orange-400">Location:</h4>
                    <p className="text-gray-300">
                      We are located at 11 Irving Place (Tai Seng Point), near Tai Seng MRT, serving families in MacPherson, Paya Lebar, Serangoon, and surrounding areas.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg mt-6">
                    <p className="text-orange-400 font-semibold mb-2">Ready to enroll your child?</p>
                    <p className="text-gray-300 text-sm mb-4">
                      Spots are limited – join our waitlist to secure your child's place in the next term.
                    </p>
                    <div className="space-y-2">
                      <a 
                        href="https://forms.gle/LBNkox3CULPk6fFGA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition-colors text-center"
                      >
                        Join Youth Division Waitlist
                      </a>
                    </div>
                  </div>
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
                    We run three terms per year, each lasting around 4 months. Our program is divided into:
                  </p>
                  <ul className="text-gray-300 space-y-1 mb-4">
                    <li>• <strong>Kids:</strong> 6–10 years old</li>
                    <li>• <strong>Juniors:</strong> 10–14 years old</li>
                    <li>• <strong>Teens:</strong> 14–17 years old</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Each class is designed to be age-appropriate, progressive, and structured, building skills in self-defence, discipline, leadership, and accountability.
                    We offer grading and certification, allowing students to track progress and celebrate milestones.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Spots are limited — join our waitlist to secure your child's place.</strong>
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg mt-6">
                    <p className="text-orange-400 font-semibold mb-2">Ready to enroll your child?</p>
                    <p className="text-gray-300 text-sm mb-4">
                      Spots are limited – join our waitlist to secure your child's place in the next term.
                    </p>
                    <div className="space-y-2">
                      <a 
                        href="https://forms.gle/LBNkox3CULPk6fFGA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition-colors text-center"
                      >
                        Join Youth Division Waitlist
                      </a>
                    </div>
                  </div>
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
                    Starting Krav Maga is designed to be welcoming, safe, and encouraging for all students — whether you're a child, teen, or adult beginner.
                  </p>
                  <div className="bg-orange-900/30 border border-orange-500/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-400 mb-2">What to Bring:</h4>
                    <p className="text-orange-200">
                      Come a few minutes before class, closed toe shoes, comfortable workout attire and a water bottle.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-400">For Kids and Teens:</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Gentle, age-appropriate introduction</li>
                        <li>• Fun, engaging drills</li>
                        <li>• Peer encouragement and character focus</li>
                        <li>• CPR-certified instructors</li>
                        <li>• Regular progress updates</li>
                        <li>• Character development focus</li>
                        <li>• Family-friendly environment</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-400">For Adults:</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Beginner-friendly classes with step-by-step guidance</li>
                        <li>• No prior martial arts experience needed</li>
                        <li>• A focus on fitness, practical self-defence, and stress-tested drills</li>
                        <li>• Supportive community with like-minded students</li>
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
                    Use the Kravist Members App to schedule classes, manage your packages, and track training progress.
                  </p>
                  <div className="bg-orange-900/30 border border-orange-500/30 p-4 rounded-lg">
                    <p className="text-orange-200 text-sm">
                      <strong>Important:</strong> You must first{' '}
                      <a 
                        href="#pricing" 
                        className="text-orange-400 hover:text-orange-300 underline cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        sign up for a package
                      </a>
                      {' '}before being able to access the members app.
                    </p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-orange-400">App Features:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Class scheduling and booking</li>
                      <li>• Membership and package management</li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a 
                      href="https://apps.apple.com/sg/app/pushpress-members/id1309909578" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-6 w-6" />
                        <div className="text-left">
                          <div className="text-xs">Download on the</div>
                          <div className="text-lg font-semibold">App Store</div>
                        </div>
                      </div>
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.pushpress.memberportal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-6 w-6" />
                        <div className="text-left">
                          <div className="text-xs">Get it on</div>
                          <div className="text-lg font-semibold">Google Play</div>
                        </div>
                      </div>
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
                  <p className="text-gray-300 mb-3">
                    Both our adult and youth programs feature age-appropriate grading systems that recognize technical proficiency, 
                    physical development, and character growth.
                  </p>
                  <p className="text-gray-300">
                    For detailed information about grading requirements, levels, and schedules, please contact us directly or 
                    speak with one of our instructors during class.
                  </p>
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
                      <h4 className="font-semibold text-orange-400 mb-2">Q1: What makes Krav Maga unique as compared to Muay Thai, BJJ, Boxing, MMA and other martial arts?</h4>
                      <p className="text-gray-300">
                        Krav Maga is designed for real-world self-defence, where there are no rules and survival is the priority. Unlike traditional martial arts that often involve competition or sport, Krav Maga focuses on practical techniques and instinctive responses to real-life threats—such as grabs, strikes, or weapon scenarios.
                      </p>
                      <p className="text-gray-300 mt-2">
                        Our training emphasizes situational awareness, confidence, and quick decision-making, making it highly effective for adults, women, and kids who want to stay safe and prepared in everyday life.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Q2: Do I need to be fit or have prior martial arts experience?</h4>
                      <p className="text-gray-300">
                        No. Krav Maga is beginner-friendly and suitable for all fitness levels. Many of our adult students start with no martial arts background. We focus on building fundamental movements, fitness, and confidence step-by-step.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Q3: Is Krav Maga effective for women?</h4>
                      <p className="text-gray-300">
                        Absolutely. Krav Maga is designed to work regardless of size or strength, making it effective for women. Our women-only classes address common real-world scenarios (e.g., grabs, harassment, close-contact situations) while building confidence and physical conditioning.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Q4: What should I wear and bring to my first class?</h4>
                      <p className="text-gray-300">
                        Wear comfortable sportswear and athletic shoes. We provide protective gear for beginners. Bring a water bottle and a positive attitude—everything else will be guided by our instructors.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Q5: How often should I train?</h4>
                      <p className="text-gray-300">
                        For beginners, 2–3 classes per week helps build muscle memory and confidence quickly. As you progress, you can add more sessions or supplement with private training for faster improvement.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Q6: Will I get injured during training?</h4>
                      <p className="text-gray-300">
                        Safety is our top priority. Classes are taught in a controlled, progressive way, with protective equipment and beginner-friendly drills. While Krav Maga involves contact, we keep risk low, especially for new students.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Q7: Do you offer trial classes?</h4>
                      <p className="text-gray-300">
                        Yes. We offer trial classes for youth, adults, and women's programs. Check our pricing page for free trials (youth) and affordable trial sessions for adults.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Q8: What age groups can train at Kravist?</h4>
                      <p className="text-gray-300">We offer classes for:</p>
                      <ul className="text-gray-300 space-y-1 mt-2 ml-4">
                        <li>• Kids (6–10 years)</li>
                        <li>• Juniors (10–14 years)</li>
                        <li>• Teens (14–17 years)</li>
                        <li>• Adults (18+)</li>
                      </ul>
                      <p className="text-gray-300 mt-2">
                        Each group has a customized curriculum to ensure age-appropriate learning.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Q9: Do you provide corporate or private training?</h4>
                      <p className="text-gray-300">
                        Yes. We run corporate workshops for workplace safety, team-building, and stress management, as well as 1-on-1 or small group private training tailored to personal goals.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">Q10: Where is Kravist located?</h4>
                      <p className="text-gray-300">
                        Our studio is at 11 Irving Place, Tai Seng Point, Singapore (near Tai Seng MRT). We're easily accessible from MacPherson, Paya Lebar, Serangoon, and surrounding areas.
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
          <p className="text-gray-400 mb-6">Building stronger, safer communities one student at a time.</p>
          
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
            <a href="#divisions" className="text-gray-400 hover:text-white transition-colors">
              Programs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
