import React from "react";
import { BookOpen, Users, Star, Award, Zap, Target } from "lucide-react";

const ProgramSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "15+ Real-World Projects",
      desc: "Build actual products that matter and solve real problems in your community",
      color: "blue",
    },
    {
      icon: Users,
      title: "Direct Mentorship",
      desc: "From successful tech founders who've built billion-dollar companies",
      color: "purple",
    },
    {
      icon: Star,
      title: "Learn from Legends",
      desc: "Abhimanyu Saxena, Prasanna Sankar, Manmeet Singh & industry experts",
      color: "yellow",
    },
    {
      icon: Award,
      title: "Official Certificates",
      desc: "From Google & Scaler - recognized by top universities and companies",
      color: "green",
    },
    {
      icon: Zap,
      title: "Free Robotics Kit",
      desc: "Worth ₹4000 during workshop days - yours to keep forever!",
      color: "red",
    },
    {
      icon: Target,
      title: "STEM Curriculum",
      desc: "Industry-relevant and future-ready skills that colleges love",
      color: "indigo",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        shadow: "shadow-blue-100",
      },
      purple: {
        bg: "bg-purple-500",
        light: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        shadow: "shadow-purple-100",
      },
      yellow: {
        bg: "bg-yellow-500",
        light: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200",
        shadow: "shadow-yellow-100",
      },
      green: {
        bg: "bg-green-500",
        light: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        shadow: "shadow-green-100",
      },
      red: {
        bg: "bg-red-500",
        light: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        shadow: "shadow-red-100",
      },
      indigo: {
        bg: "bg-indigo-500",
        light: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        shadow: "shadow-indigo-100",
      },
    };
    return colorMap[color];
  };

  return (
    <section id="program" className="relative py-20 bg-white">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-30"></div>{" "}
      </div>

      <div className="bg-white container mx-auto px-4 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            What's{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Included
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            A comprehensive 3-month journey that transforms students into
            confident innovators and problem-solvers
          </p>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-xl border border-orange-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-sm font-medium text-gray-700">
                Months Duration
              </div>
              <div className="text-xs text-gray-500 mt-1">Complete Program</div>
            </div>
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-sm font-medium text-gray-700">
                Real Projects
              </div>
              <div className="text-xs text-gray-500 mt-1">Portfolio Ready</div>
            </div>
            <div className="group bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-xl border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm font-medium text-gray-700">
                Hands-on Learning
              </div>
              <div className="text-xs text-gray-500 mt-1">No Theory Only</div>
            </div>
            <div className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-xl border border-purple-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                FREE
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mb-2">
                ₹4K
              </div>
              <div className="text-sm font-medium text-gray-700">
                Robotics Kit
              </div>
              <div className="text-xs text-gray-500 mt-1">Yours to Keep</div>
            </div>
          </div>
        </div>

        {/* Features in alternating layout */}
        <div className="space-y-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = getColorClasses(feature.color);
            const isEven = index % 2 === 0;
            const isSpecial = index === 3 || index === 4;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
              >
                {/* Icon side */}
                <div className="lg:w-1/3 flex justify-center">
                  <div
                    className={`relative p-8 ${colors.light} rounded-3xl ${colors.border} border-2 shadow-xl ${colors.shadow}`}
                  >
                    <div
                      className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    {isSpecial && (
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        ✨ Exclusive
                      </div>
                    )}
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`lg:w-2/3 ${
                    isEven ? "text-left" : "text-right"
                  } max-w-2xl`}
                >
                  <h3
                    className={`text-2xl lg:text-3xl font-bold mb-4 text-gray-900 ${colors.text}`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <div
                    className={`w-16 h-1 ${colors.bg} rounded-full ${
                      isEven ? "" : "ml-auto"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with different design */}
        <div className="mt-20"></div>
      </div>
    </section>
  );
};

export default ProgramSection;
