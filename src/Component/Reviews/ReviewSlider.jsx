import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"; // Ensure you have the correct path to your CSS file
import quoteIcon from "../../assets/img/reviewQuote.png";

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      quote:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Awlad Hossin",
      role: "Senior Product Designer",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740",
    },
    {
      quote:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Rasel Ahamed",
      role: "CTO",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740",
    },
    {
      quote:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Nasir Uddin",
      role: "CEO",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4  text-center">Review Slider</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {cards.map((card) => (
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm h-full max-w-md ">
              <div className="mb-2">
                <img src={quoteIcon} alt="" />
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                {card.quote}
              </p>
              <div className="border-t border-dashed border-teal-300 mb-4"></div>
              <div className="flex items-center gap-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-12 h-12 rounded-full object-cover bg-teal-900"
                />
                <div>
                  <h4 className="font-bold text-teal-900">{card.name}</h4>
                  <p className="text-sm text-gray-600">{card.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom Arrow Components with React Icons
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow `}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export default ReviewSlider;
