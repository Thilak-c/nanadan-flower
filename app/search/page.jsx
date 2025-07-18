"use client";
import { useState, useEffect } from "react";
import { Search, Filter, Grid, List, Calendar, User, Clock, Eye, Heart, X } from "lucide-react";
import PostCard from "@/components/PostCard";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    category: "all",
    dateRange: "all",
    author: "all"
  });

  // Mock data for search
  const allPosts = [
    {
      id: 1,
      title: "Complete Wedding Floral Guide: Bridal Bouquets to Reception Decoration",
      excerpt: "Everything you need to know about wedding flowers in Patna. From choosing the perfect bridal bouquet to designing stunning ceremony and reception decorations. Expert tips from Nandan Flower's 15+ years of experience.",
      author: "Nandan Singh",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0034.jpg",
      views: 2847,
      likes: 156,
      tags: ["wedding", "bridal bouquet", "decoration", "patna", "florist"]
    },
    {
      id: 2,
      title: "Bridal Bouquet Trends 2024: What's Hot in Wedding Flowers",
      excerpt: "Discover the latest bridal bouquet trends for 2024 weddings in Patna. From cascading designs to minimalist arrangements, find the perfect style for your special day.",
      author: "Nandan Singh",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0031.jpg",
      views: 1892,
      likes: 98,
      tags: ["trends", "2024", "bridal bouquet", "wedding flowers"]
    },
    {
      id: 3,
      title: "Wedding Ceremony Decoration: Creating the Perfect Aisle & Mandap",
      excerpt: "Learn how to transform your wedding ceremony space with stunning floral decoration. From aisle runners to mandap decoration, create a magical atmosphere for your special day.",
      author: "Nandan Singh",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0028.jpg",
      views: 2156,
      likes: 134,
      tags: ["ceremony", "mandap", "aisle", "decoration"]
    },
    {
      id: 4,
      title: "Mehendi Decoration Ideas: Floral Themes for Pre-Wedding Celebrations",
      excerpt: "Transform your mehendi ceremony with beautiful floral decoration. From traditional designs to modern themes, create a vibrant and memorable pre-wedding celebration.",
      author: "Nandan Singh",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0027.jpg",
      views: 1678,
      likes: 89,
      tags: ["mehendi", "pre-wedding", "decoration", "floral themes"]
    },
    {
      id: 5,
      title: "Wedding Reception Decoration: From Entry to Dance Floor",
      excerpt: "Complete guide to wedding reception decoration in Patna. From grand entry designs to elegant table centerpieces, create a reception that wows your guests.",
      author: "Nandan Singh",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0026.jpg",
      views: 2341,
      likes: 167,
      tags: ["reception", "decoration", "centerpieces", "entry design"]
    },
    {
      id: 6,
      title: "Wedding Flower Packages: Budget-Friendly Options in Patna",
      excerpt: "Explore our wedding flower packages designed for every budget. From intimate ceremonies to grand celebrations, find the perfect floral package for your special day.",
      author: "Nandan Singh",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0024.jpg",
      views: 1456,
      likes: 76,
      tags: ["packages", "budget", "pricing", "options"]
    },
    {
      id: 7,
      title: "Wedding Flower Consultation: What to Ask Your Florist",
      excerpt: "Essential questions to ask during your wedding flower consultation. From budget planning to seasonal availability, ensure you get the perfect floral design for your wedding.",
      author: "Nandan Singh",
      date: "2024-01-01",
      readTime: "4 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0021.jpg",
      views: 3124,
      likes: 198,
      tags: ["consultation", "questions", "planning", "florist"]
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Wedding Design", label: "Wedding Design" },
    { value: "Bridal Bouquets", label: "Bridal Bouquets" },
    { value: "Wedding Ceremony", label: "Wedding Ceremony" },
    { value: "Wedding Reception", label: "Wedding Reception" },
    { value: "Mehendi Decoration", label: "Mehendi Decoration" }
  ];

  const dateRanges = [
    { value: "all", label: "All Time" },
    { value: "week", label: "Past Week" },
    { value: "month", label: "Past Month" },
    { value: "year", label: "Past Year" }
  ];

  const authors = [
    { value: "all", label: "All Authors" },
    { value: "Nandan Singh", label: "Nandan Singh" }
  ];

  const performSearch = () => {
    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      let results = allPosts;

      // Text search
      if (query) {
        results = results.filter(post => 
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      // Apply filters
      if (filters.category !== "all") {
        results = results.filter(post => post.category === filters.category);
      }

      if (filters.author !== "all") {
        results = results.filter(post => post.author === filters.author);
      }

      if (filters.dateRange !== "all") {
        const now = new Date();
        const cutoffDate = new Date();
        
        switch (filters.dateRange) {
          case "week":
            cutoffDate.setDate(now.getDate() - 7);
            break;
          case "month":
            cutoffDate.setMonth(now.getMonth() - 1);
            break;
          case "year":
            cutoffDate.setFullYear(now.getFullYear() - 1);
            break;
        }
        
        results = results.filter(post => new Date(post.date) >= cutoffDate);
      }

      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (searchQuery || filters.category !== "all" || filters.dateRange !== "all" || filters.author !== "all") {
      performSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, filters]);

  const clearSearch = () => {
    setSearchQuery("");
    setFilters({
      category: "all",
      dateRange: "all",
      author: "all"
    });
    setSearchResults([]);
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Search Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Search</h1>
            <p className="text-gray-600">Find articles, tips, and inspiration for your wedding flowers</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for wedding flowers, bridal bouquets, decoration tips..."
                className="w-full pl-10 pr-12 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-lg"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={filters.dateRange}
                onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
              >
                {dateRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>

              <select
                value={filters.author}
                onChange={(e) => setFilters({...filters, author: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
              >
                {authors.map((author) => (
                  <option key={author.value} value={author.value}>
                    {author.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" 
                    ? "bg-rose-100 text-rose-600" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" 
                    ? "bg-rose-100 text-rose-600" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="mb-8">
          {isLoading ? (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : searchQuery || filters.category !== "all" || filters.dateRange !== "all" || filters.author !== "all" ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold text-gray-900">
                  Search Results ({searchResults.length})
                </h2>
                {searchResults.length > 0 && (
                  <p className="text-gray-600">
                    Showing results for "{searchQuery}" {filters.category !== "all" && `in ${filters.category}`}
                  </p>
                )}
              </div>

              {searchResults.length > 0 ? (
                <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
                  {searchResults.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                      {viewMode === "grid" ? (
                        <PostCard post={post} />
                      ) : (
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-600">
                                {post.category}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {post.author}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(post.date).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {post.readTime}
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  {post.views}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  {post.likes}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button onClick={clearSearch} className="btn-primary">Clear Search</button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Start searching</h3>
              <p className="text-gray-600 mb-6">
                Enter keywords to find articles about wedding flowers, bridal bouquets, decoration tips, and more.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 