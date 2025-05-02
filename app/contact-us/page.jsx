"use client"
import { useState } from "react";
import React from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Data submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Failed to submit data.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }
  };


  return (
    <div className="bg-gray-100 text-black">

      {/* Contact Section */}
      <div className="container mx-auto pt-[150px] py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg 
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-400">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="peer w-full px-4  py-2 text-gray-700 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="peer w-full px-4 py-2 text-gray-700 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="peer w-full px-4 py-2 text-gray-700 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="peer w-full px-4 py-2 text-gray-700 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {responseMessage && (
        <p className="mt-4 text-sm text-green-600">{responseMessage}</p>
      )}
    </div>

        {/* Contact Details */ }
  <div className="space-y-8">
    <div className="flex items-center space-x-4 p-6 bg-gray-100 rounded-lg shadow200 transition transform hover:-translate-y-1">
      <div className="text-blue-400 text-3xl  animate-bounce">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Our Address</h3>
        <p className="text-gray-400">Nera sai mandir,patliputra polytechnic more, Bihar 800013</p>
      </div>
    </div>
    <div className="flex items-center space-x-4 p-6 bg-gray-100 rounded-lg shadow200 transition transform hover:-translate-y-1">
      <div className="text-blue-400 text-3xl animate-spin">
        <div className="fas fa-phone-alt"></div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Call Us</h3>
        <p className="text-gray-400">(+91) 7979962614</p>
        <p className="text-gray-400">(+91) 9304991017</p>
      </div>
    </div>
    {/* <div className="flex items-center space-x-4 p-6 bg-gray-100 rounded-lg shadow:bg-gray-200 transition transform hover:-translate-y-1">
            <div className="text-blue-400 text-3xl animate-bounce">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-gray-400">thesinghcelebration@gmail.com</p>
            </div> 
          </div> */}
  </div>
      </div >

  {/* Map Section */ }
  < section className = "py-12 px-6 md:px-12 bg-gray-100" >
        <h2 className="text-3xl font-semibold text-red-500 text-center mb-6">
          Find Us Here
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-72 mb-8">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.3152963621017!2d85.10317696956206!3d25.629455607743814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140d7e77cff68bfd%3A0xd4736649c122d338!2sNanadan%20Flower%20%26%20Wedding%20Planner!5e0!3m2!1sen!2sin!4v1737506053414!5m2!1sen!2sin"
              className="absolute w-full h-full border-0"
            />
          </div>
          <p className="text-center text-gray-700">Our guest house is located in the heart of the city. Easily accessible for all events and gatherings.</p>
        </div>
      </section >

  {/* Footer */ }

    </div >
  );
};

export default ContactUs;
