import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import userService from "../../services/userService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RazorpayPaymentButton = ({ bookingData, closeModal, therapistData }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

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
        "http://localhost:5000/api/payment/createOrder",
        {
          amountToPay: bookingData[0]?.rate, // Replace with your actual amount
          notes: {
            phone: user?.phone,
            email: user?.email,
          },
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
        const data = {
          slotId: bookingData[0]?.slot_id,

          clientId: user?.id,
          therapistId: therapistData?.therapistId,
          startTime: bookingData[0]?.startTime,
          endTime: bookingData[0]?.endTime,
          appointmentDate: bookingData[0]?.appointmentDate,
          orderId: order_id,
          amount: bookingData[0]?.rate,
          method: "GPAY",
          status: "confirmed",
          therapistEmail: therapistData?.email,
          clientEmail: user?.email,
          couponCode: null,
          clientType: user?.type,

          razorpayPaymentId: response.razorpay_payment_id,

          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(data);
        try {
          const res = await userService.bookAppointment(data);
          if (res?.data?.success) {
            toast.success("Appointment Successful");
            closeModal(true);
            navigate("/profile/schedule");
          } else {
            toast.error("Something went wrong");
          }
        } catch (err) {
          console.log(err);
          closeModal(true);
          toast.error("Something went wrong");
        } finally {
          closeModal(true);
        }
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
