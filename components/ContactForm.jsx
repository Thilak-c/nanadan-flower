export default function ContactForm() {
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500">Contact Us</h2>
          <p className="text-lg text-gray-700 mt-4">We'd love to hear from you! Get in touch with us.</p>
        </div>
        <div className="max-w-2xl mx-auto px-6">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea rows="5" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
            </div>
            <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded-full transition duration-300 hover:bg-red-600">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  