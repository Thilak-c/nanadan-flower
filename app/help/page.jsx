import Link from "next/link";
import { Search, BookOpen, Video, FileText, Calendar, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Clock, Users, Heart } from "lucide-react";

const helpCategories = [
  {
    name: "Getting Started",
    icon: "🚀",
    description: "Essential guides for new clients",
    articles: [
      {
        title: "How to Choose the Right Floral Design for Your Event",
        description: "Learn the key factors to consider when selecting floral arrangements for different occasions.",
        readTime: "5 min read",
        difficulty: "Beginner"
      },
      {
        title: "Understanding Our Service Process",
        description: "Step-by-step guide to working with Nandan Flower from consultation to event day.",
        readTime: "8 min read",
        difficulty: "Beginner"
      },
      {
        title: "Budget Planning for Floral Design",
        description: "Tips and guidelines for planning your floral design budget effectively.",
        readTime: "6 min read",
        difficulty: "Beginner"
      }
    ]
  },
  {
    name: "Wedding Planning",
    icon: "💒",
    description: "Complete wedding floral design guides",
    articles: [
      {
        title: "Wedding Floral Design Timeline",
        description: "When to book, plan, and finalize your wedding floral arrangements.",
        readTime: "10 min read",
        difficulty: "Intermediate"
      },
      {
        title: "Choosing Your Wedding Color Palette",
        description: "How to select colors that work with your venue, season, and personal style.",
        readTime: "7 min read",
        difficulty: "Beginner"
      },
      {
        title: "Wedding Bouquet Styles Guide",
        description: "Explore different bouquet styles from cascading to hand-tied arrangements.",
        readTime: "9 min read",
        difficulty: "Intermediate"
      },
      {
        title: "Ceremony and Reception Floral Planning",
        description: "Complete guide to planning flowers for both ceremony and reception venues.",
        readTime: "12 min read",
        difficulty: "Intermediate"
      }
    ]
  },
  {
    name: "Event Planning",
    icon: "🎉",
    description: "Corporate and special event guides",
    articles: [
      {
        title: "Corporate Event Floral Design",
        description: "Professional floral arrangements for business events and office spaces.",
        readTime: "6 min read",
        difficulty: "Beginner"
      },
      {
        title: "Birthday and Anniversary Celebrations",
        description: "Creative floral ideas for personal celebrations and milestone events.",
        readTime: "5 min read",
        difficulty: "Beginner"
      },
      {
        title: "Seasonal Event Decorations",
        description: "How to incorporate seasonal flowers and themes into your event design.",
        readTime: "8 min read",
        difficulty: "Intermediate"
      }
    ]
  },
  {
    name: "Care & Maintenance",
    icon: "🌱",
    description: "Flower care and preservation guides",
    articles: [
      {
        title: "How to Care for Your Floral Arrangements",
        description: "Essential tips for keeping your flowers fresh and beautiful.",
        readTime: "4 min read",
        difficulty: "Beginner"
      },
      {
        title: "Flower Preservation Techniques",
        description: "Methods for preserving special arrangements and bouquets.",
        readTime: "7 min read",
        difficulty: "Advanced"
      },
      {
        title: "Seasonal Flower Care Guide",
        description: "Specific care instructions for different types of flowers throughout the year.",
        readTime: "6 min read",
        difficulty: "Intermediate"
      }
    ]
  },
  {
    name: "DIY Tutorials",
    icon: "✂️",
    description: "Learn to create your own arrangements",
    articles: [
      {
        title: "DIY Hand-Tied Bouquet Tutorial",
        description: "Step-by-step guide to creating a beautiful hand-tied bouquet at home.",
        readTime: "15 min read",
        difficulty: "Intermediate"
      },
      {
        title: "Simple Centerpiece Design",
        description: "Easy tutorial for creating elegant table centerpieces.",
        readTime: "12 min read",
        difficulty: "Beginner"
      },
      {
        title: "Flower Crown Making Guide",
        description: "Learn to create stunning flower crowns for special occasions.",
        readTime: "18 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    name: "Troubleshooting",
    icon: "🔧",
    description: "Common issues and solutions",
    articles: [
      {
        title: "What to Do If Flowers Arrive Damaged",
        description: "Steps to take if your floral arrangements arrive in less than perfect condition.",
        readTime: "3 min read",
        difficulty: "Beginner"
      },
      {
        title: "Last-Minute Changes and Emergencies",
        description: "How we handle urgent changes and emergency situations.",
        readTime: "4 min read",
        difficulty: "Beginner"
      },
      {
        title: "Weather-Related Concerns",
        description: "Planning for outdoor events and weather contingencies.",
        readTime: "5 min read",
        difficulty: "Intermediate"
      }
    ]
  }
];

const quickLinks = [
  {
    title: "Book a Consultation",
    description: "Schedule a meeting with our design team",
    icon: Calendar,
    href: "/contact",
    color: "bg-blue-500"
  },
  {
    title: "View Our Gallery",
    description: "See examples of our work",
    icon: Heart,
    href: "/gallery",
    color: "bg-rose-500"
  },
  {
    title: "Pricing Guide",
    description: "Understand our service costs",
    icon: FileText,
    href: "/pricing",
    color: "bg-green-500"
  },
  {
    title: "Contact Support",
    description: "Get help from our team",
    icon: Phone,
    href: "/contact",
    color: "bg-purple-500"
  }
];

export default function HelpPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Help Center
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Everything you need to know about our services, from planning your event 
              to caring for your floral arrangements. Find guides, tutorials, and expert advice.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Help Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-8">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="border-l-2 border-rose-200 pl-4 py-2">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {article.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            article.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                            article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Video Tutorials
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Watch our step-by-step video guides for creating beautiful floral arrangements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  DIY Wedding Bouquet
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn to create a stunning bridal bouquet at home with our expert guidance.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>15 min</span>
                  <span>•</span>
                  <span>Beginner</span>
                </div>
              </div>
              <div className="card p-6">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Table Centerpiece Design
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Create elegant centerpieces for your dining table or event decor.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>12 min</span>
                  <span>•</span>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Need More Help?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? Our team is here to help you 
              with personalized assistance and expert advice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-rose-100 text-sm">
                  Speak directly with our floral design experts
                </p>
                <a href="tel:+917979962614" className="text-white hover:text-rose-100 transition-colors">
                  +91 7979962614
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-rose-100 text-sm">
                  Get detailed responses within 24 hours
                </p>
                <a href="mailto:thesinghcelebrationguesthouse@gmail.com" className="text-white hover:text-rose-100 transition-colors">
                  Send Email
                </a>
              </div>
              <div className="text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-rose-100 text-sm">
                  Quick questions and instant responses
                </p>
                <a href="https://wa.me/917979962614" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-100 transition-colors">
                  Chat Now
                </a>
              </div>
            </div>
            <Link href="/contact" className="bg-white text-rose-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 