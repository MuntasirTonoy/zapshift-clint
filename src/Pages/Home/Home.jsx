import React from "react";
import Hero from "../../Component/Hero/Hero";
import How from "../../Component/How/How";
import HomeServices from "../../Component/HomeServices/HomeServices";
import Benefit from "../../Component/Benefit/Benefit";
import ReviewSlider from "../../Component/Reviews/ReviewSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <How />
      <HomeServices />
      <Benefit />
      <ReviewSlider />
    </div>
  );
};

export default Home;
