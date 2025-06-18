'use client';

import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/app/components/Footer/page';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
    'monthly'
  );
  const [activeTab, setActiveTab] = useState<'individual' | 'team'>(
    'individual'
  );

  const pricingPlans = {
    individual: [
      {
        name: 'Free',
        price: '$0',
        description: 'Basic resume creation',
        cta: 'Get Started',
        popular: false,
        features: [
          '3 resume templates',
          'Basic formatting options',
          'PDF download',
          'Limited content suggestions',
          'Standard ATS optimization',
        ],
      },
      {
        name: 'Professional',
        price: billingCycle === 'annual' ? '$48/year' : '$5/month',
        description: 'For serious job seekers',
        cta: 'Start Free Trial',
        popular: true,
        features: [
          'All 50+ resume templates',
          'Advanced formatting tools',
          'Unlimited PDF downloads',
          'Smart content suggestions',
          'Enhanced ATS optimization',
          'Cover letter builder',
          '5 resume versions',
          'Email support',
        ],
      },
      {
        name: 'Premium',
        price: billingCycle === 'annual' ? '$84/year' : '$8/month',
        description: 'Complete career toolkit',
        cta: 'Start Free Trial',
        popular: false,
        features: [
          'Everything in Professional',
          'LinkedIn profile makeover',
          'Interview preparation guides',
          'Priority email support',
          'Unlimited resume versions',
          'Career coaching discounts',
          'Resume review service (1/year)',
        ],
      },
    ],
    team: [
      {
        name: 'Starter',
        price: billingCycle === 'annual' ? '$180/year' : '$18/month',
        description: 'Small teams up to 5 users',
        cta: 'Contact Sales',
        popular: false,
        features: [
          '5 user accounts',
          'All Professional features',
          'Centralized billing',
          'Usage analytics',
          'Basic team management',
        ],
      },
      {
        name: 'Business',
        price: billingCycle === 'annual' ? '$300/year' : '$30/month',
        description: 'Growing teams up to 15 users',
        cta: 'Contact Sales',
        popular: true,
        features: [
          '15 user accounts',
          'All Premium features',
          'Advanced analytics',
          'Dedicated account manager',
          'Priority support',
          'Custom templates',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Large organizations',
        cta: 'Contact Sales',
        popular: false,
        features: [
          'Unlimited user accounts',
          'Single sign-on (SSO)',
          'API access',
          'Custom development',
          'Dedicated support',
          'Training sessions',
          'Volume discounts',
        ],
      },
    ],
  };

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! Our Professional and Premium plans come with a 7-day free trial. No credit card required.',
    },
    {
      question: 'Can I switch plans later?',
      answer:
        'Absolutely. You can upgrade, downgrade, or cancel anytime from your account settings.',
    },
    {
      question: 'How does the annual billing work?',
      answer:
        'Annual billing gives you 2 months free compared to monthly billing. You pay once per year and your subscription automatically renews unless canceled.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for Enterprise plans we also accept bank transfers.',
    },
    {
      question: 'Do you offer discounts for students?',
      answer:
        'Yes! Students get 50% off all individual plans with a valid .edu email address. Contact our support team to claim your discount.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer:
        "You can cancel anytime from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your billing period.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      content:
        'The Professional plan helped me land 3 interviews in my first week of searching. The ATS optimization is worth every penny!',
      avatar: '/avatar1.svg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Recent Graduate',
      content:
        'As a student, the discount made Premium affordable. The interview guides and LinkedIn tools gave me a huge advantage.',
      avatar: '/avatar2.svg',
    },
    {
      id: 3,
      name: 'TechStart Inc.',
      role: 'HR Department',
      content:
        'We use the Business plan for our recruitment team. The centralized billing and analytics save us hours every month.',
      avatar: '/avatar3.svg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing | Professional CV Builder</title>
        <meta
          name="description"
          content="Choose the right plan for your resume building needs. Free and premium options available."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-indigo-700">
              CV Builder Pro
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors duration-200"
              >
                Templates
              </a>
              <a
                href="#"
                className="font-medium text-indigo-700 border-b-2 border-indigo-700 transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-700 transition-colors duration-200"
              >
                Resources
              </a>
            </nav>
            <div>
              <a
                href="#"
                className="text-indigo-700 hover:text-indigo-800 font-medium mr-4 transition-colors duration-200"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Create CV
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 animate-fadeIn animation-delay-100">
              Choose the plan that fits your needs. No hidden fees, cancel
              anytime.
            </p>

            {/* Billing toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white bg-opacity-10 rounded-full p-1 inline-flex">
                <button
                  onClick={() => setActiveTab('individual')}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    activeTab === 'individual'
                      ? 'bg-white text-indigo-700'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  Individuals
                </button>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    activeTab === 'team'
                      ? 'bg-white text-indigo-700'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  Teams
                </button>
              </div>
            </div>

            {/* Billing cycle toggle */}
            <div className="flex justify-center items-center mb-2 animate-fadeIn animation-delay-200">
              <span
                className={`mr-4 transition-colors duration-200 ${
                  billingCycle === 'monthly' ? 'font-medium' : 'text-gray-300'
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle((prev) =>
                    prev === 'monthly' ? 'annual' : 'monthly'
                  )
                }
                className="w-14 h-8 bg-indigo-600 rounded-full p-1 focus:outline-none transition-colors duration-200"
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    billingCycle === 'annual' ? 'translate-x-6' : ''
                  }`}
                ></div>
              </button>
              <span
                className={`ml-4 transition-colors duration-200 ${
                  billingCycle === 'annual' ? 'font-medium' : 'text-gray-300'
                }`}
              >
                Annual{' '}
                <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded ml-1">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 -mt-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans[activeTab].map((plan, index) => (
                <div
                  key={index}
                  className={`
                    bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      plan.popular
                        ? 'border-2 border-indigo-500 transform md:-translate-y-4'
                        : 'border border-gray-200'
                    }
                    hover:shadow-xl hover:-translate-y-1
                  `}
                >
                  {plan.popular && (
                    <div className="bg-indigo-600 text-white text-center py-1 text-sm font-medium animate-pulse">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {billingCycle === 'annual' &&
                        plan.price !== 'Custom' &&
                        plan.price !== '$0' && (
                          <span className="text-gray-500 ml-2">/year</span>
                        )}
                      {billingCycle === 'monthly' &&
                        plan.price !== 'Custom' &&
                        plan.price !== '$0' && (
                          <span className="text-gray-500 ml-2">/month</span>
                        )}
                    </div>
                    <button
                      className={`w-full py-3 px-4 rounded-lg font-medium mb-8 transition-all duration-200 ${
                        plan.popular
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {plan.cta}
                    </button>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start transition-opacity duration-200 hover:opacity-90"
                        >
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">
              Plan Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr>
                    <th className="text-left pb-6 font-medium text-gray-500">
                      Features
                    </th>
                    {pricingPlans.individual.map((plan, index) => (
                      <th
                        key={index}
                        className="pb-6 font-medium text-gray-900 animate-fadeIn"
                      >
                        {plan.name}
                      </th>
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
                    ['Support', 'Community', 'Email', 'Priority'],
                  ].map(([feature, ...values], rowIndex) => (
                    <tr key={rowIndex} className="animate-fadeIn">
                      <td className="py-4 text-gray-700">{feature}</td>
                      {values.map((value, colIndex) => (
                        <td key={colIndex} className="py-4 text-center">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 animate-fadeIn"
                >
                  <button className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-indigo-700 focus:outline-none transition-colors duration-200">
                    <span>{faq.question}</span>
                    <svg
                      className="h-5 w-5 text-gray-500 transition-transform duration-300"
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
                  </button>
                  <div className="mt-2 text-gray-600 transition-all duration-300">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fadeIn">
              Ready to Build Your Perfect Resume?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-100">
              Join thousands of professionals who landed their dream jobs with
              CV Builder Pro
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Get Started - It's Free
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Compare Plans
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
