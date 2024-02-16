import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Works from "../Pages/Works/Works";
import Contact from "../Pages/Contact/Contact";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Skills />} path="/skills" />
        <Route element={<Works />} path="/works" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </div>
  );
};

export default Router;
