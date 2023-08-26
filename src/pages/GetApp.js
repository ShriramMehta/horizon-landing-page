import React from "react";
import { Link } from "react-router-dom";

const GetApp = () => {
  return (
    <section
      id="getApp"
      className="flex items-center p-6 justify-center text-center bg-darkWhite py-28 mx-auto"
      data-scroll-section
    >
      <div class="mx-auto p-3 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-95">
        <div className="flex flex-col md:flex-row justify-center text-left items-center">
          <div className="w-full md:w-1/2 lg:w-3/4 p-6">
            <h1 className="px-3 text-4xl font-heading font-bold my-3">
              Get the Adapt app now and let’s
              <br />
              take you towards your personalised
              <br />
              wellness path!
            </h1>
            <img src="./images/qr_code.png" alt="scanner" className="my-3" />
            <div className="flex p-3 gap-3 justify-center md:justify-start items-center">
              <Link
                to="https://play.google.com/store/apps/details?id=com.mynd.adapt"
                target="_"
              >
                <img
                  src="./images/app-store.svg"
                  alt="app-store"
                  className="cursor-pointer"
                />
              </Link>
              <Link
                to="https://play.google.com/store/apps/details?id=com.mynd.adapt"
                target="_"
              >
                <img
                  src="./images/google-play.svg"
                  alt="google-play-store"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <img
              src="./images/Get_App.jpg"
              alt="get App"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
