import React from "react";
import Cert1 from "../assets/certificate 1.png";
import Cert2 from "../assets/certificate 2.png";
import Cert3 from "../assets/certificate 3.png";
import Cert4 from "../assets/certificate 4.png";
import Cert5 from "../assets/certificate 5.png";
import Cert6 from "../assets/certificate 6.png";
import Cert7 from "../assets/certificate 7.png";
import { Animation } from "@hemant0621/animation";

const Certificates = () => {
  const links = [
    {
      id: 1,
      src: Cert1,
      href: "/Data Analytics with Python certificate.pdf",
      title: "Data Analytics with Python",
      download: true,
    },
    {
      id: 2,
      src: Cert2,
      href: "/EN21CS303013___AWS_Academy_Cloud_Foundations.pdf",
      title: "AWS Cloud Foundation",
      download: true,
    },
    {
      id: 3,
      src: Cert3,
      href: "/EN21CS303013__Bharti Bhoyare AWS Cloud Architect Certificate.pdf",
      title: "AWS Cloud Architecting",
      download: true,
    },
    {
      id: 4,
      src: Cert4,
      href: "/Google Data Analytics certificate.pdf",
      title: "Google Data Analytics",
      download: true,
    },
    {
      id: 5,
      src: Cert5,
      href: "/Bharti_Bhoyare_TCion certificate.pdf",
      title: "TCSion Youth Devlopment Module",
      download: true,
    },
    {
      id: 6,
      src: Cert6,
      href: "/Python For DS and ML Bootcamp Certificate.pdf",
      title: "Python for Data Science and Machine Learning Bootcamp",
      download: true,
    },
    {
      id: 7,
      src: Cert7,
      href: "/Certificate of Generative AI Mastermind By Outskill.pdf",
      title: "PGenerative AI Mastermind",
      download: true,
    },
  ];

  return (
    <div
      name="certificates"
      ref={Animation("right", "50px", 200, 2000)}
      className="w-full text-white mt-6 h-[98vh] lg:mt-16 xl:h-[35.4rem]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-rose-100">
        <div className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-bold p-2">
          <p className="pb-4">Certificates</p>
        </div>

        <div className="w-full overflow-y-auto scrollbar-none h-[60vh] flex justify-center">
          <div
            ref={Animation("left", "80px", 200, 2000)}
            className="grid grid-cols-2 md:grid-cols-3 lg:w-[50rem] gap-4 md:gap-8 lg:mt-2 lg:px-0 px-8"
          >
            {links.map((link) => (
              <div
                key={link.id}
                className=" shadow-md shadow-blue-300 rounded-lg md:h-[15rem] h-[9.5rem]"
              >
                <img
                  src={link.src}
                  alt=""
                  className="rounded-xl md:h-[12rem] h-[7rem] py-2 px-2 duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 duration-200 hover:scale-110 text-white font-bold w-fit px-2 py-1 lg:px-4 lg:py-1 flex items-center rounded-md bg-gradient-to-br from-blue-950 to-blue-800 hover:bg-gradient-to-bl cursor-pointer"
                  >
                    View
                  </a>
                  <a
                    className="mt-1 duration-200 hover:scale-110 text-white font-bold w-fit px-2 py-1 lg:px-4 lg:py-1 flex items-center rounded-md bg-gradient-to-br from-blue-950 to-blue-800 hover:bg-gradient-to-bl cursor-pointer"
                    href={link.href ? link.href : "/"}
                    download={link.download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
