import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <FaLinkedin/>
          <FaGithub/>
          <FaTwitter/>
          <FaFacebook/>
      </div>
      <p> &copy; 2022 Mahima.com</p>
    </div>
  );
}

export default Footer;

