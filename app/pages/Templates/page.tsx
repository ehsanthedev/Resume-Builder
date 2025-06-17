// app/templates/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import TemplateCard from './templateCard';
import { allTemplates, categories } from './templatesData';
import PreviewModal from '../../components/PreviewModal';
import { Template } from './templates.interface';

// Animation variants (same as before)
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

const popIn: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20,
      duration: 0.4,
    }
  },
  exit: { 
    scale: 0.8, 
    opacity: 0,
    transition: { 
      duration: 0.3 
    }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TemplatesPage() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for preview modal
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  // Filter templates based on selected category and search query
  const filteredTemplates = allTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Preview Modal */}
      <AnimatePresence>
        {previewTemplate && (
          <PreviewModal 
            template={previewTemplate} 
            onClose={() => setPreviewTemplate(null)} 
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-indigo-500 blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Professional CV Templates
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
            animate="visible"
            exit={"exit"}
            variants={popIn}
            transition={{ delay: 0.3 }}
          >
            <div className="relative max-w-md">
              <div className="flex items-center">
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
              </div>
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
                  <TemplateCard 
                    key={template.id} 
                    template={template} 
                    onPreview={() => setPreviewTemplate(template)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial="hidden"
                animate="visible"
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