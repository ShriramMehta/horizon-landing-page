import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import userService from "../../services/userService";

const OnboardingModal = ({ closeModal, handleOnboardingData }) => {
  const [dobModal, setDobModal] = useState(true);
  const [genderModal, setGenderModal] = useState(false);
  const [concernModal, setConcernModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null);
  const [student, setStudent] = useState(null);
  const [date, setDate] = useState(null);
  const [studentModal, setStudentModal] = useState(false);
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [formDataState, setFormDataState] = useState([]);
  const concernsData = [
    "Stress",
    "Anxiety",
    "Depression",
    "Grief and loss",
    "Self development",
    "Relationships",
    "Work related",
    "Sleep help",
  ];

  const handleSelectConcerns = (concern) => {
    setSelectedConcerns((prevConcerns) =>
      prevConcerns.includes(concern)
        ? prevConcerns.filter((c) => c !== concern)
        : [...prevConcerns, concern]
    );
  };

  const handleSelectStudent = (st) => {
    setStudent(st);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleSignUp = async () => {
    setConcernModal(false);
    // Map the concerns to a new array of formatted strings
    const formattedConcerns = selectedConcerns.map((concern) => `"${concern}"`);

    // Join the formattedConcerns array into a single string
    const concernsString = `[${formattedConcerns.join(", ")}]`;
    const formData = {
      selectedGender,
      selectedConcerns: concernsString,
      student: student === "Yes" ? "student" : "non-student",
      date,
    };
    setFormDataState(formData);
    console.log(formData);
    handleOnboardingData(formData);
  };

  useEffect(() => {
    console.log(formDataState);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [formDataState]);
  const mapGenderToDisplay = (gender) => {
    switch (gender) {
      case "female":
        return "Female";
      case "male":
        return "Male";
      case "non-binary":
        return "Non binary";
      case "other":
        return "Others";
      case "preferred-not-to-say":
        return "I prefer not to say";
      default:
        return "";
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60">Progress Bar</div>
      <div className="w-[400px] rounded-[12px] bg-white flex flex-col p-[25px] relative">
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-purple-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
          data-modal-hide="default-modal"
          onClick={() => closeModal(false)}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        <div className="flex flex-col justify-center gap-4">
          <div className="my-3 mx-6 h-[8px] w-[300px] bg-[#EAECF0] "></div>
          {dobModal && (
            <div className="mx-auto">
              <p className="mt-3 text-[#101828] font-bold text-xl">
                Please select your date of birth
              </p>
              <p className="mb-3 text-[#475467] font-medium text-lg">
                Help us get to know you better!
              </p>
              <div className="my-4">
                {/* <DatePicker className="py-3 px-4 border-black border-2 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                <DatePicker
                  className="py-3 px-4 border-black border-2 rounded-lg"
                  selected={date}
                  onChange={handleDateChange}
                  placeholderText="Select a date"
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  showMonthDropdown
                  yearDropdownItemNumber={35}
                  scrollableYearDropdown
                />
              </div>
              <button
                onClick={() => {
                  setDobModal(false);
                  setGenderModal(true);
                }}
                className="my-5 bg-[#7B3CF3] text-white px-8 py-3 rounded-lg "
              >
                Next{"  "} {" > "}
              </button>
            </div>
          )}
          {genderModal && (
            <div className="mx-auto">
              <p className="mt-3 text-[#101828] font-bold text-xl">
                Please select your gender{" "}
              </p>
              <p className="mb-3 text-[#475467] font-medium text-lg">
                Help us get to know you better!
              </p>
              <div className="gap-4 my-8 flex flex-col justify-center items-center w-full">
                {[
                  "female",
                  "male",
                  "non-binary",
                  "other",
                  "preferred-not-to-say",
                ].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => handleGenderSelect(gender)}
                    className={`rounded-lg w-full py-2 px-12 text-center text-black ${
                      selectedGender === gender
                        ? "bg-[#F4F2FF] border border-1 text-[#7B3CF3] border-[#7B3CF3]"
                        : "border border-1 text-[#7B3CF3] border-[#D0D5DD]"
                    } text-sm`}
                  >
                    {mapGenderToDisplay(gender)}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setGenderModal(false);
                  setStudentModal(true);
                }}
                className="my-5 bg-[#7B3CF3] text-white px-8 py-3 rounded-lg "
              >
                Next{"  "} {" > "}
              </button>
            </div>
          )}
          {studentModal && (
            <div className="mx-auto">
              <p className="mt-3 text-[#101828] font-bold text-xl">
                What describes you the best?{" "}
              </p>
              <p className="mb-3 text-[#475467] font-medium text-lg">
                Help us get to know you better!
              </p>
              <div className="gap-4 my-8 flex flex-col justify-center items-center w-full">
                <button
                  onClick={() => handleSelectStudent("Yes")}
                  className={`rounded-lg w-full py-2 px-12 text-center text-black ${
                    student === "Yes"
                      ? "bg-[#F4F2FF] border border-1 text-[#7B3CF3] border-[#7B3CF3]"
                      : "border border-1 text-[#7B3CF3] border-[#D0D5DD]"
                  } text-sm`}
                >
                  I am a student
                </button>
                <button
                  onClick={() => handleSelectStudent("No")}
                  className={`rounded-lg w-full py-2 px-12 text-center text-black ${
                    student === "No"
                      ? "bg-[#F4F2FF] border border-1 text-[#7B3CF3] border-[#7B3CF3]"
                      : "border border-1 text-[#7B3CF3] border-[#D0D5DD]"
                  } text-sm`}
                >
                  I am not a student
                </button>
              </div>
              <button
                onClick={() => {
                  setStudentModal(false);
                  setConcernModal(true);
                }}
                className="my-5 bg-[#7B3CF3] text-white px-8 py-3 rounded-lg "
              >
                Next{"  "} {" > "}
              </button>
            </div>
          )}
          {concernModal && (
            <div className="mx-auto">
              <p className="mt-3 text-[#101828] font-bold text-xl">
                What describes you the best?{" "}
              </p>
              <p className="mb-3 text-[#475467] font-medium text-lg">
                Help us get to know you better!
              </p>
              <div className="gap-4 my-8 flex flex-col justify-center w-full">
                {concernsData.map((concern, idx) => (
                  <div key={idx}>
                    <button
                      onClick={() => handleSelectConcerns(concern)}
                      className={`rounded-lg w-full py-2 px-12 text-center text-black ${
                        selectedConcerns.includes(concern)
                          ? "bg-[#F4F2FF] border border-1 text-[#7B3CF3] border-[#7B3CF3]"
                          : "border border-1 text-[#7B3CF3] border-[#D0D5DD]"
                      } text-sm`}
                    >
                      {concern}
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={handleSignUp}
                className="my-5 bg-[#7B3CF3] text-white px-8 py-3 rounded-lg "
              >
                Next{"  "} {" > "}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
