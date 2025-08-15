import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Clock, Shield, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";
import FAQStructuredData from "@/components/FAQStructuredData";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";

const WomensLearnMore = () => {
  const seoConfig = {
    title: "Women's Self-Defence Program | Kravist Singapore - Learn More",
    description: "By Women. For Women. Built to Fight Back. Join our 8-week structured women-only Krav Maga program focused on real threats and practical self-defence skills.",
    keywords: "women's self defence, Krav Maga women, female instructors Singapore, women only classes, self defence course",
    url: "https://kravist.sg/programs/women/learn-more"
  };

  const weeklyStructure = [
    { weeks: "1–2", focus: "Building the Bricks", description: "Foundations, stance, striking, and situational awareness" },
    { weeks: "3–6", focus: "Deep Dive", description: "Techniques, repetition, reflex building" },
    { weeks: "7–8", focus: "Real-World Rehearsal", description: "Revision, decision-making under pressure, drills & simulations" }
  ];

  const realLifeScenarios = [
    "Getting grabbed from behind",
    "Escaping wrist holds or choke holds", 
    "Ground defence and regaining control",
    "Armed or unarmed assaults"
  ];

  const whyChooseUs = [
    { icon: Users, title: "Women-Only, Women-Led", description: "Train in a supportive space with professional female instructors who get it." },
    { icon: Target, title: "Focused Learning, Strong Retention", description: "We zoom in on 2–3 high-risk situations per term for better recall and real-world application." },
    { icon: Clock, title: "Repetition, Muscle Memory, Mastery", description: "Our sessions are designed for retention, not just exposure." },
    { icon: Shield, title: "Smart Progression", description: "Challenges are layered, ensuring you're never thrown into the deep end." }
  ];

  const faqs = [
    {
      question: "Is this program suitable for beginners?",
      answer: "Absolutely! Our women's program is designed for all fitness levels and experience. We start with fundamentals and build progressively."
    },
    {
      question: "What should I wear to class?",
      answer: "Comfortable athletic wear and sneakers. We provide all necessary protective equipment for training."
    },
    {
      question: "How do I register for the next intake?",
      answer: "Contact us to secure your spot in the upcoming January, April, July, or October intake. Spaces are limited to maintain quality training."
    }
  ];

  // Breadcrumb data
  const breadcrumbItems = [
    { name: "Programs", url: "/#divisions" },
    { name: "Women's Division", url: "/programs/women/learn-more", isActive: true }
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        url={seoConfig.url}
      />
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData items={breadcrumbItems.map(item => ({ name: item.name, url: `https://kravist.sg${item.url}` }))} />

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-orange-500">KRAVIST</div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
                <a href="/#divisions" className="hover:text-orange-400 transition-colors">Programs</a>
                <a href="/#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
                <a href="/#schedule" className="hover:text-orange-400 transition-colors">Schedule</a>
                <a href="/#instructors" className="hover:text-orange-400 transition-colors">Instructors</a>
                <a href="/#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 lg:py-32 pt-32">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/lovable-uploads/e1f2812e-eebc-4041-803f-87ca9deb6746.png')` }}
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Empowerment Through Action
            </h1>
            <p className="text-2xl text-orange-400 font-semibold mb-6">
              By Women. For Women. Built to Fight Back.
            </p>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Step into a structured, women-only self-defence program that goes beyond the basics. 
              Learn to handle real threats with confidence, clarity, and community.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Not Just Self-Defence. Self-Mastery.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600/20 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Program Breakdown */}
        <section className="py-16 lg:py-24 bg-gray-800">{/* Added background shading */}
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              8 Weeks. Real Growth. Structured Learning.
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-white">What's Included:</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="bg-orange-600 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-300">8x sessions of 1.5 hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-orange-600 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-300">Fixed groups for community and consistency</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-orange-600 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-300">Scenario-focused training for threats relevant to women</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-orange-600 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-300">Hands-on techniques and progressive drills</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-orange-600 w-2 h-2 rounded-full"></div>
                    <span className="text-gray-300">End-of-term simulations for practical confidence</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Term Structure:</h3>
                <div className="space-y-4">
                  {weeklyStructure.map((week, index) => (
                    <Card key={index} className="bg-gray-800 border-l-4 border-l-orange-600 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline" className="text-sm border-orange-600 text-orange-400">Weeks {week.weeks}</Badge>
                        </div>
                        <h4 className="text-lg font-semibold mb-2 text-white">{week.focus}</h4>
                        <p className="text-gray-300">{week.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Life Focus */}
        <section className="py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Built for Real Life, Not Just the Mat
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-300 mb-8">
                What You'll Learn Might Just Save Your Life.
              </p>
              <p className="text-lg text-gray-300 mb-12">
                We design each term around real threats women face — from harassment to physical assault. 
                Each intake may focus on a different set of scenarios such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {realLifeScenarios.map((scenario, index) => (
                  <Card key={index} className="p-6 bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                    <CardContent className="p-2">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-6 w-6 text-orange-400" />
                        <p className="text-lg font-medium text-white">{scenario}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community & Rates */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Bring Your Buddy. Or Join as a Kravist Parent.
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 text-center mb-12">
                We believe in growing a strong, connected community. That's why we offer:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="text-center p-8 bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                  <CardContent>
                    <Heart className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-4 text-white">Buddy Rate</h3>
                    <p className="text-gray-300 text-lg">Train together, grow together</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-8 bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                  <CardContent>
                    <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-4 text-white">Parent Rate</h3>
                    <p className="text-gray-300 text-lg">Special rates for existing Kravist parents</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black">{/* Changed from orange gradient */}
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Fixed Term Intakes</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["January", "April", "July", "October"].map((month) => (
                <Badge key={month} variant="secondary" className="text-lg px-6 py-2 bg-orange-600 text-white">{/* Changed badge styling */}
                  <Calendar className="h-4 w-4 mr-2" />
                  {month}
                </Badge>
              ))}
            </div>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Ready to start your empowerment journey? Contact us to secure your spot in the next intake.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white" asChild>{/* Updated button styling */}
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black" asChild>
                <Link to="/#divisions">View All Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WomensLearnMore;