import React from "react";
import { useNavigate } from "react-router-dom";

// Import logos
import school1 from "../../assets/images/partners/School1.jpg";
import school2 from "../../assets/images/partners/School2.png";
import school3 from "../../assets/images/partners/School3.jpg";
import school4 from "../../assets/images/partners/School4.jpeg";

export default function Partner() {
  const navigate = useNavigate();

  const partners = [
    { id: 1, name: "RKBS", logo: school1, link: "https://rkbirlaschool.edu.in/" },
    { id: 2, name: "BBVP", logo: school2, link: "https://www.bbvpilani.edu.in/" },
    { id: 3, name: "Vidyaashram", logo: school3, link: "https://vidyashramschool.nexsss.com/" },
    { id: 4, name: "MGJS", logo: school4, link: "#" },
  ];

  return (
    <section className="relative w-full bg-[#fff8f2] py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center px-6">
        {/* Enhanced Heading */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-block">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2 block">
              Trusted By Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
              Our Partner Schools
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Collaborating with premier educational institutions to deliver exceptional learning experiences
          </p>
        </div>

        {/* Enhanced Logos Grid - Equal distribution */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex justify-center transform transition-all duration-500 hover:scale-110 animate-slide-up"
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Circular logo container */}
                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-orange-200 group-hover:border-orange-400 transition-all duration-300 cursor-pointer shadow-lg group-hover:shadow-xl">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                  />
                  
                  {/* Orange accent dot */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Call-to-action section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join our network of excellence and discover how we can enhance your educational offerings
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}