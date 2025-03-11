import React from "react";
import Progress from "./Progress";
import { Animation } from "@hemant0621/animation";

const about = () => {
  return (
    <div name="about" className="w-full h-[98vh] xl:h-[35.9rem] lg:mt-14 mt-4">
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center items-center h-full">
        <div ref={Animation("left","30px",200, 1000)}
            className="text-3xl md:text-4xl font-bold inline text-rose-100 lg:text-5xl items-center mb-1"
          >
            About me
        </div>
        <div className="flex flex-col-reverse lg:ml-16 lg:flex-row-reverse lg:mt-5">
          <div ref={Animation("right", "30px", 200, 2000)} className="text-lg lg:text-xl text-rose-50 lg:w-[30rem]">
            <div className="w-full text-sm lg:text-xl">
              <div className="mt-4">
                <p className="text-xl mb-2 font-bold text-rose-100  md:text-2xl lg:text-2xl">My Skills...</p>
                <Progress value={95} name={"1. HTML '95%'"} />
                <Progress value={95} name={"2. CSS '95%'"} />
                <Progress value={80} name={"3. JavaScript '80%'"} />
                <Progress value={95} name={"4. Tailwind CSS '95%'"} />
                <Progress value={80} name={"5. ReactJs '80%'"} />
                <Progress value={60} name={"5. Redux '60%'"} />
                <Progress value={80} name={"6. C++ '80%'"} />
                <Progress value={70} name={"8. MySQL '70%'"} />
              </div>
            </div>
          </div>
          <div
            ref={Animation("right", "30px", 2)}
            className="text-lg text-rose-50 lg:pr-6 lg:w-[30rem]"
          >
            <div className="text-base mt-2 lg:text-xl">
              <ul className="text-rose-200 font-bold lg:text-3xl md:text-2xl text-xl"> Education:
                <p className="text-rose-50 lg:text-lg md:text-base text-sm font-light">
                <li>B-tech Computer Science Engineering | Medicaps University Indore | CGPA : 7.76 | 2021 to 2025</li>
                <li>12th Grade | Kendriya Vidyalaya Mhow | 76.6% | 2021</li>
                <li>10th Grade | Kendriya Vidyalaya Mhow | 65.2% | 2019</li>
                </p>
              </ul>
              <ul className="text-rose-200 lg:text-3xl  md:text-2xl font-bold mt-4 text-xl"> Hobbies:
                <p className="text-rose-50 lg:text-lg md:text-base text-sm font-light">
                <li className="xl:hidden">Helping, Cooking, Singing, Listening love and spiritual music, Watching K-Dramas</li>
                <div className="hidden lg:flex flex-col">
                <li>Helping</li>
                <li>Cooking</li>
                <li>Singing</li>
                <li>Listening love and spiritual music</li>
                <li>Watching K-Dramas</li>
                </div>
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
