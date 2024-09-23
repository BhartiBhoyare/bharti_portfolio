import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-rose-200">
        <div className="flex justify-center lg:text-6xl text-4xl font-bold p-2">
          <p className="border-b-4 pb-2 border-rose-900">
            Contact
          </p>
        </div>
        <div className="flex justify-center items-center lg:mt-6">
          <form
            action="https://getform.io/f/31313319-e886-40c5-af98-21b4317d9014"
            method="POST"
            className="flex flex-col w-full md:w-[46%]"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-rose-200 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-rose-200 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 border-rose-200 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto font-bold flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
