import React from "react";
import TextField from "@mui/material/TextField";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="max-w-screen-xl w-full flex flex-col justify-center items-center mx-auto">
      <div className="mb-4 mt-2 text-2xl text-black font-bold">Contact Us</div>
      <div className="w-full flex justify-center items-center gap-8 m-4">
        <div className="w-[600px] shadow-xl flex flex-col gap-4 justify-center p-8 rounded-xl">
          <div className="text-black-400 font-semibold text-xl my-2">
            Write to us and we will reach out to you
          </div>
          <TextField
            id="filled-multiline-static"
            label="Write your query here..."
            multiline
            rows={5}
            variant="outlined"
            className="w-full rounded-xl"
          />{" "}
        </div>
        <div className="w-[600px] shadow-xl flex flex-col gap-4 justify-center p-8 rounded-xl">
          <div className="text-black-400 font-semibold text-xl my-2">
            Support
          </div>
          <div className="p-4 border border-1 border-gray-300 rounded-xl flex flex-col justify-center">
            <div className="p-2 flex flex-row gap-4 justify-start items-center">
              <IoCallOutline className="cursor-pointer text-black text-2xl" />
              <div className="text-black text-xl">+91 78965312</div>
            </div>
            <hr className="my-2 text-gray-200" />
            <div className="p-2 flex flex-row gap-4 justify-start items-center">
              <CiMail className="cursor-pointer text-black text-2xl" />
              <div className="text-black text-xl">support@adaptwellness.in</div>
            </div>
          </div>
        </div>
      </div>
      <button className="w-fit text-lg py-2 px-8 text-white bg-gray-300 hover:bg-purple-800 mt-4 mb-2 rounded-xl">
        Submit
      </button>
    </div>
  );
};

export default Contact;
