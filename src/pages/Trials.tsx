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
          price: "FREE",
          link: "https://kravist.pushpress.com/landing/plans/plan_cd5f10a5137544/login"
        },
        {
          name: "Juniors (10-14)",
          price: "FREE",
          link: "https://kravist.pushpress.com/landing/plans/plan_c949e71f9af2d5/login"
        },
        {
          name: "Teens (14-17)",
          price: "FREE",
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
    <div className="min-h-screen bg-background">
      <SEO
        title="Trial Classes | Kravist Self Defence Studio Singapore"
        description="Try our Krav Maga classes with trial sessions for kids, juniors, teens, and adults. Free trials for youth programs and affordable adult trials."
        keywords="krav maga trial, self defence trial, martial arts trial Singapore, kids martial arts trial, adult krav maga trial"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">KRAVIST</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Trial Classes
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience Krav Maga training firsthand. Choose your program and book your trial today.
            </p>
          </div>

          {/* Trial Programs */}
          <div className="space-y-8">
            {trialPrograms.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-semibold">{category.category}</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.programs.map((program, programIdx) => (
                    <Card key={programIdx} className="relative overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-xl">{program.name}</CardTitle>
                        <CardDescription className="text-3xl font-bold text-primary">
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
                          <Button className="w-full" size="lg">
                            Book {program.price === "FREE" ? "Free" : ""} Trial
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle>What to Expect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Experience our training methodology firsthand</p>
              <p>• Meet our certified instructors</p>
              <p>• Learn fundamental Krav Maga techniques</p>
              <p>• No prior experience necessary</p>
              <p>• All equipment provided</p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kravist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Trials;
