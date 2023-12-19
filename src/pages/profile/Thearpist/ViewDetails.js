import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import SwiperCore from "swiper";
import { pagination, Autoplay } from "swiper/modules";
import therapistService from "../../../services/therapistService";
SwiperCore.use([Autoplay]);

const reviewData = [
  {
    name: "Anisha Kumar",
    time: "2 days ago",
    rating: "4.8",
    review:
      "“I am so grateful to work with Ms. Shivangi because I was able to tackle my issues about social anxiety and really work on these.”",
  },
  {
    name: "Anisha Kumar",
    time: "2 days ago",
    rating: "4.8",
    review:
      "“I am so grateful to work with Ms. Shivangi because I was able to tackle my issues about social anxiety and really work on these.”",
  },
  {
    name: "Anisha Kumar",
    time: "2 days ago",
    rating: "4.8",
    review:
      "“I am so grateful to work with Ms. Shivangi because I was able to tackle my issues about social anxiety and really work on these.”",
  },
  {
    name: "Anisha Kumar",
    time: "2 days ago",
    rating: "4.8",
    review:
      "“I am so grateful to work with Ms. Shivangi because I was able to tackle my issues about social anxiety and really work on these.”",
  },
  {
    name: "Anisha Kumar",
    time: "2 days ago",
    rating: "4.8",
    review:
      "“I am so grateful to work with Ms. Shivangi because I was able to tackle my issues about social anxiety and really work on these.”",
  },
  {
    name: "Anisha Kumar",
    time: "2 days ago",
    rating: "4.8",
    review:
      "“I am so grateful to work with Ms. Shivangi because I was able to tackle my issues about social anxiety and really work on these.”",
  },
  {
    name: "Anisha Kumar",
    time: "2 days ago",
    rating: "4.8",
    review:
      "“I am so grateful to work with Ms. Shivangi because I was able to tackle my issues about social anxiety and really work on these.”",
  },
];

const ViewDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [thearpistData, setTherapistData] = useState([]);

  useEffect(() => {
    // Use the therapist ID obtained from the URL (id) to fetch therapist details
    const fetchTherapistDetails = async () => {
      try {
        const response = await therapistService.getThearpistById(id);
        // console.log(response);
        if (response.data.success) {
          // Update the component state or perform other actions based on the therapist details
          // console.log("Therapist details:", response.data.data);
          setTherapistData(response.data.data);
        } else {
          console.error("Failed to fetch therapist details");
        }
      } catch (error) {
        console.error("Error fetching therapist details:", error);
      }
    };

    if (id) {
      fetchTherapistDetails(); // Fetch therapist details when the component mounts
    }

    const ReviewDetails = async () => {
      try {
        const response = await therapistService.getFeedbackById(id);
        console.log(response);
        if (response.data.success) {
          // Update the component state or perform other actions based on the therapist details
          console.log("Review details:", response.data.data);
          setTherapistData(response.data.data);
        } else {
          console.error("Failed to fetch Review details");
        }
      } catch (error) {
        console.error("Error fetching therapist details:", error);
      }
    };
  }, [id]);

  return (
    <div className="max-w-screen-xl mx-auto h-full felx flex-col justify-center items-center p-4">
      <div className="flex flex-col lg:flex-row w-full gap-12 justify-center shadow-xl p-4 px-8 rounded-xl">
        <div className="w-full flex flex-col gap-4 justify-center">
          <div className="w-full flex flex-col justify-center items-center relative">
            <img
              src="/images/FrameBg.png"
              alt="frame"
              className="relative w-full h-full"
            />
            <div className="flex flex-col items-center absolute top-[15px] md:top-[80px] lg:top-[30px] mx-auto max-w-[300px] lg:max-w-[400px] max-h-[150px] gap-1">
              <div className="text-[#101828] font-semibold text-xl text-center">
                {thearpistData.name}
              </div>
              <div className="text-[#475467] text-lg text-center">
                {thearpistData.yearsOfExperience} + years of experience
              </div>
              <div className="flex justify-center max-w-60">
                <img
                  src={thearpistData.imgUrl}
                  alt="img1"
                  className="object-cover rounded-full w-40 h-40"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row mt-[8rem] md:mt-[6rem] lg:mt-[4rem] gap-8 w-full">
            <div className="flex flex-col w-1/2">
              <div className="text-[#101828] font-semibold text-xl">Bio</div>
              <div className="text-[#344054] text-base">
                Gender: {thearpistData.gender}
              </div>
              <div className="text-[#344054] text-base">
                Pronouns: {thearpistData.genderPronoun}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="text-[#101828] font-semibold text-xl">
                Education
              </div>
              <div className="text-[#344054] text-base">
                {thearpistData.educationalBg}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center lg:px-3">
          <div className="w-full flex flex-col gap-1">
            <div className="text-[#101828] text-xl font-semibold">
              All Specialisations
            </div>
            <div className="flex flex-row gap-2 justify-start items-center max-w-5/6 flex-wrap">
              {thearpistData.concernSpecialisation &&
                JSON.parse(thearpistData.concernSpecialisation).map(
                  (item, idx, array) => (
                    <div key={idx} className="text-[#344054] text-lg">
                      {item}
                      {idx < array.length - 1 && ","}
                    </div>
                  )
                )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            {thearpistData.approach === null
              ? ""
              : `<div className="text-[#101828] text-xl font-semibold">Approach</div>
`}
            {thearpistData.approach &&
              JSON.parse(thearpistData.approach).map((item, idx, array) => (
                <div key={idx} className="text-[#344054] text-lg">
                  {item}
                  {idx < array.length - 1 && ","}
                </div>
              ))}
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="text-[#101828] text-xl font-semibold">
              Languages
            </div>
            <div className="flex flex-row gap-2 justify-start items-center">
              {thearpistData.languageFluency &&
                JSON.parse(thearpistData.languageFluency).map(
                  (item, idx, array) => (
                    <div key={idx} className="text-[#344054] text-lg">
                      {item}
                      {idx < array.length - 1 && ","}
                    </div>
                  )
                )}
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={() =>
                navigate(`/book-session/${thearpistData.therapistId}`)
              }
              className="text-center bg-primaryIndigo hover-bg-lightBlue text-white px-4 py-2 rounded-full flex justify-center items-center w-full md:w-auto"
            >
              Book a Session
              <img src="/images/Chevron right white.png" alt="right" />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-8"></hr>
      <div className="flex flex-col">
        <div className="flex w-full items-center gap-2 text-[#101828] text-xl font-semibold">
          <span>
            <img src="/images/star-01.png" alt="star" />
          </span>
          4.9
          <span>
            <img src="/images/Status Dot.png" alt="star" />
          </span>
          20 Reviews
        </div>
        <div>
          <Swiper
            freeMode={true}
            grabCursor={true}
            spaceBetween={5}
            autoplay={true}
            pagination={{ clickable: true }}
            className="my-5 bg-white z-3"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {reviewData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="p-[16px] gap-2 flex flex-col border w-[300px] h-[250px] rounded-[16px]">
                  <div className="flex gap-4 items-center">
                    <p className="text-[#1D2939] text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[#EAECF0] text-base">|</p>
                    <p className="text-[#667085] text-base font-normal">
                      {item.time}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/star-01 (1).png"
                      alt="star"
                      className="w-5 h-auto object-cover"
                    />
                    <p className="text-[#1D2939] text-lg font-medium">
                      {item.rating}
                    </p>
                  </div>
                  <div className="mt-5 text-[#344054] text-base">
                    {item.review}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
