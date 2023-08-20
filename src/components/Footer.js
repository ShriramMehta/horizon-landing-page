import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import LocomotiveScroll from "locomotive-scroll";

const Footer = () => {
  return (
    <footer class="my-3 flex flex-col gap-3 mx-auto items-center justify-between px-6 md:px-16">
          <div className="flex  gap-3 flex-col md:flex-row justify-between items-center">
          <div class="w-[30%] md:w-[13%] px-3">
            <img src="./images/nav_logo.jpg" alt="footer logo"/>
          </div>
            <div class="flex justify-center items-center gap-6">
            <div className="bg-black px-3 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faFacebookF} className="text-3xl p-1"/></Link>
            </div>
            <div className="bg-black px-2 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faTwitter} className="text-3xl p-1"/></Link>
            </div>
            <div className="bg-black px-2 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faLinkedinIn} className="text-3xl p-1"/></Link>
            </div>
            <div className="bg-black px-2 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faInstagram} className="text-3xl p-1"/></Link>
            </div>
            </div>
            <div class="flex justify-end w-1/2 md:w-1/4">
              <img src='./images/play-store.png' className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"/>
            </div>
            </div>
            <div className="pt-10 text-left w-full">
                &copy; copyright @ 2023 by <span>Adapt</span> | all rights reserved!
            </div>
    </footer>
  );
};

export default Footer;