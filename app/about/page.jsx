import React from "react";

const About = () => {
    return (
        <div className="bg-white text-gray-900 pt-20">
            {/* Hero Section */}
            <div className="text-center py-16 bg-gray-100">
                <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
                <p className="text-lg md:text-xl mt-4 text-gray-700 max-w-3xl mx-auto">
                    Welcome to <span className="text-blue-600 font-semibold">Nandan Flower</span>, where every occasion becomes an unforgettable memory. From grand weddings to intimate celebrations, we turn dreams into reality.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="py-12 bg-gray-50">
                <h2 className="text-4xl font-bold text-center text-blue-600">Our Mission</h2>
                <p className="text-gray-700 text-center mt-4 text-lg max-w-3xl mx-auto">
                    To create extraordinary moments that last a lifetime by providing world-class event services and an atmosphere of elegance, warmth, and perfection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Excellence in Service",
                            description: "We ensure every detail is managed with precision and professionalism.",
                            icon: "🏆",
                        },
                        {
                            title: "Memorable Experiences",
                            description: "Crafting events that leave a lasting impression on you and your guests.",
                            icon: "🎉",
                        },
                        {
                            title: "Sustainable Practices",
                            description: "Committed to environmentally-friendly and socially-responsible hosting.",
                            icon: "🌿",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 transition-all"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
                            </div>
                            <p className="text-gray-700 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Journey Section */}
            <div className="py-12 bg-gray-50">
                <h2 className="text-4xl font-bold text-center text-blue-600">Our Journey</h2>
                <p className="text-gray-700 text-center mt-4 text-lg max-w-3xl mx-auto">
                    From humble beginnings to a trusted name in event hosting, here’s how we reached where we are today.
                </p>
                <div className="px-8 relative mt-12">
                    {/* Timeline */}
                    <div className="border-l-4 border-blue-600 mx-auto md:max-w-4xl">
                        {[
                            {
                                year: "2000",
                                title: "The Beginning",
                                description: "Started as a small guest house offering personalized service to a few guests.",
                                icon: "🌟",
                            },
                            {
                                year: "2010",
                                title: "Expanding Horizons",
                                description: "Introduced event hosting services, including weddings and corporate events.",
                                icon: "🚀",
                            },
                            {
                                year: "2018",
                                title: "Award-Winning Excellence",
                                description: "Recognized for top-notch service and awarded Best Event Venue of the Year.",
                                icon: "🏆",
                            },
                            {
                                year: "2024",
                                title: "A Trusted Name",
                                description: "Became a preferred choice for celebrations, making every event unforgettable.",
                                icon: "❤️",
                            },
                        ].map((milestone, index) => (
                            <div
                                key={index}
                                className="flex items-start mb-12 pl-8 relative"
                            >
                                <div className="absolute -left-6 w-12 h-12 flex items-center justify-center bg-blue-200 text-gray-900 rounded-full text-2xl shadow-md">
                                    {milestone.icon}
                                </div>
                                <div className="ml-8 bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 transition-all w-full">
                                    <h3 className="text-lg font-semibold text-blue-600">
                                        {milestone.year} - {milestone.title}
                                    </h3>
                                    <p className="text-gray-700 mt-2">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Meet Our Team */}
            <div className="py-12 bg-gray-100">
                <h2 className="text-4xl font-bold text-center text-blue-600">Meet Our Team</h2>
                <p className="text-gray-700 text-center mt-4 text-lg max-w-3xl mx-auto">
                    Our dedicated team works tirelessly to bring your dreams to life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
                    {[
                        {
                            name: "~Nandan Singh",
                            role: "Founder & CEO",
                            link: "https://api.whatsapp.com/send?phone=919304991017",
                            description: "With a vision for excellence, ~Nandan Singh founded  Nandan Flower to create a space for unforgettable moments.",
                            image: "/img/~Nandan Singh.jpg",
                        },
                        {
                            name: "~",
                            role: "Event Manager",
                            link: "https://api.whatsapp.com/send?phone=917979962614",
                            description: "Priya ensures every event runs smoothly, combining creativity and organizational skills.",
                            image: "https://via.placeholder.com/150",
                        },
                    ].map((teamMember, index) => (
                        <a
                            key={index}
                            href={teamMember.link}
                            className="block"
                        >
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 transition-all text-center"
                            >
                                <img
                                    src={teamMember.image}
                                    alt={teamMember.name}
                                    className="w-[250px] h-[250px] mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold text-blue-600">
                                    {teamMember.name}
                                </h3>
                                <p className="text-sm text-gray-600">{teamMember.role}</p>
                                <p className="text-gray-700 mt-2">{teamMember.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 text-center">
                <h2 className="text-3xl font-bold text-blue-600">Ready to Celebrate with Us?</h2>
                <p className="text-gray-700 mt-4 text-lg">
                    From weddings to corporate events, we are here to make your occasion truly special.
                </p>
                <a href=" https://api.whatsapp.com/send?phone=+917979962614&amp;text=Hi, from the website"
                    target="_blank" rel="noreferrer nofollow">

                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-lg transition-all"
                    >
                        Contact Us Now
                    </button>
                </a>
            </div>
        </div >
    );
};

export default About;
