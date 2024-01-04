import React, { useState } from "react";
import { FaBars, FaClock } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export default function LogsRequests() {
  const [active, setActive] = useState(0);
  return (
    <>
      <h3 className="text-2xl text-white font-bold my-4 ">Logs & Requests</h3>
      <button className="bg-orange-300 border border-orange-300 text-white font-semibold rounded-l-md p-3">
        Attendance Log
      </button>
      <button className="border border-[#A19595] text-white font-semibold rounded-r-md p-3">
        Attendance Requests
      </button>
      <div className="overflow-x-auto border-[#A19595] border my-2 rounded-md ">
        <div className="w-full flex flex-row gap-2 my-2">
          <div className="w-[30%]">
            <h3 className="text-2xl text-white font-bold px-2">
              December, 2023
            </h3>
          </div>
          <div className="w-[50%] flex flex-row">
            <button className="bg-orange-300 border border-orange-300 text-white font-semibold rounded-l-md p-3">
              30 Days
            </button>
            <button className="border border-[#A19595] text-white font-semibold  p-3">
              Nov
            </button>
            <button className="border border-[#A19595] text-white font-semibold  p-3">
              Nov
            </button>
            <button className="border border-[#A19595] text-white font-semibold  p-3">
              Nov
            </button>
            <button className="border border-[#A19595] text-white font-semibold  p-3">
              Nov
            </button>
            <button className="border border-[#A19595] text-white font-semibold  p-3">
              Nov
            </button>
            <button className="border border-[#A19595] text-white font-semibold  p-3">
              Nov
            </button>
            <button className="border border-[#A19595] text-white font-semibold rounded-r-md p-3">
              Nov
            </button>
          </div>
          <div className="w-[20%] flex flex-row">
            <button className="bg-orange-300 border border-orange-300 text-white font-semibold rounded-l-md p-3">
              <FaBars size={20} />
            </button>
            <button className="border border-[#A19595] text-white font-semibold  rounded-r-md p-3">
              <SlCalender size={20} />
            </button>
          </div>
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Attendance Visual</th>
              <th>Effective Hours</th>
              <th>Gross Hours</th>
              <th>Extra Hours</th>
              <th>Arrival</th>
              <th>Log</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
            <tr>
              <th>2023-12-20</th>
              <td>Present</td>
              <td className="flex flex-row gap-1">
                <FaClock size={20} /> 8h 15m{" "}
              </td>
              <td>8h 15m</td>
              <td>8h 15m</td>
              <td>On Time</td>
              <td>
                <IoCheckmarkDoneCircleOutline
                  size={20}
                  className="text-green-500"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
