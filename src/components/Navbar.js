import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Get App", link: "/getApp" },
  ];

  return (
    <section className="my-3" data-scroll-section>
      <div className="flex items-center justify-between md:justify-center gap-10 px-7 md:px-10 w-full">
        
        {/* for mobile and Left Side*/}
        <div className="flex items-center">
          <Link to="/" className="md:hidden">
            <img
              src="./images/nav_logo.jpg"
              className="w-20 cursor-pointer object-cover"
              alt="nav logo"
              data-scroll-to
              onClick={() => setOpen(!open)}
            />
          </Link>

          {/* Left side */}
          <ul className="hidden md:flex md:justify-between p-3 mr-5 md:items-center md:gap-12">
            <Link
              className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:text-lightBlue transform transition-transform duration-300 hover:scale-90"
              onClick={() => setOpen(!open)}
              to="/home"
            >
              Home
            </Link>
            <Link
              className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:text-lightBlue transform transition-transform duration-300 hover:scale-90"
              onClick={() => setOpen(!open)}
              to="/about"
            >
              About
            </Link>
          </ul>
        </div>

        {/* Center logo */}
        <div className="hidden md:flex p-3 items-center">
          <Link to="/">
            <img
              src="./images/nav_logo.jpg"
              className="w-20 cursor-pointer object-cover"
              alt="nav logo"
              data-scroll-to
            />
          </Link>
        </div>

        {/* Right side */}
        <div className="hidden md:flex md:justify-between p-3 ml-5 md:items-center md:gap-12">
          <Link
            className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:text-lightBlue transform transition-transform duration-300 hover:scale-90"
            onClick={() => setOpen(!open)}
            to="/team"
          >
            Team
          </Link>
          <Link
            className="inline-block text-xl font-medium px-5 py-1 bg-lightBlue rounded text-white hover:transform transition-transform duration-300 hover:scale-90"
            onClick={() => setOpen(!open)}
            to="/getApp"
          >
            Get App
          </Link>
        </div>

        {/* Menu icon for mobile */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center text-4xl cursor-pointer md:hidden"
        >
          {open ? (
            <FontAwesomeIcon icon={faWindowClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>

      {/* Mobile Links or navigation */}
      <nav
        className={`md:hidden flex w-full text-center gap-6 md:items-center justify-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[10] left-0  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-25 " : "top-[-490px]"
        }`}
      >
        <ul className="grid md:grid-flow-col gap-4 lg:gap-6 justify-center items-center text-center">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className={`${link.name === "Get App" ? "inline-block text-xl font-medium px-5 py-1 bg-lightBlue rounded text-white hover:transform transition-transform duration-300 hover:scale-90": "inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:text-lightBlue transform transition-transform duration-300 hover:scale-90"} `}
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>    
    </section>
  );
};

export default Navbar;
