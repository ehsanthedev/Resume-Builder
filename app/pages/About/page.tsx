'use client';

import Head from 'next/head';
import { motion, Variants } from 'framer-motion'; // Import Variants type
import Footer from '@/app/components/Footer/page';

// Define TypeScript interfaces
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  funFact: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'With 10+ years in HR tech, Alex started CV Builder to democratize access to professional resume tools.',
      funFact: 'Once interviewed 50 candidates in a single day!',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Lead Designer',
      bio: 'Sarah combines UX expertise with visual design to create stunning, functional CV templates.',
      funFact: 'Can spot a Times New Roman font from 50 feet away.',
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Product Developer',
      bio: 'Michael builds the technology that makes our CV builder both powerful and easy to use.',
      funFact: 'Created his first resume at age 12 for a school project.',
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Career Advisor',
      bio: 'Priya brings 15 years of recruitment experience to help craft our career guidance content.',
      funFact: 'Has read over 20,000 resumes in her career.',
    },
  ];

  const stats: Stat[] = [
    { value: '500K+', label: 'Resumes Created' },
    { value: '97%', label: 'User Satisfaction' },
    { value: '82%', label: 'Interview Rate Increase' },
    { value: '50+', label: 'Professional Templates' },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Jamal Wilson',
      role: 'Software Engineer',
      content:
        'After using CV Builder, I went from zero interview calls to five offers in two months. The ATS optimization made all the difference!',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Marketing Director',
      content:
        'The design options helped me create a resume that truly reflected my personal brand. I got compliments from every interviewer.',
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'Recent Graduate',
      content:
        'As a new grad with little experience, the content suggestions helped me highlight my skills effectively. Landed my dream job!',
    },
  ];

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring', // Use string literal
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Head>
        <title>About Us | Professional CV Builder</title>
        <meta
          name="description"
          content="Learn about our mission to help job seekers create professional resumes that get results"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 md:py-28"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeIn} className="max-w-3xl">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              We Believe Every Job Seeker Deserves a Winning Resume
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Our mission is to empower professionals with tools and knowledge
              to showcase their true potential
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition duration-300"
              >
                Build Your CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition"
              >
                Explore Templates
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"></div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-blue-600 rounded-lg p-4 shadow-xl"
                >
                  <div className="text-white text-center">
                    <p className="text-2xl font-bold">2018</p>
                    <p>Founded</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CV Builder began when our founder, a former HR director, noticed
                how many qualified candidates were being overlooked because of
                poorly crafted resumes. He realized that professional resume
                services were either too expensive or too generic.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We set out to create an accessible platform that combines expert
                knowledge with cutting-edge technology. Today, we've helped over
                500,000 job seekers create resumes that get results, with
                features like real-time content suggestions, ATS optimization,
                and professional designs.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded"
                >
                  <h3 className="font-bold text-gray-800">Our Vision</h3>
                  <p className="text-gray-600">
                    Democratize access to career advancement tools
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded"
                >
                  <h3 className="font-bold text-gray-800">Our Promise</h3>
                  <p className="text-gray-600">
                    Help every user present their best professional self
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl opacity-90">
              Our users achieve measurable success in their job search journey
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold mb-3">
                  {stat.value}
                </p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to your career success
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={cardAnimation}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-center mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-center mb-4">{member.bio}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      Fun fact: {member.funFact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              Principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={cardAnimation}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <div className="text-blue-600 text-2xl">✓</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Empowerment
              </h3>
              <p className="text-gray-600">
                We believe everyone deserves the tools to showcase their
                professional worth, regardless of background or budget.
              </p>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <div className="text-indigo-600 text-2xl">✓</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously evolve our platform with cutting-edge features
                based on user feedback and industry trends.
              </p>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <div className="text-purple-600 text-2xl">✓</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We provide honest, expert-backed advice and transparent pricing
                with no hidden fees or upsells.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who transformed their careers
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardAnimation}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-8 relative"
              >
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-blue-500 rounded-full p-2">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                </div>
                <div className="mt-6">
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Career?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-8"
          >
            Join thousands of professionals who have landed their dream jobs
            with CV Builder
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg text-lg shadow-lg"
          >
            Create Your Professional CV Now
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-blue-200"
          >
            Free to start • No credit card required
          </motion.p>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
