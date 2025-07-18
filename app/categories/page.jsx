import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    name: "Wedding Design",
    description: "Bridal bouquets, ceremony decor, and reception arrangements that make your special day unforgettable. From classic elegance to modern trends, discover everything you need for the perfect wedding floral design.",
    postCount: 24,
    image: "/images/IMG-20250501-WA0018.jpg",
    color: "from-rose-500 to-pink-500",
    featured: true,
    recentPosts: [
      "The Art of Wedding Floral Design: Creating Timeless Elegance",
      "Bridal Bouquet Trends 2024: What's Hot This Wedding Season",
      "Ceremony Arch Decorations: From Simple to Spectacular"
    ]
  },
  {
    name: "Seasonal Guide",
    description: "What's blooming and when to use different flowers throughout the year. Learn about seasonal availability, care tips, and how to create stunning arrangements with nature's best offerings.",
    postCount: 18,
    image: "/images/IMG-20250501-WA0017.jpg",
    color: "from-green-500 to-emerald-500",
    recentPosts: [
      "Seasonal Flower Guide: What's Blooming This Spring",
      "Winter Flower Guide: Creating Cozy Arrangements for Cold Weather",
      "Fall Flower Arrangements: Embracing Autumn's Rich Colors"
    ]
  },
  {
    name: "Design Theory",
    description: "Color theory, composition, and floral design principles that will elevate your arrangements. Master the fundamentals and advanced techniques used by professional floral designers.",
    postCount: 15,
    image: "/images/IMG-20250501-WA0016.jpg",
    color: "from-purple-500 to-indigo-500",
    recentPosts: [
      "Color Psychology in Floral Design: Choosing the Perfect Palette",
      "Composition Principles: Creating Balanced Floral Arrangements",
      "Texture and Form: Adding Dimension to Your Designs"
    ]
  },
  {
    name: "Behind the Scenes",
    description: "Our daily life and the stories behind our creations. Get an insider's look at the floral industry, our creative process, and the passion that drives our work.",
    postCount: 12,
    image: "/images/IMG-20250501-WA0015.jpg",
    color: "from-blue-500 to-cyan-500",
    recentPosts: [
      "Behind the Scenes: A Day in the Life of a Floral Designer",
      "From Flower Market to Final Arrangement: Our Process",
      "The Tools Every Floral Designer Needs"
    ]
  },
  {
    name: "Sustainability",
    description: "Eco-friendly practices and sustainable floral design that respects our planet. Learn about local sourcing, seasonal choices, and environmentally conscious design approaches.",
    postCount: 9,
    image: "/images/IMG-20250501-WA0014.jpg",
    color: "from-teal-500 to-green-500",
    recentPosts: [
      "Sustainable Floral Design: Eco-Friendly Practices for Modern Events",
      "Local Flower Sourcing: Supporting Your Community",
      "Zero-Waste Floral Design: Creative Solutions for Leftover Blooms"
    ]
  },
  {
    name: "DIY Tutorials",
    description: "Step-by-step guides for creating your own arrangements at home. Perfect for beginners and flower enthusiasts who want to bring the beauty of flowers into their daily lives.",
    postCount: 21,
    image: "/images/IMG-20250501-WA0013.jpg",
    color: "from-orange-500 to-red-500",
    recentPosts: [
      "DIY Floral Arrangements: Simple Techniques for Home Decor",
      "How to Make a Hand-Tied Bouquet: A Beginner's Guide",
      "Creating a Flower Crown: Perfect for Special Occasions"
    ]
  },
  {
    name: "Corporate Events",
    description: "Professional floral design for business environments and corporate celebrations. Transform office spaces and create memorable experiences for your business events.",
    postCount: 8,
    image: "/images/IMG-20250501-WA0012.jpg",
    color: "from-indigo-500 to-purple-500",
    recentPosts: [
      "Corporate Event Floral Design: Making Business Beautiful",
      "Office Floral Arrangements: Boosting Productivity and Mood",
      "Conference Centerpieces: Professional and Elegant"
    ]
  },
  {
    name: "Holiday Decor",
    description: "Seasonal decorations and holiday-themed arrangements that bring joy to every celebration. From Christmas to Diwali, discover festive floral ideas for all occasions.",
    postCount: 14,
    image: "/images/IMG-20250501-WA0011.jpg",
    color: "from-yellow-500 to-orange-500",
    recentPosts: [
      "Christmas Floral Arrangements: Festive and Elegant",
      "Diwali Decorations: Bright and Colorful Floral Ideas",
      "Easter Centerpieces: Spring Renewal in Bloom"
    ]
  }
];

export default function CategoriesPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Explore Categories
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Discover our organized collection of floral design content. From wedding inspiration 
              to DIY tutorials, find exactly what you're looking for to enhance your floral journey.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">Browse {categories.length} categories with {categories.reduce((sum, cat) => sum + cat.postCount, 0)}+ articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card group overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 z-10`} />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  {category.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>

                  {/* Recent Posts Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Recent Articles:</h4>
                    <ul className="space-y-1">
                      {category.recentPosts.slice(0, 2).map((post, postIndex) => (
                        <li key={postIndex} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-rose-500 mt-1">•</span>
                          <span className="line-clamp-2">{post}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Post Count and Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.postCount} articles
                    </span>
                    <Link
                      href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium text-sm group/btn"
                    >
                      View All
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Use our search feature or browse our complete blog to discover more floral inspiration, 
              tips, and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="bg-white text-rose-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Browse All Articles
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-rose-600 transition-colors">
                Ask Us Anything
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Stay Updated with New Categories
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and be the first to know when we add new categories and content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 