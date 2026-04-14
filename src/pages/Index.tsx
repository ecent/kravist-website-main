import React, { Suspense } from "react";
import SEO from "@/components/SEO";
import UnifiedStructuredData from "@/components/UnifiedStructuredData";
import NavigationBar from "@/components/sections/NavigationBar";
import HeroSection from "@/components/sections/HeroSection";

// Lazy load below-the-fold sections
const DivisionsSection = React.lazy(() => import("@/components/sections/DivisionsSection"));
const PricingSection = React.lazy(() => import("@/components/sections/PricingSection"));
const Schedule = React.lazy(() => import("@/components/Schedule"));
const Instructors = React.lazy(() => import("@/components/Instructors"));
const FAQSection = React.lazy(() => import("@/components/sections/FAQSection"));
const StatsSection = React.lazy(() => import("@/components/sections/StatsSection"));
const FooterSection = React.lazy(() => import("@/components/sections/FooterSection"));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  // SEO configurations
  const seoConfig = {
    title: "Kravist Premier Adult & Youth Self Defence Studio",
    description: "Singapore's leading Krav Maga training center offering practical self-defense classes for youth (6-17), women, adults, corporate teams. Located in Singapore with expert certified instructors.",
    keywords: "krav maga Singapore, self defence classes Singapore, martial arts training Singapore, youth self defence, women's self defence, adult krav maga, corporate training Singapore"
  };

  // FAQ structured data
  const faqItems = [
    {
      question: "What makes Krav Maga unique as compared to Muay Thai, BJJ, Boxing, MMA and other martial arts?",
      answer: "Krav Maga is designed for real-world self-defence, where there are no rules and survival is the priority. Unlike traditional martial arts that often involve competition or sport, Krav Maga focuses on practical techniques and instinctive responses to real-life threats—such as grabs, strikes, or weapon scenarios. Our training emphasizes situational awareness, confidence, and quick decision-making, making it highly effective for adults, women, and kids who want to stay safe and prepared in everyday life."
    },
    {
      question: "Do I need to be fit or have prior martial arts experience?",
      answer: "No. Krav Maga is beginner-friendly and suitable for all fitness levels. Many of our adult students start with no martial arts background. We focus on building fundamental movements, fitness, and confidence step-by-step."
    },
    {
      question: "Is Krav Maga effective for women?",
      answer: "Absolutely. Krav Maga is designed to work regardless of size or strength, making it effective for women. Our women-only classes address common real-world scenarios (e.g., grabs, harassment, close-contact situations) while building confidence and physical conditioning."
    },
    {
      question: "What should I wear and bring to my first class?",
      answer: "Wear comfortable sportswear and athletic shoes. We provide protective gear for beginners. Bring a water bottle and a positive attitude—everything else will be guided by our instructors."
    },
    {
      question: "How often should I train?",
      answer: "For beginners, 2–3 classes per week helps build muscle memory and confidence quickly. As you progress, you can add more sessions or supplement with private training for faster improvement."
    },
    {
      question: "Will I get injured during training?",
      answer: "Safety is our top priority. Classes are taught in a controlled, progressive way, with protective equipment and beginner-friendly drills. While Krav Maga involves contact, we keep risk low, especially for new students."
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes. Check our Pricing page and Trials page for details."
    },
    {
      question: "What age groups can train at Kravist?",
      answer: "We offer classes for Kids (6–10 years), Juniors (10–14 years), Teens (14–17 years), and Adults (18+). Each group has a customized curriculum to ensure age-appropriate learning."
    },
    {
      question: "Do you provide corporate or private training?",
      answer: "Yes. We run corporate workshops for workplace safety, team-building, and stress management, as well as 1-on-1 or small group private training tailored to personal goals."
    },
    {
      question: "Where is Kravist located?",
      answer: "Our studio is at 11 Irving Place, Tai Seng Point, Singapore (near Tai Seng MRT). We're easily accessible from MacPherson, Paya Lebar, Serangoon, and surrounding areas."
    }
  ];

  const courses = [
    {
      name: "Youth Krav Maga Classes",
      description: "Self-defense training for children and teens aged 6-17, focusing on confidence building and practical safety skills.",
      ageGroup: "6-17",
      price: "Contact for pricing",
      duration: "60 minutes",
      schedule: ["Friday 5:30pm", "Friday 6:30pm", "Sunday 4:30pm"],
      instructor: "Edwin Peng — Expert 3, KMG Certified Youth Instructor"
    },
    {
      name: "Women's Self Defense Classes",
      description: "Women-only Krav Maga training in a safe, supportive environment designed specifically for women.",
      ageGroup: "18-65",
      price: "Contact for pricing",
      duration: "60 minutes",
      schedule: ["Tuesday 7:30pm", "Thursday 7:30pm", "Saturday 10:00am"],
      instructor: "Minnie Teo — G3, Head of Women's Division"
    },
    {
      name: "Adult Krav Maga Classes",
      description: "Practical self-defense training for adults of all skill levels, combining fitness with real-world techniques.",
      ageGroup: "18-65",
      price: "Contact for pricing",
      duration: "60 minutes",
      schedule: ["Monday 7:30pm", "Wednesday 7:30pm", "Saturday 11:15am"],
      instructor: "Edwin Peng — Expert 3, KMG Certified Instructor"
    },
    {
      name: "Corporate Training Programs",
      description: "Workplace safety and team-building through Krav Maga principles, customized for corporate groups.",
      ageGroup: "18-65",
      price: "Contact for group pricing",
      duration: "90-120 minutes",
      schedule: ["Custom scheduling available"],
      instructor: "Edwin Peng or Minnie Teo — Senior KMG Instructors"
    },
    {
      name: "Private Training Sessions",
      description: "One-on-one personalized Krav Maga coaching tailored to individual goals and schedule.",
      ageGroup: "6-65",
      price: "Contact for private rates",
      duration: "60 minutes",
      schedule: ["Flexible scheduling"],
      instructor: "Edwin Peng — Expert 3, KMG Certified Instructor"
    }
  ];

  const upcomingEvents = [
    {
      name: "Youth Trial Class",
      description: "Trial class for children and teens to experience Krav Maga training for just $10.",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      dayOfWeek: "Friday",
      startTime: "17:30",
      endTime: "18:30",
      ageGroup: "Ages 6-17",
      instructor: "Youth Program Director"
    },
    {
      name: "Women's Self Defense Workshop",
      description: "Introductory workshop focusing on practical self-defense techniques for women.",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      dayOfWeek: "Tuesday",
      startTime: "19:30",
      endTime: "20:30",
      ageGroup: "Women 18+",
      instructor: "Senior Female Instructor"
    },
    {
      name: "Adult Beginner Class",
      description: "Perfect introduction to Krav Maga for adults with no prior martial arts experience.",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      dayOfWeek: "Monday",
      startTime: "19:30",
      endTime: "20:30",
      ageGroup: "Adults 18+",
      instructor: "Head Instructor"
    }
  ];

  const instructors = [
    {
      name: "Edwin Peng",
      title: "Head Instructor & Founder",
      description: "Lead instructor with over 20 years of Krav Maga training and teaching experience, specializing in youth development, adult programs, and military-level Krav Maga.",
      qualifications: [
        "Krav Maga Global Expert Level 3",
        "Certified to teach Military, VIP & 3rd Party Protection, Women and Youth",
        "Experience from Singapore military, special forces and commandos",
        "CPR Certified"
      ],
      experience: "20+ years",
      specializations: ["Youth Training", "Adult Programs", "Military Krav Maga", "VIP Protection"]
    },
    {
      name: "Minnie Teo",
      title: "Head of Women's Division",
      description: "Experienced instructor leading the women's self-defence program, combining law enforcement background with Krav Maga expertise.",
      qualifications: [
        "Krav Maga Global Level G3",
        "Animal Flow Level 1 Instructor",
        "SFG 1 Kettlebell Instructor",
        "Served 10+ years in Singapore Police Force",
        "Defence Tactics Instructor with Special Operations Command",
        "CPR Certified"
      ],
      experience: "10+ years",
      specializations: ["Women's Self Defence", "Youth Training", "Fitness & Conditioning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEO 
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
      />
      <UnifiedStructuredData 
        faqs={faqItems}
        courses={courses}
        events={upcomingEvents}
        instructors={instructors}
      />
      
      <NavigationBar />
      <HeroSection />

      <Suspense fallback={<SectionFallback />}>
        <DivisionsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Schedule />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <div id="instructors">
          <Instructors />
        </div>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
