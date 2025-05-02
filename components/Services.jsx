export default function Services() {
    const services = [
      {
        title: "Weddings",
        image: "/images/WhatsApp Image 2025-05-02 at 16.50.19_229783a3.jpg",
        description: "Elegant floral setups for your big day, designed to reflect your love story.",
      },
      {
        title: "Corporate Events",
        image: "/images/WhatsApp Image 2025-05-02 at 16.46.26_71988eb1.jpg",
        description: "Professional and stylish floral arrangements for meetings, conferences, and more.",
      },
      {
        title: "Parties",
        image: "/images/WhatsApp Image 2025-05-02 at 16.46.09_ec3186ea.jpg",
        description: "Vibrant and lively decorations for birthday parties, anniversaries, and celebrations.",
      },
    ];
  
    return (
      <section id="services" className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500">Our Services</h2>
          <p className="text-lg mt-4 text-gray-700">Custom floral designs for every event.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-red-500 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  