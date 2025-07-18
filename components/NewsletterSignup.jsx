"use client";
import { useState } from "react";
import { Mail, Heart, CheckCircle } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Welcome to Our Community!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for subscribing to our newsletter. You'll receive our latest floral inspiration, 
              tips, and exclusive content delivered straight to your inbox.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="btn-secondary"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                Stay Blooming with Our Newsletter
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Get exclusive access to our latest floral design tips, wedding inspiration, 
                seasonal guides, and behind-the-scenes stories. Join thousands of flower lovers 
                who get our premium content delivered weekly.
              </p>
              
              {/* Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Weekly floral inspiration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Exclusive DIY tutorials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Seasonal flower guides</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Early access to new content</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Join Our Community
              </h4>
              <p className="text-gray-600 mb-6">
                Subscribe now and never miss our latest floral stories and inspiration.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary py-3 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Subscribe Now
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup; 