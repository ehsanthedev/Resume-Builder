// app/pages/Privacy.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; 
import {
  User,
  Shield,
  Lock,
  CreditCard,
  Globe,
  Mail,
  BookOpen,
  Cookie,
  Baby,
  Bell,
  Database,
  FileText,
  Gauge,
} from 'lucide-react';
import Footer from '@/app/components/Footer/page';

const PrivacyPage = () => {
  const privacySections = [
    {
      id: 1,
      title: 'Information We Collect',
      icon: <Database size={24} />,
      content: (
        <div>
          <p>
            We collect personal information that you voluntarily provide to us
            when you:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Create an account</li>
            <li>Build or edit a resume</li>
            <li>Subscribe to our services</li>
            <li>Contact our support team</li>
          </ul>
          <p className="mt-4">
            The types of personal information we collect may include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Contact Information:</strong> Name, email address, phone
              number
            </li>
            <li>
              <strong>Professional Information:</strong> Employment history,
              education, skills
            </li>
            <li>
              <strong>Payment Information:</strong> Billing address, payment
              card details
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information
            </li>
          </ul>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      icon: <Gauge size={24} />,
      content: (
        <div>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Provide, operate, and maintain our services</li>
            <li>Create and manage your resume documents</li>
            <li>Process transactions and send payment confirmations</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Communicate with you, including responding to inquiries</li>
            <li>Send promotional emails (you can opt-out anytime)</li>
            <li>Prevent fraud and enhance security</li>
          </ul>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 3,
      title: 'Data Sharing and Disclosure',
      icon: <Shield size={24} />,
      content: (
        <div>
          <p>
            We do not sell your personal information. We may share information
            with:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Service Providers:</strong> Third parties who help us
              operate our services
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger
              or acquisition
            </li>
          </ul>
          <p className="mt-4">
            We use Google Analytics to collect anonymous usage data. You can
            opt-out through Google's Ads Settings.
          </p>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 4,
      title: 'Data Security',
      icon: <Lock size={24} />,
      content: (
        <div>
          <p>
            We implement industry-standard security measures to protect your
            information:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>SSL encryption for all data transmissions</li>
            <li>Secure server infrastructure with firewalls</li>
            <li>Regular security audits and vulnerability testing</li>
            <li>Limited employee access to personal data</li>
          </ul>
          <p className="mt-4">
            While we strive to protect your information, no security system is
            impenetrable. We cannot guarantee absolute security of your data.
          </p>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 5,
      title: 'Your Privacy Rights',
      icon: <User size={24} />,
      content: (
        <div>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact us at privacy@cvcraft.com. We
            respond to all requests within 30 days.
          </p>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 6,
      title: 'Data Retention',
      icon: <BookOpen size={24} />,
      content: (
        <div>
          <p>We retain your personal information only as long as necessary:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Active accounts: Until you delete your account</li>
            <li>Inactive accounts: 2 years after last activity</li>
            <li>Payment information: 7 years for tax purposes</li>
            <li>Resume content: Until you delete it</li>
          </ul>
          <p className="mt-4">
            You can delete your account and all associated data at any time
            through your account settings.
          </p>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 7,
      title: 'Cookies and Tracking',
      icon: <Cookie size={24} />,
      content: (
        <div>
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Remember your preferences</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Personalize content and ads</li>
          </ul>
          <p className="mt-4">
            You can control cookies through your browser settings. Disabling
            cookies may affect site functionality.
          </p>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 8,
      title: 'International Data Transfers',
      icon: <Globe size={24} />,
      content: (
        <div>
          <p>
            Your information may be transferred to and processed in countries
            outside your jurisdiction. We ensure all transfers comply with
            applicable data protection laws through:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>EU Standard Contractual Clauses</li>
            <li>Adequacy decisions</li>
            <li>Other approved transfer mechanisms</li>
          </ul>
        </div>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 9,
      title: "Children's Privacy",
      icon: <Baby size={24} />,
      content: (
        <p>
          Our services are not directed to individuals under 16. We do not
          knowingly collect personal information from children. If we become
          aware that a child has provided us with personal information, we will
          delete it immediately.
        </p>
      ),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 10,
      title: 'Policy Changes',
      icon: <Bell size={24} />,
      content: (
        <div>
          <p>
            We may update this Privacy Policy periodically. We will notify you
            of significant changes by:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Posting a notice on our website</li>
            <li>Sending an email notification</li>
            <li>Updating the "Last Updated" date</li>
          </ul>
          <p className="mt-4">
            We encourage you to review this policy periodically.
          </p>
        </div>
      ),
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
        <title>Privacy Policy - CV Craft</title>
        <meta
          name="description"
          content="Learn how CV Craft protects your personal information and respects your privacy"
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
            Privacy Policy
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
            Your Privacy Matters
          </span>
        </div>
        <p className="text-xl text-gray-700">
          At CV Craft, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use our resume building services.
        </p>
      </motion.div>

      {/* Privacy Cards */}
      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {privacySections.map((section) => (
          <motion.div
            key={section.id}
            variants={cardAnimation}
            whileHover={{
              y: -10,
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            className={`bg-white rounded-xl overflow-hidden shadow-lg border-t-8 border-blue-500 transition-all duration-300`}
          >
            <div
              className={`p-5 bg-gradient-to-r ${section.color} text-white flex items-center`}
            >
              <div className="bg-white/20 p-3 rounded-lg mr-4">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <div className="p-6">
              <div className="text-gray-700">{section.content}</div>
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
            If you have questions about this Privacy Policy, please contact us:
          </p>

          <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
            <p className="text-gray-800 mb-3">
              <strong>Email:</strong> privacy@creativeresume.com
            </p>
            <p className="text-gray-800 mb-3">
              <strong>Mail:</strong> Creative Resume Privacy Officer
              <br />
              123 Data Protection Lane
              <br />
              San Francisco, CA 94107
            </p>
            <p className="text-gray-800">
              <strong>EU/UK Residents:</strong> dpo@creativeresume.com
            </p>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
