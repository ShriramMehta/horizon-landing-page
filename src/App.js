import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/static/About";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Team from "./pages/static/Team";
import GetApp from "./pages/static/GetApp";
import Privacy from "./pages/static/Privacy";
import DeleteAccount from "./pages/static/DeleteAccount";
import Therapist from "./pages/therapist/Therapist";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Signup from "./pages/auth/Signup";
import BookSession from "./pages/appointment/BookSession";
import ConfirmBooking from "./pages/appointment/ConfirmBooking";
import ViewDetails from "./pages/therapist/ViewDetails";
import Dashboard from "./pages/profile/Dashboard";
import Schedule from "./pages/profile/Schedule";
import { DashboardLayout } from "./layouts/index";

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

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Main />} />
            <Route path="/team" element={<Team />} />
            <Route path="/getApp" element={<GetApp />} />
            <Route path="/therapist" element={<Therapist />} />
            <Route path="/bookSession" element={<BookSession />} />
            <Route path="/confirmBooking" element={<ConfirmBooking />} />
            <Route path="/viewDetails" element={<ViewDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
