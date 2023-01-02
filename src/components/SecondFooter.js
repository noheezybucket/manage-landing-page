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
      <div className="mx-auto w-10/12 flex justify-between">
        <div className=" flex flex-col justify-between">
          <img src={manage} alt="manage" />
          <ul className="flex justify-between">
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
        <div className="footer-list flex gap-24 justify-between">
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
          <form>
            <input
              type="text"
              name="footer-text"
              placeholder="Updates in your inbox..."
              className="py-1 px-1 rounded-3xl"
            />
            <input
              type="submit"
              value="Go"
              className="bg-primary-red h-full ml-4 text-white py-1 px-4 rounded-3xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondFooter;
