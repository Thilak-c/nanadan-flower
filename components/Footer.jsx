import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    blog: [
      { name: "Latest Posts", href: "/blog" },
      { name: "Popular Articles", href: "/blog/popular" },
      { name: "Categories", href: "/categories" },
      { name: "Authors", href: "/authors" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about/story" },
      { name: "Team", href: "/about/team" },
      { name: "Careers", href: "/careers" },
    ],
    support: [
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/thesinghcelebration/", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/thesinghcelebration", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/thesinghcelebration", icon: Twitter },
    { name: "YouTube", href: "https://www.youtube.com/channel/UC3svN8FoR-XetWsZ8_OaMZw", icon: Youtube },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Newsletter Section */}
      <div className="border-b border-gray-100">
        <div className="container-custom py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Stay Blooming with Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest floral inspiration, wedding tips, and exclusive content delivered to your inbox.
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
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                  Nandan Flower
                </h3>
                <p className="text-sm text-gray-500">Premium Blog</p>
              </div>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Discover the art of floral design, wedding inspiration, and behind-the-scenes stories. 
              We share our passion for creating beautiful moments through flowers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span className="text-sm">254, Patliputra Colony, Patna 800013, Bihar</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4 text-rose-500" />
                <span className="text-sm">+91 7979962614</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4 text-rose-500" />
                <span className="text-sm">thesinghcelebrationguesthouse@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Blog Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Blog</h4>
            <ul className="space-y-3">
              {footerLinks.blog.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-rose-600 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-rose-600 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-rose-600 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm text-gray-600">
                © {currentYear} Nandan Flower. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-200 hover:bg-rose-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Made with <Heart className="inline w-4 h-4 text-rose-500" /> by{" "}
              <a
                href="https://api.whatsapp.com/send?phone=+918008439762&text=Hi, from the website (nanadanflower.in) wanna talk to you"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700 font-medium"
              >
                &lt; Thilak / &gt;
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 