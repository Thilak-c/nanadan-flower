export default function Hero() {
    return (
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/IMG-20250501-WA0007.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4">Nandan Flower</h1>
            <p className="text-xl mb-6">Floral Decorations for Every Occasion</p>
            <a href="#services" className="bg-red-500 text-white px-8 py-3 rounded-full text-lg transition duration-300 hover:bg-red-600">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    );
  }
  