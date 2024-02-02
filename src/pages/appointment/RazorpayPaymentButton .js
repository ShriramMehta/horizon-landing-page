import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import baseURL from "../../constants/baseURL";

const RazorpayPaymentButton = ({ bookingData, closeModal, therapistData }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("inside socket");
  //   // const socket = io("http://localhost:5000");
  //   const socket = io("https://adaptwellness.in");
  //   socket.on("webhookReceived", (data) => {
  //     console.log(data);
  //     if ((data = "booked")) {
  //       toast.success("Your appointment has been successfully booked!");

  //       closeModal(true);
  //       navigate("/profile/schedule");
  //     } else if ((data = "cancelled")) {
  //       toast.error("Your appointment couldn't be booked. Please try again!");

  //       closeModal(true);
  //       navigate("/therapist");
  //     }
  //   });
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const createOrder = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    try {
      // Make a request to your server to create a Razorpay order
      const response = await axios.post(
        `${baseURL}/payment/website-create-order`,
        {
          slotId: bookingData[0]?.slot_id,

          clientId: user?.id,
          therapistId: therapistData?.therapistId,
          startTime: bookingData[0]?.startTime,
          endTime: bookingData[0]?.endTime,
          appointmentDate: bookingData[0]?.appointmentDate,
          amountToPay: bookingData[0]?.rate,

          therapistEmail: therapistData?.email,
          clientEmail: user?.email,
          couponCode: bookingData[0]?.couponCode,
          clientType: user?.type,
        }
      );

      const { order_id, key } = response.data.data;
      console.log(response);
      // Save the order ID in the component state
      // setOrder(order_id);

      // Initialize the Razorpay button
      initializeRazorpay(key, order_id);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  const initializeRazorpay = async (key, order_id) => {
    // console.log(key, order_id);
    const options = {
      key: key,
      amount: bookingData[0]?.rate, // Amount in paise (change to match your actual amount)
      currency: "INR", // Change to match your actual currency
      name: "AVP Mynd Healthcare",
      description: "Payment for Service",
      image:
        "https://drive.google.com/file/d/1u_zI52RfKogcxHLLmPoxiAAo1Dv1MtFg/view?usp=sharing",
      order_id: order_id,
      handler: async (response) => {
        console.log(response);

        // closeModal(true);
      },
      prefill: {
        name: user?.name, // Replace with user's name
        email: user?.email, // Replace with user's email
        contact: user?.phone, // Replace with user's phone number
      },
      notes: {
        address: "Your address", // Replace with additional notes if needed
      },
      theme: {
        color: "#F37254", // Replace with your theme color
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  useEffect(() => {
    createOrder();

    // Clean up any resources if needed
    return () => {
      // Perform cleanup actions here
    };
  }, []);

  return <div></div>;
};

export default RazorpayPaymentButton;
