import React, { useState } from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

function Dashboard() {
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="flex flex-row h-screen">
        <Sidebar active={active} />
        <div className="flex-auto bg-gray-50 overflow-auto">
          <Navbar handleActive={handleActive} />
          <p>Dashboard</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
