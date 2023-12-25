import React, { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const SendOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [OTP, setOTP] = useState("");
  const handleSendOTP = async () => {
    try {
      const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {
          console.log("recaptcha resolved..");
        },
      });
      console.log(auth, phoneNumber, appVerifier);
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      // Store the confirmation result for later use
      setVerificationCode(confirmationResult);
      console.log("OTP sent successfully", confirmationResult);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      console.log(OTP, verificationCode);
      const credential = await verificationCode.confirm(OTP);
      console.log("OTP verified successfully", credential.user);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="flex justify-center align-center gap-8 m-8">
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <button
        style={{
          background: "green",
          border: "1px solid",
          borderRadius: "8px",
        }}
        className="p-4"
        onClick={handleSendOTP}
      >
        Send OTP
      </button>

      <div id="recaptcha-container"></div>

      <label>
        Verification Code:
        <input
          type="text"
          value={OTP}
          onChange={(e) => setOTP(e.target.value)}
        />
      </label>
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default SendOTP;
