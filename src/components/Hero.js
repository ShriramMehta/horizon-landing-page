import React from 'react'

const Hero = () => {
  return (
    <section className='mx-auto mb-auto xl:mb-44'>
        <div className='flex flex-wrap-reverse md:flex-nowrap w-full justify-between items-center'>
        <div className="w-full md:w-1/2 xl:w-1/2  flex flex-col justify-start items-start p-5 md:ml-12">
          <h2
            class="my-4 text-4xl md:text-5xl lg:text-6xl text-black font-bold p-3 font-heading"
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
          <h4 class="ml-2 my-2 text-[24px] text-[#1C048DFF] font-[700] p-3 text-left font-body leading-[36px]">
            Your journey to mental well-being starts here.<br/>
            Let's create a happier, healthier you - together!
          </h4>
          <h4 class="ml-2 my-1 text-[22px] font-normal text-[#171A1FFF] p-3 text-left font-body leading-[36px]">
            Wellness isn’t a one size fits all concept.
            <br/>We are here to help you find what helps you in your journey
            towards mental wellness.
          </h4>
          </div>
            <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/2 flex justify-end items-end pl-4'>
                <img src='./images/image 6.png' alt='hero' className='w-full md:absolute md:w-1/2 h-auto top-[10rem] lg:top-[-8rem] xl:top-[-14rem]  z-[-1]'/>
                <img src='./images/hero.png' alt='mind' className='absolute top-[18rem] md:top-[18rem] lg:top-10 xl:top-0 w-full md:w-1/2 z-[1]'/>
            </div>
        </div>
    </section>
  )
}

export default Hero