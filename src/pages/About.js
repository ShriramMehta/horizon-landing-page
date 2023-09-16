import React from "react";
import Testimonial from "../components/About/Testimonials";
import Features from "../components/About/Features";
import AboutMain from "../components/About/AboutMain";

const About = () => {
  return (
    // <section
    //   id="about"
    //   className="section-background-app mt-20 w-full relative p-8"
    //   data-scroll-section
    // >
    //   <div className="flex justify-center items-center p-3 mb-5">
    //     <h1 className="text-4xl font-bold font-heading text-darkIndigo">
    //       Who are we?
    //     </h1>
    //   </div>
    //   <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full p-3 mt-3">
    //     <div className="w-full flex justify-center items-center">
    //       <img src="./images/Get_App.png" alt="app" className="w-[400px] h-auto" />
    //     </div>
    //     <div className="w-full flex flex-col justify-center items-center gap-6 p-3">
    //       <h1 className="text-2xl font-semibold text-lightBlack">
    //         We are a women-led tech startup (previously known as Mynd) with an
    //         aim to be India's leading behavioral health platform for the youth.
    //       </h1>
    //       <h1 className="text-xl text-lightBlack">
    //         We help you adapt to difficult situationsAnd we adapt to your unique
    //         needs. From activities that fit seamlessly into your daily routine
    //         to experienced therapists that will guide you
    //         <br /> -we have it all!
    //       </h1>
    //     </div>
    //   </div>
    // </section>
    <section
      id="about"
      data-scroll-section
      className='overflow-x-hidden'
    >
    <AboutMain/>
    <Testimonial/>
    <Features/>
    </section>
  );
};

export default About;
