import React from "react";

const Banner = () => {
  return (
    <div
      data-aos="fade-up"
      className="relative w-full max-w-7xl mx-auto bg-teal-800 rounded-2xl overflow-hidden"
    >
      <div className="flex items-center justify-between p-8 md:p-12">
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold leading-tight mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>

          <p className="text-teal-100 text-sm md:text-base mb-8 leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-block bg-lime-400 hover:bg-lime-100  text-teal-900 font-semibold py-3 px-6 rounded-full transform transition-all duration-300 text-center  "
            >
              Become a Merchant
            </a>
            <a
              href="#"
              className="inline-block border-2 border-teal-300 hover:border-lime-400 hover:bg-lime-400 hover:text-teal-900  text-teal-100 font-semibold py-3 px-6 rounded-full transition-all duration-300 text-center transform hover:shadow-lg"
            >
              Earn with Pathao Courier
            </a>
          </div>
        </div>

        {/* Right illustration */}
        <div className="hidden md:block flex-1 max-w-sm ml-8">
          <div className="relative">
            {/* Package illustration */}
            <svg className="w-full h-auto" viewBox="0 0 300 200" fill="none">
              {/* Location pin */}
              <g transform="translate(200, 20)">
                <path
                  d="M20 5 C25 0, 35 0, 40 5 C45 10, 45 20, 40 25 L30 40 L20 25 C15 20, 15 10, 20 5 Z"
                  stroke="rgba(134, 239, 172, 0.8)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="30" cy="15" r="3" fill="rgba(134, 239, 172, 0.8)" />
              </g>

              {/* Main package */}
              <g transform="translate(50, 80)">
                <path
                  d="M0 40 L0 100 L120 100 L120 40 L60 20 L0 40 Z"
                  stroke="rgba(134, 239, 172, 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 40 L60 20 L120 40"
                  stroke="rgba(134, 239, 172, 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M60 20 L60 80"
                  stroke="rgba(134, 239, 172, 0.6)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Package tape */}
                <rect
                  x="35"
                  y="50"
                  width="50"
                  height="8"
                  stroke="rgba(134, 239, 172, 0.4)"
                  strokeWidth="1"
                  fill="none"
                />
              </g>

              {/* Small package */}
              <g transform="translate(80, 120)">
                <path
                  d="M0 25 L0 60 L70 60 L70 25 L35 10 L0 25 Z"
                  stroke="rgba(134, 239, 172, 0.5)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M0 25 L35 10 L70 25"
                  stroke="rgba(134, 239, 172, 0.5)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M35 10 L35 45"
                  stroke="rgba(134, 239, 172, 0.5)"
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>

              {/* Delivery path lines */}
              <path
                d="M230 35 Q180 50, 160 70 Q140 85, 120 100"
                stroke="rgba(134, 239, 172, 0.3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
