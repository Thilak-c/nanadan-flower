"use client"
import React from "react";
import { motion } from "framer-motion";

const ReviewsSection = () => {
    const reviews = [
        {
            name: "Alice Smith",
            review: "Absolutely loved the service and ambiance. Highly recommend!",
            rating: 5,
        },
        {
            name: "David Miller",
            review: "A wonderful experience! Every detail was taken care of.",
            rating: 4,
        },
    ];

    return (
        <section className="py-12 px-6 md:px-12 bg-gray-100">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold text-red-500 text-center mb-6"
            >
                What Our Guests Say
            </motion.h2>

            <div className="max-w-6xl mx-auto text-center">
                <div className="space-y-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-lg "
                        >
                            <p className="text-xl font-semibold text-red-500">{review.name}</p>
                            <p className="text-gray-700 mb-4">{review.review}</p>
                            <div className="flex justify-center space-x-1">
                                {[...Array(5)].map((_, starIndex) => (
                                    <svg
                                        key={starIndex}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-5 h-5 ${starIndex < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 .587l3.668 7.571 8.332 1.213-6.084 5.944 1.432 8.185-7.348-3.87-7.348 3.87 1.432-8.185-6.084-5.944 8.332-1.213L12 .587z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="sr-only">{review.rating} out of 5 stars</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection; 