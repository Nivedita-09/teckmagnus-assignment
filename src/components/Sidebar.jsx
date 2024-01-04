import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Logo from "../assets/Canva-logo.png";
import { FiHome } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isSublistOpen, setIsSublistOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={`drawer ${isDrawerOpen ? "drawer-open" : ""}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side ">
        {/* <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={handleCloseDrawer}
        ></label> */}
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="border-b-2 border-white">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
          </li>
          <li className="bg-white text-black font-bold py-1 px-4 rounded-r-full w-[85%] my-2 ">
            <a href="/">
              <div className="flex flex-row gap-2 font-normal text-xl items-center">
                {" "}
                <FiHome /> Home
              </div>
            </a>
          </li>
          <li
            className="bg-orange-300 text-white font-bold py-1 px-4 rounded-r-full w-[85%] my-2"
            onClick={() => setIsSublistOpen(!isSublistOpen)}
          >
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-2 font-normal text-xl items-center">
                <VscGraph />
                My Space
              </div>

              <IoIosArrowUp />
            </div>
          </li>
          {isSublistOpen && (
            <ul className="w-[80%] pl-3">
              {/* Sublist items here */}
              <li className="my-2 text-lg font-normal text-white pl-6 ">
                Leave
              </li>
              <li className="my-2 text-lg font-normal text-white pl-6">
                Attendance
              </li>
              <li className="my-2 text-lg font-normal text-white pl-6">
                Performance
              </li>
              <li className="my-2 text-lg font-normal text-white pl-6">
                Expenses & Travel
              </li>
              <li className="my-2 text-lg font-normal text-white pl-6">
                Help Desk
              </li>
            </ul>
          )}
        </ul>
        <div className="absolute top-2 right-0">
          <button className="rounded-full bg-slate-50 w-10 h-10 p-3 flex items-center justify-center mt-36">
            <FaArrowLeft />
          </button>
        </div>
      </div>

      {/* <div className="drawer-content">
        <button
          id="my-drawer"
          className="rounded-full bg-slate-50 w-10 h-10 p-3 flex items-center justify-center mt-36"
          onClick={handleToggleDrawer}
          aria-label="Toggle sidebar"
        >
          <FaArrowLeft />
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
