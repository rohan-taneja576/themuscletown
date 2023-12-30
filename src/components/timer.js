import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  let timeLeft = {};
  const difference = +new Date("2024-01-07T24:00:00+05:30") - +new Date();
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = "Loading...";
  }

  return timeLeft;
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <>
      {timeLeft.days ||
      timeLeft.hours ||
      timeLeft.minutes ||
      timeLeft.seconds ? (
        <Box
          display={"flex"}
          alignItems={"start"}
          justifyContent={"center"}
          gap={"0.8rem"}
        >
          <Box>
            <Heading>{timeLeft.days}</Heading>
            <span>Days</span>
          </Box>
          <Heading>:</Heading>
          <Box>
            <Heading>{timeLeft.hours}</Heading>
            <span>Hrs</span>
          </Box>
          <Heading>:</Heading>
          <Box>
            <Heading>{timeLeft.minutes}</Heading>
            <span>Mins</span>
          </Box>
          <Heading>:</Heading>
          <Box>
            <Heading>{timeLeft.seconds}</Heading>
            <span>Sec</span>
          </Box>
        </Box>
      ) : (
        <span>Time is up 🔥</span>
      )}
    </>
  );
};

export default Timer;
