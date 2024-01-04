import React from "react";
import { TbBell } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import Profile from "../assets/profile-photo.png";
import { RiSearchLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className="w-full flex flex-row gap-12 justify-center items-center  ">
      <div className="lg:w-1/3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search...."
            className="pl-5 pr-4 py-2 border border-[#A19595] rounded-md relative w-full"
          />
          <RiSearchLine
            size={20}
            className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="p-2 xl:w-[4%] lg:w-[6%] border-[#A19595] border rounded-md text-center">
        <TbBell size={20} />
      </div>
      <div className="p-2 w-[4%] lg:w-[7%] border rounded-md text-center border-[#A19595] ">
        <HiOutlineMail size={20} />
      </div>
      <img
        src={Profile}
        alt="Logo"
        className="w-[50px] h-[50px] rounded-full object-fill "
      />
    </div>
  );
}
