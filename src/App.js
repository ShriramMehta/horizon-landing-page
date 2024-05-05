import React from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/static/About";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Team from "./pages/static/Team";
import GetApp from "./pages/static/GetApp";
import TermsCond from "./pages/profile/knowMore/TermsCond";
import PrivacyPol from "./pages/profile/knowMore/PrivacyPol";
import Faq from "./pages/profile/knowMore/Faq";
import Contact from "./pages/Contact";

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
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms-and-conditions" element={<TermsCond />} />
            <Route path="/privacy-policy" element={<PrivacyPol />} />/
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
