import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
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
// ... (your imports)

const GoogleSignupButton = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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

    // Make a POST request to your backend API
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/client/onboard`, {
      name,
      email,
      phone: "123456789", // No phone data provided in the Google response
      imageUrl,
    })    
    .then((response) => {
      if (response && response.data) {
        console.log(response.data);
        // Handle successful response, e.g., redirect to another page
        setOpenModal(true);
      } else {
        console.error("Response or response.data is undefined");
        setError("Error during onboarding. Please try again.");
      }
    })
    .catch((error) => {
      console.log(process.env.REACT_APP_BACKEND_URL);
      console.error("Error during onboarding:", error.response ? error.response.data.error : error.message);
      setError("Error during onboarding. Please try again.");
    });
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
