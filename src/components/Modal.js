import React, { useEffect, useState } from "react";
import RazorpayPaymentButton from "../pages/appointment/RazorpayPaymentButton ";
import userService from "../services/userService";

const Modal = ({ closeModal, bookingData, therapistData }) => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleApplyCoupon = async () => {
    try {
      if (couponCode) {
        const res = await userService.checkCouponCode(couponCode);
        console.log(res);
        let amountToDeduct;
        if (res?.data?.success) {
          if (
            parseFloat(res?.data?.data?.discValInPer) > 0 &&
            parseFloat(res?.data?.data?.discValFixed) === 0
          ) {
            amountToDeduct =
              (parseFloat(bookingData[0]?.rate) *
                parseFloat(res?.data?.data?.discValInPer)) /
              100;
          } else if (
            parseFloat(res?.data?.data?.discValInPer) === 0 &&
            parseFloat(res?.data?.data?.discValFixed) > 0
          ) {
            amountToDeduct = parseFloat(res?.data?.data?.discValFixed);
          }
          console.log(amountToDeduct);
          bookingData[0].rate =
            parseFloat(bookingData[0]?.rate) - parseFloat(amountToDeduct);
          setIsCouponValid(true);
          bookingData[0].couponCode = couponCode;
        } else {
          setIsCouponValid(false);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsCouponApplied(true);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="w-[550px] rounded-[12px] bg-white flex flex-col p-[25px] relative">
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
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-1/2 w-full h-5/6 shadow-lg p-4 pb-8">
            <img
              className="w-36 h-36 object-cover rounded-full shadow-lg"
              src={therapistData?.imgUrl}
              alt="Therapist Photo"
            />
            <div className="max-w-1/2 w-full flex flex-col gap-4">
              <p className="text-[#101828] text-lg font-semibold">
                Session with {therapistData?.name}
              </p>
              <p className="text-[#475467] text-base font-normal">
                {therapistData?.concerns &&
                  JSON.parse(therapistData?.concernSpecialisation).map(
                    (item, idx, array) => (
                      <span key={idx}>
                        {item}
                        {idx < array.length - 1 && ","}
                      </span>
                    )
                  )}
              </p>
              <div>
                <hr></hr>
              </div>
              <div className="w-full flex flex-col gap-4 justify-center items-center">
                <div className="w-full flex flex-row gap-2 justify-start items-center">
                  <img src="/images/calendar.png" alt="calender" />
                  <p className="text-[#101828] text-base font-semibold">
                    {bookingData[0]?.day}, {bookingData[0]?.date}
                  </p>
                  <p className="text-[#475467] text-base">
                    {bookingData[0]?.zone}, {bookingData[0]?.time}
                  </p>
                </div>
                <div className="w-full flex flex-row gap-2 justify-start items-center">
                  <img src="/images/clock.png" alt="calender" />
                  <p className="text-[#101828] text-base font-semibold">
                    1 hour
                  </p>
                  <p className="text-[#475467] text-base">
                    Online via Google Meet
                  </p>
                </div>
                <div className="w-full flex flex-row gap-2 justify-start items-center">
                  <img src="/images/currency-rupee.png" alt="rupee" />
                  <p className="text-[#101828] text-base font-semibold">
                    {bookingData[0]?.rate}
                  </p>{" "}
                  <div className="max-w-[130px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[2px] px-[6px] bg-[#F0F0FE] border-[1px] border-[##EAECF0]">
                    <div className="flex flex-row justify-start items-center gap-2">
                      <p className="text-xs font-semibold text-[#4E139F] text-center">
                        {bookingData[0]?.status} Status
                      </p>
                      <img src="/images/Check Circle.png" alt="check" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Coupon Section */}
              <div className="w-full flex flex-row gap-4 justify-start items-center">
                <div className="flex flex-col">
                  <label className="text-[#101828] text-base font-semibold">
                    Apply Coupon
                  </label>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full ml-2"
                    >
                      Apply
                    </button>
                  </div>
                  {isCouponApplied && isCouponValid && (
                    <p className="text-[#50C878]">Coupon code applied!</p>
                  )}
                  {isCouponApplied && !isCouponValid && (
                    <p className="text-[#FF0000]">Invalid coupon code!</p>
                  )}
                </div>
              </div>
              <div className="w-full md:w-auto mt-4">
                <button
                  onClick={() => {
                    setPaymentModalOpen(true);
                    setIsButtonClicked(true);
                  }}
                  disabled={isButtonClicked || isCouponApplied}
                  className={`w-full justify-center text-center bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full mr-2 flex justify-center items-center ${
                    isButtonClicked ? "opacity-50" : "" // Apply opacity class when isButtonClicked is true
                  }`}
                  style={{
                    cursor: isButtonClicked ? "not-allowed" : "pointer",
                  }} // Change cursor based on isButtonClicked
                >
                  Pay Rs. {bookingData[0]?.rate}
                  <img
                    src="/images/Chevron right white.png"
                    alt="right"
                    // className="w-[30px] h-[30px]"
                  />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {paymentModalOpen && (
        <RazorpayPaymentButton
          closeModal={closeModal}
          therapistData={therapistData}
          bookingData={bookingData}
        />
      )}
    </div>
  );
};

export default Modal;
