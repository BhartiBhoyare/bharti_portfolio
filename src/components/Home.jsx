import React from "react";
import BhartiImage from "../assets/Bharti.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Animation } from "@hemant0621/animation";

const Home = () => {
  const links = [
    {
      id: 4,
      child: <>Resume</>,
      href: "/Bharti Bhoyare CV.pdf",
    },
  ];

  return (

      <div name="home" className="w-full flex justify-center h-[99vh] p-2 xl:h-[39.4rem] text-rose-100">
        <div className="lg:w-full flex flex-col-reverse gap-5 lg:gap-0 lg:justify-between items-center lg:px-40 px-[1.8rem] xl:flex-row md:flex-col-reverse">
          <div className="flex flex-col justify-center xl:mt-24">
            <h2
              ref={Animation("top", "10px", 200, 3000)}
              className="text-4xl sm:text-7xl font-bold text-[#c45e5d]"
            >
              I'm a Front-End{" "}
              <span className="text-[#d1d2d1]">Developer</span>
            </h2>
            <p
              ref={Animation("top", "10px", 200, 3000)}
              className="text-rose-50 text-xl lg:text-2xl lg:mt-4 font-bold py-6 max-w-md"
            >
              I am passionate about web development and eager to turn my ideas
              into eye-catching websites that truly connect with people.
            </p>
            <div>
              {links.map((link, index) => (
                <button
                  ref={Animation("left", "10px", 200, 3000)}
                  className="lg:hidden group text-white w-fit px-6 py-3 mt-6 flex items-center rounded-md bg-gradient-to-r from-teal-600 to-teal-400 cursor-pointer"
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
                    <MdOutlineArrowRight
                      size={24}
                      className="pt-[0.2rem] pl-2"
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <img
              src={BhartiImage}
              alt="my profile"
              ref={Animation("right", "30px", 200, 2000)}
              className="rounded-3xl border-x-4 border-violet-800 mx-auto h-[14rem] lg:h-[25rem] lg:w-[25rem] md:h-[28rem] xl:mt-20"
            />
          </div>
        </div>
      </div>
  );
};

export default Home;
