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
import DeleteAccount from "./pages/static/DeleteAccount";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import BookSession from "./pages/appointment/BookSession";
import ConfirmBooking from "./pages/appointment/ConfirmBooking";
import ViewDetails from "./pages/profile/Thearpist/ViewDetails";
import Dashboard from "./pages/profile/Dashboard";
import Schedule from "./pages/profile/Schedule";
import { DashboardLayout } from "./layouts/index";
import Settings from "./pages/profile/seetingsPgs/Settings";
import Concern from "./pages/profile/seetingsPgs/Concern";
import TermsCond from "./pages/profile/knowMore/TermsCond";
import PrivacyPol from "./pages/profile/knowMore/PrivacyPol";
import Faq from "./pages/profile/knowMore/Faq";
import Therapist from "./pages/profile/Thearpist/Therapist";

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
            <Route
              path="/book-session/:therapistId"
              element={<BookSession />}
            />
            <Route path="/confirmBooking" element={<ConfirmBooking />} />
            <Route path="/viewDetails" element={<ViewDetails />} />
            <Route path="/therapist" element={<Therapist />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms-and-conditions" element={<TermsCond />} />
            <Route path="/privacy-policy" element={<PrivacyPol />} />/
          </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/delete-account" element={<DeleteAccount />} />

          <Route path="/profile" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="settings" element={<Settings />} />
            <Route path="concerns" element={<Concern />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
