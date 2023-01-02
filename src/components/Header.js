import React from "react";
import manage from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=" pt-14">
      <nav className="flex justify-between items-center">
        <div>
          <img src={manage} alt="manage" />
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="###">Pricing</a>
          </li>
          <li>
            <a href="###">Product</a>
          </li>
          <li>
            <a href="###">About Us</a>
          </li>
          <li>
            <a href="###">Careers</a>
          </li>
          <li>
            <a href="###">Community</a>
          </li>
        </ul>
        <button className="btn-red">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
