import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfileModal = ({ closeModal, userDetails, updateUserDetails }) => {
  const [modifiedUserDetails, setModifiedUserDetails] = useState(userDetails);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Check if userDetails is defined before setting modifiedUserDetails
    if (userDetails) {
      setModifiedUserDetails(userDetails);
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [userDetails]);

  const handleInputChange = (field, value) => {
    setModifiedUserDetails({
      ...modifiedUserDetails,
      [field]: value,
    });
  };

  const handleSaveChanges = () => {
    // Perform any necessary validation
    // Update user details in the Settings component
    updateUserDetails(modifiedUserDetails);
    toast.success("Profile Updated")
    // Close the modal
    closeModal(false);
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
              value={modifiedUserDetails.fullName || ""}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-[#1D2939] font-semibold text-base">Gender</p>
            <input
              className="py-2 px-4 rounded-xl border border-1 border-gray-300"
              placeholder="Gender"
              value={modifiedUserDetails.gender || ""}
              onChange={(e) => handleInputChange("gender", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-[#1D2939] font-semibold text-base">
              Date of Birth
            </p>
            <input
              className="py-2 px-4 rounded-xl border border-1 border-gray-300"
              placeholder="Date of Birth"
              value={modifiedUserDetails.dateOfBirth || ""}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-[#1D2939] font-semibold text-base">
              Mobile Number
            </p>
            <input
              className="py-2 px-4 rounded-xl border border-1 border-gray-300"
              placeholder="Mobile Number"
              value={modifiedUserDetails.mobileNumber || ""}
              onChange={(e) =>
                handleInputChange("mobileNumber", e.target.value)
              }
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
