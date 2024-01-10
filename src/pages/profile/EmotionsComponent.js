import React, { useState } from "react";
import {
  RiEmotionHappyLine,
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
  RiEmotionSadLine,
} from "react-icons/ri";
import { ImHappy } from "react-icons/im";
import { FaRegFrown, FaRegMehBlank } from "react-icons/fa";
import { useNavigate } from "react-router";

const EmotionsComponent = () => {
  const navigate = useNavigate();

  const emotions = [
    { icon: <RiEmotionHappyLine />, label: "Excited", emotion: "Ecstatic" },
    { icon: <ImHappy />, label: "Happy", emotion: "Happy" },
    { icon: <RiEmotionNormalLine />, label: "Good", emotion: "Good" },
    { icon: <RiEmotionUnhappyLine />, label: "Sad", emotion: "Unhappy" },
    { icon: <RiEmotionSadLine />, label: "Worried", emotion: "Distressed" },
    { icon: <FaRegFrown />, label: "Exhausted", emotion: "Exhausted" },
    { icon: <FaRegMehBlank />, label: "Don’t know", emotion: "Don’t know" },
  ];
  const emotionContent = {
    Ecstatic: {
      icon: (
        <RiEmotionHappyLine className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
      ),
      label: "Ecstatic",
      description: "Amazing! Hold onto that feeling and let it inspire you.",
      buttonText: "Start setting goal",
    },
    Happy: {
      icon: (
        <ImHappy className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
      ),
      label: "Happy",
      description:
        "Yay! Remind yourself of what makes you feel this way and do more of it.",
      buttonText: "Start Journaling",
    },
    Good: {
      icon: (
        <RiEmotionNormalLine className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
      ),
      label: "Good",
      description:
        "Take a wellbeing test to understand why you may feel like this!",
      buttonText: "Know Yourself",
    },
    Unhappy: {
      icon: (
        <RiEmotionUnhappyLine className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
      ),
      label: "Unhappy",
      description:
        "Navigate through difficult days with expert support and feel better!",
      buttonText: "Talk to experts",
    },
    Distressed: {
      icon: (
        <RiEmotionSadLine className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
      ),
      label: "Distressed",
      description: "It's alright, we've got you. Seek support today.",
      buttonText: "Get support",
    },
    Exhausted: {
      icon: (
        <FaRegFrown className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
      ),
      label: "Exhausted",
      description:
        "Juggling a lot at once can be overwhelming. We’ve got support that can help you feel better.",
      buttonText: "Get Help",
    },
    "Don’t know": {
      icon: (
        <FaRegMehBlank className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300" />
      ),
      label: "Don’t know",
      description:
        "It's okay not to have all the answers. Our experts can help you navigate your feelings.",
      buttonText: "Get Guidance",
    },
  };

  const handleEmotionClick = (selectedEmotion) => {
    setSelectedEmotion(selectedEmotion);
    setShowEmotionContent(false);
  };
  const handleHelloWorldClick = () => {
    setShowEmotionContent(true);
  };
  const [showEmotionContent, setShowEmotionContent] = useState(true);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  return (
    <div className="mx-auto shadow-xl w-full bg-[#EEEDED] my-8 rounded-xl px-8 py-8 items-center flex justify-center">
      <div className="flex flex-col gap-4 w-full">
        <div className="text-xl font-bold text-[#101828] w-full text-left">
          How are you feeling today?
        </div>
        {showEmotionContent ? (
          <div className="mt-4 flex flex-wrap justify-center mx-auto gap-16 items-center w-full">
            {emotions.map((emotion, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4"
              >
                <div
                  onClick={() => handleEmotionClick(emotion.emotion)}
                  className="text-7xl cursor-pointer transition ease-in-out hover:scale-110 duration-300"
                >
                  {emotion.icon}
                </div>
                <p>{emotion.label}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex flex-col gap-4 w-full text-center">
            {selectedEmotion && (
              <div className="flex flex-col justify-center items-center gap-4">
                {emotionContent[selectedEmotion].icon}
                <p className="text-xl font-semibold text-gray-500">
                  {emotionContent[selectedEmotion].label}
                </p>
                <p className="text-lg">
                  {emotionContent[selectedEmotion].description}
                </p>
                <button
                  onClick={() => {
                    navigate("/therapist");
                  }}
                  className="py-2 px-4 bg-[#7B3CF3] text-white rounded-lg my-2"
                >
                  {emotionContent[selectedEmotion].buttonText}
                </button>
              </div>
            )}
            <button
              onClick={handleHelloWorldClick}
              className="absolute right-0 top-[0rem] md:top-[-2rem] text-white  cursor-pointer bg-[#7B3CF3] w-[20px] h-[20px] font-medium rounded-full"
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionsComponent;
