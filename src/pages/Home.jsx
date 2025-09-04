import React from "react";
import Banner from "../components/HomeComponents/Banner";
import Aboutus from "../components/HomeComponents/Aboutus";
import Testimonials from "../components/HomeComponents/Testimonials";
import { HomeProvider } from "../context/Homecontext";
import LoadingScreen from "../components/HomeComponents/LoadingScreen";

function Home() {
  return (
    <HomeProvider>
      <LoadingScreen />
      <main>
        <Banner />
        <Aboutus />
        <Testimonials />
      </main>
    </HomeProvider>
  );
}

export default Home;
