import { React, useState } from "react";

const Founders = [
  {
    name: "Aayushi Shah",
    image: "/images/img1.png",
    // para: "“The day people talk about and confront mental health issues,therapy, seek help for themselves & make it a part of their lifestyle, is the day my goals would be fulfilled.”",
    // subpara:
    //   "With a passion to help and contribute towards people’s lives, Aayushi aims to invest her learnings towards the growth of mynd and help as many people as possible.",
  },
  {
    name: "Preet Bhatti",
    image: "/images/img2.png",
    // para: "“There is a need to acknowledge the importance of investing in yourself, mentally & physically – time, resources, energy, everything!”",
    // subpara:
    //   "With a strong sense of empathy and desire to help individuals gain the guidance they require, Preet approaches her contributions towards Mynd in a realistic and creative way.",
  },
  {
    name: "Varnika Hathi",
    image: "/images/img3.png",
    // para: "“The aim is to create a community. A community of those who provide help, and those who seek it. When people know there’s a place they can go to in times of need, our aim will be fulfilled.”",
    // subpara:
    //   "With a focus on psychology in the digital world, Varnika believes in extending the services of Mynd to as many people, making it as accessible as possible!",
  },
];

const Team = () => {
  const [founder, setFounder] = useState(0);

  return (
    <section
      id="team"
      className="mb-10 flex flex-col gap-6 w-full justify-center items-center pb-10 px-10"
      data-scroll-section
    >
      <div className="mb-3">
        <h1 className="text-center text-3xl font-bold font-heading text-headingColor">
          Founders
        </h1>
      </div>
      <div className="flex flex-col md:flex-col w-full justify-center text-center items-center p-6 rounded-[50px] shadow-purpleShadow ">
        <div className="md:p-6 relative flex  justify-between items-center w-full gap-6">
          <div className="w-full flex flex-row flex-wrap gap-16 justify-center items-center">
            {Founders.map((founderData, index) => (
              <div
                key={index}
                className="w-[250px] h-[250px]"
                onMouseOver={() => setFounder(index)}
              >
                <img
                  src={founderData.image}
                  alt="founder"
                  className={`w-full max-w-full max-h-full cursor-pointer transform transition-transform duration-300 hover:scale-110 ${
                    founder === index ? "" : "grayscale"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex text-textColor flex-col justify-center items-center p-6 text-left gap-3 w-full">
          <h1 className="text-5xl text-center font-heading font-bold my-6">
            {Founders[founder].name}
          </h1>
          <h4 className="text-xl font-heading font-semibold mb-3">
            Co-Founder
          </h4>
          <h4 className="text-lg font-body font-medium">
            {Founders[founder].para}
          </h4>
          <p className="text-base font-body font-normal">
            {Founders[founder].subpara}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
