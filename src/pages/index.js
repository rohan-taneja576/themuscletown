import Head from "next/head";
import { Box } from "@chakra-ui/react";
import bg from "../assets/bg.png";
import Programs from "../components/programs";
import Reasons from "../components/reasons";
import Hero from "../components/hero";
import Plans from "../components/plans";
// import Testimonals from "../components/testimonals";
import Footer from "../components/footer";
import Commitments from "../components/commitment";

function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      backgroundColor={"#0e0b16"}
      backgroundImage={`url(${bg.src})`}
      gap={"6rem"}
      overflow={"hidden"}
    >
      <Head>
        <title>The Muscle Town</title>
        <meta charset="utf-8" />
        <link rel="icon" type="image/png" href="./dumbbell.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <Commitments />
      <Programs />
      <Reasons />
      <Plans />
      {/* <Testimonals /> */}
      <Footer />
    </Box>
  );
}

export default Home;
