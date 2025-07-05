import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReviewsCard from "./ReviewsCard";
import "../../index.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    quote: "Excellent product. Very high quality and great customer service!",
    position: "CEO",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    name: "Jane Smith",
    quote: "Absolutely love it! Highly recommend to everyone.",
    position: "Seller",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    name: "Alex Johnson",
    quote: "Good value for the price. Would definitely buy again.",
    position: "Managing Director",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    name: "Emily Davis",
    quote: "Fantastic design and usability. Five stars!",
    position: "Executive Marchent",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
  },
];

const ReviewSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for refs to be set
    setIsReady(true);
  }, []);

  return (
    <div>
      <h1 className="md:text-5xl text-2xl text-teal-900 text-center my-20 font-extrabold mb-10">
        Reviews
      </h1>
      <div className="relative w-full max-w-5xl mx-auto px-4 py-10 mb-10 ">
        {isReady && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={5}
            centeredSlides={true}
            slidesPerView={1.2}
            loopedSlides={reviews.length}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.3 },
            }}
            className="!overflow-visible"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewsCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <div
            ref={prevRef}
            className="bg-gray-800  text-white  p-2 rounded-full cursor-pointer shadow-md hover:bg-opacity-90"
          >
            <FaChevronLeft />
          </div>
          <div>
            <div className="custom-swiper-pagination"></div>
          </div>
          <div
            ref={nextRef}
            className="bg-gray-800  text-white  p-2 rounded-full cursor-pointer shadow-md hover:bg-opacity-90"
          >
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
