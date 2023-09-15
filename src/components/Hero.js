import React from "react";
import "./Components.css"

const Hero = () => {
  
  return (
    <section
      className="overflow-x-hidden p-6 mx-auto md:mt-[-3rem] lg:mt-[-2rem] lg:mb-[3rem]"
    >
      <div class="mx-auto w-full  flex flex-wrap-reverse lg:flex-nowrap md:items-center  md:justify-center gap-6">
        <div class="flex lg:w-1/2 flex-col justify-center items-center text-left px-3 gap-4 mx-auto lg:ml-[-5px] lg:mt-10">
          <div className="flex flex-col justify-start items-start gap-5">
          <h2
            class="mt-4 text-6xl text-black font-bold p-3 font-heading"
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgba(78,19,159,1) 0%, rgba(123,60,243,1) 35%, rgba(108,99,255,1) 100%)",
                "-webkit-background-clip": "text",
                "background-clip": "text",
                color: "transparent",
              }}
            >
              Wellness,
            </span>
            <span style={{ color: "#9E9EFF" }}>Your Way.</span>
          </h2>
          <h4 class="text-2xl text-[#1C048DFF] font-bold p-3 text-left w-full font-heading">
            Your journey to mental well-being starts here.
            <br /> Let's create a happier, healthier you - together!
          </h4>
          <h4 class="text-xl text-[#171A1FFF] p-3 text-left w-full font-heading">
            Wellness isn’t a one size fits all concept.
            <br/>We are here to help you find what helps you in your<br/> journey
            towards mental wellness.
          </h4>
          </div>
        </div>
        <div class="blob w-[600px] lg:absolute lg:top-0 lg:right-0 xl:right-0  xl:top-[-2rem] lg:w-[500px] lg:h-[800px]  xl:w-[600px] xl:h-[700px] z-[-1] flex justify-center items-center h-auto">
          <img
            src="./images/hero.png"
            className="w-full object-cover"
            alt="home img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
