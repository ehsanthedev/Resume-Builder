// app/pages/Blog.tsx
'use client';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Calendar,
  User,
  BookOpen,
  ArrowRight,
  Search,
  ChevronDown,
  ChevronUp,
  Mail,
  Clock,
  Eye,
  MessageSquare,
} from 'lucide-react';
import Footer from '@/app/components/Footer/page';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Articles', count: 12 },
    { id: 'design', name: 'Design Tips', count: 4 },
    { id: 'career', name: 'Career Advice', count: 5 },
    { id: 'interview', name: 'Interview Prep', count: 3 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Resume Design Trends That Will Get You Hired in 2025',
      excerpt:
        'Discover the latest resume design trends that hiring managers love and how to implement them in your own resume.',
      date: 'June 15, 2025',
      author: 'Sarah Chen',
      category: 'design',
      readTime: '6 min read',
      views: '1.2K',
      comments: 24,
      featured: true,
    },
    {
      id: 2,
      title: 'How to Tailor Your Resume for Different Job Applications',
      excerpt:
        'Learn the art of customizing your resume for each job application without starting from scratch every time.',
      date: 'June 10, 2025',
      author: 'Michael Rodriguez',
      category: 'career',
      readTime: '8 min read',
      views: '890',
      comments: 18,
      featured: false,
    },
    {
      id: 3,
      title: 'The Ultimate Guide to ATS-Friendly Resumes',
      excerpt:
        'Everything you need to know about Applicant Tracking Systems and how to optimize your resume to pass through them.',
      date: 'June 5, 2025',
      author: 'Alex Johnson',
      category: 'career',
      readTime: '10 min read',
      views: '2.4K',
      comments: 42,
      featured: true,
    },
    {
      id: 4,
      title: 'From Student to Professional: Crafting Your First Resume',
      excerpt:
        'A step-by-step guide for recent graduates on creating a compelling resume with limited work experience.',
      date: 'May 28, 2025',
      author: 'Priya Sharma',
      category: 'career',
      readTime: '7 min read',
      views: '1.1K',
      comments: 15,
      featured: false,
    },
    {
      id: 5,
      title: 'Color Psychology in Resume Design: What Works Best',
      excerpt:
        "How different colors affect hiring managers' perceptions and which color schemes are most effective.",
      date: 'May 20, 2025',
      author: 'Sarah Chen',
      category: 'design',
      readTime: '5 min read',
      views: '950',
      comments: 22,
      featured: false,
    },
    {
      id: 6,
      title: '5 Common Resume Mistakes That Are Costing You Interviews',
      excerpt:
        'Identify and fix these common resume errors that might be preventing you from landing interviews.',
      date: 'May 15, 2025',
      author: 'Michael Rodriguez',
      category: 'career',
      readTime: '8 min read',
      views: '1.8K',
      comments: 31,
      featured: true,
    },
  ];

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === null ||
      activeCategory === 'all' ||
      post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation functions
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  };

  const slideUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  const scaleUp = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.4, ease: 'easeOut' },
  };

  const staggerDelay = (index: number) => ({
    transition: { delay: index * 0.1 },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Head>
        <title>Blog - CV Craft | Expert Resume Tips & Career Advice</title>
        <meta
          name="description"
          content="Discover expert resume tips, career advice, and design trends on the CV Craft blog. Enhance your job search with our professional insights."
        />
      </Head>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-28 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[length:40px_40px]"></div>
        <div className="absolute top-20 -right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light opacity-30"></div>
        <div className="absolute bottom-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <BookOpen size={18} className="mr-2" />
              <span className="font-medium">Expert Career Insights</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Elevate Your Career Journey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              Discover professional resume tips, career advice, and design
              trends to help you land your dream job.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 max-w-md mx-auto"
            >
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search articles, tips, guides..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-1/4"
          >
            <div className="sticky top-24">
              {/* Mobile filters toggle */}
              <div
                className="lg:hidden flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <h2 className="text-lg font-bold">Filter Articles</h2>
                {mobileFiltersOpen ? <ChevronUp /> : <ChevronDown />}
              </div>

              <div
                className={`${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}
              >
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-6 mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="mr-2 text-blue-600" size={20} />
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <motion.li
                        key={category.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + parseInt(category.id) * 0.1,
                        }}
                      >
                        <button
                          onClick={() =>
                            setActiveCategory(
                              category.id === 'all' ? null : category.id
                            )
                          }
                          className={`flex justify-between items-center w-full px-3 py-2 rounded-lg transition ${
                            activeCategory === category.id ||
                            (activeCategory === null && category.id === 'all')
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Popular Topics */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6 mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="mr-2 text-blue-600" size={20} />
                    Popular Topics
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Resume Templates',
                      'ATS Optimization',
                      'Cover Letters',
                      'Job Search Strategies',
                      'Career Change',
                    ].map((topic, index) => (
                      <motion.div
                        key={topic}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSearchQuery(topic)}
                      >
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                          <BookOpen size={16} />
                        </div>
                        <span className="font-medium">{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Featured Post */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Featured Article</h3>
                  <div className="mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-32" />
                  </div>
                  <h4 className="font-bold mb-2">
                    The Complete Guide to Resume Formats
                  </h4>
                  <p className="text-blue-100 text-sm mb-4">
                    Learn which resume format is best for your career level and
                    industry.
                  </p>
                  <button className="text-white font-medium text-sm flex items-center">
                    Read Article
                    <ArrowRight className="ml-1" size={16} />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.aside>

          {/* Blog Posts */}
          <div className="lg:w-3/4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: item * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="animate-pulse">
                      <div className="bg-gray-200 h-48 w-full rounded-t-2xl"></div>
                      <div className="p-6">
                        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
                        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                  >
                    {/* Featured image */}
                    <div className="relative">
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 h-48 w-full rounded-t-2xl" />
                      {post.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        {post.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow">
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar className="mr-1" size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1" size={16} />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      <div className="mt-auto">
                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Eye className="mr-1" size={16} />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="mr-1" size={16} />
                            <span>{post.comments} comments</span>
                          </div>
                        </div>

                        <button className="w-full py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-medium rounded-lg flex items-center justify-center group">
                          Read full article
                          <ArrowRight
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                            size={16}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-xl p-12 text-center"
              >
                <div className="mx-auto bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <Search className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  No articles found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  We couldn't find any articles matching your search. Try a
                  different search term or browse our categories.
                </p>
                <button
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 transition"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory(null);
                  }}
                >
                  View All Articles
                </button>
              </motion.div>
            )}

            {/* Load more button */}
            {filteredPosts.length > 0 && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
              >
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 transition flex items-center mx-auto">
                  Load More Articles
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="inline-block bg-blue-100 p-4 rounded-full mb-6"
              >
                <Mail className="text-blue-600" size={40} />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                Get Career Insights Delivered to Your Inbox
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Subscribe to our newsletter for the latest resume tips, job
                search strategies, and career advice.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 transition">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default BlogPage;
