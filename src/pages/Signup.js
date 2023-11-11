import React from "react";
import GoogleSignupButton from "../components/GoogleSignupButton";
import { Link } from "react-router-dom";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div className="max-w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center shadow-xl p-6">
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          {/* <div>IMAGE</div> */}
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-black font-black">Sign Up</p>
              <p className="text-base text-gray-500 font-medium">
                Your wellness journey starts<br/> here. Let's begin!
              </p>
              <p className="mt-10 mb-3">
                <GoogleSignupButton setIsLoggedIn={setIsLoggedIn} />
              </p>
            </div>
            <div className="flex flex-col justify-start items-center mt-2 text-left">
              <p className="text-xs text-gray-600 font-medium">Already have an account?<Link to="/login"> <span className="text-purple-700 font-medium">Sign In</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
