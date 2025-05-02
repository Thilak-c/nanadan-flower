"use client"
import React from "react";
import { motion } from "framer-motion";

const AchievementsSection = () => {
    const achievements = [
        {
            title: "50+ Weddings Hosted",
            link: "https://cdn-icons-png.flaticon.com/128/3906/3906130.png",
            description: "Creating unforgettable memories for couples.",
        },
        {
            title: "Award-Winning Decor",
            link: "https://cdn-icons-png.flaticon.com/128/1021/1021151.png",
            description: "Recognized for exceptional floral arrangements.",
        },
        {
            title: "100+ Happy Clients",
            link: "https://cdn-icons-png.flaticon.com/128/6012/6012670.png",
            description: "Customer satisfaction is our priority.",
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
                Our Achievements
            </motion.h2>

            <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="p-6 bg-white rounded-lg ale-105 transform transition-all"
                        >
                            <div className="flex justify-center">
                                <img
                                    className="w-20 h-20 object-contain"
                                    src={achievement.link}
                                    alt={achievement.title}
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-red-500 mb-2 mt-4">
                                {achievement.title}
                            </h3>
                            <p className="text-gray-700">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection; 