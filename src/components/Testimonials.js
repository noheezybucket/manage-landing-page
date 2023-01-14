import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ali from "../assets/avatar-ali.png";
import anisha from "../assets/avatar-anisha.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";

export default class Testimonials extends Component {
  render() {
    return (
      <section className="mx-auto text-center py-[20px] mb-20">
        <h2 className="text-primary-blue text-center pb-7 text-3xl font-bold">
          What they've said ?
        </h2>
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          autoPlay={true}
          interval={4000}
          useKeyboardArrows={true}
          infiniteLoop={true}
          className=" my-10"
        >
          <div className="flex flex-row bg-primary gap-7">
            {/* Ali */}
            <div className="testimonial-card">
              <div>
                <img src={ali} alt="Ali" />
              </div>
              <h3>Anisha Li</h3>
              <p>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            {/* Ali */}
            <div className="testimonial-card">
              <div className="relative">
                <img src={ali} alt="Ali" />
              </div>
              <h3>Anisha Li</h3>
              <p>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            {/* Ali */}
            <div className="testimonial-card">
              <div>
                <img src={ali} alt="Ali" />
              </div>
              <h3>Anisha Li</h3>
              <p>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
        </Carousel>
        <button className="btn-red">Get Started</button>
      </section>
    );
  }
}
