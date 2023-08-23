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
      <div className="relative md:flex items-center justify-between  md:px-10 px-7 w-full">
        <div class="p-5 flex justify-between items-center">
          <Link to="/">
          <img
            src="./images/nav_logo.jpg"
            class="w-20 cursor-pointer object-cover"
            alt="nav logo"
            data-scroll-to
          />
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-end items-center text-4xl cursor-pointer md:hidden"
          >
            {open ? (
              <FontAwesomeIcon icon={faWindowClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>

        <nav
          className={`md:flex w-full text-center gap-6 md:items-center justify-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[10] left-0  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-25 " : "top-[-490px]"
          }`}
        >
          <ul className="grid md:grid-flow-col gap-4 lg:gap-6 justify-center items-center text-center">
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:text-lightBlue transform transition-transform duration-300 hover:scale-90"
                  onClick={() => setOpen(!open)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
