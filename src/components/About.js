import React from "react";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <section className="about">
      <div className="py-20 mx-auto w-10/12 gap-[50px] lg:gap-[200px] flex flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 className="text-primary-blue pb-7 text-3xl font-bold">
            What's different about Manage ?
          </h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* 01 */}
          <div className="flex flex-col lg:flex-row gap-5 ">
            <p className="flex items-center bg-neutral-red lg:bg-white lg:items-start">
              <span className="bg-primary-red text-white px-4 py-1 rounded-3xl h-fit">
                01
              </span>
              <h3 className="about-title lg:hidden">
                Track company-wide progress
              </h3>
            </p>
            <div className="py-1">
              <h3 className="about-title hidden lg:block">
                Track company-wide progress
              </h3>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="flex flex-col lg:flex-row gap-5 ">
            <p className="flex items-center bg-neutral-red lg:bg-white lg:items-start">
              <span className="bg-primary-red text-white px-4 py-1 rounded-3xl h-fit">
                01
              </span>
              <h3 className="about-title lg:hidden">
                Track company-wide progress
              </h3>
            </p>
            <div className="py-1">
              <h3 className="about-title hidden lg:block">
                Track company-wide progress
              </h3>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="flex flex-col lg:flex-row gap-5 ">
            <p className="flex items-center bg-neutral-red lg:bg-white lg:items-start">
              <span className="bg-primary-red text-white px-4 py-1 rounded-3xl h-fit">
                01
              </span>
              <h3 className="about-title lg:hidden">
                Track company-wide progress
              </h3>
            </p>
            <div className="py-1">
              <h3 className="about-title hidden lg:block">
                Track company-wide progress
              </h3>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default About;
