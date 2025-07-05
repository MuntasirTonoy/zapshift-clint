import React from "react";
import quoteIcon from "../../assets/img/reviewQuote.png";
const ReviewsCard = ({ review }) => {
  const { image, name, position, quote } = review;

  return (
    <div>
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm h-full max-w-md ">
        <div className="mb-2">
          <img src={quoteIcon} alt="" />
        </div>
        <p className="text-sm md:text-base line-clamp-2 h-20  text-gray-700 mb-6">
          {quote}
        </p>
        <div className="border-t border-dashed border-teal-300 mb-4"></div>
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt=""
            className="w-12 h-12 rounded-full object-cover bg-teal-900"
          />
          <div>
            <h4 className="font-bold text-teal-900">{name}</h4>
            <p className="text-sm text-gray-600">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
