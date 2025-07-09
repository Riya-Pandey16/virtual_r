import FeatureSection from "./components/FeatureSection";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"; // or '../components/Navbar' depending on the file structure
import React from 'react';

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing/>
      </div>
    
    </>
  )
}

export default App