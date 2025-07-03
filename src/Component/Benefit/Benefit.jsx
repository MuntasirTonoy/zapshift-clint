import React from "react";

// Example image imports (replace with your own)
import imgTracking from "../../assets/img/live-tracking.png";
import imgDelivery from "../../assets/img/safe-delivery.png";

const Benefit = () => {
  const benefits = [
    {
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
      image: imgTracking,
    },
    {
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: imgDelivery,
    },
    {
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: imgDelivery,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      {benefits.map((item, index) => (
        <div
          key={index}
          data-aos="fade-right"
          data-aos-delay={index * 200}
          className="flex items-center gap-6 bg-gray-100 rounded-xl p-6 md:p-8 "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-28 h-28 object-contain"
          />
          <div className="h-36 border-l-2 border-dashed border-gray-400"></div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefit;
