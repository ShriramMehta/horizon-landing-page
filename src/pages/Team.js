import {React, useState} from "react";
import "./Team.css"

const Founders = [
  {
    name: "Aayushi Shah",
    image:"./images/img1.png",
    para: "“The day people talk about and confront mental health issues,therapy, seek help for themselves & make it a part of their lifestyle, is the day my goals would be fulfilled.”",
    subpara: "With a passion to help and contribute towards people’s lives, Aayushi aims to invest her learnings towards the growth of mynd and help as many people as possible."
  },
  {
    name: "Preet Bhatti",
    image:"./images/img2.png",
    para: "“There is a need to acknowledge the importance of investing in yourself, mentally & physically – time, resources, energy, everything!”",
    subpara: "With a strong sense of empathy and desire to help individuals gain the guidance they require, Preet approaches her contributions towards Mynd in a realistic and creative way."
  },
  {
    name: "Varnika Hathi",
    image:"./images/img3.png",
    para: "“The aim is to create a community. A community of those who provide help, and those who seek it. When people know there’s a place they can go to in times of need, our aim will be fulfilled.”",
    subpara: "With a focus on psychology in the digital world, Varnika believes in extending the services of Mynd to as many people, making it as accessible as possible!"
  },
];

const Team = () => {

  const [modal, setModal] = useState(false);
  const [founder, setFounder] = useState(null);

  const toggleModal = (idx) => {
    setFounder(idx)
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <section
      id="team"
      className="my-10 flex flex-col gap-6 w-full justify-center items-center"
      data-scroll-section
    >
      <div className="mb-3">
        <h1 className="text-5xl text-indigo-300 font-heading font-bold">FOUNDERS</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="w-[200px] h-[200px] ">
          <img src="./images/img1.png" alt="founder1" className="max-w-full max-h-full cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={()=>toggleModal(0)}/>
        </div>
        <div className="w-[200px] h-[200px]">
          <img src="./images/img2.png" alt="founder2" className="max-w-full max-h-full cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={()=>toggleModal(1)}/>
        </div>
        <div className="w-[200px] h-[200px]">
          <img src="./images/img3.png" alt="founder3" className="max-w-full max-h-full cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={()=>toggleModal(2)}/>
        </div>
      </div>

      {modal && (
          <div class="overlay">
          <div class="ModalContainer mx-auto">
            <img src={Founders[founder].image} alt="founder" />
            <div className="modalRight">
              <div className="w-[50px] h-[50px] closeBtn">
              <img src="./images/cancal.svg" alt="close" className="max-w-full cursor-pointer" onClick={()=>setModal(false)}/>
              </div>
              <div className="content">
                <h1 className="text-4xl font-heading font-bold">{Founders[founder].name}</h1>
                <h4 className="text-xl font-heading font-semibold">Co-Founder</h4>
                <h4 className="text-xl">
                  {Founders[founder].para}
                </h4>
                <p className="text-md">
                  {Founders[founder].subpara}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default Team;
