import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Replace this with your image
import imgIcon from "../../assets/img/customer-top.png";
import quoteIcon from "../../assets/img/reviewQuote.png";

const testimonials = [
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

const ReviewSlider = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <img src={imgIcon} alt="quote" className="mx-auto mb-4 h-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          What our customers are sayings
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="relative pb-20">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} w-3 h-3 rounded-full inline-block mx-1 bg-gray-300 cursor-pointer hover:bg-teal-400 transition-all duration-300 hover:scale-110"></span>`,
          }}
          loop={true}
          className="mb-8"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm h-full max-w-md mx-auto">
                <div className="mb-2">
                  <img src={quoteIcon} alt="" />
                </div>
                <p className="text-sm md:text-base text-gray-700 mb-6">
                  {item.quote}
                </p>
                <div className="border-t border-dashed border-teal-300 mb-4"></div>
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover bg-teal-900"
                  />
                  <div>
                    <h4 className="font-bold text-teal-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optimized Bottom Navigation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
            {/* Previous Button */}
            <button className="prev-btn group relative w-11 h-11 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg">
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {/* Hover effect ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-300/30 transition-colors duration-200"></div>
            </button>

            {/* Enhanced Pagination Dots */}
            <div className="swiper-pagination flex items-center gap-2 px-3"></div>

            {/* Next Button */}
            <button className="next-btn group relative w-11 h-11 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg">
              <svg
                className="w-5 h-5 text-white group-hover:text-lime-50 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {/* Hover effect ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-lime-300/40 transition-colors duration-200"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background-color: #d1d5db !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet:hover {
          background-color: #14b8a6 !important;
          transform: scale(1.1) !important;
        }

        .swiper-pagination-bullet-active {
          width: 32px !important;
          border-radius: 12px !important;
          background: linear-gradient(to right, #84cc16, #65a30d) !important;
          transform: scale(1) !important;
        }

        .swiper-pagination-bullet-active:hover {
          background: linear-gradient(to right, #65a30d, #4d7c0f) !important;
        }
      `}</style>
    </div>
  );
};

export default ReviewSlider;
