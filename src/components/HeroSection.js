import React from "react";
import illustration from "../assets/illustration-intro.svg";

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center py-20">
      <div className="flex flex-col gap-10 w-1/2">
        <h2 className="text-6xl font-bold text-primary-blue">
          Bring everyone together to build better products.
        </h2>
        <p className="w-[70%]">
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
