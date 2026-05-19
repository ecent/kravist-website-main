import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Target, Building, User, DollarSign } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-k-orange-hover rounded-lg">
              <DollarSign className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
          <p className="text-xl text-fg-mute max-w-2xl mx-auto">
            Different pricing for different programs and training frequencies. Find the plan that works best for you.
          </p>
          <p className="text-lg text-orange-300 max-w-2xl mx-auto mt-3 font-medium">
            Click on any package below to sign up and secure your spot today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Youth Division Pricing - Highlighted */}
          <Card className="bg-gradient-to-br from-orange-800 to-orange-900 border-k-orange-hover text-white relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-k-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                <h4 className="font-semibold text-orange-200 mb-3">Term Program</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Kids (6-10)</span>
                    <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$470</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Juniors (10-14)</span>
                    <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$520</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Teens (14-17)</span>
                    <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$535</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-orange-200 mb-3">Trials</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Kids (6-10)</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_cd5f10a5137544/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$10</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Juniors (10-14)</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_c949e71f9af2d5/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$10</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Teens (14-17)</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_f2f2e14d3e5ec5/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$10</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-orange-200 mb-3">Free & Easy</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Kids 5 Sessions</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_eaf63c02f150d7" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$110</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Juniors 5 Sessions</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_67758275e70356" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$120</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-orange-100">Teens 5 Sessions</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_04596fd52ef586" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$120</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* General Adults Pricing */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-rule text-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-k-orange" />
              </div>
              <CardTitle className="text-2xl">General Adults</CardTitle>
              <CardDescription className="text-fg-mute">All Skill Levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-k-orange mb-3">Session Packages</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">Trial</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_f8520cf13fd6f3/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$20</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">Drop In</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_0e7cd795981d1e/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$40</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">5 Sessions</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_0356777de099d3" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$160</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">10 Sessions</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_a6e2c16911adf0/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$285</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">25 Sessions</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_9506d14411bb3b/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$660</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">50 Sessions</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_7104c09d5ea5f2/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$950</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-k-orange mb-3">Unlimited Access</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">1 Month Unlimited</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_01f914d06a3d3f/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$275</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">3 Months Unlimited</span>
                    <a href="https://kravist.pushpress.com/landing/plans/plan_a685b2cefce871/login" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$760</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Women's Division Pricing */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-rule text-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="h-8 w-8 text-k-orange" />
              </div>
              <CardTitle className="text-2xl">Women's Division</CardTitle>
              <CardDescription className="text-fg-mute">Empowerment Training</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-k-orange mb-3">Term Program</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">Individual</span>
                    <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$275</a>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-fg-label">Buddy / Mum</span>
                    <a href="https://forms.gle/LBNkox3CULPk6fFGA" target="_blank" rel="noopener noreferrer" className="font-semibold px-3 py-1 rounded border border-k-orange bg-k-orange/10 hover:bg-k-orange/30 transition-colors">$137.5</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Corporate Training Pricing */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-rule text-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Building className="h-8 w-8 text-k-orange" />
              </div>
              <CardTitle className="text-2xl">Corporate Training</CardTitle>
              <CardDescription className="text-fg-mute">Team Building & Safety</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="space-y-2">
                  <div className="text-center">
                    <span className="text-fg-label">Corporate Programs</span>
                    <div className="font-semibold text-k-orange text-lg mt-2">Enquire for rates</div>
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="w-full mt-4 bg-k-orange-hover hover:bg-orange-700">
                    Contact for Quote
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Private Training Pricing */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-rule text-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <User className="h-8 w-8 text-k-orange" />
              </div>
              <CardTitle className="text-2xl">Private Training</CardTitle>
              <CardDescription className="text-fg-mute">Personalised Instruction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="space-y-2">
                  <div className="text-center">
                    <span className="text-fg-label">Private Training</span>
                    <div className="font-semibold text-k-orange text-lg mt-2">Enquire for rates</div>
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="w-full mt-4 bg-k-orange-hover hover:bg-orange-700">
                    Contact for Quote
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
