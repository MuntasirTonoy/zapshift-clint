import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import logo from "../../assets/img/logo.png"; // Assuming you have a logo image
const Footer = () => {
  return (
    <footer className="container mx-auto  ">
      <div className=" md:m-5 mx-w-7xl md:rounded-2xl bg-black text-white py-16 px-8 mx-auto text-center">
        {/* Logo and Brand */}
        <div className="mb-8">
          <div className="flex  justify-center items-end mb-6">
            <img src={logo} alt="Profast Logo" className="-mr-3" />{" "}
            <span className="text-2xl font-bold">ZapShift</span>
          </div>

          {/* Tagline */}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Dotted Line */}
        <div className="border-t border-dotted border-gray-600 mb-8"></div>

        {/* Navigation Links */}
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-8 text-gray-300">
            <li>
              <a
                href="#services"
                className="hover:text-white transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#coverage"
                className="hover:text-white transition-colors duration-200"
              >
                Coverage
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-white transition-colors duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <BsLinkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-black border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
            aria-label="Twitter"
          >
            <BsTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
            aria-label="Facebook"
          >
            <BsFacebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
            aria-label="YouTube"
          >
            <BsYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
