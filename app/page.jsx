import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Heart, Eye } from "lucide-react";
import FeaturedPost from "@/components/FeaturedPost";
import PostCard from "@/components/PostCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterSignup from "@/components/NewsletterSignup";

// Mock data for demonstration
const featuredPost = {
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
  featured: true,
};

const recentPosts = [
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
  },
];

const categories = [
  {
    name: "Bridal Bouquets",
    description: "Custom bridal bouquet designs for every wedding style",
    postCount: 24,
    image: "/images/IMG-20250501-WA0018.jpg",
    color: "from-rose-500 to-pink-500",
  },
  {
    name: "Wedding Ceremony",
    description: "Mandap decoration, aisle runners, and ceremony flowers",
    postCount: 18,
    image: "/images/IMG-20250501-WA0017.jpg",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Wedding Reception",
    description: "Reception decoration, centerpieces, and venue flowers",
    postCount: 15,
    image: "/images/IMG-20250501-WA0016.jpg",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Mehendi Decoration",
    description: "Pre-wedding celebration floral themes and designs",
    postCount: 12,
    image: "/images/IMG-20250501-WA0015.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Wedding Packages",
    description: "Complete wedding floral packages and pricing",
    postCount: 9,
    image: "/images/IMG-20250501-WA0014.jpg",
    color: "from-teal-500 to-green-500",
  },
  {
    name: "Wedding Consultation",
    description: "Expert wedding flower consultation and planning",
    postCount: 21,
    image: "/images/IMG-20250501-WA0013.jpg",
    color: "from-orange-500 to-red-500",
  },
];

export default function HomePage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Best Wedding Florist in Patna |{" "}
              <span className="gradient-text">Bridal Bouquets & Event Decoration</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Nandan Flower - Patna's premier wedding florist with 15+ years experience. 
              Expert bridal bouquets, wedding decoration, mehendi & reception flowers. 
              Book your consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book Wedding Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary text-lg px-8 py-4">
                View Wedding Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <img src="/images/IMG-20250501-WA0034.jpg" alt="Nandan Flower Team" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">About Nandan Flower</h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-rose-600">“Every wedding is a story, and flowers are our language.”</span><br/>
              <span className="italic">— Nandan Singh, Founder</span>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We are Patna's leading wedding florist, specializing in bespoke bridal bouquets, mandap and reception decoration, and floral artistry for all your celebrations. With over 15 years of experience, our team brings creativity, passion, and a personal touch to every event. From intimate gatherings to grand weddings, we transform your vision into breathtaking floral experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-rose-50 rounded-lg p-4 flex items-center gap-3">
                <span className="text-rose-500 text-2xl"><i className="fas fa-award"></i></span>
                <span>15+ Years of Expertise</span>
              </div>
              <div className="bg-rose-50 rounded-lg p-4 flex items-center gap-3">
                <span className="text-rose-500 text-2xl"><i className="fas fa-leaf"></i></span>
                <span>Eco-Friendly Flowers</span>
              </div>
              <div className="bg-rose-50 rounded-lg p-4 flex items-center gap-3">
                <span className="text-rose-500 text-2xl"><i className="fas fa-heart"></i></span>
                <span>1000+ Happy Couples</span>
              </div>
              <div className="bg-rose-50 rounded-lg p-4 flex items-center gap-3">
                <span className="text-rose-500 text-2xl"><i className="fas fa-gem"></i></span>
                <span>Custom Luxury Designs</span>
              </div>
            </div>
            <Link href="/about" className="btn-secondary inline-block mt-2">Learn More About Us</Link>
          </div>
        </div>
        {/* Testimonial Strip */}
        <div className="container-custom mt-12">
          <div className="bg-gradient-to-r from-rose-100 via-white to-pink-100 rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="text-lg font-serif text-gray-800 italic">“Nandan Flower made our wedding magical! The mandap and bouquets were breathtaking.”</div>
              <div className="mt-2 text-rose-600 font-semibold">— Priya & Rahul, Patna</div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end gap-4">
              <img src="/images/IMG-20250501-WA0018.jpg" alt="Happy Couple 1" className="w-16 h-16 rounded-full object-cover border-2 border-rose-300" />
              <img src="/images/IMG-20250501-WA0028.jpg" alt="Happy Couple 2" className="w-16 h-16 rounded-full object-cover border-2 border-rose-300" />
              <img src="/images/IMG-20250501-WA0031.jpg" alt="Happy Couple 3" className="w-16 h-16 rounded-full object-cover border-2 border-rose-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured Wedding Floral Design
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our signature wedding floral designs and get inspired for your special day. 
              Expert bridal bouquets and ceremony decoration.
            </p>
          </div>
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Wedding Floral Services & Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive wedding floral services including bridal bouquets, 
              ceremony decoration, mehendi & reception flowers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/categories" className="btn-secondary inline-flex items-center gap-2">
              View All Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                Latest Wedding Floral Inspiration
              </h2>
              <p className="text-lg text-gray-600">
                Fresh wedding floral designs, bridal bouquet ideas, and decoration tips from Patna's expert florist.
              </p>
            </div>
            <Link href="/blog" className="btn-secondary hidden lg:flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12 lg:hidden">
            <Link href="/blog" className="btn-secondary inline-flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-rose-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-rose-600 mb-2">
                50K+
              </div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-rose-600 mb-2">
                15+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-rose-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Events Completed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 