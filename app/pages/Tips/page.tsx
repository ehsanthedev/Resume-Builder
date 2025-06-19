"use client"
import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion'; 

// Define TypeScript interfaces
interface Category {
  id: string;
  name: string;
}

interface Guide {
  id: number;
  title: string;
  category: string;
  description: string;
  readTime: string;
  featured?: boolean;
}

export default function TipsAndGuides() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All Topics' },
    { id: 'writing', name: 'CV Writing' },
    { id: 'design', name: 'Design Tips' },
    { id: 'ats', name: 'ATS Optimization' },
    { id: 'industry', name: 'Industry Specific' },
    { id: 'interview', name: 'Interview Prep' },
  ];

  // Sample guide data
  const guides: Guide[] = [
    {
      id: 1,
      title: '10 Essential Elements Every CV Must Have',
      category: 'writing',
      description: 'Learn the critical components that make your CV stand out to recruiters and hiring managers.',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How to Optimize Your CV for Applicant Tracking Systems',
      category: 'ats',
      description: 'Discover the secrets to making your CV pass through automated screening systems.',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Design Principles for a Professional CV',
      category: 'design',
      description: 'Create a visually appealing CV that communicates professionalism and attention to detail.',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Tailoring Your CV for Different Industries',
      category: 'industry',
      description: 'Learn how to customize your CV for tech, healthcare, finance, and creative industries.',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Quantifying Achievements: Turning Responsibilities into Results',
      category: 'writing',
      description: 'Transform your work experience into measurable achievements that impress employers.',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Top 5 CV Mistakes to Avoid in 2023',
      category: 'writing',
      description: 'Common pitfalls that could be costing you interviews and how to fix them.',
      readTime: '4 min read'
    },
    {
      id: 7,
      title: 'How to Prepare for Behavioral Interviews',
      category: 'interview',
      description: 'Strategies to ace the most common interview questions with confidence.',
      readTime: '8 min read'
    },
    {
      id: 8,
      title: 'CV Formats: Chronological vs Functional vs Hybrid',
      category: 'design',
      description: 'Choose the right structure for your experience level and career goals.',
      readTime: '6 min read'
    }
  ];

  // Filter guides based on category and search
  const filteredGuides = guides.filter(guide => {
    const matchesCategory = activeCategory === 'all' || guide.category === activeCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" as const  // Add 'as const' here
    }
  }
};

  const categoryAnimation = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Head>
        <title>CV Tips & Guides | Professional Resume Advice</title>
        <meta name="description" content="Expert CV writing tips, design guides, and career advice to help you create a winning resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center py-12"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Expert CV Tips & Guides
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Professional advice to help you create a standout resume that gets noticed by employers and passes ATS systems.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            variants={fadeIn}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search tips and guides..."
                className="w-full px-6 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-3 top-3 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Search
              </motion.button>
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Guides */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Guides</h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {guides.filter(g => g.featured).map((guide, index) => (
              <motion.div
                key={guide.id}
                variants={cardAnimation}
                custom={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-3">
                    {categories.find(c => c.id === guide.category)?.name}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{guide.readTime}</span>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="text-indigo-600 font-medium hover:text-indigo-800 transition flex items-center"
                    >
                      Read Guide →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Category Filter */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-wrap gap-3 mb-8"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={categoryAnimation}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* All Guides */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {activeCategory === 'all' ? 'All Guides' : `${categories.find(c => c.id === activeCategory)?.name} Guides`}
          </h2>
          
          <AnimatePresence mode="wait">
            {filteredGuides.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="text-gray-500 mb-4">No guides found matching your search</div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Clear filters
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="guides-list"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredGuides.map((guide, index) => (
                    <motion.div
                      key={guide.id}
                      variants={cardAnimation}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">
                            {categories.find(c => c.id === guide.category)?.name}
                          </span>
                          <span className="text-gray-500 text-sm">{guide.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">{guide.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition flex items-center"
                        >
                          Read Full Guide
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Newsletter */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get CV Tips Delivered to Your Inbox</h2>
            <p className="mb-6 max-w-xl mx-auto">Subscribe to our newsletter and receive expert advice, industry insights, and template updates to help you land your dream job.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition whitespace-nowrap"
              >
                Subscribe Now
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-gray-300 py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Creative CV Builder</h3>
              <p className="mb-4">Create professional resumes that get you hired faster with our easy-to-use CV builder.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">CV Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Cover Letter Examples</a></li>
                <li><a href="#" className="hover:text-white transition">Job Search Tips</a></li>
                <li><a href="#" className="hover:text-white transition">Career Advice</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Popular Guides</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">ATS-Friendly CV Guide</a></li>
                <li><a href="#" className="hover:text-white transition">CV Format Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Entry-Level CV Tips</a></li>
                <li><a href="#" className="hover:text-white transition">Career Change CV</a></li>
                <li><a href="#" className="hover:text-white transition">Executive CV Writing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>© 2023 Creative CV Builder. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}