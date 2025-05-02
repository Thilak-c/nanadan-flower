"use client"
import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
    return (
        <section className="py-12 px-6 md:px-12 bg-gray-100">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-red-500 text-center mb-6"
            >
                Find Us Here
            </motion.h2>

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-64 mb-8 rounded-lg overflow-hidden "
                >
                    <iframe
                        title="Nandan Flower Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.3152963621017!2d85.10317696956206!3d25.629455607743814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140d7e77cff68bfd%3A0xd4736649c122d338!2sNanadan%20Flower%20%26%20Wedding%20Planner!5e0!3m2!1sen!2sin!4v1737506053414!5m2!1sen!2sin"
                        className="absolute w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-gray-700"
                >
                    Our guest house is located in the heart of the city. Easily accessible for all events and gatherings.
                </motion.p>
            </div>
        </section>
    );
};

export default MapSection; 