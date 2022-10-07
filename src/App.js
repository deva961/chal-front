import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import About from "./screens/About";
import Contact from "./screens/Contact";
import ProgramDetail from "./screens/ProgramDetail";
import Home from "./screens/Home";
import Immigration from "./screens/Immigration";
import School from "./screens/School";
import Students from "./screens/Students";
import CollegeDetail from "./screens/CollegeDetail";
import Login from "./screens/auth/Login";
import Dashboard from "./screens/admin/Dashboard";
import CollegesList from "./screens/admin/CollegesList";
import ProgramsList from "./screens/admin/ProgramsList";
import CreateCollege from "./screens/admin/CreateCollege";
import EditCollege from "./screens/admin/EditCollege";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="bg-gray-50">
      <ScrollTop />
      <ToastContainer />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses/:id" element={<ProgramDetail />} />
        <Route path="/colleges/:id" element={<CollegeDetail />} />
        <Route path="/schools" element={<School />} />
        <Route path="/immigration" element={<Immigration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/colleges" element={<CollegesList />} />
        <Route path="/admin/courses" element={<ProgramsList />} />
        <Route path="/admin/college/create" element={<CreateCollege />} />
        <Route path="/admin/college/edit/:id" element={<EditCollege />} />
      </Routes>
    </div>
  );
}

export default App;
