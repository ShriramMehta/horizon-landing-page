// GoogleSignupButton.js
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import PhoneModal from "./Modals/PhoneModal";

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

  return <div id="signInDiv" />;
};

const GoogleSignupButton = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);

    // User information:
    const name = userObject.name;
    const email = userObject.email;
    const imageUrl = userObject.picture;

    console.log(name, email, imageUrl);

    // Check if the user is already signed up based on email
    // const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    // const isDuplicate = existingUsers.some(
    //   (existingUser) => existingUser.email === userObject.email
    // );

    // if (isDuplicate) {
    //   setError("User is already signed up and completed signup with us.");
    //   return;
    // }

    // If the user is not already signed up, proceed with signup
    localStorage.setItem("token", response.credential);
    // existingUsers.push(userObject);
    // localStorage.setItem("users", JSON.stringify(existingUsers));

    setOpenModal(true);
  }
  

  return (
    <div>
      {error && <p>{error}</p>}
      <GoogleSignInButton handleCallbackResponse={handleCallbackResponse} />
      {openModal && <PhoneModal closeModal={setOpenModal} />}
    </div>
  );
};

export default GoogleSignupButton;
