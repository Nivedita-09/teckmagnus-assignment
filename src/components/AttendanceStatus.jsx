import React from "react";
import { SlClock } from "react-icons/sl";

export default function AttendanceStatus() {
  return (
    <>
      <div className="my-5">
        <div className="flex flex-row gap-2">
          <h3 className="text-2xl text-white font-bold">My Space / </h3>{" "}
          <h3 className="text-orange-300 text-2xl font-bold">Attendance</h3>
        </div>{" "}
      </div>
      <div className="w-full rounded-md border border-[#A19595]  flex flex-row p-2">
        <div className="w-[40%]">
          <h3 className="text-2xl text-white font-bold my-1">
            Attendance Status
          </h3>
          <select className="my-1">
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
          <div className="w-[95%] h-24 mx-auto rounded-md border border-[#A19595] flex flex-row gap-2 p-3 justify-around my-2">
            <div className="flex flex-row  items-center gap-2 ">
              <SlClock size={30} className="text-white" />
              <div className="flex flex-col">
                <h4 className="text-white font-medium text-lg ">
                  Avg hrs / Day
                </h4>
                <span className="text-[#e0d8d8] font-medium text-sm ">
                  (6hrs 48m)
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <SlClock size={30} className="text-white" />
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-white font-medium text-lg">
                  On Time Arrival
                </h3>
                <span className="text-[#e0d8d8] font-medium text-sm ">95%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%] text-center">
          <h3 className="text-2xl text-white font-bold my-1">Timings</h3>
          <div className="w-[95%] mx-auto xl:flex xl:flex-row  lg:flex lg:flex-row md:flex md:flex-wrap gap-2 my-2 justify-center">
            <button className="rounded-full border border-slate-50 w-3 h-3 p-2 flex items-center  justify-center text-xs">
              M
            </button>
            <button className="rounded-full border border-slate-50 w-3 h-3 p-2 flex items-center  justify-center text-xs">
              T
            </button>
            <button className="rounded-full border border-slate-50 w-3 h-3 p-2 flex items-center  justify-center text-xs">
              W
            </button>
            <button className="rounded-full border border-slate-50 w-3 h-3 p-2 flex items-center  justify-center text-xs">
              T
            </button>
            <button className="rounded-full border border-slate-50 w-3 h-3 p-2 flex items-center  justify-center text-xs">
              F
            </button>
            <button className="rounded-full border border-slate-50 w-3 h-3 p-2 flex items-center  justify-center text-xs">
              S
            </button>
            <button className="rounded-full border border-slate-50 w-3 h-3 p-2 flex items-center  justify-center text-xs">
              S
            </button>
          </div>
          <div className="w-[95%] mx-auto p-2 my-2 h-24 rounded-md border border-[#A19595]">
            <h4 className="text-white font-medium xl:text-lg lg:text-lg md:text-base ">
              Total (09:30Am - 05:30Pm)
            </h4>
            <div className="flex flex-row justify-around">
              <span className="text-[#e0d8d8] font-medium text-sm ">
                Duration:9h 0m{" "}
              </span>
              <span className="text-[#e0d8d8] font-medium text-sm ">
                Break:9h 0m{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[40%] text-center">
          <h3 className="text-2xl text-white font-bold my-1">Action</h3>
          <div className="xl:w-[95%] lg:w-[95%] md:w-[95%] mx-auto p-2 my-2 h-24 xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flexcol gap-2 mt-8">
            <div className="xl:w-[60%] lg:w-[60%] md:w-[100%] xl:h-24 lg:h-24  border border-[#A19595] rounded-md text-center flex flex-col  justify-center">
              <h2 className="text-white font-semibold text-2xl my-2">
                04:04:39 PM
              </h2>
              <span className="text-[#e0d8d8] font-medium text-sm ">
                Wed 06, Dec 2023
              </span>
            </div>
            <div className="xl:w-[40%] lg:w-[40%] md:w-[100%] xl:flex xl:flex-col lg:flex lg:flex-col  md:flex md:flex-row  gap-3 xl:h-24 lg:h-24">
              <button className="rounded bg-orange-300 xl:p-2 lg:p-2 md:p-1 w-full text-black">
                Leave Request
              </button>
              <button className="rounded bg-orange-300 p-2 w-full text-black">
                Work From Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
