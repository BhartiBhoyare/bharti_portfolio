import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { Animation } from "@hemant0621/animation";

const Footer = () => {

  const links = [
    {
        id: 1,
        child: (
          <>
           Instagram <FaInstagramSquare size={20} />
          </>
        ),
        href: "https://www.instagram.com/",
      },
    {
        id: 2,
        child: (
          <>
            Mail <IoMdMail size={20} />
          </>
        ),
        href: "mailto:bhartibhoyare@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={20} />
        </>
      ), 
      href: "https://www.linkedin.com/in/bharti-bhoyare-980306251/",
    },
    {
      id: 4,
      child: (
        <>
          GitHub <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/BhartiBhoyare",
    },
  ];

  return (
    <div className="bg-[#05182f] lg:mt-6 p-6">
      <div ref={Animation("right", "50px", 200)} className="text-rose-400 font-bold text-pretty text-2xl lg:text-3xl flex flex-col text-center py-6">
        Contact me
        <div ref={Animation("left", "50px", 200)} className="pt-4">
          <p className="font-bold text-rose-200 text-sm lg:text-xl">
            Phone No.: <span className="text-white">9039269129</span>{" "}
          </p>
          <p className="font-bold text-rose-200 text-sm lg:text-xl">
            Address:{" "}
            <span className="text-white">
              82-B Utkarsh Vihar Colony Mhow Madhya Pradesh, India - 453441
            </span>{" "}
          </p>
          <div className="lg:hidden text-white flex flex-col items-center text-sm">
            <ul>
              {links.map((link) => (
                <div
                  key={link.id}
                >
                  <li
                    key={link.id}
                    className={
                      "" +
                      " " +
                      link.style
                    }
                  >
                    <a
                      href={link.href ? link.href : "/"}
                      className="flex justify-center items-center px-2"
                      download={link.download}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.child}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
