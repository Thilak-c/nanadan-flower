"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full font-sans z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent bg-opacity-40"
        }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <a href="/">
            <img
              src="ChatGPT_Image_May_26__2025__11_51_06_PM-removebg-preview.png"
              className="cursor-pointer w-12 md:w-[70px] rounded-full"
              alt="Logo"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex space-x-8 text-sm font-medium ${isScrolled ? "text-[#ad8b3a]" : "text-white"
          }`}>
          {/* <li className="hover:text-gray-300 text-lg cursor-pointer">Destinations</li>
          <li className="hover:text-gray-300 text-lg cursor-pointer">Hotels</li>
          <li className="hover:text-gray-300 text-lg cursor-pointer">Dining</li>
          <li className="hover:text-gray-300 text-lg cursor-pointer">Offers</li>
          <li className="hover:text-gray-300 text-lg cursor-pointer">Memberships</li>
          <li className="hover:text-gray-300 text-lg cursor-pointer">More</li> */}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-2xl ${isScrolled ? "text-black" : "text-white"
              } focus:outline-none`}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">

          <a href="tel:+917979962614">
            <button className="bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600">
              Book a Stay
            </button>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 text-white fixed top-16 left-0 w-full p-6 z-40">
          <ul className="flex flex-col space-y-4 text-center">
            {/* <li className="hover:text-yellow-500 text-lg cursor-pointer">Destinations</li>
            <li className="hover:text-yellow-500 text-lg cursor-pointer">Hotels</li>
            <li className="hover:text-yellow-500 text-lg cursor-pointer">Dining</li>
            <li className="hover:text-yellow-500 text-lg cursor-pointer">Offers</li>
            <li className="hover:text-yellow-500 text-lg cursor-pointer">Memberships</li>
            <li className="hover:text-yellow-500 text-lg cursor-pointer">More</li> */}
            <a href="tel:+917979962614">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-yellow-600">
                Book a Stay
              </button>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
