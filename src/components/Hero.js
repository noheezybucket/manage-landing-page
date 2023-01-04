import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MobileHeader from "./MobileHeader";

const Hero = () => {
  return (
    <section className="w-10/12 mx-auto hero">
      <MobileHeader />
      <Header />
      <HeroSection />
    </section>
  );
};

export default Hero;
