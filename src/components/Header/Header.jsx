import React from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { LuLink2 } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";

const Header = () => {
  return (
    <div className="px-12 py-10 flex items-center justify-between">
      <div className="flex items-center w-80">
        <h1 className="text-[46px] font-semibold leading-[56px] mr-4">
          Mobile App
        </h1>
        <span className="text-[#5030E5] w-[25px] h-[25px] rounded-md bg-[#5030E5]/[0.2] flex items-center justify-center mr-3">
          <HiOutlinePencil />
        </span>
        <span className="text-[#5030E5] w-[25px] h-[25px] rounded-md bg-[#5030E5]/[0.2] flex items-center justify-center">
          <LuLink2 />
        </span>
      </div>
      <div>
        <div className="flex items-center">
          <span className="text-[#5030E5] w-4 h-4 rounded-[4px] bg-[#5030E5]/[0.2] mr-2">
            <IoIosAdd />
          </span>
          <span className="text-[#5030E5] mr-3">Invite</span>
          <div>
            <div className="flex -space-x-1">
              <div className="relative flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-white">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://source.boringavatars.com/beam/1?square"
                />
              </div>
              <div className="relative flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-white">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://source.boringavatars.com/beam/2?square"
                />
              </div>
              <div className="relative flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-white">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://source.boringavatars.com/beam/3?square"
                />
              </div>
              <div className="relative flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800 ring-2 ring-white">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://source.boringavatars.com/beam/4?square"
                />
              </div>
              <div className="relative flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full text-sm font-bold uppercase text-gray-800 ring-2 ring-white">
                <span className="text-white text-sm font-normal bg-[#D25B68]/[0.9] w-full h-full rounded-full inline-flex justify-center items-center">
                    +2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
