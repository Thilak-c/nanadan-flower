"use client"
import { useState } from "react";
import { Filter, Grid, List, Search, Heart, Eye, Calendar } from "lucide-react";

// Gallery data with actual images
const galleryItems = [
  {
    id: 1,
    title: "Elegant Wedding Arch",
    category: "Wedding",
    description: "A stunning white and pink floral arch perfect for outdoor ceremonies",
    image: "/images/IMG-20250501-WA0034.jpg",
    date: "2024-01-15",
    likes: 156,
    views: 2847,
    featured: true,
  },
  {
    id: 2,
    title: "Spring Bridal Bouquet",
    category: "Wedding",
    description: "Fresh spring blooms in a cascading bridal bouquet design",
    image: "/images/IMG-20250501-WA0031.jpg",
    date: "2024-01-12",
    likes: 98,
    views: 1892,
  },
  {
    id: 3,
    title: "Behind the Scenes Setup",
    category: "Behind the Scenes",
    description: "Our team working on a large-scale event decoration",
    image: "/images/IMG-20250501-WA0028.jpg",
    date: "2024-01-10",
    likes: 134,
    views: 2156,
  },
  {
    id: 4,
    title: "Sustainable Centerpiece",
    category: "Corporate",
    description: "Eco-friendly floral arrangement using locally sourced blooms",
    image: "/images/IMG-20250501-WA0027.jpg",
    date: "2024-01-08",
    likes: 89,
    views: 1678,
  },
  {
    id: 5,
    title: "Colorful Reception Decor",
    category: "Wedding",
    description: "Vibrant reception table arrangements with mixed seasonal flowers",
    image: "/images/IMG-20250501-WA0026.jpg",
    date: "2024-01-05",
    likes: 167,
    views: 2341,
  },
  {
    id: 6,
    title: "Corporate Event Setup",
    category: "Corporate",
    description: "Professional floral arrangements for business events",
    image: "/images/IMG-20250501-WA0024.jpg",
    date: "2024-01-03",
    likes: 76,
    views: 1456,
  },
  {
    id: 7,
    title: "DIY Home Arrangement",
    category: "DIY",
    description: "Simple yet elegant arrangement perfect for home decoration",
    image: "/images/IMG-20250501-WA0021.jpg",
    date: "2024-01-01",
    likes: 198,
    views: 3124,
  },
  {
    id: 8,
    title: "Bridal Bouquet Collection",
    category: "Wedding",
    description: "A collection of our most popular bridal bouquet designs",
    image: "/images/IMG-20250501-WA0018.jpg",
    date: "2023-12-28",
    likes: 223,
    views: 2987,
  },
  {
    id: 9,
    title: "Winter Wonderland",
    category: "Seasonal",
    description: "Cozy winter arrangements with seasonal blooms and greenery",
    image: "/images/IMG-20250501-WA0017.jpg",
    date: "2023-12-25",
    likes: 112,
    views: 1789,
  },
  {
    id: 10,
    title: "Design Process",
    category: "Behind the Scenes",
    description: "Step-by-step process of creating a custom floral arrangement",
    image: "/images/IMG-20250501-WA0016.jpg",
    date: "2023-12-22",
    likes: 145,
    views: 2034,
  },
  {
    id: 11,
    title: "Sustainable Wedding",
    category: "Wedding",
    description: "Complete eco-friendly wedding floral design",
    image: "/images/IMG-20250501-WA0015.jpg",
    date: "2023-12-20",
    likes: 178,
    views: 2567,
  },
  {
    id: 12,
    title: "DIY Workshop",
    category: "DIY",
    description: "Teaching clients to create their own beautiful arrangements",
    image: "/images/IMG-20250501-WA0014.jpg",
    date: "2023-12-18",
    likes: 134,
    views: 1890,
  },
  {
    id: 13,
    title: "Corporate Centerpieces",
    category: "Corporate",
    description: "Professional centerpieces for business meetings and events",
    image: "/images/IMG-20250501-WA0013.jpg",
    date: "2023-12-15",
    likes: 89,
    views: 1456,
  },
  {
    id: 14,
    title: "Holiday Decorations",
    category: "Seasonal",
    description: "Festive arrangements perfect for holiday celebrations",
    image: "/images/IMG-20250501-WA0012.jpg",
    date: "2023-12-12",
    likes: 167,
    views: 2234,
  },
  {
    id: 15,
    title: "Wedding Reception",
    category: "Wedding",
    description: "Complete reception venue transformation with floral decor",
    image: "/images/IMG-20250501-WA0011.jpg",
    date: "2023-12-10",
    likes: 234,
    views: 3123,
  },
  {
    id: 16,
    title: "Garden Party Setup",
    category: "Events",
    description: "Outdoor garden party with natural floral arrangements",
    image: "/images/IMG-20250501-WA0010.jpg",
    date: "2023-12-08",
    likes: 156,
    views: 1987,
  },
  {
    id: 17,
    title: "Boutonniere Collection",
    category: "Wedding",
    description: "Elegant boutonnieres for grooms and wedding party",
    image: "/images/IMG-20250501-WA0009.jpg",
    date: "2023-12-05",
    likes: 123,
    views: 1678,
  },
  {
    id: 18,
    title: "Corsage Designs",
    category: "Wedding",
    description: "Beautiful corsages for mothers and special guests",
    image: "/images/IMG-20250501-WA0008.jpg",
    date: "2023-12-03",
    likes: 98,
    views: 1345,
  },
  {
    id: 19,
    title: "Event Decoration",
    category: "Events",
    description: "Complete event space transformation with floral elements",
    image: "/images/IMG-20250501-WA0007.jpg",
    date: "2023-11-30",
    likes: 187,
    views: 2456,
  },
  {
    id: 20,
    title: "Wedding Ceremony",
    category: "Wedding",
    description: "Intimate ceremony setup with romantic floral arrangements",
    image: "/images/IMG-20250501-WA0006.jpg",
    date: "2023-11-28",
    likes: 212,
    views: 2890,
  },
  {
    id: 21,
    title: "Bridal Portrait",
    category: "Wedding",
    description: "Bridal bouquet and accessories for wedding photography",
    image: "/images/IMG-20250501-WA0005.jpg",
    date: "2023-11-25",
    likes: 245,
    views: 3234,
  },
  {
    id: 22,
    title: "Corporate Meeting",
    category: "Corporate",
    description: "Professional floral arrangements for business meetings",
    image: "/images/IMG-20250501-WA0004.jpg",
    date: "2023-11-22",
    likes: 76,
    views: 1234,
  },
  {
    id: 23,
    title: "Instagram Highlight",
    category: "Behind the Scenes",
    description: "Behind the scenes of our Instagram-worthy arrangements",
    image: "/uploads/420167888_376533581741132_1160765742754453753_n.jpeg",
    date: "2023-11-20",
    likes: 189,
    views: 2678,
  },
  {
    id: 24,
    title: "Social Media Content",
    category: "Behind the Scenes",
    description: "Creating content for our social media platforms",
    image: "/uploads/419497058_2003353703382708_3631448419529653790_n.jpeg",
    date: "2023-11-18",
    likes: 134,
    views: 1890,
  },
];

