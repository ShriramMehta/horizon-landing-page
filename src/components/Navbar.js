import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Get App", link: "/getApp" },
    { name: "Therapist", link: "/therapist" },
  ];
  const { user } = useAuth();

  return (
    <section className="my-3" data-scroll-section>
      <div className="relative sm:flex items-center justify-start  sm:px-10 px-7 w-full">
        <div class="p-5 flex justify-between items-center">
          <Link to="/">
            <img
              src="/images/nav_logo.jpg"
              class="w-20 cursor-pointer object-cover"
              alt="nav logo"
              data-scroll-to
            />
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-end items-center text-3xl cursor-pointer sm:hidden"
          >
            {open ? (
              <FontAwesomeIcon icon={faWindowClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
        <nav
          className={`sm:flex text-center gap-6 sm:items-center sm:justify-center md:justify-start sm:pb-0 pb-12 
                      absolute sm:static bg-white md:bg-transparent sm:z-auto z-[10] left-0 p-2 md:p-0 sm:pl-0 pl-0 
                      md:pl-9 transition-all duration-500 ease-in w-[100%] ${
                        open ? "top-25 " : "top-[-490px]  "
                      }`}
        >
          <ul
            className="grid sm:grid-flow-col gap-4 lg:gap-6 sm:justify-center md:justify-start items-center text-center sm:w-full md:w-[90%]"
            style={{
              zIndex: "4",
            }}
          >
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className="inline-block text-textColor text-xl font-medium px-4 py-2 border-4 border-double border-transparent hover:text-primaryIndigo transform transition-transform duration-300 hover:scale-90"
                  onClick={() => setOpen(!open)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="justify-end sm:z-auto md:z-[10] ">
            <li>
              <Link
                to="/signin"
                className="w-full justify-center text-center bg-[#7B3CF3] hover:bg-[#F0F0FE] hover:text-[#0E0079] border-[1px] border-[#7B3CF3] hover:border-[#0E0079] hover:border-[1px] text-white px-6 py-2 rounded-xl flex justify-between items-center"
                onClick={() => setOpen(!open)}
              >
                {user ? "Profile" : "Login"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Navbar;
