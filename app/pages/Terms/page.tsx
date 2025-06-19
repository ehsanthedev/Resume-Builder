// app/pages/Terms.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; 
import {
  Check,
  Shield,
  Lock,
  FileText,
  User,
  CreditCard,
  Globe,
  Mail,
  Scale,
} from 'lucide-react';
import Footer from '@/app/components/Footer/page';

const TermsPage = () => {
  const terms = [
    {
      id: 1,
      title: 'Acceptance of Terms',
      icon: <Check size={24} />,
      content:
        'By using CV Craft ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the terms, you may not access the Service.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 2,
      title: 'Service Description',
      icon: <FileText size={24} />,
      content:
        'CV Craft provides an online platform for creating, editing, and downloading professional resumes. Our services include templates, design tools, and content suggestions.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 3,
      title: 'User Accounts',
      icon: <User size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>You must be at least 16 years old to create an account</li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials
          </li>
          <li>You agree to provide accurate and complete information</li>
          <li>
            We reserve the right to suspend or terminate accounts that violate
            these terms
          </li>
        </ul>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 4,
      title: 'Content Ownership',
      icon: <Scale size={24} />,
      content: (
        <div>
          <p>
            <strong className="font-medium">Your Content:</strong> You retain
            ownership of all personal information, resumes, and content you
            create using our Service.
          </p>
          <p className="mt-2">
            <strong className="font-medium">Our Content:</strong> All templates,
            designs, software, and website content (excluding user-generated
            content) are the property of CV Craft and protected by intellectual
            property laws.
          </p>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 5,
      title: 'Acceptable Use',
      icon: <Shield size={24} />,
      content: (
        <div>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Use the Service for any illegal purpose</li>
            <li>Upload or distribute malicious software</li>
            <li>Attempt to reverse engineer or hack our platform</li>
            <li>Impersonate any person or entity</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Resell or commercialize our templates without permission</li>
          </ul>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 6,
      title: 'Payments and Subscriptions',
      icon: <CreditCard size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Premium features require payment</li>
          <li>Subscription fees are billed in advance on a recurring basis</li>
          <li>You may cancel your subscription at any time</li>
          <li>No refunds for partial subscription periods</li>
        </ul>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 7,
      title: 'Data Privacy',
      icon: <Lock size={24} />,
      content: (
        <p>
          Your privacy is important to us. Our{' '}
          <Link
            href="/pages/Privacy"
            className="text-blue-600 hover:underline font-medium"
          >
            Privacy Policy
          </Link>{' '}
          explains how we collect, use, and protect your personal information.
        </p>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 8,
      title: 'Limitation of Liability',
      icon: <Shield size={24} />,
      content:
        'CV Craft shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 9,
      title: 'Modifications',
      icon: <FileText size={24} />,
      content:
        'We reserve the right to modify these Terms at any time. We will notify users of significant changes through our website or email. Continued use after changes constitutes acceptance of the new terms.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 10,
      title: 'Governing Law',
      icon: <Globe size={24} />,
      content:
        'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.',
      color: 'from-blue-500 to-indigo-500',
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
        <title>Terms and Conditions - CV Craft</title>
        <meta
          name="description"
          content="Read our Terms and Conditions for using CV Craft creative resume builder"
        />
      </Head>

      {/* Animated Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-4xl font-bold mb-3"
          >
            Terms and Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-blue-100"
          >
            Last Updated: June 18, 2025
          </motion.p>
        </div>
      </motion.header>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto px-4 py-8 text-center"
      >
        <div className="inline-block bg-white rounded-full px-4 py-2 shadow-md mb-6">
          <span className="text-blue-600 font-medium">
            Important Legal Information
          </span>
        </div>
        <p className="text-xl text-gray-700">
          Welcome to Creative Resume Builder! These Terms and Conditions outline
          the rules and regulations for the use of our website and services. By
          accessing this website, we assume you accept these terms and
          conditions.
        </p>
      </motion.div>

      {/* Terms Cards */}
      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {terms.map((term) => (
          <motion.div
            key={term.id}
            variants={cardAnimation}
            whileHover={{
              y: -10,
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            className={`bg-white rounded-xl overflow-hidden shadow-lg border-t-8 border-blue-500 transition-all duration-300`}
          >
            <div
              className={`p-5 bg-gradient-to-r ${term.color} text-white flex items-center`}
            >
              <div className="bg-white/20 p-3 rounded-lg mr-4">{term.icon}</div>
              <h2 className="text-xl font-bold">{term.title}</h2>
            </div>
            <div className="p-6">
              <div className="text-gray-700">{term.content}</div>
            </div>
          </motion.div>
        ))}
      </motion.main>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 mt-8"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white rounded-full p-2 mb-6">
            <Mail className="text-blue-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-700 mb-8">
            If you have any questions about these Terms, please contact us:
          </p>

          <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
            <p className="text-gray-800 mb-3">
              <strong>Email:</strong> legal@creativeresume.com
            </p>
            <p className="text-gray-800">
              <strong>Mail:</strong> Creative Resume Legal Department
              <br />
              123 Resume Street
              <br />
              San Francisco, CA 94107
            </p>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default TermsPage;
