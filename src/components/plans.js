import React from "react";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";
import { Link } from "react-scroll";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US!</span>
      </div>

      {/* Plan card */}
      <div className="plans">
        {plansData?.map((_, i) => {
          return (
            <div className="plan" key={i}>
              {/* <div className="plan-header"> */}
              {_.icon}
              <span>{_.name}</span>
              {/* </div> */}
              <span>
                <span>&#8377;</span> {_.price}
              </span>
              {/* <div className="features">
                {_.features?.map((feature, i) => {
                  return (
                    <div className="feature">
                      <Image src={whiteTick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div> */}
              <Link
                to="footer"
                spy={true}
                smooth={true}
                style={{ cursor: "pointer" }}
              >
                Know More
              </Link>
              {/* <button className="btn" >Know More!</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
