
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Edwin Peng",
      title: "Head Instructor & Founder",
      bio: "Krav Maga Level Expert 3 with 20+ years of training and teaching experience. Certified to teach Military, VIP & 3rd Party Protection, Women and Youth programmes. Brings extensive experience from Singapore military, special forces and commandos.",
      image: "/lovable-uploads/71ffb50c-9f16-4066-8039-e8be3ca98a30.png"
    },
    {
      id: 2,
      name: "Minnie Teo",
      title: "Head of Women's Division",
      bio: "Krav Maga Level G2, Animal Flow Level 1 Instructor, SFG 1 Kettlebell Instructor, and Autism Fitness Certified Pro Level 1. Served 10+ years in Singapore Police Force as Defence Tactics Instructor with Special Operations Command.",
      image: "/lovable-uploads/c2a8d8db-85b1-409c-a2f9-205208b6bfdd.png"
    },
    {
      id: 3,
      name: "Wan Man",
      title: "Instructor",
      bio: "Krav Maga Level Expert 1 instructor bringing expertise and dedication to training students in practical self-defence techniques and tactical awareness.",
      image: "/lovable-uploads/bcb025bf-401d-466a-a68f-0721aac94ba1.png"
    },
    {
      id: 4,
      name: "Kevin Teng",
      title: "Instructor",
      bio: "Krav Maga Level XX instructor committed to providing high-quality training and developing students' confidence and skills in real-world self-defence scenarios.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Instructors</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from experienced professionals who are passionate about teaching practical self-defense and building confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{instructor.name}</CardTitle>
                <p className="text-orange-400 font-semibold">{instructor.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {instructor.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
