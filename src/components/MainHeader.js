import React, { useEffect, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";

const MainHeader = () => {
  const [mobile, setMobile] = useState(true);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
  }, [mobile]);

  return (
    <div className="main-header">
      <div className="logo-text">
        <Image src={Logo} alt="" className="logo" />
      </div>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <Image
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="main-header-menu header-menu">
          <li>
            <NextLink href="/">Home</NextLink>
          </li>
          <li>
            <NextLink href="/">Programs</NextLink>
          </li>
          <li>
            <NextLink href="/">Why us</NextLink>
          </li>
          <li>
            <NextLink href="/">Plans</NextLink>
          </li>
          {/* <li>
            <NextLink href="/">Blogs</NextLink>
          </li> */}
          {/* <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li> */}
          <li>
            <Link to="footer" spy={true} smooth={true}>
              Contact Us
            </Link>
            {/* <Link to="/contact-us">Contact Us</Link> */}
          </li>
          {/* <li>
            <NextLink href="/">Contact Us</NextLink>
          </li> */}
          <li>
            <NextLink href="/supplements">Supplements</NextLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MainHeader;
