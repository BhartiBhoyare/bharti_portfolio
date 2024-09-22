import React from "react";
import Progress from "./Progress";
import { Animation } from "@hemant0621/animation";

const about = () => {
  return (
    <div name="about" className="w-full mt-28 p-2">
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center items-center h-full">
        <div ref={Animation("left","30px",200, 1000)}
            className="text-4xl font-bold inline border-b-4 border-rose-800 text-rose-100 lg:text-6xl items-center mb-6"
          >
            About me
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse lg:mt-5">
          <div ref={Animation("right", "30px", 200, 2000)} className="text-lg lg:text-xl text-white lg:w-[30rem]">
            <div className="w-full text-sm lg:text-xl">
              <div>
                <p className="font-bold text-rose-300 text-base lg:text-xl">Email Id: <span className="text-white">bhartibhoyare@gmail.com </span> </p> 
                <p className="font-bold text-rose-300 text-base lg:text-xl">Phone No.: <span className="text-white">9039269129</span> </p>  
                <p className="font-bold text-rose-300 text-base lg:text-xl">Address: <span className="text-white">82-B Utkarsh Vihar Colony Mhow Madhya Pradesh, India - 453441</span> </p> 
              </div>
              <div className="mt-6">
                <p className="text-xl mb-4 font-bold text-rose-400 lg:text-2xl">My Skills...</p>
                <Progress value={95} name={"1. HTML '95%'"} />
                <Progress value={95} name={"2. CSS '95%'"} />
                <Progress value={80} name={"3. JavaScript '80%'"} />
                <Progress value={95} name={"4. Tailwind CSS '95%'"} />
                <Progress value={80} name={"5. ReactJs '80%'"} />
                <Progress value={90} name={"6. C++ '90%'"} />
                <Progress value={90} name={"7. Python '90%'"} />
                <Progress value={75} name={"8. MySQL '75%'"} />
              </div>
            </div>
          </div>
          <div
            ref={Animation("right", "30px", 2)}
            className="text-lg text-white lg:pr-6 lg:w-[30rem]"
          >
            <span className="text-2xl lg:text-4xl text-rose-400 font-bold">
              Hello, It's Bharti Bhoyare!
            </span>
            <div className="pt-2 text-base lg:text-xl">
              I’m a final-year BTech Computer Science Engineering student at
              Medi-Caps University, specializing in Data Science. I have a
              strong interest in web development and am excited to create
              engaging, user-friendly websites that connect with people.

              <ul className="text-rose-400 lg:text-3xl"> Education:
                <p className="text-white lg:text-lg">
                <li>Current CGPA: 7.65</li>
                <li>12th Grade: Kendriya Vidyalaya Mhow - 76.6%</li>
                <li>10th Grade: Kendriya Vidyalaya Mhow - 65.2%</li>
                </p>
              </ul>
              <ul className="text-rose-400 lg:text-3xl"> Hobbies:
                <p className="text-white lg:text-lg">
                <li>Helping others</li>
                <li>Cooking</li>
                <li>Singing</li>
                <li>Listening to love and spiritual music</li>
                <li>Watching K-Dramas</li>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
