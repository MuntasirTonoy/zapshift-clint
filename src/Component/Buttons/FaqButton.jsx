import React from "react";

const FAQButton = () => {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          {/* Green button with text */}
          <a
            href="#"
            className="bg-lime-300  text-gray-800 font-semibold text-xl px-12 py-4 rounded-full transition-all duration-300 hover:bg-lime-500"
          >
            See More FAQ's
          </a>

          {/* Dark circle with arrow */}
          <div className="bg-gray-800 hover:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center ml-1 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <svg
              className="w-6 h-6 text-lime-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M7 17l9.2-9.2M17 17V7H7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQButton;
