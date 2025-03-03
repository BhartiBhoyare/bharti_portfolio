import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Animation } from "@hemant0621/animation";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "expertise",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "certificates",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 pt-3 text-white z-30 fixed">
      <div
        ref={Animation("top", "10px", 200, 2000)}
        className="lg:text-[3rem] text-4xl font-semibold font-signature ml-2"
      >
        Bharti Bhoyare
      </div>
      <div>
        <ul className="hidden md:flex items-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 md:px-2 xl:px-4 cursor-pointer capitalize font-semibold text-xl text-white hover:scale-105 duration-200"
            >
              <div ref={Animation("top", "10px", id * 200, 2000)}>
                <h1 onClick={() => props.setcompo(link)}>{link}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#000055] to-[#000200] text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <h1
                onClick={() => {
                  props.setcompo(link);
                  setNav(!nav)
                }}
              >
                {link}
              </h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
