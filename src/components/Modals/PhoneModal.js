  import React from "react";
  import { useEffect, useState } from "react";
  import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
  import "react-phone-number-input/style.css";

  const PhoneModal = ({ closeModal }) => {
    const [phoneNumber, setPhoneNumber] = useState();

    const handlePhoneNumberChange = (value) => {
      setPhoneNumber(value);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      // You can get the country code like this:
      const country = phoneNumber ? phoneNumber.country : null;
      const countryCode = country ? country.country : null;

      // Use the country code as needed in your application logic
      console.log("Selected Country Code:", countryCode);
    };
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "visible";
      };
    }, []);
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="fixed inset-0 bg-black opacity-60"></div>
        <div className="w-[400px] rounded-[12px] bg-white flex flex-col p-[25px] relative">
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-purple-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
            data-modal-hide="default-modal"
            onClick={() => closeModal(false)}
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div className="flex flex-col">
            <div className="text-xl font-semibold mb-4">Enter Mobile Number</div>
            <div className="text-lg text-[#475467]">
              Please enter your mobile number to receive an OTP
            </div>
          </div>
          <div className="flex flex-col gap-12 mt-10">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-12">
              <PhoneInput
                international
                defaultCountry="US"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                // placeholder={"Enter phone number"}
                className="py-3 px-4"
                inputStyle={{
                  border: '1px solid #ccc', // Add border
                  padding: '10px', // Add padding
                  cursor: 'pointer',
                  width: '100%', // Make sure the input takes the full width
                }}
              />
              <button
                type="submit"
                className="w-full justify-center text-center bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full mr-2 flex justify-between items-center"
                // onClick={()=> setOpenModal()}
              >
                Continue
              </button>{" "}
            </form>{" "}
          </div>
        </div>
      </div>
    );
  };

  export default PhoneModal;
