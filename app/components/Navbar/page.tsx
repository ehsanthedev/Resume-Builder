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
    { name: 'Blog', href: '/pages/Blog' },
  ];

  const legalNavItems = [
    { name: 'Terms & Conditions', href: '/pages/Terms' },
    { name: 'Privacy Policy', href: '/pages/Privacy' },
    { name: 'Contact us', href: '/pages/Contact' },
    { name: 'FAQ', href: '/pages/FAQ' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        !(e.target as HTMLElement).closest('.mobile-menu-container')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/90 py-4 backdrop-blur-sm'
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
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-10'
                }`}
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

            {/* Secondary Navigation */}
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

              {/* Legal Dropdown */}
              <div className="relative group">
                <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center">
                  More
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {legalNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

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
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-md"
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

      {/* Mobile menu - Slides down from top */}
      <div
        className={`mobile-menu-container md:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-xl transform transition-all duration-300 ease-out ${
          isMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
        style={{
          height: isMenuOpen ? 'calc(100vh - 4rem)' : '0',
          top: isScrolled ? '4rem' : '5rem',
        }}
      >
        <div className="overflow-y-auto h-full">
          <div className="flex flex-col h-full">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Primary Navigation */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Main Menu
                  </h3>
                  <div className="space-y-1">
                    {primaryNavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg px-3"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Secondary Navigation */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Resources
                  </h3>
                  <div className="space-y-1">
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg px-3"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legal Navigation */}
              <div className="mb-6 mt-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Legal & Support
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {legalNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg px-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-auto p-4 border-t">
              <Link
                href="/pages/Login"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
