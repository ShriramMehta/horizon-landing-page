import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOTP = () => {
      if (email) {
        toast.success("mail sent successfully");
      } else {
        toast.error("enter email address");
      }
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Account Delete");
  };

  return (
    <section className="flex justify-center items-center mx-auto h-screen">
      <div className="shadow-xl rounded p-8 mb-4">
        <h2 className="mb-4 text-3xl font-bold font-heading">Delete Account</h2>
        <div className="mb-4">
          <label className="block text-lightBlack text-sm font-bold mb-2">
            Email:
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter email address"
            className="border  border-black rounded w-full p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="my-2 bg-blue-400 hover:bg-blue-500 text-white text-lg p-2 rounded"
            onClick={handleSendOTP}
          >
            Send OTP
          </button>
          <Toaster />
        </div>
        <div className="mb-4">
          <label className="block text-lightBlack text-sm font-bold mb-2">
            OTP:
          </label>
          <input
            name="number"
            type="text"
            placeholder="Enter OTP"
            className="border border-black  rounded w-full p-3"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            className="my-2 bg-red-400 hover:bg-red-500 text-white text-lg p-2 rounded"
            onClick={handleSubmit}
          >
            Delete Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteAccount;
