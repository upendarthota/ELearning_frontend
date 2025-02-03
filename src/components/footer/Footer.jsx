import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="https://www.linkedin.com/in/upendarthota/">Upendar Thota</a>
        </p>
        <div className="social-links">
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.instagram.com/uppiforyou">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
