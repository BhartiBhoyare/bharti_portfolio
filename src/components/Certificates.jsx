import React from "react";
import Cert1 from "../assets/certificate 1.png";
import Cert2 from "../assets/certificate 2.png";
import Cert3 from "../assets/certificate 3.png";
import Cert4 from "../assets/certificate 4.png";
import Cert5 from "../assets/certificate 5.png";
import Cert6 from "../assets/certificate 6.png";
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
  ];

  return (
    <div
      name="certificates"
      ref={Animation("right", "50px", 200, 2000)}
      className="w-full text-white mt-4 lg:mt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-rose-100">
        <div className="flex justify-center lg:text-6xl text-4xl font-bold p-2">
          <p className="border-b-4 pb-2 border-rose-200">Certificates</p>
        </div>

        <div
          ref={Animation("left", "80px", 200, 2000)}
          className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:px-0 px-8"
        >
          {links.map((link) => (
            <div
              key={link.id}
              className=" shadow-md shadow-rose-300 rounded-lg lg:h-[18rem] h-[9.5rem]"
            >
              <img
                src={link.src}
                alt=""
                className="rounded-xl lg:h-[15rem] h-[7rem] py-2 px-2 duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  href={link.href ? link.href : "/"}
                  className="duration-200 hover:scale-125"
                  download={link.download}
                >
                  <a
                   className="group text-white font-bold w-fit px-2 py-1 lg:px-4 lg:py-2 flex items-center rounded-md bg-gradient-to-r from-rose-500 to-rose-400 cursor-pointer"
                   href={link.href ? link.href : "/"}
                   download={link.download}
                   target="_blank"
                   rel="noreferrer">
                    Download
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
