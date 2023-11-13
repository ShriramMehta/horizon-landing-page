import React from "react";

const viewDetails = () => {
  return (
    <div className="max-w-screen-lg mx-auto h-full felx flex-col justify-center items-center px-10">
      <div className="flex flex-col lg:flex-row w-full gap-12 justify-center">
        <div className="w-full flex flex-col gap-4 justify-center">
          <div className="w-full flex flex-col justify-center items-center relative">
            <img
              src="./images/FrameBg.png"
              alt="frame"
              className="relative w-full h-full"
            />
            <div className="flex flex-col absolute top-[15px] md:top-[80px] lg:top-[30px] lg:left-[140px] max-w-[300px] lg:max-w-[400px] max-h-[150px] gap-1">
              <div className="text-[#101828] font-semibold text-xl text-center">
                Shivangi Khatter
              </div>
              <div className="text-[#475467] text-lg text-center">
                4+ years of experience
              </div>
              <div className="flex justify-center max-w-60">
                <img
                  src="./images/Main Therapist Pic.png"
                  alt="img1"
                  className="w-5/6 md:w-full lg:h-auto lg:object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-[8rem] md:mt-[6rem] lg:mt-[8rem] gap-8 w-full">
            <div className="flex flex-col w-full">
              <div className="text-[#101828] font-semibold text-xl">Bio</div>
              <div className="text-[#344054] text-base">Gender: Female</div>
              <div className="text-[#344054] text-base">
                Pronouns: She/her/hers
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="text-[#101828] font-semibold text-xl">
                Education
              </div>
              <div className="text-[#344054] text-base">
                MA In Clinical Psychology, PHD in Psychology/Counselling
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center lg:px-3">
          <div className="w-full flex flex-col gap-1">
            <div className="text-[#101828] text-xl font-semibold">
              All Specialisations
            </div>
            <div className="text-[#344054] text-lg">
              Anxiety, Depression, Anger Management, Grief and Loss,
              Relationship and Family Issues, Career and Work Issues,
              Self-Esteem and Self-Worth, Stress and Burnout
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="text-[#101828] text-xl font-semibold">Approach</div>
            <div className="text-[#344054] text-lg">
              CBT, Humanistic, Mindfulness Based
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="text-[#101828] text-xl font-semibold">
              Languages
            </div>
            <div className="text-[#344054] text-lg">English, Hindi</div>
          </div>
          <div className="w-full">
            <button className="text-center bg-primaryIndigo hover-bg-lightBlue text-white px-4 py-2 rounded-full flex justify-center items-center w-full md:w-auto">
              Book a Session
              <img src="./images/Chevron right white.png" alt="right" />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-8"></hr>
      <div className="flex flex-col">
        <div className="flex w-full items-center gap-2 text-[#101828] text-xl font-semibold">
          <span>
            <img src="./images/star-01.png" alt="star" />
          </span>
          4.9
          <span>
            <img src="./images/Status Dot.png" alt="star" />
          </span>
          20 Reviews
        </div>
        <div>Swiper</div>
      </div>
    </div>
  );
};

export default viewDetails;
