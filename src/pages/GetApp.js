import React from "react";
import { Link } from "react-router-dom";

const GetApp = () => {
  return (
    <section className="my-10">
      <div className="bg-indigo-300 flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-32 px-8 md:pb-0 pb-6 py-0">
        <div className="flex flex-col justify-center items-center gap-8 p-3">
          <div className="text-2xl text-[#1C048DFF] font-medium">
            Get the <span className="font-bold">Adapt app</span> now and <br />{" "}
            let’s take you towards your <br />
            <span className="font-bold">personalised wellness path!</span>
          </div>
          <div className="flex flex-row justify-end items-end gap-16 ">
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
        <div className="flex justify-center items-center">
          <img src="./images/APP.png" alt="app"/>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
