import Link from "next/link";
import { Shield, Lock, Eye, Users, Database, Globe } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information when you use our services.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Last updated: January 15, 2024</span>
              <span>•</span>
              <span>Version 1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div className="card p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="#information-we-collect" className="block text-rose-600 hover:text-rose-700">1. Information We Collect</a>
                  <a href="#how-we-use-information" className="block text-rose-600 hover:text-rose-700">2. How We Use Information</a>
                  <a href="#information-sharing" className="block text-rose-600 hover:text-rose-700">3. Information Sharing</a>
                  <a href="#data-security" className="block text-rose-600 hover:text-rose-700">4. Data Security</a>
                </div>
                <div className="space-y-2">
                  <a href="#your-rights" className="block text-rose-600 hover:text-rose-700">5. Your Rights</a>
                  <a href="#cookies" className="block text-rose-600 hover:text-rose-700">6. Cookies & Tracking</a>
                  <a href="#third-party" className="block text-rose-600 hover:text-rose-700">7. Third-Party Services</a>
                  <a href="#contact" className="block text-rose-600 hover:text-rose-700">8. Contact Us</a>
                </div>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-12">
              {/* Information We Collect */}
              <section id="information-we-collect">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Database className="w-8 h-8 text-rose-600" />
                  1. Information We Collect
                </h2>
                <div className="prose-custom">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <p className="text-gray-600 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Contact us for consultations or quotes</li>
                    <li>Book our services for events</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Fill out contact forms on our website</li>
                    <li>Engage with us on social media</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Information</h3>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, address</li>
                    <li><strong>Event Details:</strong> Event type, date, venue, guest count, budget</li>
                    <li><strong>Preferences:</strong> Color schemes, flower preferences, design styles</li>
                    <li><strong>Payment Information:</strong> Billing details (processed securely through payment providers)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-4">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, links clicked)</li>
                    <li>Location data (city/country level, not precise location)</li>
                  </ul>
                </div>
              </section>

              {/* How We Use Information */}
              <section id="how-we-use-information">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-rose-600" />
                  2. How We Use Information
                </h2>
                <div className="prose-custom">
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Provide and improve our floral design services</li>
                    <li>Communicate with you about your events and bookings</li>
                    <li>Send you relevant information about our services and promotions</li>
                    <li>Process payments and maintain financial records</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Analyze website usage to improve user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </section>

              {/* Information Sharing */}
              <section id="information-sharing">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-rose-600" />
                  3. Information Sharing
                </h2>
                <div className="prose-custom">
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted partners who help us provide services (payment processors, delivery services)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Lock className="w-8 h-8 text-rose-600" />
                  4. Data Security
                </h2>
                <div className="prose-custom">
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure payment processing through trusted providers</li>
                    <li>Regular backups and disaster recovery procedures</li>
                  </ul>
                  <p className="text-gray-600">
                    However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-rose-600" />
                  5. Your Rights
                </h2>
                <div className="prose-custom">
                  <p className="text-gray-600 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                    <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications at any time</li>
                  </ul>
                  <p className="text-gray-600">
                    To exercise these rights, please contact us using the information provided at the end of this policy.
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Eye className="w-8 h-8 text-rose-600" />
                  6. Cookies & Tracking
                </h2>
                <div className="prose-custom">
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar technologies to enhance your experience on our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </section>

              {/* Third-Party Services */}
              <section id="third-party">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  7. Third-Party Services
                </h2>
                <div className="prose-custom">
                  <p className="text-gray-600 mb-4">
                    Our website and services may contain links to third-party websites or integrate with third-party services:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Social media platforms (Instagram, Facebook, YouTube)</li>
                    <li>Payment processors (Razorpay, PayPal)</li>
                    <li>Analytics services (Google Analytics)</li>
                    <li>Email marketing platforms</li>
                  </ul>
                  <p className="text-gray-600">
                    These third-party services have their own privacy policies. We encourage you to review their policies before providing any personal information.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  8. Contact Us
                </h2>
                <div className="prose-custom">
                  <p className="text-gray-600 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="card p-6 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Nandan Flower</h3>
                        <p className="text-gray-600 text-sm">
                          254, Patliputra Colony<br />
                          Patna 800013, Bihar<br />
                          India
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Contact Details</h3>
                        <p className="text-gray-600 text-sm">
                          Phone: <a href="tel:+917979962614" className="text-rose-600 hover:text-rose-700">+91 7979962614</a><br />
                          Email: <a href="mailto:thesinghcelebrationguesthouse@gmail.com" className="text-rose-600 hover:text-rose-700">thesinghcelebrationguesthouse@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Policy Updates */}
            <div className="card p-6 mt-12 bg-rose-50 border-rose-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Policy Updates
              </h3>
              <p className="text-gray-600 text-sm">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-gray-600 mb-6">
              We're committed to protecting your privacy and being transparent about our data practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/faq" className="btn-secondary">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 