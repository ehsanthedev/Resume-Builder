// app/page.js (for Next.js 13+ App Router)
'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute bottom-20 right-1/3 w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatePresence>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Craft Your Perfect CV
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Build a professional CV that gets you noticed
            </motion.p>
          </AnimatePresence>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/Builder">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg cursor-pointer shadow-lg"
              >
                Start Building Now
              </motion.div>
            </Link>
            <Link href="/learn">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold text-lg cursor-pointer shadow-lg"
              >
                Learn CV Tips
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: '1. Enter Your Details',
                description: 'Fill in your work history, education, and skills'
              },
              {
                icon: '🎨',
                title: '2. Customize Design',
                description: 'Choose fonts, colors, and layout that match your personality'
              },
              {
                icon: '💼',
                title: '3. Download & Apply',
                description: 'Export as PDF and start applying for jobs'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.3 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Use Creative CV?
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                title: 'Professional Quality',
                description: 'Create CVs that look like they were designed by career experts'
              },
              {
                title: 'ATS Optimized',
                description: 'Our formatting ensures applicant tracking systems can read your CV properly'
              },
              {
                title: 'Time Saving',
                description: 'Build a polished CV in minutes instead of hours'
              },
              {
                title: 'Always Up-to-Date',
                description: 'Get notified when your CV needs refreshing with our smart suggestions'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="mb-8 last:mb-0 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.h3 
                  className="text-xl font-semibold mb-2 text-blue-600"
                  whileInView={{ 
                    backgroundSize: ['100% 0%', '100% 100%'],
                    backgroundPosition: ['0 100%', '0 0'],
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3,
                    ease: "easeInOut" 
                  }}
                >
                  {benefit.title}
                </motion.h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Manager",
                quote: "Creative CV helped me land 3 interviews in my first week of applying. The clean design made my experience stand out."
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                quote: "As a recent graduate, I was struggling to get noticed. Creative CV's professional layout finally got me the responses I wanted."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 flex items-center justify-center text-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, delay: 1.5 + index * 0.3, type: "spring" }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        {/* Floating bubbles */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Your Dream CV?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of professionals who improved their job prospects with Creative CV
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/Builder">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg cursor-pointer shadow-lg"
                animate={{ 
                  boxShadow: [
                    "0px 5px 15px rgba(0,0,0,0.1)",
                    "0px 15px 30px rgba(59, 130, 246, 0.4)",
                    "0px 5px 15px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Get Started Free
              </motion.div>
            </Link>
            <Link href="/demo">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold text-lg cursor-pointer shadow-lg"
              >
                See Live Demo
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <motion.footer 
        className="bg-gray-800 text-gray-300 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                    </div>
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