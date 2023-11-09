import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Link, Navigate } from "react-router-dom";

const GoogleSignInButton = ({ handleCallbackResponse }) => {
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "391468099908-moch0ner8tsmhnnomel8qjsl4thbtk13.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      branding: "cta-badge",
      text: "Continue with Google",
    });

    google.accounts.id.prompt();
  }, [handleCallbackResponse]);

  return <div id="signInDiv"/>;
};


const GoogleSignupButton = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    localStorage.setItem("token", response.credential);
    if (userObject) {
      navigate("/dashboard");
    } else {
      console.log("Login First");
    }
  }

  return (
    <div>
      <GoogleSignInButton handleCallbackResponse={handleCallbackResponse} />
    </div>
  );
};


export default GoogleSignupButton;
