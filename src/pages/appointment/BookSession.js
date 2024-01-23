import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import therapistService from "../../services/therapistService";
import { useAuth } from "../../hooks/useAuth";
import Modal from "../../components/Modal";
import { toast } from "react-hot-toast";
const transformToAvailableDates = (slotData) => {
  const transformedDates = {};

  // Iterate through slotData
  slotData.forEach((slot) => {
    const date = new Date(slot.slot_date);
    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    const dateString = date.getDate().toString();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    // Format the start_time to 12-hour format
    const startTime = formatStartTime(slot.start_time);

    // Convert start_time to a numerical value (hours) for addition
    const startHour = parseInt(slot.start_time.split(":")[0]);

    // Calculate endHour, considering the possibility of exceeding 24 hours
    const endHour = (startHour + 1) % 24;

    // Calculate the next day if endHour is 0 (midnight)
    const nextDay =
      endHour === 0 ? new Date(date.getTime() + 24 * 60 * 60 * 1000) : date;
    const status = slot?.status;
    // Format start and end times
    const startTimeString = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${dateString}T${slot.start_time}`;
    const endTimeString = `${nextDay.getFullYear()}-${(nextDay.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${nextDay
      .getDate()
      .toString()
      .padStart(2, "0")}T${endHour.toString().padStart(2, "0")}:${
      slot.start_time.split(":")[1]
    }:00`;
    // Create or update the transformedDates object
    if (!transformedDates[dateString]) {
      transformedDates[dateString] = {
        appointmentDate: `${date.getFullYear().toString()}-${date
          .getMonth()
          .toString()}-${dateString}`,
        day,
        date: dateString,
        month,
        time: [],
        slots: [],
        startTimes: [],
        endTimes: [],
        slot_date: slot?.slot_date,
        slotsStatus: [],
      };
    }

    // Add the formatted start_time to the time array
    transformedDates[dateString].time.push(startTime);
    transformedDates[dateString].slots.push(slot?.slot_id);
    transformedDates[dateString].startTimes.push(startTimeString);
    transformedDates[dateString].endTimes.push(endTimeString);
    transformedDates[dateString].slotsStatus.push(status);
  });

  // Convert the transformedDates object to an array
  const transformedDatesArray = Object.values(transformedDates);

  return transformedDatesArray;
};

// Function to format the start_time to 12-hour format
const formatStartTime = (startTime) => {
  const [hours, minutes] = startTime.split(":");
  const formattedHours = parseInt(hours) % 12 || 12;
  const period = parseInt(hours) >= 12 ? "pm" : "am";
  return `${formattedHours}:${minutes} ${period}`;
};

const BookSession = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [slotData, setSlotData] = useState([]);
  const [selectedTimeIdx, setselectedTimeIdx] = useState(null);
  const { id } = useParams();
  const [therapistData, setTherapistData] = useState([]);
  const [type, setType] = useState("");
  const [bookingData, setBookingData] = useState([
    { date: "", time: "", zone: "", status: "", day: "", rate: "" },
  ]);

  const [isDateLoaded, setIsDataLoaded] = useState(false);
  const getTimePeriod = (dateTimeString) => {
    const hour = new Date(dateTimeString).getHours();

    if (hour >= 5 && hour < 12) {
      return "Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Afternoon";
    } else if (hour >= 17 && hour < 20) {
      return "Evening";
    } else {
      return "Night";
    }
  };
  useEffect(() => {
    (async () => {
      try {
        setIsDataLoaded(false);

        const response = await therapistService.getThearpistAvailibiltyById(id);
        console.log(response);
        if (response.data.success) {
          setSlotData(transformToAvailableDates(response?.data?.data));
          console.log(transformToAvailableDates(response?.data?.data));
        }
        const response1 = await therapistService.getThearpistById(id);
        setType(user?.type === "non-student" ? "Non Student" : "Student");

        setTherapistData(response1.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsDataLoaded(true);
      }
    })();
  }, []);

  const handleClick = () => {
    if (user) {
      const selectedDate = slotData[selectedDateIdx];
      const selectedTime = getTimeSlotsForSelectedDate()[selectedTimeIdx];
      const startTime = slotData[selectedDateIdx]?.startTimes[selectedTimeIdx];
      console.log(slotData[selectedDateIdx]);
      setBookingData([
        {
          ...bookingData[0],
          day: selectedDate?.day,
          slot_id: slotData[selectedDateIdx]?.slots[selectedTimeIdx],
          date: `${selectedDate.date} ${selectedDate?.month}`,
          time: selectedTime,
          zone: getTimePeriod(startTime),
          startTime: startTime,
          endTime: slotData[selectedDateIdx]?.endTimes[selectedTimeIdx],
          status: type,
          appointmentDate: selectedDate?.appointmentDate,
          rate: type === "Non Student" ? 1500 : 800,
        },
      ]);

      setOpenModal(true);
    } else {
      toast.error("Please sign in first");
      navigate("/signin");
    }
  };

  const handleNextDate = () => {
    const nextDateIdx = (selectedDateIdx + 1) % slotData.length;
    setSelectedDateIdx(nextDateIdx);
    setselectedTimeIdx(null); // Reset selected time
  };
  // Function to format time slots for a selected date
  const getTimeSlotsForSelectedDate = () => {
    if (selectedDateIdx !== null) {
      return slotData[selectedDateIdx]?.time || [];
    }
    return [];
  };
  const repeatDivCal = slotData.map((item, idx) => (
    <div
      key={idx}
      className={`cursor-pointer flex flex-col gap-0 justify-center items-center max-w-[76px] w-full max-h-[82px] h-full rounded-[16px] border-[1px] ${
        selectedDateIdx === idx
          ? "bg-[#4E139F] text-[#4E139F] border-[#4E139F]"
          : ""
      }`}
      onClick={() => {
        setSelectedDateIdx(idx);
        setselectedTimeIdx(null); // Reset selected time
      }}
    >
      <div
        className={`bg-[#7B3CF3] h-[30px] w-full text-center text-white py-[4px] rounded-tr-[16px] rounded-tl-[16px]`}
      >
        {item.day}
      </div>
      <div
        className={`bg-white text-[#4E139F] pt-1 h-[30px] w-full text-center ${
          selectedDateIdx === idx ? "bg-[#ECE7FE] text-[#4E139F]" : ""
        }`}
      >
        {item.date}
      </div>
      <div
        className={`text-sm text-[#667085] h-[20px] bg-white w-full text-center rounded-br-[16px] rounded-bl-[16px] ${
          selectedDateIdx === idx ? "bg-[#ECE7FE] text-[#4E139F]" : ""
        }`}
      >
        {item.month}
      </div>
    </div>
  ));

  const repeatDivTime = getTimeSlotsForSelectedDate()?.map((item, idx) => {
    const isBooked = slotData[selectedDateIdx]?.slotsStatus[idx] === "booked";
    return (
      <div
        key={idx}
        className={`cursor-pointer w-[100px]  max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[12px] px-[4px] border-[1px] ${
          selectedTimeIdx === idx
            ? "bg-[#ECE7FE] text-white border-[#4E139F]"
            : "bg-white"
        } ${isBooked ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => !isBooked && setselectedTimeIdx(idx)}
      >
        <p
          className={`text-sm font-normal text-[#4E139F] text-center ${
            selectedTimeIdx === idx ? "text-[#4E139F]" : ""
          }`}
        >
          {item}
        </p>
      </div>
    );
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col max-w-screen-lg  mx-auto">
      {isDateLoaded && (
        <div className="shadow-xl flex flex-col gap-4 p-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col md:flex-rowjustify-center items-center gap-4 max-w-1/2 w-full md:w-1/2 h-5/6 shadow-lg p-2 md:p-4">
              <img
                className="w-36 h-36 object-cover rounded-full shadow-lg"
                src={therapistData.imgUrl}
                alt="Therapist Photo"
              />
              <div className="max-w-1/2 w-full flex flex-row md:flex-col gap-4">
                <p className="text-[#101828] text-lg font-semibold">
                  Session with {therapistData?.name}
                </p>
                <p className="text-[#475467] text-base font-normal">
                  {therapistData?.concernSpecialisation &&
                    JSON.parse(therapistData?.concernSpecialisation).map(
                      (item, idx, array) => (
                        <span key={idx}>
                          {item}
                          {idx < array.length - 1 && ", "}
                        </span>
                      )
                    )}
                </p>
              </div>
            </div>
            {slotData.length > 0 ? (
              <div className="flex flex-col max-w-1/2 w-full md:w-1/2 p-4 gap-4">
                <div className="flex flex-col gap-4">
                  <p className="text-[#101828] text-xl font-semibold">
                    Available Dates
                  </p>
                  <div className="flex flex-row flex-wrap  items-center justify-start w-full gap-4">
                    {repeatDivCal}
                    <div className="flex justify-end mx-auto">
                      {slotData?.length > 4 && (
                        <img
                          onClick={handleNextDate}
                          src="/images/Chevron right.png"
                          alt="right"
                          className="w-[100px] md:w-[30px] h-[30px]"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-wrap gap-4 max-w-full">
                  <p className="text-[#101828] text-lg font-semibold">
                    Available Time Slots
                  </p>
                  <div className="flex flex-row  flex-wrap items-center justify-start w-full gap-4">
                    {repeatDivTime}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col max-w-1/2 w-1/2 p-4 gap-4">
                <div className="flex flex-col gap-4">
                  <p className="text-[#101828] text-xl font-semibold">
                    No available time slots
                  </p>
                </div>
              </div>
            )}

            <div>
              <hr></hr>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-end md:mr-[30px] gap-12 items-center align-center">
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <p className="text-[#101828] text-xl font-semibold">
                Session Pricing
              </p>
              <div className="flex gap-4">
                <div className="flex flex-row  justify-center items-center font-semibold text-[#101828]">
                  <img src="/images/currency-rupee.png" alt="rupee" />
                  <span>{type === "Non Student" ? 1500 : 800}/hr</span>
                </div>
                <div className="  px-2 py-4 rounded-[16px] flex justify-center items-center  bg-[#F0F0FE] border-[1px] border-[##EAECF0]">
                  <div className="flex flex-row justify-start items-center gap-2">
                    <p className="text-xs font-semibold text-[#4E139F] text-center ">
                      {type} Status
                    </p>
                    <img src="/images/Check Circle.png" alt="check" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto ">
              <button
                onClick={handleClick}
                className="text-center bg-primaryIndigo hover-bg-lightBlue text-white px-4 py-2 rounded-full mr-2 flex justify-center items-center w-full md:w-auto"
                disabled={selectedDateIdx === null || selectedTimeIdx === null}
                style={{
                  opacity:
                    selectedDateIdx === null || selectedTimeIdx === null
                      ? 0.5
                      : 1,
                }}
              >
                Book a Session
                <img src="/images/Chevron right white.png" alt="right" />
              </button>
            </div>
          </div>
          <div className="my-2 md:my-0 text-sm text-[#667085] h-[20px] bg-white w-full text-center rounded-br-[16px] rounded-bl-[16px] ">
            Please Note: You will receive the Google Meet link for the session
            after the payment is completed.
          </div>
        </div>
      )}
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          bookingData={bookingData}
          therapistData={therapistData}
        />
      )}
    </div>
  );
};

export default BookSession;
