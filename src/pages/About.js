import React from "react";
import "./Pages.css"
import "../components/Components.css"

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
    <section className="relative my-10">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-0 pt-5 px-5">
        <div className="w-full md:w-5/6 flex justify-center items-center">
          <img src="./images/Hand.png" alt="hand" className="w-full h-auto object-cover z-[2] md:ml-[-10rem]" />
        </div>
        <div className="w-full flex flex-col gap-8 z-[3] md:ml-[-10rem] p-5">
          <div className="text-[40px] leading-[50px] text-[#1C048DFF] font-[700]">
            Mental health care that fits<br/> seamlessly into your daily routine.{" "}
          </div>
          <div className="text-[26px] leading-[40px] text-[#171A1FFF] font-medium">
            We help you <span className="italic">adapt</span> to difficult situations while we <br/> <span className="italic">adapt</span> to your
            unique needs.<br/>From activities for different focus areas to
            experienced <br/>therapists that will guide you - you <span className="italic">can</span> have it all!
          </div>
        </div>
      </div>
      <div className="w-[200px] h-[600px] absolute section-background-bottom z-[1] bottom-0"></div>
      <div className="w-[400px] h-[400px] absolute section-background-top z-[1] top-0 right-0"></div>
    </section>
  );
};

export default About;
