
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock } from "lucide-react";

const Schedule = () => {
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        { time: "5:30 PM", name: "Beginner's Class", duration: "60 min" },
        { time: "6:30 PM", name: "Fighting Skills", duration: "60 min" },
        { time: "7:30 PM", name: "Grab Defence", duration: "60 min" },
        { time: "8:30 PM", name: "Levels", duration: "60 min" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "5:30 PM", name: "Beginner's Class", duration: "60 min" },
        { time: "6:30 PM", name: "Weapons Defence", duration: "60 min" },
        { time: "7:30 PM", name: "Fighting Skills", duration: "60 min" },
        { time: "8:30 PM", name: "Levels", duration: "60 min" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:30 PM", name: "Grab Defence", duration: "60 min" },
        { time: "7:30 PM", name: "Weapons Defence", duration: "60 min" },
        { time: "8:30 PM", name: "Levels", duration: "60 min" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "6:30 PM", name: "Fighting Skills", duration: "60 min" },
        { time: "7:30 PM", name: "Weapons Defence", duration: "60 min" },
        { time: "8:30 PM", name: "Levels", duration: "60 min" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "5:30 PM", name: "Juniors Class (Open / Trials)", duration: "60 min" },
        { time: "6:30 PM", name: "Kids Class (Open / Trials)", duration: "60 min" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "10:00 AM", name: "Juniors Term", duration: "60 min" },
        { time: "11:30 AM", name: "Kids Term", duration: "60 min" },
        { time: "1:00 PM", name: "Kids Term", duration: "60 min" },
        { time: "2:30 PM", name: "Juniors Term", duration: "60 min" },
        { time: "3:30 PM", name: "Teens Term", duration: "60 min" },
        
        { time: "4:45 PM", name: "Women's Term", duration: "90 min" }
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "10:00 AM", name: "Juniors Term", duration: "60 min" },
        { time: "11:30 AM", name: "Kids Term", duration: "60 min" },
        { time: "1:00 PM", name: "Kids Term", duration: "60 min" },
        { time: "2:30 PM", name: "Juniors Term", duration: "60 min" },
        { time: "3:30 PM", name: "Teens Term", duration: "60 min" },
        { time: "4:30 PM", name: "Teens Class (Open / Trials)", duration: "60 min" }
      ]
    }
  ];

  const getClassTypeColor = (className: string) => {
    if (className.includes("Kids") || className.includes("Juniors") || className.includes("Teens")) return "bg-blue-600";
    if (className.includes("Women")) return "bg-pink-600";
    return "bg-orange-600";
  };

  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-600 rounded-lg">
              <CalendarIcon className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Schedule</h2>
        </div>

        {/* Class Legend */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">Class Types</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span className="text-gray-300">Youth</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-pink-600 rounded"></div>
              <span className="text-gray-300">Women's Division</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-600 rounded"></div>
              <span className="text-gray-300">Adult Classes</span>
            </div>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            {weeklySchedule.map((daySchedule) => (
              <Card key={daySchedule.day} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-orange-400">{daySchedule.day}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {daySchedule.classes.length > 0 ? (
                    daySchedule.classes.map((classItem, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Clock className="h-4 w-4" />
                            <span className="font-semibold">{classItem.time}</span>
                          </div>
                          <Badge className={`${getClassTypeColor(classItem.name)} text-white`}>
                            {classItem.name}
                          </Badge>
                        </div>
                        <div className="text-right text-sm text-gray-400">
                          <div>{classItem.duration}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 italic">No classes scheduled</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;
