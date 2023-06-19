import React from "react";
import { MenuData, Myproject } from "./MenuData";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="w-[250px] border-r h-auto">
      <div className="border-b px-6 py-8 w-full">
        <div className="flex items-center justify-between">
          <h1 className="font-bold ">Project M.</h1>
          <RxDoubleArrowLeft />
        </div>
      </div>
      <div className="text-gray-500 font-[500] font-sans text-sm border-b-2 mx-3 px-2 pt-8">
        {MenuData.map((item) => {
          const { id, icons, value } = item;
          return (
            <div className="flex items-center mb-8" key={id}>
              <span className="pr-4">{icons}</span>
              <span className="">{value}</span>
            </div>
          );
        })}
      </div>
      <div className="mx-3 pt-8 ">
        <div className="flex items-center w-full justify-between px-2  text-gray-500 mb-5">
          <span className="uppercase font-bold">My Project</span>
          <span className="border rounded-[6px] border-gray-500">
            <IoIosAdd />
          </span>
        </div>
        <div className="flex items-center w-full px-[13px] py-[10px] text-[14px] bg-[#5030E5]/[0.08] rounded-md justify-between mb-2">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
            <span className="font-semibold">Mobile App</span>
          </div>
          <span className="">
            <BsThreeDots />
          </span>
        </div>
        <div className="flex items-center w-full px-[13px] py-[10px] text-[14px] rounded-md justify-between mb-2">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-orange-400 mr-3"></div>
            <span className="text-[#787486]">Website Redesign</span>
          </div>
        </div>
        <div className="flex items-center w-full px-[13px] py-[10px] text-[14px] rounded-md justify-between mb-2">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-indigo-200 mr-3"></div>
            <span className="text-[#787486]">Design System</span>
          </div>
        </div>
        <div className="flex items-center w-full px-[13px] py-[10px] text-[14px] rounded-md justify-between mb-2">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
            <span className="text-[#787486]">Wireframes</span>
          </div>
        </div>
        
        <div className="p-[20px] bg-[#C4C4C4]/[0.2] text-center rounded-2xl relative mt-14">
          <div className="absolute rounded-full w-[66px] h-[66px] bg-[#C4C4C4] top-[-40px] left-[75px]">

          </div>
          <h4 className="font-[500] text-[14px] mb-3 mt-9">Thought Time</h4>
          <p className="text-[12px] font-normal mb-[14px] text-[#787486]">We don't have any notice for you, till then you can share your thougths with your peers</p>
          <button className="w-full py-[12px] px-[27px] bg-white rounded">Write a Message</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
