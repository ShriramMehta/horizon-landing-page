// GoogleSignupButton.js

import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PhoneModal from "../../components/Modals/OnboardingModal";

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
    // ... (previous code)

    // axios
    //   .get(
    //     `${process.env.REACT_APP_BACKEND_URL}/client/isAuthCompleted/${email}`
    //   )
    //   .then((response) => {
    //     if (response && response.data && response.data.success) {
    //       // User is already signed up, navigate to home page
    //       navigate("/signin");
    //     } else {
    //       // User needs to sign up
    //       console.log("Signup is necessary");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(
    //       "Error checking user signup status:",
    //       error.response ? error.response.data.error : error.message
    //     );
    //   });
    setOpenModal(true)
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
