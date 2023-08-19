import React from "react";

const Navbar = () => {
  return (
    <section
      id="intro"
      className="my-5 flex items-center justify-center text-center"
      data-scroll-section
    >
      <div class="lg:container px-5 mx-auto">
        <nav>
          <ul class="grid md:grid-flow-col gap-4 lg:gap-16 justify-center items-center text-center ">
            <li>
            <div class="flex md:justify-start justify-center">
            <img
              src="./images/nav_logo.jpg"
              class="w-[20%] h-[20%] cursor-pointer"
              href="#home"
              data-scroll-to
            />
          </div>
            </li>
            <li>
              <a
                class="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:bg-red-100 focus:bg-red-100 rounded-md transition"
                href="#home"
                data-scroll-to
              >
                Home
              </a>
            </li>
            <li>
              <a
                class="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:bg-red-100 focus:bg-red-100 rounded-md transition"
                href="#about"
                data-scroll-to
              >
                About
              </a>
            </li>
            <li>
              <a
                class="inline-block text-2xl font-medium px-4 py-2 border-4 border-double border-transparent hover:bg-red-100 focus:bg-red-100 rounded-md transition"
                href="#team"
                data-scroll-to
              >
                Team
              </a>
            </li>
            <li>
              <a
                class="inline-block text-2xl font-medium px-5 py-3  bg-red-100 rounded-md"
                href="#getApp"
                data-scroll-to
              >
                Get the App
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
