import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../data";

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      className: "my-14",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className="mx-auto w-full text-center mb-20">
        <h2 className="text-primary-blue text-center  text-4xl font-bold">
          What they've said ?
        </h2>

        <Slider {...settings}>
          {data.map((testimonial, index) => {
            return (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-img">
                  <img
                    src={require("../assets/" + testimonial.avatar + ".png")}
                    alt={testimonial.name}
                  />
                </div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.testimonial}</p>
              </div>
            );
          })}
        </Slider>
        <button className="btn-red">Get Started</button>
      </section>
    );
  }
}
