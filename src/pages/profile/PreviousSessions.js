import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import TextField from "@mui/material/TextField";
import { FaRegStar } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import therapistService from "../../services/therapistService";
const PreviousSessions = ({ appointment }) => {
  const { user } = useAuth();
  const [showFeedback, setShowFeedback] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [review, setReview] = useState("");
  const [starStates, setStarStates] = useState(
    Array.from({ length: 5 }).fill(false)
  );
  const handleStarClick = (index) => {
    setStarStates((prev) => prev.map((_, i) => (i <= index ? true : false)));
  };

  const handleSubmitReview = async () => {
    const data = {
      clientId: user?.id,
      therapistId: appointment?.therapistId,
      appointmentId: appointment?.appointmentId,
      feedback: review,
      rating: starStates.filter((state) => state === true).length,
    };
    console.log(data);
    try {
      const res = await therapistService.addFeedback(data);
      console.log(res);
      if (res.data.success) {
        setReviewSubmitted(true);
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
    }
  };
  return (
    <div className="py-4 px-4 md:px-8 max-w-[600px] flex gap-4 flex-col p-4 bg-white border-1 border-gray-300 border rounded-xl shadow-lg">
      {showFeedback ? (
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex justify-between gap-16 items-center">
            <div className="text-[#101828] text-lg font-semibold">
              Please let us know how your session went!{" "}
            </div>
            <button
              onClick={() => {
                setShowFeedback(false);
                setReviewSubmitted(false);
              }}
              className="bg-[#F0F0FE] text-[#0E0079] font-bold rounded-full flex flex-row justify-center gap-0 items-center max-w-fit h-5 w-5 p-4"
            >
              X
            </button>
          </div>

          {reviewSubmitted ? (
            <>
              <div className="my-2 text-center w-full text-[#344054] text-lg font-semibold">
                Thank you for your feedback!
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center items-center">
                <TextField
                  id="filled-multiline-static"
                  label="Write your feedback here"
                  multiline
                  rows={4}
                  variant="outlined"
                  className="w-full rounded-xl"
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                />
              </div>
              <div className="my-2 text-center w-full text-[#344054] text-lg font-semibold">
                Rate Your session
              </div>

              <div className="flex gap-8 items-center justify-center">
                {starStates.map((state, idx) => (
                  <FaRegStar
                    key={idx}
                    className={`text-2xl cursor-pointer ${
                      state ? "text-yellow-500" : ""
                    }`}
                    onClick={() => handleStarClick(idx)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="my-2 text-[#FFFFFF] bg-gray-300 hover:bg-purple-200 hover:text-[#FFFFFF] rounded-lg text-sm w-full ms-auto inline-flex py-2 justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={handleSubmitReview}
              >
                Submit Review
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div
              className={`rounded-full flex flex-row justify-center gap-0 items-center max-w-fit py-2 px-2 ${
                appointment?.status === "cancelled"
                  ? "bg-[#FFFDEB]"
                  : "bg-[#F0F0FE]"
              }`}
            >
              <p
                className={`font-bold ${
                  appointment?.status === "cancelled"
                    ? "text-[#DC6803]"
                    : "text-[#0E0079]"
                }`}
              >
                {appointment?.status &&
                  appointment.status.charAt(0).toUpperCase() +
                    appointment.status.slice(1)}
              </p>
            </div>

            <button
              onClick={() => {
                setShowFeedback(true);
              }}
              className="bg-[#F0F0FE] rounded-full flex flex-row justify-center gap-0 items-center max-w-fit py-2 px-2"
            >
              <p className="text-[#0E0079] font-bold">Feedback</p>
            </button>
          </div>
          <div className="flex gap-8 items-center mt-2">
            <img
              className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full shadow-lg"
              src={appointment?.imgUrl}
              alt="Therapist Photo"
            />
            <div className="flex flex-col gap-2 justify-center">
              <h1 className="text-[#101828] text-base md:text-xl font-semibold">
                Session with {appointment?.therapistName}
              </h1>
              <h2 className="text-[#475467] text-base md:text-xl font-medium">
                {appointment?.concerns &&
                  JSON.parse(appointment?.concerns).map((item, idx, array) => (
                    <div key={idx} className="text-[#344054] text-lg">
                      {item} {idx < array.length - 1 && ","}
                    </div>
                  ))}
              </h2>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <div className="flex gap-2 items-center">
              <CiCalendar className="text-[#344054] text-2xl" />
              <div className="text-[#040000] font-semibold text-base md:text-lg">
                {appointment?.formattedDateTime?.dayOfWeek},{" "}
                {appointment?.formattedDateTime?.dayOfMonth}{" "}
                {appointment?.formattedDateTime?.month}
              </div>
            </div>
            <div className="text-[#475467] font-medium text-base md:text-lg">
              {appointment?.formattedDateTime?.period},{" "}
              {appointment?.formattedDateTime?.formattedTime}
            </div>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <div className="flex gap-2 items-center">
              <FiClock className="text-[#344054] text-2xl" />
              <div className="text-[#040000] font-semibold text-base md:text-lg">
                1 hour
              </div>
            </div>
            <div className="text-[#475467] font-medium text-base md:text-lg">
              Online via Google Meet
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviousSessions;
/* logic for handling in fronend  console.log(appointment);
  // Assuming 'startTime' is a string representing the appointment start time
  const startTimeString = appointment?.startTime;

  // Create a Date object from the startTimeString
  const startTime = new Date(startTimeString);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get day, month, and time components
  const dayOfWeek = dayNames[startTime.getDay()];
  // Get day, month, and time components
  const day = startTime.getDate();
  const month = monthNames[startTime.getMonth()];
  const time = startTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  // Determine if it's morning or afternoon
  const period = startTime.getHours() < 12 ? "Morning" : "Afternoon";
  // Create the formatted string
  const formattedString = `${dayOfWeek}, ${day} ${month} ${period}, ${time}`;

  // Render the result
  //   console.log(formattedString); // Output: "Thursday, 22 December Morning, 8:30 AM"
  */
