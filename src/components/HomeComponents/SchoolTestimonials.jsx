import React from "react";

// Import testimonial images
import principal1 from "../../assets/images/schooltestimonials/Pic1.jpg";
import principal2 from "../../assets/images/schooltestimonials/Pic3.jpg";
import teacher1 from "../../assets/images/schooltestimonials/Pic2.jpg";

export default function SchoolTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajkumar Kadyan",
      position: "Principal - Vidyashram Public School",
      image: principal1,
      testimonial: "The way Bricls teach real-world tech skills that are truly essential is mind-blowing! Their administration and conduct are superb.",
      imagePosition: "right"
    },
    {
      id: 2,
      name: "Sunita Kunwar",
      position: "Principal - MG Government School, Jeenl",
      image: principal2,
      testimonial: "Students today are lacking such highly valuable skills, and what Bricks is teaching them is truly great.",
      imagePosition: "left"
    },
    {
      id: 3,
      name: "Nikita Sharma",
      position: "Science Teacher - Radha Krishna Brila School",
      image: teacher1,
      testimonial: "The workshop conducted by Bricks kept students so engaged that they were automatically disciplined — no roaming, no boredom. They learned a lot while having fun!",
      imagePosition: "right"
    }
  ];

 

  return (
    <section className="bg-[#fff8f2] relative w-full py-24 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-orange-100 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-block">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3 block">
              What Our Partners Say
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 relative">
              Our Testimonials
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-gray-600 text-xl mt-8 max-w-4xl mx-auto leading-relaxed">
            Hear from the educators who trust us to deliver excellence in their institutions. These testimonials reflect our commitment to transforming education through innovative teaching methods.
          </p>
        </div>

        

        {/* Testimonials Container */}
        <div className="space-y-20">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="relative">
              {testimonial.imagePosition === "right" ? (
                // Image on Right Layout
                <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16">
                  {/* Testimonial Card */}
                  <div className="flex-1 relative">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 text-white shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full"></div>
                      </div>
                      
                      {/* Quote Icon */}
                      <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl z-10">
                        <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      
                      <div className="relative z-10">
                        <p className="text-xl leading-relaxed font-medium mb-6">
                          "{testimonial.testimonial}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-1 bg-yellow-400 rounded-full mr-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="flex-shrink-0 relative">
                    <div className="relative">                      
                      {/* Profile Image with Hover Zoom */}
                      <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-3xl group">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-70"></div>
                        
                        {/* Overlay effect on hover */}
                        <div className="absolute inset-0 bg-orange-500/0 transition-all duration-300 group-hover:500/10"></div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl transition-transform duration-300 hover:scale-110">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name Card */}
                    <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-orange-600 font-semibold mb-3">
                        {testimonial.position}
                      </p>
                      <div className="flex justify-center">
                        <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Image on Left Layout
                <div className="flex flex-col xl:flex-row-reverse items-center gap-12 xl:gap-16">
                  {/* Testimonial Card */}
                  <div className="flex-1 relative">
                    <div className="bg-gradient-to-bl from-orange-500 to-orange-600 rounded-3xl p-10 text-white shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full"></div>
                      </div>
                      
                      {/* Quote Icon */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-bl from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl z-10">
                        <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      
                      <div className="relative z-10">
                        <p className="text-xl leading-relaxed font-medium mb-6">
                          "{testimonial.testimonial}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-1 bg-yellow-400 rounded-full mr-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="flex-shrink-0 relative">
                    <div className="relative">
                      {/* Profile Image with Hover Zoom */}
                      <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-3xl group">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-70"></div>
                        
                        {/* Overlay effect on hover */}
                        <div className="absolute inset-0 bg-orange-500/0 transition-all duration-300 group-hover:500/10"></div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl transition-transform duration-300 hover:scale-110">
                        <div className="w-8 h-8 bg-gradient-to-bl from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name Card */}
                    <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-orange-600 font-semibold mb-3">
                        {testimonial.position}
                      </p>
                      <div className="flex justify-center">
                        <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}