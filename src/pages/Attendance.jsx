import React from "react";
import Header from "../components/Header";
import AttendanceStatus from "../components/AttendanceStatus";
import LogsRequests from "../components/LogsRequests";
export default function Attendance() {
  return (
    <div className="xl:w-full lg:w-full">
      <Header />
      <AttendanceStatus />
      <LogsRequests />
    </div>
  );
}
