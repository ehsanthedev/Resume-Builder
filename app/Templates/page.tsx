// app/templates/page.js
'use client'; // Required for client-side interactivity

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">CV Templates</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Choose from professionally designed templates to showcase your unique career journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-gray-600">
            Showing {filteredTemplates.length} of {allTemplates.length} templates
          </div>

          {/* Templates Grid */}
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src={template.image}
                      alt={template.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                      <div>
                        <h3 className="text-white text-xl font-semibold">{template.name}</h3>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(template.popularity / 20) ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-white text-sm ml-1">{template.popularity}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {template.category}
                      </span>
                      <Link 
                        href={`/builder?template=${template.id}`} 
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Use Template →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No templates found</h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}