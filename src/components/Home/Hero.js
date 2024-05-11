import React, { useEffect, useState } from "react";
import { motion as m, useScroll, useAnimation } from "framer-motion";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // When the component is mounted, it means animation will play, so set it to true
    setHasAnimated(true);
  }, []);
  return (
    <section className="mx-auto mb-auto mb-20">
      <div className="flex flex-col  w-full justify-between items-center">
        <div className="w-full  flex justify-end items-end pl-4">
          <m.img
            initial={!hasAnimated ? { x: 30, opacity: 0 } : {}}
            animate={!hasAnimated ? { x: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "anticipate",
            }}
            src="/images/spices.jpg"
            alt="hero"
            className="w-full  h-full mt-[-5rem] "
          />
        </div>
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
              <span>Welcome to </span>
              <span className="text-primaryRed">Horizon Spices!</span>
            </h2>
          </m.h1>
          {/* <img src="/images/header.png" alt="header" className="w-full object-cover h-[50px] md:h-[100px]" /> */}
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
            class=" my-2 text-xl text-textColor "
          >
            Discover the essence of authentic spices with our premium selection
            sourced directly from the heartland of spice,
            <span className="text-primaryRed"> Guntur</span> .
            <br />
            Renowned for its rich cultural heritage and vibrant culinary
            traditions, Guntur stands as a beacon of excellence in the world of
            spices.
          </m.h4>
          <m.h4
            initial={{ x: -40, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
                ease: "anticipate",
              },
            }}
            class=" my-1 text-xl  text-textColor "
          >
            At Horizon Spices, we take pride in bringing you the finest
            selection of spices, meticulously curated to elevate your culinary
            experience. From the fiery heat of our red chili powder to the
            aromatic richness of our cumin and coriander, each spice embodies
            the unparalleled quality that Guntur is famous for. Our commitment
            to authenticity and purity ensures that every spice blend we offer
            is a true reflection of Guntur's heritage and craftsmanship. Whether
            you're a seasoned chef or an enthusiastic home cook, our spices will
            inspire you to create unforgettable dishes that tantalize the taste
            buds and nourish the soul. Join us on a journey of culinary
            exploration and experience the unmatched quality of Guntur spices
            with Horizon Spices.
          </m.h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
