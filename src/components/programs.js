import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
// import "./Programs.css";
import { programsData } from "../data/programsData";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData?.map((_) => {
          return (
            <div className="category">
              {_.image}
              <span>{_.heading}</span>
              <span>{_.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <span>
                  <AiOutlineArrowRight />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
