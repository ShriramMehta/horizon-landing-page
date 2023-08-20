import React from "react";
import "./About.css";

const About = () => {
  return (
    <section
      id="about"
      className="bg-blue-200 mt-20 w-full relative"
      data-scroll-section
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 py-28 px-10">
        <div
          className="blob w-full md:w-1/2 p-20 bg-blue-100 text-center"
          data-scroll
          data-scroll-speed="2"
        >
          <h1 className="text-6xl font-bold">
            Who are
            <br />
            we?
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-6 gap-3">
          <div className="my-3 p-3">
            <h3 className="text-3xl md:text-4xl font-medium">
              We are a women-led tech startup (previously known as Mynd) with an
              aim to be India's leading behavioral health platform for the
              youth.
            </h3>
          </div>
          <div className="my-3 p-3">
            <h6 className="text-xl md:text-2xl">
              We help you adapt to difficult situationsAnd we adapt to your
              unique needs. From activities that fit seamlessly into your daily
              routine to experienced therapists that will guide you
              <br /> -we have it all!
            </h6>
          </div>
        </div>
      </div>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
