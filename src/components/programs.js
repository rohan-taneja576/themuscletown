import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { programsData } from "../data/programsData";
import { Link } from "react-scroll";

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
                <Link to="plans" spy={true} smooth={true}>
                  Join Now <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
