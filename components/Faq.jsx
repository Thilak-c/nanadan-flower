export default function Faq() {
  const faqList = [
    { question: "What types of events do you cater to?", answer: "We cater to weddings, parties, corporate events, and more." },
    { question: "Do you offer custom floral designs?", answer: "Yes, we offer personalized floral arrangements for every occasion." },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-700 mt-4">Answers to your most common questions.</p>
      </div>
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {faqList.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg ">
            <h3 className="text-xl font-semibold text-red-500">{item.question}</h3>
            <p className="text-gray-700 mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
