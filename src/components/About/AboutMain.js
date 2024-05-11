import React from "react";

const AboutMain = () => {
  return (
    <section className="mx-auto mb-auto mb-20">
      <div className="flex flex-row md:flex-row justify-center items-center md:gap-16 p-5 w-full">
        <div className="w-1/2">
          <img
            src="/images/history.png"
            alt="hero"
            className="w-full  h-full "
          />
        </div>
        <div className="w-1/2 flex flex-col gap-8">
          <h3 className=" text-4xl md:text-5xl lg:text-6xl text-textColor font-bold p-3 font-heading">
            About <span className="text-primaryRed"> Horizon Spices!</span>
          </h3>
          <div>
            At Horizon Spices, we are passionate about bringing the rich
            heritage and authentic flavors of Guntur spices to your kitchen.
            Founded with a vision to elevate culinary experiences, Horizon
            Spices is dedicated to sourcing the finest spices directly from the
            heartland of spice cultivation.
            <br />
            <br />
            Guntur, nestled in the southern state of Andhra Pradesh, is renowned
            worldwide for its premium quality spices and vibrant culinary
            culture. It is here that Horizon Spices finds its inspiration,
            sourcing the freshest chili peppers, cumin, coriander, and other
            spices directly from local farmers who have honed their craft for
            generations.
            <br />
            <br />
            We believe in preserving the essence of Guntur spices by adhering to
            traditional methods of cultivation and processing. Each spice we
            offer undergoes rigorous quality checks to ensure that it meets our
            high standards of purity and flavor.
            <br />
            <br />
            At Horizon Spices, we are committed to transparency, authenticity,
            and sustainability. We take pride in our role as custodians of
            Guntur's spice heritage, and we strive to share its bounty with the
            world. Join us on a journey of flavor exploration and experience the
            unmatched quality and richness of Guntur spices with Horizon Spices.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
