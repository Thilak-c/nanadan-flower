"use client"
import React from "react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
    const features = [
        {
            title: "Trusted Service",
            description: "We pride ourselves on our professionalism and attention to detail.",
            icon: "https://cdn-icons-png.flaticon.com/512/4185/4185148.png",
        },
        {
            title: "High-Quality Décor",
            description: "We offer top-notch floral arrangements and decor that leave lasting impressions.",
            icon: "https://cdn-icons-png.flaticon.com/512/5619/5619116.png",
        },
        {
            title: "Passionate Team",
            description: "Our dedicated team ensures every detail exceeds your expectations.",
            icon: "https://cdn-icons-png.flaticon.com/512/17311/17311796.png",
        },
    ];

    return (
        <section className="py-12 px-6 md:px-12 bg-gray-50">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-red-500 text-center mb-6"
            >
                Why Choose Us?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="p-6 bg-white rounded-lg  hover:scale-105 transform transition-all"
                    >
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-16 h-16 mx-auto mb-4"
                            loading="lazy"
                        />
                        <h3 className="text-xl font-semibold text-red-500 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUsSection; 