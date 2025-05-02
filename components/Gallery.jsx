export default function Gallery() {
    const galleryImages = [
      "/images/IMG-20250501-WA0007.jpg",
      "/images/IMG-20250501-WA0005.jpg",
      "/images/IMG-20250501-WA0010.jpg",
      "/images/IMG-20250501-WA0027.jpg",
      "/images/IMG-20250501-WA0018.jpg",
      "/images/IMG-20250501-WA0021.jpg",
    ];
  
    return (
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500">Gallery</h2>
          <p className="text-lg text-gray-700 mt-4">A collection of our best floral arrangements and event decorations.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>
    );
  }
  