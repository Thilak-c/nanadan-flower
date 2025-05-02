"use client"
import React from "react";
import { motion } from "framer-motion";

const EventsSection = React.forwardRef((props, ref) => {
    const events = [
        {
            title: "Weddings",
            description: "Elegant and customized setups for your dream wedding.",
            icon: "https://static.thenounproject.com/png/34294-200.png",
        },
        {
            title: "Corporate Events",
            description: "Professional arrangements for your corporate gatherings.",
            icon: "https://cdn-icons-png.flaticon.com/512/2494/2494589.png",
        },
        {
            title: "Parties",
            description: "A lively atmosphere for your celebrations and parties.",
            icon: "https://cdn-icons-png.flaticon.com/512/1997/1997669.png",
        },
    ];

    return (
        <section ref={ref} className="py-12 px-6 md:px-12 bg-gray-50">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-red-500 text-center mb-6"
            >
                Events We Host
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="p-6 bg-white rounded-lg  hover:scale-105 transform transition-all"
                    >
                        <img
                            src={event.icon}
                            alt={`${event.title} Icon`}
                            className="w-16 h-16 mx-auto mb-4"
                            loading="lazy"
                        />
                        <h3 className="text-xl font-semibold text-red-500 mb-2">{event.title}</h3>
                        <p className="text-gray-700">{event.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
});

EventsSection.displayName = "EventsSection";

export default EventsSection; 