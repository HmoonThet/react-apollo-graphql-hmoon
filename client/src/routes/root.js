import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

const root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people/:id" element={<Details />} />
    </Routes>
  );
};

export default root;
