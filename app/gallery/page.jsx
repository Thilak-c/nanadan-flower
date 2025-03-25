"use client"
import React, { useState, useEffect } from "react";

// import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Gallery = () => {

  const [selectedIndex, setSelectedIndex] = useState(null); // Index of the currently selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  const [images, setImages] = useState([]);
  if (images) {
    console.log(images);
  }
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('/api/get-images');
      const data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);



  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPreviousImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="bg-gray-100 min-h-screen pt-[100px] py-10 px-4">
      <h1 className="text-center text-4xl font-bold text-red-500 mb-10">
        Our Gallery
      </h1>

      <div>
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((url, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => openModal(index)}
            >

              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="animate-fade-in object-cover w-full h-60 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={closeModal}
            >

              &times;
            </button>

            {/* Zoomed Image */}
            <div className="relative">
              <img
                src={images[selectedIndex]}
                alt={`Zoomed Image ${selectedIndex + 1}`}
                className="max-w-full max-h-screen rounded-lg"
              />
            </div>

            {/* Left Navigation Arrow */}
            <button
              onClick={showPreviousImage}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-5 text-white rounded-full p-3 hover:bg-opacity-15"
            >
            {`<`}
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={showNextImage}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-5 text-white rounded-full p-3 hover:bg-opacity-15"
            >
            {`>`}
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Gallery;
