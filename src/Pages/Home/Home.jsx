import React from "react";
import Hero from "../../Component/Hero/Hero";
import How from "../../Component/How/How";
import HomeServices from "../../Component/HomeServices/HomeServices";
import Benefit from "../../Component/Benefit/Benefit";
import ReviewSlider from "../../Component/Reviews/ReviewSlider";
import Banner from "../../Component/Banner/Banner";
import Accordian from "../../Component/Accordian/Accordian";
import Company from "../../Component/Company/Company";

const Home = () => {
  return (
    <div>
      <Hero />
      <How />
      <HomeServices />
      <Company />
      <Benefit />
      <Banner />
      <ReviewSlider />
      <Accordian />
    </div>
  );
};

export default Home;
