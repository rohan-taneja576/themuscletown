import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="left-h">
        <Header />
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <img src={hero_image} alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
