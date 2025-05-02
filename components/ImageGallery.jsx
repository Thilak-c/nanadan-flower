"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch('/api/get-images');
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
                setError('Failed to load images. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        }
        fetchImages();
    }, []);

    const openModal = (index) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedIndex(null);
        document.body.style.overflow = 'unset';
    };

    const showNextImage = () => {
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const showPreviousImage = () => {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;

            switch (e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);

    return (
        <div className="bg-gray-100 min-h-screen pt-[100px] py-10 px-4">
            <h1 className="text-center text-4xl font-bold text-red-500 mb-10">
                Our Gallery
            </h1>

            {isLoading ? (
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
                </div>
            ) : error ? (
                <div className="text-center text-red-500 py-8">
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {images.map((url, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer aspect-square"
                                onClick={() => openModal(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        openModal(index);
                                    }
                                }}
                            >
                                <img
                                    src={url}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <div className="relative max-w-4xl w-full mx-4">
                            <button
                                className="absolute top-5 right-5 text-white text-2xl hover:text-red-500 transition-colors"
                                onClick={closeModal}
                                aria-label="Close modal"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative"
                            >
                                <img
                                    src={images[selectedIndex]}
                                    alt={`Gallery image ${selectedIndex + 1}`}
                                    className="max-w-full max-h-[80vh] rounded-lg object-contain mx-auto"
                                />
                                <p className="text-white text-center mt-2">
                                    Image {selectedIndex + 1} of {images.length}
                                </p>
                            </motion.div>

                            <button
                                onClick={showPreviousImage}
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-all"
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={showNextImage}
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-all"
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageGallery; 