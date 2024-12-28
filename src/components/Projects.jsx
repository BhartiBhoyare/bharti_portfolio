import React from "react";
import foodies from "../assets/foodies.png";
import spe from "../assets/spe.png"
import portfolio from "../assets/portfolio.png"
import { Animation } from "@hemant0621/animation";

const Projects = () => {
const pro = [
    {
        id: 1,
        src: foodies,
        title: "Foodies",
        style: "shadow-blue-300 text-white font-bold text-xl text-base",
    },
    {
        id: 2,
        src: portfolio,
        title: "My Portfolio",
        style: "shadow-blue-300 text-white font-bold text-xl text-base",
    },
    {
        id: 3,
        src: spe,
        title: "Sparkal Price Estimator",
        style: "shadow-blue-300 text-white font-bold text-xl text-base",
    },
]

  return (
    <div
      name="projects"
      ref={Animation("right", "50px", 200, 2000)}
      className="w-full mt-4 lg:mt-28 p-2"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center items-center h-full">
        <div
          ref={Animation("left", "30px", 200, 1000)}
          className="text-4xl font-bold inline border-b-4 border-rose-800 text-rose-100 lg:text-6xl items-center mb-6"
        >
          Projects
        </div>
        <div className="lg:w-full lg:mt-8 w-[20rem] grid grid-cols-1 lg:grid-cols-3 gap-8 text-center py-8 px-6 lg:pl-10 lg:px-0">
        {pro.map(({ id, src, title, style, href}) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 pb-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="lg:w-80 w-72 mx-auto rounded-t-lg" />
              <p className="lg:mt-4 mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
