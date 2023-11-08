import React, { useEffect, useState } from "react";
import { motion as m, useScroll, useAnimation } from "framer-motion";

// const item = {
//   // hidden: { x: "10vh", opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // When the component is mounted, it means animation will play, so set it to true
    setHasAnimated(true);
  }, []);
  return (
    <section className="mx-auto mb-auto xl:mb-44">
      <div className="flex flex-wrap-reverse md:flex-nowrap w-full justify-between items-center">
        <div className="w-full md:w-1/2 xl:w-1/2  flex flex-col justify-start items-start p-5 md:ml-12">
          <m.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.0,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
          >
            <h2 class="my-4 text-4xl md:text-5xl lg:text-6xl text-textColor font-bold p-3 font-heading">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, rgba(78,19,159,1) 0%, rgba(123,60,243,1) 35%, rgba(108,99,255,1) 100%)",
                  "-webkit-background-clip": "text",
                  "background-clip": "text",
                  color: "transparent",
                  fontFamily: "serif",
                }}
              >
                Wellness,
              </span>
              <span style={{ color: "#9E9EFF", fontFamily: "serif" }}>
                Your Way.
              </span>
            </h2>
          </m.h1>
          {/* <img src="./images/header.png" alt="header" className="w-full object-cover h-[50px] md:h-[100px]" /> */}
          <m.h4
            initial={{ x: -40, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: 0.8,
                ease: "anticipate",
              },
            }}
            class="ml-2 my-2 text-[22px] text-headingColor font-[700] p-3 text-left font-body leading-[36px]"
          >
            Your journey to mental well-being starts here.
            <br />
            Let's create a happier, healthier you - together.
          </m.h4>
          <h4 class="ml-2 my-1 text-[22px] font-normal text-textColor p-3 text-left font-body leading-[36px]">
            Wellness isn’t a one size fits all concept.
            We are<br/> here to help you find what helps you in your<br/> journey towards
            mental wellness!
          </h4>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/2 flex justify-end items-end pl-4">
          <m.img
            initial={!hasAnimated ? { x: 30, opacity: 0 } : {}}
            animate={!hasAnimated ? { x: 0, opacity: 1 } : {}}
            transition={{
              duration: 1.1,
              delay: 1.1,
              ease: "anticipate",
            }}
            src="./images/hero_back1.png"
            alt="hero"
            className="w-full md:absolute md:w-1/2 h-auto top-[10rem] lg:top-[-8rem] xl:top-[-14rem]  z-[-1]"
          />
          <m.img
            initial={!hasAnimated ? { y: 30, opacity: 0 } : {}}
            animate={!hasAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 1.5,
              delay: 1.5,
              ease: "anticipate",
            }}
            src="./images/hero.png"
            alt="mind"
            className="absolute top-[16rem] md:top-[18rem] lg:top-10 xl:top-0 w-full md:w-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
