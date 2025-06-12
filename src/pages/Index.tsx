import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Shield, Target, Building, User, DollarSign, BookOpen, Info, Smartphone, Award, HelpCircle, Facebook, Instagram } from "lucide-react";
import Instructors from "@/components/Instructors";
import Schedule from "@/components/Schedule";

const Index = () => {
  const [activeSection, setActiveSection] = useState("youth");

  const divisions = [
    {
      id: "youth",
      title: "Youth Division",
      subtitle: "Ages 6-17",
      description: "Singapore's premier youth self defense program. Our Youth Division provides a safe, structured environment where children develop confidence, character, and practical self-defence skills. Designed with parents' peace of mind in mind, our age-appropriate curriculum builds resilience and life skills that extend far beyond the training mat.",
      icon: Shield,
      features: ["Parent-approved curriculum", "Character development focus", "Anti-bullying training", "Confidence & discipline building", "CPR-certified instructors", "Safe learning environment"],
      images: [
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
      features: ["Women-only classes", "Real-world scenarios", "Stress testing"],
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
      features: ["Beginner to advanced", "Full-body conditioning", "Stress drills", "Progressive curriculum"],
      images: [
        "/lovable-uploads/31c7cb7f-41a1-4955-b5ad-4242a419b348.png",
        "/lovable-uploads/5c0fca09-c6a3-4bf6-aae3-81ec7d7c9417.png"
      ]
    },
    {
      id: "corporate",
      title: "Corporate Training",
      subtitle: "Team Building & Safety",
      description: "Custom programmes for businesses focusing on employee safety, team building, and stress management through Krav Maga principles.",
      icon: Building,
      features: ["On-site training", "Team building", "Workplace safety", "Stress management"]
    },
    {
      id: "private",
      title: "Private Training",
      subtitle: "Personalised Instruction",
      description: "One-on-one or small group sessions tailored to your specific goals, schedule, and skill level for accelerated learning.",
      icon: User,
      features: ["Customised curriculum", "Flexible scheduling", "Accelerated learning", "Personal attention"]
    }
  ];

  const activeDivision = divisions.find(d => d.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-orange-500">KRAVIST</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="#divisions" className="hover:text-orange-400 transition-colors">Youth Program</a>
              <a href="#schedule" className="hover:text-orange-400 transition-colors">Schedule</a>
              <a href="#instructors" className="hover:text-orange-400 transition-colors">Instructors</a>
              <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
              <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
              <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            SINGAPORE'S LEADING YOUTH SELF DEFENSE
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300 max-w-3xl mx-auto">
            Our CPR certified instructors are building confident, disciplined and resilient students through authentic self defense training. 
            Our flagship Youth division is designed with parents' peace of mind and children's development at its core.
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Adult and Women's Division classes available for the whole family.
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
      <section id="divisions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Led by our Youth Division, we offer world-class self defense training for the whole family. 
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeDivision.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                {activeDivision.images ? (
                  <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                      {activeDivision.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="h-64 rounded-lg overflow-hidden">
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

      <Schedule />
      
      <Instructors />

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-600 rounded-lg">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Kravist</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Singapore's premier youth-focused martial arts academy, building character and confidence in children while serving the whole family.
            </p>
          </div>

          <Tabs defaultValue="what-is" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-gray-800 mb-8">
              <TabsTrigger value="what-is" className="flex items-center gap-2 text-sm">
                <Info className="h-4 w-4" />
                What is Krav Maga?
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
                FAQ
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
                    Krav Maga is a military self defence and fighting system developed for the Israel Defence Forces. 
                    At Kravist, we've adapted this proven system specifically for youth development, emphasizing character building, 
                    confidence, and practical safety skills in age-appropriate ways.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Unlike traditional martial arts, our youth-focused Krav Maga program teaches children to be aware of their surroundings, 
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
                    Welcome to Singapore's most trusted youth martial arts program! We understand that starting something new can be 
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
                  <div className="bg-orange-900/30 border border-orange-600/50 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold text-orange-400 mb-2">Free Trial Class</h4>
                    <p className="text-gray-300">
                      We offer a complimentary first class for new families. This gives both you and your child the opportunity to 
                      experience our teaching style and meet our community before making a commitment.
                    </p>
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
                    Stay connected with our gym community through our dedicated member app. 
                    Manage your training schedule, track progress, and stay up-to-date with gym news.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-400">App Features:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Class scheduling and booking</li>
                        <li>• Training progress tracking</li>
                        <li>• Technique video library</li>
                        <li>• Community messaging</li>
                        <li>• Event notifications</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-400">Benefits:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Never miss a class</li>
                        <li>• Track your belt progression</li>
                        <li>• Access training videos anytime</li>
                        <li>• Connect with training partners</li>
                        <li>• Receive gym updates instantly</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      Download for iOS
                    </Button>
                    <Button variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800">
                      Download for Android
                    </Button>
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
                    Our grading system follows the official Krav Maga belt progression, 
                    ensuring you develop proper technique and understanding at each level.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-400">Belt Levels:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• White Belt (Beginner)</li>
                        <li>• Yellow Belt</li>
                        <li>• Orange Belt</li>
                        <li>• Green Belt</li>
                        <li>• Blue Belt</li>
                        <li>• Brown Belt</li>
                        <li>• Black Belt Levels 1-5</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-400">Grading Requirements:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Minimum training hours</li>
                        <li>• Technical proficiency</li>
                        <li>• Physical fitness standards</li>
                        <li>• Stress test scenarios</li>
                        <li>• Knowledge assessment</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold text-orange-400 mb-2">Grading Schedule</h4>
                    <p className="text-gray-300">
                      Grading sessions are held quarterly, allowing students adequate time to prepare and master 
                      the required techniques for their next belt level.
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
                      <h4 className="font-semibold text-orange-400 mb-2">Is the youth program safe for my child?</h4>
                      <p className="text-gray-300">
                        Absolutely! Our youth program is specifically designed with safety as the top priority. All our instructors are CPR certified, 
                        and we use age-appropriate techniques that focus on confidence building rather than aggression.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">What age groups do you cater to?</h4>
                      <p className="text-gray-300">
                        Our flagship Youth Division serves ages 6-17 with age-specific classes: Kids (6-10), Juniors (10-13), and Teens (14-17). 
                        Each age group has curriculum designed for their developmental stage.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">How will this help my child with bullying?</h4>
                      <p className="text-gray-300">
                        Our program builds confidence, situational awareness, and de-escalation skills. Children learn to project confidence, 
                        recognize potentially dangerous situations, and have the self-assurance to seek help when needed.
                      </p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Do you offer family packages?</h4>
                      <p className="text-gray-300">
                        Yes! While our Youth Division is our flagship program, we offer complementary adult classes so the whole family can train together. 
                        Contact us for family package options.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">How quickly will my child progress?</h4>
                      <p className="text-gray-300">
                        Every child progresses at their own pace. Our focus is on character development and confidence building first, 
                        with belt progression following naturally as skills develop.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-600 rounded-lg">
                <DollarSign className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Invest in your child's future with our flagship Youth Program, or explore our complementary family offerings.
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
                  <h4 className="font-semibold text-orange-200 mb-3">Term Programme</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-orange-100">Kids (6-10)</span>
                      <span className="font-semibold">$450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-100">Juniors (10-13)</span>
                      <span className="font-semibold">$495</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-100">Teens (14-17)</span>
                      <span className="font-semibold">$510</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-200 mb-3">Trial & General Classes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-orange-100">Youth Trials</span>
                      <span className="font-semibold text-green-400">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-100">General Classes</span>
                      <span className="font-semibold">$35</span>
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
                  <h4 className="font-semibold text-orange-400 mb-3">Term Programme</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Term Programme</span>
                      <span className="font-semibold">$250</span>
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
                      <span className="text-gray-300">Trial</span>
                      <span className="font-semibold">$20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">5 Sessions</span>
                      <span className="font-semibold">$160</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">10 Sessions</span>
                      <span className="font-semibold">$285</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">25 Sessions</span>
                      <span className="font-semibold">$660</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">50 Sessions</span>
                      <span className="font-semibold">$950</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-3">Unlimited Access</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">1 Month Unlimited</span>
                      <span className="font-semibold">$275</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">3 Months Unlimited</span>
                      <span className="font-semibold">$760</span>
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
                      <span className="text-gray-300">Corporate Programmes</span>
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

      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-400">Youth Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">20+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-400">CPR Certified</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-400">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-orange-500 mb-4">KRAVIST</div>
          <p className="text-gray-400 mb-6">Singapore's most trusted youth martial arts program, building character and confidence in the next generation.</p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a 
              href="https://instagram.com" 
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
              Youth Program
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
