import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <Image src={GitHub} alt="" />
          <Image src={LinkedIn} alt="" />
          <Image src={Instagram} alt="" />
        </div>
        <div className="logo-text">
          <Image src={Logo} alt="" />
          <div className="text">
            <span>The </span>
            <span>Muscle Town</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
