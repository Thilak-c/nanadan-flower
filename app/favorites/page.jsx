"use client";
import { useState } from "react";
import { Heart, Trash2, Eye, Calendar, User, Clock, Filter, Grid, List } from "lucide-react";
import PostCard from "@/components/PostCard";

export default function FavoritesPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [filter, setFilter] = useState("all");

  // Mock favorites data
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Complete Wedding Floral Guide: Bridal Bouquets to Reception Decoration",
      excerpt: "Everything you need to know about wedding flowers in Patna. From choosing the perfect bridal bouquet to designing stunning ceremony and reception decorations.",
      author: "Nandan Singh",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0034.jpg",
      views: 2847,
      likes: 156,
      type: "article"
    },
    {
      id: 2,
      title: "Bridal Bouquet Trends 2024: What's Hot in Wedding Flowers",
      excerpt: "Discover the latest bridal bouquet trends for 2024 weddings in Patna. From cascading designs to minimalist arrangements.",
      author: "Nandan Singh",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0031.jpg",
      views: 1892,
      likes: 98,
      type: "article"
    },
    {
      id: 3,
      title: "Wedding Ceremony Decoration: Creating the Perfect Aisle & Mandap",
      excerpt: "Learn how to transform your wedding ceremony space with stunning floral decoration. From aisle runners to mandap decoration.",
      author: "Nandan Singh",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Wedding Design",
      image: "/images/IMG-20250501-WA0028.jpg",
      views: 2156,
      likes: 134,
      type: "article"
    },
    {
      id: 4,
      title: "Elegant Rose and Peony Bridal Bouquet",
      excerpt: "A stunning bridal bouquet featuring premium roses and peonies in soft pink and white tones.",
      author: "Nandan Singh",
      date: "2024-01-08",
      readTime: "2 min read",
      category: "Bridal Bouquets",
      image: "/images/IMG-20250501-WA0027.jpg",
      views: 1678,
      likes: 89,
      type: "design"
    },
    {
      id: 5,
      title: "Traditional Mandap Decoration with Marigolds",
      excerpt: "Beautiful traditional mandap decoration using fresh marigolds and seasonal flowers for authentic Indian weddings.",
      author: "Nandan Singh",
      date: "2024-01-05",
      readTime: "3 min read",
      category: "Wedding Ceremony",
      image: "/images/IMG-20250501-WA0026.jpg",
      views: 2341,
      likes: 167,
      type: "design"
    }
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const filteredFavorites = favorites.filter(item => {
    if (filter === "all") return true;
    if (filter === "articles") return item.type === "article";
    if (filter === "designs") return item.type === "design";
    return item.category === filter;
  });

  const categories = [
    { value: "all", label: "All Favorites" },
    { value: "articles", label: "Articles" },
    { value: "designs", label: "Designs" },
    { value: "Wedding Design", label: "Wedding Design" },
    { value: "Bridal Bouquets", label: "Bridal Bouquets" },
    { value: "Wedding Ceremony", label: "Wedding Ceremony" }
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-gray-900">My Favorites</h1>
                <p className="text-gray-600">Your saved articles and floral designs</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-rose-600">{favorites.length}</div>
              <div className="text-sm text-gray-600">Saved items</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-rose-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-rose-600">{favorites.filter(f => f.type === "article").length}</div>
              <div className="text-sm text-gray-600">Articles</div>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pink-600">{favorites.filter(f => f.type === "design").length}</div>
              <div className="text-sm text-gray-600">Designs</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{favorites.filter(f => f.category === "Wedding Design").length}</div>
              <div className="text-sm text-gray-600">Wedding Design</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{favorites.filter(f => f.category === "Bridal Bouquets").length}</div>
              <div className="text-sm text-gray-600">Bridal Bouquets</div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter:</span>
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
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

        {/* Favorites Grid/List */}
        {filteredFavorites.length > 0 ? (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
            {filteredFavorites.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                {viewMode === "grid" ? (
                  <PostCard post={item} />
                ) : (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.type === "article" 
                              ? "bg-blue-100 text-blue-600" 
                              : "bg-green-100 text-green-600"
                          }`}>
                            {item.type === "article" ? "Article" : "Design"}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            {item.category}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFavorite(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {item.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {item.likes}
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
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-600 mb-6">
              {filter === "all" 
                ? "Start saving your favorite articles and floral designs to see them here."
                : `No ${filter} found in your favorites.`
              }
            </p>
            <button className="btn-primary">Explore Articles</button>
          </div>
        )}
      </div>
    </div>
  );
} 