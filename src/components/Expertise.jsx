import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
// import javascript from "../assets/JavaScript.png";
import tailwind from "../assets/tailwind.png";
import reactjs from "../assets/ReactJs.png";
import git from "../assets/GIT.png"
// import github from "../assets/Github.png";
import mysql from "../assets/MySQL.png";
// import aws from "../assets/aws.png";
import { Animation } from "@hemant0621/animation";

const Expertise = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 text-rose-50 font-bold text-base",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600 text-rose-50 font-bold text-base",
    },
    {
      id: 3,
      src: "/JavaScript.png",
      title: "JavaScript",
      style: "shadow-yellow-600 text-rose-50 font-bold text-base",
    },
    {
      id: 4,
      src: reactjs,
      title: "ReactJS",
      style: "shadow-[#01dbff] text-rose-50 font-bold text-base",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-[#44a8b3] text-rose-50 font-bold text-base",
    },
    {
      id: 6,
      src: "/Github.png",
      title: "GitHub",
      style: "shadow-white text-rose-50 font-bold text-base",
    },
    {
      id: 7,
      src: mysql,
      title: "MySQL",
      style: "shadow-[#4479a1] text-rose-50 font-bold text-base",
    },
    {
      id: 8,
      src: git,
      title: "GIT",
      style: "shadow-[#f76839] text-rose-50 font-bold text-base",
    },
    // {
    //   id: 8,
    //   src: aws,
    //   title: "AWS",
    //   style: "shadow-orange-400 text-white font-bold text-base",
    // },
  ];

  return (
    <div
      name="expertise"
      ref={Animation("right", "50px", 200, 2000)}
      className="lg:mt-12 mt-6"
    >
      <div className="xl:max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-[98vh] xl:h-[36.2rem] text-rose-100">
        <div className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-bold">
            <p className="pb-4">
            Expertise
            </p>
        </div>

        <div
          ref={Animation("left", "80px", 200, 2000)}
          className="lg:w-full lg:mt-4 w-[20rem] md:mt-6 md:w-[80%] grid grid-cols-2 md:grid-cols-3 gap-8 text-center px-6 md:pl-0 lg:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="lg:w-[4.7rem] md:w-16 w-12 mx-auto" />
              <p className="lg:mt-4 mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
