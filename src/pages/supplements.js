import React from "react";
import Head from "next/head";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { BsCurrencyRupee } from "react-icons/bs";
import MainHeader from "../components/MainHeader";
import Footer from "../components/footer";
import Slider from "../components/slider";
import { supplementsData } from "../data/supplementsData";
import Star from "../components/Star";

const Supplements = () => {
  const proteinData = supplementsData
    .filter((supplements) => supplements.section === "Protein")
    .map((i) => i.data)
    .flat();
  const massGainerData = supplementsData
    .filter((supplements) => supplements.section === "Mass Gainer")
    .map((i) => i.data)
    .flat();
  const fatBurnerData = supplementsData
    .filter((supplements) => supplements.section === "Fat Burner")
    .map((i) => i.data)
    .flat();
  const multiVitaminData = supplementsData
    .filter((supplements) => supplements.section === "MultiVitamin")
    .map((i) => i.data)
    .flat();
  const fishOilData = supplementsData
    .filter((supplements) => supplements.section === "Fish Oil")
    .map((i) => i.data)
    .flat();
  return (
    <>
      <Head>
        <title>Supplements</title>
        <meta charset="utf-8" />
        <link rel="icon" type="image/png" href="./dumbbell.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainHeader />
      <Slider />
      <Box
        background={"#3c3f45"}
        padding={"3rem"}
        display={"flex"}
        flexDirection={"column"}
        gap={"3rem"}
      >
        <Box
          id="protein"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Box
            color={"#fff"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={"2rem"}
            fontWeight={"700"}
          >
            <Text>Protein</Text>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"center"}
            gap={"3rem"}
            gridTemplateColumns={[
              "auto",
              "auto",
              "auto auto",
              "auto auto auto auto",
            ]}
          >
            {proteinData.map((data) => {
              return (
                <Box
                  width={"15rem"}
                  borderRadius={"1rem"}
                  boxShadow={"0px 0px 10px 1px #fff"}
                  padding={"1rem"}
                  background={"#fff"}
                  textAlign={"center"}
                >
                  <Box>
                    <img src={data.image.src} alt="" width={"100%"} />
                  </Box>
                  <hr />
                  <Box>
                    <Text fontWeight={"600"}>{data.productName}</Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"0.1rem"}
                    >
                      <Star stars={data.productRating} />({data.productRating})
                    </Box>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontWeight={"500"}
                    >
                      <BsCurrencyRupee /> {data.price}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          id="massGainer"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Box
            color={"#fff"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={"2rem"}
            fontWeight={"700"}
          >
            <Text>Mass Gainer</Text>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"center"}
            gap={"3rem"}
            gridTemplateColumns={["auto", "auto", "auto auto", "auto auto"]}
          >
            {massGainerData.map((data) => {
              return (
                <Box
                  width={"15rem"}
                  borderRadius={"1rem"}
                  boxShadow={"0px 0px 10px 1px #fff"}
                  padding={"1rem"}
                  background={"#fff"}
                  textAlign={"center"}
                >
                  <Box>
                    <img src={data.image.src} alt="" width={"100%"} />
                  </Box>
                  <hr />
                  <Box>
                    <Text fontWeight={"600"}>{data.productName}</Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"0.1rem"}
                    >
                      <Star stars={data.productRating} />({data.productRating})
                    </Box>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontWeight={"500"}
                    >
                      <BsCurrencyRupee /> {data.price}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          id="fatBurner"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Box
            color={"#fff"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={"2rem"}
            fontWeight={"700"}
          >
            <Text>Fat burner</Text>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"center"}
            gap={"3rem"}
            gridTemplateColumns={["auto", "auto", "auto auto", "auto auto"]}
          >
            {fatBurnerData.map((data) => {
              return (
                <Box
                  width={"15rem"}
                  borderRadius={"1rem"}
                  boxShadow={"0px 0px 10px 1px #fff"}
                  padding={"1rem"}
                  background={"#fff"}
                  textAlign={"center"}
                >
                  <Box>
                    <img src={data.image.src} alt="" width={"100%"} />
                  </Box>
                  <hr />
                  <Box>
                    <Text fontWeight={"600"}>{data.productName}</Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"0.1rem"}
                    >
                      <Star stars={data.productRating} />({data.productRating})
                    </Box>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontWeight={"500"}
                    >
                      <BsCurrencyRupee /> {data.price}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          id="multivitamin"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Box
            color={"#fff"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={"2rem"}
            fontWeight={"700"}
          >
            <Text>Multivitamin</Text>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"center"}
            gap={"3rem"}
            gridTemplateColumns={["auto", "auto", "auto auto", "auto auto"]}
          >
            {multiVitaminData.map((data) => {
              return (
                <Box
                  width={"15rem"}
                  borderRadius={"1rem"}
                  boxShadow={"0px 0px 10px 1px #fff"}
                  padding={"1rem"}
                  background={"#fff"}
                  textAlign={"center"}
                >
                  <Box>
                    <img src={data.image.src} alt="" width={"100%"} />
                  </Box>
                  <hr />
                  <Box>
                    <Text fontWeight={"600"}>{data.productName}</Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"0.1rem"}
                    >
                      <Star stars={data.productRating} />({data.productRating})
                    </Box>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontWeight={"500"}
                    >
                      <BsCurrencyRupee /> {data.price}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          id="fishOil"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Box
            color={"#fff"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={"2rem"}
            fontWeight={"700"}
          >
            <Text>Fish oil</Text>
          </Box>
          <Box
            display={"grid"}
            justifyContent={"center"}
            gap={"3rem"}
            gridTemplateColumns={["auto", "auto", "auto auto", "auto auto"]}
          >
            {fishOilData.map((data) => {
              return (
                <Box
                  width={"15rem"}
                  borderRadius={"1rem"}
                  boxShadow={"0px 0px 10px 1px #fff"}
                  padding={"1rem"}
                  background={"#fff"}
                  textAlign={"center"}
                >
                  <Box>
                    <img src={data.image.src} alt="" width={"100%"} />
                  </Box>
                  <hr />
                  <Box>
                    <Text fontWeight={"600"}>{data.productName}</Text>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={"0.1rem"}
                    >
                      <Star stars={data.productRating} />({data.productRating})
                    </Box>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontWeight={"500"}
                    >
                      <BsCurrencyRupee /> {data.price}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box background={"#3c3f45"} position={"relative"} bottom={"0%"}>
        <Footer />
      </Box>
    </>
  );
};

export default Supplements;
