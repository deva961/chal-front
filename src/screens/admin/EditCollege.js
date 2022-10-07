import React, { useState } from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

function EditCollege() {
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
          <div className="m-5 bg-white rounded border border-gray-100 shadow p-5">
            <p className="font-semibold text-xl mb-3">Edit College</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCollege;
