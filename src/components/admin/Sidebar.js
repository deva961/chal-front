import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbBuildingCommunity } from "react-icons/tb";
import { MdLibraryBooks } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ active }) {
  const location = useLocation();
  const path = location.pathname;
  const [activeScreen, setActiveScreen] = useState();
  useEffect(() => {
    setActiveScreen(path);
  }, [path]);
  return (
    <div
      className={`${
        active ? "w-72" : "w-16"
      } bg-white border-r duration-300 border-gray-100`}
    >
      <Link to="/admin/dashboard">
        <img
          src={require("../../assets/logo.png")}
          className="mx-auto mt-3 h-16"
          alt=""
        />
      </Link>

      <div className="flex flex-col space-y-1 mt-12">
        <Link
          to="/admin/dashboard"
          className={`${
            activeScreen === "/admin/dashboard"
              ? "text-white bg-blue-700"
              : "text-gray-500"
          } flex items-center p-4 `}
        >
          <FaHome className="mr-3" size={22} />
          <span className={`font-semibold ${active ? "block" : "hidden"}`}>
            Dashboard
          </span>
        </Link>

        <Link
          to="/admin/colleges"
          className={`${
            activeScreen === "/admin/colleges"
              ? "text-white bg-blue-700"
              : "text-gray-500"
          } flex items-center p-4 `}
        >
          <TbBuildingCommunity className="mr-3" size={22} />
          <span className={`font-semibold ${active ? "block" : "hidden"}`}>
            Colleges
          </span>
        </Link>

        <Link
          to="/admin/courses"
          className={`${
            activeScreen === "/admin/courses"
              ? "text-white bg-blue-700"
              : "text-gray-500"
          } flex items-center p-4 `}
        >
          <MdLibraryBooks className="mr-3" size={22} />
          <span className={`font-semibold ${active ? "block" : "hidden"}`}>
            Programs
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
