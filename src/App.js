import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import GetApp from "./pages/GetApp";
import Testimonial from "./components/Testimonials";
import Features from "./components/Features";
import Privacy from "./pages/Privacy";
import DeleteAccount from "./pages/DeleteAccount";
import Main from "./pages/Main";

const App = () => {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     tablet: { smooth: true },
  //     smartphone: { smooth: true }
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/delete" element={<DeleteAccount />} />
    </Routes>
  );
};
export default App;
