"use client"
import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ onScroll }) => {
    return (
        <section
            className="relative bg-[url('/hero-flower.jpg')] bg-cover bg-center h-screen flex items-center justify-center bg-fixed"
            role="banner"
            aria-label="Welcome to Nandan Flower"
        >
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            <div className="text-center px-4 md:px-12 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl text-white font-light mb-4"
                >
                    Welcome to Nandan Flower
                    <p className="text-green-400 font-light text-sm mt-2">By Sharda Enterprises</p>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-100 mb-8"
                >
                    Bringing the beauty of nature to your special moments.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onClick={onScroll}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg  transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label="Explore our services"
                >
                    Explore Now
                </motion.button>
            </div>
        </section>
    );
};

export default HeroSection; 