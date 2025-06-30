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

      <div className="relative pb-16">
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
              `<span class="${className} w-2 h-2 rounded-full inline-block mx-1 bg-gray-300 cursor-pointer hover:bg-teal-400 transition-colors"></span>`,
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

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3">
          {/* Previous Button */}
          <button className="prev-btn w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
            <svg
              className="w-5 h-5"
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
          </button>

          {/* Pagination Dots */}
          <div className="swiper-pagination flex items-center gap-2 px-2"></div>

          {/* Next Button */}
          <button className="next-btn w-10 h-10 bg-lime-400 text-white rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors shadow-sm">
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet-active {
          background-color: #14b8a6 !important;
        }
      `}</style>
    </div>
  );
};

export default ReviewSlider;
