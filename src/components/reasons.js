import React from "react";
import Image from "next/image";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";

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
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <Image src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
