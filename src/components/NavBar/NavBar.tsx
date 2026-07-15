import { NavLink } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import type { NavProps } from "../../interfaces";

const NavBar = ({ logo, links }: NavProps) => {
  const [show, setShow] = useState<boolean>(false);
  function showNav() {
    setShow(!show);
  }
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">{logo}</h1>
      <div
        className={`sm:flex items-center flex-col bg-white dark:bg-black sm:bg-transparent sm:flex-row justify-center flex fixed inset-0 sm:relative sm:right-auto sm:top-auto sm:w-auto sm:h-auto transition-all duration-300 origin-center z-50 ${show == true ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"} sm:opacity-100 sm:scale-100 sm:pointer-events-auto`}
      >
        <ul className="flex flex-col sm:flex-row items-center ">
          {links.map((link, index) => {
            return (
              <li key={index} className="sm:mr-15 pb-20 sm:pb-0">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "font-bold underline" : ""
                  }
                >
                  {link.content}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ThemeSwitch />
        <div className=" absolute bottom-0 text-2xl mr-2.5">
          <IoClose className="sm:hidden cursor-pointer" onClick={showNav} />
        </div>
      </div>
      <FaBars className="sm:hidden cursor-pointer" onClick={showNav} />
    </div>
  );
};

export default NavBar;
