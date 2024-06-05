/* eslint-disable react/no-unescaped-entities */
import About from "./About";
import profilePic from "../../public/images/profilepic.jpeg";
function Homepage() {
  return (
    <div className="mt-10 ">
      <div className="flex flex-row items-center gap-4">
        <div>
          <h1 className="text-4xl  text-left mb-4 mx-2 font-bold animate-slidein tracking-tighter text-logo-blue">
            Diogo Moreira
          </h1>
          <h2 className="text-lg text-left mx-2 font-semibold animate-slidein tracking-tighter text-logo-blue">
            Junior Full Stack Developer
          </h2>
        </div>
        <img
          src={profilePic}
          alt=""
          className=" w-36 rounded-full animate-slideinright"
        />
      </div>

      <About></About>
    </div>
  );
}

export default Homepage;
