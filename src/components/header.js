import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";

const Header = () => {
  const [mobile, setMobile] = useState(true);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window.innerHeight", window.innerHeight);
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
  }, [mobile]);

  return (
    <div className="header">
      <div className="logo-text">
        <Image src={Logo} alt="" className="logo" />
        <div className="text">
          <span>The </span>
          <span>Muscle Town</span>
        </div>
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
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link to="blogs" spy={true} smooth={true}>
              Blogs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
