import React from "react";
import "./footer.css";
import {
   AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="https://www.linkedin.com/in/upendarthota/" target="_blank">Upendar Thota</a>
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/upendarthota/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/upendarthota" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/uppiforyou" target="_blank" >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
