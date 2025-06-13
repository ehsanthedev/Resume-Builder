"use client"
import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

// Define types for TypeScript
type BillingCycle = 'monthly' | 'annual';
type PlanType = 'individual' | 'team';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  cta: string;
  popular: boolean;
  features: string[];
}

interface PricingPlans {
  individual: PricingPlan[];
  team: PricingPlan[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [activeTab, setActiveTab] = useState<PlanType>('individual');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pricingPlans: PricingPlans = {
    individual: [
      // ... same as before ...
    ],
    team: [
      // ... same as before ...
    ]
  };

  const faqs: FAQItem[] = [
    // ... same as before ...
  ];

  const testimonials: Testimonial[] = [
    // ... same as before ...
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing | Professional CV Builder</title>
        <meta name="description" content="Choose the right plan for your resume building needs. Free and premium options available." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="py-16 bg-gradient-to-r from-indigo-700 to-purple-800 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              variants={slideUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p 
              variants={slideUp}
              className="text-xl max-w-2xl mx-auto mb-8"
            >
              Choose the plan that fits your needs. No hidden fees, cancel anytime.
            </motion.p>
            
            {/* Billing toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white bg-opacity-10 rounded-full p-1 inline-flex">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('individual')}
                  className={`px-6 py-2 rounded-full ${activeTab === 'individual' ? 'bg-white text-indigo-700' : 'text-white'}`}
                >
                  Individuals
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('team')}
                  className={`px-6 py-2 rounded-full ${activeTab === 'team' ? 'bg-white text-indigo-700' : 'text-white'}`}
                >
                  Teams
                </motion.button>
              </div>
            </div>
            
            {/* Billing cycle toggle */}
            <motion.div 
              variants={slideUp}
              className="flex justify-center items-center mb-2"
            >
              <span className={`mr-4 ${billingCycle === 'monthly' ? 'font-medium' : 'text-gray-300'}`}>Monthly</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
                className="w-14 h-8 bg-indigo-600 rounded-full p-1 focus:outline-none"
              >
                <motion.div 
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  className={`bg-white w-6 h-6 rounded-full shadow-md ${billingCycle === 'annual' ? 'translate-x-6' : ''}`}
                ></motion.div>
              </motion.button>
              <span className={`ml-4 ${billingCycle === 'annual' ? 'font-medium' : 'text-gray-300'}`}>Annual <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded ml-1">Save 20%</span></span>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Plans */}
        <section className="py-16 -mt-10">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {pricingPlans[activeTab].map((plan, index) => (
                <motion.div 
                  key={`${activeTab}-${index}`}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.popular ? 'border-2 border-indigo-500 transform md:-translate-y-4' : 'border border-gray-200'}`}
                >
                  {plan.popular && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-indigo-600 text-white text-center py-1 text-sm font-medium"
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {billingCycle === 'annual' && plan.price !== 'Custom' && plan.price !== '$0' && (
                        <span className="text-gray-500 ml-2">/year</span>
                      )}
                      {billingCycle === 'monthly' && plan.price !== 'Custom' && plan.price !== '$0' && (
                        <span className="text-gray-500 ml-2">/month</span>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full py-3 px-4 rounded-lg font-medium mb-8 ${
                        plan.popular 
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {plan.cta}
                    </motion.button>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Feature Comparison */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Plan Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr>
                    <th className="text-left pb-6 font-medium text-gray-500">Features</th>
                    {pricingPlans.individual.map((plan, index) => (
                      <th key={index} className="pb-6 font-medium text-gray-900">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ['Number of templates', '3', '50+', '50+'],
                    ['ATS optimization', 'Basic', 'Enhanced', 'Enhanced'],
                    ['Cover letter builder', '✕', '✓', '✓'],
                    ['Resume versions', '1', '5', 'Unlimited'],
                    ['LinkedIn tools', '✕', '✕', '✓'],
                    ['Interview guides', '✕', '✕', '✓'],
                    ['Support', 'Community', 'Email', 'Priority']
                  ].map((row, rowIndex) => (
                    <motion.tr
                      key={rowIndex}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <td className="py-4 text-gray-700">{row[0]}</td>
                      <td className="py-4 text-center">{row[1]}</td>
                      <td className="py-4 text-center">{row[2]}</td>
                      <td className="py-4 text-center">{row[3]}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center text-gray-800 mb-12"
            >
              What Our Customers Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQs */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
            <LayoutGroup>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div 
                    layout
                    key={index}
                    className="border-b border-gray-200 pb-6 cursor-pointer"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <motion.button 
                      layout
                      className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-indigo-700 focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <motion.div 
                        animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-gray-600">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </LayoutGroup>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
          className="py-16 bg-indigo-700 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Perfect Resume?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who landed their dream jobs with Creative CV Builder
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg"
              >
                Get Started - It's Free
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-bold px-8 py-3 rounded-lg"
              >
                Compare Plans
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-gray-400 py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Creative CV Builder</h3>
              <p className="mb-4">Professional resume tools to help you land your dream job</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* ... other footer sections ... */}
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Creative CV Builder. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}