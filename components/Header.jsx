"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, Heart, User, ChevronDown, HelpCircle, Shield, BookOpen } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-serif font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                Nandan Flower
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Premium Blog</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSupportDropdownOpen(!isSupportDropdownOpen)}
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 flex items-center gap-1 relative group"
              >
                Support
                <ChevronDown className={`w-4 h-4 transition-transform ${isSupportDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              
              {isSupportDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/faq"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                    onClick={() => setIsSupportDropdownOpen(false)}
                  >
                    <HelpCircle className="w-4 h-4" />
                    FAQ
                  </Link>
                  <Link
                    href="/help"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                    onClick={() => setIsSupportDropdownOpen(false)}
                  >
                    <BookOpen className="w-4 h-4" />
                    Help Center
                  </Link>
                  <Link
                    href="/privacy"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                    onClick={() => setIsSupportDropdownOpen(false)}
                  >
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/search"
              className="p-2 text-gray-600 hover:text-rose-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/favorites"
              className="p-2 text-gray-600 hover:text-rose-600 transition-colors relative"
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </Link>
            <Link
              href="/profile"
              className="p-2 text-gray-600 hover:text-rose-600 transition-colors"
              aria-label="Profile"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link href="/subscribe" className="btn-primary text-sm">
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-rose-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>



        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white animate-fade-in">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Support Links in Mobile Menu */}
              <div className="px-4 py-2 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Support</h4>
                <div className="space-y-1">
                  <Link
                    href="/faq"
                    className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <HelpCircle className="w-4 h-4" />
                    FAQ
                  </Link>
                  <Link
                    href="/help"
                    className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <BookOpen className="w-4 h-4" />
                    Help Center
                  </Link>
                  <Link
                    href="/privacy"
                    className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </Link>
                </div>
              </div>
              
              {/* Mobile Actions */}
              <div className="px-4 py-4 border-t border-gray-100">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Link
                    href="/search"
                    className="p-2 text-gray-600 hover:text-rose-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Search className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/favorites"
                    className="p-2 text-gray-600 hover:text-rose-600 transition-colors relative"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                  </Link>
                  <Link
                    href="/profile"
                    className="p-2 text-gray-600 hover:text-rose-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                  </Link>
                </div>
                <Link
                  href="/subscribe"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Subscribe
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 