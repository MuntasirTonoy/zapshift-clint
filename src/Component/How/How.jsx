import React from "react";
import bookingIcon from "../../assets/img/bookingIcon.png"; // Assuming you have an icon image
const How = () => {
  const services = [
    {
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  const ServiceIcon = () => (
    <div className="w-16 h-16 mb-6 mx-auto flex items-center justify-center">
      <div className="relative">
        <img src={bookingIcon} alt="" />
      </div>
    </div>
  );

  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* Dotted Border Container */}
      <div className="max-w-7xl  mx-auto  p-12">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          How It Works
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-lg p-8 text-left shadow-sm"
            >
              <ServiceIcon />

              <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
