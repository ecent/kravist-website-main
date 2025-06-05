
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Target, Building, User } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("youth");

  const divisions = [
    {
      id: "youth",
      title: "Youth Division",
      subtitle: "Ages 6-17",
      description: "Build confidence, discipline, and self-defense skills in a structured, fun environment. Our youth program develops physical fitness, mental toughness, and valuable life skills.",
      icon: Shield,
      features: ["Age-appropriate techniques", "Character development", "Anti-bullying training", "Competition opportunities"]
    },
    {
      id: "womens",
      title: "Women's Division",
      subtitle: "Empowerment Through Training",
      description: "Specialized classes focusing on practical self-defense, fitness, and confidence building in a supportive environment designed specifically for women.",
      icon: Target,
      features: ["Women-only classes", "Real-world scenarios", "Stress testing", "Supportive community"]
    },
    {
      id: "adults",
      title: "General Adults",
      subtitle: "All Skill Levels Welcome",
      description: "Comprehensive Krav Maga training for adults of all fitness levels. Learn practical self-defense while getting an incredible workout.",
      icon: Users,
      features: ["Beginner to advanced", "Full-body conditioning", "Stress drills", "Progressive curriculum"]
    },
    {
      id: "corporate",
      title: "Corporate Training",
      subtitle: "Team Building & Safety",
      description: "Custom programs for businesses focusing on employee safety, team building, and stress management through Krav Maga principles.",
      icon: Building,
      features: ["On-site training", "Team building", "Workplace safety", "Stress management"]
    },
    {
      id: "private",
      title: "Private Training",
      subtitle: "Personalized Instruction",
      description: "One-on-one or small group sessions tailored to your specific goals, schedule, and skill level for accelerated learning.",
      icon: User,
      features: ["Customized curriculum", "Flexible scheduling", "Accelerated learning", "Personal attention"]
    }
  ];

  const activeDivision = divisions.find(d => d.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-red-500">KRAV MAGA GYM</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
              <a href="#divisions" className="hover:text-red-400 transition-colors">Divisions</a>
              <Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            MASTER YOUR DEFENSE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Learn the world's most effective self-defense system. Build strength, confidence, and life-saving skills at our premier Krav Maga facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800 text-lg px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Training Divisions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the program that fits your goals and lifestyle. Every division receives world-class instruction and personalized attention.
            </p>
          </div>

          {/* Division Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {divisions.map((division) => (
              <button
                key={division.id}
                onClick={() => setActiveSection(division.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === division.id
                    ? "bg-red-600 text-white transform scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {division.title}
              </button>
            ))}
          </div>

          {/* Active Division Display */}
          {activeDivision && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <activeDivision.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{activeDivision.title}</h3>
                    <p className="text-red-400 text-lg">{activeDivision.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {activeDivision.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {activeDivision.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                  Learn More
                </Button>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Training Image Placeholder</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">25+</div>
              <div className="text-gray-400">Classes Weekly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-red-500 mb-4">KRAV MAGA GYM</div>
          <p className="text-gray-400 mb-6">Building stronger, safer communities one student at a time.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </Link>
            <a href="#divisions" className="text-gray-400 hover:text-white transition-colors">
              Our Programs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
