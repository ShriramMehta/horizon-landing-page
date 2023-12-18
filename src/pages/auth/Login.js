// Login.js
import React from "react";
import GoogleSignupButton from "./GoogleSignupButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/global/Button";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  const handleSubmit = async () => {
    try {
      updateUser({
        user: "shriram",
        token: "response?.data?.token",
      });
      navigate("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (user) {
    return <Navigate to="/profile" />;
  }
  const handleLogin = () => {
    // Check if the user is present in the database based on some criteria
    // For example, check if the email exists in your database
    // If the user is present, allow them to sign in
    // If not, navigate to the signup page
    // For demonstration, navigate to signup always
    navigate("/signup");
  };

  return (
    <div className="max-w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center p-6 shadow-xl">
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-black font-black">Sign In</p>
              <p className="text-base text-gray-500 font-medium">
                We are happy to have you back!
              </p>
              <p className="mt-6 mb-3">
                <GoogleSignupButton />
              </p>
            </div>
            {/* <div className="flex justify-center items-center gap-1 w-full">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div>OR</div>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div> */}
            {/* <div className="flex flex-col justify-center items-center gap-2 mt-2 w-full">
              <div>Mobile Number</div>
              <button
                className="bg-purple-600 text-white w-full px-3 py-2 rounded-lg"
                onClick={handleLogin}
              >
                Get OTP
              </button>
            </div> */}

            <div className="flex flex-col justify-center items-center mt-5">
              <p className="text-xs text-gray-600 font-medium">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="text-purple-700 font-medium">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
{
  /* <div className="w-full mt-6">
  <button onClick={handleSubmit}>Sign In</button>
</div>; */
}
