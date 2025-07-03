import React from "react";
import casioLogo from "../../assets/img/brands/casio.png";
import amazonLogo from "../../assets/img/brands/amazon.png";
import moonstarLogo from "../../assets/img/brands/moonstar.png";
import starPlusLogo from "../../assets/img/brands/start.png";
import startPeopleLogo from "../../assets/img/brands/start-people1.png";
import randstadLogo from "../../assets/img/brands/randstad.png";

const Company = () => {
  const companies = [
    {
      id: 1,
      name: "CASIO",
      alt: "CASIO logo",
      link: casioLogo,
    },
    {
      id: 2,
      name: "Amazon",
      alt: "Amazon logo",
      link: amazonLogo,
    },
    {
      id: 3,
      name: "Moonstar",
      alt: "Moonstar logo",
      link: moonstarLogo,
    },
    {
      id: 4,
      name: "Star Plus",
      alt: "Star Plus logo",
      link: starPlusLogo,
    },
    {
      id: 5,
      name: "Start People",
      alt: "Start People logo",
      link: startPeopleLogo,
    },
    {
      id: 6,
      name: "Randstad",
      alt: "Randstad logo",
      link: randstadLogo,
    },
  ];

  return (
    <div data-aos="fade-up" className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-800 ">
            We've helped thousands of sales teams
          </h2>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center h-12 min-w-32 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={company.link}
                alt={company.alt}
                className="max-h-12 max-w-32 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom border line */}
        <div className="mt-8 pt-8">
          <div className="border-t-2 border-dashed border-gray-400/30"></div>
        </div>
      </div>
    </div>
  );
};

export default Company;
