import React from "react";

const Features = () => {
  return (
    <section id="features" className="w-full mx-auto p-6">
      <div className="my-3 text-center text-3xl font-bold font-heading text-[#1C048DFF]">
        Get access to
      </div>
      <div className="flex justify-center items-center text-center flex-wrap gap-6 my-6">
        <div className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-4 w-full h-full p-1 ">
          <img
            src="./images/Thearpy.png"
            alt="thearpy"
            className="object-cover w-[200px] h-[200px]"
          />
          <div className="text-lg text-[#171A1FFF] font-medium">Thearpy</div>
        </div>
        <div className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-2 w-full h-full p-1 ">
          <img
            src="./images/Meditation.png"
            alt="Meditation"
            className="object-cover w-[200px] h-[200px]"
          />
          <div className="text-lg text-[#171A1FFF] font-medium">
            Meditations & Breathwork
          </div>
        </div>
        <div className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-2 w-full h-full p-1 ">
          <img
            src="./images/flows.png"
            alt="flows"
            className="object-cover w-[200px] h-[200px]"
          />
          <div className="text-lg text-[#171A1FFF] font-medium">
            Personalized Flows
          </div>
        </div>
        <div className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-2 w-full h-full p-1 ">
          <img
            src="./images/Workout.png"
            alt="Workout"
            className="object-cover w-[200px] h-[200px]"
          />
          <div className="text-lg text-[#171A1FFF] font-medium">
            Guided Workout
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
