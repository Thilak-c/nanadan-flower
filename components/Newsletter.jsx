export default function Newsletter() {
    return (
      <section id="newsletter" className="py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-700 mt-4">Get the latest floral trends, tips, and exclusive offers.</p>
        </div>
        <div className="max-w-4xl mx-auto px-6 flex justify-center">
          <form className="flex space-x-4">
            <input type="email" className="px-6 py-3 w-80 border border-gray-300 rounded-lg" placeholder="Enter your email" />
            <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded-lg">Subscribe</button>
          </form>
        </div>
      </section>
    );
  }
  