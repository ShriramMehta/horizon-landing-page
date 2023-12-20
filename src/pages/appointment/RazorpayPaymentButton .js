import React, { useState, useEffect } from "react";
import axios from "axios";

const RazorpayPaymentButton = () => {
  const [order, setOrder] = useState(null);
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
  useEffect(() => {
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
          // "http://localhost:5000/api/payment/createOrder",
          {
            amountToPay: 100, // Replace with your actual amount
            notes: {
              phone: "+91-9527889868",
              email: "shrirammehtasrm@gmail.com",
            },
          }
        );

        const { order_id, key } = response.data.data;
        console.log(response);
        // Save the order ID in the component state
        setOrder(order_id);

        // Initialize the Razorpay button
        initializeRazorpay(key, order_id);
      } catch (error) {
        console.error("Error creating order:", error);
      }
    };

    const initializeRazorpay = async (key, order_id) => {
      console.log(key, order_id);
      const options = {
        key: key,
        amount: 100, // Amount in paise (change to match your actual amount)
        currency: "INR", // Change to match your actual currency
        name: "AVP Mynd Healthcare",
        description: "Payment for Service",
        image:
          "https://drive.google.com/file/d/1u_zI52RfKogcxHLLmPoxiAAo1Dv1MtFg/view?usp=sharing",
        order_id: order_id,
        handler: async (response) => {
          console.log(response);
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          // const result = await axios.post('/payment/success', data);
        },
        prefill: {
          name: "John Doe", // Replace with user's name
          email: "john.doe@example.com", // Replace with user's email
          contact: "1234567890", // Replace with user's phone number
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

    createOrder();

    // Clean up any resources if needed
    return () => {
      // Perform cleanup actions here
    };
  }, []);

  return <div></div>;
};

export default RazorpayPaymentButton;
