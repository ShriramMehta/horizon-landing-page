import React from "react";
import "./Components.css"

const Hero = () => {
  
  return (
    <section
      className="p-6 mx-auto md:mt-[-3rem] lg:mt-[-2rem] lg:mb-[4rem]"
    >
      <div class="mx-auto w-full  flex flex-wrap-reverse md:flex-nowrap items-center  justify-center gap-6">
        <div class="flex md:w-1/2 flex-col justify-center items-center text-left px-3 gap-4 mx-auto md:ml-[-5px] md:mt-10">
          <div className="flex flex-col justify-start items-start">
          <h2
            class="mt-4 text-4xl md:text-5xl lg:text-6xl text-black font-bold p-3 font-heading"
            // style={{fontFamily:"poppins"}}
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
          {/* <img src="./images/header.png" alt="header" className="w-full object-cover h-[50px] md:h-[100px]" /> */}
          <h4 class="ml-2 mb-2 text-xl lg:text-2xl text-[#1C048DFF] font-bold p-3 text-left w-full font-body">
            Your journey to mental well-being starts here.
            <br /> Let's create a happier, healthier you - together!
          </h4>
          <h4 class="ml-2 text-xl text-[#171A1FFF] p-3 text-left w-full font-body">
            Wellness isn’t a one size fits all concept.
            <br/>We are here to help you find what helps you in your<br/> journey
            towards mental wellness.
          </h4>
          </div>
        </div>
        <div class="flex justify-center items-center h-auto blob w-[500px] md:absolute md:top-0 md:right-0 xl:right-0  xl:top-[-2rem] md:w-[400px] md:h-[650px] lg:h-[700px]  xl:w-[600px] xl:h-[700px] z-[-1]">
          <img
            src="./images/hero.png"
            className="object-cover w-full h-3/4"
            alt="home img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;