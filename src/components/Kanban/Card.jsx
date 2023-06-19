import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";

const Card = ({ task, complete }) => {
  return (
    <div className="w-[314px] h-auto rounded-2xl p-[20px] bg-white cursor-pointer">
      <div className="flex items-center justify-between mb-1">
        <span
          className={`capitalize ${
            task.priority === "high"
              ? "text-[#D8727D] bg-[#D8727D]/[0.1]"
              : "text-[#D58D49] bg-[#D58D49]/[0.2]"
          } ${
            complete ? "text-[#68B266] bg-[#68B266]/[0.2]" : ""
          } rounded-md py-1 px-[6px]`}
        >
          {complete ? "Completed" : task.priority}
        </span>
        <BsThreeDots />
      </div>
      <h2 className="mb-[6px] text-lg font-semibold">{task.title}</h2>
      <p className="text-sm font-normal text-[#787486] mb-7">
        {task.description}
      </p>

      <div>
        <div className="flex w-full justify-between">

          <div className="flex -space-x-1">
            <div className="relative flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-white">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://source.boringavatars.com/beam/1?square"
              />
            </div>
            <div className="relative flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-white">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://source.boringavatars.com/beam/2?square"
              />
            </div>
            <div className="relative flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-white">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://source.boringavatars.com/beam/3?square"
              />
            </div>
          </div>
          <div className="flex items-center">

            <span className="text-[#787486] text-xs mr-2 inline-flex items-center gap-1">
                <HiOutlineChatBubbleLeftEllipsis />
                12 comments
            </span>
            <span className="text-[#787486] text-xs">0 files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
