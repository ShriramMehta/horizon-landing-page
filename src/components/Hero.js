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
      className="overflow-x-hidden flex md:mx-auto items-center justify-start lg:p-16 lg:mt-[-4rem] xl:mt-[-12rem]"
      // style={{ marginTop: "-12rem" }}
    >
      <div class=" flex flex-wrap-reverse lg:flex-nowrap md:items-center  md:justify-center gap-6">
        <div class="flex w-3/5 md:w-3/4 lg:mt-0 xl:mt-36 flex-col md:justify-center items-center text-left px-3 gap-4 md:mx-auto">
          <h2
            class="mt-4 text-3xl md:text-6xl text-black font-bold p-3 w-full font-heading"
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
          <h4 class="text-base md:text-2xl text-[#1C048DFF] font-bold p-3 text-left w-full font-heading">
            Your journey to mental well-being starts here.
            <br /> Let's create a happier, healthier you - together!
          </h4>
          <h4 class="text-sm md:text-xl text-[#171A1FFF] p-3 text-left w-full font-heading">
            Wellness isn’t a one size fits all concept.
            <br></br>We are here to help you find what helps you in your<br/> journey
            towards mental wellness.
          </h4>
        </div>
        <div class="mt-0 md:mt-24 lg:mt-0 back-blob bg-gradient-to-r from-purple-600 via-purple-400 to-purple-200">
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
