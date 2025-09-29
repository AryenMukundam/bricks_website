import React from 'react'
import HeroSection from '../components/BeforeLogin/BootcampComponents/HeroSection'
import ProjectsCarousel from '../components/BeforeLogin/BootcampComponents/ProjectSection'
import ProgramSection from '../components/BeforeLogin/BootcampComponents/ProgramSection'
import FomoSection from '../components/BeforeLogin/BootcampComponents/FomoSection'
import PricingSection from '../components/BeforeLogin/BootcampComponents/PricingSection'
import FinalCtaSection from '../components/BeforeLogin/BootcampComponents/FinalctaSection'
import Navbar from '../components/BeforeLogin/Navbar'

function Bootcamp() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FomoSection/>
      <ProjectsCarousel/>
      <ProgramSection/>
      <PricingSection/>
      <FinalCtaSection/>
    </div>
  )
}

export default Bootcamp
