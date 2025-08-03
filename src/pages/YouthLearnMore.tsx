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
      answer: "Kids 6-9, Juniors 9-12, Teens 12-16."
    },
    {
      question: "Do I need equipment?",
      answer: "Sportswear for the trial; uniform provided on enrolment."
    },
    {
      question: "How much does it cost?",
      answer: "From S$___ per 17-week term."
    },
    {
      question: "Missed class policy?",
      answer: "Attend any other Youth slot that week."
    }
  ];

  const whyChooseUs = [
    {
      title: "Confidence & Self-Esteem",
      description: "Speaking up in every class builds inner strength.",
      icon: CheckCircle
    },
    {
      title: "Purpose-Driven Fun",
      description: "Games like \"Guardian Tag\" turn techniques into play.",
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
    { step: "1", activity: "Warm-up & Mobility", duration: "5 min" },
    { step: "2", activity: "Game Activation", duration: "10 min" },
    { step: "3", activity: "Technique Focus", duration: "15 min" },
    { step: "4", activity: "Scenario & Partner Work", duration: "10 min" },
    { step: "5", activity: "Reflection Circle", duration: "5 min" }
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
              <a href="/schedule#youth-trial">Book a Trial Class</a>
            </Button>
          </div>
        </section>

        {/* Why Parents Choose Us */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Why Parents Choose Us
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
                    <div className="flex-shrink-0 text-orange-400 font-bold text-lg">
                      {item.duration}
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
                      Structured 15-16 week program with progressive curriculum and final grading ceremony.
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
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Book for Kids */}
        <section className="py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              Special: Kids Mission Book
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-orange-600 rounded-lg">
                          <Award className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-2xl text-orange-400">Mission Book Program</h3>
                      </div>
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Our Kids division participants receive a special Mission Book with homework assignments that extend learning beyond the dojo.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg">
                          <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Class Ends with Mission</h4>
                            <p className="text-gray-300">Each class concludes with students receiving a mission to complete at home - from talking to family members to helping with chores.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg">
                          <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Class Begins with Sharing</h4>
                            <p className="text-gray-300">The next class starts with the group sharing their experiences and lessons learned from their missions.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 p-8 rounded-lg border border-orange-600/30">
                        <h4 className="font-bold text-xl text-orange-400 mb-4">Example Missions:</h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                            <span>Share something you learned with a family member</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                            <span>Help with a household chore without being asked</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                            <span>Practice a confidence-building exercise</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                            <span>Show kindness to someone new</span>
                          </li>
                        </ul>
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
              Safety & Instructor Credentials
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-2xl mb-4 text-orange-400">Edwin (Head Coach)</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Krav Maga Expert 3, ex-Singapore Commandos, CPR Certified
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-2xl mb-4 text-orange-400">Minnie</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Krav Maga G3, Autism Fitness Pro, SOC Defence Tactics Instructor, CPR Certified
                    </p>
                  </CardContent>
                </Card>
                <div className="text-center">
                  <p className="text-xl text-gray-300">
                    <strong className="text-orange-400">Ratio max 1:10</strong> • <strong className="text-orange-400">Mats sanitised daily</strong>
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/27f01df4-8e82-4d73-95ab-17f439c994ff.png" 
                  alt="Instructor engaging with youth students in a circle"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
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
            </div>
          </div>
        </section>

        {/* Parent Quotes */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
              What Parents & Students Say
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="/lovable-uploads/ab7732f8-d959-4846-a955-5051702f33e2.png" 
                  alt="Youth students actively participating in Krav Maga training"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                  <CardContent className="p-8">
                    <blockquote className="text-xl italic text-gray-300 mb-6 leading-relaxed">
                      "Aiden's confidence has soared—he spoke at school assembly!"
                    </blockquote>
                    <cite className="text-orange-400 font-bold text-lg">– Michelle T.</cite>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                  <CardContent className="p-8">
                    <blockquote className="text-xl italic text-gray-300 mb-6 leading-relaxed">
                      "Fun games, real skills. Best part of my week."
                    </blockquote>
                    <cite className="text-orange-400 font-bold text-lg">– Liam (13)</cite>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule & Pricing Teaser */}
        <section className="py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-white">
              Schedule & Pricing
            </h2>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl text-gray-300 mb-6">
                <strong className="text-orange-400">General Classes:</strong> Flexible drop-in training • <strong className="text-orange-400">Term Classes:</strong> Structured 15-16 week programs
              </p>
              <p className="text-xl text-gray-300 mb-8">
                <strong className="text-orange-400">Term Pricing:</strong> Kids $450 • Juniors $495 • Teens $510
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="outline" className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white text-lg px-6 py-3" asChild>
                  <a href="/schedule">Full Schedule</a>
                </Button>
                <Button variant="outline" className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white text-lg px-6 py-3" asChild>
                  <a href="/pricing">Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-white leading-tight">
              Ready to see them thrive?
            </h2>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-xl px-12 py-6" asChild>
              <a href="/schedule#youth-trial">Book a Youth Trial Class</a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default YouthLearnMore;