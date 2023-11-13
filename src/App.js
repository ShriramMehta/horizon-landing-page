import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Team from "./pages/Team";
import GetApp from "./pages/GetApp";
import Privacy from "./pages/Privacy";
import DeleteAccount from "./pages/DeleteAccount";
import Therapist from "./pages/Therapist";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./pages/Signup";
import BookSession from "./pages/BookSession";
import ConfirmBooking from "./pages/ConfirmBooking";
import viewDetails from "./pages/viewDetails";

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
        { path: "/", element: <Main /> },
        { path: "/home", element: <Main /> },
        { path: "/about", element: <About /> },
        { path: "/team", element: <Team /> },
        { path: "/getApp", element: <GetApp /> },
        { path: "/therapist", element: <Therapist /> },
        {
          path: "/bookSession",
          element: <PrivateRoute component={BookSession} />,
        },
        {
          path: "/viewDetails",
          element: <PrivateRoute component={viewDetails} />,
        },
        {
          // path: "confirmBooking/:selectedDateIdx/:selectedTimeIdx",
          path:"confirmBooking",
          element: <PrivateRoute component={ConfirmBooking} />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/privacy-policy", element: <Privacy /> },
    { path: "/delete-account", element: <DeleteAccount /> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
