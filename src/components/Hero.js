import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

const Hero = () => {
  return (
    <section className="w-10/12 mx-auto hero">
      <Header />
      <HeroSection />
    </section>
  );
};

export default Hero;
