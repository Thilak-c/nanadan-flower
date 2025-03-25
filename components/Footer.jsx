'use client'
import React from 'react'
import { motion } from "framer-motion";
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous"></link>


const Footer = () => {
    return (
        <footer className="bg-gray-200 text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-6 gap-8">
                {/* About Us Section */}
                <motion.div
                    className="md:col-span-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-semibold text-red-400 border-b border-red-400 pb-2">
                        About Us
                    </h3>
                    <p className="text-sm text-gray-500 mt-4">
                        Welcome to{" "}
                        <span className="text-red-400 font-bold">
                            Nandan Flower
                        </span>
                        , where every occasion becomes a cherished memory.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        {[
                            {
                                icon: "facebook",
                                link: "https://www.instagram.com/thesinghcelebration/",
                            },
                            {
                                icon: "instagram",
                                link: "https://www.instagram.com/thesinghcelebration/",
                            },
                            {
                                icon: "twitter",
                                link: "https://www.instagram.com/thesinghcelebration/",
                            },
                            {
                                icon: "linkedin",
                                link: "https://www.instagram.com/thesinghcelebration/",
                            },
                            {
                                icon: "youtube",
                                link: "https://www.youtube.com/channel/UC3svN8FoR-XetWsZ8_OaMZw",
                            },
                        ].map((icon) => (
                            <motion.a
                                href={icon.link}
                                key={icon.icon}
                                className="w-10 h-10 flex items-center justify-center bg-gray-400 hover:bg-red-500 rounded-full transition-transform transform hover:scale-110 shadow-md"
                                whileHover={{ scale: 1.2 }}
                            >
                                <i className={`fab fa-${icon.icon} text-white text-lg`}></i>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="md:col-span-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-lg font-semibold text-red-400 border-b border-red-400 pb-2">
                        Contact Us
                    </h3>
                    <ul className="mt-4 space-y-2">
                        <li className="text-sm text-gray-500 flex items-start">
                            <i className="fas animate-bounce fa-map-marker-alt text-red-400 mr-3 mt-1"></i>
                            <span>
                                <strong className="text-red-400">Address:</strong>
                                254, Patliputra Colony, Patna 800013, Bihar
                            </span>
                        </li>
                        <li className="text-sm text-gray-500 flex items-start">
                            <i className="fas animate-bounce fa-phone text-red-400 mr-3 mt-1"></i>
                            <span>
                                <strong className="text-red-400">Phone:</strong>
                                (+91) 7979962614
                            </span>
                        </li>
                        <li className="text-sm text-gray-500 flex items-start">
                            <i className="fas animate-bounce fa-envelope text-red-400 mr-3 mt-1"></i>
                            <span>
                                <strong className="text-red-400">Email:</strong>
                                thesinghcelebrationguesthouse@gmail.com
                            </span>
                        </li>
                    </ul>
                </motion.div>

                {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-red-400 border-b border-red-400 pb-2">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Home", icon: "home", link: "/" },
                { name: "About", icon: "info-circle", link: "/about" },
                { name: "Gallery", icon: "images", link: "/gallery" },
                { name: "Services", icon: "briefcase", link: "/services" },
                { name: "Contact Us", icon: "envelope", link: "/contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="flex items-center text-sm text-gray-500 hover:text-red-400 transition"
                  >
                    <i
                      className={`fas fa-${link.icon} animate-bounce text-red-400 mr-2`}
                    ></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
                &copy; 2024 Nandan Flower. All Rights Reserved.
            </div>

            <div className="flex justify-center items-center mt-4">
                <hr className="w-1/4 border-gray-700" />
                <div className="px-4 text-red-400 rounded-full text-lg animate-pulse">
                    &hearts;
                </div>
                <hr className="w-1/4 border-gray-700" />
            </div>
            <a
                href="https://api.whatsapp.com/send?phone=+918008439762&amp;text=Hi, from the website (thesinghcelebration.in) wanna talk to you"
                target="_blank"
                rel="noreferrer nofollow"
            >
                <div className="text-center mt-2 text-sm cursor-pointer text-gray-500">
                    Made by{" "}
                    <span className="text-blue-400 hover:underline">
                        {" "}
                        &lt; Thilak / &gt;
                    </span>
                </div>
            </a>
        </footer>

    )
}

export default Footer