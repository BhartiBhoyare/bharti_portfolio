import React from "react";

function Progress({ value, name }) {
  return (
    <div>
      <p>{name}</p>
      <div className="bg-rose-900 w-[18rem] lg:w-[24rem] h-2 border-[1.5px] border-rose-800 rounded-lg my-1">
        {/* <div style={{ width: `${value}%` }} className="bg-transparent h-full">
          <div className="bg-rose-300 w-full h-full rounded-l-lg"></div>
        </div> */}
        <svg className="h-full w-full rounded-l-lg lg:hidden">
          <line
            x1="0"
            y1="0"
            x2="280"
            y2="0"
            strokeDashoffset={280*(1-(value/100))}
            strokeDasharray={280}
            stroke="rgb(250, 92, 92)"
            strokeWidth="10"
            className="animate-line "
          ></line>
        </svg>
        <svg className="h-full w-full rounded-l-lg hidden lg:block">
          <line
            x1="0"
            y1="0"
            x2="380"
            y2="0"
            strokeDashoffset={380*(1-(value/100))}
            strokeDasharray={380}
            stroke="rgb(250, 92, 92)"
            strokeWidth="10"
            className="animate-line-lg"
          ></line>
        </svg>
      </div>
    </div>
  );
}

export default Progress;
