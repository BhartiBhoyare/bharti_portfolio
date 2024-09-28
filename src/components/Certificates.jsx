import React from "react";
import Cert1 from "../assets/certificate 1.png";
import Cert2 from "../assets/certificate 2.png";
import Cert3 from "../assets/certificate 3.png";
import Cert4 from "../assets/certificate 4.png";
import Cert5 from "../assets/certificate 5.png";
import Cert6 from "../assets/certificate 6.png";
import { Animation } from "@hemant0621/animation";

const Certificates = () => {
  const link = [
    {
      id: 1,
      src: Cert1,
      title: "Data Analytics with Python",
      download: true,
    },
    {
      id: 2,
      src: Cert2,
      title: "AWS Cloud Foundation",
      download: true,
    },
    {
      id: 3,
      src: Cert3,
      title: "AWS Cloud Architecting",
      download: true,
    },
    {
      id: 4,
      src: Cert4,
      title: "Google Data Analytics",
      download: true,
    },
    {
      id: 5,
      src: Cert5,
      title: "TCSion Youth Devlopment Module",
      download: true,
    },
    {
      id: 6,
      src: Cert6,
      title: "Python for Data Science and Machine Learning Bootcamp",
      download: true,
    },
  ];

  return (
    <div
      name="certificates"
      ref={Animation("right", "50px", 200, 2000)}
      className="w-full text-white lg:mt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-rose-100">
        <div className="flex justify-center lg:text-6xl text-4xl font-bold p-2">
          <p className="border-b-4 pb-2 border-rose-900">Certificates</p>
        </div>

        <div
          ref={Animation("left", "50px", 200, 2000)}
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-12 sm:px-0"
        >
          {link.map(({ id, src }) => (
            <div
              key={link.id}
              className=" shadow-md shadow-rose-400 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-xl h-[16rem] py-2 px-2 duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  href={link.href ? link.href : "/"}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125"
                  download={link.download}
                >
                  Download
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
