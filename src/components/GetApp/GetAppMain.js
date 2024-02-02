import React from "react";
import { Link } from "react-router-dom";
import AppImage from "./AppImage";

const GetAppMain = () => {
  return (
    <section className="md:py-10 bg-bluegradient">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8  md:px-8 md:pb-0">
        <div className="w-3/4 flex flex-col justify-center items-center gap-16 md:gap-16 md:p-3">
          <div className="text-[24px] md:text-[30px] text-headingColor font-medium">
            Get the <span className="font-bold">Adapt app</span> now and <br />{" "}
            let’s take you towards your <br />
            <span className="font-bold">personalised wellness path!</span>
          </div>
          <div className="w-full flex flex-row justify-between lg:justify-center gap-6 items-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="/images/scanner.jpg"
                alt="scanner"
                className="min-w-[100px] w-full h-auto"
              />
              <Link
                to="https://apps.apple.com/us/app/adapt-wellness/id6463197623?platform=iphone"
                target="_"
              >
                <img
                  src="/images/app-store.svg"
                  alt="app-store"
                  className="cursor-pointer  h-auto"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-1">
              <img
                src="/images/scanner.jpg"
                alt="scanner"
                className="min-w-[100px] w-full h-auto"
              />
              <Link
                to="https://play.google.com/store/apps/details?id=com.mynd.adapt"
                target="_"
              >
                <img
                  src="/images/google-play.svg"
                  alt="google-play-store"
                  className="cursor-pointer h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
        <AppImage />
      </div>
    </section>
  );
};

export default GetAppMain;
