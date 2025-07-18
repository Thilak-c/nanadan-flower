"use client";
import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Calendar, User, Eye, Heart, X } from "lucide-react";

const BlogSidebar = ({ onTagFilter, selectedTags = [] }) => {
  const categories = [
    { name: "Wedding Design", count: 24, color: "bg-rose-500" },
    { name: "Seasonal Guide", count: 18, color: "bg-green-500" },
    { name: "Design Theory", count: 15, color: "bg-purple-500" },
    { name: "Behind the Scenes", count: 12, color: "bg-blue-500" },
    { name: "Sustainability", count: 9, color: "bg-teal-500" },
    { name: "DIY Tutorials", count: 21, color: "bg-orange-500" },
    { name: "Corporate Events", count: 8, color: "bg-indigo-500" },
  ];

  const popularPosts = [
    {
      id: 1,
      title: "The Art of Wedding Floral Design",
      views: 2847,
      likes: 156,
      image: "/images/IMG-20250501-WA0034.jpg",
    },
    {
      id: 7,
      title: "DIY Floral Arrangements",
      views: 3124,
      likes: 198,
      image: "/images/IMG-20250501-WA0021.jpg",
    },
    {
      id: 5,
      title: "Color Psychology in Floral Design",
      views: 2341,
      likes: 167,
      image: "/images/IMG-20250501-WA0026.jpg",
    },
    {
      id: 8,
      title: "Bridal Bouquet Trends 2024",
      views: 2987,
      likes: 223,
      image: "/images/IMG-20250501-WA0018.jpg",
    },
  ];

  const tags = [
    "Wedding Flowers", "Bridal Bouquet", "Seasonal Blooms", "DIY", "Color Theory",
    "Sustainable Design", "Corporate Events", "Spring Flowers", "Fall Arrangements",
    "Holiday Decor", "Centerpieces", "Boutonnieres", "Corsages", "Arch Decorations"
  ];

  return (
    <aside className="space-y-8">
      {/* About Section */}
      <div className="card p-6">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
          About Our Blog
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          We share our passion for floral design through expert tips, inspiring stories, 
          and behind-the-scenes glimpses into our creative process.
        </p>
        <Link href="/about" className="text-rose-600 hover:text-rose-700 text-sm font-medium">
          Learn More →
        </Link>
      </div>

      {/* Categories */}
      <div className="card p-6">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center justify-between group hover:bg-rose-50 p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                <span className="text-gray-700 group-hover:text-rose-600 transition-colors">
                  {category.name}
                </span>
              </div>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-rose-600" />
          <h3 className="text-lg font-serif font-bold text-gray-900">
            Popular Posts
          </h3>
        </div>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.id}`} className="flex gap-3">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="card p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">
          Stay Updated
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Get our latest articles and floral inspiration delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Tags */}
      <div className="card p-6">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
          Popular Tags
        </h3>
        {selectedTags.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Active Filters:</span>
              <button
                onClick={() => onTagFilter && onTagFilter([])}
                className="text-xs text-rose-600 hover:text-rose-700 font-medium"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full flex items-center gap-1"
                >
                  {tag}
                  <button
                    onClick={() => {
                      const newTags = selectedTags.filter(t => t !== tag);
                      onTagFilter && onTagFilter(newTags);
                    }}
                    className="hover:text-rose-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => {
                if (onTagFilter) {
                  const isSelected = selectedTags.includes(tag);
                  if (isSelected) {
                    const newTags = selectedTags.filter(t => t !== tag);
                    onTagFilter(newTags);
                  } else {
                    const newTags = [...selectedTags, tag];
                    onTagFilter(newTags);
                  }
                }
              }}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-rose-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Author Info */}
      <div className="card p-6">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
          Meet Our Authors
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Nandan Singh</h4>
              <p className="text-sm text-gray-600">Founder & Lead Designer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Priya Sharma</h4>
              <p className="text-sm text-gray-600">Senior Floral Designer</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar; 