import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa";
import { Link } from "react-scroll";
import ReactWhatsapp from "react-whatsapp";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";

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
            <Box
              key={i}
              display={"flex"}
              flexDirection="column"
              background="#656565"
              color="#fff"
              gap="2rem"
              padding="1.5rem"
              width="19rem"
              justify-content="space-around"
              className="plan"
            >
              {_.icon}
              <Text fontSize={"1.5rem"} fontWeight={"600"}>
                {_.name}
              </Text>
              <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                <Text fontSize={"1.2rem"} fontWeight={"600"}>
                  Basic:{" "}
                </Text>
                <Text fontWeight={"500"} as="del">
                  &#8377; {_.price.basic}
                </Text>
                <Text fontWeight={"500"}>&#8377; {_.newPrice.basic}</Text>
              </Box>
              <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                <Text fontSize={"1.2rem"} fontWeight={"600"}>
                  Elite:{" "}
                </Text>
                <Text fontWeight={"500"}>&#8377; {_.price.elite}</Text>
              </Box>
              <ReactWhatsapp
                number="+91 8930042241"
                message="https://themuscletown.in/"
              >
                {/* <Link
                  // to="footer"
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer" }}
                > */}
                Know More
                {/* </Link> */}
              </ReactWhatsapp>
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
