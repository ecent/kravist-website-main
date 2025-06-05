
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Head Instructor & Founder",
      bio: "With over 15 years of Krav Maga experience and military training background, Sarah founded our gym to bring authentic self-defense training to the community. She specializes in women's empowerment and youth development programs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Senior Instructor",
      bio: "A former law enforcement officer with 12 years of Krav Maga training, Marcus brings real-world experience to every class. He leads our adult programs and specializes in stress-testing and tactical scenarios.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Alex Thompson",
      title: "Youth Program Director",
      bio: "With a background in education and martial arts, Alex has dedicated 8 years to developing confident, disciplined young people through Krav Maga. Known for making training fun while maintaining high standards.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
