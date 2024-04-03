import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center bg-gray-100 py-5 md:py-10 px-5 ">
      {/* <NavLink to="/">
        <h1 className="text-2xl md:text-5xl text-violet-900 font-extrabold">
          Anny Sen
        </h1>
      </NavLink> */}

      <div className=" hidden md:flex justify-between items-center">
        <NavLink
          className="mx-5 hover:text-violet-900 hover:font-bold text-gray-600"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="mx-5 hover:text-violet-900 hover:font-bold text-gray-600"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="mx-5 hover:text-violet-900 hover:font-bold text-gray-600"
          to="https://drive.google.com/file/d/1WQdQHjpc9NUOEr1ZRNTQXXsIhdxIe0OR/view?usp=sharing"
        >
          My Resume
        </NavLink>
        <NavLink
          className="mx-5 hover:text-violet-900 hover:font-bold text-gray-600"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      {/* mobile nav  */}

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Bars3Icon className="h-6 w-6 text-violet-500" />
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full z-10 ">
            <div className="p-5 bg-violet-500 ">
              <div className=" flex items-center justify-between mb-4">
                <button onClick={() => setIsOpen(!isOpen)}>
                  <XMarkIcon className="h-6 w-6 text-white"></XMarkIcon>
                </button>
              </div>
              <nav className=" flex flex-col gap-5">
                <NavLink className=" text-white" to="/">
                  Home
                </NavLink>
                <NavLink className=" text-white" to="/about">
                  About
                </NavLink>
                <NavLink
                  className=" text-white"
                  to="https://drive.google.com/file/d/1WQdQHjpc9NUOEr1ZRNTQXXsIhdxIe0OR/view?usp=sharing"
                >
                  My Resume
                </NavLink>
                <NavLink className="text-white" to="/contact">
                  Contact
                </NavLink>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
