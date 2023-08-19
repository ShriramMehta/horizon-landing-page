import React from "react";
import './About.css'

const About = () => {
  return (
    <section id="about" className="bg-blue-200 mt-10 w-full" data-scroll-section>
      <div className=" flex flex-col md:flex-row justify-center items-center gap-3 py-28 px-10">
        <div className="blob w-full md:w-1/2 p-20 bg-blue-100 text-center" data-scroll data-scroll-speed="2">
          <h1 className="text-6xl font-bold">Who are<br/>we?</h1>
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
            We help you adapt to difficult situationsAnd we adapt to your unique needs. From activities that fit
              seamlessly into your daily routine to experienced therapists that
              will guide you<br/> -we have it all!
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
