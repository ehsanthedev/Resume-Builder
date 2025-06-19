// app/pages/FAQ.tsx
'use client';
import Head from 'next/head';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; 
import { useState } from 'react';
import {
  HelpCircle,
  CreditCard,
  FileText,
  User,
  Lock,
  Globe,
  Smartphone,
  Mail,
  Palette,
  RefreshCw,
  Download,
  Share2,
} from 'lucide-react';
import Footer from '@/app/components/Footer/page';

const FAQPage = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: 'How do I create a resume with CV Craft?',
      answer:
        'Creating a resume is simple! Just sign up for a free account, choose a template from our collection, fill in your information using our intuitive editor, and download your finished resume in PDF format.',
      icon: <FileText size={24} />,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 2,
      question: 'Is CV Craft really free to use?',
      answer:
        'Yes! We offer a robust free plan that includes access to all basic templates and features. We also offer premium plans with additional features like unlimited downloads, advanced templates, and priority support.',
      icon: <CreditCard size={24} />,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 3,
      question: 'Can I customize the design of my resume?',
      answer:
        'Absolutely! Our editor allows you to customize colors, fonts, spacing, and layout. You can also switch between different templates at any time without losing your content.',
      icon: <Palette size={24} />,
      color: 'from-purple-500 to-fuchsia-500',
    },
    {
      id: 4,
      question: 'How do I download my resume?',
      answer:
        "Once you're satisfied with your resume, click the 'Download' button at the top right of the editor. You can download in PDF format which is ready to print or send to employers.",
      icon: <Download size={24} />,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      id: 5,
      question: 'Can I share my resume directly from CV Craft?',
      answer:
        'Yes! With our premium plan, you can generate a shareable link to your resume that you can send to employers. Your resume will be hosted on our secure platform with optional password protection.',
      icon: <Share2 size={24} />,
      color: 'from-teal-500 to-emerald-500',
    },
    {
      id: 6,
      question: 'Will my resume pass through Applicant Tracking Systems (ATS)?',
      answer:
        'Absolutely! All our templates are designed to be ATS-friendly. We use standard formatting, clear section headings, and avoid complex layouts that might confuse ATS software.',
      icon: <RefreshCw size={24} />,
      color: 'from-emerald-500 to-green-500',
    },
    {
      id: 7,
      question: 'How do I update my resume in the future?',
      answer:
        'Simply log in to your account, open your saved resume, make any changes you need, and download the updated version. Your previous versions are saved automatically.',
      icon: <RefreshCw size={24} />,
      color: 'from-amber-500 to-yellow-500',
    },
    {
      id: 8,
      question: 'Is my personal information secure?',
      answer:
        'Security is our top priority. We use bank-grade encryption (SSL) to protect your data, and we never share your personal information with third parties without your consent. You can review our Privacy Policy for more details.',
      icon: <Lock size={24} />,
      color: 'from-violet-500 to-purple-500',
    },
    {
      id: 9,
      question: 'Can I use CV Craft on my mobile device?',
      answer:
        'Yes! Our platform is fully responsive and works on all devices. You can create, edit, and download your resume from your smartphone or tablet.',
      icon: <Smartphone size={24} />,
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 10,
      question: 'Do you offer cover letter templates as well?',
      answer:
        'Yes! We have a collection of professionally designed cover letter templates that match our resume designs. You can create a matching resume and cover letter set for a cohesive application.',
      icon: <FileText size={24} />,
      color: 'from-rose-500 to-red-500',
    },
  ];

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Head>
        <title>Frequently Asked Questions - CV Craft</title>
        <meta
          name="description"
          content="Find answers to common questions about CV Craft resume builder"
        />
      </Head>

      {/* Animated Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Find answers to common questions about creating, customizing, and
            downloading your professional resume
          </motion.p>
        </div>
      </motion.header>

      {/* FAQ Cards */}
      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-6">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={cardAnimation}
              className="overflow-hidden"
            >
              <div
                className={`bg-white rounded-xl shadow-lg border-l-8 border-blue-500 cursor-pointer transition-all duration-300 ${
                  activeId === faq.id
                    ? 'ring-2 ring-blue-300'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="p-5 flex items-start">
                  <div
                    className={`bg-gradient-to-r ${faq.color} text-white p-3 rounded-lg mr-4 flex-shrink-0`}
                  >
                    {faq.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                      {faq.question}
                      <span className="ml-auto transform transition-transform duration-300">
                        {activeId === faq.id ? (
                          <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-500"
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
                        )}
                      </span>
                    </h3>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeId === faq.id ? 'auto' : 0,
                        opacity: activeId === faq.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* Support Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 mt-8"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white rounded-full p-4 mb-6"
          >
            <HelpCircle className="text-blue-600" size={40} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Still have questions?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Our support team is ready to help you create the perfect resume
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <Mail className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600">support@cvcraft.com</p>
                <p className="text-gray-600">
                  Typically responds within 24 hours
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                  <FileText className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Knowledge Base
                </h3>
                <p className="text-gray-600">Browse our help articles</p>
                <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Visit Help Center
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default FAQPage;
