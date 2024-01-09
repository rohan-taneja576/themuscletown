import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";

const Timer = dynamic(() => import("../components/timer"), { ssr: false });

const Offer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={"#3c3f45"}
      padding={"30px 65px 30px 65px"}
      borderRadius={"15px"}
      cursor={"pointer"}
      width={"80%"}
      margin={"1rem auto"}
      color={"#fff"}
      textAlign={"center"}
      flexDirection={["column", "column", "column", "row"]}
      gap={["2rem", "2rem", "2rem", "1rem"]}
    >
      <Box>
        <Heading>Pre-Launch Offer valid till January 14th, 2024</Heading>
        <Box>
          <Text>on The Muscle Town</Text>
        </Box>
      </Box>
      <Box>
        <Box>Ends In</Box>
        <Timer />
      </Box>
    </Box>
  );
};

export default Offer;
