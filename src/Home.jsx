import HeroSection from "./components/HeroSection";
import LogoSlider from "./components/LogoSlider";
import MarketingCase from "./components/MarketingCase";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeaturesSection";
import ReviewSection from "./components/ReviewSection";
import React from 'react'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <LogoSlider/>
        <ServiceSection/>
        <FeaturesSection/>
        <MarketingCase/>
        
        <ReviewSection/>
    </div>
  )
}

export default Home