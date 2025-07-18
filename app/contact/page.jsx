"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "254, Patliputra Colony, Patna 800013, Bihar",
      link: "https://maps.google.com/?q=254+Patliputra+Colony+Patna+Bihar",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7979962614",
      link: "tel:+917979962614",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "thesinghcelebrationguesthouse@gmail.com",
      link: "mailto:thesinghcelebrationguesthouse@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 8:00 PM",
      link: null,
    },
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 lg:pt-20">
        <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ready to bring your floral vision to life? We'd love to hear from you and 
              help create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917979962614" className="btn-primary text-lg px-8 py-4">
                Call Us Now
              </a>
              <a href="mailto:thesinghcelebrationguesthouse@gmail.com" className="btn-secondary text-lg px-8 py-4">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                We're here to help bring your floral dreams to life.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="+91 7979962614"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your vision, budget, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you create the perfect floral experience. 
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visit Our Studio</h3>
                    <p className="text-gray-600">
                      254, Patliputra Colony<br />
                      Patna 800013, Bihar<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-2">
                      <a href="tel:+917979962614" className="hover:text-rose-600 transition-colors">
                        +91 7979962614
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Available for urgent inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-2">
                      <a href="mailto:thesinghcelebrationguesthouse@gmail.com" className="hover:text-rose-600 transition-colors">
                        thesinghcelebrationguesthouse@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent inquiries or last-minute arrangements, 
                  call us directly or send us a WhatsApp message.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+917979962614"
                    className="bg-rose-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-rose-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917979962614"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent floral arrangements and events 
              to get inspired for your own special occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/IMG-20250501-WA0006.jpg"
                alt="Wedding floral arrangement"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/IMG-20250501-WA0005.jpg"
                alt="Bridal bouquet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/IMG-20250501-WA0004.jpg"
                alt="Event decoration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/uploads/420167888_376533581741132_1160765742754453753_n.jpeg"
                alt="Floral centerpiece"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/gallery"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How far in advance should I book my floral arrangements?
                </h3>
                <p className="text-gray-600">
                  We recommend booking at least 2-3 months in advance for weddings and large events. 
                  For smaller arrangements, 1-2 weeks notice is usually sufficient.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer delivery and setup services?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide delivery and setup services for all our arrangements. 
                  We'll work with your venue to ensure everything is perfectly placed.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can you work within my budget?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We're happy to work with various budgets and can suggest 
                  alternatives to achieve your desired look while staying within your price range.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you use seasonal flowers?
                </h3>
                <p className="text-gray-600">
                  We primarily use seasonal flowers for the best quality and sustainability. 
                  However, we can source specific flowers if needed for your special occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 