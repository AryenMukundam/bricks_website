import React, { useState } from "react";

const Workshop = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      id: 1,
      title: "DAY 1 – Mindset & Curiosity",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      accentColor: "bg-orange-500",
      sessions: [
        { time: "45 min", activity: "Intro + Icebreaking", description: "Meet your mentors, teammates, and the BRICKS vibe.", icon: "👋" },
        { time: "30 min", activity: "Team Formation + Kit Distribution", description: "Each team gets material to build their own Robos!", icon: "🤝" },
        { time: "1 hour", activity: "Basics Of Robotics", description: "Covering fundamentals of all sensors and its working principles.", icon: "🔧" },
        { time: "2 hour", activity: "Build a basic Robot", description: "With our support kids build a fully working Robot car!", icon: "🤖" },
        { time: "1 hour", activity: "Car races", description: "Students compete for points, racing with Robot cars!", icon: "🏎️" },
      ],
    },
    {
      id: 2,
      title: "DAY 2 – Hands-On Innovation: Build for Impact",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      accentColor: "bg-blue-500",
      sessions: [
        { time: "1 hour", activity: "Understanding real world Problems", description: "Teams tinker on actual problems like a helper for blinds!", icon: "🌍" },
        { time: "2–2.5 hour", activity: "The Build Starts", description: "Students start building with AI as their assistant & learn deep tech.", icon: "🛠️" },
        { time: "1.5 hours", activity: "Real depth behind the build", description: "Research & add innovation to solve the real problem.", icon: "🔍" },
        { time: "30 min", activity: "Starts with Presentation preparation", description: "Review progress & prepare for final touches.", icon: "📋" },
      ],
    },
    {
      id: 3,
      title: "DAY 3 – Grand Exhibition",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      accentColor: "bg-green-500",
      sessions: [
        { time: "1.5 hour", activity: "Final work towards project & Prep", description: "Students finalize their prototypes and solutions.", icon: "⚡" },
        { time: "30 min", activity: "Presentation Prep", description: "Pitching skills and team planning.", icon: "🎯" },
        { time: "2 hour", activity: "Grand Exhibition Starts", description: "Present ideas to the Panel/Parents/Teachers.", icon: "🎭" },
        { time: "40–50 min", activity: "Final Prize Distribution + Reflection", description: "Final awards and student reflections.", icon: "🏆" },
      ],
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations - Adjusted for mobile */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-orange-300 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-36 h-36 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-purple-300 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main Heading - Mobile responsive text sizes */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="text-orange-500 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-3 block">
            Interactive Learning Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 relative px-4 sm:px-0">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">3-Day</span> Innovation Workshop
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-28 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-full"></div>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Experience hands-on learning through our carefully crafted 3-day journey.
          </p>
        </div>

        {/* Day Navigation Tabs - Mobile optimized */}
        <div className="flex justify-center mb-6 sm:mb-8 px-2">
          <div className="flex bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg sm:shadow-xl border border-gray-100 w-full max-w-md sm:max-w-none">
            {days.map((day, index) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(index)}
                className={`flex-1 sm:flex-none sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeDay === index
                    ? `bg-gradient-to-r ${day.color} text-white shadow-md sm:shadow-lg transform scale-105`
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="block sm:hidden">D{day.id}</span>
                <span className="hidden sm:block">Day {day.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Day Content */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl border border-gray-100 overflow-hidden">
          {/* Day Header - Mobile responsive */}
          <div className={`bg-gradient-to-r ${days[activeDay].color} text-white p-4 sm:p-6 text-center`}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              {days[activeDay].title}
            </h3>
          </div>

          {/* Sessions Container - Adjusted height for mobile */}
          <div className="h-80 sm:h-96 lg:h-[28rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
              {days[activeDay].sessions.map((session, sessionIndex) => (
                <div
                  key={sessionIndex}
                  className={`${days[activeDay].bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] sm:hover:scale-102 border border-white/50 relative overflow-hidden group`}
                >
                  {/* Background Pattern - Scaled for mobile */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-white rounded-full"></div>
                    <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    {/* Icon & Time - Mobile layout adjustments */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-0 sm:flex-shrink-0">
                      <div className="text-2xl sm:text-3xl">{session.icon}</div>
                      <div className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full ${days[activeDay].accentColor} text-white text-xs font-bold shadow-md sm:mt-2`}>
                        <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                          <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                        </svg>
                        {session.time}
                      </div>
                    </div>
                    
                    {/* Content - Mobile typography */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">
                        {session.activity}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;