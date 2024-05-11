import React from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/static/About";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Product from "./pages/static/Product";

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
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
