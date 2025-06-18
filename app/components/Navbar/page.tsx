'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items using arrays
  const primaryNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Templates', href: '/pages/Templates' },
    { name: 'Builder', href: '/pages/Builder' },
    { name: 'Examples', href: '/pages/Example' },
    { name: 'Tips & Guides', href: '/pages/Tips' },
  ];

  const secondaryNavItems = [
    { name: 'About', href: '/pages/About' },
    { name: 'Pricing', href: '/pages/Prices' },
    // Add new pages here
    { name: 'Terms & Conditions', href: '/pages/Terms' },
    { name: 'Privacy Policy', href: '/pages/Privacy' },
    { name: 'Contact us', href: '/pages/Contact' },
    { name: 'FAQ', href: '/pages/FAQ' },
    { name: 'Blog', href: '/pages/Blog' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2 h-16' : 'bg-white/90 py-4 h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/cv-logo.png"
                alt="CV Craft Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Primary Navigation */}
            <div className="flex space-x-6">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Secondary Navigation - Updated with new items */}
            <div className="flex items-center space-x-3 ml-6">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-3 pl-2">
                <Link
                  href="/pages/Login"
                  className="px-4 py-2 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          {[...primaryNavItems, ...secondaryNavItems].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <Link
              href="/pages/Login"
              className="block w-full text-center px-4 py-2 mb-2 text-blue-600 font-medium rounded-lg hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
