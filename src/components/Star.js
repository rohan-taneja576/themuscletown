import { Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar color={"#fa5042"} />
        ) : stars >= number ? (
          <FaStarHalfAlt color={"#fa5042"} />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <>
      <Box display={"flex"} gap={"0.2rem"} justifyContent={"center"}>
        {ratingStar}
      </Box>
    </>
  );
};

export default Star;
