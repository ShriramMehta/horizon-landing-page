// GoogleSignupButton.js

import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import PhoneModal from "../../components/Modals/PhoneModal";
import userService from "../../services/userService";
import { useAuth } from "../../hooks/useAuth";
import OnboardingModal from "../../components/Modals/OnboardingModal";

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
  const [openPhoneModal, setOpenPhoneModal] = useState(false);
  const [googleModal, setGoogleModal] = useState(true);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const { updateUser } = useAuth();
  const [userObject, setUserObject] = useState([]);
  const [clientId, setClientId] = useState();
  const [token, setToken] = useState();
  const [phoneNumber, setPhonNumber] = useState("");
  const handleCallbackResponse = async (response) => {
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUserObject(userObject);

    try {
      const res = await userService.getAuthStatus(userObject?.email);
      console.log(res, res?.data?.success);
      if (res?.data?.success) {
        updateUser({
          email: res?.data?.data?.email,
          name: res?.data?.data?.name,
          type: res?.data?.data?.userType,
          token: res?.data?.token,
          id: res?.data?.data?.clientId,
          phone: res?.data?.data?.phone,
        });
        navigate("/signin");
      } else {
        setGoogleModal(false);
        setOpenPhoneModal(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setGoogleModal(false);
    }
  };

  const handleCreateClient = async (data) => {
    console.log(data, userObject);
    setPhonNumber(data);
    const res = await userService.createClient({
      name: userObject?.name,
      email: userObject?.email,
      phone: data,
      imageUrl: userObject?.picture,
      isWebsite: true,
    });
    console.log(res);
    if (res?.data?.success) {
      setClientId(res?.data?.data?.clientId);
      setToken(res?.data?.token);
    } else {
      // setOpenPhoneModal(true);
    }
    setOpenPhoneModal(false);
    setOpenInfoModal(true);
  };

  const handleOnboardingData = async (data) => {
    console.log(data, userObject);
    const res = await userService.addOnboardingData({
      clientType: data?.student,
      email: userObject?.email,
      birthDate: data?.date,
      gender: data?.selectedGender,
      concerns: data?.selectedConcerns,
    });

    console.log(res);
    if (res?.data?.success) {
      updateUser({
        type: data?.student,
        email: userObject?.email,
        token: token,
        id: clientId,
        name: userObject?.name,
        phone: phoneNumber,
      });
      navigate("/profile");
    } else {
      // setOpenPhoneModal(true);
    }
    setOpenPhoneModal(false);
    setOpenInfoModal(true);
  };

  return (
    <div>
      {googleModal && (
        <GoogleSignInButton handleCallbackResponse={handleCallbackResponse} />
      )}
      {openPhoneModal && (
        <PhoneModal
          closeModal={setOpenPhoneModal}
          handleCreateClient={handleCreateClient}
        />
      )}
      {openInfoModal && (
        <OnboardingModal
          closeModal={setOpenInfoModal}
          handleOnboardingData={handleOnboardingData}
        />
      )}
    </div>
  );
};

export default GoogleSignupButton;
