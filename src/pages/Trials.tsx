import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const Trials = () => {
  const trialPrograms = [
    {
      category: "Youth Programs",
      programs: [
        {
          name: "Kids (6-10)",
          price: "$10",
          link: "https://kravist.pushpress.com/landing/plans/plan_cd5f10a5137544/login"
        },
        {
          name: "Juniors (10-14)",
          price: "$10",
          link: "https://kravist.pushpress.com/landing/plans/plan_c949e71f9af2d5/login"
        },
        {
          name: "Teens (14-17)",
          price: "$10",
          link: "https://kravist.pushpress.com/landing/plans/plan_f2f2e14d3e5ec5/login"
        }
      ]
    },
    {
      category: "General Adults",
      programs: [
        {
          name: "General Adults",
          price: "$20",
          link: "https://kravist.pushpress.com/landing/plans/plan_f8520cf13fd6f3/login"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Trial Classes | Kravist Self Defence Studio Singapore"
        description="Try our Krav Maga classes with trial sessions for kids, juniors, teens ($10), and adults ($20). Affordable trials for all programs."
        keywords="krav maga trial, self defence trial, martial arts trial Singapore, kids martial arts trial, adult krav maga trial"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand">KRAVIST</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <a href="/#divisions" className="hover:text-brand transition-colors">Programs</a>
            <span className="text-brand">Trials</span>
            <a href="/#pricing" className="hover:text-brand transition-colors">Pricing</a>
            <a href="/#schedule" className="hover:text-brand transition-colors">Schedule</a>
            <a href="/#instructors" className="hover:text-brand transition-colors">Instructors</a>
            <a href="/#faq" className="hover:text-brand transition-colors">FAQ</a>
            <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 lg:py-24 pt-24 min-h-[400px] lg:min-h-[450px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/e1f2812e-eebc-4041-803f-87ca9deb6746.png"
            alt="Kravist trial classes"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-brand bg-clip-text text-transparent drop-shadow-lg">
            Trial Classes
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Trial Programs */}
          <div className="space-y-8">
            {trialPrograms.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-semibold text-brand">{category.category}</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.programs.map((program, programIdx) => (
                    <Card key={programIdx} className="relative overflow-hidden bg-gray-900 border-gray-800 hover:border-brand/50 transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{program.name}</CardTitle>
                        <CardDescription className="text-3xl font-bold text-brand">
                          {program.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a
                          href={program.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button className="w-full bg-brand hover:bg-brand/90 text-brand-foreground" size="lg">
                            Book Trial
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 py-8">
        <div className="container text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kravist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Trials;
