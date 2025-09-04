import React from "react";
import BannerImg from "../../assets/images/Banner2.jpg";

function Banner() {
  return (
    <div className="relative h-[90vh] w-[100vw] mt-1">
      {/* Banner Image with reduced opacity */}
      <div
        className="h-full w-full bg-cover bg-center opacity-60 rounded-2xl"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      ></div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-5xl lg:text-7xl font-extrabold text-center drop-shadow-lg">
          Build.<span className="text-[#e74c3c]">Think.</span>Lead.
        </h1>
      </div>
    </div>
  );
}

export default Banner;
