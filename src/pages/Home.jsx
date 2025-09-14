import React from "react";
import Banner from "../components/HomeComponents/Banner";
import Aboutus from "../components/HomeComponents/Aboutus";
import Testimonials from "../components/HomeComponents/Testimonials";
import { HomeProvider } from "../context/Homecontext";
import LoadingScreen from "../components/HomeComponents/LoadingScreen";
import Partner from "../components/HomeComponents/Partner";
import SchoolTestimonials from "../components/HomeComponents/SchoolTestimonials";
import Workshop from "../components/HomeComponents/Workshop";
import Outcomes from "../components/HomeComponents/Outcomes";
import Provide from "../components/HomeComponents/Provide";
import Glimpses from "../components/HomeComponents/Glimpses";
import Footer from "../components/HomeComponents/Footer";

function Home() {
  return (
    <HomeProvider>
      <LoadingScreen />
      <main>
        <Banner />
        <Aboutus />
        <Testimonials />
        
        <Workshop/>
        <Glimpses/>
        <Outcomes/>
        <SchoolTestimonials/>
        <Provide/>
        
        <Partner/>
        <Footer/>
      </main>
    </HomeProvider>
  );
}

export default Home;
