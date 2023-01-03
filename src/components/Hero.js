import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MobileHeader from "./MobileHeader";

const Hero = () => {
  const [mobile, setmobile] = useState(true);
  return (
    <section className="w-10/12 mx-auto hero">
      {mobile ? <MobileHeader /> : <Header />}

      <HeroSection />
    </section>
  );
};

export default Hero;
