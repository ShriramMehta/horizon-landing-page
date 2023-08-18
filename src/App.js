import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css'; // Include Tailwind CSS styles
import Home from './pages/Home';
import Team from './pages/Team';
import GetApp from './pages/GetApp';

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true }
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  
  return (
    <div data-scroll-container>
      <Navbar />
      <Home />
      <About />
      <Team />
      <GetApp />
      <Footer />
    </div>
  )
}

export default App