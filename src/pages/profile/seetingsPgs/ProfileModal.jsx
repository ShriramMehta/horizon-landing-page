import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import userService from "../../../services/userService";
import { useAuth } from "../../../hooks/useAuth";

const ProfileModal = ({ closeModal, userDetails, setRender }) => {
  const [modifiedUserDetails, setModifiedUserDetails] = useState(userDetails);

  const handleInputChange = (field, value) => {
    setModifiedUserDetails({
      ...modifiedUserDetails,
      [field]: value,
    });
  };
  const { user } = useAuth(ProfileModal);
  const handleSaveChanges = async () => {
    try {
      const data = {
        name: modifiedUserDetails.name,
        gender: modifiedUserDetails.gender,
        phone: modifiedUserDetails.phone,
        birthDate: modifiedUserDetails.birthDate,
      };
      console.log(data);
      const res = await userService.updateClientDetails(user?.id, data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setRender((prev) => !prev);
      closeModal(false);
    }
  };
  const [selectedGender, setSelectedGender] = useState(userDetails?.gender);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const mapGenderToDisplay = (gender) => {
    switch (gender) {
      case "female":
        return "Female";
      case "male":
        return "Male";
      case "non-binary":
        return "Non binary";
      case "other":
        return "Others";
      case "preferred-not-to-say":
        return "I prefer not to say";
      default:
        return "";
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="w-[500px] rounded-[12px] bg-white flex flex-col p-[25px] relative">
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-purple-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
          data-modal-hide="default-modal"
          onClick={() => closeModal(false)}
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div className="flex flex-col gap-6 justify-center w-full my-2">
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-[#1D2939] font-semibold text-base">Full Name</p>
            <input
              className="py-2 px-4 rounded-xl border border-1 border-gray-300"
              placeholder="Name"
              value={modifiedUserDetails.name || ""}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-[#1D2939] font-semibold text-base">Gender</p>
            <div className="gap-4 mt-2 mb-4 flex flex-col justify-center items-center w-full">
              {[
                "female",
                "male",
                "non-binary",
                "other",
                "preferred-not-to-say",
              ].map((gender) => (
                <button
                  key={gender}
                  onClick={() => handleGenderSelect(gender)}
                  className={`rounded-lg w-full py-2 px-12 text-center text-black ${
                    selectedGender === gender
                      ? "bg-[#F4F2FF] border border-1 text-[#7B3CF3] border-[#7B3CF3]"
                      : "border border-1 text-[#7B3CF3] border-[#D0D5DD]"
                  } text-sm`}
                >
                  {mapGenderToDisplay(gender)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-[#1D2939] font-semibold text-base">
              Date of Birth
            </p>
            <input
              className="py-2 px-4 rounded-xl border border-1 border-gray-300"
              placeholder="Date of Birth"
              value={modifiedUserDetails.birthDate || ""}
              onChange={(e) => handleInputChange("birthDate", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-[#1D2939] font-semibold text-base">
              Mobile Number
            </p>
            <input
              className="py-2 px-4 rounded-xl border border-1 border-gray-300"
              placeholder="Mobile Number"
              value={modifiedUserDetails.phone || ""}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-[#1D2939] font-semibold text-base">Email ID</p>
            <input
              className="py-2 px-4 rounded-xl border border-1 border-gray-300"
              placeholder="Email ID"
              value={modifiedUserDetails.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={handleSaveChanges}
          className="w-fit py-2 px-6 mx-auto mt-4 mb-2 text-[#FFFFFF] bg-[#D0D5DD] hover:bg-[#7B3CF3] rounded-lg text-base dark:hover:bg-purple-600 dark:hover:text-white"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
