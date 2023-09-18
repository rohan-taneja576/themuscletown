import React from "react";
import Image from "next/image";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import { Link } from "react-scroll";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <Image src={image1} alt="" />
        <Image src={image2} alt="" />
        <Image src={image3} alt="" />
        <Image src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <Image src={tick} alt="" />
            <span>State-of-the-art equipment</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>Expert trainers</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>Variety of fitness classes</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>Personalized workout plans</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>Supportive community</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>Convenient hours</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>Membership Options</span>
          </div>
        </div>
        <div className="reasons-button">
          <button className="btn">
            <Link to="plans" spy={true} smooth={true}>
              Join us today!
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
