import Link from "next/link";
import { Calendar, Clock, User, Heart, Eye, ArrowRight } from "lucide-react";

const PostCard = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <article className="card group overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 leading-tight group-hover:text-rose-600 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Stats and Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{post.likes}</span>
            </div>
          </div>
          
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium group/btn"
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard; 