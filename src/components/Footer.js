import React from "react";
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer class="my-3 flex flex-col gap-3 mx-auto items-center justify-between px-6 md:px-16">
          <div className="flex py-2 gap-3 flex-col md:flex-row justify-between items-center">
          <div class="w-[30%] md:w-[10%] px-3">
            <img src="./images/nav_logo.jpg" alt="footer logo"/>
          </div>
            <div class="flex justify-center items-center gap-6">
            <div className="bg-lightBlack hover:bg-black px-3 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faFacebookF} className="text-3xl p-1"/></Link>
            </div>
            <div className="bg-lightBlack hover:bg-black px-2 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faTwitter} className="text-3xl p-1"/></Link>
            </div>
            <div className="bg-lightBlack hover:bg-black px-2 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faLinkedinIn} className="text-3xl p-1"/></Link>
            </div>
            <div className="bg-lightBlack hover:bg-black px-2 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faInstagram} className="text-3xl p-1"/></Link>
            </div>
            </div>
            <div class="flex justify-center w-full md:w-1/2 gap-6">
            <img src='./images/app-store.svg' alt="app-store" className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"/>
              <img src='./images/google-play.svg' alt="google-play" className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"/>
            </div>
            </div>
            <div className="pt-10 text-left w-full">
                &copy; copyright @ 2023 by <span>Adapt</span> | all rights reserved!
            </div>
    </footer>
  );
};

export default Footer;