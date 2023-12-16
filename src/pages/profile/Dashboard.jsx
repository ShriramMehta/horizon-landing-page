import React, { useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { ImHappy } from "react-icons/im";
import { RiEmotionNormalLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { RiEmotionSadLine } from "react-icons/ri";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showEmotionContent, setShowEmotionContent] = useState(true);
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleHelloWorldClick = () => {
    setShowEmotionContent(true);
  };
  return (
    <div className="max-w-screen-xl flex flex-col">
      <div>
        <div>Hi Username!</div>
        <div className="w-full bg-[#D0BFFF] my-8 rounded-xl px-12 py-8 items-center flex justify-between">
          <div className="flex flex-col gap-4 mx-auto ">
            <div className="text-xl font-bold text-[#101828]">
              Take your first step today!
            </div>
            <div className="text-lg font-medium text-[#667085]">
              Book a session with therapists matched to your selected concerns
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/therapist");
            }}
            className="mx-auto flex gap-4 justify-center items-center text-white cursor-pointer bg-[#7B3CF3] px-8 py-2 font-medium rounded-xl"
          >
            <p>See my therapist </p>
            <span className="text-2xl"> {" > "}</span>
          </button>
        </div>
      </div>
      <div>
        <div>Flow for you!</div>
        <div className="mt-4 flex justify-center gap-12 w-full">
          <div className="bg-[#EEF296] flex justify-between gap-16 items-center py-6 px-4 rounded-xl w-1/2">
            <div className="flex flex-col gap-4">
              <MdOutlineWbSunny />
              <p className="text-xl font-bold">
                Anxiety Relief Exercises
                <p className="text-lg font-medium text-[#383f4d]">
                  Quick & Powerful relationships
                </p>
              </p>
            </div>
            <div>
              <img
                src="/images/beach.jpg"
                className="rounded-xl max-w-[300px] max-h-[150px] "
                alt="mountain"
              />
            </div>
          </div>
          <div className="bg-[#DFCCFB] flex justify-between gap-16 items-center py-6 px-4 rounded-xl w-1/2">
            <div className="flex flex-col gap-4">
              <FiMoon />
              <p className="text-xl font-bold">
                Conflict Resolution
                <p className="text-lg font-medium text-[#383f4d]">
                  Build healthy relationships
                </p>
              </p>
            </div>
            <div>
              <img
                src="/images/Mountain.jpg"
                className="rounded-xl max-w-[300px] max-h-[150px] "
                alt="mountain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {/* <div className="mt-4">Thoughts for you!</div>
        <div className="w-full bg-[#DFCCFB] my-8 rounded-xl px-12 py-8 items-center flex justify-between">
          <div className="flex flex-col gap-4 mx-auto ">
            <div className="text-xl font-bold text-[#101828]">
              Take your first step today!
            </div>
            <div className="text-lg font-medium text-[#667085]">
              Book a session with therapists matched to your selected concerns
            </div>
          </div>
          <div className="mx-auto flex gap-4 justify-center items-center text-white cursor-pointer bg-[#7B3CF3] px-8 py-2 font-medium rounded-xl">
            <p>See my therapist </p>
            <span className="text-2xl"> {" > "}</span>
          </div>
        </div> */}
        <div className="shadow-xl w-full bg-[#EEEDED] my-8 rounded-xl px-8 py-8 items-center flex justify-center">
          <div className="flex flex-col gap-4 w-full">
            <div className="text-xl font-bold text-[#101828] w-full text-left">
              How are you feeling today?
            </div>
            {showEmotionContent ? (
            <div className="mt-4 flex justify-center mx-auto gap-16 items-center w-full">
              <div className="flex flex-col justify-center items-center gap-4">
                <RiEmotionHappyLine onClick={()=>{setSelectedEmotion("Ecstatic"); setShowEmotionContent(false)}} className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                <p>Ecstatic</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <ImHappy onClick={()=>{setSelectedEmotion("Happy"); setShowEmotionContent(false)}} className="text-6xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                <p>Happy</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <RiEmotionNormalLine onClick={()=>{setSelectedEmotion("Good"); setShowEmotionContent(false)}} className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                <p>Good</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <RiEmotionUnhappyLine onClick={()=>{setSelectedEmotion("Unhappy"); setShowEmotionContent(false)}} className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                <p>Unhappy</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <RiEmotionSadLine onClick={()=>{setSelectedEmotion("Distressed"); setShowEmotionContent(false)}} className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300 " />
                <p>Distressed</p>
              </div>
            </div>
            ):
            (
              <div className="relative flex flex-col gap-4 w-full text-center">
                {selectedEmotion === "Ecstatic" && (
                   <div className="flex flex-col justify-center items-center gap-4">
                   <RiEmotionHappyLine className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                   <p className="text-xl font-semibold text-gray-500">Ecstatic</p>
                   <p className="text-lg">Amazing! Find a good purpose with Ikiguide cards.</p>
                  <button onClick={()=>{navigate('/therapist')}} className="py-2 px-4 bg-[#7B3CF3] text-white rounded-lg my-2">Start setting goal</button>
                 </div>
                )}
                {selectedEmotion === "Happy" && (
                  <div className="flex flex-col justify-center items-center gap-4">
                  <ImHappy className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                  <p className="text-xl font-semibold text-gray-500">Happy</p>
                  <p className="text-lg">Nice! Write about your feelings in a doodle book.</p>
                 <button onClick={()=>{navigate('/therapist')}} className="py-2 px-4 bg-[#7B3CF3] text-white rounded-lg my-2">Start Journaling</button>
                </div>
                )}
                {selectedEmotion === "Good" && (
                  <div className="flex flex-col justify-center items-center gap-4">
                  <RiEmotionNormalLine className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                  <p className="text-xl font-semibold text-gray-500">Good</p>
                  <p className="text-lg">Take a wellbeing test to understand why you may feel like this!</p>
                 <button onClick={()=>{navigate('/therapist')}} className="py-2 px-4 bg-[#7B3CF3] text-white rounded-lg my-2">Know Yourself</button>
                </div>
                )}
                {selectedEmotion === "Unhappy" && (
                 <div className="flex flex-col justify-center items-center gap-4">
                 <RiEmotionUnhappyLine className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                 <p className="text-xl font-semibold text-gray-500">Unhappy</p>
                 <p className="text-lg">Navigate through difficult days with expert support and feel better!</p>
                <button onClick={()=>{navigate('/therapist')}} className="py-2 px-4 bg-[#7B3CF3] text-white rounded-lg my-2">Talk to experts</button>
               </div>
                )}
                {selectedEmotion === "Distressed" && (
                  <div className="flex flex-col justify-center items-center gap-4">
                  <RiEmotionSadLine className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
                  <p className="text-xl font-semibold text-gray-500">Distressed</p>
                  <p className="text-lg">It's alright, we've got you. Seek support today.</p>
                 <button onClick={()=>{navigate('/therapist')}} className="py-2 px-4 bg-[#7B3CF3] text-white rounded-lg my-2">Get support</button>
                </div>
                )}
                <button
                  onClick={handleHelloWorldClick}
                  className="absolute right-0 top-[-2rem] text-white  cursor-pointer bg-[#7B3CF3] w-[20px] h-[20px] font-medium rounded-full"
                >
                 X
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
