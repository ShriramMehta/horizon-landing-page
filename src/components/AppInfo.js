import React from "react";

const AppInfo = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col md:flex-row justify-center items-center p-5 md:gap-0 gap-4">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src="./images/hand.png" alt="hand" className="object-cover" />
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-8 p-4">
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
    </section>
  );
};

export default AppInfo;
