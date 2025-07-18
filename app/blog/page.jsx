"use client";
import { useState } from "react";
import PostCard from "@/components/PostCard";
import BlogSidebar from "@/components/BlogSidebar";
import { Search, Filter, Grid, List, X } from "lucide-react";

// Mock data for demonstration
const allPosts = [
  {
    id: 1,
    title: "The Art of Wedding Floral Design: Creating Timeless Elegance",
    excerpt: "Discover the secrets behind creating breathtaking wedding floral arrangements that capture the essence of love and celebration. From color theory to seasonal blooms, learn how to design arrangements that tell your unique love story.",
    author: "Nandan Singh",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Wedding Design",
    image: "/images/IMG-20250501-WA0034.jpg",
    views: 2847,
    likes: 156,
    featured: true,
  },
  {
    id: 2,
    title: "Seasonal Flower Guide: What's Blooming This Spring",
    excerpt: "Explore the most beautiful spring flowers and learn how to incorporate them into your floral designs. From tulips to cherry blossoms, discover the perfect blooms for your spring celebrations.",
    author: "Priya Sharma",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Seasonal Guide",
    image: "/images/IMG-20250501-WA0031.jpg",
    views: 1892,
    likes: 98,
  },
  {
    id: 3,
    title: "Behind the Scenes: A Day in the Life of a Floral Designer",
    excerpt: "Step into our world and see what goes into creating stunning floral arrangements. From early morning flower markets to late-night event setups, experience the passion and dedication behind every bloom.",
    author: "Nandan Singh",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Behind the Scenes",
    image: "/images/IMG-20250501-WA0028.jpg",
    views: 2156,
    likes: 134,
  },
  {
    id: 4,
    title: "Sustainable Floral Design: Eco-Friendly Practices for Modern Events",
    excerpt: "Learn how to create beautiful floral arrangements while being mindful of the environment. Discover sustainable practices, local sourcing, and eco-friendly alternatives that don't compromise on beauty.",
    author: "Priya Sharma",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/images/IMG-20250501-WA0027.jpg",
    views: 1678,
    likes: 89,
  },
  {
    id: 5,
    title: "Color Psychology in Floral Design: Choosing the Perfect Palette",
    excerpt: "Understand how different colors affect emotions and create the perfect atmosphere for your events. From romantic reds to calming blues, master the art of color selection in floral design.",
    author: "Nandan Singh",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Design Theory",
    image: "/images/IMG-20250501-WA0026.jpg",
    views: 2341,
    likes: 167,
  },
  {
    id: 6,
    title: "Corporate Event Floral Design: Making Business Beautiful",
    excerpt: "Transform corporate spaces with sophisticated floral arrangements that enhance productivity and create memorable experiences. Learn the dos and don'ts of professional floral design.",
    author: "Priya Sharma",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Corporate Events",
    image: "/images/IMG-20250501-WA0024.jpg",
    views: 1456,
    likes: 76,
  },
  {
    id: 7,
    title: "DIY Floral Arrangements: Simple Techniques for Home Decor",
    excerpt: "Bring the beauty of flowers into your home with these easy-to-follow DIY floral arrangement tutorials. Perfect for beginners and flower enthusiasts alike.",
    author: "Nandan Singh",
    date: "2024-01-01",
    readTime: "4 min read",
    category: "DIY Tutorials",
    image: "/images/IMG-20250501-WA0021.jpg",
    views: 3124,
    likes: 198,
  },
  {
    id: 8,
    title: "Bridal Bouquet Trends 2024: What's Hot This Wedding Season",
    excerpt: "Stay ahead of the curve with the latest bridal bouquet trends for 2024. From cascading designs to minimalist arrangements, discover what's trending in wedding floral design.",
    author: "Priya Sharma",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Wedding Design",
    image: "/images/IMG-20250501-WA0018.jpg",
    views: 2987,
    likes: 223,
  },
  {
    id: 9,
    title: "Winter Flower Guide: Creating Cozy Arrangements for Cold Weather",
    excerpt: "Embrace the beauty of winter with these stunning seasonal flower arrangements. Learn how to create warm, inviting designs that bring life to your winter celebrations.",
    author: "Nandan Singh",
    date: "2023-12-25",
    readTime: "6 min read",
    category: "Seasonal Guide",
    image: "/images/IMG-20250501-WA0017.jpg",
    views: 1789,
    likes: 112,
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  // Define tags for each post
  const postsWithTags = allPosts.map(post => ({
    ...post,
    tags: getPostTags(post)
  }));

  // Function to get tags for a post based on its content
  function getPostTags(post) {
    const tags = [];
    const content = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
    
    if (content.includes('wedding') || content.includes('bridal') || content.includes('bouquet')) {
      tags.push('Wedding Flowers', 'Bridal Bouquet');
    }
    if (content.includes('spring') || content.includes('seasonal')) {
      tags.push('Seasonal Blooms', 'Spring Flowers');
    }
    if (content.includes('diy') || content.includes('tutorial')) {
      tags.push('DIY');
    }
    if (content.includes('color') || content.includes('psychology')) {
      tags.push('Color Theory');
    }
    if (content.includes('sustainable') || content.includes('eco')) {
      tags.push('Sustainable Design');
    }
    if (content.includes('corporate') || content.includes('business')) {
      tags.push('Corporate Events');
    }
    if (content.includes('fall') || content.includes('autumn')) {
      tags.push('Fall Arrangements');
    }
    if (content.includes('holiday') || content.includes('christmas')) {
      tags.push('Holiday Decor');
    }
    if (content.includes('centerpiece') || content.includes('table')) {
      tags.push('Centerpieces');
    }
    if (content.includes('boutonniere')) {
      tags.push('Boutonnieres');
    }
    if (content.includes('corsage')) {
      tags.push('Corsages');
    }
    if (content.includes('arch') || content.includes('ceremony')) {
      tags.push('Arch Decorations');
    }
    
    return [...new Set(tags)]; // Remove duplicates
  }

  // Filter posts based on search term, category, and tags
  const filteredPosts = postsWithTags.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => post.tags.includes(tag));
    return matchesSearch && matchesCategory && matchesTags;
  });

  // Get unique categories for filter
  const categories = ["All", ...new Set(allPosts.map(post => post.category))];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the art of floral design through our curated collection of articles, 
              tutorials, and inspiration. From wedding trends to seasonal guides, 
              we share everything you need to know about creating beautiful floral arrangements.
            </p>
            
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              {(searchTerm || selectedCategory !== "All" || selectedTags.length > 0) && (
                <div className="w-full text-center mb-4">
                  <p className="text-sm text-gray-600">
                    {searchTerm && `Searching for "${searchTerm}"`}
                    {searchTerm && (selectedCategory !== "All" || selectedTags.length > 0) && " in "}
                    {selectedCategory !== "All" && `category "${selectedCategory}"`}
                    {selectedCategory !== "All" && selectedTags.length > 0 && " with "}
                    {selectedTags.length > 0 && `tags: ${selectedTags.join(", ")}`}
                  </p>
                </div>
              )}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="btn-secondary appearance-none pr-8"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* View Toggle */}
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
                  Showing {filteredPosts.length} of {allPosts.length} articles
                </div>
              </div>

              {/* Posts Display */}
              {filteredPosts.length > 0 ? (
                viewMode === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredPosts.map((post) => (
                      <div key={post.id} className="card p-6">
                        <div className="flex gap-6">
                          <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-3">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
                                {post.category}
                              </span>
                              <span>By {post.author}</span>
                              <span>{post.readTime}</span>
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🌸</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or category filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setSelectedTags([]);
                    }}
                    className="btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-12">
                <button className="px-4 py-2 text-gray-500 hover:text-rose-600 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-2 bg-rose-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 text-gray-600 hover:text-rose-600">2</button>
                <button className="px-4 py-2 text-gray-600 hover:text-rose-600">3</button>
                <span className="px-4 py-2 text-gray-500">...</span>
                <button className="px-4 py-2 text-gray-600 hover:text-rose-600">12</button>
                <button className="px-4 py-2 text-gray-500 hover:text-rose-600">
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar 
                onTagFilter={setSelectedTags}
                selectedTags={selectedTags}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 