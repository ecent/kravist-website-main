
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, Users } from "lucide-react";

const Schedule = () => {
  // Sample schedule data - you can modify this based on your actual schedule
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM", name: "General Adults", instructor: "Marcus Rodriguez", duration: "60 min" },
        { time: "6:00 PM", name: "Youth (10-13)", instructor: "Alex Thompson", duration: "45 min" },
        { time: "7:15 PM", name: "General Adults", instructor: "Sarah Chen", duration: "60 min" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "6:00 PM", name: "Women's Division", instructor: "Sarah Chen", duration: "60 min" },
        { time: "7:15 PM", name: "Youth (14-17)", instructor: "Alex Thompson", duration: "45 min" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM", name: "General Adults", instructor: "Marcus Rodriguez", duration: "60 min" },
        { time: "6:00 PM", name: "Youth (6-10)", instructor: "Alex Thompson", duration: "45 min" },
        { time: "7:15 PM", name: "General Adults", instructor: "Sarah Chen", duration: "60 min" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "6:00 PM", name: "Women's Division", instructor: "Sarah Chen", duration: "60 min" },
        { time: "7:15 PM", name: "General Adults", instructor: "Marcus Rodriguez", duration: "60 min" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "6:00 AM", name: "General Adults", instructor: "Marcus Rodriguez", duration: "60 min" },
        { time: "6:00 PM", name: "Youth (10-13)", instructor: "Alex Thompson", duration: "45 min" },
        { time: "7:15 PM", name: "General Adults", instructor: "Sarah Chen", duration: "60 min" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "9:00 AM", name: "Youth (6-10)", instructor: "Alex Thompson", duration: "45 min" },
        { time: "10:00 AM", name: "Youth (14-17)", instructor: "Sarah Chen", duration: "45 min" },
        { time: "11:00 AM", name: "General Adults", instructor: "Marcus Rodriguez", duration: "60 min" }
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "10:00 AM", name: "Women's Division", instructor: "Sarah Chen", duration: "60 min" },
        { time: "11:15 AM", name: "General Adults", instructor: "Marcus Rodriguez", duration: "60 min" }
      ]
    }
  ];

  const getClassTypeColor = (className: string) => {
    if (className.includes("Youth")) return "bg-blue-600";
    if (className.includes("Women")) return "bg-pink-600";
    if (className.includes("General")) return "bg-orange-600";
    return "bg-gray-600";
  };

  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-600 rounded-lg">
              <CalendarIcon className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Class Schedule</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find the perfect class time that fits your schedule. All classes are led by our certified instructors.
          </p>
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
                        <div className="text-right text-sm text-gray-300">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{classItem.instructor}</span>
                          </div>
                          <div className="text-gray-400">{classItem.duration}</div>
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

        {/* Class Legend */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">Class Types</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span className="text-gray-300">Youth Programs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-pink-600 rounded"></div>
              <span className="text-gray-300">Women's Division</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-600 rounded"></div>
              <span className="text-gray-300">General Adults</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
