import React from "react";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <section className="about">
      <div className="py-20 mx-auto w-10/12 gap-[200px] flex">
        <div>
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
          <div className="flex gap-5">
            <span className="bg-primary-red text-white px-4 py-1 rounded-3xl h-fit">
              01
            </span>
            <div className="py-1">
              <h3 className="about-title">Track company-wide progress</h3>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="flex gap-5">
            <span className="bg-primary-red text-white px-4 py-1 rounded-3xl h-fit">
              02
            </span>
            <div className="py-1">
              <h3 className="about-title">Advanced built-in reports</h3>
              <p>
                Advanced built-in reports Set internal delivery estimates and
                track progress toward company goals. Our customisable dashboard
                helps you build out the reports you need to keep key
                stakeholders informed.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="flex gap-5">
            <span className="bg-primary-red text-white px-4 py-1 rounded-3xl h-fit">
              03
            </span>
            <div className="py-1">
              <h3 className="about-title">Everything you need in one place</h3>
              <p>
                Everything you need in one place Stop jumping from one service
                to another to communicate, store files, track tasks and share
                documents. Manage offers an all-in-one team productivity
                solution.
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
