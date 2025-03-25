"use client"
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import ContactUs from "@/components/contact-us-com";

const HomePage = () => {

  const [selectedIndex, setSelectedIndex] = useState(null); // Index of the currently selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  const targetRef = useRef(null);
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
  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-[url('/hero-flower.jpg')]  bg-cover bg-center  h-screen flex items-center justify-center bg-fixed">

        <div className="text-center px-4 md:px-12">
          <h1 className="text-4xl md:text-6xl text-white font-light mb-4 transform transition-all hover:scale-110 duration-300">
            Welcome to Nandan Flower
            <p className="text-green-600 font-light text-sm">By Sharda Enterprises</p>
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-8 transform transition-all hover:scale-105 duration-300">
            Bringing the beauty of nature to your special moments.
          </p>
          <button  onClick={handleScroll} className="animate-bounce bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-br text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition transform hover:scale-105">
            Explore Now
          </button>
        </div>
      </section>

      {/* Past Guests Section */}

      {/* Events We Host Section */}
      <section ref={targetRef} className="py-12 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-red-500 text-center mb-6">
          Events We Host
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="https://static.thenounproject.com/png/34294-200.png"
              alt="Wedding Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-red-500 mb-2">Weddings</h3>
            <p className="text-gray-700">
              Elegant and customized setups for your dream wedding.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2494/2494589.png"
              alt="Corporate Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-red-500 mb-2">Corporate Events</h3>
            <p className="text-gray-700">
              Professional arrangements for your corporate gatherings.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1997/1997669.png"
              alt="Party Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-red-500 mb-2">Parties</h3>
            <p className="text-gray-700">
              A lively atmosphere for your celebrations and parties.
            </p>
          </div>
        </div>
      </section>
      <section   className="py-12 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-red-500 text-center mb-6">
          Past Guests
        </h2>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 mb-4">
            We have had the honor of hosting guests from various industries, including celebrities, influencers, and corporate clients. Here’s what some of them had to say:
          </p>
          <div className="lg:flex justify-center md:space-x-8 space-y-8 md:space-y-0">
            <div className="p-6 bg-white    rounded-lg shadow-lg">
              <p className="text-xl font-semibold">John Doe</p>
              <p className="text-gray-600">"A truly unforgettable experience! The decorations and hospitality were beyond exceptional."</p>
            </div>
            <div className="p-6 bg-white  rounded-lg shadow-lg">
              <p className="text-xl font-semibold">Sarah Lee</p>
              <p className="text-gray-600">"I couldn't have asked for a better place to host my wedding. Everything was perfect!"</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-red-500 text-center mb-6">
          Our Achievements
        </h2>
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "50+ Weddings Hosted", link: "https://cdn-icons-png.flaticon.com/128/3906/3906130.png", description: "Creating unforgettable memories for couples." },
              { title: "Award-Winning Decor", link: "https://cdn-icons-png.flaticon.com/128/1021/1021151.png", description: "Recognized for exceptional floral arrangements." },
              { title: "100+ Happy Clients", link: "https://cdn-icons-png.flaticon.com/128/6012/6012670.png", description: "Customer satisfaction is our priority." },
            ].map((achievement, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center">

                  <img className="flex justify-center w-20" sizes="10" src={`${achievement.link}`} alt="" />
                </div>
                <h3 className="text-xl font-semibold text-red-500 mb-2">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-red-500 text-center mb-6">
          What Our Guests Say
        </h2>
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            {[{ name: "Alice Smith", review: "Absolutely loved the service and ambiance. Highly recommend!", rating: 5 },
            { name: "David Miller", review: "A wonderful experience! Every detail was taken care of.", rating: 4 }].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
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
                    >
                      <path d="M12 .587l3.668 7.571 8.332 1.213-6.084 5.944 1.432 8.185-7.348-3.87-7.348 3.87 1.432-8.185-6.084-5.944 8.332-1.213L12 .587z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
      {/* Why Choose Us Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-red-500 text-center mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4185/4185148.png"
              alt="Trust Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-red-500 mb-2">Trusted Service</h3>
            <p className="text-gray-700">We pride ourselves on our professionalism and attention to detail.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5619/5619116.png"
              alt="Quality Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-red-500 mb-2">High-Quality Décor</h3>
            <p className="text-gray-700">We offer top-notch floral arrangements and decor that leave lasting impressions.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/512/17311/17311796.png"
              alt="Dedication Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-red-500 mb-2">Passionate Team</h3>
            <p className="text-gray-700">Our dedicated team ensures every detail exceeds your expectations.</p>
          </div>
        </div>
      </section>
      <ContactUs />
      {/* Map Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-red-500 text-center mb-6">
          Find Us Here
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-64 mb-8">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.3152963621017!2d85.10317696956206!3d25.629455607743814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140d7e77cff68bfd%3A0xd4736649c122d338!2sNanadan%20Flower%20%26%20Wedding%20Planner!5e0!3m2!1sen!2sin!4v1737506053414!5m2!1sen!2sin"
              className="absolute w-full h-full border-0"
            />
          </div>
          <p className="text-center text-gray-700">Our guest house is located in the heart of the city. Easily accessible for all events and gatherings.</p>
        </div>
      </section>

      {/* Footer Section */}
 
    </div>
  );
};

export default HomePage;
