import React from "react";
import "./Hero.css"

const item = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  
  return (
    <section
      className="p-6 mx-auto overflow-x-hidden lg:mt-[-4rem] xl:mt-[-8rem]"
      // style={{ marginTop: "-12rem" }}
    >
      <div class="mx-auto w-full  flex flex-wrap-reverse lg:flex-nowrap md:items-center  md:justify-center gap-6">
        <div class="flex lg:w-1/2 flex-col justify-center items-center text-left px-3 gap-4 mx-auto lg:ml-[-5px] lg:mt-10">
          <div className="flex flex-col justify-start items-start">
          <h2
            class="mt-4 text-4xl md:text-6xl text-black font-bold p-3 font-heading"
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
          <h4 class="text-lg md:text-2xl text-[#1C048DFF] font-bold p-3 text-left w-full font-heading">
            Your journey to mental well-being starts here.
            <br /> Let's create a happier, healthier you - together!
          </h4>
          <h4 class="text-base md:text-xl text-[#171A1FFF] p-3 text-left w-full font-heading">
            Wellness isn’t a one size fits all concept.
            <br/>We are here to help you find what helps you in your<br/> journey
            towards mental wellness.
          </h4>
          </div>
        </div>
        <div class="blob w-[500px] h-[300px] md:h-[500px] lg:w-[600px] overflow-hidden bg-gradient-to-r from-purple-600 via-purple-400 to-purple-200 flex justify-center items-center">
          <img
            src="./images/hero.png"
            className="animate-on-hover"
            alt="home img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
