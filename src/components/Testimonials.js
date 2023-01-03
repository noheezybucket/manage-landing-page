import React from "react";
import avatar from "../assets/avatar-ali.png";

const Testimonials = () => {
  return (
    <section className="mx-auto py-[20px] mb-20">
      <div>
        <h2 className="text-primary-blue text-center pb-7 text-3xl font-bold">
          What they've said ?
        </h2>
        <div className="flex">
          <div className="flex flex-col items-center bg-white">
            <div>
              <img src={avatar} alt="" />
            </div>
            <h3>Anisha Li</h3>
            <p>
              {" "}
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
            <button className="btn-red">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
