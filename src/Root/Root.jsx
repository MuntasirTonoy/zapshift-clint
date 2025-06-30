import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero"; // Assuming you have a Hero component
import "../index.css"; // Assuming you have some styles for the root component
const Root = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Root;
