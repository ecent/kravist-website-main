import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Users, Rocket } from "lucide-react";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-fg-mute max-w-2xl mx-auto">
            Everything you need to know about training at Kravist.
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 mb-8 h-auto">
            <TabsTrigger value="general" className="flex items-center justify-center gap-2 text-sm p-3">
              <HelpCircle className="h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="youth" className="flex items-center justify-center gap-2 text-sm p-3">
              <Users className="h-4 w-4" />
              Youth Programs
            </TabsTrigger>
            <TabsTrigger value="getting-started" className="flex items-center justify-center gap-2 text-sm p-3">
              <Rocket className="h-4 w-4" />
              Getting Started
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="what-is" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">What is Krav Maga?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Krav Maga is a practical self-defence system — not a martial art — designed for real-world situations. There are no competitions or rules. It focuses on awareness, avoidance, and fast, instinctive responses to threats like grabs, strikes, and weapon scenarios. At Kravist, it's effective for adults, teens, and kids because it builds both physical skills and mental confidence.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="difference" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">What makes Krav Maga different from Muay Thai, BJJ, Boxing, or MMA?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Those are combat sports with rules and competition. Krav Maga is a self-defence system built for survival — no rings, no rounds, no weight classes. Our training focuses on real-life threat scenarios and instinctive decision-making under pressure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="fitness" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">Do I need to be fit or have experience?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  No. Classes at Kravist are beginner-friendly and suitable for all fitness levels. Many students start with zero martial arts background. We build fitness, technique, and confidence progressively.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="safety" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">Is Krav Maga safe? Will I get injured?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Safety is our top priority. Classes are controlled and progressive, with protective equipment provided. We start light and build intensity as your skills develop — especially for new students and youth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wear" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">What should I wear and bring?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Comfortable workout clothes, closed-toe shoes, and a water bottle. We provide all protective gear. Arrive a few minutes before class.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="trial" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">Do you offer trial classes?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Yes — $10 for youth (ages 6–17) and $20 for adults. Book directly from our{' '}
                  <Link to="/trials" className="text-k-orange hover:text-orange-300 underline">Trials page</Link>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ages" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">What age groups do you accept?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Kids (6–10), Juniors (10–14), Teens (14–17), and Adults (18+). Each group follows an age-appropriate youth self-defence or adult curriculum with tailored training intensity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="location" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">Where is Kravist located?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  11 Irving Place, Tai Seng Point, #02-04, Singapore 369551 — near Tai Seng MRT in east Singapore. Easily accessible from MacPherson, Paya Lebar, Serangoon, Aljunied, Bartley, and Potong Pasir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="corporate" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">Do you offer corporate or private training?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Yes. Corporate workshops cover workplace safety, team-building, and stress management. Private 1-on-1 sessions are tailored to your personal goals and schedule.{' '}
                  <Link to="/contact" className="text-k-orange hover:text-orange-300 underline">Contact us</Link> for details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="youth">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="structure" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">How is the Youth program structured?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  We run 3 terms per year (April, August, and December intakes), each lasting about 4 months. Students are grouped by age — Kids (6–10), Juniors (10–14), and Teens (14–17). Each term follows a progressive kids Krav Maga curriculum with a grading ceremony at the end.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="learn" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">What will my child learn?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Beyond self-defence techniques, our youth programme builds confidence, discipline, leadership, and resilience. Students learn anti-bullying strategies, stranger danger awareness, and practical safety skills — all in a structured, fun environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="term-vs-fne" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">What's the difference between Term classes and Free & Easy classes?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Term classes are fixed weekly sessions with a structured curriculum, guaranteed spot, and end-of-term grading. Free & Easy classes are flexible drop-in sessions you can book through the members app — great for extra practice or trying us out.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="missed" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">What if my child misses a class?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Just coordinate a makeup session with the instructor. Your child can slot into another Youth class that same week at no extra cost.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="parent" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">Does a parent need to be present?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  A parent or legal guardian must be present for the student's first visit. After that, drop-off is fine.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="enrol" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">How do I enrol my child?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  <p className="mb-4">
                    Start with a $10 trial class to see if it's a good fit. For term enrolment, join our waitlist and we'll reach out before the next intake opens. Spots are first-come-first-served.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://forms.gle/LBNkox3CULPk6fFGA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-k-orange-hover hover:bg-k-orange-hover text-white font-semibold py-2 px-5 rounded transition-colors text-sm"
                    >
                      Join Waitlist
                    </a>
                    <Link
                      to="/trials"
                      className="inline-flex items-center justify-center border border-k-orange text-k-orange hover:bg-k-orange/10 font-semibold py-2 px-5 rounded transition-colors text-sm"
                    >
                      Book Trial
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="getting-started">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="first-class" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">What happens at my first class?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  You'll be welcomed by our instructors, shown around, and paired with appropriate training partners. Classes start with a warm-up and progress through technique introduction and practice. We keep it encouraging and adjust to your level.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="booking" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">How do I book classes after signing up?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  <p className="mb-4">
                    Use the Kravist Members App (PushPress) to browse the schedule, book sessions, and manage your packages. You'll need to sign up for a package first before accessing the app.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://apps.apple.com/sg/app/pushpress-members/id1309909578"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      App Store
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.pushpress.memberportal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      Google Play
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="frequency" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">How often should I train?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  For beginners, 2–3 sessions per week builds muscle memory and confidence quickly. You can increase frequency as you progress.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="grading" className="bg-gray-800/50 border-rule rounded-lg px-4">
                <AccordionTrigger className="text-white hover:no-underline">Is there a grading system?</AccordionTrigger>
                <AccordionContent className="text-fg-label">
                  Yes. Both youth and adult programs have structured grading systems that recognise technical progress and personal development. Speak with your instructor for details on requirements and timing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FAQSection;
