import React from "react";
import Testimonial from "../components/Testimonials";

const Team = () => {
  return (
    <section
      id="team"
      className="my-10 flex flex-col gap-6 w-full justify-center items-center"
      data-scroll-section
    >
        <div>
          <h1 className="text-5xl font-bold text-indigo-300">TEAM</h1>
        </div>
        <div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="p-6">
            <div className="px-6 w-full">
              <img src="./images/img1.png"/>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 w-full">
            <h1 className="text-5xl">Aayushi Shah</h1>
            <h4 className="text-2xl">Co-Founder</h4>
            <h4 className="text-2xl">
              “The day people talk about and confront mental health issues,
              therapy, seek help for themselves & make it a part of their
              lifestyle, is the day my goals would be fulfilled.”
            </h4>
            <p className="text-lg">
              With a passion to help and contribute towards people’s lives,
              Aayushi aims to invest her learnings towards the growth of mynd
              and help as many people as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="p-6">
            <div className="px-6 w-full">
              <img src="./images/img1.png"/>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 px-10 w-full">
            <h1 className="text-5xl">Aayushi Shah</h1>
            <h4 className="text-2xl">Co-Founder</h4>
            <h4 className="text-2xl">
              “The day people talk about and confront mental health issues,
              therapy, seek help for themselves & make it a part of their
              lifestyle, is the day my goals would be fulfilled.”
            </h4>
            <p className="text-lg">
              With a passion to help and contribute towards people’s lives,
              Aayushi aims to invest her learnings towards the growth of mynd
              and help as many people as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="p-6">
            <div className="px-6 w-full">
              <img src="./images/img1.png"/>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 w-full">
            <h1 className="text-5xl">Aayushi Shah</h1>
            <h4 className="text-2xl">Co-Founder</h4>
            <h4 className="text-2xl">
              “The day people talk about and confront mental health issues,
              therapy, seek help for themselves & make it a part of their
              lifestyle, is the day my goals would be fulfilled.”
            </h4>
            <p className="text-lg">
              With a passion to help and contribute towards people’s lives,
              Aayushi aims to invest her learnings towards the growth of mynd
              and help as many people as possible.
            </p>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Team;
