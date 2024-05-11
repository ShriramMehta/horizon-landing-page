import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = async () => {
    const data = { query };
    try {
    } catch (err) {
      console.log(err);
    } finally {
      setQuery("");
    }
  };
  return (
    <div className="mb-10 max-w-screen-xl w-full flex flex-col justify-center items-center mx-auto">
      <div className="mb-4 mt-2 text-4xl text-primaryRed font-bold p-3 font-heading">
        Contact Us
      </div>
      <div className="mx-auto w-full flex flex-col md:flex-row justify-center items-center gap-8 m-4 ">
        <div className="w-[400px] md:w-[600px] min-h-[270px] shadow-xl flex flex-col gap-4 justify-center p-8 rounded-xl">
          <div className="text-black-400 font-semibold text-xl my-2 text-center">
            Have you tried our products?
          </div>
          <div className="w-full justify-center flex">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeI8vbD522Jcd7rX5iTK8SBl8Pf09Qaz6JuLoyMHbfT24RLqQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="bg-[#FF474D] hover:bg-primaryRed text-white font-bold py-2 px-4 rounded-xl \">
              Give Feedback
            </button>
          </a>
        </div>
        </div>

        <div className="w-[400px] md:w-[600px] min-h-[270px] shadow-xl flex flex-col gap-4 justify-center p-8 rounded-xl">
          <div className="text-black-400 font-semibold text-xl my-2">
            Support
          </div>
          <div className="p-4 border border-1 border-gray-300 rounded-xl flex flex-col justify-center">
            <div className="p-2 flex flex-row gap-4 justify-start items-center">
              <IoCallOutline className="cursor-pointer text-black text-2xl" />
              <div className="text-black text-xl">+91 0000000</div>
            </div>
            <hr className="my-2 text-gray-200" />
            <div className="p-2 flex flex-row gap-4 justify-start items-center">
              <CiMail className="cursor-pointer text-black text-2xl" />
              <div className="text-black text-xl">support@horizon.in</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
