import HeroSection from "./components/HeroSection";
import LogoSlider from "./components/LogoSlider";
import MarketingCase from "./components/MarketingCase";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeaturesSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <HeroSection/>
      <LogoSlider/>
      <ServiceSection/>
      <FeaturesSection/>
      <MarketingCase/>
      <ReviewSection/>
      <Footer/>
  
    

    </div>
  );
}