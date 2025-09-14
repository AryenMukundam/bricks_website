import React, { useState, useEffect } from "react";

export default function Provide() {
  const [activeItem, setActiveItem] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());

  const provides = [
    {
      id: "01",
      title: "Starter Robotics Kit",
      desc: "Includes an Arduino board, chassis, motors, sensors, breadboard, batteries, wires — everything needed to build and program a robot from scratch.",
      details: [
        "Arduino Uno Board",
        "DC Motors & Wheels",
        "Ultrasonic Sensors",
        "Jumper Wires & Breadboard",
      ],
      colors: {
        border: "border-orange-500",
        bg: "bg-orange-50",
        hover: "hover:bg-orange-100",
        text: "text-orange-600",
        dot: "bg-orange-500",
        cardBorder: "border-orange-200",
        gradient: "from-orange-500 to-red-600",
      },
    },
    {
      id: "02",
      title: "Workshop Handbook & Learning Guides",
      desc: "Laptops, project sheets, and creative challenges to support learning during and after the workshop.",
      details: [
        "Individual Laptops",
        "Step-by-step Guides",
        "Project Templates",
        "Take-home Resources",
      ],
      colors: {
        border: "border-blue-500",
        bg: "bg-blue-50",
        hover: "hover:bg-blue-100",
        text: "text-blue-600",
        dot: "bg-blue-500",
        cardBorder: "border-blue-200",
        gradient: "from-blue-500 to-indigo-600",
      },
    },
    {
      id: "03",
      title: "Mentor Support",
      desc: "A dedicated team of trained mentors will guide teams, answer questions, and ensure an engaging learning environment.",
      details: [
        "1:6 Mentor Ratio",
        "Industry Experts",
        "Live Troubleshooting",
        "Career Guidance",
      ],
      colors: {
        border: "border-green-500",
        bg: "bg-green-50",
        hover: "hover:bg-green-100",
        text: "text-green-600",
        dot: "bg-green-500",
        cardBorder: "border-green-200",
        gradient: "from-green-500 to-emerald-600",
      },
    },
    {
      id: "04",
      title: "Certificates & Prizes",
      desc: "All participants receive a certificate of completion. Winners of Robo Races & Shark Tank Pitches take home exclusive BRICKS goodies.",
      details: [
        "Digital Certificates",
        "Winner Medals",
        "BRICKS Merchandise",
        "Achievement Badges",
      ],
      colors: {
        border: "border-purple-500",
        bg: "bg-purple-50",
        hover: "hover:bg-purple-100",
        text: "text-purple-600",
        dot: "bg-purple-500",
        cardBorder: "border-purple-200",
        gradient: "from-purple-500 to-pink-600",
      },
    },
  ];

  const currentColors = provides[activeItem].colors;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll("[data-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % provides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 px-6 bg-white relative overflow-hidden">
      {/* Dynamic Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            backgroundImage: `linear-gradient(rgba(${
              activeItem === 0
                ? "251,146,60"
                : activeItem === 1
                ? "59,130,246"
                : activeItem === 2
                ? "34,197,94"
                : "168,85,247"
            },0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(${
                             activeItem === 0
                               ? "251,146,60"
                               : activeItem === 1
                               ? "59,130,246"
                               : activeItem === 2
                               ? "34,197,94"
                               : "168,85,247"
                           },0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "grid-move 60s linear infinite",
          }}
        ></div>
      </div>

      {/* Dynamic Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-20 w-3 h-3 ${
            activeItem === 0
              ? "bg-orange-400"
              : activeItem === 1
              ? "bg-blue-400"
              : activeItem === 2
              ? "bg-green-400"
              : "bg-purple-400"
          } rounded-full animate-pulse opacity-30 transition-colors duration-1000`}
        ></div>

        <div
          className={`absolute top-40 right-32 w-2 h-2 ${
            activeItem === 0
              ? "bg-orange-300"
              : activeItem === 1
              ? "bg-blue-300"
              : activeItem === 2
              ? "bg-green-300"
              : "bg-purple-300"
          } rounded-full animate-ping opacity-40 transition-colors duration-1000`}
          style={{ animationDelay: "1s" }}
        ></div>

        <div
          className={`absolute bottom-40 left-40 w-4 h-4 ${
            activeItem === 0
              ? "bg-orange-500"
              : activeItem === 1
              ? "bg-blue-500"
              : activeItem === 2
              ? "bg-green-500"
              : "bg-purple-500"
          } rounded-full animate-pulse opacity-20 transition-colors duration-1000`}
          style={{ animationDelay: "2s" }}
        ></div>

        <div
          className={`absolute bottom-20 right-20 w-2 h-2 ${
            activeItem === 0
              ? "bg-orange-600"
              : activeItem === 1
              ? "bg-blue-600"
              : activeItem === 2
              ? "bg-green-600"
              : "bg-purple-600"
          } rounded-full animate-ping opacity-30 transition-colors duration-1000`}
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Dynamic Header */}
        <div className="text-center mb-20">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-4 block">
            WHAT WE PROVIDE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 relative">
            Our <span className="text-gray-900">Package</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-orange-500 rounded-full"></div>
          </h2>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Everything your team needs for an exceptional learning journey
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Navigation */}
          <div className="lg:col-span-2">
            <div className="sticky top-20">
              {provides.map((item, index) => (
                <div
                  key={item.id}
                  data-id={item.id}
                  className={`cursor-pointer transition-all duration-500 border-l-3 pl-6 py-6 ${
                    activeItem === index
                      ? `${item.colors.border} ${item.colors.bg}`
                      : `border-gray-200 ${item.colors.hover}`
                  } ${
                    visibleItems.has(item.id)
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    borderLeftWidth: "3px",
                  }}
                  onClick={() => setActiveItem(index)}
                  onMouseEnter={() => setActiveItem(index)}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        activeItem === index
                          ? item.colors.text
                          : "text-gray-400"
                      }`}
                    >
                      {item.id}
                    </span>
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          activeItem === index
                            ? "text-gray-900"
                            : "text-gray-600"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`h-px bg-gradient-to-r ${
                          item.colors.gradient
                        } transition-all duration-500 ${
                          activeItem === index ? "w-16" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            <div className="relative min-h-[400px]">
              {provides.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeItem === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`bg-white border-2 ${item.colors.cardBorder} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500`}
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-3xl font-bold ${item.colors.text}`}
                        >
                          {item.id}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {item.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 p-3 ${item.colors.bg} rounded-lg border ${item.colors.cardBorder} ${item.colors.hover} transition-colors duration-300`}
                        >
                          <div
                            className={`w-2 h-2 ${item.colors.dot} rounded-full flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700 text-sm font-medium">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {provides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeItem === index
                  ? "bg-orange-500 w-8"
                  : "bg-gray-300 hover:bg-orange-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
}
