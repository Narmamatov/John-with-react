import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <span>
        <FaFacebookSquare />
        <SiInstagram />
        <FaTwitter />
        <FaLinkedin />
      </span>
      <a href="./footer">Copyright ©2020 All rights reserved </a>
    </footer>
  );
};

export default Footer;
