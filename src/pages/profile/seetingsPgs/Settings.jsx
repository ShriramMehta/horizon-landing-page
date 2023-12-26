import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import ProfileModal from "./ProfileModal";
import userService from "../../../services/userService";
import ButtonLoader from "../../../components/loaders/ButtonLoader";

const Settings = () => {
  const { user } = useAuth();
  const [areConcernsEdited, setAreconcernsEdited] = useState(false);
  // console.log(user)
  const [selectedConcerns, setSelectedConcerns] = useState([
    "Stress",
    "Anxiety",
    "Depression",
    "Sleep Help",
  ]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await userService.getUserData(user);
        console.log(res.data.data);
        const dateObject = new Date(res?.data?.data?.birthDate);

        // Format the date using Intl.DateTimeFormat
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(dateObject);
        res.data.data.birthDate = formattedDate;
        // console.log(formattedDate)
        setUserDetails(res.data.data);
        setSelectedConcerns(JSON.parse(res?.data?.data?.concerns || "[]"));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    })();
  }, [render]);

  const handleConcernSelect = (concern) => {
    const isSelected = selectedConcerns.includes(concern);
    setAreconcernsEdited(true);
    if (isSelected) {
      // If the concern is already selected, remove it
      const updatedConcerns = selectedConcerns.filter(
        (item) => item !== concern
      );
      setSelectedConcerns(updatedConcerns);
    } else {
      // If the concern is not selected, add it to the selected concerns
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  const allConcerns = [
    "Depression",
    "Stress",
    "Grief and Loss",
    "Relationships",
    "Self development",
    "Anxiety",
    "Work related",
    "Other",
    "Sleep help",
  ];
  const [openModal, setOpenModal] = useState(false);
  const handleEdit = async () => {
    // Implement your edit logic here
    console.log(selectedConcerns);
    const data = { concerns: selectedConcerns };
    try {
      const res = await userService.updateClientConcerns(user?.id, data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setRender((prev) => !prev);
    }
  };
  return (
    <div className="flex flex-col justify-center max-w-screen-xl mx-auto my-16 w-full">
      <div className="w-full flex flex-col md:flex-row justify-center gap-16 items-center">
        <div className="overflow-x-auto flex flex-col justify-center gap-4 max-w-[380px] md:max-w-[550px] w-full rounded-2xl p-4 h-auto md:h-[400px]  bg-gradient-to-t from-[#EDE9FF] via-[#E8DBF9] to-[#E7EDFF]">
          <div className="flex justify-between md:gap-24 md:mb-6">
            <div className=" flex flex-col gap-4 items-center">
              <div className="flex justify-center max-w-60">
                <img
                  src={userDetails?.imageUrl}
                  alt="img1"
                  className="object-cover rounded-full w-24 h-24"
                />
              </div>
              <div className="text-[#101828] text-lg font-semibold">
                {userDetails?.name}
              </div>
            </div>
            <div>
              <MdOutlineEdit
                onClick={() => setOpenModal(true)}
                className="text-2xl mr-8 mt-4 cursor-pointer text-[#344054]"
              />
            </div>
          </div>
          <div className="flex flex-col mx-2 mt-2 gap-4 max-w-[200px] w-full">
            <div className="flex gap-10 md:gap-20 ">
              <div className="flex items-center gap-4 max-w-[300px]">
                <CiSquareInfo className="text-xl md:text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-base md:text-lg font-medium">
                  {userDetails?.gender?.charAt(0).toUpperCase() +
                    userDetails?.gender?.slice(1)}
                </p>
              </div>
              <div className="flex items-center gap-4 max-w-[300px]">
                <IoCallOutline className="text-xl md:text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-base md:text-lg font-medium">
                  {userDetails?.phone}
                </p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 ">
              <div className="flex items-center gap-4 md:gap-4">
                <CiCalendar className="text-3xl md:text-5xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-sm md:text-lg font-medium">
                  {userDetails?.birthDate}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <CiMail className="text-xl md:text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-base md:text-lg font-medium">
                  {userDetails?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 max-w-[550px] rounded-2xl p-4 bg-white shadow-xl">
          <div className="flex flex-col gap-4 justify-center border border-1 border-gray-200 p-4">
            <div className="flex gap-4 items-center">
              <FaHeart className="text-xl" />
              <p className="text-[#101828] font-semibold text-xl">
                Selected concerns
              </p>
            </div>
            <div className="flex flex-wrap max-w-[500px] gap-2 items-center">
              {selectedConcerns.map((item, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer mx-auto max-w-[110px] w-full max-h-[25px] h-full rounded-[16px] flex justify-center items-center py-[18px] px-[6px] border-[1px] bg-[#ECE7FE] text-[#4E139F]"
                >
                  <p className="text-sm font-medium text-[#4E139F] text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center mx-2">
            <div className="flex gap-4 items-center">
              <FaHeart className="text-xl" />
              <p className="text-[#101828] font-semibold text-xl my-2">
                Select your concerns
              </p>
            </div>
            <div className="flex flex-wrap max-w-[500px] gap-2 items-center ">
              {allConcerns.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleConcernSelect(item)}
                  className={`cursor-pointer mx-auto max-w-[110px] w-full max-h-[25px] h-full rounded-[16px] flex justify-center items-center py-[18px] px-[6px] border-[1px] ${
                    selectedConcerns.includes(item)
                      ? "bg-[#ECE7FE] text-[#4E139F]"
                      : "bg-[#FFFFFF] text-[#344054]"
                  }`}
                >
                  <p className="text-sm font-medium text-center">{item}</p>
                </div>
              ))}
            </div>
            {areConcernsEdited && (
              <button
                type="submit"
                onClick={handleEdit}
                disabled={loading}
                className={` w-full bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full flex justify-center items-center ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? <ButtonLoader /> : "Edit"}
              </button>
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <ProfileModal
          closeModal={setOpenModal}
          userDetails={userDetails}
          setRender={setRender}
        />
      )}{" "}
    </div>
  );
};

export default Settings;
