import React, { useState } from "react";
import manage from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pt-10">
      <nav className="flex justify-between">
        <div>
          <img src={manage} alt="manage" />
        </div>
        <div>
          <img src={hamburger} alt="hamburger menu" />
        </div>
      </nav>
    </header>
  );
};

export default MobileHeader;
