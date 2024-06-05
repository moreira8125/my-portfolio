/* eslint-disable react-hooks/rules-of-hooks */
import { Link, NavLink } from "react-router-dom";
import dmLogo from "../../public/images/Diogo Moreira NoBg.png";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const BarsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 text-logo-gold"
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 text-logo-gold"
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <nav className="flex justify-between items-center border-logo-gold border-b-2  w-7/8 mx-auto font-merriweather  pb-2 lg:hidden mt-2">
        <button onClick={toggleNavbar} className="ml-6">
          {isOpen ? <CloseIcon /> : <BarsIcon />}
        </button>
        <Link to="/" className="mr-4">
          <img src={dmLogo} alt="" className="w-36" />
        </Link>
      </nav>
      {isOpen && (
        <div className="absolute flex flex-col items-start pl-4 w-1/3 ml-8 mt-1 bg-logo-gold border-1 border-logo-gold rounded-lg z-10">
          <NavLink
            to={"/"}
            className="  py-2 text-color-ivory font-semibold"
            onClick={toggleNavbar}
          >
            Home
          </NavLink>

          <NavLink
            to={"/projects"}
            className="  py-2 text-color-ivory font-semibold"
            onClick={toggleNavbar}
          >
            Projects
          </NavLink>
        </div>
      )}
      <nav className="hidden lg:flex items-center justify-between border-logo-gold border-b-2 rounded-lg w-full mt-6 font-merriweather  pb-2">
        <div className="flex">
          <Link to="/">
            <img src={dmLogo} alt="" className="w-40 ml-12" />
          </Link>
        </div>
        <div className="flex gap-28">
          <NavLink
            to={"/"}
            className="  py-2  hover:underline hover:text-logo-blue text-logo-gold font-semibold text-2xl"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="  py-2  hover:underline hover:text-logo-blue text-logo-gold font-semibold text-2xl active:text-logo-blue active:underline"
          >
            About Me
          </NavLink>
          <NavLink
            to={"/projects"}
            className="  py-2  hover:underline hover:text-logo-blue text-logo-gold font-semibold text-2xl"
          >
            Projects
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
