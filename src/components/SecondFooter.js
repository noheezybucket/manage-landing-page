import React from "react";
import manage from "../assets/logo2.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";
import youtube from "../assets/icon-youtube.svg";

const SecondFooter = () => {
  return (
    <div className="bg-neutral-dark-blue py-10">
      <div className="mx-auto w-10/12 gap-10 flex flex-col-reverse sm:flex-row justify-between">
        <div className="flex flex-col-reverse gap-10 md:flex-col justify-between">
          <img src={manage} alt="manage" className="" />

          <ul className="flex justify-between gap-1">
            <li className="cursor-pointer">
              <img src={facebook} alt="facebook" />
            </li>
            <li className="cursor-pointer">
              <img src={youtube} alt="youtube" />
            </li>
            <li className="cursor-pointer">
              <img src={twitter} alt="twitter" />
            </li>
            <li className="cursor-pointer">
              <img src={pinterest} alt="pinterest" />
            </li>
            <li className="cursor-pointer">
              <img src={instagram} alt="instagram" />
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="footer-list flex sm:gap-10 leading-[40px] justify-between">
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*  */}
        <div>
          <form className="flex">
            <input
              type="email"
              name="footer-text"
              placeholder="Updates in your inbox..."
              className="py-2 px-3 rounded-3xl w-full text-md outline-primary-red"
              required
            />
            <input
              type="submit"
              value="Go"
              className="bg-primary-red h-full ml-2 text-white py-2 px-4 rounded-3xl cursor-pointer hover:bg-white hover:text-primary-red duration-200 ease-in-out hover:drop-shadow-[0_2px_2px_rgba(242,95,58,0.55)]"
            />
          </form>
        </div>
      </div>
      <p className="mx-auto w-10/12 pt-6 text-xs text-center md:text-right">
        Copyright 2020. All Rights Reserved
      </p>
    </div>
  );
};

export default SecondFooter;
