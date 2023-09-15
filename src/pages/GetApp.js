import React from "react";
import { Link } from "react-router-dom";
import './Pages.css'

const GetApp = () => {
  return (
    <section className="my-10 section-background-app">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8  px-8 md:pb-0">
        <div className="w-3/4 flex flex-col justify-center items-center gap-32 p-3">
          <div className="text-[30px] text-[#1C048DFF] font-medium">
            Get the <span className="font-bold">Adapt app</span> now and <br />{" "}
            let’s take you towards your <br />
            <span className="font-bold">personalised wellness path!</span>
          </div>
          <div className="w-full flex flex-row justify-start items-start gap-16 px-16">
            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="./images/scanner.jpg"
                alt="scanner"
                className="w-[100px] h-auto"
              />
              <Link
                to="https://play.google.com/store/apps/details?id=com.mynd.adapt"
                target="_"
              >
                <img
                  src="./images/app-store.svg"
                  alt="app-store"
                  className="cursor-pointer w-[100px] h-auto"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-1">
              <img
                src="./images/scanner.jpg"
                alt="scanner"
                className="w-[100px] h-auto"
              />
              <Link
                to="https://play.google.com/store/apps/details?id=com.mynd.adapt"
                target="_"
              >
                <img
                  src="./images/google-play.svg"
                  alt="google-play-store"
                  className="cursor-pointer w-[100px] h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src="./images/App.png" alt="app" className="w-full h-auto object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
