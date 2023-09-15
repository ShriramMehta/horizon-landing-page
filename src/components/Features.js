import React from "react";

const Features = () => {
  return (
    <section id="features" className="w-full mx-auto pb-10 pt-10 my-20">
      <div className="my-3 text-center text-[32px] font-bold font-heading text-[#1C048DFF]">
        Get access to
      </div>
      <div className="my-10 flex justify-center items-center text-center flex-wrap gap-3 md:gap-0">
        <div className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-4 w-full h-full ">
          <img
            src="./images/Thearpy.png"
            alt="thearpy"
            className="object-cover w-[200px] h-[200px]"
          />
          <div className="text-[16px] text-[#171A1FFF] font-medium">Thearpy</div>
        </div>
        <div className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-2 w-full h-full ">
          <img
            src="./images/Meditation.png"
            alt="Meditation"
            className="object-cover w-[200px] h-[200px]"
          />
          <div className="text-[16px] text-[#171A1FFF] font-medium">
            Meditations & Breathwork
          </div>
        </div>
        <div className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-2 w-full h-full ">
          <img
            src="./images/flows.png"
            alt="flows"
            className="object-cover w-[200px] h-[200px]"
          />
          <div className="text-[16px] text-[#171A1FFF] font-medium">
            Personalized Flows
          </div>
        </div>
        <div className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-2 w-full h-full ">
          <img
            src="./images/Workout.png"
            alt="Workout"
            className="object-cover w-[200px] h-[200px]"
          />
          <div className="text-[16px] text-[#171A1FFF] font-medium">
            Guided Workout
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
