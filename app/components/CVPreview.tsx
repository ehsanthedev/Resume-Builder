// app/components/CVPreviews.tsx
'use client';

import React from 'react';

// Professional CVs
export const ProfessionalCV1 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="border-b border-gray-300 pb-1 mb-1">
      <h2 className="font-bold">John Anderson</h2>
      <p className="text-gray-600">Senior Software Engineer</p>
    </div>
    <div className="grid grid-cols-2 gap-1">
      <div>
        <p className="font-semibold">Contact</p>
        <p>john@example.com</p>
        <p>(123) 456-7890</p>
      </div>
      <div>
        <p className="font-semibold">Skills</p>
        <p>JavaScript, React, Node.js</p>
      </div>
    </div>
    <div className="mt-1">
      <p className="font-semibold">Experience</p>
      <p>Senior Dev at TechCorp (2020-Present)</p>
    </div>
  </div>
);

export const ProfessionalCV2 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="border-b border-gray-300 pb-1 mb-1">
      <h2 className="font-bold">Sarah Johnson</h2>
      <p className="text-gray-600">Product Manager</p>
    </div>
    <div>
      <p className="font-semibold">Experience</p>
      <p>PM Lead at InnovateCo (2018-Present)</p>
      <p>Associate PM at StartUp Inc (2016-2018)</p>
    </div>
    <div className="mt-1">
      <p className="font-semibold">Education</p>
      <p>MBA, Harvard Business School</p>
    </div>
  </div>
);

export const ProfessionalCV3 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="text-center mb-1">
      <h2 className="font-bold">Michael Chen</h2>
      <p className="text-gray-600">Data Scientist</p>
    </div>
    <div className="flex justify-between">
      <div>
        <p className="font-semibold">Skills</p>
        <p>Python, SQL, ML</p>
      </div>
      <div>
        <p className="font-semibold">Projects</p>
        <p>5+ research papers</p>
      </div>
    </div>
  </div>
);

// Creative CVs
export const CreativeCV1 = () => (
  <div className="cv-preview bg-white p-3 text-xs" style={{ fontFamily: 'cursive' }}>
    <div className="text-center mb-1">
      <h2 className="font-bold text-lg">Emma Rodriguez</h2>
      <p className="text-purple-600">Graphic Designer & Illustrator</p>
    </div>
    <div className="flex">
      <div className="w-1/3 border-r pr-1">
        <p>Portfolio: emma.design</p>
      </div>
      <div className="w-2/3 pl-1">
        <p>Specializing in brand identity and digital illustration</p>
      </div>
    </div>
  </div>
);

export const CreativeCV2 = () => (
  <div className="cv-preview bg-white p-3 text-xs" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
    <div className="flex items-center mb-1">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
      <div>
        <h2 className="font-bold">Alex Morgan</h2>
        <p>Creative Director</p>
      </div>
    </div>
    <p className="italic">"Transforming ideas into visual experiences"</p>
  </div>
);

export const CreativeCV3 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="grid grid-cols-3 gap-1">
      <div className="col-span-1 bg-yellow-100 p-1">
        <p className="font-bold">Skills</p>
        <p>UI/UX</p>
        <p>Motion</p>
        <p>Branding</p>
      </div>
      <div className="col-span-2">
        <h2 className="font-bold text-lg">Jamie Smith</h2>
        <p>Digital Artist</p>
        <p className="mt-1">Exhibitions: NY, London, Tokyo</p>
      </div>
    </div>
  </div>
);

// Minimalist CVs
export const MinimalistCV1 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="text-center">
      <h2 className="font-bold">David Wilson</h2>
      <p>Software Developer</p>
    </div>
    <div className="mt-2">
      <p className="font-semibold border-t pt-1">Experience</p>
      <p>DevOps Engineer - 5 years</p>
      <p className="font-semibold border-t pt-1 mt-1">Education</p>
      <p>BSc Computer Science</p>
    </div>
  </div>
);

