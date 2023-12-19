import React, { useState, useEffect } from "react";
import axios from "axios";

const RazorpayPaymentButton = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        // Make a request to your server to create a Razorpay order
        const response = await axios.post(
          //   "http://localhost:5000/api/payment/createOrder",
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
        initializeRazorpay(key);
      } catch (error) {
        console.error("Error creating order:", error);
      }
    };

    const initializeRazorpay = (key) => {
      const options = {
        key: key,
        amount: 100, // Amount in paise (change to match your actual amount)
        currency: "INR", // Change to match your actual currency
        name: "Your Company Name",
        description: "Payment for Service",
        order_id: order,
        handler: (response) => {
          console.log(response);
          // Handle the successful payment response
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

      const razorpay = new window.Razorpay(options);

      // Create the payment button
      const paymentButton = document.getElementById("payment-button");
      paymentButton.addEventListener("click", () => {
        razorpay.open();
      });
    };

    createOrder();

    // Clean up any resources if needed
    return () => {
      // Perform cleanup actions here
    };
  }, []);

  return (
    <div>
      <button id="payment-button">Pay Now</button>
    </div>
  );
};

export default RazorpayPaymentButton;
