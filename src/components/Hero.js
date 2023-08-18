import React from 'react'
// import './Hero.css'
import LocomotiveScroll from 'locomotive-scroll'

const Hero = () => {
  return (
    <section className="flex py-3 mx-auto flex items-center justify-between">
      <div class="flex flex-wrap-reverse md:flex-nowrap items-center px-6 justify-center gap-6">
        <div class="flex w-full flex-col justify-center items-center text-center gap-4 p-4">
          <h2 class="mb-4 text-3xl md:text-6xl text-black font-bold" data-scroll data-scroll-speed="2">
            <span>Wellness, Your Way.</span>
          </h2>
          <h4>
            Your journey to mental well-being starts here. Let's create a
            happier, healthier you - together!
          </h4>
          <h4>
            Wellness isn’t a one size fits all concept. We are here to help you
            find what helps you in your journey towards mental wellness.
          </h4>
        </div>
        <div class="flex w-full">
          <img src="./images/home.jpg" class="" alt='home img' />
        </div>
      </div>
    </section>
  )
}

export default Hero