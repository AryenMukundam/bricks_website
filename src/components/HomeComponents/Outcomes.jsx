import React, { useState, useEffect } from "react";

export default function Outcomes() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);

  const outcomes = [
    {
      id: "01",
      title: "Robot Building",
      desc: "Students assemble and code their first robot using Arduino and real hardware.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      id: "02",
      title: "Critical Thinking",
      desc: "They learn to ask better questions, break down problems, and think independently.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      id: "03",
      title: "AI Learning Skills",
      desc: "Master how to learn using ChatGPT, YouTube, and online tools — a lifelong skill.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: "04",
      title: "Real-World Exposure",
      desc: "Explore tech careers like robotics, AI, and design through hands-on tasks.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      id: "05",
      title: "Public Speaking",
      desc: "Present ideas confidently in a pitch-style format, just like a startup founder.",      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      id: "06",
      title: "Team Collaboration",
      desc: "Work in groups to build, test, and present — learning cooperation and leadership.",
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-50 to-green-50"
    },
    {
      id: "07",
      title: "Problem Solving",
      desc: "Use design thinking to turn a real-world problem into a working prototype.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      id: "08",
      title: "Competitive Spirit",
      desc: "Participate in Robo Races & Wars to test their builds in a fun, high-energy format.",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-id]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Heading */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest mb-4 block">
              What Students Achieve
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 relative">
              Learning 
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Outcomes</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Transform students into confident innovators through hands-on learning experiences
            </p>
          </div>
        </div>

        {/* Enhanced Outcomes Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.id}
              data-id={outcome.id}
              className={`group relative transform transition-all duration-700 ${
                visibleItems.has(outcome.id) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(outcome.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative bg-gradient-to-br ${outcome.bgGradient} rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-300 rounded-full"></div>
                </div>

                {/* Floating Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${outcome.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative z-10 flex items-start space-x-6">
                  {/* Enhanced Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${outcome.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">{outcome.id}</span>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${outcome.gradient} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Icon */}
                  
                  </div>

                  {/* Enhanced Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base group-hover:text-gray-600 transition-colors duration-300">
                      {outcome.desc}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="mt-4 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${hoveredItem === outcome.id ? 'scale-100' : 'scale-75'}`}>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                6000+
              </div>
              <div className="text-gray-600 text-sm mt-2">Students Engaged</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                25+
              </div>
              <div className="text-gray-600 text-sm mt-2">Schools Partnered</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                3
              </div>
              <div className="text-gray-600 text-sm mt-2">Intensive Days</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                ∞
              </div>
              <div className="text-gray-600 text-sm mt-2">Future Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}