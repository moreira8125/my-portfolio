import React, { useState } from "react";
import projects from "../db.json";
import { Link } from "react-router-dom";

function Projects() {
  // Initialize showText as an array of booleans
  const [showText, setShowText] = useState(Array(projects.length).fill(false));

  // Function to toggle the text visibility for a specific project
  const toggleText = (index) => {
    // Create a copy of the showText array
    const newShowText = [...showText];
    // Toggle the value at the specific index
    newShowText[index] = !newShowText[index];
    // Update the state with the new array
    setShowText(newShowText);
  };

  return (
    <div className="h-screen mb-64">
      <h1 className="text-4xl text-center text-logo-blue font-bold mt-12 tracking-tighter animate-slideinup">
        Projects
      </h1>
      <div className="flex items-center flex-col justify-center gap-4 lg:flex-row lg:justify-around lg:items-start">
        {projects.map((oneProject, index) => {
          return (
            <div
              className="shadow-custom rounded-lg w-2/3 mt-8  bg-white shadow-logo-gold pb-4 lg:w-1/5"
              key={oneProject.id}
            >
              <Link to={oneProject.link} target="_blank">
                <img src={oneProject.image} alt="" className="rounded-t-lg" />
              </Link>

              <h1 className="text-center text-logo-blue text-xl font-bold">
                {oneProject.name}
              </h1>
              <h2 className="text-center text-logo-blue text-lg font-semibold">
                Technologies used: <br />
                <span className="text-sm">
                  {oneProject.technologies.join(", ")}
                </span>
              </h2>

              <p
                className={`p-2 text-sm transition-all duration-300 ease-in-out ${
                  !showText[index] ? "line-clamp-3 max-h-16" : "max-h-full"
                }`}
              >
                {oneProject.description}
              </p>

              <button
                className="border-2 bg-logo-blue text-white px-2 py-1 rounded-full flex items-center mx-auto mt-2"
                onClick={() => toggleText(index)}
              >
                {showText[index] ? <p>Read Less</p> : <p>Read More</p>}
                {!showText[index] ? (
                  <span className="ml-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="ml-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
