/* eslint-disable react-hooks/rules-of-hooks */
import { Link, NavLink } from "react-router-dom";
import barsIcon from "../icons/menu-hamburguer.svg";
import cruzIcon from "../icons/cruz.svg";
import dmLogo from "../../public/images/Diogo Moreira.jpeg";
import { useState } from "react";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-around items-center border-logo-gold border-b-2 rounded-lg mt-8 w-4/5 mx-auto font-merriweather bg-color-ivory">
        <button onClick={toggleNavbar}>
          <img
            src={isOpen ? cruzIcon : barsIcon}
            alt=""
            className="w-5 text-logo-blue"
          />
        </button>
        <img src={dmLogo} alt="" className="w-24" />
        <Link className="text-xs text-logo-blue font-semibold ">
          Contact Me
        </Link>
      </nav>
      {isOpen && (
        <div className="fixed flex flex-col w-1/2 ml-12 mt-1 bg-logo-gold border-1 border-logo-gold rounded-lg font-montserrat">
          <NavLink
            to={"/"}
            className="  py-2 ml-4 hover:bg-gray-200 text-color-ivory font-semibold"
            onClick={toggleNavbar}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="  py-2  ml-4 hover:bg-gray-200 text-color-ivory font-semibold"
            onClick={toggleNavbar}
          >
            About Me
          </NavLink>
        </div>
      )}
    </>
  );
}

export default navbar;
