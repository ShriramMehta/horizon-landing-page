import React from "react";
import './Components.css'

const AppInfo = () => {
  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-0 gap-4 glowing2">
        <div className="flex justify-center items-center">
          <img src="./images/Hand.png" alt="hand" className="object-cover glowing z-[2]" />
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-8 p-4 z-[3]">
          <div className="text-3xl text-[#1C048DFF] font-bold">
            Mental health care that fits<br/> seamlessly into your daily routine.{" "}
          </div>
          <div className="text-xl text-[#171A1FFF] font-medium">
            We help you adapt to difficult situations while we <br/> adapt to your
            unique needs.<br/>From activities for different focus areas to
            experienced <br/>therapists that will guide you - you can have it all!
          </div>
        </div>
      </div>
      <div className="w-[200px] h-[400px] absolute section-background-bottom z-[1] bottom-0"></div>
      <div className="w-[200px] h-[200px] absolute section-background-top z-[1] top-0 right-0"></div>
    </section>
  );
};

export default AppInfo;
