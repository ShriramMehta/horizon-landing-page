import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "./firebase";
import ButtonLoader from "../loaders/ButtonLoader";

const PhoneModal = ({ closeModal, handleCreateClient }) => {
  const [phoneModal, setPhoneModal] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [OTPloading, setOTPLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOTPForm, setShowOTPForm] = useState(false);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {},
      });
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      // Store the confirmation result for later use
      setVerificationCode(confirmationResult);
      setPhoneModal(false);
      setShowOTPForm(true);
      toast.success("OTP sent successfully");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const handleOTPVerification = async (e) => {
    e.preventDefault();
    try {
      setOTPLoading(true);
      const credential = await verificationCode.confirm(OTP);
      toast.success("OTP verified successfully");
      setShowOTPForm(false);
      handleCreateClient(phoneNumber);
    } catch (error) {
      toast.error("Error verifying OTP");
    } finally {
      setOTPLoading(false);
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
        {phoneModal && (
          <div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold mb-4">
                Enter Mobile Number
              </div>
              <div className="text-lg text-[#475467]">
                Please enter your mobile number to receive an OTP"
              </div>
            </div>
            <div className="flex flex-col gap-12 mt-10">
              <form className="flex flex-col gap-12">
                <div id="recaptcha-container"></div>

                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  className="border px-8 py-2 border-black"
                />

                <button
                  type="submit"
                  onClick={handleSendOTP}
                  disabled={loading}
                  className={` w-full bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full flex justify-center items-center ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? <ButtonLoader /> : "Continue"}
                </button>
              </form>
            </div>
          </div>
        )}
        {showOTPForm && (
          <div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold mb-4">Enter OTP</div>
              <div className="text-lg text-[#475467]">
                Please enter the 4 digit OTP sent to your on +123456789
              </div>
            </div>
            <div className="flex flex-col gap-12 mt-10">
              <form
                onSubmit={handleOTPVerification}
                className="flex flex-col gap-12"
              >
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="px-8 py-4 border border-black border-1"
                  value={OTP}
                  onChange={(e) => setOTP(e.target.value)}
                />
                <div className="flex justify-between text-sm text-[#667085]">
                  <div>Did not receive OTP? Resend</div>
                  <div>30 sec</div>
                </div>
                <button
                  type="submit"
                  disabled={OTPloading}
                  className={` w-full bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full flex justify-center items-center ${
                    OTPloading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {OTPloading ? <ButtonLoader /> : " Verify OTP"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneModal;