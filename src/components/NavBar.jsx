import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Animation } from "@hemant0621/animation";

const Navbar = () => {
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
      link: "certificates ",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 pt-3 text-slate-950 bg-[#1ebfda] z-30">
      <div
        ref={Animation("top", "10px", 200, 2000)}
        className="lg:text-[2.8rem] text-4xl font-semibold font-signature ml-2"
      >
        Bharti Bhoyare
      </div>
      <div>
        <ul className="hidden md:flex -mt-2">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-semibold text-base text-slate-950 hover:scale-105 duration-200"
              >
              <div ref={Animation("top", "10px", id*100, 2000)}>
              {link}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-slate-950 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-400 to-slate-950 via-cyan-700 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;