export default function Blog() {
  const blogPosts = [
    { title: "Floral Trends in 2025", image: "/img/z.webp", excerpt: "Discover the top floral trends that will define 2025." },
    { title: "Wedding Flower Arrangements", image: "/img/W55-5113_LOL_preset_mol-mx-tile-wide-sv-new.webp", excerpt: "Find the perfect flower arrangements for your dream wedding." },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500">Our Blog</h2>
        <p className="text-lg text-gray-700 mt-4">Expert tips, trends, and inspiration for your next event.</p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg  overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-red-500 mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a href="/blog" className="text-red-500">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
