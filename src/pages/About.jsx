/* eslint-disable react/no-unescaped-entities */
import profilePic from "../../public/images/profilepic.jpeg";
import Carousel from "../components/Carousel";
function About() {
  return (
    <div className="font-merriweather">
      <h1 className="text-4xl text-logo-blue text-center my-4  mx-2 font-semibold">
        About Me
      </h1>

      <div className="flex flex-col gap-2 mx-4">
        <img
          src={profilePic}
          alt=""
          className="w-40 rounded-full mb-4 mx-auto"
        />
        <p className="">
          My name is Diogo Moreira, I'm Portuguese and I was born in Porto. I
          have worked the past 4 years in sales. I fell in love with coding, so
          I enrolled in the Ironhack Web Development Bootcamp after
          self-learning for a year.
        </p>
        <p className="">
          As a junior full-stack developer with sales background, I blend strong
          communication and teamwork skills with a passion for fast-paced
          learning in tech.{" "}
        </p>
        <p className="">
          Eager to apply my unique perspective on user experience to develop
          impactful web solutions. My goal is to continue growing as a
          professional and help my future company hit their targets.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="text-center text-2xl font-bold  text-logo-blue">
          Technologies
        </h2>
        <Carousel></Carousel>
      </div>
    </div>
  );
}

export default About;
