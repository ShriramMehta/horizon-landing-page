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
        <h1 className="text-5xl font-bold text-indigo-300">FOUNDERS</h1>
      </div>
      <div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="p-6">
            <div className="px-6 w-full">
              <img src="./images/img1.png" />
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
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="flex flex-col justify-center gap-6 p-8 px-10 w-full">
            <h1 className="text-5xl">Preet Bhatti</h1>
            <h4 className="text-2xl">Co-Founder</h4>
            <h4 className="text-2xl">
              “There is a need to acknowledge the importance of investing in
              yourself, mentally & physically – time, resources, energy,
              everything!”
            </h4>
            <p className="text-lg">
              With a strong sense of empathy and desire to help individuals gain
              the guidance they require, Preet approaches her contributions
              towards Mynd in a realistic and creative way.
            </p>
          </div>
          <div className="p-6">
            <div className="px-6 w-full">
              <img src="./images/img2.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="p-6">
            <div className="px-6 w-full">
              <img src="./images/img3.png" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 w-full">
            <h1 className="text-5xl">Varnika Hathi</h1>
            <h4 className="text-2xl">Co-Founder</h4>
            <h4 className="text-2xl">
              “The aim is to create a community. A community of those who
              provide help, and those who seek it. When people know there’s a
              place they can go to in times of need, our aim will be fulfilled.”
            </h4>
            <p className="text-lg">
              With a focus on psychology in the digital world, Varnika believes
              in extending the services of Mynd to as many people, making it as
              accessible as possible!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
