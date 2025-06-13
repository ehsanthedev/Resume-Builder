// app/templates/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Template data
const allTemplates = [
  {
    id: 1,
    name: 'Modern Professional',
    category: 'Professional',
    description: 'Clean layout perfect for corporate roles',
    popularity: 95,
    image: '/templates/modern-professional.jpg'
  },
  {
    id: 2,
    name: 'Creative Portfolio',
    category: 'Creative',
    description: 'For designers and creative professionals',
    popularity: 87,
    image: '/templates/creative-portfolio.jpg'
  },
  {
    id: 3,
    name: 'Executive Blue',
    category: 'Executive',
    description: 'Sophisticated design for senior roles',
    popularity: 92,
    image: '/templates/executive-blue.jpg'
  },
  {
    id: 4,
    name: 'Tech Minimal',
    category: 'Minimalist',
    description: 'Optimized for tech and engineering roles',
    popularity: 89,
    image: '/templates/tech-minimal.jpg'
  },
  {
    id: 5,
    name: 'Fresh Graduate',
    category: 'Student',
    description: 'Perfect for students and entry-level candidates',
    popularity: 85,
    image: '/templates/fresh-graduate.jpg'
  },
  {
    id: 6,
    name: 'Corporate Classic',
    category: 'Professional',
    description: 'Timeless design for all industries',
    popularity: 90,
    image: '/templates/corporate-classic.jpg'
  },
  {
    id: 7,
    name: 'Artistic Flair',
    category: 'Creative',
    description: 'Showcase your creative personality',
    popularity: 82,
    image: '/templates/artistic-flair.jpg'
  },
  {
    id: 8,
    name: 'Simple Elegance',
    category: 'Minimalist',
    description: 'Understated yet professional',
    popularity: 88,
    image: '/templates/simple-elegance.jpg'
  },
  {
    id: 9,
    name: 'Senior Executive',
    category: 'Executive',
    description: 'For C-level and director positions',
    popularity: 91,
    image: '/templates/senior-executive.jpg'
  },
  {
    id: 10,
    name: 'Academic Scholar',
    category: 'Student',
    description: 'Ideal for research and academic positions',
    popularity: 84,
    image: '/templates/academic-scholar.jpg'
  },
  {
    id: 11,
    name: 'Business Pro',
    category: 'Professional',
    description: 'For finance, consulting, and business roles',
    popularity: 93,
    image: '/templates/business-pro.jpg'
  },
  {
    id: 12,
    name: 'Design Vision',
    category: 'Creative',
    description: 'Showcases design sensibilities',
    popularity: 86,
    image: '/templates/design-vision.jpg'
  },
  {
    id: 13,
    name: 'Clean Lines',
    category: 'Minimalist',
    description: 'Ultra-modern minimalist approach',
    popularity: 87,
    image: '/templates/clean-lines.jpg'
  },
  {
    id: 14,
    name: 'Leadership',
    category: 'Executive',
    description: 'For managers and team leaders',
    popularity: 89,
    image: '/templates/leadership.jpg'
  },
  {
    id: 15,
    name: 'Intern Ready',
    category: 'Student',
    description: 'Designed specifically for internships',
    popularity: 83,
    image: '/templates/intern-ready.jpg'
  }
];

const categories = [
  { id: 'all', name: 'All Templates' },
  { id: 'Professional', name: 'Professional' },
  { id: 'Creative', name: 'Creative' },
  { id: 'Minimalist', name: 'Minimalist' },
  { id: 'Executive', name: 'Executive' },
  { id: 'Student', name: 'Student' },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", damping: 12 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter templates based on selected category and search query
  const filteredTemplates = allTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            CV Templates
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Choose from professionally designed templates to showcase your unique career journey
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="mb-8"
            initial="hidden"
            animate="show"
            variants={popIn}
            transition={{ delay: 0.3 }}
          >
            <div className="relative max-w-md">
              <motion.div
                whileFocus={{ boxShadow: "0 0 0 2px #3b82f6" }}
                className="flex items-center"
              >
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <motion.input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search templates..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  whileHover={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div 
            className="mb-4 text-gray-600"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            Showing {filteredTemplates.length} of {allTemplates.length} templates
          </motion.div>

          {/* Templates Grid */}
          <AnimatePresence mode="wait">
            {filteredTemplates.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredTemplates.map((template) => (
                  <motion.div 
                    key={template.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    variants={item}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    layout
                  >
                    <div className="relative h-64 bg-gray-100 overflow-hidden">
                      <motion.div 
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div>
                          <motion.h3 
                            className="text-white text-xl font-semibold"
                            whileHover={{ x: 5 }}
                          >
                            {template.name}
                          </motion.h3>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <motion.svg
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(template.popularity / 20) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  whileHover={{ scale: 1.2 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </motion.svg>
                              ))}
                            </div>
                            <motion.span 
                              className="text-white text-sm ml-1"
                              whileHover={{ scale: 1.1 }}
                            >
                              {template.popularity}%
                            </motion.span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 mb-4">{template.description}</p>
                      <div className="flex justify-between items-center">
                        <motion.span 
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          whileHover={{ scale: 1.05 }}
                        >
                          {template.category}
                        </motion.span>
                        <Link href={`/builder?template=${template.id}`}>
                          <motion.div
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Use Template 
                            <motion.span 
                              className="ml-1"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              →
                            </motion.span>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial="hidden"
                animate="show"
                variants={popIn}
                exit="hidden"
                key="no-results"
              >
                <h3 className="text-xl font-medium text-gray-600 mb-2">No templates found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <motion.button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-2 text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-lg bg-blue-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear all filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-800 text-gray-300 py-12"
        initial="hidden"
        animate="show"
        variants={slideUp}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Creative CV Builder</h3>
              <p className="mb-4">Create professional resumes that get you hired faster with our easy-to-use CV builder.</p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin'].map((social, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    className="text-gray-400 hover:text-white transition"
                    whileHover={{ y: -5 }}
                  >
                    <span className="sr-only">{social}</span>
                    <motion.div 
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Resources",
                items: ["Blog", "CV Templates", "Cover Letter Examples", "Job Search Tips", "Career Advice"]
              },
              {
                title: "Company",
                items: ["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"]
              },
              {
                title: "Popular Guides",
                items: ["ATS-Friendly CV Guide", "CV Format Guide", "Entry-Level CV Tips", "Career Change CV", "Executive CV Writing"]
              }
            ].map((column, colIndex) => (
              <div key={colIndex}>
                <h3 className="text-lg font-semibold text-white mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a href="#" className="hover:text-white transition block">{item}</a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <motion.div 
            className="border-t border-gray-700 mt-8 pt-8 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>© 2023 Creative CV Builder. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}