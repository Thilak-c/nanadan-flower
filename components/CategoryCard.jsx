import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <article className="card group overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 z-10`} />
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <div className="mb-4">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
              {category.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Post Count */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {category.postCount} articles
            </span>
            <ArrowRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CategoryCard; 