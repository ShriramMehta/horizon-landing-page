import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router";

const PhoneModal = ({ closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOTPForm, setShowOTPForm] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate phone number or perform any other necessary checks
    // If valid, show the OTP form
    console.log(phoneNumber)
    setShowOTPForm(true);
  };

  const handleOTPVerification = (e) => {
    e.preventDefault();

    // Implement OTP verification logic here
    // Once verified, you can close the modal or perform additional actions
    closeModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60"></div>
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
        <div className="flex flex-col">
          <div className="text-2xl font-semibold mb-4">
            {showOTPForm ? "Enter OTP" : "Enter Mobile Number"}
          </div>
          <div className="text-lg text-[#475467]">
            {showOTPForm
              ? "Please enter the 4 digit OTP sent to your on +123456789"
              : "Please enter your mobile number to receive an OTP"}
          </div>
        </div>
        <div className="flex flex-col gap-12 mt-10">
          {showOTPForm ? (
            <form
              onSubmit={handleOTPVerification}
              className="flex flex-col gap-8"
            >
              <input
                type="text"
                placeholder="Enter OTP"
                className="px-8 py-4 border border-black border-1"
                // Add necessary props and styling
              />
              <div className="flex justify-between text-sm text-[#667085]">
                <div>Did not receive OTP? Resend</div>
                <div>30 sec</div>
              </div>
              <button
                type="submit"
                className="py-3 w-full justify-center text-center bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full mr-2 flex justify-between items-center"
                onClick={() => navigate("/profile")}
              >
                Verify OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-12">
              <PhoneInput
              international
              defaultCountry="US"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              className="border px-8 py-2 border-black"
            />
              <button
                type="submit"
                className="py-3 w-full justify-center text-center bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full mr-2 flex justify-between items-center"
              >
                Continue
              </button>{" "}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;