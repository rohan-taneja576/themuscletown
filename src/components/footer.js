import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="logo-text">
          <Image src={Logo} alt="" />
          <div className="text">
            <span>The </span>
            <span>Muscle Town</span>
          </div>
        </div>
        <div className="social-block">
          <p style={{ margin: 0 }}>
            Follow us on social media for fitness tips, updates, and exclusive
            offers:
          </p>
          <div className="social-links">
            <Link href="https://www.facebook.com/muscletownfbd" target="_blank">
              <AiFillFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/muscletownfbd/"
              target="_blank"
            >
              <AiFillInstagram />
            </Link>
            <Link href="https://twitter.com/muscletownfbd" target="_blank">
              <AiFillTwitterCircle />
            </Link>
          </div>
        </div>
        <div className="contact-us">
          <h2 style={{ margin: 0 }}>Contact Us</h2>
          <div className="content">
            <div className="email">
              <AiOutlineMail fontSize={"2rem"} />
              <div className="text">themuscletownfbd@gmail.com</div>
            </div>
            <div className="phone">
              <AiOutlinePhone fontSize={"2rem"} />
              <a className="text" href="tel:+9189300422412">
                +91-8930042241
              </a>
            </div>
            <div className="address">
              <AiOutlineEnvironment fontSize={"2rem"} />
              <div className="text">
                Huda Sector 3, near Sadbhavna hospital, Fatehabad (Haryana),
                125050
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
