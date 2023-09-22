import Image from "next/image";
import Header from "./header";
import hero_image from "../assets/hero_image.png";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="left-h">
        <Header />
        <div className="hero-text">
          <div>
            <span className="stroke-text">Your Journey </span>
            <span>to a</span>
          </div>
          <div>
            <span>Healthier You Begins Here</span>
          </div>
          <div>
            <span>
              Look no further – we are your ultimate fitness destination.
            </span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">
            <Link to="plans" spy={true} smooth={true}>
              Explore More
            </Link>
          </button>
        </div>
      </div>
      <div className="right-h">
        <Image src={hero_image} alt="" className="hero-image" />
      </div>
    </div>
  );
}
