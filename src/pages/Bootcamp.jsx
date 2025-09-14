import React from 'react'
import HeroSection from '../components/BootcampComponents/HeroSection'
import ProjectsCarousel from '../components/BootcampComponents/ProjectSection'
import ProgramSection from '../components/BootcampComponents/ProgramSection'
import FomoSection from '../components/BootcampComponents/FomoSection'
import PricingSection from '../components/BootcampComponents/PricingSection'
import FinalCtaSection from '../components/BootcampComponents/FinalctaSection'

function Bootcamp() {
  return (
    <div>
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
