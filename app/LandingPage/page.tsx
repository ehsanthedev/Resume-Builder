// app/page.js (for Next.js 13+ App Router)
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Craft Your Perfect CV</h1>
          <p className="text-xl md:text-2xl mb-8">Build a professional CV that gets you noticed</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/builder" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
              Start Building Now
            </Link>
            <Link href="/learn" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Learn CV Tips
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
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
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Use Creative CV?</h2>
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
              <div key={index} className="mb-8 last:mb-0">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-700">"Creative CV helped me land 3 interviews in my first week of applying. The clean design made my experience stand out."</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700">"As a recent graduate, I was struggling to get noticed. Creative CV's professional layout finally got me the responses I wanted."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream CV?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of professionals who improved their job prospects with Creative CV</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
              Get Started Free
            </Link>
            <Link href="/demo" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
              See Live Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}