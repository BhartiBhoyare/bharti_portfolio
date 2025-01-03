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
      style: "shadow-black text-rose-50 font-bold text-base",
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
      className="lg:mt-20"
    >
      <div className="max-w-screen-lg bg- mx-auto p-4 flex flex-col justify-center w-full h-full text-rose-100">
        <div className="flex justify-center lg:text-6xl text-4xl font-bold p-2">
            <p className="border-b-4 pb-2 border-rose-200">
            Expertise
            </p>
        </div>

        <div
          ref={Animation("left", "80px", 200, 2000)}
          className="lg:w-full lg:mt-8 w-[20rem] grid grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 pl-10 lg:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="lg:w-28 w-14 mx-auto" />
              <p className="lg:mt-4 mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
