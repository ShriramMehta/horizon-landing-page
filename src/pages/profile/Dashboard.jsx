import React from "react";

import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import EmotionsComponent from "./EmotionsComponent";

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  return (
    <div className="max-w-screen-xl flex flex-col">
      <div>
        <div className="font-bold text-2xl">
          {user ? (
            <div>Hi {user?.name?.split(" ")[0]}!</div>
          ) : (
            <div>Hi Guest! </div>
          )}
        </div>
        <div className="w-full bg-[#D0BFFF] my-8 rounded-xl px-6 md:px-12 py-8 items-center flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-4 mx-auto  ">
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
            className="mt-4 md:mt-0 mx-auto flex gap-4 justify-center items-center text-white cursor-pointer bg-[#7B3CF3] px-8 py-2 font-medium rounded-xl"
          >
            <p>See my therapist </p>
            <span className="text-2xl"> {" > "}</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <EmotionsComponent />
      </div>
    </div>
  );
};

export default Dashboard;
