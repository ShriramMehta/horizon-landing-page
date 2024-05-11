import React from "react";
import { motion as m } from "framer-motion";
const items = [
  {
    title: "Premium Quality",
    description:
      "Our Special Guntur Chili Powder is made from the finest chili peppers cultivated in the fertile soils of Guntur, ensuring superior quality and potency.",
  },
  {
    title: "Distinctive Heat",
    description:
      "Experience the intense and authentic heat of Guntur chili peppers, known for their bold and robust flavor profile.",
  },
  {
    title: "Versatile Use",
    description:
      "Whether you're cooking up a spicy curry, seasoning meats, or adding a kick to your snacks, our chili powder is perfect for adding depth and complexity to a variety of dishes.",
  },
  {
    title: "No Additives",
    description:
      "Horizon Spices takes pride in offering pure and natural chili powder without any additives or preservatives, allowing you to enjoy the true essence of Guntur chili peppers.",
  },
];
const Features = () => {
  return (
    <div className="w-full px-6" id="service">
      <h3 className=" text-4xl text-textColor font-bold  text-center">
        <span className="text-primaryRed "> Special Guntur Chili Powder</span>
      </h3>
      <div className="w-full flex justify-center mt-6">
        <div className="w-1/2 text-lg text-center">
          Indulge in the fiery essence of Guntur with Horizon Spices' Special
          Guntur Chili Powder. Sourced directly from the spice capital of India,
          our chili powder is crafted with utmost care to deliver unmatched heat
          and flavor to your dishes.
        </div>
      </div>
      <div className="w-full mt-6">
        <m.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className="text-3xl mt-4  font-lg text-textColor text-center "
        >
          Key Features
        </m.h1>
      </div>
      <div className="text-white grid my-10 lg:grid-cols-4 gap-6 sm:grid-cols-2 gap-3 px-12">
        {items.map((item, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.4 + index * 0.1, // Adjust delay for each item
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col  text-center bg-[#F5E5CD] px-3 "
          >
            <h1 className="text-2xl mb-4 font-bold text-primaryRed pt-12">
              {item.title}
            </h1>
            <p className="text-gray-500">{item.description}</p>
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
