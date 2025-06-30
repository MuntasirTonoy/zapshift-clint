import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Banner1 from "../../assets/img/banner/banner1.png";
import Banner2 from "../../assets/img/banner/banner2.png";
import Banner3 from "../../assets/img/banner/banner3.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 mt-8">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label={label}
            >
              <FaChevronLeft />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label={label}
            >
              <FaChevronRight />
            </button>
          )
        }
      >
        <div>
          <img src={Banner1} alt="Banner 1" />
        </div>
        <div>
          <img src={Banner2} alt="Banner 2" />
        </div>
        <div>
          <img src={Banner3} alt="Banner 3" />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
