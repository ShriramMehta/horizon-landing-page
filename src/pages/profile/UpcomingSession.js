import React from "react";
import toast from "react-hot-toast";
import { BsDot } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { TbCopy } from "react-icons/tb";
const UpcomingSession = ({ appointment }) => {
  const handleOpenLink = () => {
    // Open the meeting link in a new tab
    window.open(appointment?.meetLink, "_blank");
  };

  const handleCopyLink = () => {
    // Copy the meeting link to the clipboard
    navigator.clipboard.writeText(appointment?.meetLink);
    toast.success("Meeting link copied successfully");
  };
  return (
    <div className="py-4 px-4 md:px-8 flex gap-4 flex-col p-4 bg-white border-1 border-gray-300 border rounded-xl shadow-lg">
      <div className="bg-[#ECFDF3] rounded-full flex flex-row justify-center gap-0 items-center max-w-fit py-1 px-1">
        <BsDot className="text-3xl text-[#027A48] font-bold " />
        <p className="text-[#027A48] mr-2 font-bold">Upcoming</p>
      </div>
      <div className="flex gap-6 md:gap-12 items-center mt-2">
        <div>
          <img
            className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full shadow-lg"
            src={appointment?.imgUrl}
            alt="Therapist Photo"
          />
        </div>
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
      <div className="flex gap-4 items-center">
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
      <div className="flex flex-col md:flex-row gap-4 items-center  mt-4">
        <button className="flex gap-4 py-3 px-4 border border-1 border-gray-300 rounded-xl items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 256 211"
          >
            <path
              fill="#00832D"
              d="m144.822 105.322l24.957 28.527l33.562 21.445l5.838-49.792l-5.838-48.669l-34.205 18.839z"
            />
            <path
              fill="#0066DA"
              d="M0 150.66v42.43c0 9.688 7.864 17.554 17.554 17.554h42.43l8.786-32.059l-8.786-27.925l-29.11-8.786z"
            />
            <path
              fill="#E94235"
              d="M59.984 0L0 59.984l30.876 8.765l29.108-8.765l8.626-27.545z"
            />
            <path fill="#2684FC" d="M.001 150.679h59.983V59.983H.001z" />
            <path
              fill="#00AC47"
              d="M241.659 25.398L203.34 56.834v98.46l38.477 31.558c5.76 4.512 14.186.4 14.186-6.922V32.18c0-7.403-8.627-11.495-14.345-6.781"
            />
            <path
              fill="#00AC47"
              d="M144.822 105.322v45.338H59.984v59.984h125.804c9.69 0 17.553-7.866 17.553-17.554v-37.796z"
            />
            <path
              fill="#FFBA00"
              d="M185.788 0H59.984v59.984h84.838v45.338l58.52-48.49V17.555c0-9.69-7.864-17.554-17.554-17.554"
            />
          </svg>
          <button
            onClick={handleOpenLink}
            className="flex gap-4 py-3 px-4 border border-1 border-gray-300 rounded-xl items-center"
          >
            <div className="text-[#000000] text-base md:text-lg font-normal">
              Open Meeting Link
            </div>
          </button>
        </button>{" "}
        <button
          onClick={handleCopyLink}
          className="flex gap-4 py-3 px-4 border border-1 border-gray-300 rounded-xl items-center"
        >
          <TbCopy className="text-[#475467] text-3xl" />
          <div className="text-[#000000] text-base md:text-lg font-normal">
            Copy Meeting Link
          </div>
        </button>
      </div>
    </div>
  );
};

export default UpcomingSession;
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
