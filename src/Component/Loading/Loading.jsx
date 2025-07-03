import React from "react";

import Lottie from "lottie-react";
import animationData from "../../assets/animations/loading.json"; // Adjust the path as necessary
const Loading = () => {
  return (
    <div>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loading;
