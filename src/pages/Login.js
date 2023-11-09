import React from "react";
import GoogleSignupButton from "../components/GoogleSignupButton";

const Login = ({setIsLoggedIn }) => {
  return (
    <div className="max-w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-6">
          <div>IMAGE</div>
          <div>
            <h1>Sign Up</h1>
            <h4>Your wellness journey starts here. Let's begin!</h4>
            <GoogleSignupButton setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
