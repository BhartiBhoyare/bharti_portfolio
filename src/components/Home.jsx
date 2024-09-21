import React from "react";
import BhartiImage from "../assets/Bharti.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Animation } from "@hemant0621/animation";

const Home = () => {
  return (
    <div name="home" className="w-full text-white">
      <div className="lg:w-full flex flex-col-reverse gap-5 lg:gap-0 lg:justify-between items-center lg:px-40 px-[1.8rem] md:flex-row"> 
        <div className="flex flex-col justify-center">
          <h2 ref={Animation("top", "10px", 200, 3000)} className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end <span className="text-pink-600">Developer</span>
          </h2>
          <p ref={Animation("top", "10px", 200, 3000)} className ="text-gray-300 text-xl lg:text-2xl lg:mt-4 font-bold py-6 max-w-md">
          I am passionate about web development and eager to turn my ideas into eye-catching websites that truly connect with people.
          </p>
          <div>
            <button ref={Animation("left", "10px", 200, 3000)} className="group text-white w-fit px-6 py-3 mt-6 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowRight size={24} className="pt-[0.2rem] pl-2" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={BhartiImage}
            alt="my profile"
            ref={Animation("left", "10px", 200, 3000)} className="rounded-2xl mx-auto h-[18rem] lg:h-[32rem] lg:w-[28rem] lg:mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
