import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ReactWhatsapp from "react-whatsapp";
import { plansData } from "../data/plansData";

const Plans = () => {
  return (
    <div className="plans-container">
      <Box className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US!</span>
      </Box>

      {/* Plan card */}

      <Box
        width={["100%", "100%", "100%", "90%"]}
        margin="0 auto"
        padding={["0rem", "0rem", "0rem", "1rem"]}
        display={"flex"}
        gap={"1rem"}
        flexDirection={["column", "column", "column", "row"]}
      >
        {plansData?.map((_, i) => {
          return (
            <Box
              width={["100%", "100%", "100%", "500px"]}
              height={["33rem", "33rem", "30rem", "30rem"]}
              cursor={"pointer"}
              padding={"20px 20px 20px"}
              background={"rgb(255 255 255 / 10%)"}
              borderRadius={"15px"}
              color={"#cacaca"}
              display={"flex"}
              gap={"1rem"}
              flexDirection={"column"}
              position={"relative"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                textAlign={"center"}
                flexDirection={["column", "column", "row", "row"]}
              >
                <Box>
                  <Heading>{_.number}</Heading>
                  <Box>{_.name}</Box>
                </Box>
                <Box width={["100%", "100%", "auto", "auto"]}>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text>Basic Plan - </Text>
                    <Text fontWeight={"500"} as="del">
                      &#8377; {_.price.basic}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text>Elite Plan - </Text>
                    <Text fontWeight={"500"} as="del">
                      &#8377; {_.price.elite}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text fontWeight={"bold"}>Offer Price - </Text>
                    <Text
                      fontWeight={"500"}
                      backgroundImage={
                        "linear-gradient(281.09deg, #2D2C45 -26.5%, #D4D4D4 66.48%, #232333 109.05%)"
                      }
                      backgroundSize={"200%"}
                      backgroundPosition={"-50px"}
                      backgroundClip={"text"}
                      fontSize={"2rem"}
                    >
                      &#8377; {_.offerPrice}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box background={"#fff"} width={"100%"} height={"0.08rem"}></Box>
              <Box>
                {_.features.map((feature) => {
                  return <Text>+ {feature}</Text>;
                })}
              </Box>
              <Box
                position={"absolute"}
                left={"50%"}
                transform={"translateX(-50%)"}
                bottom={"1rem"}
              >
                <ReactWhatsapp
                  number="+91 8930042241"
                  message="https://themuscletown.in/"
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                    background:
                      "linear-gradient(210.41deg, #fa5042 1.14%, #a239ca 100.75%)",
                    border: "navajowhite",
                    padding: "1rem 2rem",
                    fontSize: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  Buy Now
                </ReactWhatsapp>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Plans;
