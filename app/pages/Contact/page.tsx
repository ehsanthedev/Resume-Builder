// app/pages/Contact.tsx
'use client';
import Head from 'next/head';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  User,
  MailCheck,
  CreditCard,
  FileText,
} from 'lucide-react';
import Footer from '@/app/components/Footer/page';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactCards = [
    {
      id: 1,
      title: 'Email Us',
      description: 'Our support team is ready to help',
      icon: <Mail size={36} />,
      content: 'support@cvcraft.com',
      color: 'from-indigo-500 to-blue-500',
      action: 'mailto:support@cvcraft.com',
    },
    {
      id: 2,
      title: 'Call Us',
      description: 'Speak directly with our team',
      icon: <Phone size={36} />,
      content: '+1 (555) 123-4567',
      color: 'from-indigo-500 to-blue-500',
      action: 'tel:+15551234567',
    },
    {
      id: 3,
      title: 'Visit Us',
      description: 'Our headquarters location',
      icon: <MapPin size={36} />,
      content: '123 Resume Street, San Francisco, CA 94107',
      color: 'from-indigo-500 to-blue-500',
      action: 'https://maps.google.com',
    },
    {
      id: 4,
      title: 'Support Hours',
      description: "When we're available",
      icon: <Clock size={36} />,
      content: 'Monday-Friday: 9am - 6pm PST\nWeekends: 10am - 4pm PST',
      color: 'from-indigo-500 to-blue-500',
      action: null,
    },
  ];

  const supportTopics = [
    {
      id: 1,
      title: 'Resume Help',
      description: 'Get assistance with templates and content',
      icon: <FileText size={24} />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      title: 'Account Issues',
      description: 'Troubleshoot login or subscription problems',
      icon: <User size={24} />,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 3,
      title: 'Billing Questions',
      description: 'Manage subscriptions and payments',
      icon: <CreditCard size={24} />,
      color: 'bg-amber-100 text-amber-600',
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

  const formElementAnimation: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Head>
        <title>Contact Us - CV Craft</title>
        <meta
          name="description"
          content="Get in touch with CV Craft support team for assistance with your resume"
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            We're here to help you create the perfect resume. Reach out to our
            support team with any questions.
          </motion.p>
        </div>
      </motion.header>

      {/* Contact Cards */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardAnimation}
              whileHover={{ y: -10 }}
            >
              <div
                className={`bg-gradient-to-r ${card.color} rounded-xl overflow-hidden shadow-lg h-full`}
              >
                <div className="p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                  <p className="text-blue-100 mb-4">{card.description}</p>
                  <p className="text-white font-medium">{card.content}</p>

                  {card.action && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={card.action}
                      className="mt-4 inline-block bg-white text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition"
                    >
                      Connect
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring' }}
              className="inline-block bg-blue-100 p-4 rounded-full mb-6"
            >
              <MessageCircle className="text-blue-600" size={40} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Send us a message
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Have questions or feedback? Fill out the form below and our team
              will get back to you within 24 hours.
            </motion.p>
          </div>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 flex items-start"
            >
              <MailCheck
                className="text-green-600 mr-4 flex-shrink-0"
                size={32}
              />
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-700">
                  Thank you for contacting us. We've received your message and
                  will respond within 24 hours.
                </p>
              </div>
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl shadow-md p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={formElementAnimation}>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>

              <motion.div variants={formElementAnimation}>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div variants={formElementAnimation} className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <div className="relative">
                <HelpCircle
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="How can we help?"
                />
              </div>
            </motion.div>

            <motion.div variants={formElementAnimation} className="mb-8">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </motion.div>

            <motion.div
              variants={formElementAnimation}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg text-white font-bold transition ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </span>
                )}
              </button>
            </motion.div>
          </form>
        </div>
      </motion.section>

      {/* Support Topics */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className="inline-block bg-indigo-100 p-4 rounded-full mb-6"
            >
              <HelpCircle className="text-indigo-600" size={40} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Quick Support Resources
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Find answers to common questions in our support resources
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportTopics.map((topic) => (
              <motion.div
                key={topic.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
              >
                <div
                  className={`${topic.color} p-3 rounded-lg inline-block mb-4`}
                >
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                  Get help
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="/pages/FAQ"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md transition"
            >
              <HelpCircle className="mr-2" size={20} />
              Visit Help Center
            </a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ContactPage;
