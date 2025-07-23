
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Edwin Peng",
      title: "Head Instructor & Founder",
      bio: [
        "Krav Maga Level Expert 3",
        "20+ years of training and teaching Krav Maga",
        "Certified to teach Military, VIP & 3rd Party Protection, Women and Youth",
        "Experience from Singapore military, special forces and commandos",
        "CPR Certified"
      ],
      image: "/lovable-uploads/71ffb50c-9f16-4066-8039-e8be3ca98a30.png"
    },
    {
      id: 2,
      name: "Minnie Teo",
      title: "Head of Women's Division",
      bio: [
        "Krav Maga Level G3",
        "Animal Flow Level 1 Instructor",
        "SFG 1 Kettlebell Instructor",
        "Autism Fitness Certified Pro Level 1",
        "Served 10+ years in Singapore Police Force",
        "Defence Tactics Instructor with Special Operations Command",
        "CPR Certified"
      ],
      image: "/lovable-uploads/c2a8d8db-85b1-409c-a2f9-205208b6bfdd.png"
    },
    {
      id: 3,
      name: "Ethel Wee",
      title: "Instructor",
      bio: [
        "Krav Maga Level G4",
        "Certified General and Youth Instructor",
        "10+ years training Krav Maga",
        "7+ years teaching Krav Maga"
      ],
      image: "/lovable-uploads/95b3db7b-d1a6-4391-8a7a-f8ca108172bc.png"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Instructors</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from experienced professionals who are passionate about teaching practical self-defense and building confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{instructor.name}</CardTitle>
                <p className="text-orange-400 font-semibold">{instructor.title}</p>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 leading-relaxed text-sm space-y-1">
                  {instructor.bio.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