const categories = ["All", "Wedding", "Corporate", "Events", "Seasonal", "DIY", "Behind the Scenes"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
        Our Gallery
      </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Explore our collection of beautiful floral arrangements, from intimate 
              weddings to grand corporate events. Each piece tells a unique story.
            </p>
            
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <button className="btn-secondary flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-rose-600 text-white"
                      : "bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* View Toggle and Results */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">View:</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "text-rose-600 bg-rose-50"
                    : "text-gray-400 hover:text-rose-600"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
            <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "text-rose-600 bg-rose-50"
                    : "text-gray-400 hover:text-rose-600"
                }`}
              >
                <List className="w-4 h-4" />
            </button>
            </div>
            <div className="text-sm text-gray-500">
              Showing {filteredItems.length} of {galleryItems.length} items
            </div>
          </div>

          {/* Gallery Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group">
                  <div className="relative overflow-hidden rounded-xl aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{item.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="card p-6 group">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                          {item.title}
                        </h3>
                        {item.featured && (
                          <span className="bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{item.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredItems.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Images
            </button>
            </div>
          )}

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No images found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
            <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="btn-primary"
              >
                Clear Filters
            </button>
          </div>
        )}
      </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Inspired by Our Work?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us create something beautiful for your special occasion. 
              Contact us to discuss your vision and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-rose-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get a Quote
              </a>
              <a href="tel:+917979962614" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-rose-600 transition-colors">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 