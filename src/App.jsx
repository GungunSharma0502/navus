import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import About from "./components/About";
import Contact from "./components/Contact";

import NykaaServices from "./components/pages/NykaaServices";
import AmazonServices from "./components/pages/AmazonServices";
import FlipkartServices from "./components/pages/FlipkartServices";
import MyntraServices from "./components/pages/MyntraServices";
import EbayServices from "./components/pages/EbayServices";

import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amazon-services" element={<AmazonServices />} />
        <Route path="/flipkart-services" element={<FlipkartServices />} />
        <Route path="/myntra-services" element={<MyntraServices />} />
        <Route path="/nykaa-services" element={<NykaaServices />} />
        <Route path="/ebay-services" element={<EbayServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
