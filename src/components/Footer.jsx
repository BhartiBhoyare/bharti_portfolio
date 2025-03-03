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
        href: "https://www.instagram.com/06__angel__21/",
      },
    {
        id: 2,
        child: (
          <>
            Mail Id <IoMdMail size={20} />
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
    <div 
    name = "contact"
    className="lg:mt-48 flex justify-center mt-[12rem] p-6 h-[95vh] xl:h-[27.4rem]">
      <div ref={Animation("right", "20px", 200)} className="text-rose-100 font-bold text-pretty text-3xl md:text-4xl lg:text-5xl flex flex-col text-center py-6">
        Contact me
        <div ref={Animation("left", "20px", 200)} className="pt-4">
          <p className="font-bold text-rose-100 mt-2 text-lg md:text-xl">
            Phone No.: <span className="text-rose-50">9039269129</span>{" "}
          </p>
          <p className="font-bold text-rose-100 mt-4 text-lg md:text-xl">
            Address:{" "}
            <span className="text-rose-50">
              82-B Utkarsh Vihar Colony Mhow Madhya Pradesh, India - 453441
            </span>{" "}
          </p>
          <div className="lg:hidden text-rose-50 grid grid-cols-2 gap-2 w-[80%] md:w-[50%] md:ml-40 md:text-xl ml-10 mt-4 text-lg">
              {links.map((link) => (
                <div
                  key={link.id}
                >
                    <a
                      href={link.href ? link.href : "/"}
                      download={link.download}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex justify-center items-center gap-2">
                      {link.child}
                      </span>
                    </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
