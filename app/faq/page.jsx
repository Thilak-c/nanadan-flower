"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    name: "Services & Pricing",
    icon: "💰",
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer comprehensive floral design services including wedding arrangements, corporate event decor, birthday celebrations, anniversary parties, and custom floral designs. Our services cover everything from bridal bouquets to complete venue transformations."
      },
      {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on the type of event, number of arrangements needed, and flower selection. Wedding packages typically start from ₹25,000, while smaller events begin at ₹5,000. We provide detailed quotes after understanding your specific requirements."
      },
      {
        question: "Do you offer delivery and setup services?",
        answer: "Yes! We provide complete delivery and setup services for all our arrangements. Our team will arrive at your venue to ensure everything is perfectly placed and styled according to your vision."
      },
      {
        question: "Can you work within my budget?",
        answer: "Absolutely! We're happy to work with various budgets and can suggest alternatives to achieve your desired look while staying within your price range. We'll discuss options during our consultation."
      }
    ]
  },
  {
    name: "Booking & Planning",
    icon: "📅",
    questions: [
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 2-3 months in advance for weddings and large events. For smaller arrangements, 1-2 weeks notice is usually sufficient. Popular dates fill up quickly, so early booking is advised."
      },
      {
        question: "What's included in a consultation?",
        answer: "Our consultation includes discussing your vision, budget, venue details, color preferences, and flower choices. We'll provide recommendations and create a custom proposal for your event."
      },
      {
        question: "Do you require a deposit?",
        answer: "Yes, we require a 50% deposit to secure your booking, with the remaining balance due 1 week before your event. This helps us secure the best flowers and materials for your special day."
      },
      {
        question: "Can I make changes to my order?",
        answer: "Changes can be made up to 2 weeks before your event. After that, changes may incur additional fees. We'll work with you to accommodate reasonable modifications."
      }
    ]
  },
  {
    name: "Flowers & Design",
    icon: "🌸",
    questions: [
      {
        question: "Do you use seasonal flowers?",
        answer: "We primarily use seasonal flowers for the best quality and sustainability. However, we can source specific flowers if needed for your special occasion, though this may affect pricing."
      },
      {
        question: "Can you match specific colors or themes?",
        answer: "Yes! We can work with any color palette or theme. Bring photos, fabric swatches, or describe your vision, and we'll create arrangements that perfectly complement your style."
      },
      {
        question: "What if I have allergies to certain flowers?",
        answer: "We can accommodate allergies by avoiding specific flowers or using hypoallergenic alternatives. Please let us know about any allergies during our consultation."
      },
      {
        question: "How long will the flowers last?",
        answer: "Fresh flowers typically last 5-7 days when properly cared for. We provide care instructions and can recommend preservation options for special arrangements."
      }
    ]
  },
  {
    name: "Wedding Services",
    icon: "💒",
    questions: [
      {
        question: "What's included in a wedding package?",
        answer: "Our wedding packages typically include bridal bouquet, bridesmaid bouquets, boutonnieres, ceremony decor, reception centerpieces, and cake flowers. We can customize packages based on your needs."
      },
      {
        question: "Do you provide arch decorations?",
        answer: "Yes! We create stunning floral arches for ceremonies, photo backdrops, and reception entrances. We can work with various arch styles and sizes."
      },
      {
        question: "Can you match my wedding colors?",
        answer: "Absolutely! We'll work closely with you to ensure all floral arrangements perfectly match your wedding color scheme and overall theme."
      },
      {
        question: "Do you handle multiple wedding events?",
        answer: "Yes, we can handle multiple events like engagement parties, mehendi, sangeet, and reception. We offer package discounts for multiple events."
      }
    ]
  },
  {
    name: "Corporate & Events",
    icon: "🏢",
    questions: [
      {
        question: "What types of corporate events do you handle?",
        answer: "We handle conferences, product launches, office decorations, client meetings, award ceremonies, and any business event that needs professional floral decor."
      },
      {
        question: "Do you provide ongoing office decor services?",
        answer: "Yes! We offer weekly or monthly office flower services to keep your workspace beautiful and welcoming for employees and clients."
      },
      {
        question: "Can you work with event planners?",
        answer: "Absolutely! We regularly collaborate with event planners and can work as part of your event team to ensure seamless coordination."
      },
      {
        question: "Do you handle large-scale events?",
        answer: "Yes, we can handle events of any size, from intimate gatherings to large corporate functions with hundreds of guests."
      }
    ]
  },
  {
    name: "Technical & Support",
    icon: "🔧",
    questions: [
      {
        question: "What areas do you serve?",
        answer: "We primarily serve Patna and surrounding areas in Bihar. For events outside our usual service area, we may charge additional travel fees."
      },
      {
        question: "What if there's an issue on the day of my event?",
        answer: "We have backup plans and emergency contacts. Our team is available throughout your event to handle any issues that may arise."
      },
      {
        question: "Do you provide setup and cleanup?",
        answer: "Yes, we handle complete setup and can arrange cleanup services. We'll discuss your specific needs during consultation."
      },
      {
        question: "Can I see examples of your work?",
        answer: "Yes! Check out our gallery page or Instagram @thesinghcelebration to see our portfolio. We can also show you samples during consultation."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Flatten all questions for search
  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.name }))
  );

  // Filter questions based on search and category
  const filteredQuestions = allQuestions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Find answers to common questions about our floral design services, 
              booking process, and everything you need to know about working with us.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === "All"
                    ? "bg-rose-600 text-white"
                    : "bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600"
                }`}
              >
                All Questions
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? "bg-rose-600 text-white"
                      : "bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600"
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Results Summary */}
            {searchTerm && (
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Found {filteredQuestions.length} answer{filteredQuestions.length !== 1 ? 's' : ''} for "{searchTerm}"
                </p>
              </div>
            )}

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((faq, index) => (
                  <div key={index} className="card">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <span className="text-sm text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      {expandedQuestions[index] ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 ml-4" />
                      )}
                    </button>
                    {expandedQuestions[index] && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No answers found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse all categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="btn-primary"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? We're here to help! 
              Get in touch with us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917979962614" className="bg-white text-rose-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a href="mailto:thesinghcelebrationguesthouse@gmail.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-rose-600 transition-colors flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a href="https://wa.me/917979962614" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-rose-600 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 text-center mb-8">
              More Helpful Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/help" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <HelpCircle className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Help Center</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive guides and tutorials for all our services.
                </p>
              </Link>
              <Link href="/contact" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <Phone className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h4>
                <p className="text-gray-600 text-sm">
                  Get in touch for personalized assistance and quotes.
                </p>
              </Link>
              <Link href="/gallery" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mx-auto mb-4 block">🌸</span>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Work</h4>
                <p className="text-gray-600 text-sm">
                  Browse our portfolio to see examples of our floral designs.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 