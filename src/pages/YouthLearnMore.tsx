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

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Give your child the confidence to stand strong.
            </h1>
            <Button size="lg" className="mt-8" asChild>
              <a href="/schedule#youth-trial">Book a Trial Class</a>
            </Button>
          </div>
        </section>

        {/* Why Parents Choose Us */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Parents Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="border-border/50 bg-card/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <IconComponent className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Class Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              What a 45-Minute Class Looks Like
            </h2>
            <div className="max-w-3xl mx-auto">
              {classStructure.map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-4 rounded-lg hover:bg-secondary/20 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-foreground">{item.activity}</h3>
                  </div>
                  <div className="flex-shrink-0 text-muted-foreground font-medium">
                    {item.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Instructor Credentials */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Safety & Instructor Credentials
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Edwin (Head Coach)</h3>
                  <p className="text-muted-foreground">
                    Krav Maga Expert 3, ex-Singapore Commandos, CPR Certified
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Minnie</h3>
                  <p className="text-muted-foreground">
                    Krav Maga G3, Autism Fitness Pro, SOC Defence Tactics Instructor, CPR Certified
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                Ratio max 1:10 • Mats sanitised daily
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Parent Quotes */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              What Parents & Students Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "Aiden's confidence has soared—he spoke at school assembly!"
                  </blockquote>
                  <cite className="text-primary font-semibold">– Michelle T.</cite>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "Fun games, real skills. Best part of my week."
                  </blockquote>
                  <cite className="text-primary font-semibold">– Liam (13)</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Schedule & Pricing Teaser */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Schedule & Pricing
            </h2>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Classes:</strong> Sat & Sun 10/11 AM • Wed 5 PM • Fri 5 PM
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Term length:</strong> 17 weeks • Fees from S$___ / term
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/schedule">Full Schedule</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/pricing">Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              Ready to see them thrive?
            </h2>
            <Button size="lg" asChild>
              <a href="/schedule#youth-trial">Book a Youth Trial Class</a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default YouthLearnMore;