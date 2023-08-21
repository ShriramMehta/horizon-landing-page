import { React, useState } from "react";
import "./Team.css";

const Founders = [
  {
    name: "Aayushi Shah",
    image: "./images/img1.png",
    para: "“The day people talk about and confront mental health issues,therapy, seek help for themselves & make it a part of their lifestyle, is the day my goals would be fulfilled.”",
    subpara:
      "With a passion to help and contribute towards people’s lives, Aayushi aims to invest her learnings towards the growth of mynd and help as many people as possible.",
  },
  {
    name: "Preet Bhatti",
    image: "./images/img2.png",
    para: "“There is a need to acknowledge the importance of investing in yourself, mentally & physically – time, resources, energy, everything!”",
    subpara:
      "With a strong sense of empathy and desire to help individuals gain the guidance they require, Preet approaches her contributions towards Mynd in a realistic and creative way.",
  },
  {
    name: "Varnika Hathi",
    image: "./images/img3.png",
    para: "“The aim is to create a community. A community of those who provide help, and those who seek it. When people know there’s a place they can go to in times of need, our aim will be fulfilled.”",
    subpara:
      "With a focus on psychology in the digital world, Varnika believes in extending the services of Mynd to as many people, making it as accessible as possible!",
  },
];

const Team = () => {
  const [founder, setFounder] = useState(0);

  return (
    <section
      id="team"
      className="my-10 flex flex-col gap-6 w-full justify-center items-center p-16"
      data-scroll-section
    >
       <div className="mb-3">
        <h1 className="text-5xl text-indigo-300 font-heading font-bold">FOUNDERS</h1>
      </div>
      <div className="flex w-full justify-center items-center ModalContainer">
        <div className="p-6 flex gap-16 justify-between items-center">
        <div className="w-[200px] h-[200px] ">
          <img src="./images/img1.png" alt="founder1" className="max-w-full max-h-full cursor-pointer transform transition-transform duration-300 hover:scale-110" onMouseOver={()=>setFounder(0)}/>
        </div>
          <div className="flex flex-col gap-16 justify-between items-center">
          <div className="w-[200px] h-[200px] ">
          <img src="./images/img2.png" alt="founder2" className="max-w-full max-h-full cursor-pointer transform transition-transform duration-300 hover:scale-110"onMouseOver={()=>setFounder(1)}/>
        </div>
        <div className="w-[200px] h-[200px] ">
          <img src="./images/img3.png" alt="founder3" className="max-w-full max-h-full cursor-pointer transform transition-transform duration-300 hover:scale-110" onMouseOver={()=>setFounder(2)}/>
        </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-16 text-left gap-3">
                <h1 className="text-4xl font-heading font-bold my-6">{Founders[founder].name}</h1>
                <h4 className="text-xl font-heading font-semibold mb-3">Co-Founder</h4>
                <h4 className="text-xl">
                  {Founders[founder].para}
                </h4>
                <p className="text-md">
                  {Founders[founder].subpara}
                </p>
              </div>
      </div>
    </section>
  );
};

export default Team;
