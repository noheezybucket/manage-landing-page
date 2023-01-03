import React from "react";
import illustration from "../assets/illustration-intro.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center py-10 lg:py-20">
      <div className="flex flex-col items-center text-center lg:text-left gap-5 lg:gap-10 lg:w-1/2">
        <h2 className="text-4xl lg:text-6xl font-bold text-primary-blue">
          Bring everyone together to build better products.
        </h2>
        <p className="lg:w-[70%]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="btn-red w-fit">Get Started</button>
      </div>
      <div className="">
        <img src={illustration} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
