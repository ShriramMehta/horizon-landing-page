import React from "react";

const Features = () => {
  const features = [
    {
      imgSrc: "./images/Feat1.jpeg",
      title: "Therapy",
      description:
        "Connect with compassionate therapists for personalized support.",
    },
    {
      imgSrc: "./images/Feat2.jpeg",
      title: "Guided Meditations",
      description: "Get access to calming mindfulness audio and videos.",
    },
    {
      imgSrc: "./images/Feat3.jpeg",
      title: "Personalized Flows",
      description: "Tailored well-being journeys designed just for you.",
    },
    {
      imgSrc: "./images/Feat4.jpeg",
      title: "Progress Tracking",
      description: "Stay motivated by monitoring your growth and achievements.",
    },
  ];

  return (
    <section id="features" className="w-full mx-auto p-6" data-scroll-section>
      <h1 className="text-center text-4xl font-bold font-heading text-indigo-400">FEATURES</h1>
      <div className="flex flex-wrap justify-center items-center gap-6 py-6">
        {features.map((feature, index) => (
          <div key={index} className="group h-72 w-60 [perspective:1000px]">
            <h1 className="absolute inset-x-0 bottom-10 text-xl text-center font-semibold text-lightBlack">
              {feature.title}
            </h1>
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-3/4 w-full rounded-xl object-cover"
                  src={feature.imgSrc}
                  alt={feature.title}
                />
              </div>

              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">{feature.description}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
