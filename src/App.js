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

const MainSection = ({ content }) => {
  return (
    <div>
      <Navbar />
      {content}
      <Footer />
    </div>
  );
};

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
      <Route path="/home" element={<Main />} />
      <Route
        path="/about"
        element={
          <MainSection
            content={
              <>
                <About />
                <Testimonial />
                <Features />
              </>
            }
          />
        }
      />
      <Route path="/team" element={<MainSection content={<Team />} />} />
      <Route path="/getApp" element={<MainSection content={<GetApp />} />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
export default App;
