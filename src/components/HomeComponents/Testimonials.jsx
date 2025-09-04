import React from "react";

const Testimonials = () => {
  const legends = [
    {
      id: 1,
      name: "Abhimanyu Saxena",
      title: "Co-Founder",
      company: "Scaler Academy",
      image: "/api/placeholder/300/300",
      description: "Serial entrepreneur and tech visionary who has built multiple successful companies in the education technology space.",
      availability: "Available for Campus Mentorship",
      linkedIn: "#"
    },
    {
      id: 2,
      name: "Anshuman Singh",
      title: "Co-Founder & CEO",
      company: "Scaler Academy",
      image: "/api/placeholder/300/300",
      description: "Technology leader with deep expertise in building scalable systems and mentoring the next generation of engineers.",
      availability: "Available for Campus Mentorship",
      linkedIn: "#"
    },
    {
      id: 3,
      name: "Prasanna Sankar",
      title: "Co-Founder",
      company: "Rippling",
      image: "/api/placeholder/300/300",
      description: "Successful entrepreneur who has built and scaled multiple technology companies from startup to IPO.",
      availability: "Available for Campus Mentorship",
      linkedIn: "#"
    },
    {
      id: 4,
      name: "Manmeet Singh Akali",
      title: "Vice President",
      company: "Scaler School of Technology",
      image: "/api/placeholder/300/300",
      description: "EdTech leader who scaled Scaler from $6M to $65M revenue and built India's largest tech community with 120K+ members.",
      availability: "Available for Campus Mentorship",
      linkedIn: "#"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Industry <span className="text-orange-500">Legends</span> You'll Meet
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            These successful tech founders and industry pioneers regularly visit our campus for exclusive 
            mentorship sessions, workshops, and Q&A sessions with students
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {legends.map((legend) => (
            <div key={legend.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image container */}
              <div className="relative h-64 bg-gray-200">
                <img 
                  src={legend.image} 
                  alt={legend.name}
                  className="w-full h-full object-cover"
                />
                {/* Availability badge */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded">
                  {legend.availability}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {legend.name}
                </h3>
                <p className="text-orange-500 font-medium mb-1">
                  {legend.title}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {legend.company}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {legend.description}
                </p>
                
                {/* LinkedIn icon */}
                <div className="flex justify-start">
                  <a 
                    href={legend.linkedIn} 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label={`${legend.name}'s LinkedIn profile`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;