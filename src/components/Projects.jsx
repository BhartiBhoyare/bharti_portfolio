import React from "react";
import foodies from "../assets/foodies.png";
import spe from "../assets/spe.png";
import portfolio from "../assets/portfolio.png";
import { Animation } from "@hemant0621/animation";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const pro = [
    {
      id: 1,
      src: foodies,
      title: "Foodies Website",
      style: "shadow-rose-300 text-rose-100 font-bold text-xl text-base",
      link: "https://foodies-five-nu.vercel.app/",
      skill1: <FaReact />,
      skill2: <RiTailwindCssFill />,
      skill3: <FaJsSquare />,
      skill5: <FaGitAlt />,
    },

    {
      id: 2,
      src: portfolio,
      title: "My Portfolio Website",
      style: "shadow-rose-300 text-rose-100 font-bold text-xl text-base",
      link: "https://bharti-portfolio.vercel.app/",
      skill1: <FaReact />,
      skill2: <RiTailwindCssFill />,
      skill3: <FaJsSquare />,
      skill5: <FaGitAlt />,
    },
    {
      id: 3,
      src: spe,
      title: "Sparkal Price Estimator Website",
      style: "shadow-rose-300 text-rose-100 font-bold text-xl text-base",
      link: "https://sparklepriceestimator.netlify.app/",
      skill1: <FaHtml5 />,
      skill2: <FaCss3Alt />,
      skill3: <FaJsSquare />,
      skill4: <FaPython />,
      skill5: <FaGitAlt />,
    },
  ];

  return (
    <div name="projects" className="w-full mt-14 h-[95vh] lg:mt-4 p-2 xl:h-[38.4rem]">
      <div className="xl:max-w-screen-lg mx-auto flex flex-col md:justify-center items-center h-full">
        <div
          ref={Animation("left", "30px", 200, 1000)}
          className="text-3xl md:text-4xl font-bold inline text-rose-100 lg:text-5xl items-center"
        >
          Projects
        </div>
        <div
          className="lg:w-full w-[14rem] md:w-[50%] grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 text-center pt-6 lg:pl-10 lg:px-0"
          ref={Animation("right", "50px", 200, 2000)}
        >
          {pro.map(
            ({
              id,
              src,
              title,
              style,
              link,
              skill1,
              skill2,
              skill3,
              skill4,
              skill5,
            }) => (
              <div key={id} className={`shadow-md pb-2 rounded-lg ${style}`}>
                <img
                  src={src}
                  alt=""
                  className="lg:w-80 w-56 md:w-[24rem] rounded-t-lg"
                />
                <p className="lg:mt-4 text-sm md:text-xl my-1 md:my-2">{title}</p>

                <div className="flex items-center justify-between px-6 md:px-14 mb-2">
                  <div className="flex space-x-2">
                    <span className="w-6 xl:size-8">{skill1}</span>
                    <span className="w-6 xl:size-8">{skill2}</span>
                    <span className="w-6 xl:size-8">{skill3}</span>
                    <span className="w-6 xl:size-8">{skill5}</span>
                    <span className="w-6 xl:size-8">{skill4}</span>
                  </div>

                  <a className="px-1" href={link}>
                    <FaArrowRight className="hover:text-blue-700 duration-200 hover:scale-150" />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
