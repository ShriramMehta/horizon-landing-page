import React, { useEffect, useState } from "react";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
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
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

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
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

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
          element: <Therapist />,
        },
        {
          path: "/login",
          element: <Login />,
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
    {
      path: "/dashboard",
      element: <PrivateRoute isLoggedIn={isLoggedIn} element={<Dashboard />} />,
    },
  ]);

  // <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
  //   <Route path="/dashboard" element={<Dashboard />}></Route>
  // </Route>;

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
