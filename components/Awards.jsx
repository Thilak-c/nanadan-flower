export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500">Our Awards</h2>
        <p className="text-lg text-gray-700 mt-4">Recognized for excellence in floral design and event services.</p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg ">
          <img src="/img/q.jpg" alt="" />
          <h3 className="text-2xl font-semibold text-red-500 mb-4">Best Wedding Floral Designs 2024</h3>
          <p className="text-gray-700">Awarded for our exceptional wedding floral decorations by The Floral Association.</p>
        </div>
      </div>
    </section>
  );
}
