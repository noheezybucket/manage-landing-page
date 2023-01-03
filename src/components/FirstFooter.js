import React from "react";

const FirstFooter = () => {
  return (
    <section className="bg-primary-red py-14">
      <div className="mx-auto w-10/12 flex flex-col gap-8 lg:flex-row justify-between items-center">
        <h2 className="text-white text-3xl font-[500] text-center lg:text-left lg:w-[40%]">
          Simplify how your team works today.
        </h2>
        <button className="btn-white h-fit">Get Started</button>
      </div>
    </section>
  );
};

export default FirstFooter;
