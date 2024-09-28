import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { Animation } from "@hemant0621/animation";

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={26} />
        </>
      ),
      href: "https://www.linkedin.com/in/bharti-bhoyare-980306251/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={26} />
        </>
      ),
      href: "https://github.com/BhartiBhoyare",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={26} />
        </>
      ),
      href: "mailto:bhartibhoyare@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={26} />
        </>
      ),
      href: "/Bharti Bhoyare Job CV final.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Instagram <FaInstagramSquare size={26} />
        </>
      ),
      href: "https://www.instagram.com/",
  },
  ];

  return (
    <div className="hidden flex-col top-[36%] left-0 fixed lg:flex z-50">
      <ul>
      {links.map((link) => (
       <div key={link.id} ref={Animation("left", "100px", link.id*100, 2000)}>
           <li
        key={link.id}
        className={
          "pl-6 flex justify-between items-center rounded-sm w-36 h-12 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-slate-900" +
          " " +
          link.style
        }
        >
            <a
              ref={Animation("left", "200px", link.id*200)}
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
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
  );
};

export default SocialLinks;
