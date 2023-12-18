import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import GoogleSignupButton from "./GoogleSignupButton";
import OnboardingModal from "../../components/Modals/OnboardingModal";

const Signup = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // User is already signed up, show a message and redirect to home
  //     console.log("User is already signed up and completed signup with us.");
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <div className="max-w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center shadow-xl p-6">
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-black font-black">Sign Up</p>
              <p className="text-base text-gray-500 font-medium">
                Your wellness journey starts <br /> here. Let's begin!
              </p>
              <p className="mt-10 mb-3">
                <GoogleSignupButton />
                {/* <button onClick={() => setOpenModal(true)}>Signup</button>
                {openModal && <OnboardingModal closeModal={setOpenModal} />} */}
              </p>
            </div>
            <div className="flex flex-col justify-start items-center mt-2 text-left">
              <p className="text-xs text-gray-600 font-medium">
                Already have an account?
                <Link to="/signin">
                  <span className="text-purple-700 font-medium">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
