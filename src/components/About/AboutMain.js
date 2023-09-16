import React from 'react'

const AboutMain = () => {
  return (
    <section className="relative my-10">
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-0 pt-5 px-5">
      <div className="w-full md:w-5/6 flex justify-center items-center">
        <img
          src="./images/Hand.png"
          alt="hand"
          className="w-full h-auto object-cover z-[2] md:ml-[-10rem]"
        />
      </div>
      <div className="w-full flex flex-col gap-8 z-[3] md:ml-[-10rem] p-5">
        <div className="text-[40px] leading-[50px] text-headingColor font-[700]">
          Mental health care that fits
          <br /> seamlessly into your daily routine.{" "}
        </div>
        <div className="text-[26px] leading-[40px] text-textColor font-medium">
          We help you <span className="italic">adapt</span> to difficult
          situations while we <br /> <span className="italic">adapt</span> to
          your unique needs.
          <br />
          From activities for different focus areas to experienced <br />
          therapists that will guide you - you{" "}
          <span className="italic">can</span> have it all!
        </div>
      </div>
    </div>
    <div className="w-[200px] h-[600px] absolute section-background-bottom z-[1] bottom-0"></div>
    <div className="w-[400px] h-[400px] absolute section-background-top z-[1] top-0 right-0"></div>
  </section>
  )
}

export default AboutMain