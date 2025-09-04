import React from "react";
import teamPhoto from "../../assets/images/Banner2.jpg";

const AboutUs = () => {
  return (
    <div className="bg-[#fff8f2] border-b border-[#f3e5d8]  px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600">
              Who We Are?
            </h2>
            <p className="text-gray-700 text-base md:text-base leading-relaxed">
              At <span className="font-bold text-orange-600">BRICKS</span>, we
              are a team of young{" "}
              <span className="font-bold text-orange-600">innovators</span>,{" "}
              <span className="font-bold text-orange-600">educator</span>, and{" "}
              <span className="font-bold text-orange-600">builder</span> who
              believe the classroom should prepare students not just for
              <span className="font-bold text-orange-600">exams</span>, but for{" "}
              <span className="font-bold text-orange-600">life</span>. With
              experience ranging from building grassroots startups to running
              real-world learning programs in
              <span className="font-bold text-orange-600"> schools</span>, we
              bring unmatched{" "}
              <span className="font-bold text-orange-600">energy</span>,
              relevance, and creativity to everything we do. Our mission is
              simple: to turn curiosity into capability and students into
              <span className="font-bold text-orange-600">
                {" "}
                future-ready thinkers
              </span>
              .
            </p>
          </div>

          <div className="py-4 flex items-center justify-center order-1 md:order-2">
            <div className="relative w-full max-w-lg group">
              <div className="absolute -inset-3 bg-gradient-to-br from-orange-gradient-start to-orange-gradient-end rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                <img
                  src={teamPhoto}
                  alt="BRICKS team group photo with building blocks"
                  className="w-full h-100 rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ aspectRatio: "4/3" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
