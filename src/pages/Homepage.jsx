/* eslint-disable react/no-unescaped-entities */
import About from "./About";
import profilePic from "../../public/images/profilepic.jpeg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="mt-10 ">
      <div className="flex flex-row items-center lg:justify-center gap-4">
        <div>
          <h1 className="text-4xl lg:text-6xl text-left mb-4 mx-2 font-bold animate-slidein tracking-tighter text-logo-blue">
            Diogo Moreira
          </h1>
          <h2 className="text-lg lg:text-2xl text-left mx-2 font-semibold animate-slidein tracking-tighter text-logo-blue">
            Junior Full Stack Developer
          </h2>
        </div>
        <img
          src={profilePic}
          alt=""
          className=" w-36 lg:w-48 rounded-full animate-slideinright"
        />
      </div>

      <About></About>

      <div className="mb-8 text-center flex flex-row items-center justify-center">
        <Link
          to="/projects"
          className="text-4xl tracking-tighter font-bold flex items-end space-x-2 group"
        >
          <h2 className="text-logo-blue">Check all my projects</h2>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              strokeWidth="3"
              stroke="currentColor"
              className="w-8 h-8 text-logo-blue transform transition-transform group-hover:translate-x-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </Link>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Homepage;
