import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Clock, Shield, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";

const WomensLearnMore = () => {
  const seoConfig = {
    title: "Women's Self-Defence Program | Kravist Singapore - Learn More",
    description: "By Women. For Women. Built to Fight Back. Join our 8-week structured women-only Krav Maga program focused on real threats and practical self-defence skills.",
    keywords: "women's self defence, Krav Maga women, female instructors Singapore, women only classes, self defence course",
    canonical: "https://kravist.sg/programs/women/learn-more"
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

  return (
    <>
      <SEO {...seoConfig} />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header */}
        <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold text-primary">KRAVIST</h1>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
              By Women. For Women. Built to Fight Back.
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Empowerment Through Action
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Step into a structured, women-only self-defence program that goes beyond the basics. 
              Learn to handle real threats with confidence, clarity, and community.
            </p>
          </div>
        </section>

        {/* Training Images Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <img 
                src="/lovable-uploads/e0099448-ff6e-41ae-86e1-f591e5594a04.png" 
                alt="Women practicing Krav Maga self-defence techniques in training"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="/lovable-uploads/a96aa6de-1ab9-4df9-908e-da5cbb4b811d.png" 
                alt="Female instructors teaching defensive techniques in women-only class"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="/lovable-uploads/2adc9748-bcb8-4fb4-9267-ec730bfe1d38.png" 
                alt="Women's self-defence training in supportive group environment"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="/lovable-uploads/405bb3ce-6109-4f41-ad69-0dca75838d9d.png" 
                alt="Practical self-defence scenarios practiced by women"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="/lovable-uploads/0c1e90f5-3107-44e7-9fb4-a99121e06296.png" 
                alt="Ground defence techniques taught in women's Krav Maga program"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="/lovable-uploads/14574a17-e208-4761-b276-58b06d58c77e.png" 
                alt="Women learning escape techniques and defensive skills"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Just Self-Defence. Self-Mastery.</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our flagship women's program is a deep-dive experience — not a sampler. 
                You'll walk away with real skills, not vague concepts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Breakdown */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">8 Weeks. Real Growth. Structured Learning.</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each term includes 8x sessions of 1.5 hours with fixed groups for community and consistency.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6">What's Included:</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <span>8x sessions of 1.5 hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <span>Fixed groups for community and consistency</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <span>Scenario-focused training for threats relevant to women</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <span>Hands-on techniques and progressive drills</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <span>End-of-term simulations for practical confidence</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Term Structure:</h3>
                <div className="space-y-4">
                  {weeklyStructure.map((week, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline" className="text-sm">Weeks {week.weeks}</Badge>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{week.focus}</h4>
                        <p className="text-muted-foreground">{week.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Life Focus */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Real Life, Not Just the Mat</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                What You'll Learn Might Just Save Your Life.
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                We design each term around real threats women face — from harassment to physical assault. 
                Each intake may focus on a different set of scenarios such as:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {realLifeScenarios.map((scenario, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                    <p className="text-lg font-medium">{scenario}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community & Rates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bring Your Buddy. Or Join as a Kravist Parent.</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe in growing a strong, connected community. That's why we offer:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Buddy Rate</h3>
                  <p className="text-muted-foreground text-lg">Train together, grow together</p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Parent Rate</h3>
                  <p className="text-muted-foreground text-lg">Special rates for existing Kravist parents</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fixed Term Intakes</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["January", "April", "July", "October"].map((month) => (
                <Badge key={month} variant="secondary" className="text-lg px-6 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {month}
                </Badge>
              ))}
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to start your empowerment journey? Contact us to secure your spot in the next intake.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
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