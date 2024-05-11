import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="my-3 flex flex-col gap-3 mx-auto items-center justify-between px-6 md:px-16">
      <div className="flex py-2 gap-6 flex-col md:flex-row justify-between items-center">
        <div class="w-[25%] md:w-[8%]">
          <img src="/images/nav_logo.png" alt="footer logo" />
        </div>
        <div class="flex justify-center items-center gap-3"></div>
      </div>
      <div className="py-5 md:mr-20 text-center">
        Copyright @ 2024 by{" "}
        <span className="text-headingColor font-bold">Horizon Spices</span> |
        all rights reserved!
      </div>
    </footer>
  );
};

export default Footer;
