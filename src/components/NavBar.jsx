import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Animation } from "@hemant0621/animation";
import { Link } from "react-scroll";

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
    <div className="flex justify-between items-center w-full h-16 px-4 pt-3 text-rose-200 bg-[#87032b] z-30 fixed">
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
              className="px-4 cursor-pointer capitalize font-semibold text-base text-rose-100 hover:scale-105 duration-200"
              >
              <div ref={Animation("top", "10px", id*200, 2000)}>
              <Link to={link} smooth duration={500}>{link}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-rose-100 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-rose-900 to-rose-800 via-rose-500 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
