import Link from "next/link";
import { Award, Users, Heart, Star, Calendar, MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
    return (
    <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                About{" "}
                <span className="gradient-text">Nandan Flower</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are passionate floral designers dedicated to creating breathtaking 
                arrangements that tell your unique story. With over 15 years of experience, 
                we bring creativity, expertise, and love to every bloom we touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get in Touch
                </Link>
                <Link href="/blog" className="btn-secondary text-lg px-8 py-4">
                  Read Our Blog
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/~Nandan Singh.jpg"
                  alt="Nandan Singh - Founder of Nandan Flower"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-rose-600" />
                  <span className="font-medium text-gray-900">15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2009, Nandan Flower began as a small passion project in a 
                backyard garden. What started with simple arrangements for friends and 
                family has grown into a beloved floral design studio serving the entire region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey has been driven by a simple belief: every flower has a story, 
                and every arrangement should tell yours. We've had the privilege of being 
                part of thousands of special moments, from intimate weddings to grand celebrations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push the boundaries of floral design while staying 
                true to our roots - creating arrangements that are not just beautiful, 
                but meaningful and memorable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/IMG-20250501-WA0010.jpg"
                    alt="Our floral design process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/IMG-20250501-WA0009.jpg"
                    alt="Beautiful flower arrangements"
                    className="w-full h-full object-cover"
                  />
                </div>
                            </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/IMG-20250501-WA0008.jpg"
                    alt="Wedding floral design"
                    className="w-full h-full object-cover"
                  />
                        </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/IMG-20250501-WA0007.jpg"
                    alt="Event decoration"
                    className="w-full h-full object-cover"
                  />
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from selecting the perfect blooms 
              to creating arrangements that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                Passion for Beauty
              </h3>
              <p className="text-gray-600">
                We believe that beauty has the power to transform spaces and uplift spirits. 
                Every arrangement we create is infused with our passion for floral artistry.
              </p>
            </div>
            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                Quality & Excellence
              </h3>
              <p className="text-gray-600">
                We never compromise on quality. From the freshest blooms to the finest 
                materials, we ensure every detail meets our high standards.
              </p>
            </div>
            <div className="card text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
                                </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                Client Partnership
                                    </h3>
              <p className="text-gray-600">
                We work closely with our clients to understand their vision and bring 
                their dreams to life. Your satisfaction is our greatest achievement.
              </p>
            </div>
                                </div>
                            </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented team of floral designers brings together creativity, expertise, 
              and dedication to create unforgettable arrangements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="/img/~Nandan Singh.jpg"
                  alt="Nandan Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Nandan Singh
              </h3>
              <p className="text-rose-600 font-medium mb-4">Founder & Lead Designer</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of experience, Nandan brings his artistic vision and 
                technical expertise to every project, ensuring each arrangement tells a story.
              </p>
            </div>
            <div className="card text-center p-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Priya Sharma
              </h3>
              <p className="text-rose-600 font-medium mb-4">Senior Floral Designer</p>
              <p className="text-gray-600 text-sm">
                Priya specializes in wedding and event design, bringing creativity and 
                attention to detail to create magical moments for our clients.
              </p>
            </div>
            <div className="card text-center p-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Creative Team
              </h3>
              <p className="text-rose-600 font-medium mb-4">Design Specialists</p>
              <p className="text-gray-600 text-sm">
                Our talented team of designers, assistants, and craftspeople work together 
                to bring your floral dreams to life with passion and precision.
              </p>
            </div>
                    </div>
                </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold mb-2">1000+</div>
              <div className="text-rose-100">Events Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold mb-2">500+</div>
              <div className="text-rose-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold mb-2">15+</div>
              <div className="text-rose-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold mb-2">50+</div>
              <div className="text-rose-100">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600">
                Ready to start your floral journey? We'd love to hear from you and 
                help bring your vision to life.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  254, Patliputra Colony<br />
                  Patna 800013, Bihar<br />
                  India
                </p>
                            </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">
                  <a href="tel:+917979962614" className="hover:text-rose-600 transition-colors">
                    +91 7979962614
                  </a><br />
                  Mon-Fri: 9AM-7PM<br />
                  Sat: 10AM-6PM<br />
                  Sun: By appointment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-rose-600" />
            </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">
                  <a href="mailto:thesinghcelebrationguesthouse@gmail.com" className="hover:text-rose-600 transition-colors">
                    thesinghcelebrationguesthouse@gmail.com
                  </a><br />
                  We reply within 24 hours<br />
                  Available for urgent inquiries
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Schedule a Consultation
                </Link>
                <a 
                  href="https://wa.me/917979962614" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2"
                >
                  <span>📱</span>
                  WhatsApp Us
                </a>
              </div>
              
              {/* Social Media Links */}
              <div className="flex justify-center gap-4 mt-8">
                <a
                  href="https://www.instagram.com/thesinghcelebration/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://www.facebook.com/thesinghcelebration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://www.youtube.com/channel/UC3svN8FoR-XetWsZ8_OaMZw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="YouTube"
                >
                  📺
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
} 