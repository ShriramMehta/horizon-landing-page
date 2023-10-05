import React from "react";

const features = [
  {
    image: "./images/Thearpy.png",
    content: "Therapy",
  },
  {
    image: "./images/Meditation.png",
    content: "Meditations & Breathwork",
  },
  {
    image: "./images/flows.png",
    content: "Personalized Flows",
  },
  {
    image: "./images/Workout.png",
    content: "Guided Workouts",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full mx-auto py-10 md:my-20">
      <div className="my-3 text-center text-[32px] font-bold font-heading text-headingColor">
        Get access to
      </div>
      <div className="my-10 flex justify-center items-center text-center flex-wrap gap-3 md:gap-0">
        {features.map((feat, index) => (
          <div
            key={index}
            className="max-w-[250px] max-h-[250px] flex flex-col justify-center items-center gap-4 w-full h-full "
          >
            <img
              src={feat.image}
              alt="featimage"
              className="object-cover w-[200px] h-[200px]"
            />
            <div className="text-[16px] text-textColor font-normal">
              {feat.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
