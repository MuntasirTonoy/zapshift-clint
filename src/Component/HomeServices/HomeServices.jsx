import React from "react";
import icon from "../../assets/img/service.png";

const HomeServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
      isHighlighted: false,
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      isHighlighted: true,
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      isHighlighted: false,
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      isHighlighted: false,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      isHighlighted: false,
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      isHighlighted: false,
    },
  ];

  const ServiceIcon = () => (
    <div className="w-16 h-16 mb-6 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
      <div className="relative">
        <img src={icon} alt="" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      data-aos="fade-up"
      className="bg-teal-950 py-16 px-8 container my-10 mx-auto rounded-2xl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center ${
                service.isHighlighted
                  ? "bg-lime-400 text-gray-800"
                  : "bg-white text-gray-800"
              }`}
            >
              <ServiceIcon />

              <h3 className="text-xl font-semibold mb-4 leading-tight">
                {service.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  service.isHighlighted ? "text-gray-700" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
