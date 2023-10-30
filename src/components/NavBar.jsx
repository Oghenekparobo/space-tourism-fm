import React from "react";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import { Link, NavLink } from "react-router-dom";
import { navlinks } from "../utils/data";

const NavBar = () => {
  return (
    <div
      className="absolute top-0 left-0 z-10 overflow-hidden flex justify-between my-10 w-full lg:justify-between"
    >
      <div className="logo flex items-center px-8 lg:flex-2 ">
        <Link to="/">
          <img
            src={logo}
            alt="navbar logo"
            className="spin-logo object-cover logo-spin h-12 w-12 md:h-16 md:w-16 lg:h-10 lg:w-10"
          />
        </Link>
      </div>

      <div className="nav-line hidden flex-1 relative w-32 lg:flex">
        <div className="h-1 bg-white bg-opacity-10 backdrop-blur-md absolute left-8 -right-6 top-8 z-10" />
      </div>

      {/* show in small screens */}
      <div className="relative hamburger-icon nav-links__right px-14 cursor-pointer flex md:hidden">
        <img
          src={hamburger}
          alt="hamburger icon for small screens"
          className="h-10 w-10"
        />
      </div>

      {/* show in large and medium screens */}
      <div className="relative links nav-links__right px-20 space-x-10 justify-evenly items-center uppercase h-28 z-5 text-sm text-white bg-white bg-opacity-10 backdrop-blur-md hidden md:flex lg:px-0 lg:flex-1 lg:space-x-0 lg:h-[75px] ">
        {navlinks.map((link) => (
          <NavLink
            key={Number(link.id)}
            to={link.url}
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-1 h-full border-b-4 transition ease-in-out lg:space-x-2"
                : "flex items-center space-x-1 h-full border-b-none transition-all ease-in-out hover:border-b-4 hover:border-white lg:space-x-2"
            }
          >
            <span className="font-bold">{link.id}</span>
            <span className="font-light">{link.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
