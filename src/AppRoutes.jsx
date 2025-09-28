import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./page/Signup";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
