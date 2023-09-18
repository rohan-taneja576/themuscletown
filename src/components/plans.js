import React from "react";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";
import Image from "next/image";

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
              {_.icon}
              <span>{_.name}</span>
              <span>$ {_.price}</span>
              <div className="features">
                {_.features?.map((feature, i) => {
                  return (
                    <div className="feature">
                      <Image src={whiteTick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <button className="btn">Sign up Now!</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
