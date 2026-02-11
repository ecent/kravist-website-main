import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Info, Smartphone, Award, HelpCircle, BookOpen } from "lucide-react";

const FAQSection = () => {
  return (
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
                      Yes. Check our Pricing page and Trials page for details.
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
  );
};

export default FAQSection;
