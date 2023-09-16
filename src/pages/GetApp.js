import React from "react";
import { Link } from "react-router-dom";
import Features from "../components/GetApp/Features";
import GetAppMain from "../components/GetApp/GetAppMain";


const GetApp = () => {
  return (
    <section
    id="getApp"
    data-scroll-section
    className='overflow-x-hidden'
  >
  <GetAppMain/>
  <Features />
  </section>
  );
};

export default GetApp;
