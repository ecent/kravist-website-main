import SEO from "@/components/SEO";
import FAQStructuredData from "@/components/FAQStructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Clock, Users, Award, CheckCircle } from "lucide-react";

const YouthLearnMore = () => {
  const faqs = [
    {
      question: "What age groups do you accept?",
      answer: "We welcome children and teens aged 6 to 17 years. Classes are grouped by age so everyone trains with peers at the right development level."
    },
    {
      question: "Do I need to bring equipment?",
      answer: "Just have your child arrive in closed-toe shoes, comfortable workout clothes, and a water bottle. All pads and associated gear are provided by Kravist."
    },
    {
      question: "What happens if we miss a class?",
      answer: "Simply coordinate a free make-up session with the instructor. We're flexible—your child can slot into another Youth class that same week at no extra cost."
    }
  ];

  const whyChooseUs = [
    {
      title: "Confidence & Self-Esteem",
      description: "Speaking up in every class builds confidence alongside the strength that comes from physical training.",
      icon: CheckCircle
    },
    {
      title: "Real-World Safety Skills",
      description: "Anti-bullying strategies, stranger danger awareness, and practical self-defence techniques.",
      icon: Users
    },
    {
      title: "Discipline & Values",
      description: "Clear rules, structure and respect guide behaviour.",
      icon: Shield
    },
    {
      title: "Parent Progress Reports",
      description: "End-of-term badges + written coach feedback.",
      icon: Award
    }
  ];

  const classStructure = [
    { step: "1", activity: "Warm up and games" },
    { step: "2", activity: "Stretching and mobility" },
    { step: "3", activity: "Technique introduction" },
    { step: "4", activity: "Technique games and summary" },
    { step: "5", activity: "Wind down" }
  ];

  return (
    <>
      <SEO
        title="Kids & Teens Krav Maga | Learn More | Kravist"
        description="Kids Krav Maga in Singapore—build confidence, discipline and self-defence skills. Learn how our Youth program works and book a trial class."
        url="https://www.kravist.sg/programs/youth/learn-more"
        keywords="kids krav maga singapore, teens martial arts, youth self defence, children confidence building"
      />
      <FAQStructuredData faqs={faqs} />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 lg:py-32">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/lovable-uploads/e1f2812e-eebc-4041-803f-87ca9deb6746.png')` }}
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Give your child the confidence to stand strong.
            </h1>
            <Button size="lg" className="mt-8 bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4" asChild>
              <a href="/#pricing">Book a Trial Class</a>
            </Button>
          </div>
        </section>

        {/* Why Parents Choose Us */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Why Parents Choose Kravist
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <div className="space-y-8">
                {whyChooseUs.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="p-3 bg-orange-600 rounded-lg flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl mb-3 text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/6ab596ea-6de2-4054-8650-2a47eb50138c.png" 
                  alt="Youth Krav Maga students training together"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Class Structure */}
        <section className="py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              What a 60-Minute Class Looks Like
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="/lovable-uploads/58d138e6-4d9a-46b1-ad96-bbd524408fe9.png" 
                  alt="Youth students listening to instructor during reflection circle"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                {classStructure.map((item, index) => (
                  <div key={index} className="flex items-center gap-8 p-6 rounded-lg hover:bg-gray-900 transition-colors border border-gray-800 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-xl text-white">{item.activity}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Options */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Two Ways to Train
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* General Open Classes */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-600 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl text-orange-400">General Open Classes</h3>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Flexible training where curriculum may vary from week to week. Join at any time throughout the year!
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                        <span className="font-semibold">Juniors</span>
                        <span className="text-orange-400">Fridays 5:15pm</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                        <span className="font-semibold">Kids</span>
                        <span className="text-orange-400">Fridays 6:15pm</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                        <span className="font-semibold">Teens</span>
                        <span className="text-orange-400">Sundays 4:30pm</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-orange-600/20 border border-orange-600/30 rounded-lg">
                      <p className="text-orange-200 font-semibold">Free trial classes conducted during these sessions!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weekend Term Classes */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-600 rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl text-orange-400">Weekend Term Classes</h3>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Multi-month structured program with weekly classes (3 terms yearly) including progressive curriculum and final grading ceremony.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                        <span className="font-semibold">Kids</span>
                        <span className="text-orange-400 font-bold">$450</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                        <span className="font-semibold">Juniors</span>
                        <span className="text-orange-400 font-bold">$495</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                        <span className="font-semibold">Teens</span>
                        <span className="text-orange-400 font-bold">$510</span>
                      </div>
                    </div>
                    <div className="space-y-2 mt-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Guaranteed weekly slot</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Makeup sessions available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Progressive methodology</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Final grading & certificate ceremony</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold" asChild>
                        <a href="/#pricing">Join Waitlist</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Development Program */}
        <section className="py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Building Future Leaders
            </h2>
            <div className="max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-orange-600 rounded-lg">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-2xl text-orange-400">Leadership Through Action</h3>
                      </div>
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Our Youth program goes beyond physical training to develop confident leaders through structured activities and real-world challenges.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-800 rounded-lg">
                          <h4 className="font-semibold text-white mb-2">Speaking & Communication</h4>
                          <p className="text-gray-300 text-sm">Students practice public speaking in a supportive group environment.</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                          <h4 className="font-semibold text-white mb-2">Personal Challenges</h4>
                          <p className="text-gray-300 text-sm">Real-world challenges that encourage responsibility and personal growth.</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                          <h4 className="font-semibold text-white mb-2">Reflection & Growth</h4>
                          <p className="text-gray-300 text-sm">Each session begins with students sharing experiences and lessons learned.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 p-6 rounded-lg border border-orange-600/30">
                      <h4 className="font-bold text-lg text-orange-400 mb-4">Leadership Skills Developed:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          <span>Public speaking confidence</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          <span>Personal responsibility</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          <span>Empathy and kindness</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          <span>Self-reflection abilities</span>
                        </div>
                        <div className="flex items-center gap-2 sm:col-span-2">
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          <span>Goal-setting and achievement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety & Instructor Credentials */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Meet Our Youth Instructors
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Edwin */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/lovable-uploads/71ffb50c-9f16-4066-8039-e8be3ca98a30.png" 
                    alt="Edwin Peng"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-orange-400">Edwin Peng</h3>
                  <p className="text-gray-400 text-sm mb-3">Head Instructor & Founder</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Krav Maga Level Expert 3</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>20+ years training and teaching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Ex-Singapore Commandos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>CPR Certified</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Minnie */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/lovable-uploads/c2a8d8db-85b1-409c-a2f9-205208b6bfdd.png" 
                    alt="Minnie Teo"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-orange-400">Minnie Teo</h3>
                  <p className="text-gray-400 text-sm mb-3">Head of Women's Division</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Krav Maga Level G3</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Autism Fitness Certified Pro</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Ex-Singapore Police (10+ years)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>CPR Certified</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Ethel */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/lovable-uploads/95b3db7b-d1a6-4391-8a7a-f8ca108172bc.png" 
                    alt="Ethel Wee"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-orange-400">Ethel Wee</h3>
                  <p className="text-gray-400 text-sm mb-3">Youth Instructor</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Krav Maga Level G4</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Certified Youth Instructor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>7+ years teaching experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>CPR Certified</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-300">
                <strong className="text-orange-400">Ratio max 1:8</strong> • <strong className="text-orange-400">Mats sanitised daily</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-800 rounded-lg bg-gray-900">
                    <AccordionTrigger className="text-left text-white text-lg font-semibold px-6 py-4 hover:text-orange-400 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300 text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-8">
                <Button variant="outline" className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white" asChild>
                  <a href="/#faq">View All Frequently Asked Questions</a>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-white leading-tight">
              Give your child the tools to succeed.
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-xl px-12 py-6" asChild>
                <a href="/#pricing">Book a Youth Trial Class</a>
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white text-xl px-12 py-6" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default YouthLearnMore;