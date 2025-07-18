import Link from "next/link";
import { Calendar, Clock, User, Heart, Eye, ArrowRight } from "lucide-react";

const FeaturedPost = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="card overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] lg:aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-rose-600 font-medium text-sm uppercase tracking-wide">
              {post.category}
            </span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4 leading-tight group-hover:text-rose-600 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
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

          {/* Stats */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-500">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{post.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{post.likes}</span>
            </div>
          </div>

          {/* Read More Button */}
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium group/btn"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost; 