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
        <div class="w-[30%] md:w-[10%]">
          <img src="./images/nav_logo.jpg" alt="footer logo" />
        </div>
        <div class="flex justify-center items-center gap-3">
          {/* <div className="bg-lightIndigo hover:bg-primaryIndigo px-3 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faFacebookF} className="text-3xl p-1"/></Link>
            </div>
            <div className="bg-lightIndigo hover:bg-primaryIndigo px-1 py-1 rounded-full transition-colors duration-300 text-white">
                <Link href="/"><FontAwesomeIcon icon={faTwitter} className="text-3xl p-1"/></Link>
            </div> */}
          <div className="bg-lightIndigo hover:bg-primaryIndigo px-2 py-1 rounded-full transition-colors duration-300 text-white">
            <Link to="https://www.linkedin.com/company/myndcare/">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl p-1" />
            </Link>
          </div>
          <div className="bg-lightIndigo hover:bg-primaryIndigo px-2 py-1 rounded-full transition-colors duration-300 text-white">
            <Link to="https://instagram.com/adaptwellness.in?igshid=MzRlODBiNWFlZA==">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl p-1" />
            </Link>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-6">
            <Link
              to="https://play.google.com/store/apps/details?id=com.mynd.adapt"
              target="_"
            >
              <img
                src="./images/app-store.svg"
                alt="app-store"
                className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Link>
            <Link
              to="https://play.google.com/store/apps/details?id=com.mynd.adapt"
              target="_"
            >
              <img
                src="./images/google-play.svg"
                alt="google-play-store"
                className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Link>
          </div>
          <Link
            to="/delete-account"
            className="mt-5 underline text-lightIndigo "
          >
            Delete Account
          </Link>
        </div>
      </div>
      <div className="py-5 md:mr-20 text-center">
        Copyright @ 2023 by{" "}
        <span className="text-headingColor font-bold">Adapt</span> | all rights
        reserved!
      </div>
    </footer>
  );
};

export default Footer;
