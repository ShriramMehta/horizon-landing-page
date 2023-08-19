import React from 'react';

const GetApp = () => {
  return (
    <section
      id="getApp"
      className="flex items-center justify-center text-center bg-blue-200 py-28 mx-auto"
      data-scroll-section
    >
    <div class="w-60 sm:w-80 mx-auto px-3 bg-white rounded-lg py-2 shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer border border-[2px] border-blue-50">
    <div class="mb-2 p-3">
        <h1 class="mb-1 text-2xl font-bold">Scan to download/link</h1>
    </div>
    <div class="mb-2 p-3">
      <img src="./images/qr_code.png" alt="scanner"class="w-full" />
    </div>
    <div class="mb-2 p-3">
    <h4>Get the Adapt app now and let’s take you towards your personalised wellness path!</h4>
    </div>
  </div>
    </section>
  );
};

export default GetApp;
