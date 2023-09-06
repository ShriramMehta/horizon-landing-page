import React from "react";
import "./Styles.css";
const Hero = () => {
  return (
    <section className="flex mx-auto items-center justify-between p-6">
      <div class="flex flex-wrap-reverse md:flex-nowrap items-center  justify-center gap-6">
        <div class="flex w-full flex-col justify-center items-center text-left gap-4 ">
          <h2
            class="mt-4 text-4xl md:text-6xl text-black font-bold p-3 w-full font-heading"
            data-scroll
            data-scroll-speed="2"
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
          <h4 class="text-2xl text-lightBlack font-medium p-3 text-left w-full font-heading">
            Your journey to mental well-being starts here.
            <br /> Let's create a happier, healthier you - together!
          </h4>
          <h4 class="text-xl text-lightBlack p-3 text-left w-full">
            Wellness isn’t a one size fits all concept. We are here to help you
            find what helps you in your journey towards mental wellness.
          </h4>
        </div>
        <div class="flex w-full z-[-1]">
          <img
            src="./images/6.png"
            className="animate-on-hover"
            alt="home img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
