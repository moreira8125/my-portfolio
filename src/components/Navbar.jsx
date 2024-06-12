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
      {/* NAVBAR PARA TELEMOVEIS/TABLETS*/}
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
      {/* NAVBAR PARA PC */}
      <nav className="hidden lg:flex items-center justify-between border-logo-gold border-b-2 rounded-lg w-full mt-6 font-merriweather  pb-2">
        <div className="flex">
          <Link to="/">
            <img src={dmLogo} alt="" className="w-40 ml-24" />
          </Link>
        </div>
        <div className="flex gap-28">
          <NavLink
            to={"/projects"}
            className="  py-2  text-logo-gold font-semibold text-4xl mr-24 flex items-end gap-2 group"
          >
            <h1>Projects</h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 28 28"
                strokeWidth="3"
                stroke="currentColor"
                className="w-8 h-8 text-logo-gold transform transition-transform group-hover:translate-x-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
