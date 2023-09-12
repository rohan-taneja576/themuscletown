import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import GitHub from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={GitHub} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
        <div className="logo-text">
          <img src={Logo} alt="" />
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
