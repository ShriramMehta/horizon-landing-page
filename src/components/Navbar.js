import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Get App", link: "/getApp" },
    { name: "Therapist", link: "/therapist" },
  ];

  const user = localStorage.getItem("token");
  const signOut = () => {
    localStorage.removeItem("token");
    console.log("log out success");
    navigate("/login");
  };

  return (
    <section className="my-3" data-scroll-section>
      <div className="relative sm:flex items-center justify-start  sm:px-10 px-7 w-full">
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
          className={`sm:flex w-full text-center gap-6 sm:items-center justify-center sm:pb-0 pb-12 absolute sm:static bg-white md:bg-transparent sm:z-auto z-[10] left-0  sm:w-auto sm:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-25 " : "top-[-490px]"
          }`}
        >
          <ul
            className="grid sm:grid-flow-col gap-4 lg:gap-6 justify-center items-center text-center"
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
            <li>
              {user ? (
                <Link
                  // to="/"
                  className="inline-block text-textColor text-xl font-medium px-4 py-2 border-4 border-double border-transparent hover:text-primaryIndigo transform transition-transform duration-300 hover:scale-90"
                  onClick={signOut}
                >
                  {/* {user? "Login" : "Logout"} */}
                  Logout
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="inline-block text-textColor text-xl font-medium px-4 py-2 border-4 border-double border-transparent hover:text-primaryIndigo transform transition-transform duration-300 hover:scale-90"
                  onClick={() => setOpen(!open)}
                >
                  {/* {user? "Login" : "Logout"} */}
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Navbar;
