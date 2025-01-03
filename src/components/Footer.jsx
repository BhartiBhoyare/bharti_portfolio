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
    className="lg:mt-6 p-6">
      <div ref={Animation("right", "20px", 200)} className="text-rose-100 font-bold text-pretty text-2xl lg:text-4xl flex flex-col text-center py-6">
        Contact me
        <div ref={Animation("left", "20px", 200)} className="pt-4">
          <p className="font-bold text-rose-100 text-sm lg:text-xl">
            Phone No.: <span className="text-rose-50">9039269129</span>{" "}
          </p>
          <p className="font-bold text-rose-100 text-sm lg:text-xl">
            Address:{" "}
            <span className="text-rose-50">
              82-B Utkarsh Vihar Colony Mhow Madhya Pradesh, India - 453441
            </span>{" "}
          </p>
          <div className="lg:hidden text-rose-50 grid grid-cols-2 gap-2 pl-16 pr-3 mt-2 text-sm">
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
                      <span className="flex gap-2">
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
