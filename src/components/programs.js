import React from "react";
import Image from "next/image";
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
              <div className="category-heading">
                {_.image}
                <span>{_.heading}</span>
              </div>
              <span>{_.details}</span>
              <div className="category-image">
                <Image
                  src={_.backgroundImage}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
