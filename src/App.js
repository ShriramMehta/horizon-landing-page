import React, { useEffect } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Team from "./pages/Team";
import GetApp from "./pages/GetApp";
import Privacy from "./pages/Privacy";
import DeleteAccount from "./pages/DeleteAccount";
import { Therapist } from "./pages/Therapist";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Main />
            </>
          ),
        },
        {
          path: "/home",
          element: <Main />,
        },
        {
          path: "/about",
          element: (
            <>
              <About />
            </>
          ),
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/getApp",
          element: <GetApp />,
        },
        {
          path: "/therapist",
          element: <Therapist/>,
        },
      ],
    },
    {
      path: "/privacy-policy",
      element: <Privacy />,
    },
    {
      path: "/delete-account",
      element: <DeleteAccount />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
