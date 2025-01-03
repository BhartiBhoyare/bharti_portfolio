import React from "react";
import BhartiImage from "../assets/Bharti.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Animation } from "@hemant0621/animation";


const Home = () => {

  const links = [
    {
      id: 4,
      child: (
        <>
          Resume
        </>
      ),
      href: "/Bharti Bhoyare CV.pdf",
      download: true,
    },
  ];

  return (
    <div name="home" className="w-full text-rose-100 mt-14">
      <div className="lg:w-full flex flex-col-reverse gap-5 lg:gap-0 lg:justify-between items-center lg:px-40 px-[1.8rem] md:flex-row"> 
        <div className="flex flex-col justify-center lg:mt-24">
          <h2 ref={Animation("top", "10px", 200, 3000)} className="text-4xl sm:text-7xl font-bold text-sky-500">
            I'm a Front-end <span className="text-emerald-300">Developer</span>
          </h2>
          <p ref={Animation("top", "10px", 200, 3000)} className ="text-rose-50 text-xl lg:text-2xl lg:mt-4 font-bold py-6 max-w-md">
          I am passionate about web development and eager to turn my ideas into eye-catching websites that truly connect with people.
          </p>
          <div>
          {links.map((link, index) => (
            <button ref={Animation("left", "10px", 200, 3000)} className="lg:hidden group text-white w-fit px-6 py-3 mt-6 flex items-center rounded-md bg-gradient-to-r from-teal-600 to-teal-400 cursor-pointer"
            key={index}
            >
              <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowRight size={24} className="pt-[0.2rem] pl-2" />
              </span>
            </button>
          ))}
          </div>
        </div>
        <div>
          <img
            src={BhartiImage}
            alt="my profile"
            ref={Animation("left", "10px", 200, 3000)} className="rounded-2xl mx-auto h-[18rem] lg:h-[30rem] lg:w-[26rem] mt-8 lg:mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