export const MinimalistCV2 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="flex justify-between">
      <div>
        <h2 className="font-bold">Lisa Kim</h2>
        <p>UX Researcher</p>
      </div>
      <div className="text-right">
        <p>lisa@example.com</p>
        <p>(987) 654-3210</p>
      </div>
    </div>
    <div className="mt-2">
      <p>Google | Meta | Netflix</p>
    </div>
  </div>
);

export const MinimalistCV3 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <h2 className="font-bold mb-1">Thomas Brown</h2>
    <div className="space-y-1">
      <p><span className="font-semibold">Role:</span> Systems Architect</p>
      <p><span className="font-semibold">Tech:</span> AWS, Kubernetes, Terraform</p>
      <p><span className="font-semibold">Cert:</span> AWS Solutions Architect</p>
    </div>
  </div>
);

// Executive CVs
export const ExecutiveCV1 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="border-b-2 border-gray-800 pb-1 mb-1">
      <h2 className="font-bold text-lg">Robert Johnson</h2>
      <p className="text-gray-600">Chief Technology Officer</p>
    </div>
    <div className="grid grid-cols-3 gap-1">
      <div className="col-span-1">
        <p className="font-semibold">Leadership</p>
      </div>
      <div className="col-span-2">
        <p>15+ years in tech leadership</p>
        <p>Managed teams up to 200+</p>
      </div>
    </div>
    <div className="mt-1">
      <p className="font-semibold">Companies</p>
      <p>Fortune 500 tech firms</p>
    </div>
  </div>
);

export const ExecutiveCV2 = () => (
  <div className="cv-preview bg-white p-3 text-xs" style={{ background: '#f8f9fa' }}>
    <div className="flex">
      <div className="w-1/3 pr-1 border-r">
        <h2 className="font-bold">Elizabeth Taylor</h2>
        <p>CFO</p>
      </div>
      <div className="w-2/3 pl-1">
        <p className="font-semibold">Achievements</p>
        <p>+$500M revenue growth</p>
        <p>Successful IPO in 2020</p>
      </div>
    </div>
    <div className="mt-1 border-t pt-1">
      <p>Harvard MBA | Stanford BS</p>
    </div>
  </div>
);

export const ExecutiveCV3 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="text-center mb-1">
      <h2 className="font-bold">James Wilson</h2>
      <p className="text-gray-600">VP of Operations</p>
    </div>
    <div className="flex justify-around">
      <div className="text-center">
        <p className="font-semibold">Teams</p>
        <p>15+</p>
      </div>
      <div className="text-center">
        <p className="font-semibold">Revenue</p>
        <p>$1.2B+</p>
      </div>
      <div className="text-center">
        <p className="font-semibold">Efficiency</p>
        <p>+35%</p>
      </div>
    </div>
  </div>
);

// Student CVs
export const StudentCV1 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="text-center mb-1">
      <h2 className="font-bold">Sophia Martinez</h2>
      <p>Computer Science Student</p>
    </div>
    <div className="grid grid-cols-2 gap-1">
      <div>
        <p className="font-semibold">Education</p>
        <p>MIT '24 | GPA 3.9</p>
      </div>
      <div>
        <p className="font-semibold">Projects</p>
        <p>5+ hackathons</p>
      </div>
    </div>
    <div className="mt-1">
      <p className="font-semibold">Internships</p>
      <p>Google, Microsoft</p>
    </div>
  </div>
);

export const StudentCV2 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <h2 className="font-bold">Daniel Lee</h2>
    <p>Business Administration Student</p>
    <div className="mt-1">
      <p className="font-semibold">Leadership</p>
      <p>Student Body President</p>
      <p>Business Club Founder</p>
    </div>
    <div className="mt-1">
      <p className="font-semibold">Skills</p>
      <p>Excel, PPT, Market Analysis</p>
    </div>
  </div>
);

export const StudentCV3 = () => (
  <div className="cv-preview bg-white p-3 text-xs">
    <div className="flex items-center mb-1">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
      <div>
        <h2 className="font-bold">Olivia Davis</h2>
        <p>Psychology Major</p>
      </div>
    </div>
    <div>
      <p className="font-semibold">Research</p>
      <p>3 published papers</p>
      <p>RA for Prof. Smith</p>
    </div>
  </div>
);