export default function Testimonials() {
  const testimonials = [
    {
      name: "Naya kumari",
      feedback: "The flowers were breathtaking, and the decorations turned our wedding into a fairy tale.",
    },
    {
      name: "Ajay",
      feedback: "We hired Nandan Flower for our corporate event, and they made it look amazing with minimal effort on our part.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500">What Our Clients Say</h2>
        <p className="text-lg text-gray-700 mt-4">Client feedback and stories.</p>
      </div>
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg ">
            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <h4 className="text-xl font-semibold text-red-500">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
