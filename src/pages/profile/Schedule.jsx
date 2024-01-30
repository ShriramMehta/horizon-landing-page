import React, { useEffect, useState } from "react";

import userService from "../../services/userService";
import { useAuth } from "../../hooks/useAuth";
import UpcomingSession from "./UpcomingSession";
import toast from "react-hot-toast";
import PreviousSessions from "./PreviousSessions";
import { useNavigate } from "react-router";

const Schedule = () => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const [upcomingAppointents, setUpcomingAppointments] = useState([]);
  const [previousAppointents, setPreviousAppointments] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await userService.getAppointmentsByClientId(user?.id);
        console.log(res);
        if (res.data.success) {
          setUpcomingAppointments(
            res.data.data.filter(
              (appointment) => appointment.status === "confirmed"
            )
          );
          setPreviousAppointments(
            res.data.data.filter(
              (appointment) => appointment.status !== "confirmed"
            )
          );
        } else {
          toast.error("Something went wrong");
        }
      } catch (err) {
        // toast.error("Something went wrong");
      }
    })();
  }, []);

  return (
    <div className="flex flex-col gap-16 max-w-screen-xl mx-auto mb-8">
      <div className="flex flex-col gap-8 mx-2 md:mx-6">
        {upcomingAppointents.length === 0 &&
          previousAppointents.length === 0 && (
            <div className="mt-20 ">
              <h4 className="text-[#101828] text-2xl font-normal flex  justify-center items-center ">
                Start booking sesssions to see them here.
              </h4>
              <button
                onClick={() => {
                  navigate("/therapist");
                }}
                className="mt-6 mx-auto flex gap-4 justify-center items-center text-white cursor-pointer bg-[#7B3CF3] px-8 py-2 font-medium rounded-xl"
              >
                <p>Book a session </p>
                <span className="text-2xl"> {" > "}</span>
              </button>
            </div>
          )}
        {upcomingAppointents.length > 0 && (
          <h1 className="text-[#101828] text-2xl font-semibold">
            Upcoming Sessions
          </h1>
        )}
        {upcomingAppointents?.map((appointment, index) => (
          <UpcomingSession appointment={appointment} />
        ))}
      </div>

      <div className="flex flex-col gap-8 mx-2 md:mx-6">
        {previousAppointents.length > 0 && (
          <h1 className="text-[#101828] text-2xl font-semibold">
            Previous Sessions
          </h1>
        )}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
          {previousAppointents?.map((appointment, index) => (
            <PreviousSessions appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
