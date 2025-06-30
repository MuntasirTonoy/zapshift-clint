import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "../../index.css";
import Home from "../Home/Home";
import { Outlet } from "react-router";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
